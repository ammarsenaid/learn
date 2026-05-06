import Link from 'next/link';
import type { Certificate } from '@/lib/fachkunde-data';

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return <Link href={certificate.href} className="block rounded-2xl border border-slate-700 bg-[#0b1d33] p-5 hover:border-sky-400/60"><p className="text-xs text-yellow-300">{certificate.badge}</p><h3 className="mt-1 text-xl font-bold">{certificate.title}</h3><p className="text-slate-300">{certificate.subtitle}</p><p className="mt-3 text-sm text-slate-400">{certificate.description}</p></Link>;
}
