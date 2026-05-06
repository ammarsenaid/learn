import type { ReactNode } from "react";

const navItems = ["Zertifikate", "So funktioniert’s", "Preise", "Erfolgsgeschichten", "Kontakt"];

const heroTrustItems = [
  "IHK-orientierte Struktur",
  "Mehrsprachig lernen",
  "Prüfung realistisch üben",
];

const heroStats = [
  {
    title: "Mehrsprachig",
    value: "DE · AR · EN · TR",
    icon: "🌍",
  },
  {
    title: "4.9/5",
    value: "Nutzerbewertung",
    icon: "⭐",
  },
  {
    title: "78%",
    value: "Dein Lernstand",
    icon: "📈",
  },
  {
    title: "12+",
    value: "Zertifikate geplant",
    icon: "🎓",
  },
] as const;

const trustStripItems = [
  {
    title: "12+ Zertifikate",
    text: "Für deutsche Sach- und Fachkundeprüfungen",
  },
  {
    title: "1 Lernsystem",
    text: "Einheitliche Struktur für alle Prüfungen",
  },
  {
    title: "DE / AR / EN / TR",
    text: "Deutsch lernen, Muttersprache verstehen",
  },
  {
    title: "Simulation & Karten",
    text: "Prüfungen üben und Wissen wiederholen",
  },
] as const;

const certificates = [
  {
    title: "Taxi & Mietwagen",
    subtitle: "Fachkundeprüfung nach PBefG",
    description: "Lerne Tarif-, Orts- und Unternehmerwissen für deine Personenbeförderung.",
    stats: "12 Kapitel · 850+ Fragen",
    badge: "Beliebt",
    icon: "🚕",
  },
  {
    title: "§34a Bewachung",
    subtitle: "Sachkundeprüfung nach §34a GewO",
    description: "Verstehe Recht, Deeskalation und Praxisfälle sicher anwenden.",
    stats: "9 Kapitel · 650+ Fragen",
    badge: "Beliebt",
    icon: "🛡️",
  },
  {
    title: "Güterkraftverkehr",
    subtitle: "Fachkundeprüfung Güterverkehr",
    description: "Kostenrechnung, Disposition und EU-Regeln für Güterverkehr im Griff.",
    stats: "10 Kapitel · 700+ Fragen",
    badge: "Verfügbar",
    icon: "🚚",
  },
  {
    title: "Versicherung §34d",
    subtitle: "Sachkundeprüfung Versicherungsvermittlung",
    description: "Beratungslogik, Haftung und Produktgrundlagen sicher verstehen.",
    stats: "8 Kapitel · 600+ Fragen",
    badge: "Verfügbar",
    icon: "📄",
  },
  {
    title: "Finanzanlagen §34f",
    subtitle: "Sachkundeprüfung Finanzanlagenvermittlung",
    description: "Produkte, Risikoaufklärung und Regulatorik sicher beherrschen.",
    stats: "7 Kapitel · 550+ Fragen",
    badge: "Verfügbar",
    icon: "📊",
  },
  {
    title: "Immobiliardarlehen",
    subtitle: "Sachkundeprüfung Darlehensvermittlung",
    description: "Darlehensarten, Finanzierung und Verbraucherschutz im Blick.",
    stats: "7 Kapitel · 500+ Fragen",
    badge: "Verfügbar",
    icon: "🏛️",
  },
] as const;

const features = [
  {
    title: "Verständliche Erklärungen",
    text: "Komplexe deutsche Prüfungsbegriffe einfach erklärt.",
    icon: "💡",
  },
  {
    title: "Prüfungssimulation",
    text: "Realistische Tests mit klarer Auswertung.",
    icon: "🧪",
  },
  {
    title: "Lernkarten",
    text: "Smarte Wiederholung für dauerhaftes Wissen.",
    icon: "🃏",
  },
  {
    title: "Fortschritt verfolgen",
    text: "Lernstand, Schwächen und Ziele immer sichtbar.",
    icon: "📈",
  },
  {
    title: "Mobil lernen",
    text: "Auf Smartphone, Tablet und Desktop nutzbar.",
    icon: "📱",
  },
  {
    title: "Mehrsprachig",
    text: "Deutsch lernen, in deiner Sprache verstehen.",
    icon: "🌐",
  },
] as const;

