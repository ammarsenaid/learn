import type { ReactNode } from "react";

const navItems = ["Zertifikate", "So funktioniert’s", "Preise", "Erfolgsgeschichten", "Kontakt"];

const heroTrustItems = [
  { label: "Offizieller Prüfungsstoff", icon: "✓" },
  { label: "Tausende Übungsfragen", icon: "◎" },
  { label: "Sicher & DSGVO-konform", icon: "🔒" },
];

const trustStripItems = [
  { icon: "🛡️", label: "12+ Zertifikate geplant" },
  { icon: "🧭", label: "1 Plattform für alle Lernpfade" },
  { icon: "🌍", label: "DE / AR / EN / TR" },
  { icon: "🧪", label: "Prüfungssimulation & Lernkarten" },
];

const certificates = [
  {
    title: "Taxi & Mietwagen",
    subtitle: "Fachkundeprüfung nach PBefG",
    description: "Lerne Tarif-, Orts- und Unternehmerwissen strukturiert und prüfungsnah.",
    stats: "12 Kapitel · 850+ Fragen",
    icon: "🚕",
    badge: "Beliebt",
  },
  {
    title: "§34a Bewachung",
    subtitle: "Sachkundeprüfung nach §34a GewO",
    description: "Verstehe Recht, Deeskalation und Praxisfälle mit präziser Auswertung.",
    stats: "9 Kapitel · 650+ Fragen",
    icon: "🛡️",
    badge: "Beliebt",
  },
  {
    title: "Güterkraftverkehr",
    subtitle: "Fachkundeprüfung Güterverkehr",
    description: "Lerne Kostenrechnung, Disposition und EU-Regeln strukturiert auf Deutsch.",
    stats: "10 Kapitel · 700+ Fragen",
    icon: "🚛",
    badge: "Beliebt",
  },
  {
    title: "Versicherung §34d",
    subtitle: "Sachkundeprüfung Versicherungsvermittlung",
    description: "Trainiere Beratungslogik, Haftung und Produktgrundlagen prüfungsnah.",
    stats: "8 Kapitel · 600+ Fragen",
    icon: "☂️",
    badge: "Verfügbar",
  },
  {
    title: "Finanzanlagen §34f",
    subtitle: "Sachkundeprüfung Finanzanlagenvermittlung",
    description: "Verstehe Produkte, Risikoaufklärung und Regulatorik für die IHK-Prüfung.",
    stats: "7 Kapitel · 550+ Fragen",
    icon: "📈",
    badge: "Verfügbar",
  },
  {
    title: "Immobiliardarlehen",
    subtitle: "Sachkundeprüfung Darlehensvermittlung",
    description: "Von Darlehensarten bis Verbraucherschutz — klar erklärt und wiederholbar.",
    stats: "7 Kapitel · 500+ Fragen",
    icon: "🏢",
    badge: "Verfügbar",
  },
];

const features = [
  ["📘", "Verständliche Erklärungen", "Komplexe Themen klar, verständlich und prüfungsorientiert aufbereitet."],
  ["🧪", "Prüfungssimulation", "Trainiere unter realistischen Bedingungen mit gezielten Auswertungen."],
  ["🗂️", "Lernkarten", "Wiederhole effizient mit smarten Lernkarten für langfristigen Lernerfolg."],
  ["📊", "Fortschritt verfolgen", "Behalte deinen Lernstand im Blick und erkenne gezielt Wissenslücken."],
  ["📱", "Mobil lernen", "Lerne auf Smartphone, Tablet und Desktop — jederzeit und überall."],
  ["🌍", "Mehrsprachige Unterstützung", "Inhalte in Deutsch, Arabisch, Englisch und Türkisch verfügbar."],
] as const;

const steps = [
  ["Zertifikat wählen", "Wähle dein Prüfungsziel aus über 12+ Zertifikaten.", "🎯"],
  ["Lernen & üben", "Lerne mit Erklärungen, Lernkarten und Übungen.", "📚"],
  ["Prüfung bestehen", "Bestehe mit mehr Sicherheit und Selbstvertrauen.", "🏁"],
] as const;

