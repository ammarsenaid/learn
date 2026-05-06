import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCertificateBySlug, getChapterById, getFlashcardsByLessonId, getLessonBySlug, getQuestionsByChapterId } from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ lessonSlug: string }> }): Promise<Metadata> {
  const { lessonSlug } = await params;
  const lesson = await getLessonBySlug(lessonSlug);
  return { title: lesson ? `${lesson.title} — FachkundePilot` : 'Lektion — FachkundePilot' };
}

export default async function LessonDetailPage({ params }: { params: Promise<{ lessonSlug: string }> }) {
  const { lessonSlug } = await params;
  const lesson = await getLessonBySlug(lessonSlug);
  const certificate = await getCertificateBySlug('taxi-mietwagen');
  if (!lesson || !certificate) return notFound();
  const [chapter, flashcards, questions] = await Promise.all([
    lesson.chapter_id ? getChapterById(lesson.chapter_id) : Promise.resolve(null),
    getFlashcardsByLessonId(lesson.id),
    lesson.chapter_id ? getQuestionsByChapterId(lesson.chapter_id) : Promise.resolve([]),
  ]);

  return (
    <main className="min-h-screen bg-[#03111f] px-5 py-10 text-slate-100"><div className="mx-auto max-w-4xl space-y-6">
      <article className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
        <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
        {lesson.summary ? <p className="mt-2 text-slate-300">{lesson.summary}</p> : null}
        {chapter ? <p className="mt-3 text-sm text-sky-200">Kapitel: {chapter.title}</p> : null}
      </article>
      {lesson.content_de ? <section className="rounded-xl border border-[#214267] bg-[#0b2645] p-5"><h2 className="text-xl text-[#f3c76a]">Deutsch</h2><div className="mt-2 whitespace-pre-wrap text-slate-200">{lesson.content_de}</div></section> : null}
      {lesson.content_ar ? <section className="rounded-xl border border-[#214267] bg-[#0b2645] p-5"><h2 className="text-xl text-[#f3c76a]">العربية</h2><div className="mt-2 whitespace-pre-wrap text-slate-200">{lesson.content_ar}</div></section> : null}
      {flashcards.length > 0 ? <section className="rounded-xl border border-[#214267] bg-[#0b2645] p-5"><h2 className="text-lg font-semibold">Zugehörige Lernkarten</h2><ul className="mt-3 space-y-2">{flashcards.map((f) => <li key={f.id} className="rounded border border-[#2a4c77] p-3">{f.front_de}</li>)}</ul></section> : null}
      {questions.length > 0 ? <section className="rounded-xl border border-[#214267] bg-[#0b2645] p-5"><h2 className="text-lg font-semibold">Zugehörige Fragen</h2><ul className="mt-3 space-y-2">{questions.slice(0,8).map((q) => <li key={q.id} className="rounded border border-[#2a4c77] p-3">{q.question_de}</li>)}</ul></section> : null}
      <div className="flex flex-wrap gap-3"><Link href="/dashboard" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Zurück zum Dashboard</Link><Link href="/zertifikate/taxi-mietwagen" className="rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#03111f]">Zur Taxi-Zertifikatsseite</Link></div>
    </div></main>
  );
}
