import type { ReactNode } from "react";

const navItems = ["Zertifikate", "Lernmethode", "Preise", "Erfolge", "Kontakt"];

const heroTrustItems = [
  "IHK-orientierte Struktur",
  "Mehrsprachige Erklärungen",
  "Prüfungssimulation",
];

const heroMetrics = [
  { label: "Prüfungsreife", value: "78%", progress: "78%", tone: "blue" },
  { label: "Lernzeit", value: "12h 45m", progress: "64%", tone: "green" },
  { label: "Karten fällig", value: "24", progress: "42%", tone: "gold" },
] as const;

const trustStats = [
  {
    icon: "🌍",
    title: "Mehrsprachig",
    value: "DE · AR · EN · TR",
    text: "Deutsch bleibt Prüfungssprache — deine Sprache hilft beim Verstehen.",
  },
  {
    icon: "⭐",
    title: "Bewertung",
    value: "4.9/5",
    text: "Klare Struktur, einfache Erklärungen und messbarer Fortschritt.",
  },
  {
    icon: "🧠",
    title: "Lernlogik",
    value: "Smart Review",
    text: "Wiederholung, Schwächenanalyse und realistische Prüfungsfragen.",
  },
  {
    icon: "🎓",
    title: "Zertifikate",
    value: "12+ geplant",
    text: "Ein Lernsystem für mehrere deutsche Sach- und Fachkundeprüfungen.",
  },
] as const;

const certificates = [
  {
    icon: "🚕",
    title: "Taxi & Mietwagen",
    subtitle: "Fachkundeprüfung nach PBefG",
    description: "Tarif-, Orts- und Unternehmerwissen für die Personenbeförderung.",
    stats: "12 Kapitel · 850+ Fragen",
    badge: "Beliebt",
    level: "Mittel",
    languages: "DE · AR · EN · TR",
  },
  {
    icon: "🛡️",
    title: "§34a Bewachung",
    subtitle: "Sachkundeprüfung nach §34a GewO",
    description: "Recht, Deeskalation und Praxisfälle verständlich trainieren.",
    stats: "9 Kapitel · 650+ Fragen",
    badge: "Beliebt",
    level: "Einsteiger",
    languages: "DE · AR · EN",
  },
  {
    icon: "🚚",
    title: "Güterkraftverkehr",
    subtitle: "Fachkundeprüfung Güterverkehr",
    description: "Kostenrechnung, Disposition und EU-Regeln strukturiert lernen.",
    stats: "10 Kapitel · 700+ Fragen",
    badge: "Verfügbar",
    level: "Fortgeschritten",
    languages: "DE · EN · TR",
  },
  {
    icon: "📄",
    title: "Versicherung §34d",
    subtitle: "Sachkunde Versicherungsvermittlung",
    description: "Beratungslogik, Haftung und Produktgrundlagen prüfungsnah üben.",
    stats: "8 Kapitel · 600+ Fragen",
    badge: "Bald verfügbar",
    level: "Mittel",
    languages: "DE · AR · EN",
  },
  {
    icon: "📊",
    title: "Finanzanlagen §34f",
    subtitle: "Sachkunde Finanzanlagenvermittlung",
    description: "Produkte, Risikoaufklärung und Regulatorik sicher verstehen.",
    stats: "7 Kapitel · 550+ Fragen",
    badge: "Bald verfügbar",
    level: "Fortgeschritten",
    languages: "DE · EN",
  },
  {
    icon: "🏛️",
    title: "Immobiliardarlehen",
    subtitle: "Sachkunde Darlehensvermittlung",
    description: "Darlehensarten, Finanzierung und Verbraucherschutz im Blick.",
    stats: "7 Kapitel · 500+ Fragen",
    badge: "Bald verfügbar",
    level: "Mittel",
    languages: "DE · AR · TR",
  },
] as const;

