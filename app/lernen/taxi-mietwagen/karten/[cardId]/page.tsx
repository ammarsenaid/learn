import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getFlashcardById, getLessonsByCertificateId, getCertificateBySlug } from '@/lib/cms';
import FlashcardActionButtons from '@/components/learning/FlashcardActionButtons';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ cardId: string }> }): Promise<Metadata> {
  const { cardId } = await params;
  const card = await getFlashcardById(cardId);
  return { title: card ? `${card.front_de} — Lernkarte — FachkundePilot` : 'Lernkarte — FachkundePilot' };
}

function toTags(tags?: string[] | string | null): string[] {
  if (!tags) return [];
  return Array.isArray(tags) ? tags : tags.split(',').map((t) => t.trim()).filter(Boolean);
}

export default async function FlashcardDetailPage({ params }: { params: Promise<{ cardId: string }> }) {
  const { cardId } = await params;
  const [certificate, card] = await Promise.all([getCertificateBySlug('taxi-mietwagen'), getFlashcardById(cardId)]);
  if (!certificate || !card) return notFound();
  const lessons = await getLessonsByCertificateId(certificate.id);
  const lesson = card.lesson_id ? lessons.find((l) => l.id === card.lesson_id) : null;

  return <main className="min-h-screen bg-[#03111f] px-5 py-10 text-slate-100"><div className="mx-auto max-w-4xl space-y-6">
    <article className="rounded-2xl border border-[#214267] bg-[#0b2645] p-6"><p className="text-xs uppercase text-sky-200">Lernkarte</p><h1 className="mt-2 text-3xl font-bold text-white">{card.front_de}</h1>
    <div className="mt-4 rounded-xl border border-[#2a4c77] bg-[#09223f] p-4"><p className="text-sm text-slate-300">Antwort</p><p className="mt-1 text-lg text-white">{card.back_de}</p></div>
    {card.explanation_ar ? <p className="mt-4 text-slate-200">{card.explanation_ar}</p> : null}
    <p className="mt-3 text-sm text-slate-300">Schwierigkeit: {card.difficulty ?? 'mittel'}</p>
    {toTags(card.tags).length > 0 ? <p className="mt-1 text-sm text-sky-200">Tags: {toTags(card.tags).join(', ')}</p> : null}
    <FlashcardActionButtons cardId={card.id} title={card.front_de} href={`/lernen/taxi-mietwagen/karten/${card.id}`} /></article>
    <div className="flex flex-wrap gap-3"><Link href="/lernen/taxi-mietwagen/karten" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Zurück zu allen Karten</Link><Link href="/dashboard" className="rounded-lg border border-[#2a4c77] px-4 py-2">Zurück zum Dashboard</Link>{lesson ? <Link href={`/lernen/taxi-mietwagen/${lesson.slug}`} className="rounded-lg border border-[#2a4c77] px-4 py-2">Zurück zur Lektion</Link> : null}</div>
  </div></main>;
}
