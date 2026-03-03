/**
 * Curated images from suzukiauto.co.za for each model.
 * These replace the low-quality feed XML images.
 */

const HUBFS = 'https://www.suzukiauto.co.za/hubfs';
const VEHICLES = `${HUBFS}/.1A%20-%20Site%20Assets%20CMS/Vehicles`;

export interface ModelImages {
  hero: string;
  colours: string[];
}

/** High-quality colour jellybean + hero images per model, sourced from suzukiauto.co.za */
export const SUZUKI_SA_IMAGES: Record<string, ModelImages> = {
  Jimny: {
    hero: `${VEHICLES}/Jimny/Vehicle%20Info/Jimny-Hero%201.png`,
    colours: [
      `${VEHICLES}/Jimny/Colours/Jinmy%203DR%20Kinetic%20Yellow%20%26%20Midnight%20Black%20Pearl.jpg`,
      `${VEHICLES}/Jimny/Colours/Jimny%203DR%20Chiffon%20Ivory%20%26%20Midnight%20Black%20Pearl.jpg`,
      `${VEHICLES}/Jimny/Colours/Jimny%203DR%20Brisk%20Blue%20%26%20Midnight%20Black%20Pearl.jpg`,
      `${VEHICLES}/Jimny/Colours/Jimny%203DR%20Jungle%20Green.jpg`,
      `${VEHICLES}/Jimny/Colours/Jimny%203DR%20Midnight%20Black%20Pearl.jpg`,
      `${VEHICLES}/Jimny/Colours/Jimny%203DR%20Silky%20Silver%20Metallic.jpg`,
      `${VEHICLES}/Jimny/Colours/Jimny%203DR%20Medium%20Grey.jpg`,
      `${VEHICLES}/Jimny/Colours/Jimny%203DR%20White.jpg`,
    ],
  },
  'Jimny 5-Door': {
    hero: `${VEHICLES}/Jimny/Vehicle%20Info/Jimny-Hero%201.png`,
    colours: [
      `${HUBFS}/J5D%20Thumbs3.png`,
    ],
  },
  'Grand Vitara': {
    hero: `${VEHICLES}/Grand%20Vitara/Info/Grand%20Vitara%20Banner.jpg`,
    colours: [
      `${VEHICLES}/Grand%20Vitara/Colours/SASA-GV-Arctic-White-Pearl-GV2026.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/SASA-GV-Cave-Black-Pearl-Metallic-GV2026.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/SASA-GV-Celestial-Blue-Pearl-Metallic-GV2026.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/SASA-GV-Grandeur-Grey-Pearl-Metallic-GV2026.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/SASA-GV-GV2026-Midnight-Black.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/SASA-GV-Splendid-Silver-Pearl-Metallic-GV2026.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/Opulent%20Red%20Pearl%20Metallic%20-%20GV2026.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/Arctic%20White%20Pearl%20with%20Midnight%20Black%20Pearl%20Roof%20-%20GV2026.png`,
      `${VEHICLES}/Grand%20Vitara/Colours/Opulent%20Red%20Pearl%20Metallic%20with%20Midnight%20Black%20Pearl%20Roof%20-%20GV2026.png`,
    ],
  },
  Fronx: {
    hero: `${VEHICLES}/Fronx/Info/HeroSASA-Fronx.jpeg`,
    colours: [
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-SplendidSilverPearlMetallic.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-LucentOrangePearlMetallic.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-CelestialBluePearlMetallic.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-ArcticWhitePearl.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-GrandeurGreyPearlMetallic.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-BluishBlackPearl.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-SplendidSilverPearlMetallicxBluishBlackPearl.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-LucentOrangePearlMetallicxBluishBlackPearl.png`,
      `${VEHICLES}/Fronx/Colours/SASA-Fronx-OpulentRedPearlMetallicxBluishBlackPearl.png`,
    ],
  },
  Swift: {
    hero: `${VEHICLES}/swift/Vehicle%20Info/SASA-Swift-Hero-Banner.jpeg`,
    colours: [
      `${VEHICLES}/swift/Colours/Swift%20-%20Sizzling%20Red%20Metallic.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Luster%20Blue%20Pearl.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Novel%20Orange%20Pearl.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Midnight%20Black%20Pearl.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Arctic%20White%20Pearl.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Splendid%20Silver%20Pearl.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Magma%20Grey%20Metallic.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Arctic%20White%20and%20Black%20Pearl.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Luster%20Blue%20Pearl%20and%20Black%20Pearl.png`,
      `${VEHICLES}/swift/Colours/Swift%20-%20Sizzling%20Red%20Metallic%20and%20Black%20Pearl.png`,
    ],
  },
  'Swift Sport': {
    hero: `${VEHICLES}/Swift%20Sport/Vehicle%20Info/Swift%20Sport%20Hero%20Banner.jpg`,
    colours: [
      `${VEHICLES}/Swift%20Sport/Colours/Swift%20Sport%20-%20Burning%20Red%20Pearl%20Metallic%20%26%20Super%20Black%20Pearl%20Roof.png`,
      `${VEHICLES}/Swift%20Sport/Colours/Swift%20Sport%20-%20Pearl%20Pure%20White.png`,
      `${VEHICLES}/Swift%20Sport/Colours/Swift%20Sport%20-%20Pearl%20Super%20Black.png`,
      `${VEHICLES}/Swift%20Sport/Colours/Swift%20Sport%20-%20Metallic%20Premium%20Silver.png`,
      `${VEHICLES}/Swift%20Sport/Colours/Swift%20Sport%20-%20Metallic%20Mineral%20Grey.png`,
      `${VEHICLES}/Swift%20Sport/Colours/Swift%20Sport%20-%20Flame%20Orange%20Pearl%20Metallic%20%26%20Super%20Black%20Pearl%20Roof.png`,
      `${VEHICLES}/Swift%20Sport/Colours/Swift%20Sport%20-%20Speedy%20Blue%20Metallic%20%26%20Super%20Black%20Pearl%20Roof.png`,
    ],
  },
  Baleno: {
    hero: `${VEHICLES}/Baleno/Info/SASA-Baleno-Hero1.jpg.jpeg`,
    colours: [
      `${VEHICLES}/Baleno/Colours/SASA-ArcticWhitePearl.png`,
      `${VEHICLES}/Baleno/Colours/SASA-Baleno-SplendidSilverPearlMetallic.png`,
      `${VEHICLES}/Baleno/Colours/SASA-Baleno-GrandeurGreyPearlMetallic.png`,
      `${VEHICLES}/Baleno/Colours/SASA-Baleno-OpulentRedPearlMetallic.png`,
      `${VEHICLES}/Baleno/Colours/SASA-Baleno-CelestialBluePearlMetallic.png`,
      `${VEHICLES}/Baleno/Colours/SASA-Baleno-LuxeBeigePearlMetallic.png`,
      `${VEHICLES}/Baleno/Colours/SASA-Baleno-MidnightBlackPearlMetallic.png`,
    ],
  },
  Ignis: {
    hero: `${VEHICLES}/Ignis/Info/SASA-Ignis%20Hero.jpeg`,
    colours: [
      `${VEHICLES}/Ignis/Colours/SASA-Ignis-GlisteningGreyMetallic.png`,
      `${VEHICLES}/Ignis/Colours/SASA-Ignis-ArcticWhitePearl.png`,
      `${VEHICLES}/Ignis/Colours/SASA-Ignis-SilkySilverMetallic.png`,
      `${VEHICLES}/Ignis/Colours/SASA-Ignis-MidnightBlackPearlLimited.png`,
      `${VEHICLES}/Ignis/Colours/SASA-Ignis-LucentOrangeMidnightBlackI.png`,
      `${VEHICLES}/Ignis/Colours/SASA-Ignis-StargazeBlueMidnightBlack.png`,
    ],
  },
  Ertiga: {
    hero: `${VEHICLES}/Ertiga/Vehicle%20Info/Ertiga-Hero-Desktop1.jpg`,
    colours: [
      `${HUBFS}/Ertiga%20-%20Metallic%20Magma%20Grey.png`,
      `${HUBFS}/Ertiga%20-%20Pearl%20Arctic%20White.png`,
      `${HUBFS}/Ertiga%20-%20Dignity%20Brown.png`,
      `${HUBFS}/Ertiga%20-%20Splendid%20Silver.png`,
      `${HUBFS}/Ertiga%20-%20Pearl%20Midnight%20Black.png`,
      `${HUBFS}/Ertiga%20-%20Premium%20Auburn%20Red.png`,
      `${HUBFS}/Ertiga%20-%20Premium%20Oxford%20Blue.png`,
    ],
  },
  XL6: {
    hero: `${VEHICLES}/XL6/Vehicle%20Info/XL6%20banner.jpg`,
    colours: [
      `${VEHICLES}/XL6/Colours/XL6%20-%20Arctic%20White%20Pearl.png`,
      `${VEHICLES}/XL6/Colours/XL6%20-%20Splendid%20Silver%20Pearl%20Metallic%20I3.png`,
      `${VEHICLES}/XL6/Colours/XL6%20-%20Celestial%20Blue%20Pearl%20Metallic.png`,
      `${VEHICLES}/XL6/Colours/XL6%20-%20Grandeur%20Grey%20Pearl%20Metallic.png`,
      `${VEHICLES}/XL6/Colours/XL6%20-%20Opulent%20Red%20Pearl%20Metallic.png`,
      `${VEHICLES}/XL6/Colours/XL6%20-%20Opulent%20Red%20Pearl%20Metallic%20x%20Midnight%20Black%20Pearl.png`,
    ],
  },
  'S-Presso': {
    hero: `${VEHICLES}/s-presso/Vehicle%20Info/s-presso-hero%20image.jpg`,
    colours: [
      `${VEHICLES}/s-presso/Colours/SASA-SPresso-SizzleOrange.png`,
      `${VEHICLES}/s-presso/Colours/SASA-SPresso-StarryBluePearl.png`,
      `${VEHICLES}/s-presso/Colours/SASA-SPresso-FireRed.png`,
      `${VEHICLES}/s-presso/Colours/SASA-SPresso-GraniteGreyMetallic.png`,
      `${VEHICLES}/s-presso/Colours/SASA-SPresso-SilkySilverMetallic.png`,
      `${VEHICLES}/s-presso/Colours/SASA-SPresso-White.png`,
    ],
  },
  Celerio: {
    hero: `${VEHICLES}/celerio/Vehicle%20Info/SASA-Celerio-hero.jpeg`,
    colours: [
      `${VEHICLES}/celerio/Colours/SASA-Celerio-firered.png`,
      `${VEHICLES}/celerio/Colours/SASA-Celerio-speedybluemetallic.png`,
      `${VEHICLES}/celerio/Colours/SASA-Celerio-caffeinebrownpearl.png`,
      `${VEHICLES}/celerio/Colours/SASA-Celerio-arcticwhitepearl.png`,
      `${VEHICLES}/celerio/Colours/SASA-Celerio-silkysilvermetallic.png`,
      `${VEHICLES}/celerio/Colours/SASA-Celerio-glisteninggreymetallic.png`,
      `${VEHICLES}/celerio/Colours/SASA-Celerio-midnightblackpearl.png`,
    ],
  },
  Dzire: {
    hero: `${HUBFS}/strikeaposestudios.co.za-17%20%281%29.jpg`,
    colours: [
      `${HUBFS}/Dzire%20-%20Alluring%20Blue%20Pearl%20Metallic.png`,
      `${HUBFS}/Dzire%20-%20Gallant%20Red%20Pearl%20Metallic.png`,
      `${HUBFS}/Dzire%20-%20Nutmeg%20Brown%20Pearl%20MetallicI3.png`,
      `${HUBFS}/Dzire%20-%20Arctic%20White%20Pearl.png`,
      `${HUBFS}/Dzire%20-%20Splendid%20Silver%20Pearl%20Metallic.png`,
      `${HUBFS}/Dzire%20-%20Magma%20Grey%20Metallic.png`,
      `${HUBFS}/Dzire%20-%20Bluish%20Black%20Pearl.png`,
    ],
  },
  'Super Carry': {
    hero: `${HUBFS}/Super-Carry1.jpg`,
    colours: [
      `${HUBFS}/Super%20Carry%20Thumbs3.png`,
    ],
  },
  Eeco: {
    hero: `${HUBFS}/Eeco%20Thumbs-1.png`,
    colours: [
      `${HUBFS}/Eeco%20Thumbs-1.png`,
    ],
  },
};
