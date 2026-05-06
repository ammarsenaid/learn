import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard — FachkundePilot',
  description:
    'Learner dashboard with progress overview, learning path, daily tasks, flashcard preview, and exam simulation.',
};

type SidebarItem = { label: string; href: string; active?: boolean };
type KpiItem = { title: string; value: string; helper: string; progress: number };

type SectionCard = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

const sidebarItems: SidebarItem[] = [
  { label: 'Übersicht', href: '/dashboard', active: true },
  { label: 'Lernpfad', href: '/dashboard#lernpfad' },
  { label: 'Heute', href: '/dashboard#today' },
  { label: 'Lernkarten', href: '/dashboard#lernkarten' },
  { label: 'Simulation', href: '/dashboard#simulation' },
  { label: 'Math Trainer', href: '/dashboard#rechnen' },
  { label: 'Glossar', href: '/dashboard#glossar' },
  { label: 'Fortschritt', href: '/dashboard#fortschritt' },
];

const kpiItems: KpiItem[] = [
  { title: 'Prüfungsreife', value: '78%', helper: 'Gute Entwicklung in den Kernmodulen.', progress: 78 },
  { title: 'Lernzeit diese Woche', value: '4h 20m', helper: 'Ziel: mindestens 5h pro Woche.', progress: 86 },
  { title: 'Fällige Karten', value: '24', helper: 'Heute priorisieren für bessere Merkquote.', progress: 60 },
  { title: 'Letzte Simulation', value: '63%', helper: 'Steigerung von +9% seit Start.', progress: 63 },
];

const learningPath = [
  { title: 'Grundlagen PBefG', status: 'Fertig', progress: 100 },
  { title: 'BOKraft & Betriebspflichten', status: 'Aktiv', progress: 74 },
  { title: 'Taxiordnung & Tarife', status: 'Aktiv', progress: 61 },
  { title: 'Mietwagenregeln', status: 'Offen', progress: 22 },
  { title: 'Kostenrechnung', status: 'Offen', progress: 15 },
];

const todayTasks = [
  '20 Lernkarten wiederholen',
  '10 Rechenfragen lösen',
  '1 Mini-Simulation starten',
  '5 Glossarbegriffe festigen',
];

const previews: SectionCard[] = [
  {
    title: 'Flashcard Preview',
    description: 'Nächste Karte: Bereitstellungspflicht mit DE/AR Erklärung und Kontextbeispiel.',
    cta: 'Lernkarten öffnen',
    href: '/dashboard#lernkarten',
  },
  {
    title: 'Exam Simulation Preview',
    description: '30 Fragen in 45 Minuten mit automatischer Fehleranalyse und Themenauswertung.',
    cta: 'Simulation starten',
    href: '/dashboard#simulation',
  },
  {
    title: 'Glossary Preview',
    description: 'Heute empfohlen: PBefG, Rückkehrpflicht, Bereitstellungspflicht.',
    cta: 'Glossar öffnen',
    href: '/dashboard#glossar',
  },
];

