import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ChapterProgressClient from '@/components/learning/ChapterProgressClient';
import {
  getCertificateBySlug,
  getChapterBySlug,
  getFlashcardsByChapterId,
  getGlossaryByCertificateId,
  getLessonsByChapterId,
  getQuestionsByChapterId,
} from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function statusLabel(status?: string | null) {
  if (!status || status === 'published') return 'Aktiv';
  if (status === 'draft') return 'Entwurf';
  return status;
}

function tagsText(tags?: string[] | string | null) {
  if (!tags) return null;
  return Array.isArray(tags) ? tags.join(', ') : tags;
}

export async function generateMetadata({ params }: { params: Promise<{ chapterSlug: string }> }): Promise<Metadata> {
  const { chapterSlug } = await params;
  const certificate = await getCertificateBySlug('taxi-mietwagen');
  if (!certificate) return { title: 'Kapitel — FachkundePilot' };
  const chapter = await getChapterBySlug(certificate.id, chapterSlug);
  if (!chapter) return { title: 'Kapitel nicht gefunden — FachkundePilot' };

  return {
    title: `${chapter.title} — Taxi & Mietwagen Lernen — FachkundePilot`,
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ chapterSlug: string }> }) {
  const { chapterSlug } = await params;
  const certificate = await getCertificateBySlug('taxi-mietwagen');
  if (!certificate) return notFound();

  const chapter = await getChapterBySlug(certificate.id, chapterSlug);
  if (!chapter) return notFound();

  const [lessons, flashcards, questions, glossary] = await Promise.all([
    getLessonsByChapterId(chapter.id),
    getFlashcardsByChapterId(chapter.id),
    getQuestionsByChapterId(chapter.id),
    getGlossaryByCertificateId(certificate.id),
  ]);

  const chapterTokens = `${chapter.title} ${chapter.description ?? ''}`.toLowerCase().split(/\s+/).filter((t) => t.length > 3);
  const glossaryItems = glossary.filter((term) => {
    const hay = `${term.category ?? ''} ${term.term}`.toLowerCase();
    return chapterTokens.some((token) => hay.includes(token));
  });

  return (
    <main className="min-h-screen bg-[#03111f] px-5 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-2xl border border-[#1e385c] bg-[#09223f] p-6">
          <p className="text-sm text-sky-200">{certificate.title}</p>
          <h1 className="mt-1 text-3xl font-bold text-white">{chapter.title}</h1>
          <p className="mt-2 text-slate-300">{chapter.description}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-[#2f5d90] px-3 py-1">{statusLabel(chapter.status)}</span>
            {chapter.estimated_minutes ? <span className="rounded-full border border-[#2f5d90] px-3 py-1">~ {chapter.estimated_minutes} Minuten</span> : null}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={lessons[0] ? `/lernen/taxi-mietwagen/${lessons[0].slug}` : '/lernen/taxi-mietwagen'} className="rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#1a2538]">Erste Lektion öffnen</Link>
            <Link href="/lernen/taxi-mietwagen" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Zurück zum Lernpfad</Link>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
          <h2 className="text-xl font-semibold text-white">Kapitel-Fortschritt</h2>
          <div className="mt-4">
            <ChapterProgressClient lessonIds={lessons.map((l) => l.id)} flashcardIds={flashcards.map((c) => c.id)} questionIds={questions.map((q) => q.id)} />
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
          <h2 className="text-xl font-semibold text-white">Lektionen</h2>
          {lessons.length === 0 ? <p className="mt-3 text-sm text-slate-400">Noch keine Lektionen in diesem Kapitel gepflegt.</p> : <div className="mt-4 grid gap-3 md:grid-cols-2">{lessons.map((lesson) => <article key={lesson.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><h3 className="font-semibold text-white">{lesson.title}</h3>{lesson.summary ? <p className="mt-1 text-sm text-slate-300">{lesson.summary}</p> : null}<div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">{lesson.status ? <span>{statusLabel(lesson.status)}</span> : null}{lesson.estimated_minutes ? <span>~ {lesson.estimated_minutes} Minuten</span> : null}</div><Link href={`/lernen/taxi-mietwagen/${lesson.slug}`} className="mt-3 inline-flex rounded-lg border border-sky-400 px-3 py-1.5 text-sm text-sky-200">Lektion öffnen</Link></article>)}</div>}
        </section>

        <section className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
          <h2 className="text-xl font-semibold text-white">Lernkarten</h2>
          {flashcards.length === 0 ? <p className="mt-3 text-sm text-slate-400">Noch keine Lernkarten in diesem Kapitel gepflegt.</p> : <div className="mt-4 grid gap-3 md:grid-cols-2">{flashcards.map((card) => <article key={card.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><h3 className="font-semibold text-white">{card.front_de}</h3><p className="mt-1 text-xs text-slate-300">{card.difficulty ?? 'Standard'}</p>{tagsText(card.tags) ? <p className="text-xs text-slate-400">Tags: {tagsText(card.tags)}</p> : null}<Link href={`/lernen/taxi-mietwagen/karten/${card.id}`} className="mt-3 inline-flex rounded-lg border border-sky-400 px-3 py-1.5 text-sm text-sky-200">Karte öffnen</Link></article>)}</div>}
        </section>

        <section className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
          <h2 className="text-xl font-semibold text-white">Prüfungsfragen</h2>
          {questions.length === 0 ? <p className="mt-3 text-sm text-slate-400">Noch keine Prüfungsfragen in diesem Kapitel gepflegt.</p> : <div className="mt-4 grid gap-3 md:grid-cols-2">{questions.map((q) => <article key={q.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><h3 className="font-semibold text-white">{q.question_de.slice(0, 140)}...</h3><p className="mt-1 text-xs text-slate-300">{q.difficulty ?? 'Standard'}</p>{tagsText(q.tags) ? <p className="text-xs text-slate-400">Tags: {tagsText(q.tags)}</p> : null}<Link href={`/lernen/taxi-mietwagen/fragen/${q.id}`} className="mt-3 inline-flex rounded-lg border border-sky-400 px-3 py-1.5 text-sm text-sky-200">Frage öffnen</Link></article>)}</div>}
        </section>

        <section className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
          <h2 className="text-xl font-semibold text-white">Glossar</h2>
          {(glossaryItems.length === 0 ? glossary.slice(0, 8) : glossaryItems).length === 0 ? <p className="mt-3 text-sm text-slate-400">Keine Glossarbegriffe verfügbar.</p> : <div className="mt-4 grid gap-3 md:grid-cols-2">{(glossaryItems.length === 0 ? glossary.slice(0, 8) : glossaryItems).map((term) => <article key={term.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><h3 className="font-semibold text-white">{term.term}</h3>{term.simple_de ? <p className="mt-1 text-sm text-slate-300">{term.simple_de}</p> : null}{term.explanation_ar ? <p className="mt-1 text-sm text-sky-100">{term.explanation_ar}</p> : null}{term.category ? <p className="mt-2 text-xs text-slate-400">Kategorie: {term.category}</p> : null}</article>)}</div>}
        </section>

        <section className="flex flex-wrap gap-3 rounded-2xl border border-[#1e385c] bg-[#09223f] p-6">
          <Link href="/lernen/taxi-mietwagen/simulation" className="rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#1a2538]">Zur Prüfungssimulation</Link>
          <Link href="/dashboard" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Zurück zum Dashboard</Link>
          <Link href="/lernen/taxi-mietwagen" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Alle Kapitel</Link>
        </section>
      </div>
    </main>
  );
}
