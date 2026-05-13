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
  | "fire-alarm-installation"
  | "fire-door-cert"
  | "fire-extinguisher"
  | "asbestos-survey"
  | "epc"
  | "commercial-epc";

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

// ─── Commercial EICR ─────────────────────────────────────────────────────────

export const COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE = 25;

export const COMMERCIAL_EICR_TABLE: readonly PriceRow[] = [
  { label: "1 Consumer Unit (up to 10 circuits)", price: 149.99 },
  { label: "2 Consumer Units", price: 279.99 },
  { label: "3 Consumer Units", price: 418.99 },
  { label: "4 Consumer Units", price: 548.99 },
  { label: "5 Consumer Units", price: 705.99 },
  { label: "6 Consumer Units", price: 849.99 },
  { label: "7 Consumer Units", price: 998.99 },
  { label: "8 Consumer Units", price: 1155.99 },
];

// ─── Electrical Diagnostic ───────────────────────────────────────────────────

export const ELECTRICAL_DIAGNOSTIC_HOURLY_RATE = 89.99;

// ─── Fuse Box Installation ───────────────────────────────────────────────────

export const FUSE_BOX_TABLE: readonly PriceRow[] = [
  { label: "6 Way Consumer Unit", price: 600 },
  { label: "6–10 Way Consumer Unit", price: 700 },
  { label: "10–15 Way Consumer Unit", price: 860 },
  { label: "15–20 Way Consumer Unit", price: 1080 },
  { label: "Double Decker Consumer Unit", price: 1150 },
  { label: "Skeleton Board", price: 980 },
];

// ─── ELC (Emergency Lights Certificate) ──────────────────────────────────────