const features = [
  {
    icon: "💡",
    title: "Deutsch verstehen",
    text: "Prüfungsbegriffe bleiben deutsch, aber werden einfach und logisch erklärt.",
  },
  {
    icon: "🧪",
    title: "Prüfung simulieren",
    text: "Trainiere echte Prüfungssituationen mit Zeitdruck und Auswertung.",
  },
  {
    icon: "🃏",
    title: "Lernkarten",
    text: "Wiederhole Regeln, Begriffe und Rechenlogik mit System.",
  },
  {
    icon: "📈",
    title: "Fortschritt messen",
    text: "Erkenne sofort, welche Themen sitzen und was noch fehlt.",
  },
  {
    icon: "📱",
    title: "Mobil lernen",
    text: "Auf Smartphone, Tablet und Desktop — überall weiterlernen.",
  },
  {
    icon: "🌐",
    title: "Mehrsprachig",
    text: "Arabisch, Englisch und Türkisch helfen dir beim Verstehen.",
  },
] as const;

const learningSteps = [
  {
    number: "01",
    title: "Zertifikat wählen",
    text: "Wähle dein Prüfungsziel und erhalte automatisch eine klare Lernstruktur.",
  },
  {
    number: "02",
    title: "Deutsch verstehen",
    text: "Lerne die offiziellen Begriffe auf Deutsch — mit einfachen Erklärungen.",
  },
  {
    number: "03",
    title: "Lernkarten trainieren",
    text: "Wiederhole wichtige Regeln, Begriffe und Rechenlogik systematisch.",
  },
  {
    number: "04",
    title: "Prüfung simulieren",
    text: "Teste dich unter realistischen Bedingungen mit Zeit, Punkten und Auswertung.",
  },
] as const;

const comparisonRows = [
  {
    normal: "PDFs, Bücher und Notizen sind unübersichtlich.",
    pilot: "Klare Lernpfade mit Fortschritt, Themenlogik und Prüfungsvorbereitung.",
  },
  {
    normal: "Du weißt nicht genau, was du schon kannst.",
    pilot: "Du siehst Schwächen, Fortschritt und nächste Lernschritte sofort.",
  },
  {
    normal: "Prüfungen fühlen sich plötzlich und stressig an.",
    pilot: "Simulationen bereiten dich gezielt auf echte Prüfungssituationen vor.",
  },
] as const;

const testimonials = [
  {
    initials: "MK",
    name: "Mehmet K.",
    label: "§34a Bewachung",
    quote: "Die Lernkarten haben mir geholfen, die wichtigsten Begriffe schnell zu verstehen.",
  },
  {
    initials: "SL",
    name: "Sarah L.",
    label: "Versicherung §34d",
    quote: "Endlich eine klare Struktur. Ich wusste jeden Tag genau, was ich lernen muss.",
  },
  {
    initials: "AA",
    name: "Ahmed A.",
    label: "Taxi & Mietwagen",
    quote: "Deutsch war schwer für mich. Die einfachen Erklärungen haben alles verändert.",
  },
] as const;

const pricingBenefits = [
  "Alle verfügbaren Zertifikate",
  "Lernkarten & Wiederholung",
  "Prüfungssimulationen",
  "Mehrsprachige Erklärungen",
  "Fortschrittsanalyse",
];

