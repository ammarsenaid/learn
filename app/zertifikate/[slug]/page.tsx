import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/site/PageShell';
import { getCertificates } from '@/lib/cms';

const taxiTopicCards = [
  {
    title: 'PBefG & Genehmigung',
    description: 'Genehmigungsvoraussetzungen, Pflichten und typische Prüfungsfragen zum Personenbeförderungsrecht.',
    badge: 'Recht',
  },
  {
    title: 'BOKraft & Betriebspflichten',
    description: 'Fahrzeugbetrieb, Dokumentation, Sicherheitsanforderungen und Verantwortlichkeiten im Alltag.',
    badge: 'Betrieb',
  },
  {
    title: 'Taxiordnung & Taxitarifordnung',
    description: 'Tariflogik, Beförderungspflichten und lokale Vorgaben sicher einordnen und anwenden.',
    badge: 'Recht',
  },
  {
    title: 'Mietwagenregeln',
    description: 'Abgrenzung Taxi/Mietwagen, Rückkehrpflicht und rechtssicheres Verhalten im Betriebsablauf.',
    badge: 'Recht',
  },
  {
    title: 'Unternehmerpflichten',
    description: 'Nachweise, Aufsicht, Organisation und kontinuierliche Pflichten als verantwortlicher Unternehmer.',
    badge: 'Betrieb',
  },
  {
    title: 'Kostenrechnung & Kalkulation',
    description: 'Fixkosten, variable Kosten und wirtschaftlich sinnvolle Preis- und Einsatzplanung.',
    badge: 'Rechnen',
  },
  {
    title: 'Versicherung & Haftung',
    description: 'Versicherungsarten, Schadensfälle und Haftungsgrundlagen für Personen- und Sachschäden.',
    badge: 'Praxis',
  },
  {
    title: 'Arbeitsrecht & Personal',
    description: 'Dienstplanung, Arbeitgeberpflichten und rechtliche Grundlagen beim Einsatz von Fahrpersonal.',
    badge: 'Betrieb',
  },
  {
    title: 'Kundenservice & Verhalten',
    description: 'Professionelles Auftreten, Kommunikation und korrektes Verhalten in herausfordernden Situationen.',
    badge: 'Praxis',
  },
  {
    title: 'Prüfungssimulation',
    description: 'Realistische Fragensets mit Auswertung, um Zeitmanagement und Antwortsicherheit zu trainieren.',
    badge: 'Praxis',
  },
];

const taxiLearningPath = [
  'Grundlagen verstehen',
  'Deutsche Fachbegriffe sichern',
  'Lernkarten wiederholen',
  'Rechenaufgaben trainieren',
  'Prüfung simulieren',
  'Schwächen schließen',
];

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

