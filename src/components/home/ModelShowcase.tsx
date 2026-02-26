import Image from 'next/image';
import Link from 'next/link';
import { NewCarModel } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ModelShowcaseProps {
  models: NewCarModel[];
}

export default function ModelShowcase({ models }: ModelShowcaseProps) {
  const showcase = models.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-1">New Suzuki Range</p>
          <h2 className="text-3xl font-extrabold text-text-primary">Explore Our Models</h2>
        </div>
        <Link
          href="/new"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-suzuki-blue hover:text-suzuki-red transition-colors"
        >
          View All Models
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4">
        {showcase.map((model) => (
          <Link
            key={model.slug}
            href={`/new/${model.slug}`}
            className="group shrink-0 w-64 bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-suzuki-teal/30"
          >
            <div className="relative aspect-[4/3] bg-white p-4">
              {model.jellybeanImage ? (
                <Image
                  src={model.jellybeanImage}
                  alt={`Suzuki ${model.name}`}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="256px"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-text-muted">
                  {model.name}
                </div>
              )}
            </div>
            <div className="p-4 pt-2">
              <h3 className="font-bold text-text-primary group-hover:text-suzuki-blue transition-colors">
                Suzuki {model.name}
              </h3>
              <p className="text-suzuki-red font-extrabold mt-1">
                From {formatPrice(model.startingPrice)}
              </p>
              <p className="text-text-muted text-xs mt-1">
                {model.variants.length} variant{model.variants.length !== 1 ? 's' : ''}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Link
          href="/new"
          className="inline-flex items-center gap-1 text-sm font-semibold text-suzuki-blue hover:text-suzuki-red transition-colors"
        >
          View All Models
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
