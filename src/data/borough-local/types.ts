export type LocalServiceKey =
  | "eicr"
  | "gas-safety-certificate"
  | "epc"
  | "fire-risk-assessment"
  | "pat-testing"
  | "commercial-eicr"
  | "electrical-diagnostic"
  | "fuse-box-installation"
  | "emergency-lights-certificate"
  | "commercial-gas-safety-certificate"
  | "boiler-installation"
  | "fire-safety-certificate"
  | "fire-alarm-installation"
  | "fire-door-certificate"
  | "fire-extinguisher-testing"
  | "commercial-epc"
  | "asbestos-survey"
  | "legionella-risk-assessment";

export interface LicensingScheme {
  name: string;
  type: "Mandatory HMO" | "Additional HMO" | "Selective";
  area: string;
  appliesTo: string;
  period: string;
  status: "In force" | "Not yet in force" | "Consultation" | "Expired";
}

export interface StockFact {
  label: string;
  value: string;
  source: string;
}

export interface ServiceAngle {
  heading: string;
  body: readonly string[];
}

export interface LocalFaq {
  question: string;
  answer: string;
}

export interface BoroughLocal {
  slug: string;
  checkedOn: string;
  council: { name: string; housingUrl: string; licensingUrl: string };
  licensing: readonly LicensingScheme[];
  stockFacts: readonly StockFact[];
  overview: readonly string[];
  serviceAngles: Record<LocalServiceKey, ServiceAngle>;
  serviceFaqs: Partial<Record<LocalServiceKey, readonly LocalFaq[]>>;
  sources: readonly { label: string; url: string }[];
  /** Sourced replacements for the legacy propertyContext / landlordContext in borough-data.ts. */
  contextOverride?: { propertyContext: string; landlordContext: string };
}
