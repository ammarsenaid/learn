import Link from 'next/link';

const items = [
  ['Dashboard','/dashboard'],['Lernübersicht','/lernen/taxi-mietwagen'],['Karten','/lernen/taxi-mietwagen/karten'],['Fragen','/lernen/taxi-mietwagen/fragen'],['Simulation','/lernen/taxi-mietwagen/simulation']
];

export default function LearningSidebar(){return <aside className="w-full border-b border-[#1e3554] bg-[#061a30] lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:border-r lg:border-b-0"><nav aria-label="Learning Navigation" className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 lg:grid-cols-1">{items.map(([label,href])=><Link key={href} href={href} className="rounded-lg border border-[#1e385c] bg-[#0a2039] px-3 py-2 text-sm text-slate-300 hover:border-[#4ca3ff] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">{label}</Link>)}</nav></aside>}
