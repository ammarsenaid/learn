import { ReactNode } from "react";

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto w-full max-w-[1240px] px-5 py-14 md:px-8 md:py-16 ${className}`}>{children}</section>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-navy/10 bg-white p-7 shadow-premium ${className}`}>{children}</div>;
}

export function Button({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "secondary" }) {
  const style =
    variant === "primary"
      ? "bg-amber text-white shadow-[0_10px_25px_rgba(244,162,97,0.35)]"
      : "bg-skysoft text-navy border border-navy/10";
  return (
    <button
      className={`rounded-2xl px-6 py-3.5 text-[15px] font-semibold transition duration-200 hover:-translate-y-0.5 hover:opacity-95 ${style}`}
    >
      {children}
    </button>
  );
}
