import Link from 'next/link';
import { DEALER } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-suzuki-blue text-white">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 font-extrabold text-xl">
              <span className="text-suzuki-red">SUZUKI</span>{' '}
              <span className="text-white/80 font-light">Durban</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Your trusted Suzuki dealer in Durban, KZN. New and used vehicles, finance, service &amp; parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/new" className="hover:text-white transition-colors">New Cars</Link></li>
              <li><Link href="/used" className="hover:text-white transition-colors">Used Cars</Link></li>
              <li><Link href="/test-drive" className="hover:text-white transition-colors">Book a Test Drive</Link></li>
              <li><Link href="/finance" className="hover:text-white transition-colors">Apply for Finance</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">Service &amp; Parts</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>
                <a href={DEALER.phoneLink} className="hover:text-white transition-colors">{DEALER.phone}</a>
              </li>
              <li>
                <a href={`mailto:${DEALER.email}`} className="hover:text-white transition-colors">{DEALER.email}</a>
              </li>
              <li>
                <a href={DEALER.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-suzuki-teal transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-sm mb-4">Hours</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              {DEALER.hours.map((h) => (
                <li key={h.days}>
                  <span className="block text-white/60">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {DEALER.name} ({DEALER.legalName}). All rights reserved.</p>
          <p>{DEALER.address}</p>
        </div>
      </div>
    </footer>
  );
}
