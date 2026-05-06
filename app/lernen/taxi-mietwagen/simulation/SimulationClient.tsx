'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { saveSimulationAttempt } from '@/components/learning/progress-store';

type SimulationOption = { id: string; option_de: string; is_correct: boolean };
type SimulationQuestion = { id: string; question_de: string; explanation_de?: string | null; explanation_ar?: string | null; options: SimulationOption[] };

export default function SimulationClient({ questions }: { questions: SimulationQuestion[] }) {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const totalQuestions = questions.length;
  const estimatedMinutes = Math.max(10, Math.ceil(totalQuestions * 1.5));
  const currentQuestion = questions[currentIndex];

  const evaluated = useMemo(() => {
    const evaluatedQuestions = questions.map((question) => {
      const selectedOptionId = answers[question.id];
      const selected = question.options.find((option) => option.id === selectedOptionId);
      const correctOption = question.options.find((option) => option.is_correct);
      return { question, correctOption, isCorrect: Boolean(selected?.is_correct) };
    });
    const correctAnswers = evaluatedQuestions.filter((item) => item.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    return { evaluatedQuestions, correctAnswers, wrongAnswers, percentage };
  }, [answers, questions, totalQuestions]);

  const resultMessage = evaluated.percentage < 60 ? 'Weiter üben' : evaluated.percentage <= 80 ? 'Gute Basis' : 'Prüfungsnah stark';
  const savedRef = useRef(false);

  useEffect(() => {
    if (submitted && !savedRef.current) {
      saveSimulationAttempt(evaluated.percentage, evaluated.correctAnswers, totalQuestions);
      savedRef.current = true;
    }
    if (!submitted) savedRef.current = false;
  }, [submitted, evaluated.percentage, evaluated.correctAnswers, totalQuestions]);

  if (!started) return <section className="rounded-2xl border border-[#1e385c] bg-[#09223f] p-6 sm:p-8"><h1 className="text-2xl font-bold text-white sm:text-3xl">Taxi &amp; Mietwagen Prüfungssimulation</h1><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">Fragen verfügbar</p><p className="mt-2 text-2xl font-bold text-white">{totalQuestions}</p></div><div className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">Geschätzte Zeit</p><p className="mt-2 text-2xl font-bold text-white">{estimatedMinutes} Min.</p></div><div className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">Bewertung</p><p className="mt-2 text-base font-semibold text-sky-200">Nur Übungsmodus</p></div></div><button onClick={() => setStarted(true)} disabled={totalQuestions === 0} className="mt-6 rounded-lg bg-[#f3c76a] px-5 py-3 font-semibold text-[#03111f] disabled:cursor-not-allowed disabled:opacity-50">Simulation starten</button></section>;

  if (submitted) {
    const wrongQuestions = evaluated.evaluatedQuestions.filter((item) => !item.isCorrect);
    return <section className="space-y-5"><article className="rounded-2xl border border-[#1e385c] bg-[#09223f] p-6 sm:p-8"><h1 className="text-2xl font-bold text-white sm:text-3xl">Simulationsergebnis</h1><div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">Punktzahl</p><p className="mt-2 text-3xl font-bold text-[#f3c76a]">{evaluated.percentage}%</p></div><div className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">Richtig</p><p className="mt-2 text-2xl font-bold text-emerald-300">{evaluated.correctAnswers}</p></div><div className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="text-xs uppercase text-slate-300">Falsch</p><p className="mt-2 text-2xl font-bold text-rose-300">{evaluated.wrongAnswers}</p></div></div><p className="mt-5 text-lg font-semibold text-sky-200">{resultMessage}</p></article><article className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6"><h2 className="text-xl font-semibold text-white">Falsch beantwortete Fragen</h2>{wrongQuestions.length === 0 ? <p className="mt-3 text-slate-200">Stark gemacht. Du hast alle Fragen korrekt beantwortet.</p> : <ul className="mt-4 space-y-3">{wrongQuestions.map((item, idx) => <li key={item.question.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><p className="font-medium text-white">{idx + 1}. {item.question.question_de}</p>{item.correctOption ? <p className="mt-2 text-sm text-emerald-200">Richtige Antwort: {item.correctOption.option_de}</p> : null}{item.question.explanation_de ? <p className="mt-2 text-sm text-slate-200">{item.question.explanation_de}</p> : null}{item.question.explanation_ar ? <p className="mt-1 text-sm text-sky-200">{item.question.explanation_ar}</p> : null}</li>)}</ul>}</article><div className="flex flex-wrap gap-3"><button onClick={() => { setSubmitted(false); setCurrentIndex(0); setAnswers({}); }} className="rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#03111f]">Nochmal starten</button><Link href="/dashboard" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Zurück zum Dashboard</Link><Link href="/lernen/taxi-mietwagen/karten" className="rounded-lg border border-[#2a4c77] px-4 py-2 text-slate-200">Lernkarten wiederholen</Link></div></section>;
  }

  if (!currentQuestion) return null;
  const selectedOptionId = answers[currentQuestion.id];

  return <section className="rounded-2xl border border-[#1e385c] bg-[#09223f] p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm font-medium text-slate-200">Frage {currentIndex + 1} von {totalQuestions}</p><p className="text-xs text-slate-400">Übungsmodus</p></div><div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#163861]"><div className="h-full rounded-full bg-[#4ca3ff]" style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }} /></div><h2 className="mt-5 text-xl font-semibold text-white">{currentQuestion.question_de}</h2><div className="mt-5 grid gap-3">{currentQuestion.options.map((option) => <button key={option.id} onClick={() => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.id }))} className={`w-full rounded-xl border p-4 text-left transition ${selectedOptionId === option.id ? 'border-[#f3c76a] bg-[#1a3553] text-white' : 'border-[#214267] bg-[#0b2645] text-slate-200 hover:border-[#4ca3ff]'}`}>{option.option_de}</button>)}</div><div className="mt-6 flex flex-wrap gap-3"><button onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} disabled={currentIndex === 0} className="rounded-lg border border-[#2a4c77] px-4 py-2 text-slate-200 disabled:opacity-50">Zurück</button>{currentIndex < totalQuestions - 1 ? <button onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions - 1))} className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Weiter</button> : <button onClick={() => setSubmitted(true)} className="rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#03111f]">Abgeben</button>}</div></section>;
}