export default function DashboardPage() {
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
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg border px-3 py-2 text-sm transition ${
                    item.active
                      ? 'border-[#4ca3ff] bg-[#0b2645] text-white'
                      : 'border-[#1e385c] bg-[#0a2039] text-slate-300 hover:border-[#4ca3ff] hover:text-white'
                  }`}
                >
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
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Dashboard</h1>
                <p className="mt-1 text-sm text-slate-300">Taxi & Mietwagen Fachkundeprüfung • Lernmodus</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-lg border border-[#2a4c77] bg-[#0a2039] px-3 py-2 text-sm">DE / AR</div>
                <div className="rounded-lg border border-[#2a4c77] bg-[#0a2039] px-3 py-2 text-sm">Ahmet</div>
                <Link
                  href="/dashboard#simulation"
                  className="rounded-lg bg-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#1a2538]"
                >
                  Prüfung starten
                </Link>
              </div>
            </div>
          </header>

          <section className="mb-8 rounded-2xl border border-[#2a588d] bg-gradient-to-r from-[#0a2d54] to-[#0c2544] p-6">
            <h2 className="text-2xl font-bold text-white">Progress Overview</h2>
            <p className="mt-1 text-slate-200">Du bist auf dem Weg zur Prüfungsreife.</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#15335a]">
              <div className="h-full rounded-full bg-[#f3c76a]" style={{ width: '78%' }} />
            </div>
            <p className="mt-2 text-sm text-slate-200">Gesamtfortschritt: 78%</p>
          </section>

          <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpiItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">{item.title}</p>
                <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.helper}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#15335a]">
                  <div className="h-full rounded-full bg-[#4ca3ff]" style={{ width: `${item.progress}%` }} />
                </div>
              </article>
            ))}
          </section>

          <section id="lernpfad" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Learning Path</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {learningPath.map((item) => (
                <article key={item.title} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white">{item.title}</p>
                    <span className="rounded-full border border-[#2f5d90] px-2 py-1 text-xs text-slate-200">{item.status}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#163861]">
                    <div className="h-full rounded-full bg-[#f3c76a]" style={{ width: `${item.progress}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="today" className="mb-8">
            <h3 className="mb-3 text-xl font-semibold text-white">Today&apos;s Tasks</h3>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {todayTasks.map((task) => (
                <article key={task} className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-4">
                  <p className="min-h-12 text-sm text-slate-200">{task}</p>
                  <span className="mt-4 inline-flex rounded-lg border border-[#4ca3ff] px-3 py-1.5 text-sm text-[#9dd2ff]">
                    Starten
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-8 grid gap-4 xl:grid-cols-3">
            {previews.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
                <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{card.description}</p>
                <Link href={card.href} className="mt-4 inline-flex text-sm font-semibold text-[#90cbff]">
                  {card.cta}
                </Link>
              </article>
            ))}
          </section>

          <section id="simulation" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Exam Simulation Preview</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li>30 Fragen</li>
              <li>45 Minuten</li>
              <li>Punkteauswertung</li>
              <li>Fehleranalyse</li>
            </ul>
          </section>

          <section id="rechnen" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Math Trainer</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {['Dreisatz', 'Prozentrechnung', 'Kosten pro Tag / Jahr', 'Kosten pro Kilometer'].map((topic) => (
                <article key={topic} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                  <p className="font-medium text-white">{topic}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#163861]">
                    <div className="h-full w-2/3 rounded-full bg-[#4ca3ff]" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="glossar" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6">
            <h3 className="text-xl font-semibold text-white">Glossary Preview</h3>
            <ul className="mt-4 space-y-3">
              {[
                ['PBefG', 'Rechtliche Grundlage für den gewerblichen Personenverkehr.'],
                ['BOKraft', 'Regelwerk für den Betrieb von Kraftfahrunternehmen im Personenverkehr.'],
                ['Rückkehrpflicht', 'Mietwagen müssen nach Auftrag grundsätzlich zum Betriebssitz zurückkehren.'],
              ].map(([term, desc]) => (
                <li key={term} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                  <p className="font-semibold text-white">{term}</p>
                  <p className="text-sm text-slate-300">{desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="fortschritt" className="mb-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-5">
              <h4 className="font-semibold text-white">Progress & Weaknesses</h4>
              <p className="mt-3 text-sm text-slate-200">Stärken: PBefG, Taxiordnung, Kundenverhalten.</p>
              <p className="mt-2 text-sm text-slate-200">Schwächen: Kostenrechnung, Mietwagenregeln, Versicherungen.</p>
            </article>
            <article className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-5">
              <h4 className="font-semibold text-white">Empfehlung heute</h4>
              <p className="mt-3 text-sm text-slate-200">Fokus: Kostenrechnung + Rückkehrpflicht mit 20-min Lernblock.</p>
            </article>
          </section>

          <section className="rounded-2xl border border-[#2a588d] bg-gradient-to-r from-[#0b2645] to-[#102e52] p-6">
            <h3 className="text-2xl font-semibold text-white">CTA • Bereit für den nächsten Schritt?</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/dashboard#today" className="rounded-lg bg-[#4ca3ff] px-4 py-2 text-sm font-semibold text-[#08203c]">
                Tagesaufgaben starten
              </Link>
              <Link
                href="/dashboard#simulation"
                className="rounded-lg border border-[#4ca3ff] px-4 py-2 text-sm font-semibold text-[#9dd2ff]"
              >
                Prüfung simulieren
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
