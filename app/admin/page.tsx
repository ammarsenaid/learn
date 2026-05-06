import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Gateway — FachkundePilot',
  description:
    'Gateway für die spätere CMS-Verwaltung von Zertifikaten, Lektionen, Lernkarten, Fragen und Übersetzungen.',
};

type Area = {
  title: string;
  description: string;
};

const managementAreas: Area[] = [
  {
    title: 'Zertifikate',
    description: 'Zertifikatsarten, Anforderungen und zugehörige Lernpfade verwalten.',
  },
  {
    title: 'Kapitel',
    description: 'Kapitelstruktur für jedes Zertifikat in klaren Lernabschnitten pflegen.',
  },
  {
    title: 'Lektionen',
    description: 'Lektionsinhalte mit Reihenfolge, Lernzielen und Kontext strukturieren.',
  },
  {
    title: 'Lernkarten',
    description: 'Wissenskarten für Wiederholung und Prüfungsvorbereitung zentral pflegen.',
  },
  {
    title: 'Prüfungsfragen',
    description: 'Fragenpools, Schwierigkeitsgrade und Auswertungsbezug organisieren.',
  },
  {
    title: 'Übersetzungen',
    description: 'Mehrsprachige Inhalte für Fachbegriffe, Lektionen und Fragen verwalten.',
  },
  {
    title: 'Medienbibliothek',
    description: 'Dateien, Grafiken, PDFs und weitere Lernmedien strukturiert bereitstellen.',
  },
  {
    title: 'Nutzer & Rollen',
    description: 'Redaktion, Rechte und Veröffentlichungsprozesse später über CMS steuern.',
  },
];

const architecture = [
  'Next.js = Public website + learner frontend',
  'Directus / Strapi = CMS Admin',
  'PostgreSQL = Datenbank',
  'Media Storage = PDFs, images, files',
  'API = Frontend reads content from CMS',
];

const checklist = [
  'Directus auswählen',
  'PostgreSQL vorbereiten',
  'Collections für Zertifikate erstellen',
  'Kapitel und Lektionen modellieren',
  'Lernkarten und Fragen modellieren',
  'Sprachen / Übersetzungen einrichten',
  'API-Zugriff für Next.js konfigurieren',
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#03111f] px-5 py-12 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section className="rounded-2xl border border-[#27507f] bg-gradient-to-r from-[#09213b] to-[#0b2948] p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ac6ff]">FachkundePilot</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Admin Gateway</h1>
          <p className="mt-3 max-w-3xl text-slate-200">
            Verwalte später Zertifikate, Kapitel, Lektionen, Lernkarten, Fragen und Übersetzungen über ein verbundenes
            Open-Source-CMS.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/admin#cms-not-connected"
              className="rounded-lg bg-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#17263b] transition hover:brightness-105"
            >
              CMS Studio öffnen
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-[#3b679a] bg-[#0a2039] px-4 py-2 text-sm font-semibold text-[#9fd2ff] transition hover:border-[#4ca3ff]"
            >
              Zur Website
            </Link>
          </div>
          <p className="mt-5 text-sm text-[#9fd2ff]">
            CMS-Verbindung wird später mit Directus oder Strapi eingerichtet.
          </p>
        </section>

        <section id="cms-not-connected" className="rounded-2xl border border-[#315a8e] bg-[#0a2039] p-6 sm:p-7">
          <h2 className="text-xl font-semibold text-white">CMS-Status</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ['Status', 'Noch nicht verbunden'],
              ['CMS', 'Directus geplant'],
              ['Database', 'PostgreSQL geplant'],
              ['Auth', 'Wird später eingerichtet'],
              ['API', 'Noch nicht verbunden'],
            ].map(([label, value]) => (
              <article key={label} className="rounded-xl border border-[#284b76] bg-[#0c2745] p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">{label}</p>
                <p className="mt-1 font-semibold text-[#f3c76a]">{value}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Management-Bereiche</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {managementAreas.map((area) => (
              <article key={area.title} className="rounded-xl border border-[#214267] bg-[#0a2039] p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                  <span className="rounded-full border border-[#3b679a] bg-[#0c2745] px-2 py-1 text-xs text-[#9fd2ff]">
                    CMS später
                  </span>
                </div>
                <p className="mt-3 min-h-16 text-sm text-slate-300">{area.description}</p>
                <Link href="/admin#cms-not-connected" className="mt-4 inline-block text-sm font-semibold text-[#f3c76a]">
                  Im CMS öffnen
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#1f4268] bg-[#0a2039] p-6 sm:p-7">
          <h2 className="text-2xl font-semibold text-white">Geplante Architektur</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {architecture.map((item) => (
              <li key={item} className="rounded-lg border border-[#27476f] bg-[#0b2645] px-4 py-3 text-sm text-slate-200">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1f4268] bg-[#0a2039] p-6 sm:p-7">
          <h2 className="text-2xl font-semibold text-white">Warum kein Custom Admin?</h2>
          <p className="mt-3 text-slate-200">
            Ein eigenes Admin-System von Grund auf zu bauen wäre langsamer, teurer und fehleranfälliger. Ein
            Open-Source-CMS gibt sofort Rollen, Medien, Datenmodelle und Content-Management.
          </p>
        </section>

        <section className="rounded-2xl border border-[#1f4268] bg-[#0a2039] p-6 sm:p-7">
          <h2 className="text-2xl font-semibold text-white">Nächste Setup-Checkliste</h2>
          <ul className="mt-4 space-y-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-[#25456d] bg-[#0b2645] px-4 py-3 text-sm text-slate-200">
                <span className="mt-0.5 inline-block h-2.5 w-2.5 rounded-full bg-[#4ca3ff]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[#2c5487] bg-gradient-to-r from-[#0b2645] to-[#0f2f53] p-6 sm:p-7">
          <h2 className="text-2xl font-semibold text-white">Bereit für die CMS-Integration?</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-lg bg-[#f3c76a] px-4 py-2 text-sm font-semibold text-[#17263b]">
              Zurück zum Dashboard
            </Link>
            <Link href="/" className="rounded-lg border border-[#3b679a] px-4 py-2 text-sm font-semibold text-[#9fd2ff]">
              Zur Website
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