const footerGroups = [
  {
    title: "Produkt",
    links: ["Zertifikate", "Lernmethode", "Preise", "Erfolgsgeschichten"],
  },
  {
    title: "Unternehmen",
    links: ["Über uns", "Karriere", "Kontakt"],
  },
  {
    title: "Rechtliches",
    links: ["Datenschutz", "Impressum", "AGB"],
  },
  {
    title: "Social",
    links: ["Instagram", "YouTube", "LinkedIn", "Facebook"],
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
      className={`border border-white/10 bg-[#081b3d]/80 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${className}`}
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

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-2xl bg-gradient-to-b from-[#ffd36b] to-[#f3b23c] px-7 py-4 text-base font-black text-[#07162f] shadow-[0_18px_45px_rgba(244,183,63,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(244,183,63,0.38)]">
      {children}
    </button>
  );
}

function SecondaryButton({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-2xl border border-white/15 bg-white/[0.045] px-7 py-4 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:border-[#76b7ff]/50 hover:bg-[#76b7ff]/10">
      {children}
    </button>
  );
}

function ProgressBar({
  value,
  tone = "blue",
}: {
  value: string;
  tone?: "blue" | "gold" | "green";
}) {
  const color =
    tone === "gold"
      ? "bg-[#f3b23c]"
      : tone === "green"
        ? "bg-[#34d399]"
        : "bg-gradient-to-r from-[#4ea1ff] to-[#6ee7f9]";

  return (
    <div className="h-2 rounded-full bg-black/30">
      <div className={`h-full rounded-full ${color}`} style={{ width: value }} />
    </div>
  );
}

function Navbar() {
  return (
    <header className="relative z-20 mx-auto max-w-[1380px] px-4 pt-5 sm:px-6 lg:px-8">
      <nav className="flex min-h-[82px] items-center justify-between rounded-[28px] border border-white/10 bg-[#071832]/80 px-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-7">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#f3b23c]/40 bg-gradient-to-br from-[#16417d] to-[#071832] text-xl shadow-[0_0_32px_rgba(78,161,255,0.22)]">
            ✦
          </div>
          <div>
            <p className="text-xl font-black tracking-[-0.04em] text-white md:text-2xl">
              FachkundePilot
            </p>
            <p className="hidden text-xs font-semibold text-[#8ea0c0] sm:block">
              Prüfungsorientiertes Lernen
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#c7d2e5] lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-white">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-black text-white transition hover:bg-white/[0.1] sm:block">
            DE
          </button>
          <PrimaryButton>Jetzt starten</PrimaryButton>
        </div>
      </nav>
    </header>
  );
}

function DashboardPreview() {
  return (
    <Glass className="relative overflow-hidden rounded-[34px] border-[#4ea1ff]/25 p-4 shadow-[0_0_0_1px_rgba(78,161,255,0.14),0_35px_110px_rgba(36,100,210,0.24)]">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4ea1ff]/20 blur-3xl" />
      <div className="absolute -bottom-24 left-20 h-56 w-56 rounded-full bg-[#f3b23c]/10 blur-3xl" />

      <div className="relative rounded-[28px] border border-white/10 bg-[#061936]/95 p-4">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
          <div>
            <p className="text-sm font-black text-white">FachkundePilot Dashboard</p>
            <p className="text-xs font-medium text-[#8ea0c0]">Live Lernübersicht</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-[#9fb0cc]">
              ⌕
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06]">
              🔔
            </span>
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f3b23c] to-[#4ea1ff]" />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[120px_1fr]">
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
                <p className="text-xl font-black text-white">Guten Abend, Ahmet 👋</p>
                <p className="text-sm leading-6 text-[#8ea0c0]">
                  Du bist auf dem besten Weg zur Prüfung.
                </p>
              </div>
              <span className="w-fit rounded-full bg-[#f3b23c]/10 px-3 py-1 text-xs font-black text-[#f3b23c]">
                Prüfung in 14 Tagen
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                >
                  <p className="text-sm text-[#afc0da]">{metric.label}</p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.05em] text-white">
                    {metric.value}
                  </p>
                  <div className="mt-4">
                    <ProgressBar
                      value={metric.progress}
                      tone={metric.tone as "blue" | "gold" | "green"}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[1.1fr_.9fr]">
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
                <button className="mt-4 rounded-xl bg-[#f3b23c] px-4 py-2 text-xs font-black text-[#07162f]">
                  Weiterlernen
                </button>
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(78,161,255,0.3),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(244,183,63,0.14),transparent_26%),linear-gradient(180deg,#06122b_0%,#07162f_62%,#06122b_100%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative">
        <Navbar />

        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(520px,1.02fr)] lg:px-8 lg:pb-20 lg:pt-14 xl:gap-16">
          <div>
            <Badge>Die Lernplattform für offizielle Sach- und Fachkundeprüfungen</Badge>

            <h1 className="mt-6 max-w-[680px] text-[52px] font-black leading-[0.97] tracking-[-0.065em] text-white sm:text-[64px] lg:text-[72px] xl:text-[84px]">
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
              <PrimaryButton>Jetzt starten →</PrimaryButton>
              <SecondaryButton>Alle Zertifikate ansehen</SecondaryButton>
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
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl">
                {item.icon}
              </div>
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

function CertificatesSection() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 py-20 sm:px-6 lg:px-8">
      <Glass className="rounded-[34px] p-5 md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#f3b23c]">
              Zertifikate
            </p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Zertifikate entdecken
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#afc0da]">
              Wähle dein Ziel und starte mit einer klaren Prüfungsvorbereitung. Jedes Zertifikat
              folgt derselben starken Lernlogik.
            </p>
          </div>

          <button className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-[#76b7ff] transition hover:border-[#76b7ff]/50 hover:bg-[#76b7ff]/10">
            Alle Zertifikate ansehen →
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group flex min-h-[310px] flex-col rounded-[28px] border border-white/10 bg-[#0a1b3f]/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#4ea1ff]/40 hover:shadow-[0_24px_70px_rgba(78,161,255,0.16)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-2xl">
                  {certificate.icon}
                </div>
                <span className="rounded-full border border-[#f3b23c]/25 bg-[#f3b23c]/10 px-3 py-1 text-xs font-black text-[#f3b23c]">
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
                <span className="rounded-2xl bg-white/[0.05] px-3 py-2 text-xs font-bold text-[#c7d2e5]">
                  {certificate.stats}
                </span>
                <span className="rounded-2xl bg-white/[0.05] px-3 py-2 text-xs font-bold text-[#c7d2e5]">
                  {certificate.level}
                </span>
                <span className="rounded-2xl bg-white/[0.05] px-3 py-2 text-xs font-bold text-[#c7d2e5]">
                  {certificate.languages}
                </span>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <button className="text-sm font-black text-[#76b7ff] transition group-hover:text-[#f3b23c]">
                  Mehr erfahren →
                </button>
              </div>
            </article>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <Glass className="rounded-[30px] p-5 md:p-7">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`rounded-2xl p-4 ${
                index < features.length - 1 ? "xl:border-r xl:border-white/10" : ""
              }`}
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl">
                {feature.icon}
              </div>
              <p className="text-base font-black text-white">{feature.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#8ea0c0]">{feature.text}</p>
            </div>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function MethodAndProof() {
  return (
    <section className="mx-auto grid max-w-[1360px] gap-6 px-4 pb-20 sm:px-6 lg:px-8 xl:grid-cols-[0.95fr_1.05fr]">
      <Glass className="rounded-[34px] p-6 md:p-8">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#f3b23c]">
          Lernlogik
        </p>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
          So funktioniert’s
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#afc0da]">
          Ein klarer Prozess: Ziel wählen, strukturiert lernen, realistisch prüfen.
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
        <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#f3b23c]">
          Warum nicht einfach PDF?
        </p>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
          Lernen mit System statt Chaos.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#afc0da]">
          FachkundePilot verwandelt trockene Unterlagen in einen klaren Lernprozess.
        </p>

        <div className="mt-8 space-y-4">
          {comparisonRows.map((row) => (
            <div
              key={row.normal}
              className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-4 md:grid-cols-2"
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8ea0c0]">
                  Bücher / PDFs
                </p>
                <p className="mt-2 text-sm leading-7 text-[#afc0da]">✕ {row.normal}</p>
              </div>
              <div className="rounded-2xl border border-[#f3b23c]/25 bg-[#f3b23c]/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f3b23c]">
                  FachkundePilot
                </p>
                <p className="mt-2 text-sm font-bold leading-7 text-white">✓ {row.pilot}</p>
              </div>
            </div>
          ))}
        </div>
      </Glass>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <Glass className="rounded-[34px] p-6 md:p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#f3b23c]">
              Erfolgsgeschichten
            </p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
              Das sagen Teilnehmende
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#afc0da]">
            Klarheit, Struktur und Wiederholung machen den Unterschied — besonders wenn Deutsch
            nicht deine Muttersprache ist.
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

function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <Glass className="overflow-hidden rounded-[36px] border-[#f3b23c]/25 p-6 md:p-8">
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

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {pricingBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-sm font-bold text-[#d7e1f3]"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#34d399]/15 text-[#34d399]">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
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
            <p className="mt-2 text-sm font-bold text-[#4a5568]">Monatlich kündbar</p>
            <button className="mt-6 w-full rounded-2xl bg-[#07162f] px-5 py-4 text-base font-black text-white transition hover:bg-[#10244d]">
              Jetzt starten →
            </button>
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
    <footer className="border-t border-white/10 bg-[#050f24]">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-12 text-[#afc0da] sm:px-6 md:grid-cols-[1.3fr_repeat(4,1fr)] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#f3b23c]/30 bg-[#081b3d] text-[#f3b23c]">
              ✦
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

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06122b] text-white">
      <Hero />
      <TrustStrip />
      <CertificatesSection />
      <FeatureStrip />
      <MethodAndProof />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
