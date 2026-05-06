import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCertificateBySlug, getChaptersByCertificateId, getFlashcardsByCertificateId } from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const metadata: Metadata = { title: 'Lernkarten Taxi & Mietwagen — FachkundePilot' };

function toTags(tags?: string[] | string | null): string[] {
  if (!tags) return [];
  return Array.isArray(tags) ? tags : tags.split(',').map((t) => t.trim()).filter(Boolean);
}

export default async function FlashcardsOverviewPage() {
  const certificate = await getCertificateBySlug('taxi-mietwagen');
  if (!certificate) return notFound();
  const [chapters, flashcards] = await Promise.all([
    getChaptersByCertificateId(certificate.id),
    getFlashcardsByCertificateId(certificate.id),
  ]);

  return <main className="min-h-screen bg-[#03111f] px-5 py-10 text-slate-100"><div className="mx-auto max-w-6xl space-y-6">
    <header className="rounded-2xl border border-[#1e385c] bg-[#09223f] p-6"><h1 className="text-3xl font-bold text-white">Lernkarten Taxi & Mietwagen</h1><p className="mt-2 text-slate-300">Wiederhole wichtige Begriffe, Regeln und Prüfungslogik.</p></header>
    <section className="grid gap-4 sm:grid-cols-3">{[
      ['Lernkarten gesamt', flashcards.length],
      ['Kapitel verbunden', chapters.length],
      ['Sprachen verfügbar', certificate.languages_text.split(/\s*[,/]\s*/).filter(Boolean).length],
    ].map(([label,value]) => <article key={String(label)} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">{label}</p><p className="mt-2 text-2xl font-bold text-white">{value}</p></article>)}</section>
    <section className="grid gap-4 md:grid-cols-2">{flashcards.map((card) => <article key={card.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-5"><p className="font-semibold text-white">{card.front_de}</p><p className="mt-2 text-sm text-slate-300">Schwierigkeit: {card.difficulty ?? 'mittel'}</p>
    {toTags(card.tags).length > 0 ? <p className="mt-1 text-xs text-sky-200">Tags: {toTags(card.tags).join(', ')}</p> : null}
    <Link href={`/lernen/taxi-mietwagen/karten/${card.id}`} className="mt-4 inline-flex rounded-lg border border-sky-400 px-3 py-1.5 text-sm text-sky-200">Karte öffnen</Link></article>)}</section>
    <div className="flex flex-wrap gap-3"><Link href="/dashboard" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Zurück zum Dashboard</Link><Link href="/lernen/taxi-mietwagen" className="rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#03111f]">Lernbereich</Link></div>
  </div></main>;
}
