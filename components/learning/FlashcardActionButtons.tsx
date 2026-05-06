'use client';
import { useEffect, useState } from 'react';
import { getProgress, markFlashcardKnown, markFlashcardReview } from './progress-store';

export default function FlashcardActionButtons({ cardId, title, href }: { cardId: string; title: string; href: string }) {
  const [state, setState] = useState<'known' | 'review' | null>(null);
  useEffect(() => {
    const p = getProgress();
    setState(p.knownFlashcards.includes(cardId) ? 'known' : p.reviewFlashcards.includes(cardId) ? 'review' : null);
  }, [cardId]);
  return <div className="mt-5 flex flex-wrap gap-3"><button onClick={() => { markFlashcardKnown(cardId, title, href); setState('known'); }} className={`rounded-lg px-4 py-2 font-semibold ${state === 'known' ? 'bg-emerald-500 text-[#03111f]' : 'bg-[#f3c76a] text-[#03111f]'}`}>Gewusst</button><button onClick={() => { markFlashcardReview(cardId, title, href); setState('review'); }} className={`rounded-lg border px-4 py-2 ${state === 'review' ? 'border-sky-300 bg-sky-900 text-sky-100' : 'border-[#f3c76a] text-[#f3c76a]'}`}>Wiederholen</button></div>;
}
