// ─── Types ───────────────────────────────────────────────────────────────────

export type EICRPropertySize =
  | "studio"
  | "1-3bed"
  | "4bed"
  | "5bed"
  | "6bed"
  | "7bed"
  | "8bed";

export type EPCPropertySize = "studio" | "1-3bed" | "4bed" | "5bed";

export type FRAPropertyType =
  | "studio"
  | "communal-1-3floors"
  | "communal-3-6floors"
  | "1-3bed"
  | "4bed"
  | "5bed"
  | "6bed"
  | "7bed"
  | "8bed";

export type ServiceType =
  | "eicr"
  | "commercial-eicr"
  | "electrical-diagnostic"
  | "fuse-box"
  | "elc"
  | "pat"
  | "gas-safety-cp12"
  | "gas-safety-cp42"
  | "boiler-installation"
  | "fire-safety-cert"
  | "fire-alarm-panels"
  | "fra-residential"
  | "fra-commercial"
  | "fire-risk-assessment"
  | "fire-alarm-installation"
  | "fire-door-cert"
  | "fire-extinguisher"
  | "asbestos-survey"
  | "epc"
  | "commercial-epc"
  | "legionella-risk-assessment";

/** Pass to calculateBundlePrice — price should be the specific variant price for that booking */
export type ServiceSelection = {
  service: ServiceType;
  price: number;
};

/** A single row for the PriceTable component */
export type PriceRow = {
  label: string;
  price: number;
};

// ─── Domestic EICR ───────────────────────────────────────────────────────────

export const DOMESTIC_EICR_PRICES = {
  studio: 67.99,
  "1-3bed": 94.99,
  "4bed": 104.99,
  "5bed": 139.99,
  "6bed": 159.99,
  "7bed": 179.99,
  "8bed": 199.99,
} as const satisfies Record<EICRPropertySize, number>;

export const DOMESTIC_EICR_TABLE: readonly PriceRow[] = [
  { label: "Studio Apartment", price: 67.99 },
  { label: "1–3 Bedrooms", price: 94.99 },
  { label: "4 Bedrooms", price: 104.99 },
  { label: "5 Bedrooms", price: 139.99 },
  { label: "6 Bedrooms", price: 159.99 },
  { label: "7 Bedrooms", price: 179.99 },
  { label: "8 Bedrooms", price: 199.99 },
];

/** Per additional consumer unit beyond the property's standard EICR — common in HMOs and converted flats. */
export const EICR_ADDITIONAL_CU_PRICE = 49.99;

// ─── Commercial EICR ─────────────────────────────────────────────────────────

export const COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE = 10;

export const COMMERCIAL_EICR_TABLE: readonly PriceRow[] = [
  { label: "1 Consumer Unit (up to 12 circuits, +£10 per additional circuit)", price: 149.99 },
  { label: "2 Consumer Units", price: 279.99 },
  { label: "3 Consumer Units", price: 419.99 },
  { label: "4 Consumer Units", price: 549.99 },
  { label: "5 Consumer Units", price: 709.99 },
  { label: "6 Consumer Units", price: 849.99 },
  { label: "7 Consumer Units", price: 999.99 },
  { label: "8 Consumer Units", price: 1149.99 },
];

// ─── Electrical Diagnostic ───────────────────────────────────────────────────

export const ELECTRICAL_DIAGNOSTIC_HOURLY_RATE = 99.99;

// ─── Fuse Box Installation ───────────────────────────────────────────────────

export const FUSE_BOX_TABLE: readonly PriceRow[] = [
  { label: "6 Way Consumer Unit", price: 599.99 },
  { label: "6–10 Way Consumer Unit", price: 699.99 },
  { label: "10–15 Way Consumer Unit", price: 859.99 },
  { label: "15–20 Way Consumer Unit", price: 1079.99 },
  { label: "Double Decker Consumer Unit", price: 1149.99 },
  { label: "Skeleton Board", price: 979.99 },
];

// ─── ELC (Emergency Lights Certificate) ──────────────────────────────────────

export const ELC_INSTALLATION_PER_LIGHT = 219.99;

export const ELC_TABLE: readonly PriceRow[] = [
  { label: "Up to 3 Emergency Lights", price: 54.99 },
  { label: "3–6 Emergency Lights", price: 89.99 },
  { label: "6–9 Emergency Lights", price: 124.99 },
  { label: "9–12 Emergency Lights", price: 159.99 },
  { label: "12–15 Emergency Lights", price: 194.99 },
  { label: "15–18 Emergency Lights", price: 229.99 },
  { label: "18–21 Emergency Lights", price: 264.99 },
];

// ─── PAT Testing ─────────────────────────────────────────────────────────────

