import type { Metadata } from 'next';
import { getNewCarModels } from '@/lib/new-car-feed';
import TestDriveForm from '@/components/forms/TestDriveForm';
import { DEALER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book a Test Drive',
  description: 'Book a test drive at Suzuki Durban. Experience the Jimny, Grand Vitara, Swift, Fronx or any model in our range.',
};

export default async function TestDrivePage() {
  const models = await getNewCarModels();
  const modelNames = models.map((m) => m.name);

  return (
    <>
      <section className="bg-suzuki-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2">Experience Suzuki</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">Book a Test Drive</h1>
          <p className="text-white/60 mt-2 max-w-lg">
            Nothing beats getting behind the wheel. Pick your model, choose a time, and we&apos;ll have it ready for you.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-card rounded-2xl border border-gray-100 p-8">
          <TestDriveForm modelNames={modelNames} />
        </div>

        <div className="mt-10 text-center text-text-muted text-sm">
          <p>Prefer to call? Reach us at <a href={DEALER.phoneLink} className="text-suzuki-blue font-semibold hover:text-suzuki-red">{DEALER.phone}</a></p>
        </div>
      </div>
    </>
  );
}
