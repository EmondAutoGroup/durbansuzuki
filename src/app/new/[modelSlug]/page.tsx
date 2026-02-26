import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewCarModels, getNewCarModelBySlug } from '@/lib/new-car-feed';
import { formatPrice } from '@/lib/utils';
import { DEALER } from '@/lib/constants';
import { NewCarSpecs } from '@/lib/types';
import ImageGallery from '@/components/vehicle-detail/ImageGallery';
import EnquiryForm from '@/components/vehicle-detail/EnquiryForm';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ modelSlug: string }>;
}

export async function generateStaticParams() {
  const models = await getNewCarModels();
  return models.map((m) => ({ modelSlug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { modelSlug } = await params;
  const model = await getNewCarModelBySlug(modelSlug);
  if (!model) return {};
  return {
    title: `New Suzuki ${model.name}`,
    description: `Explore the Suzuki ${model.name} range. ${model.variants.length} variants from ${formatPrice(model.startingPrice)}. View specs, gallery and enquire at Suzuki Durban.`,
  };
}

const SPEC_LABELS: { key: keyof NewCarSpecs; label: string }[] = [
  { key: 'engineCapacity', label: 'Engine Capacity' },
  { key: 'powerKW', label: 'Power (kW)' },
  { key: 'torqueNM', label: 'Torque (Nm)' },
  { key: 'fuelType', label: 'Fuel Type' },
  { key: 'cylinders', label: 'Cylinders' },
  { key: 'transmission', label: 'Transmission' },
  { key: 'drivetrain', label: 'Drivetrain' },
  { key: 'topSpeedKMH', label: 'Top Speed (km/h)' },
  { key: 'acceleration0to100', label: '0-100 km/h' },
  { key: 'fuelConsumptionL100KM', label: 'Fuel Consumption (L/100km)' },
  { key: 'co2EmissionsGKM', label: 'CO2 Emissions (g/km)' },
  { key: 'lengthMM', label: 'Length' },
  { key: 'widthMM', label: 'Width' },
  { key: 'heightMM', label: 'Height' },
  { key: 'wheelbaseMM', label: 'Wheelbase' },
  { key: 'bootCapacityL', label: 'Boot Capacity (L)' },
  { key: 'kerbWeightKG', label: 'Kerb Weight (kg)' },
  { key: 'fuelTankL', label: 'Fuel Tank (L)' },
  { key: 'groundClearanceMM', label: 'Ground Clearance' },
  { key: 'turningCircleM', label: 'Turning Circle (m)' },
  { key: 'airbags', label: 'Airbags' },
  { key: 'abs', label: 'ABS' },
  { key: 'stabilityControl', label: 'Stability Control' },
  { key: 'warranty', label: 'Warranty' },
  { key: 'servicePlan', label: 'Service Plan' },
];

export default async function ModelDetailPage({ params }: PageProps) {
  const { modelSlug } = await params;
  const model = await getNewCarModelBySlug(modelSlug);
  if (!model) notFound();

  const firstVariant = model.variants[0];
  const galleryImages = firstVariant.images.map((img) => ({
    url: img.url,
    alt: `Suzuki ${model.name} - ${img.type}`,
  }));

  // Filter to only specs that have at least one non-empty value across variants
  const visibleSpecs = SPEC_LABELS.filter((spec) =>
    model.variants.some((v) => v.specs[spec.key])
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-suzuki-blue text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2">
          <Link href="/new" className="hover:text-white transition-colors">New Cars</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white">Suzuki {model.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Gallery */}
          <div className="lg:col-span-3">
            <ImageGallery images={galleryImages} />

            <div className="mt-6">
              <h1 className="text-3xl font-extrabold text-text-primary">Suzuki {model.name}</h1>
              <p className="text-suzuki-red font-extrabold text-2xl mt-2">
                From {formatPrice(model.startingPrice)}
              </p>
              <p className="text-text-muted mt-2">
                {model.variants.length} variant{model.variants.length !== 1 ? 's' : ''} available
              </p>
            </div>

            {/* Variant Comparison Table */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-text-primary mb-4">Variant Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-suzuki-blue text-white">
                      <th className="text-left px-4 py-3 font-semibold sticky left-0 bg-suzuki-blue z-10 min-w-[160px]">Spec</th>
                      {model.variants.map((v) => (
                        <th key={v.variant} className="text-left px-4 py-3 font-semibold min-w-[180px]">
                          {v.variant}
                          <div className="text-suzuki-teal font-bold mt-0.5">{formatPrice(v.priceIncl)}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visibleSpecs.map((spec, i) => (
                      <tr key={spec.key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-2.5 font-medium text-text-muted sticky left-0 z-10" style={{ backgroundColor: i % 2 === 0 ? '#f9fafb' : '#ffffff' }}>
                          {spec.label}
                        </td>
                        {model.variants.map((v) => (
                          <td key={v.variant} className="px-4 py-2.5 text-text-primary">
                            {v.specs[spec.key] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right — Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 space-y-6">
              {/* Quick Actions */}
              <div className="bg-card rounded-xl border border-gray-100 p-5 space-y-3">
                <Link
                  href="/test-drive"
                  className="flex items-center justify-center gap-2 w-full bg-suzuki-red hover:bg-suzuki-red-dark text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Book a Test Drive
                </Link>
                <a
                  href={`https://wa.me/${DEALER.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the new Suzuki ${model.name}. Can you tell me more?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href={DEALER.phoneLink}
                  className="flex items-center justify-center gap-2 w-full bg-suzuki-blue hover:bg-suzuki-blue-light text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {DEALER.phone}
                </a>
              </div>

              {/* Enquiry Form */}
              <div className="bg-card rounded-xl border border-gray-100 p-5">
                <h2 className="text-lg font-semibold text-text-primary mb-4">Enquire About This Model</h2>
                <EnquiryForm
                  endpoint="/api/new-car-enquiry"
                  defaultMessage={`Hi, I'm interested in the new Suzuki ${model.name}. Please send me more information.`}
                  hiddenFields={{ model: model.name }}
                  submitLabel="Send Enquiry"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
