import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getNewCarModels } from '@/lib/new-car-feed';
import { formatPrice } from '@/lib/utils';
import { MODEL_CARD_IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'New Suzuki Cars',
  description: 'Browse the full range of new Suzuki vehicles available at Suzuki Durban. Jimny, Grand Vitara, Swift, Fronx, Baleno and more.',
};

export const revalidate = 3600;

export default async function NewCarsPage() {
  const models = await getNewCarModels();

  return (
    <>
      {/* Hero */}
      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">New Vehicles</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">New Suzuki Range</h1>
          <p className="text-white/60 mt-2 max-w-lg">
            Explore all {models.length} Suzuki models. Click any model to see variants, specs, pricing and enquire.
          </p>
        </div>
      </section>

      {/* Model Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {models.map((model) => {
            const cardImage = MODEL_CARD_IMAGES[model.name] || model.jellybeanImage;
            return (
            <Link
              key={model.slug}
              href={`/new/${model.slug}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-suzuki-teal/30"
            >
              <div className="relative aspect-[16/10] bg-white overflow-hidden p-4">
                {cardImage ? (
                  <Image
                    src={cardImage}
                    alt={`Suzuki ${model.name}`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-text-muted text-lg font-bold">
                    {model.name}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-text-primary group-hover:text-suzuki-blue transition-colors">
                  Suzuki {model.name}
                </h2>
                <p className="text-suzuki-red font-extrabold text-xl mt-1">
                  From {formatPrice(model.startingPrice)}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-text-muted text-sm">
                    {model.variants.length} variant{model.variants.length !== 1 ? 's' : ''}
                  </span>
                  <span className="text-xs text-suzuki-blue group-hover:text-suzuki-red transition-colors flex items-center gap-1 font-semibold">
                    View Details
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
