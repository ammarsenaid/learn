import OfficialDisclaimer from '@/components/site/OfficialDisclaimer';
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FachkundePilot — Deutsche Fachkundeprüfungen gezielt bestehen",
  description:
    "FachkundePilot hilft Lernenden bei deutschen Sach- und Fachkundeprüfungen mit Lernpfaden, Lernkarten, Prüfungssimulationen, Fehleranalyse und mehrsprachigen Erklärungen.",
  openGraph: {
    title: "FachkundePilot — Prüfungsorientiertes Lernen",
    description:
      "Deutsch lernen. In deiner Sprache verstehen. Mit Lernkarten, Prüfungssimulation und klaren Lernpfaden gezielt vorbereiten.",
    type: "website",
    locale: "de_DE",
  },
};

type IconName =
  | "car"
  | "shield"
  | "truck"
  | "badge"
  | "chart"
  | "home"
  | "book"
  | "cards"
  | "target"
  | "analytics"
  | "globe"
  | "mobile"
  | "check"
  | "warning"
  | "users"
  | "brain"
  | "route";

type ProgressTone = "sky" | "green" | "gold" | "red" | "purple";

const navItems = [
  { label: "Zertifikate", href: "/zertifikate" },
  { label: "Problem", href: "#problem" },
  { label: "Methode", href: "/methode" },
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: "/faq" },
];

const certificates = [
  {
    icon: "car",
    title: "Taxi & Mietwagen",
    number: "01",
    subtitle: "Fachkundeprüfung nach PBefG",
    text: "Tarif-, Orts-, Unternehmer- und Kostenwissen für die Personenbeförderung.",
    meta: "12 Kapitel · viele Übungsfragen",
    badge: "Start-Zertifikat",
    status: "Jetzt vorbereiten",
    level: "Mittel",
    languages: "DE · AR · EN · TR",
    progress: "82%",
    href: "#preise",
    color: "from-yellow-500/35 to-yellow-300/10",
    border: "border-yellow-400/50",
  },
  {
    icon: "shield",
    title: "§34a Bewachung",
    number: "02",
    subtitle: "Sachkundeprüfung nach §34a GewO",
    text: "Recht, Deeskalation und Praxisfälle sicher verstehen und anwenden.",
    meta: "9 Kapitel · Simulationen",
    badge: "Beliebt",
    status: "Aktiv",
    level: "Einsteiger",
    languages: "DE · AR · EN",
    progress: "76%",
    href: "#preise",
    color: "from-purple-500/35 to-purple-300/10",
    border: "border-purple-400/35",
  },
  {
    icon: "truck",
    title: "Güterkraftverkehr",
    number: "03",
    subtitle: "Fachkundeprüfung Güterverkehr",
    text: "Kostenrechnung, Disposition, Transportrecht und EU-Regeln im Griff.",
    meta: "10 Kapitel · Rechnen",
    badge: "Verfügbar",
    status: "Aktiv",
    level: "Fortgeschritten",
    languages: "DE · EN · TR",
    progress: "68%",
    href: "#preise",
    color: "from-blue-500/35 to-cyan-300/10",
    border: "border-sky-400/35",
  },
  {
    icon: "badge",
    title: "Versicherung §34d",
    number: "04",
    subtitle: "Sachkunde Versicherungsvermittlung",
    text: "Beratungslogik, Haftung, Produktgrundlagen und Regulatorik verstehen.",
    meta: "8 Kapitel · Beratung",
    badge: "Geplant",
    status: "Bald",
    level: "Mittel",
    languages: "DE · AR · EN",
    progress: "54%",
    href: "#preise",
    color: "from-emerald-500/35 to-emerald-300/10",
    border: "border-emerald-400/30",
  },
  {
    icon: "chart",
    title: "Finanzanlagen §34f",
    number: "05",
    subtitle: "Sachkunde Finanzanlagenvermittlung",
    text: "Produkte, Risikoaufklärung und regulatorische Pflichten sicher beherrschen.",
    meta: "7 Kapitel · Risiko",
    badge: "Geplant",
    status: "Bald",
    level: "Fortgeschritten",
    languages: "DE · EN",
    progress: "49%",
    href: "#preise",
    color: "from-orange-500/35 to-orange-300/10",
    border: "border-orange-400/30",
  },
  {
    icon: "home",
    title: "Immobiliardarlehen",
    number: "06",
    subtitle: "Sachkunde Darlehensvermittlung",
    text: "Darlehensarten, Finanzierung, Verbraucherschutz und Beratungslogik.",
    meta: "7 Kapitel · Finanzierung",
    badge: "Geplant",
    status: "Bald",
    level: "Mittel",
    languages: "DE · AR · TR",
    progress: "46%",
    href: "#preise",
    color: "from-rose-500/35 to-rose-300/10",
    border: "border-rose-400/30",
  },
] as const;

