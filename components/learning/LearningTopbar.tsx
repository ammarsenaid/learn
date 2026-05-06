import ButtonLink from '@/components/ui/ButtonLink';

export default function LearningTopbar() {
  return <header className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-[#1e385c] bg-[#09223f] p-4"><ButtonLink href="/dashboard">Dashboard</ButtonLink><ButtonLink href="/lernen/taxi-mietwagen">Lernübersicht</ButtonLink><ButtonLink href="/lernen/taxi-mietwagen/karten">Karten</ButtonLink><ButtonLink href="/lernen/taxi-mietwagen/fragen">Fragen</ButtonLink><ButtonLink href="/lernen/taxi-mietwagen/simulation" variant="primary">Simulation</ButtonLink></header>;
}
