import { ReactNode } from "react";

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto w-full max-w-6xl px-5 py-10 md:px-8 ${className}`}>{children}</section>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-navy/10 bg-white p-6 shadow-premium ${className}`}>{children}</div>;
}

export function Button({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "secondary" }) {
  const style = variant === "primary" ? "bg-amber text-white" : "bg-skysoft text-navy";
  return <button className={`rounded-2xl px-5 py-3 text-sm font-semibold transition hover:opacity-90 ${style}`}>{children}</button>;
}
