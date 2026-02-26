import Image from 'next/image';
import Link from 'next/link';
import { UsedVehicle } from '@/lib/types';
import { formatPrice, formatMileage } from '@/lib/utils';

interface UsedCarHighlightsProps {
  vehicles: UsedVehicle[];
}

export default function UsedCarHighlights({ vehicles }: UsedCarHighlightsProps) {
  const latest = vehicles.slice(0, 6);

  if (latest.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-suzuki-red font-semibold text-sm uppercase tracking-wider mb-1">Pre-Owned</p>
            <h2 className="text-3xl font-extrabold text-text-primary">Latest Used Cars</h2>
          </div>
          <Link
            href="/used"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-suzuki-blue hover:text-suzuki-red transition-colors"
          >
            View All Used Cars
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((v) => (
            <Link
              key={v.stockNumber}
              href={`/used/${v.stockNumber}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 img-zoom">
                {v.images[0] ? (
                  <Image
                    src={v.images[0].fullImageUrl}
                    alt={v.fullTitle}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-text-muted">No Image</div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/80 glass text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                    {v.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-text-primary line-clamp-1 group-hover:text-suzuki-blue transition-colors">
                  {v.fullTitle}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-text-muted">
                  <span>{formatMileage(v.mileage)}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{v.transmission}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-suzuki-red font-extrabold text-xl">{formatPrice(v.priceIncl)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/used"
            className="inline-flex items-center gap-1 text-sm font-semibold text-suzuki-blue hover:text-suzuki-red transition-colors"
          >
            View All Used Cars
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