export const dynamic = "force-dynamic";
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

  return (
    <PageShell>
      <main className="bg-[#03111f]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 md:gap-10 md:py-14">
          <section className="grid gap-6 rounded-2xl border border-sky-900/60 bg-[#071f37] p-6 md:grid-cols-2 md:p-8">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-sky-700/80 bg-sky-950/40 px-3 py-1 text-sm font-semibold text-sky-200">
                Fachkundeprüfung
              </p>
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">
                Taxi &amp; Mietwagen Fachkundeprüfung gezielt vorbereiten
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                Lerne prüfungsrelevante Themen wie PBefG, BOKraft, Taxiordnung, Mietwagenregeln, Kostenrechnung und
                Unternehmensführung mit klaren Lernpfaden, Lernkarten und Prüfungssimulationen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/preise"
                  className="rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 px-5 py-2.5 font-semibold text-[#03111f]"
                >
                  Jetzt starten
                </Link>
                <Link
                  href="/methode"
                  className="rounded-lg border border-sky-700 bg-transparent px-5 py-2.5 font-semibold text-sky-200"
                >
                  Lernmethode ansehen
                </Link>
              </div>
            </div>
            <aside className="rounded-xl border border-slate-700 bg-[#0a2744] p-5">
              <h2 className="text-xl font-bold text-white">Taxi &amp; Mietwagen</h2>
              <p className="mt-2 inline-flex rounded-full border border-yellow-500/60 bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-300">
                Start-Zertifikat
              </p>
              <ul className="mt-4 space-y-2 text-slate-200">
                <li>12 Kapitel</li>
                <li>Lernkarten</li>
                <li>Prüfungssimulation</li>
                <li>Mehrsprachige Erklärungen</li>
              </ul>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Prüfungsreife</span>
                  <span>82%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-sky-400 to-yellow-400" />
                </div>
              </div>
            </aside>
          </section>

          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Prüfungsnah lernen', 'Deutsche Begriffe verstehen', 'Rechnen gezielt üben', 'Simulation trainieren'].map((item) => (
              <article key={item} className="rounded-xl border border-slate-700 bg-[#0b1d33] p-4">
                <p className="font-semibold text-sky-100">{item}</p>
              </article>
            ))}
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-white">Was du für Taxi &amp; Mietwagen lernen musst</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {taxiTopicCards.map((topic) => (
                <article key={topic.title} className="rounded-xl border border-slate-700 bg-[#0b1d33] p-5">
                  <p className="mb-3 inline-flex rounded-full border border-sky-600/70 bg-sky-900/40 px-2.5 py-1 text-xs font-semibold text-sky-200">
                    {topic.badge}
                  </p>
                  <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{topic.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5 rounded-2xl border border-slate-700 bg-[#0b1d33] p-6 md:p-7">
            <h2 className="text-2xl font-extrabold text-white">Dein Lernpfad bis zur Prüfungsreife</h2>
            <ol className="grid gap-3 md:grid-cols-2">
              {taxiLearningPath.map((step, index) => (
                <li key={step} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-[#08213a] p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10 font-bold text-yellow-300">
                    {index + 1}
                  </span>
                  <p className="pt-1 font-medium text-slate-100">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-700 bg-[#0b1d33] p-6">
              <h2 className="text-xl font-bold text-white">Beispiel-Lernkarte</h2>
              <div className="mt-4 rounded-lg border border-slate-600 bg-[#08213a] p-4">
                <p className="text-sm text-sky-200">Taxi / Betriebspflicht</p>
                <h3 className="mt-1 text-xl font-extrabold text-white">Bereitstellungspflicht</h3>
                <p className="mt-4 text-slate-200">Taxiunternehmen müssen die Beförderung im Pflichtfahrgebiet geordnet sicherstellen.</p>
                <p className="mt-3 border-l-2 border-sky-500 pl-3 text-sky-100">واجب توفير خدمة التاكسي بشكل منظم حسب القواعد.</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-md border border-slate-600 px-3 py-1.5 text-slate-200">Als Karte speichern</span>
                <span className="rounded-md border border-slate-600 px-3 py-1.5 text-slate-200">Als Prüfungsfrage üben</span>
              </div>
            </article>

            <article className="rounded-xl border border-slate-700 bg-[#0b1d33] p-6">
              <h2 className="text-xl font-bold text-white">Beispiel-Prüfungsfrage</h2>
              <p className="mt-4 text-slate-100">
                Sie befördern einen Fahrgast und es passiert ein Unfall. Ihr Fahrgast ist verletzt. Wer übernimmt die
                Kosten?
              </p>
              <ul className="mt-4 space-y-2">
                <li className="rounded-md border border-emerald-500/60 bg-emerald-500/10 px-3 py-2 text-emerald-200">
                  Kfz-Haftpflichtversicherung
                </li>
                <li className="rounded-md border border-rose-500/50 bg-rose-500/10 px-3 py-2 text-rose-200">
                  gesetzliche Unfallversicherung
                </li>
                <li className="rounded-md border border-rose-500/50 bg-rose-500/10 px-3 py-2 text-rose-200">
                  Betriebshaftpflicht des Unternehmers
                </li>
              </ul>
              <p className="mt-4 text-sm text-slate-300">
                Bei Schäden aus dem Betrieb des Fahrzeugs ist die Kfz-Haftpflichtversicherung der zentrale Schutz für
                geschädigte Personen.
              </p>
            </article>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-white">Rechnen ohne Angst</h2>
            <p className="max-w-3xl text-slate-300">
              Kostenrechnung, Prozentrechnung, Dreisatz und Kalkulation werden Schritt für Schritt erklärt.
            </p>
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

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-white">Für wen diese Vorbereitung gedacht ist</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                'Du willst Taxiunternehmer werden',
                'Du willst Mietwagenunternehmer werden',
                'Du hast Probleme mit deutscher Prüfungssprache',
                'Du willst Rechnen strukturiert üben',
              ].map((audience) => (
                <article key={audience} className="rounded-lg border border-slate-700 bg-[#0b1d33] p-4 text-slate-100">
                  {audience}
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-sky-800/70 bg-[#071f37] p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-white">Starte deine Taxi &amp; Mietwagen Vorbereitung</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Beginne mit einem klaren Lernpfad und trainiere gezielt bis zur Prüfungssicherheit.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/preise"
                className="rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 px-5 py-2.5 font-semibold text-[#03111f]"
              >
                Jetzt starten
              </Link>
              <Link href="/zertifikate" className="rounded-lg border border-sky-700 px-5 py-2.5 font-semibold text-sky-200">
                Alle Zertifikate ansehen
              </Link>
            </div>
          </section>

          <p className="text-sm text-slate-400">
            FachkundePilot ist eine private Lernplattform und keine offizielle IHK- oder Behördenplattform.
          </p>
        </div>
      </main>
    </PageShell>
  );
}

