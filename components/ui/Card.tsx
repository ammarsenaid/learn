import type { ReactNode } from 'react';
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) { return <div className={`rounded-2xl border border-slate-700 bg-[#0b1d33] p-5 ${className}`}>{children}</div>; }
