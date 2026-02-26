export const DEALER = {
  name: 'Suzuki Durban',
  legalName: 'Emond Auto',
  tagline: 'Your Trusted Suzuki Dealer in Durban',
  phone: '031 880 2220',
  phoneLink: 'tel:+27318802220',
  whatsapp: '27318802220',
  whatsappLink: 'https://wa.me/27318802220',
  email: 'emond.auto@emond.co.za',
  address: 'Durban, KwaZulu-Natal',
  mapsQuery: 'Suzuki+Durban+Emond+Auto',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460!2d31.02!3d-29.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSuzuki+Durban!5e0!3m2!1sen!2sza!4v1700000000000',
  hours: [
    { days: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 1:00 PM' },
    { days: 'Sunday & Public Holidays', time: 'Closed' },
  ],
  about: `Suzuki Durban, operated by Emond Auto, is your trusted Suzuki dealer in Durban, KwaZulu-Natal. We offer the full range of new Suzuki vehicles alongside quality pre-owned cars. Our experienced team provides expert sales advice, professional servicing, and genuine Suzuki parts to keep your vehicle running at its best. Visit us for a test drive or service booking today.`,
  siteUrl: 'https://www.durbansuzuki.co.za',
} as const;

export const SITE = {
  title: 'Suzuki Durban | New & Used Suzuki Cars in Durban, KZN',
  description:
    'Browse new and used Suzuki vehicles at Suzuki Durban (Emond Auto). Jimny, Grand Vitara, Swift, Fronx and more. Finance available, test drives welcome.',
  ogImage: '/og-image.jpg',
} as const;

/** Controls the display order on the /new grid and home page showcase */
export const MODEL_ORDER = [
  'Jimny',
  'Grand Vitara',
  'Fronx',
  'Swift',
  'Swift Sport',
  'Baleno',
  'Ignis',
  'Ertiga',
  'XL6',
  'S-Presso',
  'Celerio',
  'Dzire',
  'Super Carry',
  'Eeco',
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/new', label: 'New Cars' },
  { href: '/used', label: 'Used Cars' },
  { href: '/test-drive', label: 'Test Drive' },
  { href: '/finance', label: 'Finance' },
  { href: '/service', label: 'Service' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;
