import type { Metadata } from 'next';
import Link from 'next/link';

import ProgressSummaryClient from '@/components/learning/ProgressSummaryClient';
import ResetProgressButton from '@/components/learning/ResetProgressButton';

import {
  getCertificateBySlug,
  getChaptersByCertificateId,
  getFlashcardsByCertificateId,
  getGlossaryByCertificateId,
  getLessonsByCertificateId,
  getQuestionsByCertificateId,
} from '@/lib/cms';
import { normalizeProgress } from '@/lib/cms';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Dashboard — FachkundePilot',
  description:
    'Learner dashboard with progress overview, learning path, daily tasks, flashcard preview, and exam simulation.',
};

type SidebarItem = { label: string; href: string; active?: boolean };
type TodayTask = { title: string; description: string; cta: string; href: string };

const sidebarItems: SidebarItem[] = [
  { label: 'Übersicht', href: '/dashboard', active: true },
  { label: 'Lernpfad', href: '/dashboard#lernpfad' },
  { label: 'Heute', href: '/dashboard#today' },
  { label: 'Lernkarten', href: '/dashboard#lernkarten' },
  { label: 'Simulation', href: '/dashboard#simulation' },
  { label: 'Rechentrainer', href: '/dashboard#rechnen' },
  { label: 'Glossar', href: '/dashboard#glossar' },
  { label: 'Fortschritt', href: '/dashboard#lokaler-fortschritt' },
];

const mathTopics = ['Dreisatz', 'Prozentrechnung', 'Kosten pro Tag / Jahr', 'Kosten pro Kilometer'];

function getStatusLabel(status?: string | null): string {
  if (!status) return 'Aktiv';
  if (status === 'published') return 'Aktiv';
  if (status === 'draft') return 'Entwurf';
  return status;
}

