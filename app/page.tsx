const navItems = ["Zertifikate", "So funktioniert’s", "Preise", "Erfolgsgeschichten", "Kontakt"];

const trustItems = ["Offizieller Prüfungsstoff", "Tausende Übungsfragen", "Sicher & DSGVO-konform"];

const certificates = [
  { title: "Taxi & Mietwagen", subtitle: "Fachkundeprüfung nach PBefG", stats: "12 Kapitel · 850+ Fragen", icon: "🚕" },
  { title: "§34a Bewachung", subtitle: "Sachkundeprüfung nach §34a GewO", stats: "9 Kapitel · 650+ Fragen", icon: "🛡️" },
  { title: "Güterkraftverkehr", subtitle: "Fachkundeprüfung Güterverkehr", stats: "10 Kapitel · 700+ Fragen", icon: "🚛" },
  { title: "Versicherung §34d", subtitle: "Sachkundeprüfung für Versicherungsvermittler", stats: "8 Kapitel · 600+ Fragen", icon: "☂️" },
  { title: "Finanzanlagen §34f", subtitle: "Sachkundeprüfung für Finanzanlagenvermittler", stats: "7 Kapitel · 550+ Fragen", icon: "📈" },
  { title: "Immobiliardarlehen", subtitle: "Sachkundeprüfung für Immobiliardarlehensvermittler", stats: "7 Kapitel · 500+ Fragen", icon: "🏢" },
];

const features = [
  ["📘", "Verständliche Erklärungen", "Komplexe Themen einfach und klar erklärt — in deiner Sprache."],
  ["🧪", "Prüfungssimulation", "Realistische Prüfungen unter echten Bedingungen trainieren."],
  ["🗂️", "Lernkarten", "Effektiv lernen mit smarten Karteikarten & Wiederholung."],
  ["📊", "Fortschritt verfolgen", "Behalte deinen Lernstand im Blick und bleibe motiviert."],
  ["📱", "Mobil lernen", "Lerne jederzeit und überall — Smartphone, Tablet und Desktop."],
  ["🌍", "Mehrsprachige Unterstützung", "Erklärungen in Deutsch, Arabisch, Englisch und Türkisch."],
] as const;

