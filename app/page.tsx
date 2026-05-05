import { Card, Section, Button } from "@/components/ui";
import { popularCertificates } from "@/data/certificates";

const languages = ["DE", "AR", "EN", "TR"];
const trustPoints = ["IHK-orientierte Struktur", "Mehrsprachige Erklärungen", "Prüfungssimulation", "Fortschritt messbar"];

export default function HomePage() {
  return (
    <main>
      <Section className="pb-6 pt-10 md:pb-8 md:pt-12">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-navy/10 bg-white px-5 py-4 shadow-premium md:px-8 md:py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-xl text-white">🛡️</div>
            <div>
              <p className="text-xl font-bold tracking-tight">FachkundePilot</p>
              <p className="text-sm text-navy/60">Prüfungsorientiertes Lernen</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-[15px] font-medium text-navy/80 md:flex">
            <span>Zertifikate</span>
            <span>So funktioniert&apos;s</span>
            <span>Preise</span>
            <span>Login</span>
          </div>

          <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
            <div className="flex items-center gap-1 rounded-xl border border-navy/10 bg-ivory p-1.5 text-xs font-semibold text-navy/75">
              {languages.map((lang) => (
                <span key={lang} className="rounded-lg px-2.5 py-1 hover:bg-white">
                  {lang}
                </span>
              ))}
            </div>
            <Button>Jetzt starten</Button>
          </div>
        </nav>
      </Section>

      <Section className="grid gap-10 pb-20 pt-8 md:min-h-[700px] md:grid-cols-2 md:items-center lg:gap-14">
        <div className="space-y-8">
          <p className="inline-block rounded-full bg-skysoft px-4 py-1.5 text-sm font-semibold">Für deutsche Sachkundeprüfungen</p>
          <h1 className="max-w-xl text-[2.5rem] font-bold leading-[1.12] md:text-[3.3rem]">
            Bestehe deine Fachkundeprüfung — mit deutscher Prüfungslogik und Erklärungen in deiner Sprache.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-navy/75">
            Lerne Taxi &amp; Mietwagen, §34a, Güterkraftverkehr, Versicherung und weitere deutsche Sachkundeprüfungen
            mit klaren Lernpfaden, Lernkarten und Prüfungssimulationen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Kostenlos starten</Button>
            <Button variant="secondary">Alle Zertifikate ansehen</Button>
          </div>
          <div className="grid gap-3 text-sm text-navy/80 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <p key={point} className="rounded-xl border border-navy/10 bg-white px-4 py-3">
                ✓ {point}
              </p>
            ))}
          </div>
        </div>

        <Card className="space-y-5 self-start p-6 md:mt-2 md:p-8 md:shadow-[0_20px_45px_rgba(15,29,58,0.16)]">
          <div className="flex items-center justify-between rounded-2xl border border-navy/10 bg-ivory px-4 py-3">
            <p className="text-base font-semibold text-navy">FachkundePilot Dashboard</p>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy/70">Live Vorschau</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-4 md:grid-cols-[150px_1fr]">
            <div className="space-y-2 rounded-2xl bg-ivory p-4 text-sm text-navy/75">
              <p className="font-semibold text-navy">Übersicht</p>
              <p>Lernen</p>
              <p>Karten</p>
              <p>Prüfung</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-navy/70">Aktuelles Zertifikat</p>
                <p className="text-2xl font-bold">Taxi &amp; Mietwagen</p>
              </div>
              <div>
                <div className="mb-2 flex items-end justify-between gap-2">
                  <p className="text-sm text-navy/70">Prüfungsreife</p>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-skysoft px-2.5 py-1 text-xs font-semibold text-navy/75">Prüfungsziel: 90%</span>
                    <p className="text-2xl font-bold">82%</p>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-skysoft">
                  <div className="h-3 w-[82%] rounded-full bg-amber" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-ivory p-3">
                  <p className="text-navy/70">Nächste Lektion</p>
                  <p className="font-semibold">Tarif- und Ortskunde</p>
                </div>
                <div className="rounded-xl bg-ivory p-3">
                  <p className="text-navy/70">Fällige Lernkarten</p>
                  <p className="font-semibold">24 Karten</p>
                </div>
                <div className="rounded-xl bg-ivory p-3">
                  <p className="text-navy/70">Prüfungssimulation</p>
                  <p className="font-semibold">76 Punkte</p>
                </div>
                <div className="rounded-xl bg-ivory p-3">
                  <p className="text-navy/70">Schwache Themen</p>
                  <p className="font-semibold">Recht, Kostenrechnung</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-amber/30 bg-amber/10 px-4 py-3 text-sm">
            <p className="text-navy/70">Heute empfohlen</p>
            <p className="font-semibold">30 Minuten Lernkarten + 1 Kurzsimulation</p>
          </div>
        </Card>
      </Section>

      <Section className="pt-2">
        <div className="grid gap-3 rounded-3xl border border-navy/10 bg-white p-5 text-center shadow-premium sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          {["12+ Zertifikate geplant", "1 Plattform für alle Lernpfade", "DE / AR / EN / TR", "Prüfungssimulation & Lernkarten"].map((item) => (
            <p key={item} className="flex items-center justify-center gap-2 text-sm font-semibold lg:justify-start">
              <span className="text-navy/40">✦</span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-6 text-3xl font-bold">Beliebte Zertifikate</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {popularCertificates.map((item) => (
            <Card key={item.id} className="flex min-h-[360px] flex-col gap-5 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,29,58,0.2)]">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ivory text-2xl">{item.icon}</div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    item.available ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-skysoft bg-skysoft text-navy/80"
                  }`}
                >
                  {item.available ? "Verfügbar" : "Bald verfügbar"}
                </span>
              </div>
              <div className="space-y-1.5">
                <p className="text-lg font-semibold leading-snug">{item.title}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-navy/55">{item.category}</p>
              </div>
              <p className="text-[15px] leading-relaxed text-navy/75">{item.benefit}</p>
              <div className="flex flex-wrap gap-2">
                {item.languages.map((lang) => (
                  <span key={lang} className="rounded-full border border-navy/15 px-2.5 py-1 text-xs font-medium">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2.5 text-xs text-navy/75">
                <p className="rounded-lg bg-ivory px-2 py-2 text-center">{item.stats.chapters} Kapitel</p>
                <p className="rounded-lg bg-ivory px-2 py-2 text-center">{item.stats.cards} Karten</p>
                <p className="rounded-lg bg-ivory px-2 py-2 text-center">{item.stats.exams} Prüfungen</p>
              </div>
              <button className="mt-auto inline-flex items-center gap-1 text-left text-sm font-semibold text-navy underline-offset-4 hover:underline">
                Kurs ansehen <span aria-hidden>→</span>
              </button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="grid gap-5 md:grid-cols-3">
        <Card className="md:col-span-2">
          <h3 className="mb-5 text-2xl font-bold">Warum FachkundePilot?</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["🧭", "Strukturiert lernen", "Klare Lernpfade von Grundlagen bis Prüfung."],
              ["🌍", "Mehrsprachige Hilfe", "Fachbegriffe verständlich in deiner Sprache erklärt."],
              ["🧠", "Aktives Wiederholen", "Lernkarten mit intelligenten Wiederholungsintervallen."],
              ["📊", "Messbarer Fortschritt", "Simulationen und Auswertung für echte Prüfungsreife."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-navy/10 bg-ivory p-5">
                <p className="mb-2 text-2xl">{icon}</p>
                <p className="mb-1 font-semibold">{title}</p>
                <p className="text-sm leading-relaxed text-navy/75">{text}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col">
          <h3 className="mb-4 text-2xl font-bold">Preise</h3>
          <div className="rounded-2xl border border-navy/10 bg-ivory p-5">
            <p className="text-sm text-navy/70">Ab</p>
            <p className="text-3xl font-bold">19,90 €<span className="text-sm font-medium text-navy/70"> / Monat</span></p>
            <ul className="mt-4 space-y-2.5 text-sm text-navy/75">
              <li>✓ Kostenlos starten</li>
              <li>✓ Monatlich kündbar</li>
              <li>✓ Weitere Zertifikate folgen</li>
            </ul>
          </div>
          <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy underline-offset-4 hover:underline">
            Jetzt starten <span aria-hidden>→</span>
          </button>
        </Card>
      </Section>

      <Section>
        <Card>
          <h3 className="mb-5 text-2xl font-bold">So funktioniert&apos;s</h3>
          <ol className="grid gap-3 md:grid-cols-5">
            {["Zertifikat wählen", "Lernpfad starten", "Mit Karten vertiefen", "Prüfung simulieren", "Sicher bestehen"].map((step, index) => (
              <li key={step} className="relative rounded-2xl bg-ivory p-5 text-sm text-navy/80">
                <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">{index + 1}</span>
                <p className="font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      <Section className="pt-4">
        <Card className="bg-navy px-7 py-8 text-white md:px-10 md:py-10">
          <h3 className="text-3xl font-bold leading-tight">Bereit für deine nächste Fachkundeprüfung?</h3>
          <p className="mt-3 max-w-4xl text-lg text-white/85">
            Starte kostenlos, wähle dein Zertifikat und lerne mit klaren deutschen Prüfungsbegriffen, mehrsprachigen
            Erklärungen und realistischen Prüfungssimulationen.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5 text-sm text-white/85">
            <span className="rounded-full border border-white/20 px-3 py-1.5">Keine Kreditkarte nötig</span>
            <span className="rounded-full border border-white/20 px-3 py-1.5">Jederzeit kündbar</span>
            <span className="rounded-full border border-white/20 px-3 py-1.5">DE / AR / EN / TR</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button>Kostenlos starten</Button>
            <Button variant="secondary">Alle Zertifikate ansehen</Button>
          </div>
        </Card>
      </Section>

      <footer className="mx-auto grid w-full max-w-[1240px] gap-6 border-t border-navy/10 px-5 py-12 text-sm text-navy/70 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-semibold text-navy">FachkundePilot</p>
          <p className="mt-2 max-w-xs text-xs text-navy/60">Deine Plattform für strukturierte Vorbereitung auf deutsche Sachkundeprüfungen.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <span>Zertifikate</span>
          <span>So funktioniert&apos;s</span>
          <span>Preise</span>
          <span>Login</span>
          <span>Datenschutz</span>
          <span>Impressum</span>
        </div>
        <p className="md:text-right">© 2026 FachkundePilot</p>
      </footer>
    </main>
  );
}