export const ELC_TABLE: readonly PriceRow[] = [
  { label: "Up to 3 Emergency Lights", price: 55 },
  { label: "3–6 Emergency Lights", price: 90 },
  { label: "6–9 Emergency Lights", price: 125 },
  { label: "9–12 Emergency Lights", price: 160 },
  { label: "12–15 Emergency Lights", price: 195 },
  { label: "15–18 Emergency Lights", price: 230 },
  { label: "18–21 Emergency Lights", price: 265 },
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

export const GAS_SAFETY_CP12_TABLE: readonly PriceRow[] = [
  { label: "Gas Safety Meter Only (no certificate)", price: 20 },
  { label: "Gas Meter Only — No Appliance", price: 40 },
  { label: "1 Gas Appliance (CP12)", price: 50 },
  { label: "2 Gas Appliances (CP12)", price: 60 },
  { label: "3 Gas Appliances (CP12)", price: 70 },
  { label: "Gas Safety + Boiler Service (CP12)", price: 84.99 },
];

// ─── Gas Safety (CP42 — Commercial) ──────────────────────────────────────────

export const GAS_SAFETY_CP42_TABLE: readonly PriceRow[] = [
  { label: "1 Gas Appliance (CP42)", price: 159.99 },
  { label: "2 Gas Appliances (CP42)", price: 199.99 },
  { label: "3 Gas Appliances (CP42)", price: 239.99 },
  { label: "4 Gas Appliances (CP42)", price: 299.99 },
  { label: "5 Gas Appliances (CP42)", price: 339.99 },
  { label: "6 Gas Appliances (CP42)", price: 399.99 },
  { label: "7 Gas Appliances (CP42)", price: 439.99 },
  { label: "8 Gas Appliances (CP42)", price: 499.99 },
];

// ─── Boiler Installation ─────────────────────────────────────────────────────

export const BOILER_INSTALLATION_FROM = 2499;

// ─── Fire Safety Certificate ──────────────────────────────────────────────────

export const FIRE_SAFETY_CERT_TABLE: readonly PriceRow[] = [
  { label: "Up to 3 Smoke/Heat Alarms", price: 55 },
  { label: "3–6 Alarms", price: 90 },
  { label: "6–9 Alarms", price: 125 },
  { label: "9–12 Alarms", price: 160 },
  { label: "12–15 Alarms", price: 195 },
  { label: "15–18 Alarms", price: 230 },
  { label: "18–21 Alarms", price: 265 },
];

// ─── Fire Alarm Panels ────────────────────────────────────────────────────────

export const FIRE_ALARM_PANELS_TABLE: readonly PriceRow[] = [
  { label: "Up to 3 Smoke/Heat Alarms", price: 75 },
  { label: "3–6 Alarms", price: 110 },
  { label: "6–9 Alarms", price: 145 },
  { label: "9–12 Alarms", price: 180 },
  { label: "12–15 Alarms", price: 215 },
  { label: "15–18 Alarms", price: 230 },
  { label: "18–21 Alarms", price: 265 },
];

// ─── FRA — Residential ───────────────────────────────────────────────────────

export const FRA_RESIDENTIAL_TABLE: readonly PriceRow[] = [
  { label: "Studio Apartment", price: 74 },
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

// ─── Fire Door Certificate ────────────────────────────────────────────────────

export const FIRE_DOOR_CERT_PRICE = 120;

// ─── Fire Extinguisher Testing ────────────────────────────────────────────────

export const FIRE_EXTINGUISHER_TABLE: readonly PriceRow[] = [
  { label: "1–3 Extinguishers", price: 80 },
  { label: "3–6 Extinguishers", price: 100 },
  { label: "6–10 Extinguishers", price: 135 },
  { label: "10–15 Extinguishers", price: 175 },
  { label: "15–20 Extinguishers", price: 205 },
];

// ─── Asbestos Survey (Management Survey) ─────────────────────────────────────

export const ASBESTOS_SURVEY_TABLE: readonly PriceRow[] = [
  { label: "1 Sample", price: 239.99 },
  { label: "2 Samples", price: 279.99 },
  { label: "3 Samples", price: 299.99 },
  { label: "4 Samples", price: 339.99 },
  { label: "5 Samples", price: 379.99 },
  { label: "6 Samples", price: 405.99 },
];

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
  { label: "Up to 50m²", price: 250 },
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
  parking: 5,
  congestionZone: 18,
} as const;

// ─── FROM_PRICES — used in hero sections and meta titles ──────────────────────

export const FROM_PRICES: Record<ServiceType, string> = {
  eicr: "from £67.99",
  "commercial-eicr": "from £149.99",
  "electrical-diagnostic": "from £89.99/hr",
  "fuse-box": "from £600",
  elc: "from £55",
  pat: "from £59.99",
  "gas-safety-cp12": "from £50",
  "gas-safety-cp42": "from £159.99",
  "boiler-installation": "from £2,499",
  "fire-safety-cert": "from £55",
  "fire-alarm-panels": "from £75",
  "fra-residential": "from £74",
  "fra-commercial": "from £149.99",
  "fire-alarm-installation": "from £209.99/alarm",
  "fire-door-cert": "from £120",
  "fire-extinguisher": "from £80",
  "asbestos-survey": "from £239.99",
  epc: "from £89.99",
  "commercial-epc": "from £250",
};

// ─── Helper Functions ─────────────────────────────────────────────────────────

/**
 * Returns the domestic EICR price for a given property size.
 *
 * @example getPriceForEICR('studio')   // 67.99
 * @example getPriceForEICR('1-3bed')  // 94.99
 * @example getPriceForEICR('4bed')    // 104.99
 */
export function getPriceForEICR(propertySize: EICRPropertySize): number {
  return DOMESTIC_EICR_PRICES[propertySize];
}

/**
 * Returns the CP12 domestic gas safety certificate price for a given appliance count.
 * Pass 0 for a meter-only check (no appliance, no certificate = £40).
 * Max 3 appliances on a CP12 — for commercial use getPriceForGasSafetyCP42().
 *
 * @example getPriceForGasSafety(1)  // 50
 * @example getPriceForGasSafety(2)  // 60
 * @example getPriceForGasSafety(3)  // 70
 * @example getPriceForGasSafety(0)  // 40 (meter only, no appliance)
 */
export function getPriceForGasSafety(applianceCount: number): number {
  if (applianceCount <= 0) return 40;
  if (applianceCount === 1) return 50;
  if (applianceCount === 2) return 60;
  return 70; // 3 appliances — maximum on a CP12
}

/**
 * Returns the domestic EPC price for a given property size.
 *
 * @example getPriceForEPC('studio')   // 89.99
 * @example getPriceForEPC('1-3bed')  // 109.99
 * @example getPriceForEPC('4bed')    // 129.99
 * @example getPriceForEPC('5bed')    // 149.99
 */
export function getPriceForEPC(propertySize: EPCPropertySize): number {
  return DOMESTIC_EPC_PRICES[propertySize];
}

/**
 * Returns the PAT Testing price for a given appliance count.
 * Returns the price for the bracket that the count falls into.
 *
 * @example getPriceForPAT(5)   // 59.99 (up to 10)
 * @example getPriceForPAT(10)  // 59.99 (up to 10)
 * @example getPriceForPAT(12)  // 69.99 (10–15)
 * @example getPriceForPAT(50)  // 259.99 (45–50)
 */
export function getPriceForPAT(applianceCount: number): number {
  if (applianceCount <= 10) return 59.99;
  if (applianceCount <= 15) return 69.99;
  if (applianceCount <= 20) return 79.99;
  if (applianceCount <= 25) return 99.99;
  if (applianceCount <= 30) return 129.99;
  if (applianceCount <= 35) return 169.99;
  if (applianceCount <= 40) return 199.99;
  if (applianceCount <= 45) return 229.99;
  return 259.99; // 45–50
}

/**
 * Returns the residential Fire Risk Assessment price for a given property type.
 *
 * @example getPriceForFRA('studio')           // 74
 * @example getPriceForFRA('1-3bed')           // 139.99
 * @example getPriceForFRA('4bed')             // 179.99
 * @example getPriceForFRA('communal-1-3floors') // 129.99
 */
export function getPriceForFRA(propertyType: FRAPropertyType): number {
  const prices: Record<FRAPropertyType, number> = {
    studio: 74,
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

/**
 * Returns the Fire Safety Certificate price for a given alarm count.
 *
 * @example getPriceForFireSafetyCert(2)   // 55 (up to 3)
 * @example getPriceForFireSafetyCert(4)   // 90 (3–6)
 * @example getPriceForFireSafetyCert(9)   // 125 (6–9)
 */
export function getPriceForFireSafetyCert(alarmCount: number): number {
  if (alarmCount <= 3) return 55;
  if (alarmCount <= 6) return 90;
  if (alarmCount <= 9) return 125;
  if (alarmCount <= 12) return 160;
  if (alarmCount <= 15) return 195;
  if (alarmCount <= 18) return 230;
  return 265; // 18–21
}

/**
 * Returns the Asbestos Management Survey price for a given sample count.
 *
 * @example getPriceForAsbestosSurvey(1)  // 239.99
 * @example getPriceForAsbestosSurvey(3)  // 299.99
 * @example getPriceForAsbestosSurvey(6)  // 405.99
 */
export function getPriceForAsbestosSurvey(sampleCount: number): number {
  if (sampleCount <= 1) return 239.99;
  if (sampleCount <= 2) return 279.99;
  if (sampleCount <= 3) return 299.99;
  if (sampleCount <= 4) return 339.99;
  if (sampleCount <= 5) return 379.99;
  return 405.99; // 6 samples
}

/**
 * Calculates the bundle price for a combination of services.
 * Applies a 10% discount when 2 or more services are booked together.
 * Returns subtotal, discount amount, and final total (rounded to 2 dp).
 *
 * @example
 * calculateBundlePrice([
 *   { service: 'eicr', price: 94.99 },
 *   { service: 'gas-safety-cp12', price: 50 },
 * ])
 * // { subtotal: 144.99, discount: 14.50, total: 130.49 }
 *
 * @example
 * calculateBundlePrice([
 *   { service: 'eicr', price: 94.99 },
 *   { service: 'gas-safety-cp12', price: 50 },
 *   { service: 'epc', price: 109.99 },
 * ])
 * // { subtotal: 254.98, discount: 25.50, total: 229.48 }
 */
export function calculateBundlePrice(services: ServiceSelection[]): {
  subtotal: number;
  discount: number;
  total: number;
} {
  const subtotal = round2(services.reduce((sum, s) => sum + s.price, 0));

  if (services.length < 2) {
    return { subtotal, discount: 0, total: subtotal };
  }

  const discountRate = 0.1;
  const discount = round2(subtotal * discountRate);
  const total = round2(subtotal - discount);

  return { subtotal, discount, total };
}

/**
 * Returns the marketing "from £X" string for a given service type.
 *
 * @example getEntryPrice('eicr')              // "from £67.99"
 * @example getEntryPrice('gas-safety-cp12')  // "from £50"
 * @example getEntryPrice('epc')              // "from £89.99"
 */
export function getEntryPrice(service: ServiceType): string {
  return FROM_PRICES[service];
}

// ─── Internal ─────────────────────────────────────────────────────────────────

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