export default async function DashboardPage() {
  const certificate = await getCertificateBySlug('taxi-mietwagen');

  const [chapters, lessons, flashcards, questions, glossary] = certificate
    ? await Promise.all([
        getChaptersByCertificateId(certificate.id),
        getLessonsByCertificateId(certificate.id),
        getFlashcardsByCertificateId(certificate.id),
        getQuestionsByCertificateId(certificate.id),
        getGlossaryByCertificateId(certificate.id),
      ])
    : [[], [], [], [], []];

  const firstChapter = chapters[0];
  const firstFlashcard = flashcards[0];
  const firstQuestion = questions[0];

  const nextRecommendations = [
    chapters.length > 0 ? `Weiter mit: ${firstChapter?.title ?? 'Kapitel 1'}` : null,
    flashcards.length > 0 ? 'Heute: Lernkarten wiederholen' : null,
    questions.length > 0 ? 'Danach: Mini-Simulation starten' : null,
  ].filter(Boolean);

  const todayTasks: TodayTask[] = [
    flashcards.length > 0
      ? {
          title: 'Lernkarten wiederholen',
          description: `${flashcards.length} Karten sind verfügbar für deine Wiederholung.`,
          cta: 'Lernkarten öffnen',
          href: '/lernen/taxi-mietwagen/karten',
        }
      : null,
    questions.length > 0
      ? {
          title: 'Prüfungsfragen üben',
          description: `${questions.length} Fragen für Training und Prüfungssimulation.`,
          cta: 'Fragen starten',
          href: '/lernen/taxi-mietwagen/fragen',
        }
      : null,
    glossary.length > 0
      ? {
          title: 'Glossarbegriffe sichern',
          description: `${glossary.length} Begriffe kurz festigen und wiederholen.`,
          cta: 'Glossar öffnen',
          href: '/lernen/taxi-mietwagen',
        }
      : null,
    chapters.length > 0
      ? {
          title: 'Kapitel lesen',
          description: `${chapters.length} Kapitel stehen im Lernpfad bereit.`,
          cta: 'Kapitel öffnen',
          href: '/lernen/taxi-mietwagen',
        }
      : null,
  ].filter((task): task is TodayTask => task !== null);

  const strengthChapters = chapters.slice(0, 2).map((chapter) => chapter.title);
  const weaknessChapters = chapters
    .filter((chapter) => /kostenrechnung|mietwagen|versicherung/i.test(chapter.title))
    .slice(0, 3)
    .map((chapter) => chapter.title);

  const connectedMathChapter = chapters.find((chapter) => /kostenrechnung|rechnen|kalkulation/i.test(chapter.title));

  return (
    <div className="min-h-screen bg-[#03111f] text-slate-100">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row">
        <aside className="w-full border-b border-[#1e3554] bg-[#061a30] lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <div className="p-6">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold text-[#f3c76a]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f3c76a]" />
              FachkundePilot
            </Link>
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Learner App</p>

            <nav className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {sidebarItems.map((item) => (
                <Link key={item.label} href={item.href} className={`rounded-lg border px-3 py-2 text-sm transition ${
                  item.active
                    ? 'border-[#4ca3ff] bg-[#0b2645] text-white'
                    : 'border-[#1e385c] bg-[#0a2039] text-slate-300 hover:border-[#4ca3ff] hover:text-white'
                }`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <main className="w-full min-w-0 p-4 sm:p-6 lg:p-8">
          <header className="mb-6 rounded-2xl border border-[#1e385c] bg-[#09223f] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Willkommen zurück</h1>
                <p className="mt-1 text-sm text-slate-300">{certificate?.title ?? 'Taxi & Mietwagen Fachkundeprüfung'}</p>
                <p className="mt-1 text-sm text-slate-400">{certificate?.subtitle ?? 'Lernmodus'}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-lg border border-[#2a4c77] bg-[#0a2039] px-3 py-2 text-sm">DE / AR</div>
                <div className="rounded-lg border border-[#2a4c77] bg-[#0a2039] px-3 py-2 text-sm">Ahmet</div>
                <Link href="/lernen/taxi-mietwagen/simulation" className="rounded-lg bg-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#1a2538]">
                  Prüfung starten
                </Link>
              </div>
            </div>
          </header>

          <section className="mb-8 rounded-2xl border border-[#2a588d] bg-gradient-to-r from-[#0a2d54] to-[#0c2544] p-6">
            <h2 className="text-2xl font-bold text-white">{certificate?.title ?? 'Taxi & Mietwagen'}</h2>
            <p className="mt-1 text-slate-200">{certificate?.description ?? 'Du bist auf dem Weg zur Prüfungsreife.'}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#15335a]">
              <div className="h-full rounded-full bg-[#f3c76a]" style={{ width: normalizeProgress(certificate?.progress) }} />
            </div>
            <p className="mt-2 text-sm text-slate-200">Gesamtfortschritt: {normalizeProgress(certificate?.progress)}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
              {nextRecommendations.length > 0 ? nextRecommendations.map((item) => <span key={item}>{item}</span>) : <span>Noch keine Lerninhalte gefunden.</span>}
            </div>
          </section>

          <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {[
              { title: 'Kapitel', value: chapters.length },
              { title: 'Lektionen', value: lessons.length },
              { title: 'Lernkarten', value: flashcards.length },
              { title: 'Prüfungsfragen', value: questions.length },
              { title: 'Glossarbegriffe', value: glossary.length },
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">{item.title}</p>
                <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
              </article>
            ))}
          </section>

          <section id="lernpfad" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Lernpfad</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {chapters.map((item) => (
                <article key={item.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white">{item.title}</p>
                    <span className="rounded-full border border-[#2f5d90] px-2 py-1 text-xs text-slate-200">{getStatusLabel(item.status)}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                  {item.estimated_minutes ? <p className="mt-1 text-xs text-slate-400">~ {item.estimated_minutes} Minuten</p> : null}
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#163861]"><div className="h-full w-1/3 rounded-full bg-[#f3c76a]" /></div>
                  <Link href={`/lernen/taxi-mietwagen/kapitel/${item.slug}`} className="mt-3 inline-flex rounded-lg border border-[#4ca3ff] px-3 py-1.5 text-sm text-[#9dd2ff]">Öffnen</Link>
                </article>
              ))}
            </div>
          </section>

          

          <section id="lokaler-fortschritt" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">Lokaler Lernfortschritt</h3>
              <ResetProgressButton />
            </div>
            <div className="mt-4">
              <ProgressSummaryClient />
            </div>
          </section>
<section id="today" className="mb-8">
            <h3 className="mb-3 text-xl font-semibold text-white">Heute empfohlen</h3>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {todayTasks.map((task) => (
                <article key={task.title} className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-4">
                  <p className="font-medium text-white">{task.title}</p>
                  <p className="mt-2 min-h-12 text-sm text-slate-200">{task.description}</p>
                  <Link href={task.href} className="mt-4 inline-flex rounded-lg border border-[#4ca3ff] px-3 py-1.5 text-sm text-[#9dd2ff]">{task.cta}</Link>
                </article>
              ))}
            </div>
          </section>

          <section id="lernkarten" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Lernkarten-Vorschau</h3>
            {firstFlashcard ? (
              <article className="mt-4 rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                <p className="text-sm text-slate-400">Vorderseite</p>
                <p className="font-medium text-white">{firstFlashcard.front_de}</p>
                <p className="mt-3 text-sm text-slate-400">Rückseite</p>
                <p className="text-slate-200">{firstFlashcard.back_de}</p>
                {firstFlashcard.explanation_ar ? <p className="mt-2 text-sm text-slate-300">{firstFlashcard.explanation_ar}</p> : null}
                {firstFlashcard.tags ? <p className="mt-2 text-xs text-slate-400">Tags: {Array.isArray(firstFlashcard.tags) ? firstFlashcard.tags.join(', ') : firstFlashcard.tags}</p> : null}
                <Link href="/lernen/taxi-mietwagen/karten" className="mt-3 inline-flex rounded-lg border border-[#4ca3ff] px-3 py-1.5 text-sm text-[#9dd2ff]">Alle Lernkarten</Link>
              </article>
            ) : (
              <p className="mt-3 text-sm text-slate-300">Noch keine Lernkarten im CMS gepflegt.</p>
            )}
          </section>

          <section id="simulation" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Prüfungssimulation</h3>
            <p className="mt-2 text-slate-200">{questions.length} Fragen verfügbar</p>
            <p className="text-sm text-slate-300">Simulation vorbereiten</p>
            {firstQuestion ? <p className="mt-3 rounded-lg border border-[#214267] bg-[#0b2645] p-3 text-sm text-slate-200">{firstQuestion.question_de}</p> : null}
            <Link href="/lernen/taxi-mietwagen/simulation" className="mt-3 inline-flex rounded-lg border border-[#4ca3ff] px-3 py-1.5 text-sm text-[#9dd2ff]">Simulation starten</Link>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>45 Minuten</li>
              <li>Punkteauswertung</li>
              <li>Fehleranalyse</li>
              <li>Letzte Versuche (Mock)</li>
            </ul>
          </section>

          <section id="rechnen" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">Rechentrainer</h3>
              {connectedMathChapter ? <span className="rounded-full border border-[#f3c76a] px-3 py-1 text-xs text-[#f3c76a]">Rechnen aktiv: {connectedMathChapter.title}</span> : null}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {mathTopics.map((topic) => (
                <article key={topic} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                  <p className="font-medium text-white">{topic}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#163861]"><div className="h-full w-2/3 rounded-full bg-[#4ca3ff]" /></div>
                </article>
              ))}
            </div>
          </section>

          <section id="glossar" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Glossar-Vorschau</h3>
            {glossary.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {glossary.slice(0, 6).map((item) => (
                  <li key={item.id} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                    <p className="font-semibold text-white">{item.term}</p>
                    {item.category ? <p className="text-xs text-slate-400">Kategorie: {item.category}</p> : null}
                    {item.simple_de ? <p className="text-sm text-slate-300">{item.simple_de}</p> : null}
                    {item.explanation_ar ? <p className="mt-1 text-sm text-slate-300">{item.explanation_ar}</p> : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-300">Noch keine Glossarbegriffe im CMS gepflegt.</p>
            )}
          </section>

          <section id="fortschritt" className="mb-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-5">
              <h4 className="font-semibold text-white">Fortschritt & Schwächen</h4>
              <p className="mt-3 text-sm text-slate-200">Stärken: {strengthChapters.length > 0 ? strengthChapters.join(', ') : 'Noch keine Kapitel'}.</p>
              <p className="mt-2 text-sm text-slate-200">Schwächen: {weaknessChapters.length > 0 ? weaknessChapters.join(', ') : 'Kostenrechnung, Mietwagenregeln, Versicherungen'}.</p>
            </article>
            <article className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-5">
              <h4 className="font-semibold text-white">Empfehlung heute</h4>
              <p className="mt-3 text-sm text-slate-200">Fokus: {nextRecommendations[0] ?? 'Kapitel und Lernkarten'}.</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
