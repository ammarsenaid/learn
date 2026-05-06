'use client';
import { useEffect, useState } from 'react';
import { getProgress } from './progress-store';

export default function LessonCompletionBadge({ lessonId }: { lessonId: string }) {
  const [done, setDone] = useState(false);
  useEffect(() => setDone(getProgress().completedLessons.includes(lessonId)), [lessonId]);
  if (!done) return null;
  return <span className="rounded-full border border-emerald-400 px-2 py-0.5 text-xs text-emerald-200">Erledigt</span>;
}
