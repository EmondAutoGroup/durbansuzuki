import Link from 'next/link';
import { getNewCarModels } from '@/lib/new-car-feed';
import { getUsedVehicles } from '@/lib/used-car-feed';
import HeroSection from '@/components/home/HeroSection';
import ModelShowcase from '@/components/home/ModelShowcase';
import UsedCarHighlights from '@/components/home/UsedCarHighlights';
import { DEALER } from '@/lib/constants';

export default async function HomePage() {
  const [models, usedVehicles] = await Promise.all([
    getNewCarModels(),
    getUsedVehicles().catch(() => []),
  ]);

  return (
    <>
      <HeroSection />
      <ModelShowcase models={models} />
      <UsedCarHighlights vehicles={usedVehicles} />

      {/* Why Suzuki Durban */}
      <section className="bg-suzuki-blue text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Your Trusted Suzuki <br className="hidden md:block" />
                Dealer in Durban
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                {DEALER.about}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-4xl font-extrabold text-suzuki-teal">{models.length}</p>
                <p className="text-white/50 text-sm mt-1">New Models</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-4xl font-extrabold text-suzuki-teal">{usedVehicles.length}+</p>
                <p className="text-white/50 text-sm mt-1">Used Cars</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-4xl font-extrabold text-suzuki-red">5yr</p>
                <p className="text-white/50 text-sm mt-1">Warranty</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-4xl font-extrabold text-suzuki-red">200k</p>
                <p className="text-white/50 text-sm mt-1">Service Plan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative bg-gradient-to-r from-suzuki-red to-suzuki-red-dark rounded-2xl p-10 md:p-14 text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready for a Test Drive?</h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Book your test drive today or contact us for more information on any Suzuki model.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/test-drive"
                className="bg-white text-suzuki-red font-bold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-all hover:shadow-lg"
              >
                Book a Test Drive
              </Link>
              <a
                href={DEALER.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
