import type { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#03111f] text-white"><SiteHeader />{children}<SiteFooter /></div>;
}
