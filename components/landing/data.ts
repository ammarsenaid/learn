export const navItems = [
  { label: "Zertifikate", href: "#zertifikate" },
  { label: "Methode", href: "#lernmethode" },
  { label: "Plattform", href: "#plattform" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const heroTrustItems = [
  "Deutsch bleibt Prüfungssprache",
  "Erklärungen in AR / EN / TR",
  "Prüfung realistisch trainieren",
] as const;

export const dashboardMetrics = [
  { label: "Prüfungsreife", value: "82%", progress: "82%", tone: "blue" },
  { label: "Lernzeit", value: "12h 45m", progress: "64%", tone: "green" },
  { label: "Karten fällig", value: "24", progress: "42%", tone: "gold" },
] as const;

export const trustStats = [
  {
    icon: "DE",
    title: "Mehrsprachig",
    value: "DE · AR · EN · TR",
    text: "Deutsch bleibt Prüfungssprache — deine Sprache hilft beim Verstehen.",
  },
  {
    icon: "SIM",
    title: "Simulation",
    value: "Realistisch",
    text: "Trainiere mit Zeitdruck, Punkten und Themenanalyse.",
  },
  {
    icon: "AI",
    title: "Smart Review",
    value: "Gezielt",
    text: "Schwache Themen werden sichtbar und automatisch wiederholt.",
  },
  {
    icon: "CMS",
    title: "Admin-ready",
    value: "CMS-Logik",
    text: "Inhalte, Karten, Fragen und Zertifikate später sauber pflegen.",
  },
] as const;

export const learningModes = [
  {
    icon: "01",
    title: "Lesemodus",
    text: "Lerne offizielle Begriffe strukturiert, ohne dich in PDFs zu verlieren.",
  },
  {
    icon: "02",
    title: "Kartenmodus",
    text: "Wiederhole prüfungsrelevante Regeln, Definitionen und Falllogik.",
  },
  {
    icon: "03",
    title: "Rechenmodus",
    text: "Trainiere Kostenrechnung, Prozentrechnung und typische Prüfungsaufgaben.",
  },
  {
    icon: "04",
    title: "Prüfungsmodus",
    text: "Simuliere echte Prüfungssituationen mit Zeit, Punkten und Auswertung.",
  },
] as const;

export const certificates = [
  {
    icon: "TM",
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
    icon: "34A",
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
    icon: "GV",
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
    icon: "34D",
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
    icon: "34F",
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
    icon: "IM",
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

export const learnerPersonas = [
  {
    icon: "01",
    title: "Berufsumsteiger",
    text: "Brauchen klare Struktur, einfache Sprache und schnelle Orientierung.",
  },
  {
    icon: "02",
    title: "Mehrsprachige Lernende",
    text: "Müssen deutsche Begriffe behalten, aber in der eigenen Sprache verstehen.",
  },
  {
    icon: "03",
    title: "Schulen & Anbieter",
    text: "Brauchen Inhalte, Nutzerverwaltung, Fortschritt und skalierbare Lernpfade.",
  },
] as const;

export const curriculumFlow = [
  { step: "01", title: "Zertifikat", text: "Taxi, §34a, Güterverkehr oder weitere Prüfungen." },
  { step: "02", title: "Kapitel", text: "Offizielle Themenbereiche sauber strukturiert." },
  { step: "03", title: "Lektionen", text: "Lerninhalte mit Beispielen und Mehrsprachigkeit." },
  { step: "04", title: "Lernkarten", text: "Wiederholung für Begriffe, Regeln und Formeln." },
  { step: "05", title: "Fragen", text: "Prüfungsnahe Aufgaben mit Erklärung." },
  { step: "06", title: "Simulation", text: "Realistischer Test mit Punkten und Zeitdruck." },
] as const;

export const languageExamples = [
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

export const intelligenceItems = [
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

export const seoPages = [
  {
    title: "Zertifikat-Seiten",
    text: "Jede Prüfung bekommt eine eigene indexierbare Seite mit Struktur, FAQ und Lernpfad.",
  },
  {
    title: "Kapitel-Seiten",
    text: "Themen wie Recht, Betrieb, Kostenrechnung oder Vorschriften können eigene SEO-Seiten werden.",
  },
  {
    title: "Glossar-Seiten",
    text: "Deutsche Fachbegriffe können einzeln erklärt und langfristig über Google gefunden werden.",
  },
  {
    title: "Fragen-Seiten",
    text: "Prüfungsnahe Fragen können später als Lern- und Suchseiten funktionieren.",
  },
] as const;

export const platformRoles = [
  {
    icon: "USER",
    title: "Lernende",
    text: "Lernen, Karten üben, Prüfungen simulieren, Fortschritt sehen.",
  },
  {
    icon: "EDU",
    title: "Dozenten",
    text: "Kapitel, Fragen, Erklärungen und Lernlogik kuratieren.",
  },
  {
    icon: "ADM",
    title: "Admin",
    text: "Zertifikate, Sprachen, Inhalte, Nutzer und Veröffentlichungen verwalten.",
  },
] as const;

export const adminPreview = [
  { label: "Zertifikate", value: "12", progress: "88%" },
  { label: "Lektionen", value: "248", progress: "72%" },
  { label: "Fragen", value: "4.2k", progress: "64%" },
  { label: "Sprachen", value: "4", progress: "96%" },
] as const;

export const learningSteps = [
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

export const learningTimeline = [
  { day: "Tag 1–3", title: "Grundlagen verstehen", progress: "28%" },
  { day: "Tag 4–10", title: "Karten & Fragen trainieren", progress: "52%" },
  { day: "Tag 11–18", title: "Schwächen schließen", progress: "74%" },
  { day: "Tag 19+", title: "Prüfung simulieren", progress: "92%" },
] as const;

export const examOptions = [
  { label: "Kfz-Haftpflichtversicherung", state: "correct" },
  { label: "Gesetzliche Unfallversicherung", state: "wrong" },
  { label: "Betriebshaftpflicht des Unternehmers", state: "wrong" },
] as const;

export const comparisonRows = [
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

export const conversionReasons = [
  {
    title: "Für Lernende",
    text: "Weniger Chaos, mehr Sicherheit, bessere Wiederholung.",
  },
  {
    title: "Für Betreiber",
    text: "Inhalte skalieren über Zertifikate, Sprachen und Rollen.",
  },
  {
    title: "Für SEO",
    text: "Jede Prüfung, jedes Kapitel und jede Frage kann später indexierbar werden.",
  },
] as const;

export const pricingPlans = [
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

export const testimonials = [
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

export const faqItems = [
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

export const footerGroups = [
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
