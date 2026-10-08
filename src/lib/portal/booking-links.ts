import type { CertCode } from "./properties";

/**
 * Portal certificate code → booking-form service id (the `id` values in
 * SERVICES in components/booking/step-3-services.tsx). FSC and ALM both map
 * to the Fire Safety Certificate, so ids are de-duplicated. FRA has one
 * service id; its commercial sizes are options inside that service.
 */
const RESIDENTIAL_SERVICE: Record<CertCode, string> = {
  EICR: "eicr",
  GAS: "gas-safety-cp12",
  EPC: "epc",
  FRA: "fire-risk-assessment",
  FSC: "fire-safety-cert",
  ALM: "fire-safety-cert",
  LEG: "legionella",
  PAT: "pat",
  FDC: "fire-door",
  ELC: "elc",
  ASB: "asbestos-survey",
};

const COMMERCIAL_OVERRIDES: Partial<Record<CertCode, string>> = {
  EICR: "commercial-eicr",
  GAS: "gas-safety-cp42",
  EPC: "commercial-epc",
};

export function isCommercialProperty(propertyType: string | null | undefined): boolean {
  return /commercial|office|retail|shop|industrial|warehouse/i.test(propertyType ?? "");
}

export function bookingServiceIds(codes: readonly CertCode[], isCommercial = false): string[] {
  const ids = codes.map((code) => (isCommercial && COMMERCIAL_OVERRIDES[code]) || RESIDENTIAL_SERVICE[code]);
  return [...new Set(ids)];
}

/**
 * Link into /book from the portal. Only the property UUID and service ids go
 * in the query string — never an address, name or email, because GA4
 * records page URLs. /book looks the property up server-side and only
 * pre-fills it if it belongs to the signed-in agency.
 */
export function bookingHref({
  codes = [],
  propertyId,
  isCommercial = false,
}: {
  codes?: readonly CertCode[];
  propertyId?: string | null;
  isCommercial?: boolean;
}): string {
  const params = ["from=portal"];
  if (propertyId) params.push(`portalProperty=${encodeURIComponent(propertyId)}`);
  const services = bookingServiceIds(codes, isCommercial);
  if (services.length) params.push(`services=${services.join(",")}`);
  return `/book?${params.join("&")}`;
}
