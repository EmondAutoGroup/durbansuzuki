'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { UsedVehicle, SortOption } from '@/lib/types';
import VehicleCard from './VehicleCard';

interface VehicleGridProps {
  vehicles: UsedVehicle[];
}

function sortVehicles(vehicles: UsedVehicle[], sort: SortOption): UsedVehicle[] {
  const sorted = [...vehicles];
  switch (sort) {
    case 'price-asc': return sorted.sort((a, b) => a.priceIncl - b.priceIncl);
    case 'price-desc': return sorted.sort((a, b) => b.priceIncl - a.priceIncl);
    case 'year-desc': return sorted.sort((a, b) => b.year - a.year);
    case 'year-asc': return sorted.sort((a, b) => a.year - b.year);
    case 'mileage-asc': return sorted.sort((a, b) => a.mileage - b.mileage);
    case 'mileage-desc': return sorted.sort((a, b) => b.mileage - a.mileage);
    default: return sorted;
  }
}

export default function VehicleGrid({ vehicles }: VehicleGridProps) {
  const searchParams = useSearchParams();

  const filtered = useMemo(() => {
    let result = vehicles;
    const make = searchParams.get('make');
    const model = searchParams.get('model');
    const transmission = searchParams.get('transmission');
    const priceMin = searchParams.get('priceMin');
    const priceMax = searchParams.get('priceMax');
    const yearMin = searchParams.get('yearMin');
    const yearMax = searchParams.get('yearMax');

    if (make) result = result.filter((v) => v.make === make);
    if (model) result = result.filter((v) => v.model === model);
    if (transmission) result = result.filter((v) => v.transmission.toLowerCase().includes(transmission.toLowerCase()));
    if (priceMin) result = result.filter((v) => v.priceIncl >= Number(priceMin));
    if (priceMax) result = result.filter((v) => v.priceIncl <= Number(priceMax));
    if (yearMin) result = result.filter((v) => v.year >= Number(yearMin));
    if (yearMax) result = result.filter((v) => v.year <= Number(yearMax));

    const sort = (searchParams.get('sort') || 'price-asc') as SortOption;
    return sortVehicles(result, sort);
  }, [vehicles, searchParams]);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-muted text-lg">No vehicles match your criteria.</p>
        <p className="text-text-muted text-sm mt-1">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-sm text-text-muted mb-4">{filtered.length} vehicle{filtered.length !== 1 ? 's' : ''} found</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <VehicleCard key={v.stockNumber} vehicle={v} />
        ))}
      </div>
    </>
  );
}
