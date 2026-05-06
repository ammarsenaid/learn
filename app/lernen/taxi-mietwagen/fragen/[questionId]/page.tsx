import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getQuestionById, getQuestionOptionsByQuestionId, getQuestionsByCertificateId, getCertificateBySlug } from '@/lib/cms';
import QuestionActionButtons from '@/components/learning/QuestionActionButtons';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ questionId: string }> }): Promise<Metadata> {
  const { questionId } = await params;
  const question = await getQuestionById(questionId);
  return { title: question ? `${question.question_de.slice(0, 60)} — Prüfungsfrage — FachkundePilot` : 'Prüfungsfrage — FachkundePilot' };
}

export default async function QuestionDetailPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params;
  const [certificate, question] = await Promise.all([getCertificateBySlug('taxi-mietwagen'), getQuestionById(questionId)]);
  if (!certificate || !question) return notFound();
  const [options, allQuestions] = await Promise.all([
    getQuestionOptionsByQuestionId(question.id),
    getQuestionsByCertificateId(certificate.id),
  ]);
  const currentIndex = allQuestions.findIndex((q) => q.id === question.id);
  const nextQuestion = currentIndex >= 0 ? allQuestions[currentIndex + 1] : null;

  return <main className="min-h-screen bg-[#03111f] px-5 py-10 text-slate-100"><div className="mx-auto max-w-4xl space-y-6">
    <article className="rounded-2xl border border-[#214267] bg-[#0b2645] p-6"><p className="text-xs uppercase text-sky-200">Prüfungsfrage</p><h1 className="mt-2 text-2xl font-bold text-white">{question.question_de}</h1>
    <ul className="mt-5 space-y-3">{options.map((option) => <li key={option.id} className={`rounded-lg border p-3 ${option.is_correct ? 'border-green-500 bg-green-950/30 text-green-100' : 'border-red-500/60 bg-red-950/20 text-red-100'}`}>{option.option_text_de ?? option.option_de ?? ""}</li>)}</ul>
    {question.explanation_de ? <section className="mt-5 rounded-lg border border-[#2a4c77] bg-[#09223f] p-4"><h2 className="text-sm font-semibold text-[#f3c76a]">Erklärung (DE)</h2><p className="mt-1 text-slate-200">{question.explanation_de}</p></section> : null}
    {question.explanation_ar ? <section className="mt-3 rounded-lg border border-[#2a4c77] bg-[#09223f] p-4"><h2 className="text-sm font-semibold text-[#f3c76a]">Erklärung (AR)</h2><p className="mt-1 text-slate-200">{question.explanation_ar}</p></section> : null}
    <div className="mt-5"><QuestionActionButtons questionId={question.id} title={question.question_de.slice(0, 80)} href={`/lernen/taxi-mietwagen/fragen/${question.id}`} /></div>
    </article>
    <div className="flex flex-wrap gap-3">{nextQuestion ? <Link href={`/lernen/taxi-mietwagen/fragen/${nextQuestion.id}`} className="rounded-lg bg-[#f3c76a] px-4 py-2 font-semibold text-[#03111f]">Nächste Frage</Link> : null}<Link href="/lernen/taxi-mietwagen/fragen" className="rounded-lg border border-sky-400 px-4 py-2 text-sky-200">Zur Fragenübersicht</Link><Link href="/dashboard" className="rounded-lg border border-[#2a4c77] px-4 py-2">Zurück zum Dashboard</Link></div>
  </div></main>;
}
