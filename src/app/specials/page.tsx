import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DEALER, MODEL_CARD_IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Specials & Deals | Suzuki Durban',
  description:
    'Current Suzuki specials in Durban. Finance deals, cash offers and trade-in bonuses on Jimny, Grand Vitara, Fronx, Swift and more at Suzuki Durban.',
  openGraph: {
    title: 'Specials & Deals | Suzuki Durban',
    description:
      'Current Suzuki specials in Durban. Finance deals, cash offers and trade-in bonuses on Jimny, Grand Vitara, Fronx, Swift and more.',
    url: `${DEALER.siteUrl}/specials`,
    type: 'website',
  },
};

/** Deal data mirrored from suzukiauto.co.za/deals — valid until 30 April 2026 */
const SPECIALS = [
  { model: 'S-Presso', tagline: 'Do You', monthly: 2399, price: 178900, cats: ['passenger'], deposit: 10, term: 72, balloon: 35, tag: 'Budget Friendly', href: '/new/s-presso' },
  { model: 'Celerio', tagline: 'Move Smart', monthly: 2599, price: 188900, cats: ['passenger'], deposit: 10, term: 72, balloon: 35, tag: 'Finance Special', href: '/new/celerio' },
  { model: 'Swift', tagline: 'Feel Iconic', monthly: 3099, price: 227900, cats: ['passenger'], deposit: 10, term: 72, balloon: 35, tag: 'Best Seller', href: '/new/swift' },
  { model: 'Dzire', tagline: 'Ambition Comes Standard', monthly: 3099, price: 229900, cats: ['passenger'], deposit: 10, term: 72, balloon: 35, tag: 'Finance Special', href: '/new/dzire' },
  { model: 'Ignis', tagline: 'Urban Compact SUV', monthly: 3099, price: 237900, cats: ['passenger'], deposit: 10, term: 72, balloon: 35, tag: 'Finance Special', href: '/new/ignis' },
  { model: 'Baleno', tagline: 'Others Will Follow', monthly: 3399, price: 267900, cats: ['passenger'], deposit: 10, term: 72, balloon: 35, tag: 'Finance Special', href: '/new/baleno' },
  { model: 'Fronx', tagline: 'Shape Your New', monthly: 3899, price: 299900, cats: ['passenger', 'suv'], deposit: 10, term: 72, balloon: 35, tag: 'Popular', href: '/new/fronx' },
  { model: 'Super Carry', tagline: 'Gets Work Done', monthly: 3399, price: 196900, cats: ['commercial'], deposit: 10, term: 72, balloon: 35, tag: 'Commercial', href: '/new/super-carry' },
  { model: 'Eeco', tagline: 'For Everything Extra', monthly: 3999, price: 230900, cats: ['commercial'], deposit: 10, term: 72, balloon: 35, tag: 'Commercial', href: '/new/eeco' },
  { model: 'Ertiga', tagline: 'All In!', monthly: 4199, price: 304900, cats: ['family'], deposit: 10, term: 72, balloon: 35, tag: 'Family', href: '/new/ertiga' },
  { model: 'XL6', tagline: 'Think Big', monthly: 4799, price: 359900, cats: ['family'], deposit: 10, term: 72, balloon: 35, tag: 'Family', href: '/new/xl6' },
  { model: 'Grand Vitara', tagline: 'Live The Legacy', monthly: 4799, price: 359900, cats: ['suv', 'family'], deposit: 10, term: 72, balloon: 35, tag: 'Hybrid Ready', href: '/new/grand-vitara' },
  { model: 'Jimny', tagline: 'Born For This', monthly: 5799, price: 436900, cats: ['suv'], deposit: 10, term: 72, balloon: 35, tag: 'Iconic', href: '/new/jimny' },
  { model: 'Jimny 5-Door', tagline: 'Born For More!', monthly: 5799, price: 437900, cats: ['suv', 'family'], deposit: 10, term: 72, balloon: 35, tag: 'New', href: '/new/jimny' },
  { model: 'Swift Sport', tagline: 'Own It', monthly: 6299, price: 469900, cats: ['passenger'], deposit: 10, term: 72, balloon: 35, tag: 'Performance', href: '/new/swift-sport' },
];

const FILTER_CATS = ['all', 'passenger', 'suv', 'family', 'commercial'] as const;
const FILTER_LABELS: Record<string, string> = { all: 'All Deals', passenger: 'Passenger', suv: 'SUV & 4x4', family: 'Family', commercial: 'Commercial' };

function formatPrice(n: number) {
  return 'R' + n.toLocaleString('en-ZA');
}

const TAG_COLORS: Record<string, string> = {
  'Finance Special': 'bg-suzuki-teal/10 text-suzuki-teal',
  'Budget Friendly': 'bg-emerald-50 text-emerald-700',
  'Best Seller': 'bg-amber-50 text-amber-700',
  'Popular': 'bg-amber-50 text-amber-700',
  'Iconic': 'bg-yellow-50 text-yellow-700',
  'New': 'bg-blue-50 text-blue-700',
  'Hybrid Ready': 'bg-green-50 text-green-700',
  'Performance': 'bg-red-50 text-red-700',
  'Commercial': 'bg-gray-100 text-gray-600',
  'Family': 'bg-purple-50 text-purple-700',
};

