import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCertificateBySlug, getQuestionOptionsByQuestionId, getQuestionsByCertificateId } from '@/lib/cms';

import SimulationClient from './SimulationClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Prüfungssimulation Taxi & Mietwagen — FachkundePilot',
  description: 'Trainiere Taxi- und Mietwagen-Prüfungsfragen mit Auswertung, Erklärungen und Wiederholung.',
};

export default async function TaxiSimulationPage() {
  const certificate = await getCertificateBySlug('taxi-mietwagen');
  if (!certificate) return notFound();

  const questions = await getQuestionsByCertificateId(certificate.id);
  const questionsWithOptions = await Promise.all(
    questions.map(async (question) => ({ ...question, options: await getQuestionOptionsByQuestionId(question.id) })),
  );

  const validQuestions = questionsWithOptions.filter((question) => question.options.length > 0);

  return (
    <main className="min-h-screen bg-[#03111f] px-4 py-8 text-slate-100 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-5xl">
        <SimulationClient
          questions={validQuestions.map((question) => ({
            id: question.id,
            question_de: question.question_de,
            explanation_de: question.explanation_de,
            explanation_ar: question.explanation_ar,
            options: question.options.map((option) => ({ id: option.id, option_de: option.option_de, is_correct: option.is_correct })),
          }))}
        />
      </div>
    </main>
  );
}