export const PAT_TABLE: readonly PriceRow[] = [
  { label: "Up to 10 Appliances", price: 59.99 },
  { label: "10–15 Appliances", price: 69.99 },
  { label: "15–20 Appliances", price: 79.99 },
  { label: "20–25 Appliances", price: 99.99 },
  { label: "25–30 Appliances", price: 129.99 },
  { label: "30–35 Appliances", price: 169.99 },
  { label: "35–40 Appliances", price: 199.99 },
  { label: "40–45 Appliances", price: 229.99 },
  { label: "45–50 Appliances", price: 259.99 },
];

// ─── Gas Safety (CP12 — Domestic) ────────────────────────────────────────────

export const GAS_SAFETY_CP12_PRICES = {
  "Up to 2 Appliances (excl. boiler)": 64.99,
  "3 Appliances": 74.99,
  "Boiler Check + Service": 84.99,
} as const;

export const GAS_SAFETY_CP12_TABLE: readonly PriceRow[] = [
  { label: "Up to 2 Appliances (excl. boiler)", price: GAS_SAFETY_CP12_PRICES["Up to 2 Appliances (excl. boiler)"] },
  { label: "3 Appliances", price: GAS_SAFETY_CP12_PRICES["3 Appliances"] },
  { label: "Boiler Check + Service", price: GAS_SAFETY_CP12_PRICES["Boiler Check + Service"] },
];

// ─── Gas Safety (CP42 — Commercial) ──────────────────────────────────────────

export const GAS_SAFETY_CP42_TABLE: readonly PriceRow[] = [
  { label: "1 Gas Appliance (CP42)", price: 159.99 },
  { label: "2 Gas Appliances (CP42)", price: 259.99 },
  { label: "3 Gas Appliances (CP42)", price: 359.99 },
  { label: "4 Gas Appliances (CP42)", price: 459.99 },
  { label: "5 Gas Appliances (CP42)", price: 509.99 },
  { label: "6 Gas Appliances (CP42)", price: 559.99 },
  { label: "7 Gas Appliances (CP42)", price: 609.99 },
  { label: "8 Gas Appliances (CP42)", price: 659.99 },
];

// ─── Boiler Installation ─────────────────────────────────────────────────────

export const BOILER_INSTALLATION_FROM = 2499;

// ─── Fire Safety Certificate ──────────────────────────────────────────────────

export const FIRE_SAFETY_CERT_TABLE: readonly PriceRow[] = [
  { label: "Up to 3 Smoke/Heat Alarms", price: 54.99 },
  { label: "3–6 Alarms", price: 89.99 },
  { label: "6–9 Alarms", price: 124.99 },
  { label: "9–12 Alarms", price: 159.99 },
  { label: "12–15 Alarms", price: 194.99 },
  { label: "15–18 Alarms", price: 229.99 },
  { label: "18–21 Alarms", price: 264.99 },
];

// ─── Fire Alarm Panels ────────────────────────────────────────────────────────

export const FIRE_ALARM_PANELS_TABLE: readonly PriceRow[] = [
  { label: "Up to 3 Smoke/Heat Alarms", price: 74.99 },
  { label: "3–6 Alarms", price: 109.99 },
  { label: "6–9 Alarms", price: 144.99 },
  { label: "9–12 Alarms", price: 179.99 },
  { label: "12–15 Alarms", price: 214.99 },
  { label: "15–18 Alarms", price: 229.99 },
  { label: "18–21 Alarms", price: 264.99 },
];

// ─── FRA — Residential ───────────────────────────────────────────────────────

export const FRA_RESIDENTIAL_TABLE: readonly PriceRow[] = [
  { label: "Studio Apartment", price: 74.99 },
  { label: "Communal Area (1–3 Floors)", price: 129.99 },
  { label: "Communal Area (3–6 Floors)", price: 149.99 },
  { label: "1–3 Bedrooms", price: 139.99 },
  { label: "Up to 4 Bedrooms", price: 179.99 },
  { label: "Up to 5 Bedrooms", price: 189.99 },
  { label: "Up to 6 Bedrooms", price: 249.99 },
  { label: "Up to 7 Bedrooms", price: 299.99 },
  { label: "Up to 8 Bedrooms", price: 349.99 },
];

// ─── FRA — Commercial ────────────────────────────────────────────────────────

export const FRA_COMMERCIAL_TABLE: readonly PriceRow[] = [
  { label: "Communal Area — Up to 3 Floors", price: 149.99 },
  { label: "Communal Area — 3–5 Floors", price: 189.99 },
  { label: "Communal Area — 5–10 Floors", price: 279.99 },
  { label: "Commercial Building — 1–3 Floors", price: 249.99 },
  { label: "Commercial Building — 3–5 Floors", price: 369.99 },
  { label: "Commercial Building — 5–8 Floors", price: 459.99 },
  { label: "Commercial Building — 8–12 Floors", price: 539.99 },
];

