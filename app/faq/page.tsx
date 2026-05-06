import type { Metadata } from 'next';
import { PageShell } from '@/components/site/PageShell';
import OfficialDisclaimer from '@/components/site/OfficialDisclaimer';
import { faqItems } from '@/lib/fachkunde-data';
export const metadata: Metadata = { title: 'FAQ | FachkundePilot', description: 'Häufige Fragen und Antworten.' };
export default function FaqPage(){return <PageShell><main className='mx-auto max-w-5xl px-5 py-12'><h1 className='text-3xl font-black'>Häufige Fragen</h1><section className='mt-8 space-y-4'>{faqItems.map((f)=><article key={f.question} className='rounded-xl border border-slate-700 bg-[#0b1d33] p-5'><h2 className='font-bold'>{f.question}</h2><p className='mt-2 text-slate-300'>{f.answer}</p></article>)}</section><div className='mt-8'><OfficialDisclaimer /></div></main></PageShell>}