const steps = [
  {
    title: "Zertifikat wählen",
    text: "Wähle dein Prüfungsziel und erhalte einen klaren Lernpfad.",
  },
  {
    title: "Lernen & üben",
    text: "Trainiere mit Erklärungen, Lernkarten und Übungsfragen.",
  },
  {
    title: "Prüfung bestehen",
    text: "Simuliere die Prüfung und gehe vorbereitet in den echten Termin.",
  },
] as const;

const testimonials = [
  {
    name: "Mehmet K.",
    label: "§34a Bewachung",
    quote: "Dank FachkundePilot habe ich die Prüfung beim ersten Versuch bestanden. Die Lernkarten sind Gold wert.",
  },
  {
    name: "Sarah L.",
    label: "Versicherung §34d",
    quote: "Die Struktur ist sehr klar. Ich wusste jeden Tag genau, was ich lernen muss.",
  },
  {
    name: "Ahmed A.",
    label: "Taxi & Mietwagen",
    quote: "Endlich eine Plattform, die deutsche Prüfungsbegriffe verständlich macht.",
  },
] as const;

const footerGroups = [
  {
    title: "Produkt",
    links: ["Zertifikate", "So funktioniert’s", "Preise", "Erfolgsgeschichten"],
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
    title: "Folge uns",
    links: ["Instagram", "YouTube", "LinkedIn", "Facebook"],
  },
] as const;

function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[30px] border border-white/10 bg-[#081b3d]/80 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  action?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#F4B73F]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#AFC0DA] md:text-lg">{text}</p>
      </div>

      {action ? (
        <button className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#76B7FF] transition hover:border-[#76B7FF]/50 hover:bg-[#76B7FF]/10">
          {action}
        </button>
      ) : null}
    </div>
  );
}

