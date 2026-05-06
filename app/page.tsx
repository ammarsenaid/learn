import type { Metadata } from "next";
import type { ReactNode } from "react";

type Tone = "blue" | "gold" | "green" | "red";

export const metadata: Metadata = {
  title: "FachkundePilot — Prüfungsorientiertes Lernen",
  description:
    "FachkundePilot ist eine moderne Lernplattform für deutsche Sach- und Fachkundeprüfungen mit Lernpfaden, Lernkarten, Prüfungssimulation, Admin-System und mehrsprachigen Erklärungen.",
};

const navItems = [
  { label: "Zertifikate", href: "#zertifikate" },
  { label: "Methode", href: "#methode" },
  { label: "Plattform", href: "#plattform" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

const heroTrustItems = [
  "Deutsch bleibt Prüfungssprache",
  "Erklärungen in AR / EN / TR",
  "Prüfung realistisch trainieren",
] as const;

const dashboardMetrics = [
  { label: "Prüfungsreife", value: "82%", progress: "82%", tone: "blue" },
  { label: "Lernzeit", value: "12h 45m", progress: "64%", tone: "green" },
  { label: "Karten fällig", value: "24", progress: "42%", tone: "gold" },
] as const;

const trustStats = [
  {
    code: "DE",
    title: "Mehrsprachig",
    value: "DE · AR · EN · TR",
    text: "Deutsch bleibt Prüfungssprache — Erklärungen helfen beim Verstehen.",
  },
  {
    code: "SIM",
    title: "Simulation",
    value: "Realistisch",
    text: "Trainiere mit Zeitdruck, Punkten und Themenanalyse.",
  },
  {
    code: "AI",
    title: "Smart Review",
    value: "Gezielt",
    text: "Schwache Themen werden sichtbar und automatisch wiederholt.",
  },
  {
    code: "CMS",
    title: "Admin-ready",
    value: "Skalierbar",
    text: "Inhalte, Karten, Fragen und Zertifikate sauber pflegen.",
  },
] as const;

const learningModes = [
  {
    code: "01",
    title: "Lesemodus",
    text: "Offizielle Begriffe strukturiert lernen, ohne in PDFs zu verlieren.",
  },
  {
    code: "02",
    title: "Kartenmodus",
    text: "Prüfungsrelevante Regeln, Definitionen und Falllogik wiederholen.",
  },
  {
    code: "03",
    title: "Rechenmodus",
    text: "Kostenrechnung, Prozentrechnung und typische Prüfungsaufgaben trainieren.",
  },
  {
    code: "04",
    title: "Prüfungsmodus",
    text: "Echte Prüfungssituationen mit Zeit, Punkten und Auswertung simulieren.",
  },
] as const;

const certificates = [
  {
    code: "TM",
    title: "Taxi & Mietwagen",
    subtitle: "Fachkundeprüfung nach PBefG",
    description: "Tarif-, Orts-, Unternehmer- und Kostenwissen für die Personenbeförderung.",
    stats: "12 Kapitel · 850+ Fragen",
    badge: "Beliebt",
    level: "Mittel",
    languages: "DE · AR · EN · TR",
    readiness: "82%",
  },
  {
    code: "34A",
    title: "§34a Bewachung",
    subtitle: "Sachkundeprüfung nach §34a GewO",
    description: "Recht, Deeskalation, Umgang mit Menschen und Praxisfälle sicher verstehen.",
    stats: "9 Kapitel · 650+ Fragen",
    badge: "Beliebt",
    level: "Einsteiger",
    languages: "DE · AR · EN",
    readiness: "76%",
  },
  {
    code: "GV",
    title: "Güterkraftverkehr",
    subtitle: "Fachkundeprüfung Güterverkehr",
    description: "Kostenrechnung, Disposition, Transportrecht und EU-Regeln strukturiert lernen.",
    stats: "10 Kapitel · 700+ Fragen",
    badge: "Verfügbar",
    level: "Fortgeschritten",
    languages: "DE · EN · TR",
    readiness: "68%",
  },
  {
    code: "34D",
    title: "Versicherung §34d",
    subtitle: "Sachkunde Versicherungsvermittlung",
    description: "Beratungslogik, Haftung, Produktgrundlagen und Regulatorik prüfungsnah üben.",
    stats: "8 Kapitel · 600+ Fragen",
    badge: "Bald verfügbar",
    level: "Mittel",
    languages: "DE · AR · EN",
    readiness: "54%",
  },
  {
    code: "34F",
    title: "Finanzanlagen §34f",
    subtitle: "Sachkunde Finanzanlagenvermittlung",
    description: "Produkte, Risikoaufklärung, Geeignetheit und regulatorische Pflichten verstehen.",
    stats: "7 Kapitel · 550+ Fragen",
    badge: "Bald verfügbar",
    level: "Fortgeschritten",
    languages: "DE · EN",
    readiness: "49%",
  },
  {
    code: "IM",
    title: "Immobiliardarlehen",
    subtitle: "Sachkunde Darlehensvermittlung",
    description: "Darlehensarten, Finanzierung, Verbraucherschutz und Beratungslogik im Blick.",
    stats: "7 Kapitel · 500+ Fragen",
    badge: "Bald verfügbar",
    level: "Mittel",
    languages: "DE · AR · TR",
    readiness: "46%",
  },
] as const;

const personas = [
  {
    code: "01",
    title: "Berufsumsteiger",
    text: "Brauchen klare Struktur, einfache Sprache und schnelle Orientierung.",
  },
  {
    code: "02",
    title: "Mehrsprachige Lernende",
    text: "Müssen deutsche Begriffe behalten, aber in der eigenen Sprache verstehen.",
  },
  {
    code: "03",
    title: "Schulen & Anbieter",
    text: "Brauchen Inhalte, Nutzerverwaltung, Fortschritt und skalierbare Lernpfade.",
  },
] as const;

const curriculumFlow = [
  { step: "01", title: "Zertifikat", text: "Taxi, §34a, Güterverkehr oder weitere Prüfungen." },
  { step: "02", title: "Kapitel", text: "Offizielle Themenbereiche sauber strukturiert." },
  { step: "03", title: "Lektionen", text: "Lerninhalte mit Beispielen und Mehrsprachigkeit." },
  { step: "04", title: "Lernkarten", text: "Wiederholung für Begriffe, Regeln und Formeln." },
  { step: "05", title: "Fragen", text: "Prüfungsnahe Aufgaben mit Erklärung." },
  { step: "06", title: "Simulation", text: "Realistischer Test mit Punkten und Zeitdruck." },
] as const;

const languageExamples = [
  {
    term: "Betriebssitz",
    de: "Offizieller Sitz des Unternehmens.",
    ar: "المكان الرسمي المسجل للشركة.",
    tag: "Recht",
  },
  {
    term: "Bereitstellungspflicht",
    de: "Pflicht, Taxi-Verkehr ordnungsgemäß bereitzuhalten.",
    ar: "واجب توفير خدمة التاكسي بشكل منظم.",
    tag: "Taxi",
  },
  {
    term: "Kostendeckung",
    de: "Einnahmen müssen Kosten langfristig tragen.",
    ar: "الإيرادات يجب أن تغطي التكاليف على المدى الطويل.",
    tag: "Rechnen",
  },
] as const;

const intelligenceItems = [
  {
    title: "Fehler werden zu Lernaufgaben",
    text: "Falsch beantwortete Fragen erscheinen später wieder als Karte, Erklärung und Mini-Test.",
    stat: "Auto-Review",
  },
  {
    title: "Kapitel werden nach Risiko sortiert",
    text: "Themen mit niedriger Trefferquote werden höher priorisiert als Themen, die schon sitzen.",
    stat: "Priorität",
  },
  {
    title: "Prüfungsreife statt nur Fortschritt",
    text: "Nicht nur gelesen: Die Plattform zeigt, ob du die Inhalte unter Prüfungsdruck kannst.",
    stat: "Readiness",
  },
] as const;

const platformRoles = [
  {
    code: "USER",
    title: "Lernende",
    text: "Lernen, Karten üben, Prüfungen simulieren, Fortschritt sehen.",
  },
  {
    code: "EDU",
    title: "Dozenten",
    text: "Kapitel, Fragen, Erklärungen und Lernlogik kuratieren.",
  },
  {
    code: "ADM",
    title: "Admin",
    text: "Zertifikate, Sprachen, Inhalte, Nutzer und Veröffentlichungen verwalten.",
  },
] as const;

const adminPreview = [
  { label: "Zertifikate", value: "12", progress: "88%" },
  { label: "Lektionen", value: "248", progress: "72%" },
  { label: "Fragen", value: "4.2k", progress: "64%" },
  { label: "Sprachen", value: "4", progress: "96%" },
] as const;

const learningSteps = [
  {
    number: "01",
    title: "Ziel wählen",
    text: "Wähle dein Zertifikat und erhalte eine klare Struktur mit Kapiteln, Karten und Prüfungen.",
  },
  {
    number: "02",
    title: "Deutsch verstehen",
    text: "Lerne offizielle deutsche Begriffe mit einfachen Erklärungen in deiner Sprache.",
  },
  {
    number: "03",
    title: "Gezielt trainieren",
    text: "Arbeite mit Lernkarten, Rechenlogik, Rechtsfragen und Praxisfällen.",
  },
  {
    number: "04",
    title: "Prüfung simulieren",
    text: "Teste dich mit Zeitdruck, Punkten und realistischer Fehlerauswertung.",
  },
] as const;

const learningTimeline = [
  { day: "Tag 1–3", title: "Grundlagen verstehen", progress: "28%" },
  { day: "Tag 4–10", title: "Karten & Fragen trainieren", progress: "52%" },
  { day: "Tag 11–18", title: "Schwächen schließen", progress: "74%" },
  { day: "Tag 19+", title: "Prüfung simulieren", progress: "92%" },
] as const;

const seoPages = [
  {
    title: "Zertifikat-Seiten",
    text: "Jede Prüfung bekommt eine indexierbare Seite mit Struktur, FAQ und Lernpfad.",
  },
  {
    title: "Kapitel-Seiten",
    text: "Themen wie Recht, Betrieb und Kostenrechnung können eigene SEO-Seiten werden.",
  },
  {
    title: "Glossar-Seiten",
    text: "Deutsche Fachbegriffe können einzeln erklärt und langfristig gefunden werden.",
  },
  {
    title: "Fragen-Seiten",
    text: "Prüfungsnahe Fragen können später als Lern- und Suchseiten funktionieren.",
  },
] as const;

const examOptions = [
  { label: "Kfz-Haftpflichtversicherung", state: "correct" },
  { label: "Gesetzliche Unfallversicherung", state: "wrong" },
  { label: "Betriebshaftpflicht des Unternehmers", state: "wrong" },
] as const;

const comparisonRows = [
  {
    bad: "PDFs und Bücher zeigen dir nicht, was wirklich sitzt.",
    good: "FachkundePilot zeigt Fortschritt, Schwächen und nächste Lernschritte.",
  },
  {
    bad: "Du springst zwischen Notizen, Videos und Screenshots hin und her.",
    good: "Alles liegt in einem Lernpfad: Erklärung, Karte, Frage, Simulation.",
  },
  {
    bad: "Die Prüfung fühlt sich plötzlich und stressig an.",
    good: "Du übst vorher mit Zeitdruck, Punkten und echten Prüfungsrunden.",
  },
] as const;

const pricingPlans = [
  {
    name: "Starter",
    price: "0 €",
    description: "Zum Testen der Plattform und Lernlogik.",
    benefits: ["Demo-Lektionen", "Beispiel-Lernkarten", "Einblick in Prüfungssimulation"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "9,90 €",
    description: "Für ernsthafte Prüfungsvorbereitung.",
    benefits: [
      "Alle verfügbaren Zertifikate",
      "Lernkarten & Wiederholung",
      "Prüfungssimulationen",
      "Mehrsprachige Erklärungen",
      "Fortschrittsanalyse",
    ],
    highlighted: true,
  },
  {
    name: "Akademie",
    price: "Individuell",
    description: "Für Schulen, Anbieter und Teams.",
    benefits: ["Admin-Zugriff", "Nutzerverwaltung", "Content-Pflege", "Mehrere Lernende"],
    highlighted: false,
  },
] as const;

const testimonials = [
  {
    initials: "MK",
    name: "Mehmet K.",
    label: "§34a Bewachung",
    quote: "Ich habe endlich verstanden, welche deutschen Begriffe wirklich wichtig sind.",
  },
  {
    initials: "SL",
    name: "Sarah L.",
    label: "Versicherung §34d",
    quote: "Die Struktur war der Unterschied. Ich wusste jeden Tag, was ich lernen muss.",
  },
  {
    initials: "AA",
    name: "Ahmed A.",
    label: "Taxi & Mietwagen",
    quote: "Deutsch war mein Problem. Die Erklärungen in meiner Sprache haben alles verändert.",
  },
] as const;

const faqItems = [
  {
    question: "Ist die Prüfung auf Deutsch?",
    answer:
      "Ja. Deutsch bleibt die echte Prüfungssprache. Die anderen Sprachen helfen dir beim Verstehen der Inhalte.",
  },
  {
    question: "Kann ich mehrere Zertifikate lernen?",
    answer:
      "Ja. Die Plattform ist von Anfang an für mehrere Sach- und Fachkundeprüfungen geplant.",
  },
  {
    question: "Ist das nur für Taxi & Mietwagen?",
    answer:
      "Nein. Taxi & Mietwagen ist nur eines der Zertifikate. Weitere Bereiche sind bereits vorbereitet.",
  },
] as const;

const footerGroups = [
  {
    title: "Produkt",
    links: ["Zertifikate", "Lernmethode", "Preise", "Erfolgsgeschichten"],
  },
  {
    title: "Lernen",
    links: ["Lernkarten", "Prüfungssimulation", "Mehrsprachigkeit", "Fortschritt"],
  },
  {
    title: "Plattform",
    links: ["Admin Panel", "CMS", "Rollen", "Sprachen"],
  },
  {
    title: "Rechtliches",
    links: ["Datenschutz", "Impressum", "AGB", "Cookie-Hinweise"],
  },
] as const;

function Glass({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-white/10 bg-[#071a3a]/78 shadow-[0_26px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#4ea1ff]/35 bg-[#0a2452]/70 px-4 py-2 text-sm font-bold text-[#d8ebff] shadow-[0_0_35px_rgba(78,161,255,0.12)]">
      <span className="h-2 w-2 rounded-full bg-[#4ea1ff]" />
      {children}
    </span>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#f3b23c]">
      {children}
    </p>
  );
}

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex justify-center rounded-2xl bg-gradient-to-b from-[#ffe08a] to-[#f3b23c] px-7 py-4 text-base font-black text-[#06122b] shadow-[0_20px_60px_rgba(244,178,60,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_80px_rgba(244,178,60,0.46)] ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex justify-center rounded-2xl border border-white/15 bg-white/[0.05] px-7 py-4 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:border-[#76b7ff]/50 hover:bg-[#76b7ff]/10 ${className}`}
    >
      {children}
    </a>
  );
}

function ProgressBar({
  value,
  tone = "blue",
}: {
  value: string;
  tone?: Tone;
}) {
  const color =
    tone === "gold"
      ? "bg-gradient-to-r from-[#f3b23c] to-[#ffe08a]"
      : tone === "green"
        ? "bg-gradient-to-r from-[#34d399] to-[#8fffe0]"
        : tone === "red"
          ? "bg-gradient-to-r from-[#fb7185] to-[#fda4af]"
          : "bg-gradient-to-r from-[#4ea1ff] to-[#6ee7f9]";

  return (
    <div className="h-2 overflow-hidden rounded-full bg-black/30">
      <div className={`h-full rounded-full ${color}`} style={{ width: value }} />
    </div>
  );
}

function CodeMark({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-xs font-black text-[#f3b23c]">
      {children}
    </div>
  );
}

function Navbar() {
  return (
    <header className="relative z-20 mx-auto max-w-[1400px] px-4 pt-5 sm:px-6 lg:px-8">
      <nav
        aria-label="Hauptnavigation"
        className="flex min-h-[84px] items-center justify-between rounded-[30px] border border-white/10 bg-[#061731]/82 px-4 shadow-[0_24px_90px_rgba(0,0,0,0.48)] backdrop-blur-2xl md:px-7"
      >
        <a href="#" aria-label="FachkundePilot Startseite" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#f3b23c]/45 bg-gradient-to-br from-[#16417d] to-[#071832] text-xl font-black text-[#f3b23c] shadow-[0_0_38px_rgba(78,161,255,0.25)]">
            FP
          </div>
          <div>
            <p className="text-xl font-black tracking-[-0.04em] text-white md:text-2xl">
              FachkundePilot
            </p>
            <p className="hidden text-xs font-semibold text-[#8ea0c0] sm:block">
              Prüfungsorientiertes Lernen
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#c7d2e5] lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#sprache"
            className="hidden rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-black text-white transition hover:bg-white/[0.1] sm:inline-flex"
          >
            DE
          </a>
          <PrimaryButton href="#preise" className="hidden sm:inline-flex">
            Jetzt starten
          </PrimaryButton>
          <a
            href="#preise"
            className="inline-flex rounded-2xl bg-[#f3b23c] px-4 py-2.5 text-sm font-black text-[#06122b] sm:hidden"
          >
            Start
          </a>
        </div>
      </nav>

      <nav
        aria-label="Mobile Navigation"
        className="mt-3 flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-[#061731]/70 p-2 backdrop-blur-xl lg:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="shrink-0 rounded-xl bg-white/[0.05] px-4 py-2 text-xs font-black text-[#c7d2e5]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function DashboardPreview() {
  return (
    <Glass className="relative overflow-hidden rounded-[36px] border-[#4ea1ff]/25 p-4 shadow-[0_0_0_1px_rgba(78,161,255,0.14),0_38px_120px_rgba(36,100,210,0.28)]">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4ea1ff]/22 blur-3xl" />
      <div className="absolute -bottom-28 left-16 h-64 w-64 rounded-full bg-[#f3b23c]/12 blur-3xl" />

      <div className="relative rounded-[30px] border border-white/10 bg-[#061936]/95 p-4">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
          <div>
            <p className="text-sm font-black text-white">FachkundePilot Dashboard</p>
            <p className="text-xs font-medium text-[#8ea0c0]">Live Lernübersicht</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-xs font-black text-[#9fb0cc]">
              S
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-xs font-black text-[#9fb0cc]">
              N
            </span>
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f3b23c] to-[#4ea1ff]" />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[124px_1fr]">
          <aside className="hidden rounded-2xl border border-white/10 bg-[#0a1b3f] p-2 text-xs font-bold text-[#8ea0c0] lg:block">
            {["Übersicht", "Zertifikate", "Karten", "Prüfung", "Fortschritt"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-2 rounded-xl px-3 py-2 ${
                    index === 0 ? "bg-[#4ea1ff]/15 text-white" : ""
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </aside>

          <main className="min-w-0">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xl font-black text-white">Guten Abend, Ahmet</p>
                <p className="text-sm leading-6 text-[#8ea0c0]">
                  Du bist auf dem besten Weg zur Prüfung.
                </p>
              </div>
              <span className="w-fit rounded-full bg-[#f3b23c]/10 px-3 py-1 text-xs font-black text-[#f3b23c]">
                Prüfung in 14 Tagen
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {dashboardMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                >
                  <p className="text-sm text-[#afc0da]">{metric.label}</p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.05em] text-white">
                    {metric.value}
                  </p>
                  <div className="mt-4">
                    <ProgressBar value={metric.progress} tone={metric.tone} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[1.08fr_.92fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-black text-white">Aktive Zertifikate</p>
                  <span className="text-xs font-bold text-[#76b7ff]">3 aktiv</span>
                </div>

                {[
                  ["Taxi & Mietwagen", "82%"],
                  ["§34a Bewachung", "65%"],
                  ["Güterkraftverkehr", "74%"],
                ].map(([name, progress]) => (
                  <div key={name} className="mb-3">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-[#afc0da]">{name}</span>
                      <span className="font-black text-white">{progress}</span>
                    </div>
                    <ProgressBar value={progress} tone="gold" />
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#f3b23c]/25 bg-[#f3b23c]/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f3b23c]">
                  Heute empfohlen
                </p>
                <p className="mt-2 text-sm font-bold text-white">
                  20 Min. Lernkarten: Recht & Kostenrechnung
                </p>
                <a
                  href="#methode"
                  className="mt-4 inline-flex rounded-xl bg-[#f3b23c] px-4 py-2 text-xs font-black text-[#07162f]"
                >
                  Weiterlernen
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Glass>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(78,161,255,0.34),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(244,183,63,0.15),transparent_26%),linear-gradient(180deg,#06122b_0%,#07162f_62%,#06122b_100%)]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative">
        <Navbar />

        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(520px,1.02fr)] lg:px-8 lg:pb-20 lg:pt-14 xl:gap-16">
          <div>
            <Badge>Die Lernplattform für offizielle Sach- und Fachkundeprüfungen</Badge>

            <h1 className="mt-6 max-w-[690px] text-[52px] font-black leading-[0.97] tracking-[-0.065em] text-white sm:text-[64px] lg:text-[72px] xl:text-[84px]">
              Bestehe deine Prüfung.
              <br />
              Mit{" "}
              <span className="bg-gradient-to-r from-[#f3b23c] to-[#ffe39a] bg-clip-text text-transparent">
                Klarheit, Struktur
                <br />
                und System.
              </span>
            </h1>

            <p className="mt-6 max-w-[585px] text-lg leading-8 text-[#c7d2e5]">
              Verständliche Erklärungen in deiner Sprache, smarte Lernkarten, realistische
              Prüfungen und mobiles Lernen — alles an einem Ort.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#preise">Jetzt starten →</PrimaryButton>
              <SecondaryButton href="#zertifikate">Alle Zertifikate ansehen</SecondaryButton>
            </div>

            <div className="mt-7 grid max-w-[610px] gap-3 sm:grid-cols-3">
              {heroTrustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-[#d7e1f3]"
                >
                  <span className="mr-2 text-[#34d399]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="relative mx-auto -mt-6 max-w-[1320px] px-4 sm:px-6 lg:px-8">
      <Glass className="rounded-[28px] p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-4">
          {trustStats.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-4 rounded-2xl px-3 py-2 ${
                index < trustStats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <CodeMark>{item.code}</CodeMark>
              <div>
                <p className="text-sm font-bold text-[#8ea0c0]">{item.title}</p>
                <p className="text-2xl font-black tracking-[-0.04em] text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#8ea0c0]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function LearningModes() {
  return (
    <section id="methode" className="mx-auto max-w-[1360px] px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <SectionKicker>Lernsystem</SectionKicker>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
          Nicht nur lesen. Wirklich trainieren.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#afc0da]">
          Eine starke Plattform braucht mehrere Lernmodi — nicht nur statische Texte.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {learningModes.map((mode) => (
          <Glass
            key={mode.title}
            className="group rounded-[30px] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4ea1ff]/40 hover:shadow-[0_24px_70px_rgba(78,161,255,0.16)]"
          >
            <CodeMark>{mode.code}</CodeMark>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-white">
              {mode.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#afc0da]">{mode.text}</p>
          </Glass>
        ))}
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-4xl">
        <SectionKicker>Zielgruppen</SectionKicker>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
          Eine Plattform für echte Lernprobleme.
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#afc0da]">
          Das Design richtet sich nicht nur an hübsche Screens, sondern an Menschen, die unter
          Zeitdruck eine deutsche Prüfung bestehen müssen.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {personas.map((person) => (
          <Glass key={person.title} className="rounded-[30px] p-6">
            <CodeMark>{person.code}</CodeMark>
            <h3 className="mt-5 text-2xl font-black text-white">{person.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#afc0da]">{person.text}</p>
          </Glass>
        ))}
      </div>
    </section>
  );
}

function CurriculumSystem() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-4xl">
        <SectionKicker>Content-System</SectionKicker>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
          Jedes Zertifikat wird wie ein Produkt gebaut.
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#afc0da]">
          Die Plattform braucht eine klare Datenlogik: von Zertifikat bis Prüfungssimulation. Das
          macht sie skalierbar, sauber und später SEO-fähig.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {curriculumFlow.map((item) => (
          <Glass key={item.title} className="rounded-[28px] p-5">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#f3b23c]">
              {item.step}
            </p>
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#afc0da]">{item.text}</p>
          </Glass>
        ))}
      </div>
    </section>
  );
}

function LanguageBridge() {
  return (
    <section id="sprache" className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionKicker>Sprachbrücke</SectionKicker>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            Deutsch bleibt. Verständnis wird einfacher.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#afc0da]">
            Die Prüfung ist deutsch. Deshalb lernt der Nutzer die deutschen Begriffe zuerst —
            bekommt aber sofort eine verständliche Erklärung in seiner Sprache.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["DE Original", "AR Erklärung", "EN Hilfe", "TR Hilfe"].map((item) => (
              <span
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black text-[#d7e1f3]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Glass className="rounded-[34px] p-5 md:p-7">
          <div className="grid gap-4">
            {languageExamples.map((item) => (
              <article
                key={item.term}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-black text-white">{item.term}</h3>
                  <span className="rounded-full border border-[#f3b23c]/25 bg-[#f3b23c]/10 px-3 py-1 text-xs font-black text-[#f3b23c]">
                    {item.tag}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#061936]/70 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#76b7ff]">
                      Deutsch
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#c7d2e5]">{item.de}</p>
                  </div>
                  <div className="rounded-2xl border border-[#34d399]/20 bg-[#34d399]/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#34d399]">
                      Arabisch erklärt
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white">{item.ar}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Glass>
      </div>
    </section>
  );
}

function IntelligenceLayer() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <Glass className="relative overflow-hidden rounded-[38px] border-[#4ea1ff]/20 p-6 md:p-8">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#4ea1ff]/15 blur-3xl" />

        <div className="relative grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionKicker>Lernintelligenz</SectionKicker>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Die Plattform merkt, wo du wirklich schwach bist.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#afc0da]">
              Gute Prüfungsvorbereitung ist nicht nur Inhalt. Sie erkennt Muster, Fehler und
              Wiederholungsbedarf.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {intelligenceItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-5"
              >
                <p className="mb-4 inline-flex rounded-full bg-[#f3b23c]/10 px-3 py-1 text-xs font-black text-[#f3b23c]">
                  {item.stat}
                </p>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#afc0da]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Glass>
    </section>
  );
}

function SEOScaleSection() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
        <div>
          <SectionKicker>SEO-Architektur</SectionKicker>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            Später wird jede Lernseite ein Suchmaschinen-Einstieg.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#afc0da]">
            Das Projekt soll nicht wie eine versteckte App wirken. Die Struktur kann später mit
            indexierbaren Seiten, Glossar, Kapiteln und Zertifikat-Landingpages wachsen.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {seoPages.map((item) => (
            <Glass key={item.title} className="rounded-[30px] p-5">
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#afc0da]">{item.text}</p>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="plattform" className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionKicker>Plattform-Architektur</SectionKicker>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            Nicht nur Landing Page. Ein echtes Lernsystem.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#afc0da]">
            Die UI ist vorbereitet für Rollen, Inhalte, Admin-Workflows, Sprachen und echte
            Lernpfade. So wächst das Projekt später sauber weiter.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {platformRoles.map((role) => (
            <Glass key={role.title} className="rounded-[30px] p-5">
              <CodeMark>{role.code}</CodeMark>
              <h3 className="mt-5 text-2xl font-black text-white">{role.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#afc0da]">{role.text}</p>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section id="zertifikate" className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-[38px] border border-white/10 bg-gradient-to-br from-[#081d42] via-[#071a3a] to-[#050f24] p-5 shadow-[0_28px_110px_rgba(0,0,0,0.46)] md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionKicker>Zertifikate</SectionKicker>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Zertifikate entdecken
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#afc0da]">
              Wähle dein Ziel und starte mit einer klaren Prüfungsvorbereitung. Jedes Zertifikat
              folgt derselben Lernlogik.
            </p>
          </div>

          <a
            href="#preise"
            className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-[#76b7ff] transition hover:border-[#76b7ff]/50 hover:bg-[#76b7ff]/10"
          >
            Mitgliedschaft ansehen →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className={`group flex min-h-[350px] flex-col rounded-[30px] border p-5 transition duration-300 hover:-translate-y-1 ${
                index === 0
                  ? "border-[#f3b23c]/35 bg-[#f3b23c]/10 shadow-[0_24px_70px_rgba(244,183,63,0.12)]"
                  : "border-white/10 bg-[#0a1b3f]/85 hover:border-[#4ea1ff]/40 hover:shadow-[0_24px_70px_rgba(78,161,255,0.16)]"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <CodeMark>{certificate.code}</CodeMark>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-black ${
                    index === 0
                      ? "bg-[#f3b23c] text-[#07162f]"
                      : "border border-[#f3b23c]/25 bg-[#f3b23c]/10 text-[#f3b23c]"
                  }`}
                >
                  {certificate.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                {certificate.title}
              </h3>
              <p className="mt-1 text-sm font-bold text-[#76b7ff]">{certificate.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#afc0da]">
                {certificate.description}
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <span className="rounded-2xl bg-white/[0.06] px-3 py-2 text-xs font-bold text-[#c7d2e5]">
                  {certificate.stats}
                </span>
                <span className="rounded-2xl bg-white/[0.06] px-3 py-2 text-xs font-bold text-[#c7d2e5]">
                  {certificate.level}
                </span>
                <span className="rounded-2xl bg-white/[0.06] px-3 py-2 text-xs font-bold text-[#c7d2e5]">
                  {certificate.languages}
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-3">
                <div className="mb-2 flex items-center justify-between text-xs font-bold text-[#8ea0c0]">
                  <span>Beispiel-Lernstand</span>
                  <span>{certificate.readiness}</span>
                </div>
                <ProgressBar value={certificate.readiness} tone={index === 0 ? "gold" : "blue"} />
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <a
                  href="#preise"
                  className="text-sm font-black text-[#76b7ff] transition group-hover:text-[#f3b23c]"
                >
                  Mehr erfahren →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdminPanelPreview() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_.95fr]">
        <Glass className="rounded-[36px] p-5 md:p-7">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-black text-[#f3b23c]">Admin Console</p>
              <h3 className="mt-1 text-2xl font-black text-white">Content Management</h3>
            </div>
            <span className="rounded-full bg-[#34d399]/10 px-3 py-1 text-xs font-black text-[#34d399]">
              Ready
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {adminPreview.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-5"
              >
                <p className="text-sm font-bold text-[#8ea0c0]">{item.label}</p>
                <p className="mt-2 text-4xl font-black text-white">{item.value}</p>
                <div className="mt-4">
                  <ProgressBar value={item.progress} tone="green" />
                </div>
              </div>
            ))}
          </div>
        </Glass>

        <div>
          <SectionKicker>Admin-First gedacht</SectionKicker>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            Inhalte sollen später ohne Entwickler gepflegt werden.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#afc0da]">
            Zertifikate, Kapitel, Fragen, Lernkarten, Erklärungen und Sprachen müssen langfristig
            über ein Admin-System verwaltet werden.
          </p>
        </div>
      </div>
    </section>
  );
}

function LearningEngine() {
  return (
    <section className="mx-auto grid max-w-[1360px] gap-6 px-4 pb-20 sm:px-6 lg:px-8 xl:grid-cols-[0.92fr_1.08fr]">
      <Glass className="rounded-[34px] p-6 md:p-8">
        <SectionKicker>Lernlogik</SectionKicker>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
          Von Chaos zu klarer Prüfungsvorbereitung.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#afc0da]">
          FachkundePilot führt dich Schritt für Schritt durch deutsche Prüfungslogik.
        </p>

        <div className="mt-8 space-y-4">
          {learningSteps.map((step) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f3b23c] text-sm font-black text-[#07162f]">
                {step.number}
              </div>
              <div>
                <p className="text-xl font-black text-white">{step.title}</p>
                <p className="mt-2 leading-7 text-[#afc0da]">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Glass>

      <Glass className="rounded-[34px] p-6 md:p-8">
        <SectionKicker>Lernplan</SectionKicker>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
          Ein Weg bis zur Prüfungsreife.
        </h2>

        <div className="mt-8 space-y-4">
          {learningTimeline.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3b23c]">
                    {item.day}
                  </p>
                  <p className="mt-1 text-lg font-black text-white">{item.title}</p>
                </div>
                <span className="text-sm font-black text-white">{item.progress}</span>
              </div>
              <ProgressBar value={item.progress} tone="blue" />
            </div>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function ExamSimulation() {
  return (
    <section id="simulation" className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionKicker>Prüfungssimulation</SectionKicker>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
            Nicht nur wissen. Unter Prüfungsdruck können.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#afc0da]">
            Lernende müssen nicht nur Inhalte kennen. Sie müssen Fragen lesen, Zeitdruck aushalten
            und die richtige Antwort sicher erkennen.
          </p>
        </div>

        <Glass className="rounded-[34px] p-5 md:p-7">
          <div className="mb-5 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-black text-[#f3b23c]">Beispielfrage</p>
              <h3 className="mt-1 text-2xl font-black text-white">Unfall mit Fahrgast</h3>
            </div>
            <div className="flex gap-2">
              <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-black text-[#c7d2e5]">
                01:28
              </span>
              <span className="rounded-full bg-[#4ea1ff]/15 px-3 py-1 text-xs font-black text-[#76b7ff]">
                Recht
              </span>
            </div>
          </div>

          <p className="text-lg leading-8 text-[#d7e1f3]">
            Sie befördern einen Fahrgast und es passiert ein Unfall. Ihr Fahrgast ist verletzt.
            Wer übernimmt die Kosten?
          </p>

          <div className="mt-6 grid gap-3">
            {examOptions.map((option) => (
              <div
                key={option.label}
                className={`rounded-2xl border p-4 text-sm font-black ${
                  option.state === "correct"
                    ? "border-[#34d399]/30 bg-[#34d399]/10 text-[#bfffe9]"
                    : "border-white/10 bg-white/[0.045] text-[#c7d2e5]"
                }`}
              >
                <span className="mr-3">{option.state === "correct" ? "✓" : "✕"}</span>
                {option.label}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#f3b23c]/25 bg-[#f3b23c]/10 p-4">
            <p className="text-sm font-black text-[#f3b23c]">Warum?</p>
            <p className="mt-2 text-sm leading-7 text-white">
              Bei Schäden aus dem Betrieb des Fahrzeugs ist die Kfz-Haftpflichtversicherung der
              zentrale Schutz für geschädigte Personen.
            </p>
          </div>
        </Glass>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <Glass className="rounded-[34px] p-6 md:p-8">
        <div className="mb-8 max-w-3xl">
          <SectionKicker>Warum nicht einfach PDF?</SectionKicker>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Lernen mit System statt Stapel von Unterlagen.
          </h2>
        </div>

        <div className="space-y-4">
          {comparisonRows.map((row) => (
            <div
              key={row.bad}
              className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-4 md:grid-cols-2"
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8ea0c0]">
                  Klassisch
                </p>
                <p className="mt-2 text-sm leading-7 text-[#afc0da]">✕ {row.bad}</p>
              </div>
              <div className="rounded-2xl border border-[#f3b23c]/25 bg-[#f3b23c]/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f3b23c]">
                  FachkundePilot
                </p>
                <p className="mt-2 text-sm font-bold leading-7 text-white">✓ {row.good}</p>
              </div>
            </div>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="preise" className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-4xl">
        <SectionKicker>Preise</SectionKicker>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
          Ein Einstieg für Lernende. Ein System für Wachstum.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[34px] border p-6 ${
              plan.highlighted
                ? "border-[#f3b23c]/45 bg-[#f8f3e8] text-[#07162f] shadow-[0_24px_70px_rgba(244,183,63,0.18)]"
                : "border-white/10 bg-[#071a3a]/78 text-white shadow-[0_26px_100px_rgba(0,0,0,0.4)]"
            }`}
          >
            <p
              className={`inline-flex rounded-full px-4 py-1.5 text-sm font-black ${
                plan.highlighted
                  ? "bg-[#f3b23c] text-[#07162f]"
                  : "border border-white/10 bg-white/[0.05] text-[#f3b23c]"
              }`}
            >
              {plan.name}
            </p>

            <p className="mt-6 text-5xl font-black tracking-[-0.06em]">{plan.price}</p>
            <p
              className={`mt-3 text-sm leading-7 ${
                plan.highlighted ? "text-[#4a5568]" : "text-[#afc0da]"
              }`}
            >
              {plan.description}
            </p>

            <div className="mt-6 space-y-3">
              {plan.benefits.map((benefit) => (
                <p key={benefit} className="flex items-center gap-3 text-sm font-bold">
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full ${
                      plan.highlighted
                        ? "bg-[#07162f] text-white"
                        : "bg-[#34d399]/15 text-[#34d399]"
                    }`}
                  >
                    ✓
                  </span>
                  {benefit}
                </p>
              ))}
            </div>

            <a
              href="#kontakt"
              className={`mt-7 block rounded-2xl px-5 py-4 text-center text-base font-black ${
                plan.highlighted
                  ? "bg-[#07162f] text-white"
                  : "bg-gradient-to-b from-[#ffe08a] to-[#f3b23c] text-[#07162f]"
              }`}
            >
              Jetzt starten →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="erfolge" className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <Glass className="rounded-[34px] p-6 md:p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionKicker>Erfolgsgeschichten</SectionKicker>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
              Lernen, verstehen, bestehen.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#afc0da]">
            Besonders hilfreich für Menschen, die die deutsche Prüfungssprache sicher verstehen
            wollen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#f3b23c] to-[#4ea1ff] text-sm font-black text-[#07162f]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-black text-white">{testimonial.name}</p>
                  <p className="text-xs font-bold text-[#76b7ff]">{testimonial.label}</p>
                </div>
              </div>
              <p className="mt-4 text-[#f3b23c]">★★★★★</p>
              <p className="mt-4 text-sm leading-7 text-[#c7d2e5]">“{testimonial.quote}”</p>
            </article>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function FAQ() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionKicker>Fragen</SectionKicker>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Kurz erklärt.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#afc0da]">
            Die Plattform ist für echte deutsche Prüfungen gedacht — mit Hilfe zum besseren
            Verstehen.
          </p>
        </div>

        <div className="grid gap-4">
          {faqItems.map((item) => (
            <Glass key={item.question} className="rounded-3xl p-5">
              <p className="text-xl font-black text-white">{item.question}</p>
              <p className="mt-2 leading-7 text-[#afc0da]">{item.answer}</p>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <Glass className="overflow-hidden rounded-[38px] border-[#f3b23c]/25 p-6 md:p-8">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_.62fr_360px]">
          <div>
            <p className="inline-flex rounded-full border border-[#f3b23c]/40 bg-[#f3b23c]/10 px-4 py-2 text-sm font-black text-[#f3b23c]">
              Dein Erfolg beginnt jetzt
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">
              Starte heute mit deiner Prüfungsvorbereitung.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c7d2e5]">
              Lerne mit klaren Lernpfaden, smarten Lernkarten und realistischen Prüfungen — für
              deinen sicheren Erfolg.
            </p>
          </div>

          <div className="space-y-3 self-center">
            {["14 Tage Geld-zurück-Garantie", "Jederzeit kündbar", "Sofortiger Zugriff"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-black text-[#d7e1f3]"
                >
                  {item}
                </div>
              ),
            )}
          </div>

          <div className="rounded-[28px] border border-[#f3b23c]/35 bg-[#f8f3e8] p-6 text-[#07162f] shadow-[0_24px_70px_rgba(244,183,63,0.18)]">
            <p className="inline-flex rounded-full bg-[#f3b23c] px-4 py-1.5 text-sm font-black">
              Premium
            </p>
            <p className="mt-5 text-xl font-black">Alles inklusive für deinen Prüfungserfolg</p>
            <p className="mt-6 text-5xl font-black tracking-[-0.06em]">
              Ab 9,90 €
              <span className="text-base font-bold tracking-normal"> / Monat</span>
            </p>
            <a
              href="#kontakt"
              className="mt-6 block w-full rounded-2xl bg-[#07162f] px-5 py-4 text-center text-base font-black text-white transition hover:bg-[#10244d]"
            >
              Jetzt starten →
            </a>
            <p className="mt-3 text-center text-sm font-bold text-[#4a5568]">
              7 Tage kostenlos testen
            </p>
          </div>
        </div>
      </Glass>
    </section>
  );
}

function Footer() {
  return (
    <footer id="kontakt" className="border-t border-white/10 bg-[#050f24]">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-12 text-[#afc0da] sm:px-6 md:grid-cols-[1.3fr_repeat(4,1fr)] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#f3b23c]/30 bg-[#081b3d] text-sm font-black text-[#f3b23c]">
              FP
            </div>
            <p className="text-2xl font-black text-white">FachkundePilot</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7">
            Prüfungsorientiertes Lernen für deutsche Sach- und Fachkundeprüfungen.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-4 font-black text-white">{group.title}</p>
            <div className="space-y-3 text-sm">
              {group.links.map((link) => (
                <p key={link} className="transition hover:text-white">
                  {link}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="border-t border-white/10 px-4 py-7 text-center text-sm text-[#7e8fb0]">
        © 2026 FachkundePilot. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#06122b]/90 p-3 backdrop-blur-xl md:hidden">
      <a
        href="#preise"
        className="block w-full rounded-2xl bg-gradient-to-b from-[#ffe08a] to-[#f3b23c] px-5 py-4 text-center text-sm font-black text-[#06122b] shadow-[0_14px_40px_rgba(244,178,60,0.34)]"
      >
        Kostenlos starten →
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06122b] pb-20 text-white md:pb-0">
      <Hero />
      <TrustStrip />
      <LearningModes />
      <AudienceSection />
      <CurriculumSystem />
      <LanguageBridge />
      <IntelligenceLayer />
      <SEOScaleSection />
      <PlatformSection />
      <CertificatesSection />
      <AdminPanelPreview />
      <LearningEngine />
      <ExamSimulation />
      <Comparison />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
