import Link from 'next/link';
import { DEALER } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative bg-suzuki-blue text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-3">
            {DEALER.tagline}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Drive Away in Your{' '}
            <span className="text-suzuki-red">New Suzuki</span>{' '}
            Today
          </h1>
          <p className="text-white/60 text-lg mb-8 max-w-lg">
            Explore the full range of new Suzuki models and quality pre-owned vehicles.
            Finance available, test drives welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/new"
              className="bg-suzuki-red hover:bg-suzuki-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-suzuki-red/30 text-center"
            >
              Browse New Cars
            </Link>
            <Link
              href="/used"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-center"
            >
              View Used Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
