import { Card, Section, Button } from "@/components/ui";
import { popularCertificates } from "@/data/certificates";

const languages = ["DE", "AR", "EN", "TR"];
const trustPoints = ["IHK-orientierte Struktur", "Mehrsprachige Erklärungen", "Prüfungssimulation", "Fortschritt messbar"];

export default function HomePage() {
  return (
    <main>
      <Section className="pb-4 pt-8">
        <nav className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-navy/10 bg-white px-4 py-4 shadow-premium md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-lg text-white">🛡️</div>
            <div>
              <p className="text-lg font-bold tracking-tight">FachkundePilot</p>
              <p className="text-xs text-navy/60">Prüfungsorientiertes Lernen</p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-navy/80 md:flex">
            <span>Zertifikate</span>
            <span>So funktioniert&apos;s</span>
            <span>Preise</span>
            <span>Login</span>
          </div>

          <div className="flex w-full items-center justify-between gap-2 sm:w-auto">
            <div className="flex items-center gap-1 rounded-xl border border-navy/10 bg-ivory p-1 text-xs font-semibold text-navy/75">
              {languages.map((lang) => (
                <span key={lang} className="rounded-lg px-2 py-1 hover:bg-white">
                  {lang}
                </span>
              ))}
            </div>
            <Button>Jetzt starten</Button>
          </div>
        </nav>
      </Section>

      <Section className="grid gap-8 pb-14 pt-8 md:min-h-[620px] md:grid-cols-2 md:items-center lg:gap-10">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-skysoft px-3 py-1 text-xs font-semibold">Für deutsche Sachkundeprüfungen</p>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.15] md:text-[2.8rem]">
            Bestehe deine Fachkundeprüfung — mit deutscher Prüfungslogik und Erklärungen in deiner Sprache.
          </h1>
          <p className="max-w-xl text-navy/75">
            Lerne Taxi &amp; Mietwagen, §34a, Güterkraftverkehr, Versicherung und weitere deutsche Sachkundeprüfungen
            mit klaren Lernpfaden, Lernkarten und Prüfungssimulationen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Kostenlos starten</Button>
            <Button variant="secondary">Alle Zertifikate ansehen</Button>
          </div>
          <div className="grid gap-2 text-sm text-navy/75 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <p key={point} className="rounded-xl border border-navy/10 bg-white px-3 py-2">
                ✓ {point}
              </p>
            ))}
          </div>
        </div>

        <Card className="space-y-4 self-start p-5 md:mt-2 md:p-6">
          <div className="flex items-center justify-between rounded-xl border border-navy/10 bg-ivory px-3 py-2">
            <p className="text-sm font-semibold text-navy">FachkundePilot Dashboard</p>
            <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-navy/70">Live Vorschau</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-3">
            <div className="space-y-1.5 rounded-xl bg-ivory p-3 text-xs text-navy/75">
              <p className="font-semibold text-navy">Übersicht</p>
              <p>Lernen</p>
              <p>Karten</p>
              <p>Prüfung</p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-navy/70">Aktuelles Zertifikat</p>
                <p className="text-lg font-bold">Taxi &amp; Mietwagen</p>
              </div>
              <div>
                <div className="mb-1 flex items-end justify-between">
                  <p className="text-xs text-navy/70">Prüfungsreife</p>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-skysoft px-2 py-0.5 text-[10px] font-semibold text-navy/75">Prüfungsziel: 90%</span>
                    <p className="text-xl font-bold">82%</p>
                  </div>
                </div>
                <div className="h-2.5 rounded-full bg-skysoft">
                  <div className="h-2.5 w-[82%] rounded-full bg-amber" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-ivory p-2">
                  <p className="text-navy/70">Nächste Lektion</p>
                  <p className="font-semibold">Tarif- und Ortskunde</p>
                </div>
                <div className="rounded-lg bg-ivory p-2">
                  <p className="text-navy/70">Fällige Lernkarten</p>
                  <p className="font-semibold">24 Karten</p>
                </div>
                <div className="rounded-lg bg-ivory p-2">
                  <p className="text-navy/70">Prüfungssimulation</p>
                  <p className="font-semibold">76 Punkte</p>
                </div>
                <div className="rounded-lg bg-ivory p-2">
                  <p className="text-navy/70">Schwache Themen</p>
                  <p className="font-semibold">Recht, Kostenrechnung</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-amber/30 bg-amber/10 px-3 py-2 text-xs">
            <p className="text-navy/70">Heute empfohlen</p>
            <p className="font-semibold">30 Minuten Lernkarten + 1 Kurzsimulation</p>
          </div>
        </Card>
      </Section>

      <Section className="pt-2">
        <div className="grid gap-3 rounded-2xl border border-navy/10 bg-white p-4 text-center shadow-premium sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          <p className="text-sm font-semibold">12+ Zertifikate geplant</p>
          <p className="text-sm font-semibold">1 Plattform für alle Lernpfade</p>
          <p className="text-sm font-semibold">DE / AR / EN / TR</p>
          <p className="text-sm font-semibold">Prüfungssimulation &amp; Lernkarten</p>
        </div>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-bold">Beliebte Zertifikate</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {popularCertificates.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col gap-4 p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,29,58,0.18)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory text-xl">{item.icon}</div>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                    item.available ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-skysoft bg-skysoft text-navy/80"
                  }`}
                >
                  {item.available ? "Verfügbar" : "Bald verfügbar"}
                </span>
              </div>
              <div className="space-y-1">
                <p className="font-semibold leading-snug">{item.title}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-navy/55">{item.category}</p>
              </div>
              <p className="text-sm text-navy/75">{item.benefit}</p>
              <div className="flex flex-wrap gap-1">
                {item.languages.map((lang) => (
                  <span key={lang} className="rounded-full border border-navy/15 px-2 py-1 text-[11px] font-medium">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-navy/75">
                <p className="rounded-lg bg-ivory px-2 py-1.5 text-center">{item.stats.chapters} Kapitel</p>
                <p className="rounded-lg bg-ivory px-2 py-1.5 text-center">{item.stats.cards} Karten</p>
                <p className="rounded-lg bg-ivory px-2 py-1.5 text-center">{item.stats.exams} Prüfungen</p>
              </div>
              <button className="mt-auto inline-flex items-center gap-1 text-left text-sm font-semibold text-navy">
                Kurs ansehen <span aria-hidden>→</span>
              </button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <h3 className="mb-4 text-xl font-bold">Warum FachkundePilot?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["🧭", "Strukturiert lernen", "Klare Lernpfade von Grundlagen bis Prüfung."],
              ["🌍", "Mehrsprachige Hilfe", "Fachbegriffe verständlich in deiner Sprache erklärt."],
              ["🧠", "Aktives Wiederholen", "Lernkarten mit intelligenten Wiederholungsintervallen."],
              ["📊", "Messbarer Fortschritt", "Simulationen und Auswertung für echte Prüfungsreife."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-xl border border-navy/10 bg-ivory p-4">
                <p className="mb-2 text-lg">{icon}</p>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-navy/75">{text}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-bold">Preise</h3>
          <div className="rounded-xl border border-navy/10 bg-ivory p-4">
            <p className="text-sm text-navy/70">Ab</p>
            <p className="text-2xl font-bold">19,90 €<span className="text-sm font-medium text-navy/70"> / Monat</span></p>
            <ul className="mt-3 space-y-2 text-sm text-navy/75">
              <li>✓ Kostenlos starten</li>
              <li>✓ Monatlich kündbar</li>
              <li>✓ Weitere Zertifikate folgen</li>
            </ul>
          </div>
          <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
            Jetzt starten <span aria-hidden>→</span>
          </button>
        </Card>
      </Section>

      <Section>
        <Card>
          <h3 className="mb-4 text-xl font-bold">So funktioniert&apos;s</h3>
          <ol className="grid gap-3 md:grid-cols-5">
            {[
              "Zertifikat wählen",
              "Lernpfad starten",
              "Mit Karten vertiefen",
              "Prüfung simulieren",
              "Sicher bestehen",
            ].map((step, index) => (
              <li key={step} className="relative rounded-xl bg-ivory p-4 text-sm text-navy/80">
                <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      <Section>
        <Card className="bg-navy text-white">
          <h3 className="text-2xl font-bold">Bereit für deine nächste Prüfung?</h3>
          <p className="mt-2 max-w-3xl text-white/85">
            Starte kostenlos, wähle dein Zertifikat und lerne Schritt für Schritt mit deutscher Prüfungslogik und
            Erklärungen in deiner Sprache.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/80">
            <span className="rounded-full border border-white/20 px-3 py-1">Keine Kreditkarte nötig</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Jederzeit kündbar</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Mehrsprachig lernen</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button>Kostenlos starten</Button>
            <Button variant="secondary">Alle Zertifikate ansehen</Button>
          </div>
        </Card>
      </Section>

      <footer className="mx-auto grid w-full max-w-6xl gap-6 border-t border-navy/10 px-5 py-10 text-sm text-navy/70 md:grid-cols-3 md:px-8">
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
