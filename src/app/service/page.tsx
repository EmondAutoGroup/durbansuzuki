import type { Metadata } from 'next';
import Link from 'next/link';
import { DEALER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Service & Parts',
  description: 'Book a service at Suzuki Durban. Genuine Suzuki parts, factory-trained technicians, and competitive service pricing.',
};

export default function ServicePage() {
  return (
    <>
      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">After-Sales</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">Service & Parts</h1>
          <p className="text-white/60 mt-2 max-w-lg">
            Keep your Suzuki running at its best with factory-trained technicians and genuine Suzuki parts.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Service Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl border border-gray-100 p-8">
            <div className="w-14 h-14 bg-suzuki-teal/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-suzuki-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Scheduled Service</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Regular maintenance by factory-trained Suzuki technicians using the latest diagnostic equipment. We follow Suzuki&apos;s recommended service schedule to keep your warranty intact.
            </p>
            <ul className="text-sm text-text-muted space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Minor &amp; major services
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Oil &amp; filter changes
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Brake inspections
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Multi-point safety check
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-gray-100 p-8">
            <div className="w-14 h-14 bg-suzuki-red/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-suzuki-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Genuine Parts</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Only genuine Suzuki parts are used in our workshop. This ensures perfect fit, optimal performance and full warranty compliance.
            </p>
            <ul className="text-sm text-text-muted space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                OEM Suzuki parts
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Parts warranty included
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Accessories &amp; add-ons
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-gray-100 p-8">
            <div className="w-14 h-14 bg-suzuki-blue/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-suzuki-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Warranty &amp; Repairs</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              From minor repairs to major overhauls, our team handles it all. We process warranty claims directly with Suzuki SA for a hassle-free experience.
            </p>
            <ul className="text-sm text-text-muted space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Warranty claim processing
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Mechanical repairs
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-suzuki-teal shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Electrical diagnostics
              </li>
            </ul>
          </div>
        </div>

        {/* Workshop Hours & CTA */}
        <div className="bg-suzuki-blue rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-extrabold mb-3">Book Your Service</h2>
          <p className="text-white/60 mb-4 max-w-md mx-auto">
            Call us or send a WhatsApp to book your next service appointment.
          </p>
          <div className="text-white/40 text-sm mb-6">
            Workshop Hours: {DEALER.hours[0].days} {DEALER.hours[0].time} | {DEALER.hours[1].days} {DEALER.hours[1].time}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DEALER.phoneLink}
              className="bg-suzuki-red hover:bg-suzuki-red-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Call {DEALER.phone}
            </a>
            <a
              href={`https://wa.me/${DEALER.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service for my Suzuki.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              WhatsApp Booking
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
