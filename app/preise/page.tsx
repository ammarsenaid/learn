import type { Metadata } from 'next';

import OfficialDisclaimer from '@/components/site/OfficialDisclaimer';
import { PricingCard } from '@/components/site/PricingCard';
import { PageShell } from '@/components/site/PageShell';
import { getPricingPlans } from '@/lib/cms';

export const metadata: Metadata = {
  title: 'Preise | FachkundePilot',
  description: 'Preismodelle für Lernende und Teams.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PreisePage() {
  const plans = (await getPricingPlans())
    .filter((plan) => plan.is_active !== false)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));

  const normalizedPlans = plans.map((plan) => ({
    name: plan.name,
    price: `${plan.price}${plan.period ? ` / ${plan.period}` : ''}`,
    description: plan.description ?? (plan.benefits?.join(' • ') ?? 'Weitere Details auf Anfrage.'),
  }));

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-black">Preise</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {normalizedPlans.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>
        <div className="mt-8">
          <OfficialDisclaimer />
        </div>
      </main>
    </PageShell>
  );
}
