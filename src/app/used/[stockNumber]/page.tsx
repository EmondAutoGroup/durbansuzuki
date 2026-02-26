import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getUsedVehicles, getUsedVehicleByStock } from '@/lib/used-car-feed';
import { formatPrice, formatMileage } from '@/lib/utils';
import { DEALER } from '@/lib/constants';
import ImageGallery from '@/components/vehicle-detail/ImageGallery';
import EnquiryForm from '@/components/vehicle-detail/EnquiryForm';

export const revalidate = 900;

interface PageProps {
  params: Promise<{ stockNumber: string }>;
}

export async function generateStaticParams() {
  const vehicles = await getUsedVehicles().catch(() => []);
  return vehicles.map((v) => ({ stockNumber: v.stockNumber }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stockNumber } = await params;
  const vehicle = await getUsedVehicleByStock(stockNumber);
  if (!vehicle) return {};
  return {
    title: `${vehicle.year} ${vehicle.fullTitle}`,
    description: `${vehicle.year} ${vehicle.fullTitle} - ${formatMileage(vehicle.mileage)}, ${vehicle.transmission}. ${formatPrice(vehicle.priceIncl)} at Suzuki Durban.`,
  };
}

export default async function UsedCarDetailPage({ params }: PageProps) {
  const { stockNumber } = await params;
  const vehicle = await getUsedVehicleByStock(stockNumber);
  if (!vehicle) notFound();

  const galleryImages = vehicle.images.map((img, i) => ({
    url: img.fullImageUrl,
    alt: `${vehicle.fullTitle} - Image ${i + 1}`,
  }));

  const specs = [
    { label: 'Year', value: String(vehicle.year) },
    { label: 'Mileage', value: formatMileage(vehicle.mileage) },
    { label: 'Transmission', value: vehicle.transmission },
    { label: 'Drivetrain', value: vehicle.drivetrain },
    { label: 'Colour', value: vehicle.colour },
    { label: 'Condition', value: vehicle.condition },
    { label: 'Service History', value: vehicle.serviceHistory },
    { label: 'Stock Number', value: vehicle.stockNumber },
  ].filter((s) => s.value && s.value !== '0' && s.value !== '0 km');

  return (
    <>
      <div className="bg-suzuki-blue text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2">
          <Link href="/used" className="hover:text-white transition-colors">Used Cars</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white line-clamp-1">{vehicle.fullTitle}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Gallery + Details */}
          <div className="lg:col-span-3">
            <ImageGallery images={galleryImages} />

            <div className="mt-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary">{vehicle.fullTitle}</h1>
              <p className="text-suzuki-red font-extrabold text-3xl mt-2">{formatPrice(vehicle.priceIncl)}</p>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-text-muted">
                <span>{vehicle.year}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>{formatMileage(vehicle.mileage)}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>{vehicle.transmission}</span>
              </div>
            </div>

            {/* Specs Table */}
            <div className="mt-8">
              <h2 className="text-lg font-bold text-text-primary mb-4">Vehicle Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
                {specs.map((s, i) => (
                  <div key={s.label} className={`flex justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-sm text-text-muted">{s.label}</span>
                    <span className="text-sm font-medium text-text-primary">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extras */}
            {vehicle.extras.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-text-primary mb-4">Extras &amp; Features</h2>
                <div className="flex flex-wrap gap-2">
                  {vehicle.extras.map((extra) => (
                    <span key={extra} className="text-xs bg-gray-100 text-text-muted px-3 py-1.5 rounded-lg">
                      {extra}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Comments */}
            {vehicle.comments && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-text-primary mb-2">Description</h2>
                <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">{vehicle.comments}</p>
              </div>
            )}
          </div>

          {/* Right — Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 space-y-6">
              {/* Quick Actions */}
              <div className="bg-card rounded-xl border border-gray-100 p-5 space-y-3">
                <a
                  href={`https://wa.me/${DEALER.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${vehicle.year} ${vehicle.fullTitle} (Stock: ${vehicle.stockNumber}) listed at ${formatPrice(vehicle.priceIncl)}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp About This Car
                </a>
                <a
                  href={DEALER.phoneLink}
                  className="flex items-center justify-center gap-2 w-full bg-suzuki-blue hover:bg-suzuki-blue-light text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {DEALER.phone}
                </a>
                <Link
                  href="/finance"
                  className="flex items-center justify-center gap-2 w-full bg-suzuki-teal hover:bg-suzuki-teal-dark text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Apply for Finance
                </Link>
              </div>

              {/* Enquiry Form */}
              <div className="bg-card rounded-xl border border-gray-100 p-5">
                <h2 className="text-lg font-semibold text-text-primary mb-4">Send an Enquiry</h2>
                <EnquiryForm
                  endpoint="/api/enquiry"
                  defaultMessage={`Hi, I'm interested in the ${vehicle.year} ${vehicle.fullTitle} (Stock: ${vehicle.stockNumber}).`}
                  hiddenFields={{
                    stockNumber: vehicle.stockNumber,
                    make: vehicle.make,
                    model: vehicle.fullTitle,
                    year: String(vehicle.year),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
