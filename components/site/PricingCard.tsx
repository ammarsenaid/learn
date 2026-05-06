import Link from 'next/link';

export function PricingCard({ plan }: { plan: { name: string; price: string; description: string } }) {
  return <div className="rounded-2xl border border-slate-700 bg-[#0b1d33] p-6"><h3 className="text-xl font-bold">{plan.name}</h3><p className="mt-2 text-2xl font-black text-yellow-300">{plan.price}</p><p className="mt-2 text-slate-300">{plan.description}</p><Link href="/kontakt" className="mt-5 inline-block rounded-lg bg-sky-500 px-4 py-2 font-semibold text-[#03111f]">Kontakt aufnehmen</Link></div>;
}
