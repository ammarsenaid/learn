import { certificates as fallbackCertificates, type Certificate } from '@/lib/fachkunde-data';
import { directusFetch } from '@/lib/directus';

type DirectusCertificate = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  status: string;
  level: string;
  languages_text: string;
  progress: number;
};

function mapDirectusCertificate(item: DirectusCertificate): Certificate {
  return {
    slug: item.slug,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    badge: item.badge,
    status: item.status,
    level: item.level,
    languages: item.languages_text.split(/\s*[,/]\s*/).filter(Boolean),
    progress: item.progress,
    modules: [],
    href: `/zertifikate/${item.slug}`,
  };
}

export async function getCertificates(): Promise<Certificate[]> {
  try {
    const items = await directusFetch<DirectusCertificate[]>('/items/certificates?sort=position');
    if (!items || items.length === 0) {
      return fallbackCertificates;
    }

    return items.map(mapDirectusCertificate);
  } catch (error) {
    console.error('Failed to fetch certificates from Directus:', error);
    return fallbackCertificates;
  }
}
