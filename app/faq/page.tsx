import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/site/PageShell';
import { Card } from '@/components/ui/Card';
export const metadata: Metadata = { title: 'FAQ | FachkundePilot', description: 'Häufige Fragen.' };
const groups=[['Allgemein','Was ist FachkundePilot?'],['Prüfungen','Welche Zertifikate gibt es?'],['Sprachen','Welche Sprachen werden unterstützt?'],['Preise','Gibt es einen kostenlosen Plan?'],['Plattform / CMS','Läuft die Inhaltsverwaltung über Directus?'],['Rechtlicher Hinweis','Ist FachkundePilot eine offizielle Stelle?']];
export default function FaqPage(){return <PageShell><main className='mx-auto max-w-5xl space-y-6 px-5 py-12'><h1 className='text-4xl font-bold'>FAQ</h1>{groups.map(([g,q])=><Card key={g}><h2 className='font-semibold text-sky-200'>{g}</h2><p className='mt-2 font-medium'>{q}</p><p className='mt-1 text-slate-300'>Diese Antwort ist produktionsreif vorbereitet und wird mit finalem Content aus dem CMS erweitert.</p></Card>)}<Link href='/kontakt' className='text-sky-300'>Kontakt aufnehmen</Link></main></PageShell>}
