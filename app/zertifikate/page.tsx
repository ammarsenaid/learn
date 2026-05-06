import type { Metadata } from 'next';
import { CertificateCard } from '@/components/site/CertificateCard';
import { PageShell } from '@/components/site/PageShell';
import { SectionHeader } from '@/components/site/SectionHeader';
import { certificates } from '@/lib/fachkunde-data';

export const metadata: Metadata = { title: 'Zertifikate | FachkundePilot', description: 'Überblick aller FachkundePilot Zertifikate.' };

export default function ZertifikatePage() {
  return <PageShell><main className="mx-auto max-w-6xl px-5 py-12"><SectionHeader title="Alle Zertifikate" subtitle="Wähle dein Zielzertifikat." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{certificates.map((c)=><CertificateCard key={c.slug} certificate={c} />)}</div></main></PageShell>;
}
