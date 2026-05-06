import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://fachkundepilot.de';
  const routes = ['','/zertifikate','/zertifikate/taxi-mietwagen','/methode','/preise','/faq','/kontakt'];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: 'weekly', priority: route === '' ? 1 : 0.8 }));
}
