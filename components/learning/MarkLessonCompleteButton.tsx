'use client';
import { useEffect, useState } from 'react';
import { getProgress, markLessonComplete } from './progress-store';

export default function MarkLessonCompleteButton({ lessonId, title, href }: { lessonId: string; title: string; href: string }) {
  const [completed, setCompleted] = useState(false);
  useEffect(() => setCompleted(getProgress().completedLessons.includes(lessonId)), [lessonId]);
  return <button onClick={() => { markLessonComplete(lessonId, title, href); setCompleted(true); }} disabled={completed} className="rounded-lg border border-[#f3c76a] bg-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#03111f] disabled:opacity-60">{completed ? 'Als erledigt gespeichert' : 'Lektion als erledigt markieren'}</button>;
}