// ─── Fire Alarm Installation ──────────────────────────────────────────────────

export const FIRE_ALARM_INSTALLATION_PER_ALARM = 209.99;
export const FIRE_ALARM_INSTALLATION_FULL_SYSTEM = 3499;

// ─── Fire Door Certificate ────────────────────────────────────────────────────

export const FIRE_DOOR_PRICES = {
  "1-3 doors": 129.99,
  "4 doors": 169.99,
  "5 doors": 209.99,
  "6 doors": 239.99,
  "Fire Door Certificate": 119.99,
  "FD30 New Installation": 800,
  "FD60 New Installation": 1200,
  "Fire Rated Fixing": 350,
} as const;

export const FIRE_DOOR_TABLE: readonly PriceRow[] = [
  { label: "1–3 Fire Doors", price: 129.99 },
  { label: "4 Fire Doors", price: 169.99 },
  { label: "5 Fire Doors", price: 209.99 },
  { label: "6 Fire Doors", price: 239.99 },
];

export const FIRE_DOOR_CERT_PRICE = FIRE_DOOR_PRICES["1-3 doors"];

// ─── Fire Extinguisher Testing ────────────────────────────────────────────────

export const FIRE_EXTINGUISHER_TABLE: readonly PriceRow[] = [
  { label: "1–3 Extinguishers", price: 79.99 },
  { label: "3–6 Extinguishers", price: 99.99 },
  { label: "6–10 Extinguishers", price: 134.99 },
  { label: "10–15 Extinguishers", price: 174.99 },
  { label: "15–20 Extinguishers", price: 204.99 },
];

export const FIRE_EXTINGUISHER_SUPPLY_PRICES = {
  "New Fire Extinguisher Installation": 174.99,
  "Fire Blanket": 149.99,
} as const;

// ─── Asbestos Survey (Management Survey) ─────────────────────────────────────

export const ASBESTOS_SURVEY_TABLE: readonly PriceRow[] = [
  { label: "1 Sample", price: 239.99 },
  { label: "2 Samples", price: 279.99 },
  { label: "3 Samples", price: 299.99 },
  { label: "4 Samples", price: 339.99 },
  { label: "5 Samples", price: 379.99 },
  { label: "6 Samples", price: 405.99 },
];

// ─── Legionella Risk Assessment ──────────────────────────────────────────────

export const LEGIONELLA_PRICES = {
  standard: 299.99,
} as const;

// ─── Domestic EPC ─────────────────────────────────────────────────────────────

export const DOMESTIC_EPC_PRICES = {
  studio: 89.99,
  "1-3bed": 109.99,
  "4bed": 129.99,
  "5bed": 149.99,
} as const satisfies Record<EPCPropertySize, number>;

export const DOMESTIC_EPC_TABLE: readonly PriceRow[] = [
  { label: "Studio Apartment", price: 89.99 },
  { label: "1–3 Bedrooms", price: 109.99 },
  { label: "4 Bedrooms", price: 129.99 },
  { label: "5 Bedrooms", price: 149.99 },
];

// ─── Commercial EPC ───────────────────────────────────────────────────────────

export const COMMERCIAL_EPC_TABLE: readonly PriceRow[] = [
  { label: "Up to 50m²", price: 249.99 },
  { label: "50m² – 100m²", price: 320 },
  { label: "100m² – 250m²", price: 399 },
  { label: "250m² – 350m²", price: 499 },
  { label: "350m² – 450m²", price: 599 },
  { label: "450m² – 550m²", price: 699 },
  { label: "550m² – 650m²", price: 799 },
  { label: "650m² – 750m²", price: 899 },
  { label: "750m² – 850m²", price: 999 },
];

// ─── Additional Charges ───────────────────────────────────────────────────────

export const ADDITIONAL_CHARGES = {
  parking: 10,
  congestionZone: 20,
} as const;

/**
 * M25 corridor (Surrey, Kent, Essex, Hertfordshire and other towns within/
 * bordering the M25 but outside the 33 London boroughs) is covered, but at a
 * higher price than the standard London rate. The surcharge varies by exact
 * location, so this is a "from" figure, not a fixed add-on.
 */
export const M25_CORRIDOR_CHARGE_FROM = 30;

/**
 * Booking-form HMO bundle discount: 10% off the order total (services +
 * additional charges) when all four required HMO certificates are selected
 * together. Applied automatically — no code needed.
 */
export const HMO_BUNDLE_DISCOUNT = 0.10;

export const HMO_REQUIRED_SERVICES = [
  "eicr",
  "gas-safety-cp12",
  "fire-risk-assessment",
  "fire-safety-cert",
] as const;

