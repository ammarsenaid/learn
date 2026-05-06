import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FachkundePilot — Prüfungsorientiertes Lernen",
  description:
    "Moderne Lernplattform für deutsche Sach- und Fachkundeprüfungen mit Lernkarten, Prüfungssimulationen, Lernpfaden und mehrsprachigen Erklärungen.",
};

type ProgressTone = "sky" | "green" | "gold" | "red" | "purple";

const navItems = [
  { label: "Zertifikate", href: "#zertifikate" },
  { label: "Methode", href: "#methode" },
  { label: "Preise", href: "#preise" },
  { label: "Erfolge", href: "#erfolge" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

const certificates = [
  {
    icon: "🚕",
    title: "Taxi & Mietwagen",
    number: "01",
    subtitle: "Fachkundeprüfung nach PBefG",
    text: "Tarif-, Orts-, Unternehmer- und Kostenwissen für die Personenbeförderung.",
    meta: "12 Kapitel · 850+ Fragen",
    badge: "Beliebt",
    status: "Aktiv",
    level: "Mittel",
    languages: "DE · AR · EN · TR",
    progress: "82%",
    color: "from-yellow-500/35 to-yellow-300/10",
    border: "border-yellow-400/50",
  },
  {
    icon: "🛡️",
    title: "§34a Bewachung",
    number: "02",
    subtitle: "Sachkundeprüfung nach §34a GewO",
    text: "Recht, Deeskalation und Praxisfälle sicher verstehen und anwenden.",
    meta: "9 Kapitel · 650+ Fragen",
    badge: "Beliebt",
    status: "Aktiv",
    level: "Einsteiger",
    languages: "DE · AR · EN",
    progress: "76%",
    color: "from-purple-500/35 to-purple-300/10",
    border: "border-purple-400/35",
  },
  {
    icon: "🚚",
    title: "Güterkraftverkehr",
    number: "03",
    subtitle: "Fachkundeprüfung Güterverkehr",
    text: "Kostenrechnung, Disposition, Transportrecht und EU-Regeln im Griff.",
    meta: "10 Kapitel · 700+ Fragen",
    badge: "Verfügbar",
    status: "Aktiv",
    level: "Fortgeschritten",
    languages: "DE · EN · TR",
    progress: "68%",
    color: "from-blue-500/35 to-cyan-300/10",
    border: "border-sky-400/35",
  },
  {
    icon: "🪪",
    title: "Versicherung §34d",
    number: "04",
    subtitle: "Sachkunde Versicherungsvermittlung",
    text: "Beratungslogik, Haftung, Produktgrundlagen und Regulatorik verstehen.",
    meta: "8 Kapitel · 600+ Fragen",
    badge: "Geplant",
    status: "Bald",
    level: "Mittel",
    languages: "DE · AR · EN",
    progress: "54%",
    color: "from-emerald-500/35 to-emerald-300/10",
    border: "border-emerald-400/30",
  },
  {
    icon: "📈",
    title: "Finanzanlagen §34f",
    number: "05",
    subtitle: "Sachkunde Finanzanlagenvermittlung",
    text: "Produkte, Risikoaufklärung und regulatorische Pflichten sicher beherrschen.",
    meta: "7 Kapitel · 550+ Fragen",
    badge: "Geplant",
    status: "Bald",
    level: "Fortgeschritten",
    languages: "DE · EN",
    progress: "49%",
    color: "from-orange-500/35 to-orange-300/10",
    border: "border-orange-400/30",
  },
  {
    icon: "🏠",
    title: "Immobiliardarlehen",
    number: "06",
    subtitle: "Sachkunde Darlehensvermittlung",
    text: "Darlehensarten, Finanzierung, Verbraucherschutz und Beratungslogik.",
    meta: "7 Kapitel · 500+ Fragen",
    badge: "Geplant",
    status: "Bald",
    level: "Mittel",
    languages: "DE · AR · TR",
    progress: "46%",
    color: "from-rose-500/35 to-rose-300/10",
    border: "border-rose-400/30",
  },
] as const;

const featureStrip = [
  ["📖", "Erklären", "Deutsche Begriffe verständlich aufbauen."],
  ["🃏", "Karten", "Aktive Wiederholung statt passives Lesen."],
  ["🧪", "Simulation", "Prüfung mit Zeitdruck und Auswertung."],
  ["📊", "Analyse", "Schwächen sichtbar machen."],
  ["🌍", "Sprachen", "DE bleibt, AR/EN/TR helfen."],
  ["📱", "Mobile", "Kurze Sessions unterwegs."],
] as const;

const methodSteps = [
  {
    number: "01",
    title: "Deutsch lesen",
    text: "Originale Begriffe und typische Prüfungsformulierungen sehen.",
  },
  {
    number: "02",
    title: "Einfach verstehen",
    text: "Erklärung in einfacher Sprache und optional AR / EN / TR.",
  },
  {
    number: "03",
    title: "Mit Karten sichern",
    text: "Definitionen, Regeln, Formeln und Falllogik aktiv wiederholen.",
  },
  {
    number: "04",
    title: "Prüfung simulieren",
    text: "Zeitdruck, Punkte, Fehleranalyse und nächste Lernaufgabe.",
  },
] as const;

const steps = [
  ["1", "Zertifikat wählen", "Wähle dein Prüfungsziel und starte mit einem klaren Lernpfad."],
  ["2", "Gezielt lernen", "Lerne Kapitel, Karten, Rechenlogik und Prüfungsfragen."],
  ["3", "Sicher bestehen", "Simuliere die Prüfung und schließe gezielt deine Schwächen."],
] as const;

const testimonials = [
  [
    "MK",
    "Mehmet K.",
    "Taxi & Mietwagen",
    "Ich wusste endlich, was ich jeden Tag lernen muss. Die Struktur war der Unterschied.",
  ],
  [
    "SL",
    "Sarah L.",
    "§34a Bewachung",
    "Die Simulationen fühlen sich realistisch an und zeigen sofort, wo ich schwach bin.",
  ],
  [
    "AA",
    "Ahmed A.",
    "Taxi",
    "Deutsch war mein Problem. Die Erklärungen in meiner Sprache haben mir sehr geholfen.",
  ],
] as const;

const pricingBullets = [
  "Alle aktiven Zertifikate",
  "Lernkarten & Smart Review",
  "Prüfungssimulationen",
  "Mehrsprachige Erklärungen",
  "Fortschrittsanalyse",
] as const;

function Logo() {
  return (
    <a href="#" aria-label="FachkundePilot Startseite" className="flex items-center gap-3">
      <div className="relative grid h-11 w-11 place-items-center rounded-xl border border-[#f6c84f]/50 bg-[#0d1b2e] text-sm font-black text-[#f6c84f] shadow-[0_0_24px_rgba(246,200,79,0.25)]">
        FP
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
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
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#ffe27a] via-[#f6c84f] to-[#c89417] px-7 py-3 text-sm font-black text-[#081526] shadow-[0_10px_30px_rgba(246,200,79,0.35),inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(246,200,79,0.48)] ${className}`}
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
      className={`inline-flex items-center justify-center rounded-xl border border-slate-500/45 bg-[#07172a]/80 px-7 py-3 text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-sky-400/10 ${className}`}
    >
      {children}
    </a>
  );
}

function Progress({
  value,
  color = "sky",
}: {
  value: string;
  color?: ProgressTone;
}) {
  const bg =
    color === "green"
      ? "from-emerald-400 to-lime-300"
      : color === "gold"
        ? "from-yellow-400 to-orange-300"
        : color === "red"
          ? "from-rose-400 to-red-500"
          : color === "purple"
            ? "from-purple-400 to-fuchsia-400"
            : "from-sky-400 to-blue-500";

  return (
    <div className="h-2 overflow-hidden rounded-full bg-black/35">
      <div className={`h-full rounded-full bg-gradient-to-r ${bg}`} style={{ width: value }} />
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto max-w-[1180px] px-4 pt-4">
      <nav
        aria-label="Hauptnavigation"
        className="flex min-h-[72px] items-center justify-between rounded-2xl border border-slate-600/40 bg-[#06172a]/88 px-4 shadow-[0_20px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:px-5"
      >
        <Logo />

        <div className="hidden items-center gap-8 text-sm font-bold text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#sprachen"
            className="hidden rounded-xl border border-slate-600/40 bg-[#07172a] px-4 py-2 text-sm font-black text-white transition hover:bg-white/10 sm:flex"
          >
            DE⌄
          </a>
          <GoldButton className="hidden sm:inline-flex">Jetzt starten</GoldButton>
          <GoldButton className="px-4 sm:hidden">Start</GoldButton>
        </div>
      </nav>

      <nav
        aria-label="Mobile Navigation"
        className="mt-3 flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-[#06172a]/75 p-2 backdrop-blur-xl lg:hidden"
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

function DashboardMockup() {
  const activeCerts = [
    ["🚕", "Taxi & Mietwagen", "85%", "green"],
    ["🛡️", "§34a Bewachung", "62%", "purple"],
    ["🚚", "Güterkraftverkehr", "40%", "gold"],
  ] as const;

  const bars = [35, 50, 42, 65, 48, 78, 92] as const;

  return (
    <div className="relative rounded-[26px] border border-sky-400/45 bg-[#06172c]/95 p-3 shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_70px_rgba(56,189,248,0.35)]">
      <div className="absolute inset-x-10 -bottom-3 h-5 rounded-full bg-sky-400/70 blur-xl" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative rounded-2xl border border-slate-600/35 bg-[#07172a] p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-black text-white">
            <span className="rounded-md bg-yellow-400 px-1.5 py-0.5 text-[10px] text-[#081526]">
              FP
            </span>
            FachkundePilot
          </div>
          <div className="flex gap-3 text-xs text-slate-300">
            <span>⌕</span>
            <span>●</span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-black text-[#07172a]">
              A
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[124px_1fr]">
          <aside className="hidden rounded-xl border border-slate-600/30 bg-[#061326] p-2 text-[11px] font-bold text-slate-400 md:block">
            {["Übersicht", "Zertifikate", "Lernkarten", "Prüfungen", "Analyse", "Einstellungen"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-1 rounded-lg px-3 py-2 ${
                    index === 0
                      ? "border border-sky-400/30 bg-sky-400/15 text-sky-100"
                      : "hover:bg-white/5"
                  }`}
                >
                  {item}
                </div>
              ),
            )}

            <div className="mt-16 rounded-lg px-3 py-2 text-slate-500">Abmelden</div>
          </aside>

          <main>
            <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <p className="text-lg font-black text-white">Guten Abend, Ahmet</p>
                <p className="text-[11px] text-slate-400">
                  Prüfung in 14 Tagen · Heute: 24 Karten fällig
                </p>
              </div>
              <span className="w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-300">
                Lernplan aktiv
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="text-xs font-semibold text-slate-400">Prüfungsreife</p>
                <p className="mt-1 text-4xl font-black tracking-[-0.06em] text-white">78%</p>
                <div className="mt-3">
                  <Progress value="78%" />
                </div>
                <p className="mt-2 text-[10px] text-slate-500">
                  Nächstes Ziel: Kostenrechnung verbessern
                </p>
              </div>

              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="text-xs font-semibold text-slate-400">Lernzeit heute</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-3xl font-black tracking-[-0.06em] text-white">12h</p>
                  <div className="flex h-10 flex-1 items-end gap-1">
                    {bars.map((h) => (
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

            <div className="mt-3 grid gap-3 md:grid-cols-[1.18fr_.82fr]">
              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="mb-3 text-sm font-black text-white">Aktive Zertifikate</p>

                {activeCerts.map(([icon, name, progress, tone]) => (
                  <div
                    key={name}
                    className="mb-2 grid grid-cols-[1fr_76px] items-center gap-3 rounded-lg bg-[#061326] px-3 py-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <span>{icon}</span>
                      {name}
                    </div>
                    <Progress value={progress} color={tone} />
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
                  Heute empfohlen
                </p>
                <p className="mt-3 text-2xl font-black text-white">20 Min.</p>
                <p className="mt-1 text-[11px] leading-5 text-slate-300">
                  Lernkarten Recht & Kostenrechnung
                </p>
                <a
                  href="#methode"
                  className="mt-4 block rounded-lg bg-gradient-to-b from-sky-400 to-blue-600 px-3 py-2 text-center text-xs font-black text-white"
                >
                  Weiterlernen
                </a>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-slate-600/35 bg-[#061326] p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-sky-300">
                    Sprachbrücke
                  </p>
                  <p className="mt-1 text-xs font-bold text-white">
                    Betriebssitz → المكان الرسمي المسجل للشركة
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black text-slate-300">
                  DE → AR
                </span>
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
    ["🌐", "Mehrsprachig", "DE · AR · EN · TR"],
    ["⭐", "4,9/5", "Nutzerbewertung"],
    ["◔", "78%", "Prüfungsreife"],
    ["🎓", "12+", "Zertifikate geplant"],
  ] as const;

  return (
    <div className="grid gap-3 lg:w-[178px]">
      {items.map(([icon, value, text]) => (
        <div
          key={value}
          className="rounded-2xl border border-slate-500/40 bg-[#071a30]/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-sky-400/45 hover:bg-sky-400/10"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-sky-400/30 bg-sky-400/10 text-2xl">
              {icon}
            </div>
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

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#03111f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,139,230,0.24),transparent_35%),radial-gradient(circle_at_20%_10%,rgba(246,200,79,0.1),transparent_24%),linear-gradient(180deg,#03111f_0%,#05172a_60%,#03111f_100%)]" />
      <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(86,161,220,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(86,161,220,.12)_1px,transparent_1px)] [background-size:58px_58px]" />
      <div className="absolute left-1/2 top-28 h-[580px] w-[580px] -translate-x-1/2 rounded-full border border-sky-500/10 bg-sky-500/5 blur-3xl" />

      <div className="relative">
        <Header />

        <div className="mx-auto grid max-w-[1180px] gap-8 px-4 pb-8 pt-7 lg:grid-cols-[408px_1fr_178px] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-xs font-black text-sky-300 shadow-[0_0_26px_rgba(56,189,248,0.18)]">
              Für deutsche Sach- und Fachkundeprüfungen
            </p>

            <h1 className="text-[42px] font-black leading-[1.03] tracking-[-0.058em] text-white sm:text-[56px]">
              Bestehe deine Prüfung.
              <br />
              Mit{" "}
              <span className="bg-gradient-to-r from-[#ffe27a] to-[#f3ad24] bg-clip-text text-transparent">
                Klarheit,
                <br />
                Struktur und System.
              </span>
            </h1>

            <p className="mt-5 max-w-[410px] text-base font-medium leading-7 text-slate-300">
              Deutsch bleibt Prüfungssprache. FachkundePilot erklärt schwierige Begriffe einfach,
              trainiert dich mit Lernkarten und simuliert echte Prüfungssituationen.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <GoldButton>Zertifikat auswählen</GoldButton>
              <DarkButton>Demo ansehen</DarkButton>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["✓", "An offiziellen Themen orientiert"],
                ["850+", "Übungsfragen je nach Kurs"],
                ["DSGVO", "Sicher & sauber geplant"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  className="rounded-xl border border-slate-600/35 bg-[#071a30]/80 p-3 text-[11px] font-bold leading-4 text-slate-300"
                >
                  <span className="mb-1 block text-lg font-black text-yellow-300">{icon}</span>
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
  const stats = [
    ["12+", "Zertifikate geplant", "Für mehrere deutsche Prüfungen"],
    ["1", "Lernsystem", "Lesen, Karten, Fragen, Simulation"],
    ["DE / AR / EN / TR", "Mehrsprachig", "Deutsch lernen, besser verstehen"],
    ["Smart Review", "Fehleranalyse", "Schwächen automatisch wiederholen"],
  ] as const;

  return (
    <section className="mx-auto max-w-[1180px] px-4">
      <div className="grid gap-3 rounded-2xl border border-[#b88a2e]/40 bg-[#06182c]/90 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.35)] md:grid-cols-4">
        {stats.map(([value, title, text], index) => (
          <div
            key={title}
            className={`px-3 ${
              index !== stats.length - 1 ? "md:border-r md:border-slate-500/35" : ""
            }`}
          >
            <p className="text-2xl font-black leading-none text-white">{value}</p>
            <p className="mt-1 text-sm font-black text-yellow-300">{title}</p>
            <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="zertifikate" className="mx-auto max-w-[1180px] px-4 pt-6">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-300">
            Zertifikate
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
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
        {certificates.map((item, index) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border bg-[#071a30]/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(56,189,248,0.14)] ${
              index === 0 ? item.border : "border-slate-600/40 hover:border-sky-400/50"
            }`}
          >
            {index === 0 && (
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-yellow-400/20 blur-3xl" />
            )}

            <div className="relative flex gap-4">
              <div
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br ${item.color} text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}
              >
                {item.icon}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-black tracking-[-0.03em] text-white">
                    {item.number}. {item.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-lg px-2 py-1 text-[10px] font-black ${
                      item.badge === "Beliebt"
                        ? "bg-emerald-400/20 text-emerald-300"
                        : "bg-sky-400/20 text-sky-300"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <p className="mt-1 text-xs font-bold text-slate-300">{item.subtitle}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{item.text}</p>
              </div>
            </div>

            <div className="relative mt-4 grid grid-cols-3 gap-2">
              {[item.meta, item.level, item.languages].map((meta) => (
                <span
                  key={meta}
                  className="rounded-lg bg-white/[0.055] px-2 py-2 text-[10px] font-bold text-slate-300"
                >
                  {meta}
                </span>
              ))}
            </div>

            <div className="relative mt-4">
              <div className="mb-2 flex items-center justify-between text-[11px] font-bold text-slate-400">
                <span>Beispiel-Lernstand</span>
                <span>{item.progress}</span>
              </div>
              <Progress value={item.progress} color={index === 0 ? "gold" : "sky"} />
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-[11px] font-black text-slate-500">{item.status}</span>
              <a href="#preise" className="text-xs font-black text-slate-200 group-hover:text-yellow-300">
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
    <section className="mx-auto max-w-[1180px] px-4 pt-4">
      <div className="grid gap-3 rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-4 md:grid-cols-3 lg:grid-cols-6">
        {featureStrip.map(([icon, title, text], index) => (
          <div
            key={title}
            className={`flex items-start gap-3 ${
              index !== featureStrip.length - 1 ? "lg:border-r lg:border-slate-500/35" : ""
            }`}
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl">
              {icon}
            </div>
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

function MethodSection() {
  return (
    <section id="methode" className="mx-auto max-w-[1180px] px-4 pt-4">
      <div className="grid gap-5 rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-300">
            Lernmethode
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.05em] text-white">
            Aus jedem Fehler wird automatisch der nächste Lernschritt.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Nicht nur lesen. FachkundePilot verbindet Erklärung, Karte, Frage und Simulation in
            einem klaren Ablauf.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {methodSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-xl border border-slate-600/40 bg-[#081d36] p-4"
            >
              <p className="w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] font-black text-yellow-300">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-black text-white">{step.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-400">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsAndTestimonials() {
  return (
    <section id="erfolge" className="mx-auto grid max-w-[1180px] gap-5 px-4 pt-4 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="relative overflow-hidden rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-5">
        <div className="absolute bottom-4 right-7 text-8xl opacity-25">🏆</div>
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

          <div className="mt-5 rounded-xl border border-sky-400/25 bg-sky-400/10 p-4">
            <p className="text-xs font-black text-sky-300">Prüfungsmodus-Beispiel</p>
            <p className="mt-2 text-sm font-bold leading-6 text-white">
              30 Fragen · 45 Minuten · Punkteauswertung · Schwächenliste
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-300">
              Social Proof
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
              Das sagen unsere Teilnehmenden
            </h2>
          </div>
          <p className="hidden text-sm font-black text-yellow-300 sm:block">★★★★★ 4,9/5</p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {testimonials.map(([initials, name, label, quote]) => (
            <article
              key={name}
              className="rounded-xl border border-slate-600/40 bg-[#081d36] p-4 transition hover:border-sky-400/45"
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

        <div className="mt-4 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-slate-600" />
        </div>
      </div>
    </section>
  );
}

function PricingCTA() {
  return (
    <section id="preise" className="mx-auto max-w-[1180px] px-4 pt-4">
      <div className="grid gap-5 rounded-2xl border border-yellow-400/50 bg-[#071a30]/88 p-5 shadow-[0_0_55px_rgba(246,200,79,0.1)] lg:grid-cols-[1.1fr_.75fr_.85fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-black text-yellow-300">
            Dein Erfolg beginnt jetzt
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.05em] text-white">
            Starte heute mit deiner Prüfungsvorbereitung.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Für Lernende, die nicht nur PDFs sammeln möchten, sondern jeden Tag wissen wollen:
            Was muss ich lernen? Was sitzt schon? Was kommt als Nächstes?
          </p>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Hinweis: FachkundePilot ist eine Lernplattform und keine offizielle IHK- oder
            Behördenplattform.
          </p>
        </div>

        <div className="grid gap-2 text-sm font-bold text-slate-200">
          {pricingBullets.map((item) => (
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
          <GoldButton className="mt-5 w-full">Jetzt starten →</GoldButton>
          <p className="mt-3 text-xs font-bold text-slate-400">7 Tage kostenlos testen</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const groups = [
    ["Produkt", "Zertifikate", "Methode", "Preise", "Erfolge"],
    ["Unternehmen", "Über uns", "Akademien", "Kontakt"],
    ["Rechtliches", "Datenschutz", "Impressum", "AGB"],
    ["Folge uns", "Facebook", "Instagram", "YouTube", "LinkedIn"],
  ] as const;

  return (
    <footer id="kontakt" className="mt-4 border-t border-yellow-400/20 bg-[#041120]">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-8 text-sm text-slate-400 md:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs leading-6">
            Prüfungsorientiertes Lernen für deutsche Sach- und Fachkundeprüfungen.
          </p>

          <div className="mt-4 flex gap-3">
            {["f", "ig", "yt", "in"].map((item) => (
              <a
                key={item}
                href="#"
                aria-label={item}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 font-black text-white transition hover:bg-yellow-400 hover:text-[#081526]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {groups.map(([title, ...links]) => (
          <div key={title}>
            <p className="mb-3 font-black text-white">{title}</p>
            <div className="space-y-2">
              {links.map((link) => (
                <a key={link} href="#" className="block transition hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1180px] border-t border-slate-700/60 px-4 py-5 text-center text-xs text-slate-500">
        © 2026 FachkundePilot. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#061526]/90 p-3 backdrop-blur-xl md:hidden">
      <GoldButton className="w-full">Kostenlos starten →</GoldButton>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03111f] pb-20 text-white md:pb-0">
      <Hero />
      <StatStrip />
      <Certificates />
      <FeatureStrip />
      <MethodSection />
      <StepsAndTestimonials />
      <PricingCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
