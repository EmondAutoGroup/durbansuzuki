import type { Metadata } from 'next';
import { getNewCarModels } from '@/lib/new-car-feed';
import { getUsedVehicles } from '@/lib/used-car-feed';
import FinanceForm from '@/components/forms/FinanceForm';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Apply for Finance',
  description: 'Apply for vehicle finance at Suzuki Durban. Competitive rates on new and used Suzuki vehicles. Quick approval process.',
};

export default async function FinancePage() {
  const [models, usedVehicles] = await Promise.all([
    getNewCarModels(),
    getUsedVehicles().catch(() => []),
  ]);

  const vehicleOptions = [
    ...models.map((m) => ({
      label: `New Suzuki ${m.name} (from ${formatPrice(m.startingPrice)})`,
      value: `New - Suzuki ${m.name}`,
    })),
    ...usedVehicles.map((v) => ({
      label: `${v.year} ${v.fullTitle} - ${formatPrice(v.priceIncl)}`,
      value: `Used - ${v.year} ${v.fullTitle} (${v.stockNumber})`,
    })),
  ];

  return (
    <>
      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">Vehicle Finance</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">Apply for Finance</h1>
          <p className="text-white/60 mt-2 max-w-lg">
            Get behind the wheel sooner. We work with major banks and finance houses to find you the best rate.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Trust signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-card rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 bg-suzuki-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-suzuki-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-text-primary text-sm">Quick Approval</h3>
            <p className="text-text-muted text-xs mt-1">Fast-tracked finance applications</p>
          </div>
          <div className="bg-card rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 bg-suzuki-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-suzuki-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-text-primary text-sm">Competitive Rates</h3>
            <p className="text-text-muted text-xs mt-1">We shop around for the best deal</p>
          </div>
          <div className="bg-card rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 bg-suzuki-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-suzuki-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-text-primary text-sm">Trade-Ins Welcome</h3>
            <p className="text-text-muted text-xs mt-1">Use your current car as a deposit</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-text-primary mb-6">Finance Application</h2>
          <FinanceForm vehicleOptions={vehicleOptions} />
        </div>
      </div>
    </>
  );
}
