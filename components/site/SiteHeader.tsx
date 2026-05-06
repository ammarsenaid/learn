import Link from 'next/link';

const navItems = [
  { label: 'Zertifikate', href: '/zertifikate' },
  { label: 'Problem', href: '/#problem' },
  { label: 'Methode', href: '/methode' },
  { label: 'Preise', href: '/preise' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#03111f]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-lg font-black text-white">FachkundePilot</Link>
        <nav className="flex gap-4 text-sm text-slate-300">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-sky-300">{item.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
