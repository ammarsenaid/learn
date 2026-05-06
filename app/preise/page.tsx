import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/site/PageShell';
import { Card } from '@/components/ui/Card';
import { OfficialDisclaimer } from '@/components/site/OfficialDisclaimer';
export const metadata: Metadata = { title: 'Preise | FachkundePilot', description: 'Preise für FachkundePilot.' };
const plans=['Kostenlos','Einzelzertifikat','Alle Zertifikate','Akademie'];
export default function PreisePage(){return <PageShell><main className='mx-auto max-w-6xl space-y-8 px-5 py-12'><h1 className='text-4xl font-bold'>Preise</h1><div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>{plans.map(p=><Card key={p}><h2 className='font-semibold'>{p}</h2><p className='mt-2 text-sm text-slate-300'>Planbeschreibung für Launch-Inhalte vorbereitet.</p><Link href='/kontakt' className='mt-3 inline-flex text-sky-300'>Anfragen</Link></Card>)}</div><Card><h2 className='font-semibold'>Vergleich</h2><p className='text-slate-300'>Die Tarife unterscheiden sich in Anzahl der Zertifikate, Teamfunktionen und Support.</p></Card><OfficialDisclaimer /></main></PageShell>}
