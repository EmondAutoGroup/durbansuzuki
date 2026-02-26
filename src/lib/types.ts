// ─── New Car Types ───

export interface NewCarImage {
  type: string; // ExteriorFront, Jellybean, ExteriorRear, Interior, Lifestyle
  url: string;
}

export interface NewCarSpecs {
  engineCapacity: string;
  powerKW: string;
  torqueNM: string;
  fuelType: string;
  cylinders: string;
  transmission: string;
  drivetrain: string;
  topSpeedKMH: string;
  acceleration0to100: string;
  fuelConsumptionL100KM: string;
  co2EmissionsGKM: string;
  lengthMM: string;
  widthMM: string;
  heightMM: string;
  wheelbaseMM: string;
  bootCapacityL: string;
  kerbWeightKG: string;
  fuelTankL: string;
  groundClearanceMM: string;
  turningCircleM: string;
  airbags: string;
  abs: string;
  stabilityControl: string;
  warranty: string;
  servicePlan: string;
}

export interface NewCarVariant {
  brand: string;
  model: string;
  variant: string;
  priceIncl: number;
  priceExcl: number;
  specs: NewCarSpecs;
  images: NewCarImage[];
}

export interface NewCarModel {
  name: string;
  slug: string;
  variants: NewCarVariant[];
  startingPrice: number;
  jellybeanImage: string;
  heroImage: string;
}

// ─── Used Car Types ───

export interface VehicleImage {
  thumbnailUrl: string;
  fullImageUrl: string;
  priority: number;
}

export interface UsedVehicle {
  stockNumber: string;
  dealershipId: string;
  department: string;
  dateInStock: string;
  make: string;
  model: string;
  derivative: string;
  fullTitle: string;
  category: string;
  year: number;
  colour: string;
  mileage: number;
  transmission: string;
  drivetrain: string;
  priceExcl: number;
  priceIncl: number;
  serviceHistory: string;
  condition: string;
  comments: string;
  extras: string[];
  images: VehicleImage[];
  vin: string;
  regNo: string;
  engineNo: string;
  mmCode: string;
}

export interface FilterState {
  make: string;
  model: string;
  transmission: string;
  yearMin: string;
  yearMax: string;
  priceMin: string;
  priceMax: string;
  search: string;
}

export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'year-desc'
  | 'year-asc'
  | 'mileage-asc'
  | 'mileage-desc';

// ─── Lead / Form Types ───

export interface LeadPayload {
  DealerID: number;
  ExternalLeadID: string;
  FirstName: string;
  LastName: string;
  ContactNumber: string;
  EmailAddress?: string;
  Comments?: string;
  VehicleBrand?: string;
  Vehicle?: string;
  StockNo?: string;
  NewUsed: string;
  LeadOrigin: string;
}

export interface EnquiryFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  stockNumber?: string;
  make?: string;
  model?: string;
  year?: number;
}

export interface TestDriveFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  model: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface FinanceFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  vehicle: string;
  deposit: string;
  tradeIn: string;
  message: string;
}
