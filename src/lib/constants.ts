export const DEALER = {
  name: 'Suzuki Durban',
  legalName: 'Emond Auto',
  tagline: 'Your Trusted Suzuki Dealer in Durban',
  phone: '031 569 7900',
  phoneLink: 'tel:+27315697900',
  whatsapp: '27315697900',
  whatsappLink: 'https://wa.me/27315697900',
  email: 'emond.auto@emond.co.za',
  address: '9 Moreland Drive, Redhill, Durban',
  mapsQuery: '9+Moreland+Drive+Redhill+Durban',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460!2d30.94!3d-29.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9+Moreland+Dr%2C+Redhill%2C+Durban!5e0!3m2!1sen!2sza!4v1700000000000',
  hours: [
    { days: 'Monday - Friday', time: '08:00 - 17:00' },
    { days: 'Saturday', time: '08:00 - 12:00' },
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
  'Across',
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

/** Thumbnail images for model cards — sourced from suzukiauto.co.za + local overrides */
const THUMBS = 'https://www.suzukiauto.co.za/hubfs';

export const MODEL_CARD_IMAGES: Record<string, string> = {
  Jimny: `${THUMBS}/Jmny%20Thumbs3.png`,
  'Jimny 5-Door': `${THUMBS}/J5D%20Thumbs3.png`,
  Across: '/models/across.png',
  'Grand Vitara': `${THUMBS}/GV%20Thumbnail%20(1).png`,
  Fronx: `${THUMBS}/Fronx%20Thumbs3.png`,
  Swift: '/models/swift.webp',
  'Swift Sport': '/models/swift-sport.webp',
  Baleno: '/models/baleno.webp',
  Ignis: `${THUMBS}/Ignis%20Thumbs3.png`,
  Ertiga: `${THUMBS}/Ertiga%20Thumbs3.png`,
  XL6: '/models/xl6.webp',
  'S-Presso': '/models/s-presso.webp',
  Celerio: '/models/celerio.webp',
  Dzire: '/models/dzire.webp',
  'Super Carry': `${THUMBS}/Super%20Carry%20Thumbs3.png`,
  Eeco: '/models/eeco.png',
};

const HERO_BASE =
  'https://www.suzukiauto.co.za/hubfs/.1A%20-%20Site%20Assets%20CMS/Vehicles/';

/** Full-width hero banners for the home page slideshow */
export const HERO_SLIDES = [
  {
    image: `${HERO_BASE}Grand%20Vitara/Info/SASA-GV-GV-Product-Page-Banner.jpeg`,
    model: 'Grand Vitara',
    tagline: 'Bold by Nature',
    href: '/new/grand-vitara',
  },
  {
    image: `${HERO_BASE}Jimny/Vehicle%20Info/Jimny-Hero%201.png`,
    model: 'Jimny',
    tagline: 'Built for Adventure',
    href: '/new/jimny',
  },
  {
    image: `${HERO_BASE}Fronx/Info/HeroSASA-Fronx.jpeg`,
    model: 'Fronx',
    tagline: 'Rule the Road',
    href: '/new/fronx',
  },
  {
    image: `${HERO_BASE}swift/Vehicle%20Info/SASA-Swift-Hero-Banner.jpeg`,
    model: 'Swift',
    tagline: 'Pure Driving Thrill',
    href: '/new/swift',
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/new', label: 'New Cars' },
  { href: '/used', label: 'Used Cars' },
  { href: '/specials', label: 'Specials' },
  { href: '/finance', label: 'Finance' },
  { href: '/service', label: 'Service' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;
