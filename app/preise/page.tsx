import type { Metadata } from 'next';
import { PageShell } from '@/components/site/PageShell';
import { PricingCard } from '@/components/site/PricingCard';
import { pricingPlans } from '@/lib/fachkunde-data';
export const metadata: Metadata = { title: 'Preise | FachkundePilot', description: 'Preismodelle für Lernende und Teams.' };
export default function PreisePage(){return <PageShell><main className='mx-auto max-w-6xl px-5 py-12'><h1 className='text-3xl font-black'>Preise</h1><div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>{pricingPlans.map((p)=><PricingCard key={p.name} plan={p}/>)}</div></main></PageShell>}
