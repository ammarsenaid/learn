import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCertificateBySlug, getChaptersByCertificateId, getQuestionsByCertificateId } from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const metadata: Metadata = { title: 'Prüfungsfragen Taxi & Mietwagen — FachkundePilot' };

function toTags(tags?: string[] | string | null): string[] {
  if (!tags) return [];
  return Array.isArray(tags) ? tags : tags.split(',').map((t) => t.trim()).filter(Boolean);
}

export default async function QuestionsOverviewPage() {
  const certificate = await getCertificateBySlug('taxi-mietwagen');
  if (!certificate) return notFound();
  const [chapters, questions] = await Promise.all([getChaptersByCertificateId(certificate.id), getQuestionsByCertificateId(certificate.id)]);

  return <main className="min-h-screen bg-[#03111f] px-5 py-10 text-slate-100"><div className="mx-auto max-w-6xl space-y-6">
    <header className="rounded-2xl border border-[#1e385c] bg-[#09223f] p-6"><h1 className="text-3xl font-bold text-white">Prüfungsfragen Taxi & Mietwagen</h1><p className="mt-2 text-slate-300">Trainiere echte Prüfungslogik mit Antworten und Erklärungen.</p><Link href="/lernen/taxi-mietwagen/simulation" className="mt-4 inline-flex rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#03111f]">Simulation starten</Link></header>
    <section className="grid gap-4 sm:grid-cols-3">{[
      ['Fragen gesamt', questions.length], ['Kapitel verbunden', chapters.length], ['Simulation bereit', questions.length > 0 ? 'Ja' : 'Nein'],
    ].map(([label,value]) => <article key={String(label)} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">{label}</p><p className="mt-2 text-2xl font-bold text-white">{value}</p></article>)}</section>
    <section className="space-y-3">{questions.map((q) => <article key={q.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-5"><p className="font-semibold text-white">{q.question_de}</p><p className="mt-2 text-sm text-slate-300">Schwierigkeit: {q.difficulty ?? 'mittel'}</p>{toTags(q.tags).length > 0 ? <p className="text-xs text-sky-200">Tags: {toTags(q.tags).join(', ')}</p> : null}<Link href={`/lernen/taxi-mietwagen/fragen/${q.id}`} className="mt-4 inline-flex rounded-lg border border-sky-400 px-3 py-1.5 text-sm text-sky-200">Frage öffnen</Link></article>)}</section>
  </div></main>;
}
