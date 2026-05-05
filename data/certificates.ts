export type Certificate = {
  id: string;
  title: string;
  subtitle: string;
};

export const popularCertificates: Certificate[] = [
  { id: "taxi", title: "Taxi & Mietwagen Fachkunde", subtitle: "Kommunale Prüfung" },
  { id: "34a", title: "§34a Bewachungsgewerbe", subtitle: "IHK Sachkunde" },
  { id: "gueter", title: "Güterkraftverkehr Fachkunde", subtitle: "Verkehrsleiter" },
  { id: "omnibus", title: "Omnibusverkehr Fachkunde", subtitle: "Personenverkehr" },
  { id: "34d", title: "Versicherung §34d", subtitle: "Vermittlererlaubnis" },
  { id: "34f", title: "Finanzanlagen §34f", subtitle: "Beratung & Vertrieb" },
  { id: "34i", title: "Immobiliardarlehen §34i", subtitle: "Kreditvermittlung" },
  { id: "adr", title: "Gefahrgut / ADR", subtitle: "Sichere Beförderung" },
];
