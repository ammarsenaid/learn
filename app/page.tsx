import { Card, Section, Button } from "@/components/ui";
import { popularCertificates } from "@/data/certificates";

const languages = ["DE", "AR", "EN", "TR"];

export default function HomePage() {
  return (
    <main>
      <Section className="pb-2">
        <nav className="flex items-center justify-between rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-premium">
          <div className="text-xl font-bold tracking-tight">FachkundePilot</div>
          <div className="hidden gap-6 text-sm text-navy/80 md:flex"><span>Zertifikate</span><span>So funktioniert&apos;s</span><span>Preise</span></div>
          <Button>Jetzt starten</Button>
        </nav>
      </Section>

      <Section className="grid gap-6 pt-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="inline-block rounded-full bg-skysoft px-3 py-1 text-xs font-semibold">Deutsch lernen. Prüfung bestehen.</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Mehrsprachig zur deutschen Fachkundeprüfung.</h1>
          <p className="text-navy/75">Prüfungsfragen bleiben auf Deutsch. Erklärungen gibt es in Arabisch, Englisch und Türkisch — für echtes Verständnis statt Auswendiglernen.</p>
          <div className="flex gap-3"><Button>Kostenlos testen</Button><Button variant="secondary">Demo ansehen</Button></div>
          <div className="flex flex-wrap gap-2">{languages.map((lang) => <span key={lang} className="rounded-full border border-navy/15 px-3 py-1 text-xs font-medium">{lang}</span>)}</div>
          <div className="grid grid-cols-3 gap-2 text-xs text-navy/70"><p>✓ IHK-orientiert</p><p>✓ Mobile-ready</p><p>✓ Klare Lernpfade</p></div>
        </div>
        <Card>
          <p className="text-sm font-semibold">Aktuelles Zertifikat: Taxi und Mietwagen</p>
          <p className="mt-3 text-3xl font-bold">82% Prüfungsreife</p>
          <div className="mt-3 h-3 rounded-full bg-skysoft"><div className="h-3 w-[82%] rounded-full bg-amber" /></div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-ivory p-3"><p className="text-navy/70">Nächste Lektion</p><p className="font-semibold">Tarif- und Ortskunde</p></div>
            <div className="rounded-xl bg-ivory p-3"><p className="text-navy/70">Flashcards fällig</p><p className="font-semibold">24 Karten</p></div>
            <div className="rounded-xl bg-ivory p-3"><p className="text-navy/70">Mock-Exam</p><p className="font-semibold">76 Punkte</p></div>
            <div className="rounded-xl bg-ivory p-3"><p className="text-navy/70">Schwache Themen</p><p className="font-semibold">Recht, Mathe</p></div>
          </div>
          <div className="mt-4 flex gap-2 text-xs">{languages.map((lang) => <span key={lang} className="rounded-md bg-navy px-2 py-1 text-white">{lang}</span>)}</div>
        </Card>
      </Section>

      <Section>
        <h2 className="mb-4 text-2xl font-bold">Beliebte Zertifikate</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {popularCertificates.map((item) => (
            <Card key={item.id} className="space-y-2 p-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-navy/70">{item.subtitle}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="grid gap-4 md:grid-cols-3">
        {["Warum FachkundePilot", "So funktioniert es", "Preise"].map((title) => (
          <Card key={title}><h3 className="mb-2 font-semibold">{title}</h3><p className="text-sm text-navy/75">Premium Lernengine mit deutschen Originalbegriffen, mehrsprachigen Erklärungen und messbarem Fortschritt.</p></Card>
        ))}
      </Section>

      <Section>
        <Card className="bg-navy text-white">
          <h3 className="text-2xl font-bold">Starte heute mit deinem ersten Zertifikat.</h3>
          <p className="mt-2 text-white/80">Ein Konto, viele Prüfungen: von §34a bis ADR. Lernerfolg transparent und professionell.</p>
          <div className="mt-5"><Button>Jetzt kostenlos registrieren</Button></div>
        </Card>
      </Section>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-sm text-navy/60 md:px-8">© {new Date().getFullYear()} FachkundePilot · Made for German certification success</footer>
    </main>
  );
}
