import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/site/PageShell';
import {
  getCertificateBySlug,
  getCertificates,
  getChaptersByCertificateId,
  getFlashcardsByCertificateId,
  getGlossaryByCertificateId,
  getLessonsByCertificateId,
  getQuestionOptionsByQuestionId,
  getQuestionsByCertificateId,
} from '@/lib/cms';

const taxiMathCards = [
  {
    title: 'Dreisatz',
    description: 'Typische Verhältnisaufgaben für Fahrten, Zeit und Auslastung strukturiert lösen.',
  },
  {
    title: 'Prozentrechnung',
    description: 'Rabatte, Zuschläge und prozentuale Veränderungen in Prüfungssituationen sicher berechnen.',
  },
  {
    title: 'Kosten pro Tag / Jahr',
    description: 'Fixkosten und laufende Kosten auf Tages- und Jahreswerte übertragen und vergleichen.',
  },
  {
    title: 'Kosten pro Kilometer',
    description: 'Kilometerkosten nachvollziehbar kalkulieren, um Wirtschaftlichkeit fundiert zu bewerten.',
  },
];

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const certificates = await getCertificates();
  const certificate = certificates.find((c) => c.slug === slug);

  if (slug === 'taxi-mietwagen') {
    return {
      title: 'Taxi & Mietwagen Fachkundeprüfung — FachkundePilot',
      description:
        'Bereite dich gezielt auf die Taxi- und Mietwagen-Fachkundeprüfung vor — mit Lernkarten, Prüfungssimulation, Rechenübungen und mehrsprachigen Erklärungen.',
    };
  }

  return {
    title: certificate ? `${certificate.title} | FachkundePilot` : 'Zertifikat | FachkundePilot',
    description: certificate?.description ?? 'Zertifikatsdetailseite.',
  };
}

