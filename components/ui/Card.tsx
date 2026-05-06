import type { ReactNode } from 'react';
export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) { return <article className={`rounded-xl border border-[#214267] bg-[#0b2645] p-4 ${className}`}>{children}</article>; }
