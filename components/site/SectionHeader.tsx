export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div className="mb-8"><h1 className="text-3xl font-black">{title}</h1>{subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}</div>;
}
