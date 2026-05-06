import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCertificateBySlug, getChaptersByCertificateId, getFlashcardsByCertificateId, getGlossaryByCertificateId, getLessonsByCertificateId, getQuestionsByCertificateId } from '@/lib/cms';
import ProgressSummaryClient from '@/components/learning/ProgressSummaryClient';
import LessonCompletionBadge from '@/components/learning/LessonCompletionBadge';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const metadata: Metadata = { title: 'Taxi & Mietwagen Lernen — FachkundePilot' };

export default async function TaxiLernenPage() {
  const certificate = await getCertificateBySlug('taxi-mietwagen');
  if (!certificate) return notFound();
  const [chapters, lessons, flashcards, questions, glossary] = await Promise.all([
    getChaptersByCertificateId(certificate.id),
    getLessonsByCertificateId(certificate.id),
    getFlashcardsByCertificateId(certificate.id),
    getQuestionsByCertificateId(certificate.id),
    getGlossaryByCertificateId(certificate.id),
  ]);
  const byChapter = new Map(chapters.map((c) => [c.id, lessons.filter((l) => l.chapter_id === c.id)]));

  return (
    <main className="min-h-screen bg-[#03111f] px-5 py-10 text-slate-100"><div className="mx-auto max-w-6xl space-y-6">
      <section className="rounded-2xl border border-[#1e385c] bg-[#09223f] p-6"><h1 className="text-3xl font-bold text-white">Taxi &amp; Mietwagen Lernen</h1><p className="mt-2 text-slate-300">{certificate.description}</p>
      <p className="mt-3 text-sm text-slate-300">Kapitel {chapters.length} · Lektionen {lessons.length} · Lernkarten {flashcards.length} · Fragen {questions.length} · Glossar {glossary.length}</p><div className="mt-4"><ProgressSummaryClient /></div></section>
      {chapters.map((chapter) => <section key={chapter.id} className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-5"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-xl font-semibold text-white">{chapter.title}</h2><p className="text-sm text-slate-300">{chapter.description}</p></div><Link href={`/lernen/taxi-mietwagen/kapitel/${chapter.slug}`} className="rounded-lg border border-sky-400 px-3 py-1.5 text-sm text-sky-200">Kapitel öffnen</Link></div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">{(byChapter.get(chapter.id) ?? []).map((lesson) => <article key={lesson.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><div className="flex items-center justify-between gap-2"><h3 className="font-semibold text-white">{lesson.title}</h3><LessonCompletionBadge lessonId={lesson.id} /></div>{lesson.summary ? <p className="mt-1 text-sm text-slate-300">{lesson.summary}</p> : null}<Link href={`/lernen/taxi-mietwagen/${lesson.slug}`} className="mt-3 inline-flex rounded-lg border border-sky-400 px-3 py-1.5 text-sm text-sky-200">Lektion lesen</Link></article>)}</div>
      {(byChapter.get(chapter.id) ?? []).length === 0 ? <p className="mt-3 text-sm text-slate-400">Noch keine Lektionen in diesem Kapitel.</p> : null}</section>)}
    </div></main>
  );
}
