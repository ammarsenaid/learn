import type { ReactNode } from "react";

export type Tone = "blue" | "gold" | "green" | "red";

export function Glass({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-white/10 bg-[#071a3a]/78 shadow-[0_26px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#4ea1ff]/35 bg-[#0a2452]/70 px-4 py-2 text-sm font-bold text-[#d8ebff] shadow-[0_0_35px_rgba(78,161,255,0.12)]">
      <span className="h-2 w-2 rounded-full bg-[#4ea1ff]" />
      {children}
    </span>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#f3b23c]">
      {children}
    </p>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex justify-center rounded-2xl bg-gradient-to-b from-[#ffe08a] to-[#f3b23c] px-7 py-4 text-base font-black text-[#06122b] shadow-[0_20px_60px_rgba(244,178,60,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_80px_rgba(244,178,60,0.46)] ${className}`}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex justify-center rounded-2xl border border-white/15 bg-white/[0.05] px-7 py-4 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:border-[#76b7ff]/50 hover:bg-[#76b7ff]/10 ${className}`}
    >
      {children}
    </a>
  );
}

export function ProgressBar({
  value,
  tone = "blue",
}: {
  value: string;
  tone?: Tone;
}) {
  const color =
    tone === "gold"
      ? "bg-gradient-to-r from-[#f3b23c] to-[#ffe08a]"
      : tone === "green"
        ? "bg-gradient-to-r from-[#34d399] to-[#8fffe0]"
        : tone === "red"
          ? "bg-gradient-to-r from-[#fb7185] to-[#fda4af]"
          : "bg-gradient-to-r from-[#4ea1ff] to-[#6ee7f9]";

  return (
    <div className="h-2 overflow-hidden rounded-full bg-black/30">
      <div className={`h-full rounded-full ${color}`} style={{ width: value }} />
    </div>
  );
}

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-sm font-black text-[#f3b23c]">
      {children}
    </div>
  );
}
