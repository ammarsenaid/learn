export type Certificate = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  status: string;
  level: string;
  languages: string[];
  progress: number;
  modules: string[];
  href: string;
};

export const certificates: Certificate[] = [
  { slug:'taxi-mietwagen', title:'Taxi & Mietwagen', subtitle:'Fachkundeprüfung nach PBefG', description:'Tarif-, Orts-, Unternehmer- und Kostenwissen für die Personenbeförderung.', badge:'Start-Zertifikat', status:'Aktiv', level:'Mittel', languages:['DE','AR','EN','TR'], progress:82, modules:['Rechtliche Grundlagen','Tarif- und Ortskunde','Unternehmerpflichten','Kostenrechnung'], href:'/zertifikate/taxi-mietwagen' },
  { slug:'34a-bewachung', title:'§34a Bewachung', subtitle:'Sachkundeprüfung nach §34a GewO', description:'Recht, Deeskalation und Praxisfälle sicher verstehen und anwenden.', badge:'Beliebt', status:'Aktiv', level:'Einsteiger', languages:['DE','AR','EN'], progress:76, modules:['Öffentliches Recht','Umgang mit Menschen','Sicherheitsdienst-Praxis'], href:'/zertifikate/34a-bewachung' },
  { slug:'gueterkraftverkehr', title:'Güterkraftverkehr', subtitle:'Fachkundeprüfung Güterverkehr', description:'Kostenrechnung, Disposition, Transportrecht und EU-Regeln im Griff.', badge:'Verfügbar', status:'Aktiv', level:'Fortgeschritten', languages:['DE','EN','TR'], progress:68, modules:['Transportrecht','Disposition','Kostenrechnung'], href:'/zertifikate/gueterkraftverkehr' },
  { slug:'versicherung-34d', title:'Versicherung §34d', subtitle:'Sachkunde Versicherungsvermittlung', description:'Beratungslogik, Haftung, Produktgrundlagen und Regulatorik verstehen.', badge:'Geplant', status:'Bald', level:'Mittel', languages:['DE','AR','EN'], progress:54, modules:['Beratung','Produkte','Haftung'], href:'/zertifikate/versicherung-34d' },
  { slug:'finanzanlagen-34f', title:'Finanzanlagen §34f', subtitle:'Sachkunde Finanzanlagenvermittlung', description:'Produkte, Risikoaufklärung und regulatorische Pflichten sicher beherrschen.', badge:'Geplant', status:'Bald', level:'Fortgeschritten', languages:['DE','EN'], progress:49, modules:['Produktarten','Risikoprofile','Regulatorik'], href:'/zertifikate/finanzanlagen-34f' },
  { slug:'immobiliardarlehen', title:'Immobiliardarlehen', subtitle:'Sachkunde Darlehensvermittlung', description:'Darlehensarten, Finanzierung, Verbraucherschutz und Beratungslogik.', badge:'Geplant', status:'Bald', level:'Mittel', languages:['DE','AR','TR'], progress:46, modules:['Finanzierungsarten','Beratungsprozess','Verbraucherschutz'], href:'/zertifikate/immobiliardarlehen' },
];

export const methodSteps = [
  'Deutsch lesen',
  'In deiner Sprache verstehen',
  'Mit Lernkarten wiederholen',
  'Prüfung simulieren',
  'Schwächen gezielt nachlernen',
];

export const pricingPlans = [
  { name:'Kostenlos', price:'0 €', description:'Für den ersten Eindruck der Lernlogik.' },
  { name:'Einzelzertifikat', price:'9,90 € / Monat', description:'Für ein konkretes Prüfungsziel.' },
  { name:'Alle Zertifikate', price:'19,90 € / Monat', description:'Für Lernende mit mehreren Prüfungen.' },
  { name:'Akademie', price:'Individuell', description:'Für Schulen, Anbieter und Teams.' },
];

export const faqItems = [
  { question:'Ist FachkundePilot eine offizielle IHK- oder Behördenplattform?', answer:'Nein. FachkundePilot ist eine private Lernplattform.' },
  { question:'Bleibt die Prüfungssprache Deutsch?', answer:'Ja. Weitere Sprachen helfen beim Verstehen, aber die Prüfung bleibt Deutsch.' },
  { question:'Kann ich auf Arabisch lernen?', answer:'Ja. Erklärungen können mehrsprachig unterstützt werden.' },
  { question:'Kann ich mehrere Zertifikate lernen?', answer:'Ja. Die Plattform ist für mehrere Prüfungen ausgelegt.' },
];
