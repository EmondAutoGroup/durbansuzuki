import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import { SITE, DEALER } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${DEALER.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(DEALER.siteUrl),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: DEALER.siteUrl,
    siteName: DEALER.name,
    type: 'website',
  },
};

const dealerSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: DEALER.name,
  alternateName: DEALER.legalName,
  url: DEALER.siteUrl,
  telephone: DEALER.phone,
  email: DEALER.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Durban',
    addressRegion: 'KwaZulu-Natal',
    addressCountry: 'ZA',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dealerSchema) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
