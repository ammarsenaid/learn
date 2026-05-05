import { Card, Section, Button } from "@/components/ui";
import { popularCertificates } from "@/data/certificates";

const languages = ["DE", "AR", "EN", "TR"];
const trustPoints = ["IHK-orientierte Struktur", "Mehrsprachige Erklärungen", "Prüfungssimulation", "Fortschritt messbar"];

export default function HomePage() {
  return (
    <main>
      <Section className="pb-2">
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

      <Section className="grid gap-8 pt-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="inline-block rounded-full bg-skysoft px-3 py-1 text-xs font-semibold">Für deutsche Sachkundeprüfungen</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Bestehe deine Fachkundeprüfung — mit deutscher Prüfungslogik und Erklärungen in deiner Sprache.
          </h1>
          <p className="text-navy/75">
            Lerne Taxi &amp; Mietwagen, §34a, Güterkraftverkehr, Versicherung und weitere deutsche
            Sachkundeprüfungen mit klaren Lernpfaden, Lernkarten und Prüfungssimulationen.
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

        <Card className="space-y-5">
          <div className="flex items-center justify-between border-b border-navy/10 pb-3">
            <p className="text-sm font-semibold text-navy/70">Lernübersicht</p>
            <div className="flex gap-1 rounded-lg bg-ivory p-1 text-[11px] font-semibold text-navy/75">
              {languages.map((lang) => (
                <span key={lang} className="rounded px-1.5 py-0.5">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-navy/70">Aktuelles Zertifikat</p>
            <p className="text-xl font-bold">Taxi &amp; Mietwagen</p>
          </div>
          <div>
            <div className="mb-1 flex items-end justify-between">
              <p className="text-sm text-navy/70">Prüfungsreife</p>
              <p className="text-2xl font-bold">82%</p>
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
          <div className="rounded-xl border border-navy/10 bg-white px-3 py-2 text-sm">
            <p className="text-navy/70">Lernzeit diese Woche</p>
            <p className="font-semibold">4h 20m</p>
          </div>
        </Card>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-bold">Beliebte Zertifikate</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {popularCertificates.map((item) => (
            <Card key={item.id} className="flex flex-col gap-3 p-5">
              <div className="flex items-start justify-between">
                <p className="text-2xl">{item.icon}</p>
                <span
                  className={`rounded-full px-2 py-1 text-[11px] font-semibold ${
                    item.available ? "bg-emerald-100 text-emerald-700" : "bg-skysoft text-navy/80"
                  }`}
                >
                  {item.available ? "Verfügbar" : "Bald verfügbar"}
                </span>
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs text-navy/60">{item.category}</p>
              </div>
              <p className="text-sm text-navy/75">{item.benefit}</p>
              <div className="flex flex-wrap gap-1">
                {item.languages.map((lang) => (
                  <span key={lang} className="rounded-full border border-navy/15 px-2 py-1 text-[11px] font-medium">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-navy/70">
                <p className="rounded-lg bg-ivory px-2 py-1">{item.stats.chapters} Kapitel</p>
                <p className="rounded-lg bg-ivory px-2 py-1">{item.stats.cards} Karten</p>
                <p className="rounded-lg bg-ivory px-2 py-1">{item.stats.exams} Prüfungen</p>
              </div>
              <button className="mt-auto text-left text-sm font-semibold text-navy underline underline-offset-4">Kurs ansehen</button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="mb-3 font-semibold">Warum FachkundePilot?</h3>
          <ul className="space-y-2 text-sm text-navy/75">
            <li>• Deutsch bleibt Prüfungssprache</li>
            <li>• Erklärungen in deiner Sprache</li>
            <li>• Lernkarten mit Wiederholung</li>
            <li>• Prüfungssimulation mit Auswertung</li>
          </ul>
        </Card>
        <Card>
          <h3 className="mb-3 font-semibold">So funktioniert&apos;s</h3>
          <ol className="space-y-2 text-sm text-navy/75">
            <li>1. Zertifikat wählen</li>
            <li>2. Deutsch verstehen</li>
            <li>3. Mit Lernkarten trainieren</li>
            <li>4. Prüfung simulieren</li>
            <li>5. Bestehen</li>
          </ol>
        </Card>
        <Card>
          <h3 className="mb-3 font-semibold">Preise</h3>
          <ul className="space-y-2 text-sm text-navy/75">
            <li>• Kostenlos starten</li>
            <li>• Premium ab 19,90 €/Monat</li>
            <li>• Alle Zertifikate später möglich</li>
          </ul>
          <button className="mt-4 text-sm font-semibold text-navy underline underline-offset-4">Jetzt starten</button>
        </Card>
      </Section>

      <Section>
        <Card className="bg-navy text-white">
          <h3 className="text-2xl font-bold">Starte heute mit deinem ersten Zertifikat.</h3>
          <p className="mt-2 text-white/80">Von den Grundlagen bis zur Prüfungssimulation — alles in einer klaren Lernstruktur.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button>Kostenlos starten</Button>
            <Button variant="secondary">Alle Zertifikate ansehen</Button>
          </div>
        </Card>
      </Section>

      <footer className="mx-auto grid w-full max-w-6xl gap-4 border-t border-navy/10 px-5 py-10 text-sm text-navy/70 md:grid-cols-3 md:px-8">
        <p className="font-semibold text-navy">FachkundePilot</p>
        <div className="flex flex-wrap gap-4">
          <span>Zertifikate</span>
          <span>Preise</span>
          <span>Datenschutz</span>
          <span>Impressum</span>
        </div>
        <p className="md:text-right">© 2026 FachkundePilot</p>
      </footer>
    </main>
  );
}
