import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DEALER } from '@/lib/constants';
import FAQAccordion from '@/components/faq/FAQAccordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about buying a Suzuki, finance, test drives, servicing, and more at Suzuki Durban.',
};

const FAQ_ITEMS = [
  {
    question: 'What new Suzuki models do you have available?',
    answer: 'We stock the full Suzuki South Africa range including the Jimny, Grand Vitara, Fronx, Swift, Swift Sport, Baleno, Ignis, Ertiga, XL6, S-Presso, Celerio, Dzire, Super Carry and Eeco. Browse our <a href="/new" class="text-suzuki-blue underline font-medium">new cars page</a> for pricing and specs on all 14 models.',
  },
  {
    question: 'Do you sell used cars as well?',
    answer: 'Yes! Alongside our new Suzuki range, we carry a selection of quality pre-owned vehicles from various brands. Check our <a href="/used" class="text-suzuki-blue underline font-medium">used cars page</a> for current stock with photos and pricing.',
  },
  {
    question: 'How do I book a test drive?',
    answer: 'You can book a test drive through our <a href="/test-drive" class="text-suzuki-blue underline font-medium">online booking form</a>, call us on ' + DEALER.phone + ', or send a WhatsApp. We\'ll have your chosen model ready and waiting when you arrive.',
  },
  {
    question: 'What finance options are available?',
    answer: 'We work with all major South African banks and finance houses to secure the best rate for you. Whether you\'re buying new or used, we can assist with vehicle finance, balloon payments and trade-in deals. Start your application on our <a href="/finance" class="text-suzuki-blue underline font-medium">finance page</a>.',
  },
  {
    question: 'Do you accept trade-ins?',
    answer: 'Absolutely. We accept trade-ins on both new and used vehicle purchases. Bring your current vehicle in for a valuation, or describe it in your finance application and we\'ll give you a quote.',
  },
  {
    question: 'What warranty comes with a new Suzuki?',
    answer: 'All new Suzuki vehicles in South Africa come with a comprehensive warranty of up to 200,000 km and a service plan of 4 years / 60,000 km (terms vary by model). We also offer extended warranty options for additional peace of mind.',
  },
  {
    question: 'Can I service my Suzuki at your dealership?',
    answer: 'Yes, our workshop is staffed by factory-trained Suzuki technicians and we use genuine Suzuki parts. We handle scheduled services, repairs, warranty claims and diagnostics. Visit our <a href="/service" class="text-suzuki-blue underline font-medium">service page</a> to book.',
  },
  {
    question: 'What are your business hours?',
    answer: DEALER.hours.map((h) => `<strong>${h.days}:</strong> ${h.time}`).join('<br/>'),
  },
  {
    question: 'Where are you located?',
    answer: 'Suzuki Durban (Emond Auto) is based in Durban, KwaZulu-Natal. Call us on ' + DEALER.phone + ' for directions or visit our <a href="/contact" class="text-suzuki-blue underline font-medium">contact page</a> with a Google Maps link.',
  },
  {
    question: 'What is the cheapest new Suzuki I can buy?',
    answer: 'The Suzuki S-Presso is the most affordable model in the range, starting from under R180,000. The Celerio and Dzire are also excellent value-for-money options. View exact pricing on our <a href="/new" class="text-suzuki-blue underline font-medium">new cars page</a>.',
  },
  {
    question: 'Is the Suzuki Jimny available for immediate delivery?',
    answer: 'The Jimny remains one of Suzuki\'s most popular models and availability varies. Contact us on ' + DEALER.phone + ' or via WhatsApp to check current stock and delivery timelines.',
  },
  {
    question: 'Do Suzuki vehicles have good fuel consumption?',
    answer: 'Suzuki is renowned for fuel efficiency. Models like the Celerio and S-Presso achieve excellent figures around 4.5-5.0 L/100km. Even the larger Grand Vitara offers competitive consumption thanks to its mild-hybrid technology. Check individual model specs on our <a href="/new" class="text-suzuki-blue underline font-medium">new cars page</a>.',
  },
];

// JSON-LD FAQPage schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer.replace(/<[^>]*>/g, ''), // strip HTML for schema
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">Help Centre</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h1>
          <p className="text-white/60 mt-2 max-w-lg">
            Everything you need to know about buying, servicing and financing a Suzuki in Durban.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <FAQAccordion items={FAQ_ITEMS} />

        {/* Dealership Photo */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-200">
          <Image
            src="/dealership-street.jpg"
            alt="Suzuki Durban (Emond Auto) dealership on Moreland Drive"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="bg-gray-50 px-5 py-3 text-center">
            <p className="text-sm text-text-muted">
              Visit us at <strong className="text-text-primary">9 Moreland Drive, Redhill, Durban</strong>
            </p>
          </div>
        </div>

        <div className="mt-12 bg-suzuki-blue/5 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-text-primary mb-2">Still Have Questions?</h2>
          <p className="text-text-muted mb-6">Our team is happy to help with any questions not covered above.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-suzuki-red hover:bg-suzuki-red-dark text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={DEALER.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
