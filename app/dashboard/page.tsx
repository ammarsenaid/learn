import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard — FachkundePilot',
  description:
    'Deine persönliche Lernübersicht mit Lernpfad, Lernkarten, Prüfungssimulation und Fortschrittsanalyse.',
};

type SidebarItem = { label: string; href: string; active?: boolean };

type KpiItem = {
  title: string;
  value: string;
  helper: string;
  progress: number;
};

const sidebarItems: SidebarItem[] = [
  { label: 'Übersicht', href: '/dashboard', active: true },
  { label: 'Mein Zertifikat', href: '/zertifikate/taxi-mietwagen' },
  { label: 'Lernpfad', href: '/dashboard#lernpfad' },
  { label: 'Lernkarten', href: '/dashboard#lernkarten' },
  { label: 'Prüfungssimulation', href: '/dashboard#simulation' },
  { label: 'Rechnen', href: '/dashboard#rechnen' },
  { label: 'Glossar', href: '/dashboard#glossar' },
  { label: 'Fortschritt', href: '/dashboard#fortschritt' },
  { label: 'Einstellungen', href: '/dashboard#einstellungen' },
];

const kpiItems: KpiItem[] = [
  {
    title: 'Prüfungsreife',
    value: '78%',
    helper: 'Du liegst bereits im oberen Lernbereich.',
    progress: 78,
  },
  {
    title: 'Lernzeit diese Woche',
    value: '4h 20m',
    helper: 'Konstant gelernt, Ziel sind 5 Stunden.',
    progress: 86,
  },
  {
    title: 'Fällige Karten',
    value: '24',
    helper: 'Heute priorisieren für bessere Merkquote.',
    progress: 60,
  },
  {
    title: 'Letzte Simulation',
    value: '63%',
    helper: 'Steigerung gegenüber dem vorigen Versuch.',
    progress: 63,
  },
];

const learningPath = [
  { title: 'Grundlagen PBefG', status: 'Fertig', progress: 100 },
  { title: 'BOKraft & Betriebspflichten', status: 'Aktiv', progress: 74 },
  { title: 'Taxiordnung & Taxitarifordnung', status: 'Aktiv', progress: 61 },
  { title: 'Mietwagenregeln', status: 'Offen', progress: 22 },
  { title: 'Kostenrechnung', status: 'Offen', progress: 15 },
  { title: 'Prüfungssimulation', status: 'Offen', progress: 8 },
];

