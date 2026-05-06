import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#03111f]">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-slate-400">
        <div className="flex flex-wrap gap-4">
          <Link href="/zertifikate">Zertifikate</Link><Link href="/methode">Methode</Link><Link href="/preise">Preise</Link><Link href="/faq">FAQ</Link><Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
