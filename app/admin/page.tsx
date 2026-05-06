import type { Metadata } from 'next';import { PageShell } from '@/components/site/PageShell';
export const metadata: Metadata = { title: 'Admin | FachkundePilot', description: 'Admin-Bereich Platzhalter.' };
const items=['Zertifikate','Lektionen','Lernkarten','Fragen','Sprachen','Nutzer'];
export default function AdminPage(){return <PageShell><main className='mx-auto max-w-6xl px-5 py-12'><h1 className='text-3xl font-black'>Admin-Bereich</h1><div className='mt-8 grid gap-4 md:grid-cols-3'>{items.map((i)=><div key={i} className='rounded-xl border border-slate-700 bg-[#0b1d33] p-5'>{i}</div>)}</div></main></PageShell>}