function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Suzuki Durban Specials',
    description: 'Current vehicle specials and promotions at Suzuki Durban.',
    url: `${DEALER.siteUrl}/specials`,
    provider: {
      '@type': 'AutoDealer',
      name: DEALER.name,
      telephone: DEALER.phone,
      address: DEALER.address,
    },
    itemListElement: SPECIALS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Offer',
        name: `${s.model} from ${formatPrice(s.monthly)}/pm`,
        description: `${s.tagline} — ${s.model} from ${formatPrice(s.monthly)} per month. ${s.deposit}% deposit, ${s.term} months, ${s.balloon}% balloon. Cash price from ${formatPrice(s.price)}.`,
        url: `${DEALER.siteUrl}${s.href}`,
        price: s.price,
        priceCurrency: 'ZAR',
      },
    })),
  };
}

export default function SpecialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      {/* Hero */}
      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-suzuki-teal text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded mb-3">
            Valid Until 30 April 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Deals &amp; Specials
          </h1>
          <p className="text-white/60 mt-2 max-w-lg">
            Incredible finance offers on the full Suzuki range. 10% deposit, 72-month terms via Suzuki Mobility Finance.
          </p>
        </div>
      </section>

      {/* Highlight Chips */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['10% Deposit', '72 Month Terms', '35% Balloon Option', 'Prime Linked Rate (10.25%)'].map((chip) => (
            <span key={chip} className="border border-suzuki-teal text-suzuki-teal bg-suzuki-teal/5 text-sm font-semibold px-5 py-2 rounded-full">
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALS.map((deal) => (
            <div
              key={deal.model}
              className="bg-card rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg hover:border-suzuki-teal/40 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-suzuki-teal/5 to-gray-50">
                {deal.tag && (
                  <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 rounded z-10 ${TAG_COLORS[deal.tag] || 'bg-gray-100 text-gray-600'}`}>
                    {deal.tag}
                  </span>
                )}
                <Image
                  src={MODEL_CARD_IMAGES[deal.model] || ''}
                  alt={`Suzuki ${deal.model}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-suzuki-teal mb-1">
                  {deal.tagline}
                </p>
                <h3 className="text-lg font-extrabold text-text-primary mb-3">
                  {deal.model}
                </h3>

                {/* Monthly Payment Banner */}
                <div className="bg-gradient-to-r from-suzuki-teal to-suzuki-teal/80 rounded-xl p-4 text-center text-white mb-4">
                  <span className="block text-[10px] uppercase tracking-wider opacity-80">From</span>
                  <span className="block text-2xl font-extrabold leading-tight">{formatPrice(deal.monthly)}</span>
                  <span className="block text-xs opacity-80">per month</span>
                </div>

                {/* Terms Row */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gray-50 rounded-lg py-2 text-center">
                    <span className="block text-sm font-bold text-text-primary">{deal.deposit}%</span>
                    <span className="block text-[10px] text-text-muted">Deposit</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg py-2 text-center">
                    <span className="block text-sm font-bold text-text-primary">{deal.term}</span>
                    <span className="block text-[10px] text-text-muted">Months</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg py-2 text-center">
                    <span className="block text-sm font-bold text-text-primary">{deal.balloon}%</span>
                    <span className="block text-[10px] text-text-muted">Balloon</span>
                  </div>
                </div>

                {/* Cash Price */}
                <p className="text-sm text-text-muted text-center border-t border-gray-100 pt-3">
                  Cash price from <strong className="text-text-primary">{formatPrice(deal.price)}</strong>
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 px-5 pb-5">
                <Link
                  href={deal.href}
                  className="flex-1 bg-suzuki-teal hover:bg-suzuki-teal/90 text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors"
                >
                  Enquire Now
                </Link>
                <a
                  href={`https://wa.me/${DEALER.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${deal.model} deal at ${formatPrice(deal.monthly)}/pm.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-suzuki-teal text-suzuki-teal hover:bg-suzuki-teal/5 text-sm font-bold py-2.5 rounded-xl text-center transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-gray-50 rounded-xl border border-gray-100 p-6">
          <p className="text-[11px] text-text-muted leading-relaxed">
            *Finance offers subject to approval from Suzuki Mobility Finance, a product of WesBank. Instalment includes monthly service fee of R69 (incl. VAT). Initiation fee of R1,207.50 (incl. VAT). Interest rate linked to prime lending rate, currently 10.25%, subject to change. Instalments subject to customer&apos;s risk profile. All vehicles include 5-year/200,000km mechanical warranty. Images for illustration purposes only. E&amp;OE.{' '}
            <Link href="/contact" className="text-suzuki-teal font-semibold hover:underline">Contact us</Link> for full terms.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-suzuki-blue rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-extrabold mb-3">
            Interested in a Deal?
          </h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Get in touch today — our team is ready to help you find the perfect Suzuki at the best price.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DEALER.phoneLink}
              className="bg-suzuki-red hover:bg-suzuki-red-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Call {DEALER.phone}
            </a>
            <a
              href={`https://wa.me/${DEALER.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in your current Suzuki specials.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              WhatsApp Us
            </a>
            <Link
              href="/finance"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Apply for Finance
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