const testimonials = [
  ["Mehmet K.", "§34a Bewachung", "Dank FachkundePilot habe ich die §34a Prüfung beim ersten Versuch bestanden. Die Erklärungen sind einfach top!"],
  ["Sarah L.", "Versicherung §34d", "Die Lernkarten und Prüfungen haben mir enorm geholfen, alles stressfrei und strukturiert zu lernen."],
  ["Ahmed A.", "Taxi & Mietwagen", "Endlich eine Plattform, die komplexe Inhalte verständlich macht — und das in meiner Sprache."],
] as const;

function SectionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={`rounded-[28px] border border-white/[0.08] bg-[rgba(9,24,56,0.72)] shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06122B] text-[#F8FAFC]">
      <header className="relative bg-[#071630]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_77%_34%,rgba(78,161,255,.24),transparent_42%),radial-gradient(circle_at_26%_76%,rgba(243,178,60,.16),transparent_36%),linear-gradient(to_bottom,rgba(255,255,255,.02),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-[1240px] px-5 pb-14 pt-5 md:px-8 md:pb-16 lg:pt-7">
          <nav className="mb-8 flex min-h-[78px] items-center justify-between rounded-[24px] border border-white/[0.14] bg-[rgba(9,24,56,0.72)] px-5 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl md:mb-10 md:px-8">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#76B7FF]/35 bg-gradient-to-br from-[#0a1f47] to-[#235cb9] text-lg">🎓</div>
              <div>
                <p className="text-lg font-semibold">FachkundePilot</p>
                <p className="text-xs text-[#9FB0CC]">Prüfungsorientiertes Lernen</p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-[15px] text-[#D7E1F3] lg:flex">
              {navItems.map((item) => (
                <span key={item} className="cursor-pointer transition hover:text-white">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#D7E1F3] md:block">DE</button>
              <button className="rounded-2xl bg-[#F3B23C] px-5 py-3 text-sm font-semibold text-[#08142B] shadow-[0_12px_30px_rgba(243,178,60,0.18)] transition hover:-translate-y-0.5 hover:bg-[#E09B1F]">
                Jetzt starten
              </button>
            </div>
          </nav>

          <div className="grid items-center gap-10 lg:min-h-[calc(100vh-160px)] lg:max-h-[760px] lg:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)] lg:gap-12 xl:gap-16">
            <div className="max-w-[620px]">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4EA1FF]/35 bg-[rgba(9,24,56,0.72)] px-4 py-2.5 text-sm text-[#D7E1F3] shadow-[0_0_0_1px_rgba(78,161,255,0.12)]">
                ✨ Die Lernplattform für offizielle Sach- und Fachkundeprüfungen
              </p>
              <h1 className="max-w-[620px] text-[clamp(2.75rem,9vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[clamp(3.1rem,8vw,4rem)] lg:text-[clamp(3.5rem,5vw,5.4rem)] lg:leading-[0.98]">
                Bestehe deine Prüfung.
                <br />
                Mit <span className="bg-gradient-to-r from-[#f7c664] to-[#F3B23C] bg-clip-text text-transparent">Klarheit, Struktur</span>
                <br />
                und System.
              </h1>
              <p className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-[#D7E1F3] md:text-[18px] lg:text-[19px]">
                Verständliche Erklärungen in deiner Sprache, smarte Lernkarten, realistische Prüfungen und mobiles Lernen — alles an einem Ort.
              </p>
              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">
                <button className="rounded-2xl bg-[#F3B23C] px-6 py-3.5 font-semibold text-[#08142B] shadow-[0_12px_30px_rgba(243,178,60,0.18)] transition hover:-translate-y-1 hover:bg-[#E09B1F]">
                  Jetzt starten →
                </button>
                <button className="rounded-2xl border border-[#4EA1FF]/40 bg-[rgba(9,24,56,0.72)] px-6 py-3.5 font-semibold text-[#D7E1F3] shadow-[0_0_0_1px_rgba(78,161,255,0.12)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(35,92,185,0.22)]">
                  Alle Zertifikate ansehen
                </button>
              </div>
              <div className="mt-6 grid max-w-[560px] gap-2.5 text-sm sm:grid-cols-3">
                {heroTrustItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/[0.14] bg-[rgba(10,26,60,0.88)] px-3.5 py-2.5 text-[13px] text-[#D7E1F3]">
                    <span className="mr-2 text-[#76B7FF]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-[660px] lg:ml-auto">
              <div className="absolute -inset-3 -z-10 rounded-[32px] bg-[radial-gradient(circle,rgba(78,161,255,.24),transparent_68%)]" />
              <div className="relative max-h-[520px] overflow-hidden rounded-[30px] border border-white/[0.14] bg-[rgba(10,26,60,0.88)] p-4 shadow-[0_0_0_1px_rgba(78,161,255,0.12),0_20px_60px_rgba(35,92,185,0.22)] md:p-5">
                <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#081735] px-4 py-3 text-sm text-[#9FB0CC]">
                  <span>FachkundePilot Dashboard</span>
                  <span>⌕ 🔔 ● ● ●</span>
                </div>
                <div className="grid gap-3 md:grid-cols-[146px_1fr]">
                  <aside className="rounded-2xl border border-white/10 bg-[#081735] p-3 text-[13px] text-[#9FB0CC]">
                    {['Übersicht','Zertifikate','Lernkarten','Prüfungen','Fortschritt','Einstellungen'].map((s, i) => <p key={s} className={i===0 ? 'mb-3 rounded-lg bg-white/10 px-2 py-1 text-[#F8FAFC]' : 'mb-3'}>{s}</p>)}
                  </aside>
                    <div className="space-y-3.5">
                      <div>
                        <p className="text-lg font-semibold">Guten Abend, Ahmet 👋</p>
                        <p className="text-sm text-[#9FB0CC]">Weiter so! Du bist auf dem besten Weg.</p>
                      </div>
                      <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-[20px] border border-[#4EA1FF]/35 bg-[#0A1838] p-3.5">
                        <p className="text-sm text-[#D7E1F3]">Dein Gesamtfortschritt</p><p className="mt-1 text-3xl font-semibold">78%</p>
                        <div className="mt-2 h-2 rounded-full bg-slate-800"><div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-[#4EA1FF] to-[#76B7FF]" /></div>
                        <p className="mt-2 text-xs text-[#9FB0CC]">Super! Nur noch 22% bis zum Ziel.</p>
                      </div>
                      <div className="rounded-[20px] border border-white/10 bg-[#0A1838] p-3.5">
                        <p className="text-sm text-[#D7E1F3]">Lernzeit diese Woche</p><p className="mt-2 text-2xl font-semibold">12 h 45 min</p><p className="text-xs text-[#34D399]">+18% vs. letzte Woche</p>
                        <p className="mt-3 text-xs text-[#9FB0CC]">Prüfungsziel in 14 Tagen</p>
                      </div>
                    </div>
                    <div className="space-y-2 rounded-[20px] border border-white/10 bg-[#0A1838] p-3.5 text-sm text-[#D7E1F3]">
                      <p className="font-medium text-[#F8FAFC]">Aktive Zertifikate</p>
                      {[['§34a Bewachung','82%'],['Güterkraftverkehr','65%'],['Versicherung §34d','74%']].map(([n,v]) => <div key={n}><div className='mb-1 flex justify-between text-xs'><span>{n}</span><span>{v}</span></div><div className='h-1.5 rounded-full bg-slate-800'><div className='h-1.5 rounded-full bg-gradient-to-r from-[#F3B23C] to-[#4EA1FF]' style={{width:v}}/></div></div>)}
                    </div>
                    <div className="rounded-[20px] border border-[#F3B23C]/35 bg-[rgba(243,178,60,0.12)] p-3.5">
                      <p className="text-sm text-[#F8FAFC]">Heute empfohlen</p><p className="text-sm text-[#D7E1F3]">20 Min. Lernkarten: Recht & Kostenrechnung</p>
                      <button className="mt-3 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs text-[#F8FAFC] transition hover:-translate-y-0.5">Weiterlernen</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 md:mt-0 md:grid-cols-2 lg:absolute lg:left-0 lg:top-0 lg:z-10 lg:grid-cols-1 lg:gap-2.5">
                {[['🌍','Mehrsprachig','DE · AR · EN · TR'],['⭐','4.9/5','Nutzerbewertung'],['📈','78%','Dein Lernstand'],['📜','12+','Zertifikate verfügbar']].map(([i,t,s], idx) => <div key={t} className={`rounded-2xl border border-white/[0.14] bg-[rgba(10,26,60,0.88)] px-3.5 py-3 text-sm text-[#D7E1F3] shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 lg:w-[206px] ${idx === 0 ? 'lg:translate-x-[-20px] lg:translate-y-[50px]' : ''} ${idx === 1 ? 'lg:translate-x-[-20px] lg:translate-y-[58px]' : ''} ${idx === 2 ? 'lg:translate-x-[-20px] lg:translate-y-[64px]' : ''} ${idx === 3 ? 'lg:translate-x-[-20px] lg:translate-y-[70px]' : ''}`}><p>{i} <span className='font-semibold'>{t}</span></p><p className='text-xs text-[#9FB0CC]'>{s}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] space-y-8 px-5 pb-20 pt-8 md:space-y-12 md:px-8 md:pt-10">
        <section className="rounded-full border border-white/[0.14] bg-[rgba(9,24,56,0.72)] px-7 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <div className="grid gap-4 md:grid-cols-4">
            {trustStripItems.map((item, idx) => (
              <div key={item.label} className={`flex items-center gap-3 ${idx < trustStripItems.length - 1 ? "md:border-r md:border-white/10" : ""}`}>
                <span className="text-[#76B7FF]">{item.icon}</span>
                <span className="text-sm text-[#D7E1F3]">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionCard className="p-6 md:p-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><h2 className="text-3xl font-semibold md:text-[40px]">Zertifikate entdecken</h2><p className="mt-2 text-[#D7E1F3]">Wähle dein Ziel und starte mit einer klaren Prüfungsvorbereitung.</p></div>
            <button className="text-sm font-semibold text-[#76B7FF] transition hover:text-white">Alle Zertifikate ansehen →</button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((c) => (
              <article key={c.title} className="rounded-[22px] border border-white/[0.08] bg-[rgba(10,26,60,0.88)] p-5 transition duration-200 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_0_0_1px_rgba(78,161,255,0.12),0_20px_60px_rgba(35,92,185,0.22)]">
                <div className="mb-4 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1838] text-2xl">{c.icon}</div><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#9FB0CC]">{c.badge}</span></div>
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-[#D7E1F3]">{c.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#9FB0CC]">{c.description}</p>
                <p className="mt-4 text-sm text-[#D7E1F3]">{c.stats}</p>
                <button className="mt-5 text-sm font-semibold text-[#76B7FF] transition hover:text-white">Mehr erfahren →</button>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard className="p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {features.map(([icon, title, text], index) => (
              <div key={title} className={`px-3 ${index < features.length - 1 ? "xl:border-r xl:border-white/10" : ""}`}>
                <p className="mb-2 text-xl">{icon}</p>
                <p className="text-base font-semibold">{title}</p>
                <p className="mt-1 text-sm text-[#9FB0CC]">{text}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="grid gap-7 xl:grid-cols-2">
          <SectionCard className="p-6 md:p-8">
            <h3 className="text-3xl font-semibold">So funktioniert’s</h3>
            <div className="relative mt-7 grid gap-4 md:grid-cols-3">
              <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-5 hidden border-t border-dashed border-white/20 md:block" />
              {steps.map(([title, description, icon], index) => (
                <div key={title} className="relative rounded-[22px] border border-white/10 bg-[#0A1838] p-4">
                  <div className="mb-3 flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#4EA1FF] to-[#F3B23C] text-sm font-bold text-[#08142B]">{index + 1}</div><span>{icon}</span></div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-[#9FB0CC]">{description}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard className="p-6 md:p-8">
            <h3 className="text-3xl font-semibold">Das sagen unsere Teilnehmenden</h3>
            <div className="mt-6 grid gap-3">
              {testimonials.map(([name, cert, quote], i) => (
                <div key={name} className={`rounded-[22px] border p-4 ${i === 1 ? "border-[#4EA1FF]/40 bg-[#102147]" : "border-white/10 bg-[#0A1838]"}`}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a3266] text-xs text-[#D7E1F3]">{name.split(" ").map((x) => x[0]).join("")}</div><div><p className="font-semibold">{name}</p><p className="text-xs text-[#76B7FF]">{cert}</p></div></div>
                    <span className="text-xs text-[#F3B23C]">★★★★★</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#D7E1F3]">“{quote}”</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard className="border-[#F3B23C]/25 bg-gradient-to-r from-[#081735] via-[#0A1838] to-[#1c1b2f] p-6 md:p-8">
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.9fr_330px]">
            <div>
              <p className="inline-flex rounded-full border border-[#F3B23C]/35 bg-[#F3B23C]/15 px-3 py-1 text-sm text-[#F8FAFC]">Dein Erfolg beginnt jetzt</p>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Starte heute mit deiner Prüfungsvorbereitung.</h3>
              <p className="mt-3 text-[#D7E1F3]">Lerne mit klaren Lernpfaden, Lernkarten und realistischen Prüfungssimulationen — für deutsche Sach- und Fachkundeprüfungen.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#D7E1F3]"><li>• Zugriff auf alle Kurse & Zertifikate</li><li>• Prüfungssimulationen & Lernkarten</li><li>• Mehrsprachige Inhalte</li><li>• Lernen auf allen Geräten</li><li>• DSGVO-konform & sicher</li></ul>
            </div>
            <div className="space-y-3 text-sm text-[#D7E1F3]"><div className="rounded-2xl border border-white/15 bg-white/5 p-3">14 Tage Geld-zurück-Garantie</div><div className="rounded-2xl border border-white/15 bg-white/5 p-3">Jederzeit kündbar</div><div className="rounded-2xl border border-white/15 bg-white/5 p-3">Sofortiger Zugriff nach Registrierung</div></div>
            <div className="rounded-[22px] border border-white/20 bg-[#F8FAFC] p-5 text-[#08142B] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"><p className="inline-flex rounded-full bg-[#08142B] px-2.5 py-1 text-xs font-semibold text-[#F8FAFC]">Premium</p><p className="mt-3 text-base font-semibold">Alles inklusive für deinen Prüfungserfolg</p><p className="mt-4 text-4xl font-bold">Ab 9,90 € <span className="text-base font-medium">/ Monat</span></p><p className="text-sm text-slate-600">Monatlich kündbar</p><button className="mt-4 w-full rounded-2xl bg-[#08142B] px-4 py-3 font-semibold text-slate-50 transition hover:-translate-y-0.5 hover:bg-slate-800">Jetzt starten →</button><p className="mt-2 text-center text-xs text-slate-500">7 Tage kostenlos testen</p></div>
          </div>
        </SectionCard>
      </main>

      <footer className="border-t border-white/10 bg-[#071630]">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-12 text-sm text-[#D7E1F3] md:grid-cols-5 md:px-8">
          <div>
            <p className="text-lg font-semibold text-white">FachkundePilot</p>
            <p className="mt-2 text-sm text-[#9FB0CC]">Prüfungsorientiertes Lernen für deutsche Sach- und Fachkundeprüfungen.</p>
          </div>
          <div><p className="mb-3 font-semibold text-white">Produkt</p><p className="mb-2">Zertifikate</p><p className="mb-2">So funktioniert’s</p><p>Preise</p></div>
          <div><p className="mb-3 font-semibold text-white">Unternehmen</p><p className="mb-2">Über uns</p><p className="mb-2">Karriere</p><p>Kontakt</p></div>
          <div><p className="mb-3 font-semibold text-white">Rechtliches</p><p className="mb-2">Datenschutz</p><p className="mb-2">Impressum</p><p>AGB</p></div>
          <div><p className="mb-3 font-semibold text-white">Folge uns</p><p>◯ ◯ ◯</p></div>
        </div>
        <p className="pb-8 text-center text-xs text-[#7E8FB0]">© 2026 FachkundePilot. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