const painPoints = [
  {
    icon: "warning",
    title: "PDFs sind unübersichtlich",
    text: "Viele Lernende sammeln Unterlagen, aber wissen nicht, was heute wirklich wichtig ist.",
  },
  {
    icon: "globe",
    title: "Deutsch ist die Hürde",
    text: "Die Prüfung ist deutsch. Fachbegriffe müssen sitzen, auch wenn man sie erst übersetzen muss.",
  },
  {
    icon: "target",
    title: "Prüfungsdruck fehlt",
    text: "Lesen reicht nicht. Man muss unter Zeitdruck Fragen sicher verstehen und beantworten.",
  },
  {
    icon: "brain",
    title: "Rechnen blockiert viele",
    text: "Kostenrechnung, Prozentfragen und Formeln bremsen den Lernfluss kurz vor der Prüfung.",
  },
] as const;

const featureStrip = [
  ["book", "Erklären", "Deutsche Begriffe verständlich aufbauen."],
  ["cards", "Karten", "Aktive Wiederholung statt passives Lesen."],
  ["target", "Simulation", "Prüfung mit Zeitdruck und Auswertung."],
  ["analytics", "Analyse", "Schwächen sichtbar machen."],
  ["globe", "Sprachen", "DE bleibt, AR/EN/TR helfen."],
  ["mobile", "Mobile", "Kurze Sessions unterwegs."],
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

const pricingPlans = [
  {
    name: "Kostenlos",
    price: "0 €",
    period: "",
    label: "Zum Testen",
    description: "Für den ersten Eindruck der Lernlogik.",
    benefits: ["Demo-Lektionen", "Beispielkarten", "1 Mini-Simulation", "Einblick in Fortschritt"],
    featured: false,
  },
  {
    name: "Einzelzertifikat",
    price: "9,90 €",
    period: "/ Monat",
    label: "Beliebt",
    description: "Für ein konkretes Prüfungsziel.",
    benefits: [
      "1 Zertifikat vollständig",
      "Lernkarten & Smart Review",
      "Prüfungssimulationen",
      "Mehrsprachige Erklärungen",
      "Fortschrittsanalyse",
    ],
    featured: true,
  },
  {
    name: "Alle Zertifikate",
    price: "19,90 €",
    period: "/ Monat",
    label: "Für mehrere Ziele",
    description: "Für Lernende mit mehreren Prüfungen.",
    benefits: [
      "Alle aktiven Zertifikate",
      "Alle Simulationen",
      "Alle Sprachen",
      "Priorisierte Wiederholung",
      "Neue Kurse inklusive",
    ],
    featured: false,
  },
  {
    name: "Akademie",
    price: "Individuell",
    period: "",
    label: "B2B",
    description: "Für Schulen, Anbieter und Teams.",
    benefits: [
      "Nutzerverwaltung",
      "Dozentenrollen",
      "Content-Verwaltung",
      "Team-Fortschritt",
      "Individuelle Einrichtung",
    ],
    featured: false,
  },
] as const;

const testimonials = [
  [
    "MK",
    "Mehmet K.",
    "Taxi & Mietwagen",
    "Ich konnte PBefG und BOKraft nie sauber trennen. Die Karten und Beispiele haben es endlich klar gemacht.",
  ],
  [
    "SL",
    "Sarah L.",
    "§34a Bewachung",
    "Die Simulationen zeigen sofort, wo man unsicher ist. Genau das hat mir beim Wiederholen geholfen.",
  ],
  [
    "AA",
    "Ahmed A.",
    "Taxi",
    "Deutsch war mein größtes Problem. Die arabischen Erklärungen haben mir geholfen, die deutschen Begriffe zu behalten.",
  ],
] as const;

const faqItems = [
  {
    question: "Ist FachkundePilot eine offizielle IHK- oder Behördenplattform?",
    answer:
      "Nein. FachkundePilot ist eine private Lernplattform. Die Inhalte sollen sich an offiziellen Themenbereichen orientieren, sind aber keine offizielle IHK- oder Behördenquelle.",
  },
  {
    question: "Bleibt die Prüfungssprache Deutsch?",
    answer:
      "Ja. Die Prüfung ist auf Deutsch. Andere Sprachen helfen beim Verstehen, aber die deutschen Begriffe bleiben im Mittelpunkt.",
  },
  {
    question: "Kann ich auf Arabisch lernen?",
    answer:
      "Ja. Die Plattform ist darauf ausgelegt, deutsche Begriffe mit einfachen Erklärungen in Arabisch, Englisch oder Türkisch zu verbinden.",
  },
  {
    question: "Kann ich mehrere Zertifikate lernen?",
    answer:
      "Ja. Die Plattform ist für mehrere deutsche Sach- und Fachkundeprüfungen geplant, nicht nur für Taxi & Mietwagen.",
  },
] as const;

function SvgIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {name === "car" && (
        <>
          <path d="M5 13l1.6-4.2A3 3 0 019.4 7h5.2a3 3 0 012.8 1.8L19 13" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 13h16v5a1 1 0 01-1 1h-1.2a1 1 0 01-1-1v-1H7.2v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-5z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 15h.01M17 15h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </>
      )}

      {name === "shield" && (
        <path d="M12 3l7 3v5c0 4.8-3 8.2-7 10-4-1.8-7-5.2-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" />
      )}

      {name === "truck" && (
        <>
          <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 19a2 2 0 100-4 2 2 0 000 4zM18 19a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}

      {name === "badge" && (
        <>
          <rect x="5" y="3" width="14" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {name === "chart" && (
        <>
          <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 15l4-4 3 3 5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {name === "home" && (
        <>
          <path d="M4 11l8-7 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 10v10h12V10" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}

      {name === "book" && (
        <>
          <path d="M5 4h9a3 3 0 013 3v13H8a3 3 0 00-3 3V4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M17 7h2v13h-2" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}

      {name === "cards" && (
        <>
          <rect x="7" y="4" width="11" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 7v12a2 2 0 002 2h8" stroke="currentColor" strokeWidth="1.8" />
        </>
      )}

      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 12h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </>
      )}

      {name === "analytics" && (
        <>
          <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M3 19h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {name === "globe" && (
        <>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 12h18M12 3c2.5 2.4 3.7 5.4 3.7 9S14.5 18.6 12 21M12 3C9.5 5.4 8.3 8.4 8.3 12S9.5 18.6 12 21" stroke="currentColor" strokeWidth="1.4" />
        </>
      )}

      {name === "mobile" && (
        <>
          <rect x="8" y="3" width="8" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {name === "check" && (
        <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}

      {name === "warning" && (
        <>
          <path d="M12 3l10 18H2L12 3z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 9v5M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {name === "users" && (
        <>
          <path d="M9 11a3 3 0 100-6 3 3 0 000 6zM17 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 20a6 6 0 0112 0M14 19a5 5 0 017 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {name === "brain" && (
        <path d="M9 4a3 3 0 00-3 3v1a3 3 0 00-2 5.2A3.5 3.5 0 007.5 19H10V4H9zM15 4a3 3 0 013 3v1a3 3 0 012 5.2A3.5 3.5 0 0116.5 19H14V4h1z" stroke="currentColor" strokeWidth="1.8" />
      )}

      {name === "route" && (
        <>
          <path d="M6 6h.01M18 18h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M6 6c8 0 12 2 12 6s-4 6-12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function Logo() {
  return (
    <a href="/" aria-label="FachkundePilot Startseite" className="flex items-center gap-3">
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
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#ffe27a] via-[#f6c84f] to-[#c89417] px-7 py-3.5 text-sm font-black text-[#081526] shadow-[0_10px_30px_rgba(246,200,79,0.35),inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(246,200,79,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03111f] ${className}`}
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
      className={`inline-flex items-center justify-center rounded-xl border border-slate-500/45 bg-[#07172a]/80 px-7 py-3.5 text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-sky-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03111f] ${className}`}
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

function IconBox({
  icon,
  tone = "sky",
}: {
  icon: IconName;
  tone?: "sky" | "gold" | "green" | "purple" | "red";
}) {
  const toneClass =
    tone === "gold"
      ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
      : tone === "green"
        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
        : tone === "purple"
          ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
          : tone === "red"
            ? "border-rose-400/30 bg-rose-400/10 text-rose-300"
            : "border-sky-400/30 bg-sky-400/10 text-sky-300";

  return (
    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${toneClass}`}>
      <SvgIcon name={icon} />
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto max-w-[1240px] px-4 pt-4">
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
            href="/methode"
            className="hidden rounded-xl border border-slate-600/40 bg-[#07172a] px-4 py-2 text-sm font-black text-white transition hover:bg-white/10 sm:flex"
          >
            DE
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
    ["Taxi & Mietwagen", "85%", "green"],
    ["§34a Bewachung", "62%", "purple"],
    ["Güterkraftverkehr", "40%", "gold"],
  ] as const;

  const bars = [35, 50, 42, 65, 48, 78, 92] as const;

  return (
    <div className="relative rounded-[28px] border border-sky-400/45 bg-[#06172c]/95 p-4 shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_70px_rgba(56,189,248,0.35)]">
      <div className="absolute inset-x-10 -bottom-3 h-5 rounded-full bg-sky-400/60 blur-xl" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative rounded-2xl border border-slate-600/35 bg-[#07172a] p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-black text-white">
            <span className="rounded-md bg-yellow-400 px-1.5 py-0.5 text-[10px] text-[#081526]">
              FP
            </span>
            FachkundePilot
          </div>
          <div className="flex gap-3 text-xs text-slate-300">
            <span>Suche</span>
            <span className="text-yellow-300">●</span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-black text-[#07172a]">
              A
            </span>
          </div>
        </div>

        <div className="grid gap-3">
          <main>
            <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <p className="text-base font-black text-white sm:text-lg">Guten Abend, Ahmet</p>
                <p className="text-sm text-slate-400">
                  Prüfung in 14 Tagen · Heute: 24 Karten fällig
                </p>
              </div>
              <span className="w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-300">
                Lernplan aktiv
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-3">
                <p className="text-xs font-semibold text-slate-400">Prüfungsreife</p>
                <p className="mt-1 text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">
                  78%
                </p>
                <div className="mt-2">
                  <Progress value="78%" />
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Nächstes Ziel: Kostenrechnung
                </p>
              </div>

              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-4">
                <p className="text-sm font-semibold text-slate-300">Lernzeit heute</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-3xl font-black tracking-[-0.06em] text-white">42m</p>
                  <div className="flex h-9 flex-1 items-end gap-1">
                    {bars.map((h) => (
                      <span
                        key={h}
                        className="w-full rounded-t bg-gradient-to-t from-sky-600 to-sky-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-400">Diese Woche: 4h 20m</p>
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[1.18fr_.82fr]">
              <div className="rounded-xl border border-slate-600/35 bg-[#0a1d35] p-3">
                <p className="mb-2 text-sm font-black text-white">Aktive Zertifikate</p>

                {activeCerts.map(([name, progress, tone]) => (
                  <div
                    key={name}
                    className="mb-2 grid grid-cols-[1fr_92px] items-center gap-3 rounded-lg bg-[#061326] px-3 py-2.5"
                  >
                    <div className="text-sm font-bold text-slate-200">{name}</div>
                    <Progress value={progress} color={tone} />
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
                  Heute empfohlen
                </p>
                <p className="mt-2 text-2xl font-black text-white">20 Min.</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Lernkarten Recht & Kostenrechnung
                </p>
                <a
                  href="/methode"
                  className="mt-3 block rounded-lg bg-gradient-to-b from-sky-400 to-blue-600 px-3 py-2 text-center text-xs font-black text-white"
                >
                  Weiterlernen
                </a>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-slate-600/35 bg-[#061326] p-2.5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-sky-300">
                    Sprachbrücke
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    Betriebssitz → المكان الرسمي المسجل للشركة
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black text-slate-300">
                  DE → AR
                </span>
              </div>
            </div>
          <div className='mx-auto mt-10 max-w-6xl px-5'><OfficialDisclaimer /></div></main>
        </div>
      </div>
    </div>
  );
}

function SideStats() {
  const items = [
    ["globe", "Mehrsprachig", "DE · AR · EN · TR"],
    ["target", "Prüfungsnah", "Simulation & Auswertung"],
    ["analytics", "78%", "Beispiel-Prüfungsreife"],
    ["route", "12+", "Zertifikate geplant"],
  ] as const;

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map(([icon, value, text]) => (
        <div
          key={value}
          className="rounded-2xl border border-slate-500/40 bg-[#071a30]/80 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-sky-400/45 hover:bg-sky-400/10"
        >
          <div className="flex items-center gap-3">
            <IconBox icon={icon as IconName} />
            <div>
              <p className="text-base font-black leading-none text-white">{value}</p>
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
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[#03111f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_28%,rgba(34,139,230,0.28),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(246,200,79,0.12),transparent_28%),linear-gradient(180deg,#03111f_0%,#05172a_64%,#03111f_100%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(86,161,220,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(86,161,220,.12)_1px,transparent_1px)] [background-size:58px_58px]" />

      <div className="absolute left-1/2 top-24 -z-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#03111f]" />

      <div className="relative z-10">
        <Header />

        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 pb-16 pt-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:pb-24 lg:pt-16 xl:gap-14">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-xs font-black text-sky-300 shadow-[0_0_26px_rgba(56,189,248,0.18)]">
              Für deutsche Sach- und Fachkundeprüfungen
            </p>

            <h1 className="max-w-[560px] text-[40px] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-[54px] lg:text-[60px] xl:text-[66px]">
              Deutsche Fachkundeprüfungen gezielt bestehen.
            </h1>

            <p className="mt-6 max-w-[580px] text-lg font-medium leading-8 text-slate-300">
              Lerne deutsche Prüfungsbegriffe, verstehe sie in deiner Sprache und trainiere mit Lernkarten, Simulationen und klaren Lernpfaden.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GoldButton href="/zertifikate">Zertifikat auswählen</GoldButton>
              <DarkButton href="/dashboard">Demo ansehen</DarkButton>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:max-w-[560px]">
              {[
                ["check", "An offiziellen Themen orientiert"],
                ["cards", "Lernkarten & Wiederholung"],
                ["shield", "Keine offizielle Behördenplattform"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  className="rounded-xl border border-slate-600/35 bg-[#071a30]/80 p-4 text-sm font-bold leading-5 text-slate-200"
                >
                  <SvgIcon name={icon as IconName} className="mb-2 text-yellow-300" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <DashboardMockup />

            <div className="mt-4">
              <SideStats />
            </div>
          </div>
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
    <section className="mx-auto max-w-[1180px] px-4 pt-10 lg:pt-14">
      <div className="grid gap-4 rounded-3xl border border-[#b88a2e]/40 bg-[#06182c]/90 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.35)] md:grid-cols-4">
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

function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-[1180px] px-4 pt-12 lg:pt-16">
      <div className="grid gap-8 rounded-3xl border border-rose-400/20 bg-gradient-to-br from-[#111827]/90 to-[#071a30]/90 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.35)] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-300">
            Das echte Problem
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.05em] text-white">
            Viele lernen viel — aber nicht gezielt genug.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Viele arbeiten mit PDFs, verstreuten Notizen und zu wenig Struktur. Gleichzeitig sind deutsche Fachbegriffe, Prüfungsdruck und Rechenthemen oft die größten Hürden kurz vor dem Termin.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-slate-600/40 bg-[#081d36] p-5"
            >
              <IconBox icon={point.icon as IconName} tone="red" />
              <h3 className="mt-4 text-base font-black text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="zertifikate" className="mx-auto max-w-[1180px] px-4 pt-14 lg:pt-20">
      <div className="mb-6 flex items-end justify-between gap-4">
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

        <a href="/preise" className="hidden text-sm font-black text-sky-400 md:block">
          Mitgliedschaft ansehen →
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item, index) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border bg-[#071a30]/88 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(56,189,248,0.14)] ${
              index === 0 ? item.border : "border-slate-600/40 hover:border-sky-400/50"
            }`}
          >
            {index === 0 && (
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-yellow-400/20 blur-3xl" />
            )}

            <div className="relative flex gap-4">
              <div
                className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br ${item.color} text-yellow-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}
              >
                <SvgIcon name={item.icon as IconName} className="h-7 w-7" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-black tracking-[-0.03em] text-white">
                    {item.number}. {item.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-lg px-2 py-1 text-[10px] font-black ${
                      item.badge === "Beliebt" || item.badge === "Start-Zertifikat"
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

            <div className="relative mt-5 space-y-2">
              <p className="text-sm font-semibold text-slate-300">{item.subtitle}</p>
              <p className="text-sm leading-6 text-slate-400">{item.meta} · {item.level}</p>
            </div>

            <div className="relative mt-4">
              <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-400">
                <span>Beispiel für Lernfortschritt</span>
                <span>{item.progress}</span>
              </div>
              <Progress value={item.progress} color={index === 0 ? "gold" : "sky"} />
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-sm font-black text-slate-400">{item.status}</span>
              <a href={item.href} className="text-sm font-black text-slate-200 group-hover:text-yellow-300">
                Zur Detailseite →
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
    <section className="mx-auto max-w-[1180px] px-4 pt-8 lg:pt-10">
      <div className="grid gap-4 rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-5 md:grid-cols-3">
        {featureStrip.map(([icon, title, text], index) => (
          <div
            key={title}
            className={`flex items-start gap-3 ${
              index !== featureStrip.length - 1 ? "md:border-r md:border-slate-500/35 md:pr-4" : ""
            }`}
          >
            <IconBox icon={icon as IconName} />
            <div>
              <p className="text-base font-black leading-5 text-white">{title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="methode" className="mx-auto max-w-[1180px] px-4 pt-14 lg:pt-20">
      <div className="grid gap-8 rounded-3xl border border-slate-600/40 bg-gradient-to-br from-[#071a30] to-[#0a2038] p-7 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-300">
            Lernmethode
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.05em] text-white">
            Aus jedem Fehler wird automatisch der nächste Lernschritt.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Nicht nur lesen. FachkundePilot verbindet Erklärung, Karte, Frage und Simulation in
            einem klaren Ablauf.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {methodSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-600/40 bg-[#081d36] p-5"
            >
              <p className="w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] font-black text-yellow-300">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-black text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsAndTestimonials() {
  const steps = [
    ["1", "Zertifikat wählen", "Wähle dein Prüfungsziel und starte mit einem klaren Lernpfad."],
    ["2", "Gezielt lernen", "Lerne Kapitel, Karten, Rechenlogik und Prüfungsfragen."],
    ["3", "Sicher bestehen", "Simuliere die Prüfung und schließe gezielt deine Schwächen."],
  ] as const;

  return (
    <section id="erfolge" className="mx-auto grid max-w-[1180px] gap-6 px-4 pt-12 lg:pt-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="relative overflow-hidden rounded-2xl border border-slate-600/40 bg-[#071a30]/88 p-5">
        <div className="absolute bottom-4 right-7 text-[120px] font-black text-yellow-400/10">
          100
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

          <div className="mt-5 rounded-xl border border-sky-400/25 bg-sky-400/10 p-4">
            <p className="text-xs font-black text-sky-300">Prüfungsmodus-Beispiel</p>
            <p className="mt-2 text-sm font-bold leading-6 text-white">
              30 Fragen · 45 Minuten · Punkteauswertung · Schwächenliste
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-600/40 bg-[#071a30]/88 p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-300">
              Social Proof
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
              Das sagen Lernende
            </h2>
          </div>
          <p className="hidden text-sm font-black text-yellow-300 sm:block">
            ★★★★★ Beispielbewertungen
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {testimonials.map(([initials, name, label, quote]) => (
            <article
              key={name}
              className="rounded-2xl border border-slate-600/40 bg-[#081d36] p-5 transition hover:border-sky-400/45"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-sky-500/50 to-purple-500/40 text-sm font-black text-white">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-black text-white">{name}</p>
                  <p className="text-xs font-bold text-slate-400">{label}</p>
                </div>
              </div>
              <p className="mt-2 text-yellow-300">★★★★★</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">„{quote}“</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="preise" className="mx-auto max-w-[1180px] px-4 pt-14 lg:pt-20">
      <div className="mb-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-300">
          Preise
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
          Wähle den passenden Zugang.
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Klare Pakete für einzelne Lernende, mehrere Zertifikate oder Akademien.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-2xl border p-6 ${
              plan.featured
                ? "border-yellow-400/60 bg-gradient-to-br from-yellow-400/15 to-[#081d36] shadow-[0_0_35px_rgba(246,200,79,0.18)]"
                : "border-slate-600/40 bg-[#071a30]/88"
            }`}
          >
            <p
              className={`w-fit rounded-full px-3 py-1 text-[10px] font-black ${
                plan.featured
                  ? "bg-yellow-400 text-[#081526]"
                  : "border border-slate-600/40 bg-white/5 text-slate-300"
              }`}
            >
              {plan.label}
            </p>

            <h3 className="mt-4 text-xl font-black text-white">{plan.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{plan.description}</p>

            <p className="mt-5 text-4xl font-black tracking-[-0.06em] text-white">
              {plan.price}
              <span className="text-sm font-bold tracking-normal text-slate-400">
                {plan.period}
              </span>
            </p>

            <div className="mt-5 space-y-3">
              {plan.benefits.map((benefit) => (
                <p key={benefit} className="flex gap-2 text-sm font-bold leading-6 text-slate-300">
                  <span className="mt-0.5 text-yellow-300">✓</span>
                  {benefit}
                </p>
              ))}
            </div>

            {plan.featured ? (
              <GoldButton href="/kontakt" className="mt-6 w-full">
                Auswählen →
              </GoldButton>
            ) : (
              <DarkButton href="/kontakt" className="mt-6 w-full px-5">
                Auswählen →
              </DarkButton>
            )}
          </article>
        ))}
      </div>

      <p className="mt-6 rounded-2xl border border-slate-600/40 bg-[#071a30]/70 p-5 text-sm leading-6 text-slate-400">
        Hinweis: FachkundePilot ist eine private Lernplattform und keine offizielle IHK-,
        Behörden- oder Prüfungsstelle. Die Inhalte sollen prüfungsorientiert und an relevanten
        Themenbereichen ausgerichtet sein.
      </p>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-[1180px] px-4 pt-14 lg:pt-20">
      <div className="grid gap-7 rounded-3xl border border-slate-600/40 bg-[#071a30]/88 p-7 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.05em] text-white">
            Häufige Fragen klar beantwortet.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Klare Antworten verhindern falsche Erwartungen und machen die Plattform seriöser.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-slate-600/40 bg-[#081d36] p-5"
            >
              <h3 className="text-base font-black text-white">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const groups = [
    ["Produkt", ["Zertifikate", "/zertifikate"], ["Methode", "/methode"], ["Preise", "/preise"], ["FAQ", "/faq"]],
    ["Prüfungen", ["Taxi & Mietwagen", "/zertifikate/taxi-mietwagen"], ["§34a Bewachung", "/zertifikate/34a-bewachung"], ["Güterkraftverkehr", "/zertifikate/gueterkraftverkehr"]],
    ["Rechtliches", ["Datenschutz", "/kontakt"], ["Impressum", "/kontakt"], ["AGB", "/kontakt"]],
    ["Kontakt", ["Support", "/kontakt"], ["Akademien", "/kontakt"], ["Partnerschaften", "/kontakt"]],
  ] as const;

  return (
    <footer id="kontakt" className="mt-16 border-t border-yellow-400/20 bg-[#041120]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-12 text-sm text-slate-400 md:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs leading-6">
            Prüfungsorientiertes Lernen für deutsche Sach- und Fachkundeprüfungen.
          </p>

          <div className="mt-6 flex gap-3">
            {[["Kontakt","/kontakt"],["FAQ","/faq"],["Preise","/preise"],["Dashboard","/dashboard"]].map(([item,href]) => (
              <a
                key={item}
                href={href}
                aria-label={`Zu ${item}`}
                className="grid min-h-10 min-w-10 place-items-center rounded-full bg-white/10 px-3 font-black text-white transition hover:bg-yellow-400 hover:text-[#081526]"
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
              {links.map(([label, href]) => (
                <a key={label} href={href} className="block transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1180px] border-t border-slate-700/60 px-4 py-6 text-center text-sm text-slate-500">
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
    <main className="min-h-screen overflow-x-hidden bg-[#03111f] pb-24 text-white md:pb-0">
      <Hero />
      <StatStrip />
      <ProblemSection />
      <Certificates />
      <FeatureStrip />
      <MethodSection />
      <StepsAndTestimonials />
      <PricingSection />
      <FAQSection />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
