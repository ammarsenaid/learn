import type { Metadata } from 'next';
import { PageShell } from '@/components/site/PageShell';
import { SectionHeader } from '@/components/site/SectionHeader';
import { methodSteps } from '@/lib/fachkunde-data';

export const metadata: Metadata = { title: 'Methode | FachkundePilot', description: 'So lernst du mit FachkundePilot.' };
export default function MethodePage(){return <PageShell><main className='mx-auto max-w-5xl px-5 py-12'><SectionHeader title='Unsere Lernmethode' subtitle='Deutsch im Fokus, Verständnis in deiner Sprache.'/><ol className='space-y-4'>{methodSteps.map((s,i)=><li key={s} className='rounded-xl border border-slate-700 bg-[#0b1d33] p-5'><span className='text-yellow-300'>0{i+1}</span><p className='font-bold'>{s}</p></li>)}</ol></main></PageShell>}