export default async function ZertifikatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const certificates = await getCertificates();
  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) return notFound();

  const isTaxi = certificate.slug === 'taxi-mietwagen';

  if (!isTaxi) {
    return (
      <PageShell>
        <main className="mx-auto max-w-5xl space-y-8 px-5 py-12">
          <section className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-8">
            <p className="text-yellow-300">{certificate.badge}</p>
            <h1 className="text-3xl font-black">{certificate.title}</h1>
            <p className="mt-2 text-slate-300">{certificate.subtitle}</p>
          </section>
          <section className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-6 text-slate-300">
            Diese Detailseite ist als professionelle Struktur vorbereitet. Inhalte folgen im nächsten Schritt.
          </section>
        </main>
      </PageShell>
    );
  }

  const liveCertificate = await getCertificateBySlug('taxi-mietwagen');
  if (!liveCertificate) {
    return notFound();
  }

  const [chapters, lessons, flashcards, questions, glossaryTerms] = await Promise.all([
    getChaptersByCertificateId(liveCertificate.id),
    getLessonsByCertificateId(liveCertificate.id),
    getFlashcardsByCertificateId(liveCertificate.id),
    getQuestionsByCertificateId(liveCertificate.id),
    getGlossaryByCertificateId(liveCertificate.id),
  ]);

  const firstQuestion = questions[0];
  const questionOptions = firstQuestion ? await getQuestionOptionsByQuestionId(firstQuestion.id) : [];
  const firstFlashcard = flashcards[0];

  return (
    <PageShell>
      <main className="bg-[#03111f]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 md:gap-10 md:py-14">
          <section className="grid gap-6 rounded-2xl border border-sky-900/60 bg-[#071f37] p-6 md:grid-cols-2 md:p-8">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-sky-700/80 bg-sky-950/40 px-3 py-1 text-sm font-semibold text-sky-200">
                {liveCertificate.badge || 'Fachkundeprüfung'}
              </p>
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">{liveCertificate.title}</h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300">{liveCertificate.description}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/preise" className="rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 px-5 py-2.5 font-semibold text-[#03111f]">Jetzt starten</Link>
                <Link href="/methode" className="rounded-lg border border-sky-700 bg-transparent px-5 py-2.5 font-semibold text-sky-200">Lernmethode ansehen</Link>
              </div>
            </div>
            <aside className="rounded-xl border border-slate-700 bg-[#0a2744] p-5">
              <h2 className="text-xl font-bold text-white">{liveCertificate.subtitle || liveCertificate.title}</h2>
              <p className="mt-2 inline-flex rounded-full border border-yellow-500/60 bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-300">{liveCertificate.badge || 'Start-Zertifikat'}</p>
              <ul className="mt-4 space-y-2 text-slate-200">
                <li>{chapters.length} Kapitel</li>
                <li>{lessons.length} Lektionen</li>
                <li>{questions.length} Prüfungsfragen</li>
                <li>Mehrsprachige Erklärungen</li>
              </ul>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Prüfungsreife</span>
                  <span>{liveCertificate.progress}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-yellow-400" style={{ width: `${Math.max(0, Math.min(100, liveCertificate.progress ?? 0))}%` }} />
                </div>
              </div>
            </aside>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-white">Was du für Taxi &amp; Mietwagen lernen musst</h2>
            {chapters.length === 0 ? (
              <p className="rounded-xl border border-slate-700 bg-[#0b1d33] p-5 text-slate-300">Noch keine Kapitel im CMS gepflegt.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {chapters.map((topic) => (
                  <article key={topic.id} className="rounded-xl border border-slate-700 bg-[#0b1d33] p-5">
                    <p className="mb-3 inline-flex rounded-full border border-sky-600/70 bg-sky-900/40 px-2.5 py-1 text-xs font-semibold text-sky-200">{topic.status || 'Kapitel'}</p>
                    <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{topic.description}</p>
                    {topic.estimated_minutes ? <p className="mt-3 text-xs text-slate-400">≈ {topic.estimated_minutes} Minuten</p> : null}<Link href={`/lernen/taxi-mietwagen/kapitel/${topic.slug}`} className="mt-3 inline-flex rounded-lg border border-sky-600/70 px-3 py-1.5 text-sm text-sky-200">Kapitel öffnen</Link>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="space-y-5 rounded-2xl border border-slate-700 bg-[#0b1d33] p-6 md:p-7">
            <h2 className="text-2xl font-extrabold text-white">Dein Lernpfad bis zur Prüfungsreife</h2>
            {chapters.length === 0 ? (
              <p className="text-slate-300">Noch keine Kapitel im CMS gepflegt.</p>
            ) : (
              <ol className="grid gap-3 md:grid-cols-2">
                {chapters.map((step, index) => (
                  <li key={step.id} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-[#08213a] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10 font-bold text-yellow-300">{index + 1}</span>
                    <div><p className="pt-1 font-medium text-slate-100">{step.title}</p><Link href={`/lernen/taxi-mietwagen/kapitel/${step.slug}`} className="mt-2 inline-flex text-sm text-sky-300">Kapitel öffnen</Link></div>
                  </li>
                ))}
              </ol>
            )}
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-700 bg-[#0b1d33] p-6">
              <h2 className="text-xl font-bold text-white">Beispiel-Lernkarte</h2>
              {!firstFlashcard ? (
                <p className="mt-4 text-slate-300">Noch keine Lernkarten im CMS gepflegt.</p>
              ) : (
                <>
                  <div className="mt-4 rounded-lg border border-slate-600 bg-[#08213a] p-4">
                    <p className="text-sm text-sky-200">{Array.isArray(firstFlashcard.tags) ? firstFlashcard.tags.join(' / ') : firstFlashcard.tags || 'Lernkarte'}</p>
                    <h3 className="mt-1 text-xl font-extrabold text-white">{firstFlashcard.front_de}</h3>
                    <p className="mt-4 text-slate-200">{firstFlashcard.back_de}</p>
                    {firstFlashcard.explanation_ar ? <p className="mt-3 border-l-2 border-sky-500 pl-3 text-sky-100">{firstFlashcard.explanation_ar}</p> : null}
                  </div>
                </>
              )}
            </article>

            <article className="rounded-xl border border-slate-700 bg-[#0b1d33] p-6">
              <h2 className="text-xl font-bold text-white">Beispiel-Prüfungsfrage</h2>
              {!firstQuestion ? (
                <p className="mt-4 text-slate-300">Noch keine Prüfungsfragen im CMS gepflegt.</p>
              ) : (
                <>
                  <p className="mt-4 text-slate-100">{firstQuestion.question_de}</p>
                  <ul className="mt-4 space-y-2">
                    {questionOptions.map((option) => (
                      <li key={option.id} className={`rounded-md px-3 py-2 ${option.is_correct ? 'border border-emerald-500/60 bg-emerald-500/10 text-emerald-200' : 'border border-rose-500/50 bg-rose-500/10 text-rose-200'}`}>
                        {option.option_de}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-300">{firstQuestion.explanation_ar || firstQuestion.explanation_de || 'Keine Erklärung im CMS gepflegt.'}</p>
                </>
              )}
            </article>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-white">Glossar</h2>
            {glossaryTerms.length === 0 ? (
              <p className="rounded-xl border border-slate-700 bg-[#0b1d33] p-5 text-slate-300">Noch keine Glossarbegriffe im CMS gepflegt.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {glossaryTerms.map((term) => (
                  <article key={term.id} className="rounded-xl border border-slate-700 bg-[#0b1d33] p-4">
                    <p className="text-xs text-sky-300">{term.category || 'Glossar'}</p>
                    <h3 className="mt-1 font-bold text-white">{term.term}</h3>
                    <p className="mt-2 text-sm text-slate-300">{term.simple_de}</p>
                    {term.explanation_ar ? <p className="mt-2 text-sm text-sky-100">{term.explanation_ar}</p> : null}
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-white">Rechnen ohne Angst</h2>
            <p className="max-w-3xl text-slate-300">Kostenrechnung, Prozentrechnung, Dreisatz und Kalkulation werden Schritt für Schritt erklärt.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {taxiMathCards.map((item) => (
                <article key={item.title} className="rounded-xl border border-slate-700 bg-[#0b1d33] p-4">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  <span className="mt-3 inline-flex text-sm font-semibold text-sky-300">Üben</span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
