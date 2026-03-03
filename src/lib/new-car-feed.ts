import { parseStringPromise } from 'xml2js';
import { NewCarVariant, NewCarImage, NewCarSpecs, NewCarModel } from './types';
import { slugify } from './utils';
import { MODEL_ORDER } from './constants';
import { SUZUKI_SA_IMAGES } from './suzuki-images';
import fs from 'fs';
import path from 'path';

function getText(node: unknown): string {
  if (!node) return '';
  if (Array.isArray(node)) return String(node[0] || '').trim();
  return String(node).trim();
}

function parseSpecs(raw: Record<string, unknown>): NewCarSpecs {
  return {
    engineCapacity: getText(raw.EngineCapacity),
    powerKW: getText(raw.PowerKW),
    torqueNM: getText(raw.TorqueNM),
    fuelType: getText(raw.FuelType),
    cylinders: getText(raw.Cylinders),
    transmission: getText(raw.Transmission),
    drivetrain: getText(raw.Drivetrain),
    topSpeedKMH: getText(raw.TopSpeedKMH),
    acceleration0to100: getText(raw.Acceleration0to100),
    fuelConsumptionL100KM: getText(raw.FuelConsumptionL100KM),
    co2EmissionsGKM: getText(raw.CO2EmissionsGKM),
    lengthMM: getText(raw.LengthMM),
    widthMM: getText(raw.WidthMM),
    heightMM: getText(raw.HeightMM),
    wheelbaseMM: getText(raw.WheelbaseMM),
    bootCapacityL: getText(raw.BootCapacityL),
    kerbWeightKG: getText(raw.KerbWeightKG),
    fuelTankL: getText(raw.FuelTankL),
    groundClearanceMM: getText(raw.GroundClearanceMM),
    turningCircleM: getText(raw.TurningCircleM),
    airbags: getText(raw.Airbags),
    abs: getText(raw.ABS),
    stabilityControl: getText(raw.StabilityControl),
    warranty: getText(raw.Warranty),
    servicePlan: getText(raw.ServicePlan),
  };
}

function parseImages(imagesNode: unknown): NewCarImage[] {
  if (!imagesNode) return [];
  const raw = imagesNode as { Image?: unknown };
  if (!raw.Image) return [];
  const images = Array.isArray(raw.Image) ? raw.Image : [raw.Image];

  return images.map((img) => {
    if (typeof img === 'object' && img !== null && '$' in img) {
      const attrs = (img as { $: { type?: string }; _?: string });
      return {
        type: attrs.$.type || '',
        url: (attrs._ || '').trim(),
      };
    }
    return { type: '', url: String(img || '').trim() };
  }).filter((img) => img.url);
}

function parseVariant(raw: Record<string, unknown>): NewCarVariant {
  const specsRaw = Array.isArray(raw.Specifications)
    ? (raw.Specifications[0] as Record<string, unknown>)
    : (raw.Specifications as Record<string, unknown>) || {};
  const imagesRaw = Array.isArray(raw.Images) ? raw.Images[0] : raw.Images;

  return {
    brand: getText(raw.Brand),
    model: getText(raw.Model),
    variant: getText(raw.Variant),
    priceIncl: parseInt(getText(raw.PriceIncl), 10) || 0,
    priceExcl: parseInt(getText(raw.PriceExcl), 10) || 0,
    specs: parseSpecs(specsRaw),
    images: parseImages(imagesRaw),
  };
}

async function fetchFeedXml(): Promise<string> {
  const feedUrl = process.env.NEW_CAR_FEED_URL;
  if (feedUrl && feedUrl.startsWith('http')) {
    const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
    return res.text();
  }
  // Fall back to local file
  const localPath = path.join(process.cwd(), 'public', 'feeds', 'suzuki_feed.xml');
  return fs.readFileSync(localPath, 'utf-8');
}

export async function getNewCarVariants(): Promise<NewCarVariant[]> {
  const xml = await fetchFeedXml();
  const parsed = await parseStringPromise(xml);
  const root = parsed.VehicleFeed;
  if (!root?.Brand) return [];

  const brands = Array.isArray(root.Brand) ? root.Brand : [root.Brand];
  const allVariants: NewCarVariant[] = [];

  for (const brand of brands) {
    const vehicles = brand.Vehicle;
    if (!vehicles) continue;
    const items = Array.isArray(vehicles) ? vehicles : [vehicles];
    for (const v of items) {
      allVariants.push(parseVariant(v as Record<string, unknown>));
    }
  }

  return allVariants.filter((v) => v.priceIncl > 0);
}

export async function getNewCarModels(): Promise<NewCarModel[]> {
  const variants = await getNewCarVariants();
  const grouped = new Map<string, NewCarVariant[]>();

  for (const v of variants) {
    const existing = grouped.get(v.model) || [];
    existing.push(v);
    grouped.set(v.model, existing);
  }

  const models: NewCarModel[] = [];

  for (const [name, modelVariants] of grouped) {
    const sorted = [...modelVariants].sort((a, b) => a.priceIncl - b.priceIncl);

    // Use curated Suzuki SA images instead of feed XML images
    const saImages = SUZUKI_SA_IMAGES[name];
    const jellybean = saImages?.colours[0] || sorted[0]?.images.find((i) => i.type === 'Jellybean')?.url || sorted[0]?.images[0]?.url || '';
    const hero = saImages?.hero || jellybean;

    // Override variant images with Suzuki SA colour gallery
    if (saImages) {
      const colourImages = saImages.colours.map((url, i) => ({
        type: i === 0 ? 'Jellybean' : `Colour${i}`,
        url,
      }));
      // Add hero as first image
      const allImages = [
        { type: 'Hero', url: saImages.hero },
        ...colourImages,
      ];
      for (const variant of sorted) {
        variant.images = allImages;
      }
    }

    models.push({
      name,
      slug: slugify(name),
      variants: sorted,
      startingPrice: sorted[0]?.priceIncl || 0,
      jellybeanImage: jellybean,
      heroImage: hero,
    });
  }

  // Sort by MODEL_ORDER
  const orderMap = new Map<string, number>(MODEL_ORDER.map((m, i) => [m, i]));
  models.sort((a, b) => {
    const oa = orderMap.get(a.name) ?? 99;
    const ob = orderMap.get(b.name) ?? 99;
    return oa - ob;
  });

  return models;
}

export async function getNewCarModelBySlug(slug: string): Promise<NewCarModel | undefined> {
  const models = await getNewCarModels();
  return models.find((m) => m.slug === slug);
}