// ─── FROM_PRICES — used in hero sections and meta titles ──────────────────────

export const FROM_PRICES: Record<ServiceType, string> = {
  eicr: "from £67.99",
  "commercial-eicr": "from £149.99",
  "electrical-diagnostic": "from £99.99/hr",
  "fuse-box": "from £599.99",
  elc: "from £54.99",
  pat: "from £59.99",
  "gas-safety-cp12": "from £64.99",
  "gas-safety-cp42": "from £159.99",
  "boiler-installation": "from £2,499",
  "fire-safety-cert": "from £54.99",
  "fire-alarm-panels": "from £74.99",
  "fra-residential": "from £74.99",
  "fra-commercial": "from £149.99",
  "fire-risk-assessment": "from £74.99",
  "fire-alarm-installation": "from £209.99/alarm",
  "fire-door-cert": "from £129.99",
  "fire-extinguisher": "from £79.99",
  "asbestos-survey": "from £239.99",
  epc: "from £89.99",
  "commercial-epc": "from £249.99",
  "legionella-risk-assessment": "from £299.99",
};

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getPriceForEICR(propertySize: EICRPropertySize): number {
  return DOMESTIC_EICR_PRICES[propertySize];
}

/**
 * Returns the CP12 domestic gas safety certificate price for a given appliance count
 * (excluding boiler check + service, which is its own tier — see GAS_SAFETY_CP12_PRICES).
 * Up to 2 appliances share a tier. For commercial use getPriceForGasSafetyCP42().
 */
export function getPriceForGasSafety(applianceCount: number): number {
  if (applianceCount <= 2) return GAS_SAFETY_CP12_PRICES["Up to 2 Appliances (excl. boiler)"];
  return GAS_SAFETY_CP12_PRICES["3 Appliances"];
}

export function getPriceForEPC(propertySize: EPCPropertySize): number {
  return DOMESTIC_EPC_PRICES[propertySize];
}

export function getPriceForPAT(applianceCount: number): number {
  if (applianceCount <= 10) return 59.99;
  if (applianceCount <= 15) return 69.99;
  if (applianceCount <= 20) return 79.99;
  if (applianceCount <= 25) return 99.99;
  if (applianceCount <= 30) return 129.99;
  if (applianceCount <= 35) return 169.99;
  if (applianceCount <= 40) return 199.99;
  if (applianceCount <= 45) return 229.99;
  return 259.99;
}

export function getPriceForFRA(propertyType: FRAPropertyType): number {
  const prices: Record<FRAPropertyType, number> = {
    studio: 74.99,
    "communal-1-3floors": 129.99,
    "communal-3-6floors": 149.99,
    "1-3bed": 139.99,
    "4bed": 179.99,
    "5bed": 189.99,
    "6bed": 249.99,
    "7bed": 299.99,
    "8bed": 349.99,
  };
  return prices[propertyType];
}

export function getPriceForFireSafetyCert(alarmCount: number): number {
  if (alarmCount <= 3) return 54.99;
  if (alarmCount <= 6) return 89.99;
  if (alarmCount <= 9) return 124.99;
  if (alarmCount <= 12) return 159.99;
  if (alarmCount <= 15) return 194.99;
  if (alarmCount <= 18) return 229.99;
  return 264.99;
}

export function getPriceForAsbestosSurvey(sampleCount: number): number {
  if (sampleCount <= 1) return 239.99;
  if (sampleCount <= 2) return 279.99;
  if (sampleCount <= 3) return 299.99;
  if (sampleCount <= 4) return 339.99;
  if (sampleCount <= 5) return 379.99;
  return 405.99;
}

export function calculateBundlePrice(services: ServiceSelection[]): {
  subtotal: number;
  discount: number;
  total: number;
} {
  const subtotal = round2(services.reduce((sum, s) => sum + s.price, 0));
  return { subtotal, discount: 0, total: subtotal };
}

export function getEntryPrice(service: ServiceType): string {
  return FROM_PRICES[service];
}

/** True once all 4 required HMO certificates are present among the selected service types. */
export function isHmoBundleActive(selectedServiceTypes: readonly string[]): boolean {
  return HMO_REQUIRED_SERVICES.every((required) => selectedServiceTypes.includes(required));
}

/**
 * 10% HMO bundle discount on the full order total (services + additional
 * charges), applied only when isHmoBundleActive is true. Returns 0 otherwise.
 */
export function calculateHmoDiscount(
  baseTotal: number,
  selectedServiceTypes: readonly string[],
): number {
  return isHmoBundleActive(selectedServiceTypes) ? round2(baseTotal * HMO_BUNDLE_DISCOUNT) : 0;
}

// ─── Internal ─────────────────────────────────────────────────────────────────

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
