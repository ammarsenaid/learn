import type { ReactNode } from "react";

const navItems = ["Zertifikate", "So funktioniert’s", "Preise", "Erfolgsgeschichten", "Kontakt"];

const heroTrustItems = [
  "Offizieller Prüfungsstoff",
  "Tausende Übungsfragen",
  "Sicher & DSGVO-konform",
];

const heroStats = [
  { title: "Mehrsprachig", value: "DE · AR · EN · TR" },
  { title: "4.9/5", value: "Nutzerbewertung" },
  { title: "78%", value: "Dein Lernstand" },
  { title: "12+", value: "Zertifikate verfügbar" },
];

const trustStripItems = [
  "12+ Zertifikate geplant",
  "1 Plattform für alle Lernpfade",
  "DE / AR / EN / TR",
  "Prüfungssimulation & Lernkarten",
];

const certificates = [
  ["Taxi & Mietwagen", "Fachkundeprüfung nach PBefG", "Lerne Tarif-, Orts- und Unternehmerwissen für deine Personenbeförderung.", "12 Kapitel · 850+ Fragen", "Beliebt"],
  ["§34a Bewachung", "Sachkundeprüfung nach §34a GewO", "Verstehe Recht, Deeskalation und Praxisfälle sicher anwenden.", "9 Kapitel · 650+ Fragen", "Beliebt"],
  ["Güterkraftverkehr", "Fachkundeprüfung Güterverkehr", "Kostenrechnung, Disposition und EU-Regeln für Güterverkehr im Griff.", "10 Kapitel · 700+ Fragen", "Verfügbar"],
  ["Versicherung §34d", "Sachkundeprüfung Versicherungsvermittlung", "Beratungslogik, Haftung und Produktgrundlagen sicher verstehen.", "8 Kapitel · 600+ Fragen", "Verfügbar"],
  ["Finanzanlagen §34f", "Sachkundeprüfung Finanzanlagenvermittlung", "Produkte, Risikoaufklärung und Regulatorik sicher beherrschen.", "7 Kapitel · 550+ Fragen", "Verfügbar"],
  ["Immobiliardarlehen", "Sachkundeprüfung Darlehensvermittlung", "Darlehensarten, Finanzierung und Verbraucherschutz im Blick.", "7 Kapitel · 500+ Fragen", "Verfügbar"],
] as const;

const features = [
  ["Verständliche Erklärungen", "Komplexe Themen einfach erklärt."],
  ["Prüfungssimulation", "Realistische Prüfungen unter echten Bedingungen."],
  ["Lernkarten", "Smarte Wiederholung für maximalen Lernerfolg."],
  ["Fortschritt verfolgen", "Deinen Lernstand im Blick und Ziele erreichen."],
  ["Mobil lernen", "Lerne jederzeit und überall auf allen Geräten."],
  ["Mehrsprachige Unterstützung", "In deiner Sprache lernen und verstehen."],
] as const;

const steps = [
  ["Zertifikat wählen", "Wähle das Zertifikat, das zu deinem Ziel passt, und erhalte deinen Lernplan."],
  ["Lernen & üben", "Lerne mit Erklärungen, Lernkarten und Übungsfragen gezielt für die Prüfung."],
  ["Prüfung bestehen", "Teste dein Wissen in realistischen Prüfungen und bestehe mit Sicherheit."],
] as const;

