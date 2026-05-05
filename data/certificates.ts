export type Certificate = {
  id: string;
  icon: string;
  title: string;
  category: string;
  benefit: string;
  available: boolean;
  languages: string[];
  stats: {
    chapters: number;
    cards: number;
    exams: number;
  };
};

export const popularCertificates: Certificate[] = [
  {
    id: "taxi",
    icon: "🚕",
    title: "Taxi & Mietwagen",
    category: "Kommunale Fachkunde",
    benefit: "Sicher durch Tarif-, Orts- und Unternehmerwissen für die lokale Prüfung.",
    available: true,
    languages: ["DE", "AR", "EN", "TR"],
    stats: { chapters: 12, cards: 240, exams: 8 },
  },
  {
    id: "34a",
    icon: "🛡️",
    title: "§34a Bewachungsgewerbe",
    category: "IHK Sachkunde",
    benefit: "Verstehe Recht, Deeskalation und Praxisfälle mit präziser Auswertung.",
    available: true,
    languages: ["DE", "AR", "EN"],
    stats: { chapters: 14, cards: 310, exams: 10 },
  },
  {
    id: "gueter",
    icon: "🚛",
    title: "Güterkraftverkehr",
    category: "Verkehrsleiter",
    benefit: "Lerne Kostenrechnung, Disposition und EU-Regeln strukturiert auf Deutsch.",
    available: true,
    languages: ["DE", "AR", "TR"],
    stats: { chapters: 16, cards: 360, exams: 12 },
  },
  {
    id: "omnibus",
    icon: "🚌",
    title: "Omnibusverkehr",
    category: "Personenverkehr",
    benefit: "Bereite dich auf Linien-, Gelegenheits- und Sicherheitsfragen gezielt vor.",
    available: false,
    languages: ["DE", "EN", "TR"],
    stats: { chapters: 11, cards: 210, exams: 6 },
  },
  {
    id: "34d",
    icon: "📑",
    title: "Versicherung §34d",
    category: "Vermittlererlaubnis",
    benefit: "Trainiere Beratungslogik, Haftung und Produktgrundlagen prüfungsnah.",
    available: false,
    languages: ["DE", "AR", "EN"],
    stats: { chapters: 15, cards: 290, exams: 9 },
  },
  {
    id: "34f",
    icon: "📈",
    title: "Finanzanlagen §34f",
    category: "Beratung & Vertrieb",
    benefit: "Verstehe Produkte, Risikoaufklärung und Regulatorik für die IHK-Prüfung.",
    available: false,
    languages: ["DE", "EN"],
    stats: { chapters: 13, cards: 260, exams: 7 },
  },
  {
    id: "34i",
    icon: "🏠",
    title: "Immobiliardarlehen §34i",
    category: "Kreditvermittlung",
    benefit: "Von Darlehensarten bis Verbraucherschutz – klar erklärt und wiederholbar.",
    available: false,
    languages: ["DE", "AR", "TR"],
    stats: { chapters: 12, cards: 230, exams: 7 },
  },
  {
    id: "adr",
    icon: "⚠️",
    title: "Gefahrgut / ADR",
    category: "Sichere Beförderung",
    benefit: "Lerne Kennzeichnung, Dokumente und Notfallmaßnahmen praxisorientiert.",
    available: false,
    languages: ["DE", "EN", "TR"],
    stats: { chapters: 10, cards: 190, exams: 6 },
  },
];
