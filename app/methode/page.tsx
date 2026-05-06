import type { Metadata } from 'next';
import { PageShell } from '@/components/site/PageShell';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card } from '@/components/ui/Card';
export const metadata: Metadata = { title: 'Methode | FachkundePilot', description: 'So lernst du mit FachkundePilot.' };
const steps=['Deutsch lesen','In deiner Sprache verstehen','Mit Lernkarten sichern','Prüfungsfragen üben','Simulation starten','Schwächen wiederholen'];
export default function MethodePage(){return <PageShell><main className='mx-auto max-w-6xl space-y-8 px-5 py-12'><h1 className='text-4xl font-bold'>So lernst du mit FachkundePilot</h1><div className='grid gap-3 md:grid-cols-2'>{steps.map((s,i)=><Card key={s}><p className='text-yellow-300'>0{i+1}</p><p className='font-semibold'>{s}</p></Card>)}</div><Card><h2 className='text-xl font-semibold'>Beispiel-Workflow</h2><p className='mt-2 text-slate-300'>Begriff → Erklärung → Lernkarte → Frage → Simulation.</p></Card><div className='flex gap-3'><ButtonLink href='/dashboard'>Zum Dashboard</ButtonLink><ButtonLink href='/zertifikate' variant='secondary'>Zertifikate</ButtonLink></div></main></PageShell>}