const todayTasks = [
  '20 Lernkarten wiederholen',
  '10 Rechenfragen lösen',
  '1 Mini-Simulation starten',
  '5 Glossarbegriffe sichern',
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#03111f] text-slate-100">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col lg:flex-row">
        <aside className="w-full border-b border-[#1d3556] bg-[#061a30] lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <div className="p-6">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold text-[#f3c76a]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f3c76a]" />
              FachkundePilot
            </Link>
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
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Lernübersicht</h1>
                <p className="mt-1 text-sm text-slate-300">Taxi & Mietwagen Fachkundeprüfung</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-lg border border-[#2a4c77] bg-[#0a2039] px-3 py-2 text-sm">DE / AR</div>
                <div className="rounded-lg border border-[#2a4c77] bg-[#0a2039] px-3 py-2 text-sm">Ahmet</div>
                <Link href="/dashboard#simulation" className="rounded-lg bg-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#1a2538]">
                  Prüfung starten
                </Link>
              </div>
            </div>
          </header>

          <section className="mb-6 rounded-2xl border border-[#265286] bg-gradient-to-r from-[#0a2d54] to-[#0c2544] p-6">
            <h2 className="text-2xl font-bold">Willkommen zurück, Ahmet</h2>
            <p className="mt-1 text-slate-200">Du bist auf dem Weg zur Prüfungsreife.</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#15335a]">
              <div className="h-full rounded-full bg-[#f3c76a]" style={{ width: '78%' }} />
            </div>
            <p className="mt-2 text-sm text-slate-200">Fortschritt: 78%</p>
            <p className="mt-3 text-sm text-[#90cbff]">Heute: 20 Minuten Lernkarten + 10 Rechenfragen</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/dashboard#lernkarten" className="rounded-lg bg-[#4ca3ff] px-4 py-2 text-sm font-semibold text-[#08203c]">Weiterlernen</Link>
              <Link href="/dashboard#simulation" className="rounded-lg border border-[#4ca3ff] px-4 py-2 text-sm font-semibold text-[#9dd2ff]">Simulation starten</Link>
            </div>
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

          <section id="lernpfad" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-white">Dein Lernpfad</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {learningPath.map((item) => (
                <article key={item.title} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4">
                  <div className="flex items-center justify-between gap-3"><p className="font-medium">{item.title}</p><span className="rounded-full border border-[#2f5d90] px-2 py-1 text-xs">{item.status}</span></div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#163861]"><div className="h-full rounded-full bg-[#f3c76a]" style={{ width: `${item.progress}%` }} /></div>
                  <div className="mt-3"><Link href="/dashboard" className="text-sm font-medium text-[#90cbff]">Öffnen</Link></div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="mb-3 text-xl font-semibold text-white">Heute empfohlen</h3>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{todayTasks.map((task) => <article key={task} className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-4"><p className="min-h-12 text-sm text-slate-200">{task}</p><button className="mt-4 rounded-lg border border-[#4ca3ff] px-3 py-1.5 text-sm text-[#9dd2ff]">Starten</button></article>)}</div>
          </section>

          <section id="lernkarten" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-white">Lernkarten</h3>
            <article className="mt-4 rounded-xl border border-[#2a4f7f] bg-[#0b2645] p-5">
              <p className="text-sm text-slate-300">Begriff</p><p className="mt-1 text-xl font-semibold">Bereitstellungspflicht</p>
              <p className="mt-4 text-sm text-slate-200">Taxiunternehmen müssen Fahrzeuge im zugelassenen Pflichtfahrgebiet in ausreichender Verfügbarkeit bereitstellen.</p>
              <p className="mt-2 text-sm text-[#9dd2ff]">العربية: يجب على شركة التاكسي توفير المركبات بشكل كافٍ داخل نطاق الخدمة الإلزامي.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs"><span className="rounded-full border border-[#355d8e] px-2 py-1">Taxi</span><span className="rounded-full border border-[#355d8e] px-2 py-1">Betrieb</span><span className="rounded-full border border-[#355d8e] px-2 py-1">Prüfung</span></div>
              <div className="mt-5 flex flex-wrap gap-2"><button className="rounded-lg bg-[#f3c76a] px-3 py-2 text-sm font-semibold text-[#1a2538]">Gewusst</button><button className="rounded-lg border border-[#4ca3ff] px-3 py-2 text-sm text-[#9dd2ff]">Wiederholen</button><button className="rounded-lg border border-[#4ca3ff] px-3 py-2 text-sm text-[#9dd2ff]">Als Frage üben</button></div>
            </article>
          </section>

          <section id="simulation" className="mb-8 grid gap-4 xl:grid-cols-3">
            <article className="xl:col-span-2 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6"><h3 className="text-xl font-semibold text-white">Prüfungssimulation</h3><ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2"><li>30 Fragen</li><li>45 Minuten</li><li>Punkteauswertung</li><li>Fehleranalyse</li><li>Status: Bereit</li></ul><Link href="/dashboard#simulation" className="mt-5 inline-flex rounded-lg bg-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#1a2538]">Simulation starten</Link></article>
            <article className="rounded-2xl border border-[#1e385c] bg-[#0a2039] p-6"><h4 className="font-semibold text-white">Letzte Versuche</h4><ul className="mt-3 space-y-2 text-sm text-slate-200"><li>Versuch 1: 54%</li><li>Versuch 2: 61%</li><li>Versuch 3: 63%</li></ul></article>
          </section>

          <section id="rechnen" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-5 sm:p-6"><h3 className="text-xl font-semibold text-white">Rechnen gezielt üben</h3><div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{['Dreisatz','Prozentrechnung','Kosten pro Tag / Jahr','Kosten pro Kilometer'].map((m, i) => <article key={m} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><div className="flex items-center justify-between"><p className="font-medium">{m}</p><span className="rounded-full border border-[#2f5d90] px-2 py-1 text-xs">{i < 2 ? 'Mittel' : 'Anspruchsvoll'}</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#163861]"><div className="h-full rounded-full bg-[#4ca3ff]" style={{ width: `${55 + i * 9}%` }} /></div><button className="mt-4 rounded-lg border border-[#4ca3ff] px-3 py-1.5 text-sm text-[#9dd2ff]">Üben</button></article>)}</div></section>

          <section id="glossar" className="mb-8 rounded-2xl border border-[#1e385c] bg-[#0a2039] p-5 sm:p-6"><h3 className="text-xl font-semibold text-white">Wichtige Begriffe</h3><ul className="mt-4 space-y-3">{[['PBefG','Rechtliche Grundlage für den gewerblichen Personenverkehr.'],['BOKraft','Regelwerk für den Betrieb von Kraftfahrunternehmen im Personenverkehr.'],['Betriebssitz','Offizieller Unternehmensstandort mit organisatorischer Verantwortung.'],['Rückkehrpflicht','Mietwagen müssen nach Auftrag grundsätzlich zum Betriebssitz zurückkehren.'],['Bereitstellungspflicht','Taxen müssen im Pflichtfahrgebiet angemessen verfügbar sein.'],['Taxitarifordnung','Verbindliche Preis- und Tarifvorgaben für Taxifahrten.']].map(([term, desc]) => <li key={term} className="rounded-xl border border-[#214267] bg-[#0b2645] p-4"><div className="flex flex-wrap items-start justify-between gap-2"><div><p className="font-semibold">{term}</p><p className="text-sm text-slate-300">{desc}</p><p className="mt-1 text-xs text-[#9dd2ff]">Sprachhinweis: DE/AR verfügbar</p></div><Link href="/dashboard#glossar" className="text-sm font-medium text-[#90cbff]">Öffnen</Link></div></li>)}</ul></section>

          <section id="fortschritt" className="mb-8 grid gap-4 md:grid-cols-3"><article className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-5"><h4 className="font-semibold text-white">Stärken</h4><ul className="mt-3 space-y-1 text-sm text-slate-200"><li>PBefG</li><li>Taxiordnung</li><li>Kundenverhalten</li></ul></article><article className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-5"><h4 className="font-semibold text-white">Schwächen</h4><ul className="mt-3 space-y-1 text-sm text-slate-200"><li>Kostenrechnung</li><li>Mietwagenregeln</li><li>Versicherungen</li></ul></article><article className="rounded-xl border border-[#1e385c] bg-[#0a2039] p-5"><h4 className="font-semibold text-white">Empfehlung</h4><p className="mt-3 text-sm text-slate-200">Fokus heute: Kostenrechnung + Rückkehrpflicht</p></article></section>

          <section className="rounded-2xl border border-[#265286] bg-gradient-to-r from-[#0b2645] to-[#102e52] p-6"><h3 className="text-2xl font-semibold text-white">Bereit für die nächste Übung?</h3><div className="mt-4 flex flex-wrap gap-3"><Link href="/dashboard#lernkarten" className="rounded-lg bg-[#4ca3ff] px-4 py-2 text-sm font-semibold text-[#08203c]">Weiterlernen</Link><Link href="/dashboard#simulation" className="rounded-lg border border-[#4ca3ff] px-4 py-2 text-sm font-semibold text-[#9dd2ff]">Prüfung simulieren</Link><Link href="/zertifikate/taxi-mietwagen" className="rounded-lg border border-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#f3c76a]">Zurück zu Taxi & Mietwagen</Link></div></section>
        </main>
      </div>
    </div>
  );
}
