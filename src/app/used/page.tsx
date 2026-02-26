import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getUsedVehicles } from '@/lib/used-car-feed';
import FilterSidebar from '@/components/used-cars/FilterSidebar';
import SortDropdown from '@/components/used-cars/SortDropdown';
import VehicleGrid from '@/components/used-cars/VehicleGrid';

export const metadata: Metadata = {
  title: 'Used Cars',
  description: 'Browse quality pre-owned vehicles at Suzuki Durban. Finance available, trade-ins welcome.',
};

export const revalidate = 900;

export default async function UsedCarsPage() {
  const vehicles = await getUsedVehicles().catch(() => []);

  return (
    <>
      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">Pre-Owned</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">Used Cars</h1>
          <p className="text-white/60 mt-2">{vehicles.length} vehicles in stock</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-gray-100 p-5 sticky top-20">
              <Suspense fallback={<div className="animate-pulse h-64 bg-gray-100 rounded-lg" />}>
                <FilterSidebar vehicles={vehicles} />
              </Suspense>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-text-primary">All Vehicles</h2>
              <Suspense fallback={null}>
                <SortDropdown />
              </Suspense>
            </div>
            <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg" />}>
              <VehicleGrid vehicles={vehicles} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
