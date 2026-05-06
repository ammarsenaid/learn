'use client';
import { useEffect, useState } from 'react';
import { getProgress, type LearningProgress } from './progress-store';

export default function ProgressSummaryClient() {
  const [progress, setProgress] = useState<LearningProgress | null>(null);
  useEffect(() => setProgress(getProgress()), []);
  if (!progress) return null;
  const last = progress.simulationAttempts[0];
  const hasAny = progress.completedLessons.length || progress.knownFlashcards.length || progress.reviewFlashcards.length || progress.answeredQuestions.length || progress.simulationAttempts.length;
  if (!hasAny) return <p className="text-slate-300">Noch kein lokaler Lernfortschritt gespeichert.</p>;
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{[
    ['Erledigte Lektionen', progress.completedLessons.length],
    ['Gewusste Karten', progress.knownFlashcards.length],
    ['Wiederholen-Karten', progress.reviewFlashcards.length],
    ['Geübte Fragen', progress.answeredQuestions.length],
    ['Letzte Simulation', last ? `${last.scorePercent}%` : '—'],
  ].map(([k, v]) => <article key={String(k)} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs text-slate-300">{k}</p><p className="mt-2 text-2xl font-bold text-white">{v}</p></article>)}</div>;
}