const testimonials = [
  ["Mehmet K.", "§34a Bewachung", "Dank FachkundePilot habe ich die §34a Prüfung beim ersten Versuch bestanden. Die Erklärungen sind einfach top!"],
  ["Sarah L.", "Versicherung §34d", "Die Lernkarten und Prüfungen haben mir enorm geholfen, alles stressfrei und strukturiert zu lernen."],
  ["Ahmed A.", "Taxi & Mietwagen", "Endlich eine Plattform, die komplexe Inhalte verständlich macht — und das in meiner Sprache."],
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020817] text-slate-50">
      <header className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(59,130,246,.25),transparent_42%),radial-gradient(circle_at_20%_85%,rgba(245,185,66,.16),transparent_40%),linear-gradient(to_bottom,rgba(255,255,255,.02),transparent)]" />
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-6 md:px-8 md:pb-28 md:pt-8">
          <nav className="mb-14 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 shadow-[0_10px_40px_rgba(2,8,23,.45)] backdrop-blur-xl md:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-300/25 bg-gradient-to-br from-[#0a1f47] to-[#3b82f6]/70 text-lg">🎓</div>
              <div>
                <p className="text-base font-semibold">FachkundePilot</p>
                <p className="text-xs text-slate-400">Verstehen. Lernen. Bestehen.</p>
              </div>
            </div>
            <div className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">{navItems.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="flex items-center gap-2">
              <button className="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 md:block">🌐 Deutsch</button>
              <button className="rounded-xl bg-gradient-to-r from-[#d6a12a] to-[#f5b942] px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_0_24px_rgba(245,185,66,.35)]">Jetzt starten</button>
            </div>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.04fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-white/5 px-4 py-2 text-sm text-slate-200">✨ Die Lernplattform für offizielle Sach- und Fachkundeprüfungen</p>
              <h1 className="text-5xl font-semibold leading-[1.05] md:text-6xl xl:text-7xl">
                Bestehe deine Prüfung.<br />Mit <span className="bg-gradient-to-r from-[#f5b942] to-[#facc6b] bg-clip-text text-transparent">Klarheit, Struktur</span><br />und System.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Verständliche Erklärungen in deiner Sprache, smarte Lernkarten, realistische Prüfungen und mobiles Lernen — alles an einem Ort.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-2xl bg-gradient-to-r from-[#d6a12a] to-[#f5b942] px-6 py-3.5 font-semibold text-slate-900">Jetzt starten →</button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200">Alle Zertifikate ansehen</button>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">✓ {item}</div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[30px] border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-900/70 p-5 shadow-[0_30px_80px_rgba(59,130,246,.28)] backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"><span>FachkundePilot</span><span>🔍 🔔 👤</span></div>
                <div className="grid gap-4 md:grid-cols-[150px_1fr]">
                  <aside className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-400">
                    {['Übersicht','Zertifikate','Lernkarten','Prüfungen','Fortschritt','Notizen','Einstellungen'].map((s, i) => <p key={s} className={i===0 ? 'mb-2 text-slate-100' : 'mb-2'}>{s}</p>)}
                  </aside>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xl font-semibold">Guten Abend, Ahmet 👋</p>
                      <p className="text-sm text-slate-400">Weiter so! Du bist auf dem besten Weg.</p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl border border-blue-300/20 bg-blue-500/10 p-4"><p className="text-sm text-slate-300">Dein Gesamtfortschritt</p><p className="mt-1 text-3xl font-semibold">78%</p><div className="mt-2 h-2 rounded-full bg-slate-800"><div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-400 to-blue-600" /></div><p className="mt-2 text-xs text-slate-400">Super! Nur noch 22% bis zum Ziel.</p></div>
                      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p className="text-sm text-slate-300">Lernzeit diese Woche</p><p className="mt-2 text-2xl font-semibold">12 h 45 min</p><p className="text-xs text-emerald-400">+18% vs. letzte Woche</p></div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300 space-y-2">
                      <p className="font-medium text-slate-100">Aktive Zertifikate</p>
                      {[['§34a Bewachung','82%'],['Güterkraftverkehr','65%'],['Versicherung §34d','74%']].map(([n,v]) => <div key={n}><div className='mb-1 flex justify-between text-xs'><span>{n}</span><span>{v}</span></div><div className='h-1.5 rounded-full bg-slate-800'><div className='h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-blue-500' style={{width:v}}/></div></div>)}
                    </div>
                    <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 p-4"><p className="text-sm text-slate-200">Heute empfohlen</p><p className="text-sm text-slate-300">20 Min. Lernkarten: Recht &amp; Kostenrechnung</p><button className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-xs">Weiterlernen</button></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 md:absolute md:-left-12 md:top-8 md:w-52 md:grid-cols-1">
                {[["🌍", "Mehrsprachig", "DE · AR · EN · TR"],["⭐", "4.9/5", "Nutzerbewertung"],["📈", "78%", "Dein Lernstand"],["📜", "12+", "Zertifikate verfügbar"]].map(([i,t,s]) => <div key={t} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-sm backdrop-blur"><p>{i} <span className='font-semibold'>{t}</span></p><p className='text-xs text-slate-400'>{s}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-5 pb-16 md:px-8">
        <section className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div><h2 className="text-3xl font-semibold md:text-4xl">Zertifikate entdecken</h2><p className="mt-2 text-slate-300">Wähle dein Ziel und starte mit einer klaren Prüfungsvorbereitung.</p></div>
            <button className="text-sm text-blue-300">Alle Zertifikate ansehen →</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{certificates.map((c) => <article key={c.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-[0_15px_35px_rgba(59,130,246,.25)]"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-2xl">{c.icon}</div><h3 className="text-xl font-semibold">{c.title}</h3><p className="mt-1 text-sm text-slate-300">{c.subtitle}</p><p className="mt-3 text-sm text-slate-400">{c.stats}</p><button className="mt-5 text-sm font-semibold text-blue-300">Mehr erfahren →</button></article>)}</div>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-white/5 p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">{features.map(([icon,title,text]) => <div key={title} className="border-white/10 px-3 xl:border-r xl:last:border-r-0"><p className="mb-2 text-xl">{icon}</p><p className="font-semibold">{title}</p><p className="mt-1 text-sm text-slate-400">{text}</p></div>)}</div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-white/10 bg-white/5 p-6"><h3 className="text-3xl font-semibold">So funktioniert’s</h3><div className="mt-6 grid gap-4 md:grid-cols-3">{[["Zertifikat wählen","Wähle dein Prüfungsziel aus über 12+ Zertifikaten."],["Lernen & üben","Lerne mit Erklärungen, Lernkarten und Übungen."],["Prüfung bestehen","Bestehe deine Prüfung mit Sicherheit und Selbstvertrauen."]].map(([t,d],index) => <div key={t} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"><div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-amber-400 text-sm font-bold text-slate-900">{index+1}</div><p className="font-semibold">{t}</p><p className="mt-1 text-sm text-slate-400">{d}</p></div>)}</div></article>
          <article className="rounded-[28px] border border-white/10 bg-white/5 p-6"><h3 className="text-3xl font-semibold">Das sagen unsere Teilnehmenden</h3><div className="mt-6 space-y-3">{testimonials.map(([name,cert,quote]) => <div key={name} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><div className="mb-2 flex items-center justify-between"><div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/30 text-xs">{name.split(' ').map((x)=>x[0]).join('')}</div><p className="font-semibold">{name}</p></div><span className="text-xs text-amber-300">★★★★★</span></div><p className="text-xs text-blue-300">{cert}</p><p className="mt-2 text-sm text-slate-300">“{quote}”</p></div>)}</div></article>
        </section>

        <section className="rounded-[30px] border border-amber-200/20 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-[#2b1f0f]/70 p-6 md:p-8">
          <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr_320px]">
            <div><p className="text-2xl font-semibold">🎓 Dein Erfolg beginnt jetzt.</p><p className="mt-2 text-slate-300">Starte noch heute und erhalte Zugriff auf klare Lernpfade, Lernkarten und Prüfungssimulationen.</p><ul className="mt-4 space-y-2 text-sm text-slate-300"><li>• Zugriff auf alle Kurse & Zertifikate</li><li>• Prüfungssimulationen & Lernkarten</li><li>• Mehrsprachige Inhalte</li><li>• Lernen auf allen Geräten</li><li>• DSGVO-konform & sicher</li></ul></div>
            <div className="space-y-3 text-sm"><div className="rounded-xl border border-white/10 bg-white/5 p-3">14 Tage Geld-zurück-Garantie</div><div className="rounded-xl border border-white/10 bg-white/5 p-3">Jederzeit kündbar</div><div className="rounded-xl border border-white/10 bg-white/5 p-3">Sofortiger Zugriff nach Registrierung</div></div>
            <div className="rounded-3xl bg-slate-50 p-5 text-slate-900"><p className="text-sm font-semibold text-slate-600">Premium</p><p className="mt-1 text-sm">Alles inklusive für deinen Prüfungserfolg</p><p className="mt-4 text-3xl font-bold">Ab 9,90 € <span className="text-sm font-medium">/ Monat</span></p><p className="text-xs text-slate-500">Monatlich kündbar</p><button className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-slate-100">Jetzt starten →</button><p className="mt-2 text-center text-xs text-slate-500">7 Tage kostenlos testen</p></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-slate-300 md:grid-cols-5 md:px-8">
          <div><p className="font-semibold text-white">FachkundePilot</p><p className="mt-2 text-xs text-slate-400">Prüfungsorientiertes Lernen für deutsche Sach- und Fachkundeprüfungen.</p></div>
          <div><p className="mb-2 text-white">Produkt</p><p>Zertifikate</p><p>So funktioniert’s</p><p>Preise</p></div>
          <div><p className="mb-2 text-white">Unternehmen</p><p>Über uns</p><p>Karriere</p><p>Kontakt</p></div>
          <div><p className="mb-2 text-white">Rechtliches</p><p>AGB</p><p>Datenschutz</p><p>Impressum</p></div>
          <div><p className="mb-2 text-white">Folge uns</p><p>◯ ◯ ◯</p></div>
        </div>
        <p className="pb-8 text-center text-xs text-slate-500">© 2026 FachkundePilot. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
