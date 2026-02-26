import type { MetadataRoute } from 'next';
import { getNewCarModels } from '@/lib/new-car-feed';
import { getUsedVehicles } from '@/lib/used-car-feed';

const BASE_URL = 'https://www.durbansuzuki.co.za';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [models, usedVehicles] = await Promise.all([
    getNewCarModels(),
    getUsedVehicles().catch(() => []),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/new`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/used`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.9 },
    { url: `${BASE_URL}/test-drive`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/finance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const modelPages: MetadataRoute.Sitemap = models.map((m) => ({
    url: `${BASE_URL}/new/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const usedPages: MetadataRoute.Sitemap = usedVehicles.map((v) => ({
    url: `${BASE_URL}/used/${v.stockNumber}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticPages, ...modelPages, ...usedPages];
}
