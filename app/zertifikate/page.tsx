import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/site/PageShell';
import { getCertificates, normalizeProgress } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Zertifikate — FachkundePilot',
  description:
    'Wähle deine deutsche Sach- oder Fachkundeprüfung und lerne mit klaren Lernpfaden, Lernkarten und Prüfungssimulationen.',
};

type Category = 'Personenbeförderung' | 'Sicherheit' | 'Verkehr & Logistik' | 'Finanz & Immobilien';

const categoryBySlug: Record<string, Category> = {
  'taxi-mietwagen': 'Personenbeförderung',
  '34a-bewachung': 'Sicherheit',
  gueterkraftverkehr: 'Verkehr & Logistik',
  'versicherung-34d': 'Finanz & Immobilien',
  'finanzanlagen-34f': 'Finanz & Immobilien',
  immobiliardarlehen: 'Finanz & Immobilien',
};

const codeBySlug: Record<string, string> = {
  'taxi-mietwagen': 'TM',
  '34a-bewachung': '34A',
  gueterkraftverkehr: 'GV',
  'versicherung-34d': '34D',
  'finanzanlagen-34f': '34F',
  immobiliardarlehen: 'IM',
};


function statusClasses(status: string) {
  if (status === 'Aktiv') return 'border-emerald-400/40 bg-emerald-500/15 text-emerald-200';
  return 'border-amber-400/40 bg-amber-500/15 text-amber-200';
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ZertifikatePage() {
  const certificates = await getCertificates();
  const featuredCertificate = certificates.find((c) => c.slug === 'taxi-mietwagen') ?? certificates[0];
  if (!featuredCertificate) return null;
  const otherCertificates = certificates.filter((c) => c.slug !== featuredCertificate.slug);

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <p className="text-xs text-slate-500">CMS connected</p>
        <section className="grid gap-8 rounded-3xl border border-sky-400/15 bg-[#071a2e] p-6 md:grid-cols-[1.35fr_0.95fr] md:p-8">
          <div>
            <p className="text-sm font-medium tracking-[0.14em] text-sky-300">Zertifikate</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Wähle deine Fachkundeprüfung
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Bereite dich gezielt auf deutsche Sach- und Fachkundeprüfungen vor — mit klaren Lernpfaden,
              Lernkarten, Prüfungssimulationen und mehrsprachigen Erklärungen.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/zertifikate/taxi-mietwagen"
                className="rounded-xl bg-[#d4a84f] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#e2b965]"
              >
                Taxi & Mietwagen starten
              </Link>
              <Link
                href="/preise"
                className="rounded-xl border border-sky-300/30 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200/50 hover:bg-sky-400/20"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-600/60 bg-[#0b1d33] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Plattform-Überblick</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex items-center justify-between border-b border-slate-700/70 pb-2"><span>6 Zertifikate</span><span className="text-sky-300">Aktiv & geplant</span></li>
              <li className="flex items-center justify-between border-b border-slate-700/70 pb-2"><span>DE / AR / EN / TR</span><span className="text-sky-300">Mehrsprachig</span></li>
              <li className="flex items-center justify-between border-b border-slate-700/70 pb-2"><span>Lernkarten</span><span className="text-sky-300">Wiederholung</span></li>
              <li className="flex items-center justify-between border-b border-slate-700/70 pb-2"><span>Prüfungssimulation</span><span className="text-sky-300">Realistisch</span></li>
              <li className="flex items-center justify-between"><span>Fortschrittsanalyse</span><span className="text-sky-300">Datenbasiert</span></li>
            </ul>
          </aside>
        </section>

        <section className="mt-8">
          <div className="flex flex-wrap gap-2">
            {['Alle', 'Personenbeförderung', 'Sicherheit', 'Verkehr & Logistik', 'Finanz & Immobilien', 'Geplant'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-600 bg-[#0b1d33] px-4 py-2 text-xs font-medium text-slate-200 md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-yellow-400/25 bg-gradient-to-br from-[#102844] via-[#0d233c] to-[#091a2e] p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="rounded-md border border-yellow-300/35 bg-yellow-400/15 px-2.5 py-1 text-xs font-semibold text-yellow-200">TM</span>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{featuredCertificate.title}</h2>
              <p className="mt-1 text-slate-300">{featuredCertificate.subtitle}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">{featuredCertificate.description}</p>
            </div>
            <span className="rounded-full border border-emerald-400/35 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">Aktiver Lernpfad</span>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-2 lg:grid-cols-4">
            <p className="rounded-xl border border-slate-600/60 bg-[#10253f] px-3 py-2">12 Kapitel</p>
            <p className="rounded-xl border border-slate-600/60 bg-[#10253f] px-3 py-2">Lernkarten</p>
            <p className="rounded-xl border border-slate-600/60 bg-[#10253f] px-3 py-2">Simulation</p>
            <p className="rounded-xl border border-slate-600/60 bg-[#10253f] px-3 py-2">Mehrsprachig</p>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
              <span>Prüfungsbereitschaft</span>
              <span>{normalizeProgress(featuredCertificate.progress)}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-700/80">
              <div className="h-2 rounded-full bg-gradient-to-r from-yellow-300 to-sky-300" style={{ width: `${normalizeProgress(featuredCertificate.progress)}` }} />
            </div>
          </div>
          <Link
            href={featuredCertificate.href}
            className="mt-7 inline-flex rounded-xl bg-[#d4a84f] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#e2b965]"
          >
            Zur Prüfungsvorbereitung
          </Link>
        </section>

        <section className="mt-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {otherCertificates.map((certificate) => (
              <article key={certificate.slug} className="flex h-full flex-col rounded-2xl border border-slate-700 bg-[#0b1d33] p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-md border border-sky-300/30 bg-sky-400/10 px-2.5 py-1 text-xs font-semibold text-sky-200">{codeBySlug[certificate.slug]}</span>
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses(certificate.status)}`}>{certificate.status}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{certificate.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{certificate.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{certificate.description}</p>
                <div className="mt-4 space-y-1 text-xs text-slate-300">
                  <p>Bereich: {categoryBySlug[certificate.slug]}</p>
                  <p>Level: {certificate.level}</p>
                  <p>Sprachen: {certificate.languages.join(' / ')}</p>
                </div>
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-xs text-slate-300">
                    <span>Fortschritt</span>
                    <span>{normalizeProgress(certificate.progress)}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700/80">
                    <div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-200" style={{ width: `${normalizeProgress(certificate.progress)}` }} />
                  </div>
                </div>
                <Link href={certificate.href} className="mt-5 inline-flex text-sm font-semibold text-sky-200 underline-offset-4 hover:text-sky-100 hover:underline">
                  Zur Detailseite
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Welches Zertifikat passt zu dir?</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Ich will Personen befördern', href: '/zertifikate/taxi-mietwagen', target: 'Taxi & Mietwagen' },
              { title: 'Ich will im Sicherheitsbereich arbeiten', href: '/zertifikate/34a-bewachung', target: '§34a Bewachung' },
              { title: 'Ich will Güter transportieren oder ein Unternehmen führen', href: '/zertifikate/gueterkraftverkehr', target: 'Güterkraftverkehr' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-5 transition hover:border-sky-300/40">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300">Empfohlen: {item.target}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-sky-300/20 bg-[#071a2e] p-6 text-center md:p-8">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Starte mit einem klaren Lernpfad.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Wähle dein Zertifikat, lerne deutsche Prüfungsbegriffe und trainiere mit realistischen Simulationen.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/preise" className="rounded-xl bg-[#d4a84f] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#e2b965]">
              Zertifikat starten
            </Link>
            <Link href="/kontakt" className="rounded-xl border border-sky-300/30 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200/50 hover:bg-sky-400/20">
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
