import type { Metadata } from 'next';
import { DEALER } from '@/lib/constants';
import EnquiryForm from '@/components/vehicle-detail/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Suzuki Durban (Emond Auto). Phone, email, WhatsApp or visit us. Sales, service and parts enquiries welcome.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
          <p className="text-white/60 mt-2">We&apos;re here to help with sales, service, parts and everything Suzuki.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-text-primary mb-6">{DEALER.name}</h2>
            <p className="text-text-muted mb-8 leading-relaxed">{DEALER.about}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-suzuki-blue/5 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-suzuki-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">Phone</h3>
                  <a href={DEALER.phoneLink} className="text-suzuki-blue hover:text-suzuki-red transition-colors font-medium">{DEALER.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-suzuki-blue/5 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-suzuki-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">Email</h3>
                  <a href={`mailto:${DEALER.email}`} className="text-suzuki-blue hover:text-suzuki-red transition-colors font-medium">{DEALER.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-whatsapp/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-whatsapp" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">WhatsApp</h3>
                  <a href={DEALER.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-whatsapp hover:text-whatsapp-dark transition-colors font-medium">Chat with us on WhatsApp</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-suzuki-blue/5 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-suzuki-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">Business Hours</h3>
                  {DEALER.hours.map((h) => (
                    <p key={h.days} className="text-text-muted text-sm">
                      <span className="font-medium">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src={DEALER.mapsEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suzuki Durban Map"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <div className="bg-card rounded-2xl border border-gray-100 p-8 sticky top-20">
              <h2 className="text-xl font-bold text-text-primary mb-6">Send Us a Message</h2>
              <EnquiryForm
                endpoint="/api/new-car-enquiry"
                defaultMessage=""
                hiddenFields={{ model: 'General Enquiry' }}
                submitLabel="Send Message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
