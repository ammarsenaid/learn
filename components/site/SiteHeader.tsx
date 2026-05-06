import Link from 'next/link';

const navItems = [
  { label: 'Zertifikate', href: '/zertifikate' },
  { label: 'Methode', href: '/methode' },
  { label: 'Preise', href: '/preise' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Admin', href: '/admin' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-700/80 bg-[#03111f]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-[#0b1d33] px-3 py-2 text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d4a84f]" />
          <span className="text-lg font-black">FachkundePilot</span>
        </Link>
        <nav aria-label="Hauptnavigation" className="flex flex-wrap items-center gap-2 text-sm text-slate-300 sm:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 transition hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300 ${
                item.href === '/dashboard'
                  ? 'border border-sky-400/40 bg-sky-500/10 text-sky-100'
                  : item.href === '/preise'
                    ? 'bg-[#d4a84f] text-[#03111f] hover:bg-[#e2b965]'
                    : 'border border-transparent hover:border-slate-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
