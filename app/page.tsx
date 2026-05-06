import type { Metadata } from "next";
import type { ReactNode } from "react";

type ProgressTone = "sky" | "green" | "gold";

export const metadata: Metadata = {
  title: "FachkundePilot — Prüfungsorientiertes Lernen",
  description:
    "Moderne Lernplattform für deutsche Sach- und Fachkundeprüfungen mit Lernkarten, Prüfungssimulationen und mehrsprachigen Erklärungen.",
};

const navItems = [
  { label: "Zertifikate", href: "#zertifikate" },
  { label: "So funktioniert’s", href: "#so-funktionierts" },
  { label: "Preise", href: "#preise" },
  { label: "Erfolgsgeschichten", href: "#erfolgsgeschichten" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

const certificates = [
  {
    code: "TM",
    title: "Taxi & Mietwagen",
    subtitle: "Fachkundeprüfung nach PBefG",
    text: "Meistere Tarif-, Orts- und Unternehmerwissen für deine Personenbeförderung.",
    meta: "12 Kapitel · 850+ Fragen",
    badge: "Beliebt",
    color: "from-yellow-500/35 to-yellow-300/10",
  },
  {
    code: "34A",
    title: "§34a Bewachung",
    subtitle: "Sachkundeprüfung nach §34a GewO",
    text: "Recht, Deeskalation und Praxisfälle sicher verstehen und anwenden.",
    meta: "9 Kapitel · 650+ Fragen",
    badge: "Beliebt",
    color: "from-purple-500/35 to-purple-300/10",
  },
  {
    code: "GV",
    title: "Güterkraftverkehr",
    subtitle: "Fachkundeprüfung Güterverkehr",
    text: "Kostenrechnung, Disposition und EU-Regeln für Güterverkehr im Griff.",
    meta: "10 Kapitel · 700+ Fragen",
    badge: "Verfügbar",
    color: "from-blue-500/35 to-cyan-300/10",
  },
  {
    code: "34D",
    title: "Versicherung §34d",
    subtitle: "Sachkundeprüfung Versicherungsvermittlung",
    text: "Beratungslogik, Haftung und Produktgrundlagen verstehen.",
    meta: "8 Kapitel · 600+ Fragen",
    badge: "Verfügbar",
    color: "from-emerald-500/35 to-emerald-300/10",
  },
  {
    code: "34F",
    title: "Finanzanlagen §34f",
    subtitle: "Sachkundeprüfung Finanzanlagenvermittlung",
    text: "Produkte, Risikoaufklärung und Regulatorik sicher beherrschen.",
    meta: "7 Kapitel · 550+ Fragen",
    badge: "Verfügbar",
    color: "from-orange-500/35 to-orange-300/10",
  },
  {
    code: "IM",
    title: "Immobiliardarlehen",
    subtitle: "Sachkundeprüfung Darlehensvermittlung",
    text: "Darlehensarten, Finanzierung und Verbraucherschutz im Blick.",
    meta: "7 Kapitel · 500+ Fragen",
    badge: "Verfügbar",
    color: "from-rose-500/35 to-rose-300/10",
  },
] as const;

const features = [
  ["DE", "Verständliche Erklärungen", "Komplexe Themen einfach erklärt."],
  ["SIM", "Prüfungssimulation", "Realistische Prüfungen unter echten Bedingungen."],
  ["CARD", "Lernkarten", "Smarte Wiederholung für maximalen Lernerfolg."],
  ["DATA", "Fortschritt verfolgen", "Deinen Lernstand jederzeit im Blick."],
  ["MOB", "Mobil lernen", "Jederzeit auf allen Geräten."],
  ["LANG", "Mehrsprachige Unterstützung", "In deiner Sprache verstehen."],
] as const;

const steps = [
  ["1", "Zertifikat wählen", "Wähle das Zertifikat, das zu deinem Ziel passt."],
  ["2", "Lernen & üben", "Lerne mit Erklärungen, Lernkarten und Fragen."],
  ["3", "Prüfung bestehen", "Teste dein Wissen realistisch und sicher."],
] as const;

const testimonials = [
  [
    "MK",
    "Mehmet K.",
    "Taxi & Mietwagen",
    "Dank FachkundePilot habe ich meine Prüfung beim ersten Versuch bestanden.",
  ],
  [
    "SL",
    "Sarah L.",
    "§34a",
    "Die Erklärungen sind verständlich und die Simulationen realitätsnah.",
  ],
  ["AA", "Ahmed A.", "Taxi", "Endlich eine Plattform, die alles an einem Ort bietet."],
] as const;

function Logo() {
  return (
    <a href="#" aria-label="FachkundePilot Startseite" className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#f6c84f]/50 bg-[#0d1b2e] text-sm font-black text-[#f6c84f] shadow-[0_0_24px_rgba(246,200,79,0.25)]">
        FP
      </div>
      <div>
        <p className="text-xl font-black leading-none tracking-[-0.04em] text-white">
          FachkundePilot
        </p>
        <p className="mt-1 text-[11px] font-semibold text-slate-400">
          Prüfungsorientiertes Lernen
        </p>
      </div>
    </a>
  );
}

function GoldButton({
  children,
  href = "#preise",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#ffe27a] via-[#f6c84f] to-[#c89417] px-7 py-3 text-sm font-black text-[#081526] shadow-[0_10px_30px_rgba(246,200,79,0.35),inset_0_1px_0_rgba(255,255,255,0.65)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-300/70 ${className}`}
    >
      {children}
    </a>
  );
}

function DarkButton({
  children,
  href = "#zertifikate",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl border border-slate-500/45 bg-[#07172a]/80 px-7 py-3 text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-300/50 ${className}`}
    >
      {children}
    </a>
  );
}

function CodeBadge({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-[11px] font-black tracking-[-0.03em] text-[#f6c84f] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      {children}
    </div>
  );
}

function Progress({ value, color = "sky" }: { value: string; color?: ProgressTone }) {
  const bg =
    color === "green"
      ? "from-emerald-400 to-lime-300"
      : color === "gold"
        ? "from-yellow-400 to-orange-300"
        : "from-sky-400 to-blue-500";

  return (
    <div className="h-2 overflow-hidden rounded-full bg-black/35">
      <div className={`h-full rounded-full bg-gradient-to-r ${bg}`} style={{ width: value }} />
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-sky-400/45 bg-[#06172c]/95 p-3 shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_55px_rgba(56,189,248,0.35)]">
      <div className="absolute inset-x-10 -bottom-3 h-5 rounded-full bg-sky-400/70 blur-xl" />

      <div className="rounded-xl border border-slate-600/35 bg-[#07172a] p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-black text-white">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-yellow-400 text-[10px] text-[#071526]">
              FP
            </span>
            FachkundePilot
          </div>
          <div className="flex gap-2 text-xs text-slate-300">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">S</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">N</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[10px] text-[#07172a]">
              A
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[120px_1fr]">
          <aside className="hidden rounded-xl border border-slate-600/30 bg-[#061326] p-2 text-[11px] font-bold text-slate-400 md:block">
            {["Übersicht", "Zertifikate", "Lernkarten", "Prüfungen", "Fortschritt", "Einstellungen"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-1 rounded-lg px-3 py-2 ${
                    index === 0
                      ? "border border-sky-400/30 bg-sky-400/15 text-sky-100"
                      : ""
                  }`}
                >
                  {item}
                </div>
              ),
            )}

            <div className="mt-14 rounded-lg px-3 py-2 text-slate-500">Abmelden</div>
          </aside>

          <main>
            <div className="mb-3">
              <p className="text-lg font-black text-white">Guten Abend, Ahmet</p>
              <p className="text-[11px] text-slate-400">
                Schön, dass du weiter an deinem Ziel arbeitest.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="text-xs font-semibold text-slate-400">Dein Gesamtfortschritt</p>
                <p className="mt-1 text-4xl font-black tracking-[-0.06em] text-white">78%</p>
                <div className="mt-3">
                  <Progress value="78%" />
                </div>
                <p className="mt-2 text-[10px] text-slate-500">Sehr gut. Weiter so.</p>
              </div>

              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="text-xs font-semibold text-slate-400">Lernzeit heute</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-3xl font-black tracking-[-0.06em] text-white">12h</p>
                  <div className="flex h-10 flex-1 items-end gap-1">
                    {[35, 50, 42, 65, 48, 78, 92].map((h) => (
                      <span
                        key={h}
                        className="w-full rounded-t bg-gradient-to-t from-sky-600 to-sky-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-slate-500">+2h 15 min gegenüber gestern</p>
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[1.25fr_.75fr]">
              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="mb-3 text-sm font-black text-white">Aktive Zertifikate</p>

                {[
                  ["TM", "Taxi & Mietwagen", "85%", "green"],
                  ["34A", "§34a Bewachung", "62%", "green"],
                  ["GV", "Güterkraftverkehr", "40%", "gold"],
                ].map(([code, name, progress, tone]) => (
                  <div
                    key={name}
                    className="mb-2 grid grid-cols-[1fr_70px] items-center gap-3 rounded-lg bg-[#061326] px-3 py-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] text-yellow-300">
                        {code}
                      </span>
                      {name}
                    </div>
                    <Progress value={progress} color={tone === "gold" ? "gold" : "green"} />
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="text-xs font-bold text-slate-400">Heute empfohlen</p>
                <p className="mt-3 text-2xl font-black text-white">20 Min.</p>
                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Lernkarten Recht & Kostenrechnung
                </p>
                <a
                  href="#so-funktionierts"
                  className="mt-4 block w-full rounded-lg bg-gradient-to-b from-sky-400 to-blue-600 px-3 py-2 text-center text-xs font-black text-white"
                >
                  Weiterlernen
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function SideStats() {
  const items = [
    ["LANG", "Mehrsprachig", "DE · AR · EN · TR"],
    ["4.9", "4,9/5", "Nutzerbewertung"],
    ["78%", "78%", "Dein Lernstand"],
    ["12+", "12+", "Zertifikate verfügbar"],
  ] as const;

  return (
    <div className="grid gap-3 lg:w-[170px]">
      {items.map(([code, value, text]) => (
        <div
          key={value}
          className="rounded-2xl border border-slate-500/40 bg-[#071a30]/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <div className="flex items-center gap-3">
            <CodeBadge>{code}</CodeBadge>
            <div>
              <p className="text-lg font-black leading-none text-white">{value}</p>
              <p className="mt-1 text-[11px] font-semibold text-slate-400">{text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto max-w-[1130px] px-4 pt-4">
      <nav
        aria-label="Hauptnavigation"
        className="flex min-h-[68px] items-center justify-between rounded-2xl border border-slate-600/40 bg-[#06172a]/88 px-4 shadow-[0_20px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:px-5"
      >
        <Logo />

        <div className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#sprache"
            className="hidden rounded-xl border border-slate-600/40 bg-[#07172a] px-4 py-2 text-sm font-black text-white sm:flex"
          >
            DE
          </a>
          <GoldButton href="#preise">Jetzt starten</GoldButton>
        </div>
      </nav>

      <nav
        aria-label="Mobile Navigation"
        className="mt-3 flex gap-2 overflow-x-auto rounded-2xl border border-slate-600/40 bg-[#06172a]/80 p-2 lg:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="shrink-0 rounded-xl bg-white/[0.06] px-4 py-2 text-xs font-black text-slate-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#03111f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,139,230,0.23),transparent_35%),radial-gradient(circle_at_20%_10%,rgba(246,200,79,0.08),transparent_24%),linear-gradient(180deg,#03111f_0%,#05172a_60%,#03111f_100%)]" />
      <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(86,161,220,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(86,161,220,.12)_1px,transparent_1px)] [background-size:58px_58px]" />
      <div className="absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-sky-500/10 bg-sky-500/5 blur-3xl" />

      <div className="relative">
        <Header />

        <div className="mx-auto grid max-w-[1130px] gap-8 px-4 pb-8 pt-7 lg:grid-cols-[390px_1fr_170px] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-xs font-black text-sky-300 shadow-[0_0_26px_rgba(56,189,248,0.18)]">
              Die Lernplattform für offizielle Sach- und Fachkundeprüfungen.
            </p>

            <h1 className="text-[42px] font-black leading-[1.03] tracking-[-0.055em] text-white sm:text-[54px]">
              Bestehe deine Prüfung.
              <br />
              Mit{" "}
              <span className="bg-gradient-to-r from-[#ffe27a] to-[#f3ad24] bg-clip-text text-transparent">
                Klarheit,
                <br />
                Struktur und System.
              </span>
            </h1>

            <p className="mt-5 max-w-[390px] text-base font-medium leading-7 text-slate-300">
              Verständliche Erklärungen in deiner Sprache, smarte Lernkarten, realistische
              Prüfungen und mobiles Lernen — alles an einem Ort.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <GoldButton href="#preise">Jetzt starten</GoldButton>
              <DarkButton href="#zertifikate">Alle Zertifikate ansehen</DarkButton>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["STOFF", "Offizieller Prüfungsstoff"],
                ["FRAGEN", "Tausende Übungsfragen"],
                ["DSGVO", "Sicher & DSGVO-konform"],
              ].map(([code, text]) => (
                <div
                  key={text}
                  className="rounded-xl border border-slate-600/35 bg-[#071a30]/80 p-3 text-[11px] font-bold leading-4 text-slate-300"
                >
                  <span className="mb-1 block text-xs font-black text-yellow-300">{code}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <DashboardMockup />
          <SideStats />
        </div>
      </div>
    </section>
  );
}

function StatStrip() {
  return (
    <section className="mx-auto max-w-[1130px] px-4">
      <div className="grid gap-3 rounded-2xl border border-[#b88a2e]/40 bg-[#06182c]/90 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] md:grid-cols-4">
        {[
          ["12+", "12+", "Zertifikate geplant"],
          ["ONE", "1", "Plattform für alle Lernpfade"],
          ["LANG", "DE / AR / EN / TR", "Mehrsprachige Inhalte"],
          ["SIM", "Prüfungssimulation", "und Lernkarten"],
        ].map(([code, value, text], index) => (
          <div
            key={value}
            className={`flex items-center gap-4 px-3 ${
              index !== 3 ? "md:border-r md:border-slate-500/35" : ""
            }`}
          >
            <CodeBadge>{code}</CodeBadge>
            <div>
              <p className="text-2xl font-black leading-none text-white">{value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="zertifikate" className="mx-auto max-w-[1130px] px-4 pt-5">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-white">
            Zertifikate entdecken
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-400">
            Wähle dein Ziel und starte mit einer klaren Prüfungsvorbereitung.
          </p>
        </div>

        <a href="#preise" className="hidden text-sm font-black text-sky-400 md:block">
          Mitgliedschaft ansehen →
        </a>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_18px_50px_rgba(56,189,248,0.14)]"
          >
            <div className="flex gap-4">
              <div
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br ${item.color} text-xs font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}
              >
                {item.code}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-black tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-1 text-xs font-bold text-slate-300">{item.subtitle}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{item.text}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs font-bold text-slate-400">{item.meta}</p>
              <span
                className={`rounded-lg px-2 py-1 text-[10px] font-black ${
                  item.badge === "Beliebt"
                    ? "bg-emerald-400/20 text-emerald-300"
                    : "bg-sky-400/20 text-sky-300"
                }`}
              >
                {item.badge}
              </span>
            </div>

            <div className="mt-3 flex justify-end">
              <a
                href="#preise"
                className="text-xs font-black text-slate-200 group-hover:text-yellow-300"
              >
                Mehr erfahren →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="mx-auto max-w-[1130px] px-4 pt-4">
      <div className="grid gap-3 rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-4 md:grid-cols-3 lg:grid-cols-6">
        {features.map(([code, title, text], index) => (
          <div
            key={title}
            className={`flex items-start gap-3 ${
              index !== features.length - 1 ? "lg:border-r lg:border-slate-500/35" : ""
            }`}
          >
            <CodeBadge>{code}</CodeBadge>
            <div>
              <p className="text-sm font-black leading-4 text-white">{title}</p>
              <p className="mt-1 text-[11px] leading-4 text-slate-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepsAndTestimonials() {
  return (
    <section
      id="so-funktionierts"
      className="mx-auto grid max-w-[1130px] gap-5 px-4 pt-4 lg:grid-cols-[.8fr_1.2fr]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-5">
        <div className="absolute bottom-4 right-7 text-8xl font-black text-yellow-400/10">
          100%
        </div>
        <div className="relative">
          <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
            So funktioniert’s
          </h2>

          <div className="mt-5 space-y-3">
            {steps.map(([num, title, text]) => (
              <div key={num} className="grid grid-cols-[44px_1fr] gap-4">
                <div className="relative">
                  <div className="grid h-9 w-9 place-items-center rounded-full border border-yellow-400 bg-[#0b1b2f] text-sm font-black text-yellow-300">
                    {num}
                  </div>
                  {num !== "3" && (
                    <div className="absolute left-[17px] top-9 h-8 border-l border-dashed border-yellow-400/60" />
                  )}
                </div>
                <div>
                  <p className="font-black text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="erfolgsgeschichten" className="rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-5">
        <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
          Das sagen unsere Teilnehmenden
        </h2>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {testimonials.map(([initials, name, label, quote]) => (
            <article
              key={name}
              className="rounded-xl border border-slate-600/40 bg-[#081d36] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-sky-500/50 to-purple-500/40 text-sm font-black text-white">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-black text-white">{name}</p>
                  <p className="text-[10px] font-bold text-slate-400">{label}</p>
                </div>
              </div>
              <p className="mt-2 text-yellow-300">★★★★★</p>
              <p className="mt-3 text-xs leading-5 text-slate-300">„{quote}“</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="preise" className="mx-auto max-w-[1130px] px-4 pt-4">
      <div className="grid gap-5 rounded-2xl border border-yellow-400/50 bg-[#071a30]/88 p-5 shadow-[0_0_55px_rgba(246,200,79,0.1)] lg:grid-cols-[1.2fr_.72fr_.72fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-black text-yellow-300">
            Dein Erfolg beginnt jetzt
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.05em] text-white">
            Starte heute mit deiner Prüfungsvorbereitung.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Lerne mit klaren Lernpfaden, smarten Lernkarten und realistischen Prüfungen — für
            deinen sicheren Erfolg.
          </p>
        </div>

        <div className="grid gap-2 text-sm font-bold text-slate-200">
          {[
            "Zugriff auf alle Kurse & Zertifikate",
            "Prüfungssimulationen & Lernkarten",
            "Mehrsprachige Inhalte",
            "Lernen auf allen Geräten",
            "DSGVO-konform & sicher",
          ].map((item) => (
            <p key={item} className="flex items-center gap-2">
              <span className="text-yellow-300">✓</span> {item}
            </p>
          ))}
        </div>

        <div className="rounded-2xl border border-yellow-400/60 bg-gradient-to-br from-yellow-400/15 to-[#081d36] p-5 text-center shadow-[0_0_35px_rgba(246,200,79,0.18)]">
          <p className="mx-auto w-fit rounded-full bg-yellow-400 px-4 py-1 text-xs font-black text-[#081526]">
            Premium
          </p>
          <p className="mt-4 text-sm font-bold text-slate-300">
            Alles inklusive für deinen Prüfungserfolg
          </p>
          <p className="mt-3 text-4xl font-black tracking-[-0.06em] text-yellow-300">
            9,90 €<span className="text-sm text-slate-300"> / Monat</span>
          </p>
          <p className="text-xs font-bold text-slate-500">Monatlich kündbar</p>
          <GoldButton href="#kontakt" className="mt-4 w-full">
            Jetzt starten →
          </GoldButton>
          <p className="mt-3 text-xs font-bold text-slate-400">7 Tage kostenlos testen</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="kontakt" className="mt-4 border-t border-yellow-400/20 bg-[#041120]">
      <div className="mx-auto grid max-w-[1130px] gap-8 px-4 py-8 text-sm text-slate-400 md:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs leading-6">
            Prüfungsorientiertes Lernen für deutsche Sach- und Fachkundeprüfungen.
          </p>

          <div className="mt-4 flex gap-3">
            {["FB", "IG", "YT", "IN"].map((item) => (
              <span
                key={item}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-black text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {[
          ["Produkt", "Zertifikate", "So funktioniert’s", "Preise", "Erfolgsgeschichten"],
          ["Unternehmen", "Über uns", "Karriere", "Kontakt"],
          ["Rechtliches", "Datenschutz", "Impressum", "AGB"],
          ["Folge uns", "Facebook", "Instagram", "YouTube", "LinkedIn"],
        ].map(([title, ...links]) => (
          <div key={title}>
            <p className="mb-3 font-black text-white">{title}</p>
            <div className="space-y-2">
              {links.map((link) => (
                <p key={link}>{link}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1130px] border-t border-slate-700/60 px-4 py-5 text-center text-xs text-slate-500">
        © 2026 FachkundePilot. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03111f] pb-20 text-white md:pb-0">
      <Hero />
      <StatStrip />
      <Certificates />
      <FeatureStrip />
      <StepsAndTestimonials />
      <CTA />
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#061526]/90 p-3 backdrop-blur-xl md:hidden">
        <GoldButton href="#preise" className="w-full">
          Kostenlos starten →
        </GoldButton>
      </div>
    </main>
  );
}
