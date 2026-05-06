import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/site/PageShell';
import { certificates } from '@/lib/fachkunde-data';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const certificate = certificates.find((c) => c.slug === slug);
  return { title: certificate ? `${certificate.title} | FachkundePilot` : 'Zertifikat | FachkundePilot', description: certificate?.description ?? 'Zertifikatsdetailseite.' };
}

export default async function ZertifikatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const certificate = certificates.find((c) => c.slug === slug);
  if (!certificate) return notFound();

  const isTaxi = certificate.slug === 'taxi-mietwagen';
  return <PageShell><main className="mx-auto max-w-5xl space-y-8 px-5 py-12"><section className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-8"><p className="text-yellow-300">{certificate.badge}</p><h1 className="text-3xl font-black">{certificate.title}</h1><p className="mt-2 text-slate-300">{certificate.subtitle}</p></section>{isTaxi ? <><section className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-6"><h2 className="text-xl font-bold">Was die Prüfung abdeckt</h2><p className="mt-2 text-slate-300">{certificate.description}</p></section><section className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-6"><h2 className="text-xl font-bold">Lernmodule</h2><ul className="mt-2 list-disc pl-5 text-slate-300">{certificate.modules.map((m)=><li key={m}>{m}</li>)}</ul></section><section className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-6"><h2 className="text-xl font-bold">Beispiel Lernpfad</h2><p className="mt-2 text-slate-300">Woche 1 Grundlagen, Woche 2 Vertiefung, Woche 3 Simulation, Woche 4 gezielte Wiederholung.</p></section><section><Link href="/kontakt" className="inline-block rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-500 px-5 py-3 font-bold text-[#03111f]">Jetzt Lernen starten</Link></section></> : <section className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-6 text-slate-300">Diese Detailseite ist als professionelle Struktur vorbereitet. Inhalte folgen im nächsten Schritt.</section>}</main></PageShell>;
}

export function generateStaticParams() { return certificates.map((c) => ({ slug: c.slug })); }
