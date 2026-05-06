import Link from 'next/link';
const links=['/zertifikate','/methode','/preise','/faq','/kontakt','/admin','/dashboard'];
export function SiteFooter() { return <footer className="border-t border-slate-800 bg-[#03111f]"><div className="mx-auto max-w-6xl px-5 py-10 text-sm text-slate-400"><div className="flex flex-wrap gap-4">{links.map((href)=><Link key={href} href={href} className="hover:text-sky-300">{href.replace('/','')||'Start'}</Link>)}</div></div></footer>; }