function Navbar() {
  return (
    <header className="mx-auto max-w-[1360px] px-4 pt-5 sm:px-6 lg:px-8">
      <nav className="flex min-h-[82px] items-center justify-between rounded-[26px] border border-white/10 bg-[#081832]/80 px-4 shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl md:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#F4B73F]/40 bg-gradient-to-br from-[#123C79] to-[#081832] text-xl text-[#F4B73F] shadow-[0_0_28px_rgba(78,161,255,0.18)]">
            ✦
          </div>
          <div>
            <p className="text-xl font-black tracking-[-0.03em] text-white md:text-2xl">
              FachkundePilot
            </p>
            <p className="hidden text-xs font-medium text-[#8EA0C0] sm:block">
              Prüfungsorientiertes Lernen
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#C7D2E5] lg:flex">
          {navItems.map((item) => (
            <a key={item} className="transition hover:text-white" href="#">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:block">
            DE
          </button>
          <button className="rounded-2xl bg-[#F4B73F] px-5 py-3 text-sm font-black text-[#07162F] shadow-[0_12px_35px_rgba(244,183,63,0.25)] transition hover:bg-[#E7A928] md:px-7">
            Jetzt starten
          </button>
        </div>
      </nav>
    </header>
  );
}

function HeroDashboard() {
  return (
    <div className="grid items-center gap-5 xl:grid-cols-[minmax(0,1fr)_205px]">
      <GlassPanel className="relative overflow-hidden border-[#4EA1FF]/25 p-4 shadow-[0_0_0_1px_rgba(78,161,255,0.14),0_30px_90px_rgba(45,107,210,0.22)]">
        <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#4EA1FF]/20 blur-3xl" />
        <div className="absolute bottom-[-90px] left-[20%] h-52 w-52 rounded-full bg-[#F4B73F]/10 blur-3xl" />

        <div className="relative rounded-[24px] border border-white/10 bg-[#071832]/95 p-3">
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <div>
              <p className="text-sm font-black text-white">FachkundePilot Dashboard</p>
              <p className="text-xs text-[#8EA0C0]">Live Lernübersicht</p>
            </div>
            <div className="flex items-center gap-2 text-[#8EA0C0]">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.05]">⌕</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.05]">🔔</span>
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#F4B73F] to-[#4EA1FF]" />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[132px_1fr]">
            <aside className="hidden rounded-2xl border border-white/10 bg-[#0A1B3F] p-3 text-xs font-semibold text-[#8EA0C0] lg:block">
              {["Übersicht", "Zertifikate", "Lernkarten", "Prüfungen", "Fortschritt", "Notizen"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`mb-2 rounded-xl px-3 py-2 ${
                      index === 0 ? "bg-[#4EA1FF]/15 text-white" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    {item}
                  </div>
                )
              )}
            </aside>

            <main className="min-w-0">
              <div className="mb-4">
                <p className="text-xl font-black text-white">Guten Abend, Ahmet 👋</p>
                <p className="text-sm text-[#8EA0C0]">Weiter so! Du bist auf dem besten Weg.</p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-sm text-[#AFC0DA]">Dein Gesamtfortschritt</p>
                  <div className="mt-2 flex items-end justify-between">
                    <p className="text-5xl font-black tracking-[-0.05em] text-white">78%</p>
                    <span className="rounded-full bg-[#3DDC97]/10 px-3 py-1 text-xs font-bold text-[#3DDC97]">
                      +18%
                    </span>
                  </div>
                  <div className="mt-4 h-2.5 rounded-full bg-black/30">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#4EA1FF] to-[#6EE7F9]" />
                  </div>
                  <p className="mt-3 text-xs text-[#8EA0C0]">Nur noch 22% bis zum Lernziel.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-sm text-[#AFC0DA]">Lernzeit diese Woche</p>
                  <p className="mt-2 text-4xl font-black tracking-[-0.04em] text-white">12 h 45</p>
                  <p className="mt-2 text-xs font-semibold text-[#3DDC97]">
                    +2 h 15 min gegenüber letzter Woche
                  </p>
                  <div className="mt-4 grid grid-cols-7 gap-1">
                    {[35, 52, 68, 44, 78, 62, 88].map((height, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#4EA1FF]/80"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 grid gap-3 md:grid-cols-[1.1fr_.9fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-white">Aktive Zertifikate</p>
                    <span className="text-xs text-[#76B7FF]">3 aktiv</span>
                  </div>

                  {[
                    ["Taxi & Mietwagen", "82%"],
                    ["§34a Bewachung", "65%"],
                    ["Güterkraftverkehr", "74%"],
                  ].map(([name, progress]) => (
                    <div key={name} className="mb-3">
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-[#AFC0DA]">{name}</span>
                        <span className="font-bold text-white">{progress}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-black/30">
                        <div
                          className="h-full rounded-full bg-[#F4B73F]"
                          style={{ width: progress }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-[#F4B73F]/25 bg-[#F4B73F]/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F4B73F]">
                    Heute empfohlen
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">
                    20 Min. Lernkarten: Recht & Kostenrechnung
                  </p>
                  <button className="mt-4 rounded-xl bg-[#F4B73F] px-4 py-2 text-xs font-black text-[#07162F]">
                    Weiterlernen
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </GlassPanel>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-1">
        {heroStats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-[22px] border border-white/10 bg-[#081B3D]/85 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-[#4EA1FF]/35 hover:bg-[#0A2452]"
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-lg">
              {stat.icon}
            </div>
            <p className="text-2xl font-black tracking-[-0.04em] text-white">{stat.title}</p>
            <p className="mt-1 text-sm font-medium text-[#AFC0DA]">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(78,161,255,0.28),transparent_34%),radial-gradient(circle_at_24%_34%,rgba(244,183,63,0.11),transparent_28%),linear-gradient(180deg,#06122B_0%,#07162F_58%,#06122B_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative">
        <Navbar />

        <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[0.92fr_1.18fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4EA1FF]/40 bg-[#081B3D]/80 px-4 py-2 text-sm font-bold text-[#CFE4FF] shadow-[0_0_30px_rgba(78,161,255,0.12)]">
              <span className="h-2 w-2 rounded-full bg-[#4EA1FF]" />
              Die Lernplattform für offizielle Sach- und Fachkundeprüfungen
            </div>

            <h1 className="mt-6 max-w-[660px] text-[56px] font-black leading-[0.98] tracking-[-0.065em] text-white sm:text-[68px] lg:text-[76px] xl:text-[86px]">
              Bestehe deine Prüfung.
              <br />
              Mit{" "}
              <span className="bg-gradient-to-r from-[#F4B73F] to-[#FFE39A] bg-clip-text text-transparent">
                Klarheit,
                <br />
                Struktur und System.
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] text-lg leading-8 text-[#C7D2E5] md:text-xl">
              Verständliche Erklärungen in deiner Sprache, smarte Lernkarten, realistische
              Prüfungen und mobiles Lernen — alles an einem Ort.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-2xl bg-[#F4B73F] px-7 py-4 text-base font-black text-[#07162F] shadow-[0_18px_44px_rgba(244,183,63,0.26)] transition hover:bg-[#E7A928]">
                Jetzt starten →
              </button>
              <button className="rounded-2xl border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-bold text-white transition hover:border-[#76B7FF]/45 hover:bg-[#76B7FF]/10">
                Alle Zertifikate ansehen
              </button>
            </div>

            <div className="mt-7 grid max-w-[620px] gap-3 sm:grid-cols-3">
              {heroTrustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-[#D7E1F3]"
                >
                  <span className="mr-2 text-[#3DDC97]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="relative mx-auto -mt-8 max-w-[1320px] px-4 sm:px-6 lg:px-8">
      <GlassPanel className="p-5">
        <div className="grid gap-4 md:grid-cols-4">
          {trustStripItems.map((item, index) => (
            <div
              key={item.title}
              className={`px-3 ${
                index < trustStripItems.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <p className="text-xl font-black text-white">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-[#8EA0C0]">{item.text}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 py-20 sm:px-6 lg:px-8">
      <GlassPanel className="p-5 md:p-8">
        <SectionHeader
          eyebrow="Zertifikate"
          title="Zertifikate entdecken"
          text="Wähle dein Ziel und starte mit einer klaren Prüfungsvorbereitung. Jedes Zertifikat folgt derselben starken Lernlogik."
          action="Alle Zertifikate ansehen →"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group flex min-h-[270px] flex-col rounded-[26px] border border-white/10 bg-[#0A1B3F]/82 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#4EA1FF]/40 hover:shadow-[0_24px_60px_rgba(78,161,255,0.12)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-13 w-13 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-2xl">
                  {certificate.icon}
                </div>
                <span className="rounded-full border border-[#F4B73F]/25 bg-[#F4B73F]/10 px-3 py-1 text-xs font-black text-[#F4B73F]">
                  {certificate.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                {certificate.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#76B7FF]">{certificate.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#AFC0DA]">
                {certificate.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-[#C7D2E5]">{certificate.stats}</p>
                <button className="text-sm font-black text-[#76B7FF] transition group-hover:text-[#F4B73F]">
                  Mehr erfahren →
                </button>
              </div>
            </article>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <GlassPanel className="p-5 md:p-7">
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
              <p className="mt-2 text-sm leading-6 text-[#8EA0C0]">{feature.text}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}

function HowItWorksAndTestimonials() {
  return (
    <section className="mx-auto grid max-w-[1360px] gap-6 px-4 pb-20 sm:px-6 lg:px-8 xl:grid-cols-[0.95fr_1.05fr]">
      <GlassPanel className="p-6 md:p-8">
        <SectionHeader
          eyebrow="Lernlogik"
          title="So funktioniert’s"
          text="Ein klarer Prozess: Ziel wählen, systematisch lernen, realistisch prüfen."
        />

        <div className="space-y-5">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F4B73F] text-lg font-black text-[#07162F]">
                {index + 1}
              </div>
              <div>
                <p className="text-xl font-black text-white">{step.title}</p>
                <p className="mt-2 leading-7 text-[#AFC0DA]">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel className="p-6 md:p-8">
        <SectionHeader
          eyebrow="Erfolgsgeschichten"
          title="Das sagen unsere Teilnehmenden"
          text="Klarheit, Struktur und Wiederholung machen den Unterschied."
        />

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#F4B73F] to-[#4EA1FF] text-sm font-black text-[#07162F]">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-black text-white">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-[#76B7FF]">{testimonial.label}</p>
                </div>
              </div>
              <p className="mt-3 text-[#F4B73F]">★★★★★</p>
              <p className="mt-3 text-sm leading-7 text-[#C7D2E5]">“{testimonial.quote}”</p>
            </article>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}

function FinalCTA() {
  const benefits = [
    "Zugriff auf alle Kurse & Zertifikate",
    "Prüfungssimulationen & Lernkarten",
    "Mehrsprachige Inhalte",
    "Lernen auf allen Geräten",
    "DSGVO-konform & sicher",
  ];

  const reassurance = [
    "14 Tage Geld-zurück-Garantie",
    "Jederzeit kündbar",
    "Sofortiger Zugriff nach Registrierung",
  ];

  return (
    <section className="mx-auto max-w-[1360px] px-4 pb-20 sm:px-6 lg:px-8">
      <GlassPanel className="overflow-hidden border-[#F4B73F]/25 p-6 md:p-8">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_.65fr_360px]">
          <div>
            <p className="inline-flex rounded-full border border-[#F4B73F]/40 bg-[#F4B73F]/10 px-4 py-2 text-sm font-black text-[#F4B73F]">
              Dein Erfolg beginnt jetzt
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Starte heute mit deiner Prüfungsvorbereitung.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C7D2E5]">
              Lerne mit klaren Lernpfaden, smarten Lernkarten und realistischen Prüfungen — für
              deinen sicheren Erfolg.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm font-semibold text-[#D7E1F3]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#3DDC97]/15 text-[#3DDC97]">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 self-center">
            {reassurance.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-bold text-[#D7E1F3]">
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-[#F4B73F]/35 bg-[#F8F3E8] p-6 text-[#07162F] shadow-[0_24px_70px_rgba(244,183,63,0.18)]">
            <p className="inline-flex rounded-full bg-[#F4B73F] px-4 py-1.5 text-sm font-black">
              Premium
            </p>
            <p className="mt-5 text-xl font-black">Alles inklusive für deinen Prüfungserfolg</p>
            <p className="mt-6 text-5xl font-black tracking-[-0.06em]">
              Ab 9,90 €
              <span className="text-base font-bold tracking-normal"> / Monat</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-[#4A5568]">Monatlich kündbar</p>
            <button className="mt-6 w-full rounded-2xl bg-[#07162F] px-5 py-4 text-base font-black text-white transition hover:bg-[#10244D]">
              Jetzt starten →
            </button>
            <p className="mt-3 text-center text-sm font-semibold text-[#4A5568]">
              7 Tage kostenlos testen
            </p>
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050F24]">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-12 text-[#AFC0DA] sm:px-6 md:grid-cols-[1.3fr_repeat(4,1fr)] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#F4B73F]/30 bg-[#081B3D] text-[#F4B73F]">
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

      <p className="border-t border-white/10 px-4 py-7 text-center text-sm text-[#7E8FB0]">
        © 2026 FachkundePilot. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06122B] text-white">
      <Hero />
      <TrustStrip />
      <CertificatesSection />
      <FeatureStrip />
      <HowItWorksAndTestimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
