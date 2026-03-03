'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DEALER, NAV_LINKS } from '@/lib/constants';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-suzuki-blue text-white/70 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={DEALER.phoneLink} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {DEALER.phone}
            </a>
            <a href={`mailto:${DEALER.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {DEALER.email}
            </a>
          </div>
          <span className="text-white/50">{DEALER.address}</span>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/suzuki-logo.png"
              alt="Suzuki Durban"
              width={160}
              height={56}
              className="h-8 md:h-11 w-auto"
              priority
            />
            <span className="hidden sm:block text-lg md:text-xl font-bold tracking-wide text-suzuki-blue">Durban</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-suzuki-blue px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <a
              href={DEALER.phoneLink}
              className="text-sm font-semibold text-white bg-suzuki-red hover:bg-suzuki-red-dark px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-suzuki-red/20"
            >
              Call Now
            </a>
          </nav>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>
    </>
  );
}
