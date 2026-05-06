'use client';
import { useEffect, useState } from 'react';
import { getProgress, markQuestionAnswered } from './progress-store';

export default function QuestionActionButtons({ questionId, title, href }: { questionId: string; title: string; href: string }) {
  const [done, setDone] = useState(false);
  useEffect(() => setDone(getProgress().answeredQuestions.includes(questionId)), [questionId]);
  return <button onClick={() => { markQuestionAnswered(questionId, title, href); setDone(true); }} disabled={done} className="rounded-lg border border-[#f3c76a] px-4 py-2 text-[#f3c76a] disabled:opacity-60">{done ? 'Als geübt gespeichert' : 'Als geübt markieren'}</button>;
}