const testimonials = [
  ["Mehmet K.", "Dank FachkundePilot habe ich meine §34a Prüfung beim ersten Versuch bestanden. Die Lernkarten sind Gold wert."],
  ["Sarah L.", "Die Erklärungen sind super verständlich und die Prüfungssimulationen sehr realitätsnah. Klare Empfehlung!"],
  ["Ahmed A.", "Endlich eine Plattform, die alles an einem Ort bietet. Übersichtlich, effektiv und mehrsprachig – perfekt!"],
] as const;

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-[24px] border border-white/10 bg-[rgba(8,24,58,0.88)] shadow-[0_20px_60px_rgba(0,0,0,.35)] ${className}`}>{children}</section>;
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#07162F] text-[#F8FAFC]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(78,161,255,.28),transparent_32%),radial-gradient(circle_at_20%_40%,rgba(11,67,167,.18),transparent_40%)]" />
      <div className="mx-auto max-w-[1360px] px-6 pb-16 pt-4 lg:px-8">
        <nav className="mb-8 flex min-h-[80px] items-center justify-between rounded-[20px] border border-white/15 bg-[rgba(7,22,48,.82)] px-4 shadow-[0_10px_40px_rgba(0,0,0,.35)] md:px-7">
          <div className="flex items-center gap-3"><div className="h-11 w-11 rounded-xl border border-[#F4B73F]/50 bg-[#0A1B3F]" /><div><p className="text-2xl font-bold">FachkundePilot</p><p className="text-xs text-[#8EA0C0]">Prüfungsorientiertes Lernen</p></div></div>
          <div className="hidden gap-10 text-[#C7D2E5] lg:flex">{navItems.map((x) => <span key={x}>{x}</span>)}</div>
          <div className="flex items-center gap-3"><button className="hidden rounded-xl border border-white/15 px-4 py-2 md:block">DE</button><button className="rounded-xl bg-[#F4B73F] px-6 py-3 font-semibold text-[#07162F]">Jetzt starten</button></div>
        </nav>

        <section className="grid items-center gap-8 pb-8 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <p className="inline-flex rounded-full border border-[#4EA1FF]/45 bg-[rgba(10,27,63,.82)] px-4 py-2 text-sm">Die Lernplattform für offizielle Sach- und Fachkundeprüfungen</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] xl:text-7xl">Bestehe deine Prüfung.<br />Mit <span className="text-[#F4B73F]">Klarheit,<br />Struktur und System.</span></h1>
            <p className="mt-6 max-w-[620px] text-lg text-[#C7D2E5]">Verständliche Erklärungen in deiner Sprache, smarte Lernkarten, realistische Prüfungen und mobiles Lernen — alles an einem Ort.</p>
            <div className="mt-7 flex flex-wrap gap-3"><button className="rounded-xl bg-[#F4B73F] px-7 py-3 font-semibold text-[#07162F]">Jetzt starten</button><button className="rounded-xl border border-white/20 bg-[rgba(10,27,63,.82)] px-7 py-3">Alle Zertifikate ansehen</button></div>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">{heroTrustItems.map((i) => <div key={i} className="rounded-xl border border-white/10 bg-[rgba(10,27,63,.82)] px-3 py-2 text-sm">{i}</div>)}</div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1fr_220px]">
            <Panel className="p-4">
              <div className="rounded-xl border border-white/10 bg-[#091A3C] px-3 py-2 text-sm">FachkundePilot Dashboard</div>
              <div className="mt-3 grid gap-3 md:grid-cols-[140px_1fr]">
                <div className="rounded-xl border border-white/10 bg-[#091A3C] p-3 text-sm text-[#8EA0C0]">Übersicht<br/>Zertifikate<br/>Lernkarten<br/>Prüfungen<br/>Fortschritt<br/>Einstellungen</div>
                <div className="space-y-3">
                  <div><p className="font-semibold">Guten Abend, Ahmet 👋</p><p className="text-sm text-[#8EA0C0]">Weiter so! Du bist auf dem besten Weg.</p></div>
                  <div className="grid gap-3 md:grid-cols-2"><div className="rounded-xl border border-white/10 bg-[#091A3C] p-3"><p className="text-sm">Dein Gesamtfortschritt</p><p className="text-4xl font-bold">78%</p><div className="mt-2 h-2 rounded-full bg-black/30"><div className="h-full w-[78%] rounded-full bg-[#4EA1FF]" /></div></div><div className="rounded-xl border border-white/10 bg-[#091A3C] p-3"><p className="text-sm">Lernzeit diese Woche</p><p className="text-3xl font-bold">12 h 45 min</p><p className="text-xs text-[#3DDC97]">+2 h 15 min gegenüber gestern</p></div></div>
                  <div className="grid gap-3 md:grid-cols-2"><div className="rounded-xl border border-white/10 bg-[#091A3C] p-3 text-sm">Aktive Zertifikate<div className="mt-2 space-y-2 text-xs"><p>Taxi & Mietwagen</p><p>§34a Bewachung</p><p>Güterkraftverkehr</p></div></div><div className="rounded-xl border border-white/10 bg-[#091A3C] p-3 text-sm">Heute empfohlen<p className="mt-2">20 Min. Lernkarten: Recht & Kostenrechnung</p><button className="mt-3 rounded-lg bg-[#2a6ad9] px-3 py-1.5 text-xs">Weiterlernen</button></div></div>
                </div>
              </div>
            </Panel>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">{heroStats.map((s) => <Panel key={s.title} className="p-4"><p className="text-xl font-bold">{s.title}</p><p className="text-sm text-[#C7D2E5]">{s.value}</p></Panel>)}</div>
          </div>
        </section>

        <Panel className="mb-7 px-5 py-4"><div className="grid gap-2 md:grid-cols-4">{trustStripItems.map((x, i) => <div key={x} className={`text-sm ${i < 3 ? "md:border-r md:border-white/15" : ""}`}>{x}</div>)}</div></Panel>

        <Panel className="mb-7 p-5 md:p-7"><div className="mb-6 flex items-end justify-between"><div><h2 className="text-4xl font-bold">Zertifikate entdecken</h2><p className="text-[#C7D2E5]">Wähle dein Ziel und starte mit einer klaren Prüfungsvorbereitung.</p></div><span className="text-[#4EA1FF]">Alle Zertifikate ansehen →</span></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{certificates.map(([t,s,d,st,b]) => <article key={t} className="rounded-[20px] border border-white/10 bg-[rgba(10,27,63,.82)] p-5"><div className="mb-3 flex justify-between"><div className="h-11 w-11 rounded-xl bg-[#15366b]" /><span className="rounded-full border border-white/20 px-2 py-1 text-xs">{b}</span></div><h3 className="text-3xl font-semibold leading-tight">{t}</h3><p className="mt-1 text-sm text-[#C7D2E5]">{s}</p><p className="mt-2 text-sm text-[#8EA0C0]">{d}</p><p className="mt-3 text-sm">{st}</p><button className="mt-2 text-[#4EA1FF]">Mehr erfahren →</button></article>)}</div></Panel>

        <Panel className="mb-7 p-4"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">{features.map(([t,tx]) => <div key={t} className="rounded-xl border border-white/10 p-3"><p className="font-semibold">{t}</p><p className="text-sm text-[#8EA0C0]">{tx}</p></div>)}</div></Panel>

        <div className="mb-7 grid gap-6 xl:grid-cols-2">
          <Panel className="p-6"><h3 className="text-5xl font-bold">So funktioniert’s</h3><div className="mt-5 space-y-3">{steps.map(([t,d],i)=><div className="rounded-xl border border-white/10 p-3" key={t}><p className="font-semibold">{i+1}. {t}</p><p className="text-sm text-[#C7D2E5]">{d}</p></div>)}</div></Panel>
          <Panel className="p-6"><h3 className="text-5xl font-bold">Das sagen unsere Teilnehmenden</h3><div className="mt-5 grid gap-3">{testimonials.map(([n,q])=><div key={n} className="rounded-xl border border-white/10 p-3"><p className="font-semibold">{n}</p><p className="text-[#F4B73F]">★★★★★</p><p className="text-sm text-[#C7D2E5]">“{q}”</p></div>)}</div></Panel>
        </div>

        <Panel className="border-[#F4B73F]/35 p-6"><div className="grid gap-4 xl:grid-cols-[1.2fr_.7fr_350px]"><div><p className="inline-flex rounded-full border border-[#F4B73F]/50 px-3 py-1 text-sm">Dein Erfolg beginnt jetzt</p><h3 className="mt-3 text-5xl font-bold">Starte heute mit deiner Prüfungsvorbereitung.</h3><p className="mt-3 text-[#C7D2E5]">Lerne mit klaren Lernpfaden, smarten Lernkarten und realistischen Prüfungen — für deinen sicheren Erfolg.</p><ul className="mt-4 space-y-2 text-[#C7D2E5]"><li>Zugriff auf alle Kurse & Zertifikate</li><li>Prüfungssimulationen & Lernkarten</li><li>Mehrsprachige Inhalte</li><li>Lernen auf allen Geräten</li><li>DSGVO-konform & sicher</li></ul></div><div className="space-y-3"><div className="rounded-xl border border-white/15 p-3">14 Tage Geld-zurück-Garantie</div><div className="rounded-xl border border-white/15 p-3">Jederzeit kündbar</div><div className="rounded-xl border border-white/15 p-3">Sofortiger Zugriff nach Registrierung</div></div><div className="rounded-[20px] border border-[#F4B73F]/35 bg-[#F8F3E8] p-5 text-[#08142B]"><p className="inline-flex rounded-full bg-[#F4B73F] px-3 py-1 font-semibold">Premium</p><p className="mt-3 font-semibold">Alles inklusive für deinen Prüfungserfolg</p><p className="mt-3 text-5xl font-bold">Ab 9,90 € <span className="text-lg">/ Monat</span></p><p>Monatlich kündbar</p><button className="mt-4 w-full rounded-xl bg-[#F4B73F] px-4 py-3 font-semibold">Jetzt starten →</button><p className="mt-2 text-center text-sm">7 Tage kostenlos testen</p></div></div></Panel>
      </div>

      <footer className="border-t border-white/10 bg-[#071630]"><div className="mx-auto grid max-w-[1360px] gap-7 px-6 py-10 text-[#C7D2E5] md:grid-cols-5 lg:px-8"><div><p className="text-2xl font-bold text-white">FachkundePilot</p><p className="mt-2 text-sm">Prüfungsorientiertes Lernen für deutsche Sach- und Fachkundeprüfungen.</p></div><div><p className="font-semibold text-white">Produkt</p><p>Zertifikate</p><p>So funktioniert’s</p><p>Preise</p><p>Erfolgsgeschichten</p></div><div><p className="font-semibold text-white">Unternehmen</p><p>Über uns</p><p>Karriere</p><p>Kontakt</p></div><div><p className="font-semibold text-white">Rechtliches</p><p>Datenschutz</p><p>Impressum</p><p>AGB</p></div><div><p className="font-semibold text-white">Folge uns</p><p>Facebook</p><p>Instagram</p><p>YouTube</p><p>LinkedIn</p></div></div><p className="pb-7 text-center text-sm text-[#8EA0C0]">© 2026 FachkundePilot. Alle Rechte vorbehalten.</p></footer>
    </div>
  );
}
