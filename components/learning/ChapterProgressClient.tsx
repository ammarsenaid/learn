'use client';

import { useEffect, useMemo, useState } from 'react';
import { getProgress } from './progress-store';

type Props = {
  lessonIds: string[];
  flashcardIds: string[];
  questionIds: string[];
};

export default function ChapterProgressClient({ lessonIds, flashcardIds, questionIds }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(0);
  const [knownFlashcards, setKnownFlashcards] = useState(0);
  const [reviewFlashcards, setReviewFlashcards] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const sets = useMemo(
    () => ({
      lesson: new Set(lessonIds),
      flashcard: new Set(flashcardIds),
      question: new Set(questionIds),
    }),
    [lessonIds, flashcardIds, questionIds],
  );

  useEffect(() => {
    const progress = getProgress();
    setCompletedLessons(progress.completedLessons.filter((id) => sets.lesson.has(id)).length);
    setKnownFlashcards(progress.knownFlashcards.filter((id) => sets.flashcard.has(id)).length);
    setReviewFlashcards(progress.reviewFlashcards.filter((id) => sets.flashcard.has(id)).length);
    setAnsweredQuestions(progress.answeredQuestions.filter((id) => sets.question.has(id)).length);
    setLoaded(true);
  }, [sets]);

  if (!loaded) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <article className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
        <p className="text-xs text-slate-300">Erledigte Lektionen</p>
        <p className="mt-2 text-2xl font-bold text-white">{completedLessons} / {lessonIds.length}</p>
      </article>
      <article className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
        <p className="text-xs text-slate-300">Gewusste Karten</p>
        <p className="mt-2 text-2xl font-bold text-white">{knownFlashcards}</p>
      </article>
      <article className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
        <p className="text-xs text-slate-300">Wiederholen-Karten</p>
        <p className="mt-2 text-2xl font-bold text-white">{reviewFlashcards}</p>
      </article>
      <article className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
        <p className="text-xs text-slate-300">Geübte Fragen</p>
        <p className="mt-2 text-2xl font-bold text-white">{answeredQuestions} / {questionIds.length}</p>
      </article>
    </div>
  );
}
