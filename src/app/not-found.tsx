import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-extrabold text-suzuki-blue mb-4">404</h1>
      <h2 className="text-2xl font-bold text-text-primary mb-2">Page Not Found</h2>
      <p className="text-text-muted mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="bg-suzuki-red hover:bg-suzuki-red-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/new"
          className="bg-suzuki-blue hover:bg-suzuki-blue-light text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          Browse New Cars
        </Link>
        <Link
          href="/used"
          className="bg-white border border-gray-200 hover:bg-gray-50 text-text-primary font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          View Used Cars
        </Link>
      </div>
    </div>
  );
}
