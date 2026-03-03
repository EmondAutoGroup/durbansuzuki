import Image from 'next/image';
import Link from 'next/link';
import { NewCarModel } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { MODEL_CARD_IMAGES } from '@/lib/constants';

interface ModelShowcaseProps {
  models: NewCarModel[];
}

export default function ModelShowcase({ models }: ModelShowcaseProps) {
  const showcase = models.slice(0, 8);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Coming Soon: Across */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative">
            <div className="absolute top-3 right-3 z-10 bg-suzuki-blue text-white text-xs font-bold px-3 py-1 rounded-full">
              Coming Soon
            </div>
            <div className="relative aspect-[16/10] bg-white overflow-hidden p-4">
              <Image
                src={MODEL_CARD_IMAGES['Across'] || ''}
                alt="Suzuki Across"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-4 pt-2 border-t border-gray-50">
              <h3 className="font-bold text-text-primary">Across</h3>
              <p className="text-suzuki-blue font-extrabold text-sm mt-0.5">
                Price TBA
              </p>
              <p className="text-text-muted text-xs mt-0.5">
                Register your interest
              </p>
            </div>
          </div>

          {showcase.map((model) => {
            const cardImage = MODEL_CARD_IMAGES[model.name] || model.jellybeanImage;
            return (
              <Link
                key={model.slug}
                href={`/new/${model.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-suzuki-teal/30"
              >
                <div className="relative aspect-[16/10] bg-white overflow-hidden p-4">
                  {cardImage ? (
                    <Image
                      src={cardImage}
                      alt={`Suzuki ${model.name}`}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-text-muted">
                      {model.name}
                    </div>
                  )}
                </div>
                <div className="p-4 pt-2 border-t border-gray-50">
                  <h3 className="font-bold text-text-primary group-hover:text-suzuki-blue transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-suzuki-red font-extrabold text-sm mt-0.5">
                    From {formatPrice(model.startingPrice)}
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">
                    {model.variants.length} variant{model.variants.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
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
      </div>
    </section>
  );
}
