export interface Partner {
  slug: string;
  /** Introducer code, uppercase. */
  code: string;
  /** Display name. */
  name: string;
  active: boolean;
  attributionDays: number;
  /** E.164; null = use the main number. */
  trackingPhone: string | null;
}

export const PARTNERS: Record<string, Partner> = {
  veylox: { slug: "veylox", code: "VEYLOX", name: "VEYLO X", active: true, attributionDays: 60, trackingPhone: null },
};

/** How a booking was attributed to a partner. */
export type ReferralMethod = "link" | "code_entered" | "utm_cookie";

export function getPartnerBySlug(slug: string): Partner | null {
  const partner = PARTNERS[slug];
  return partner?.active ? partner : null;
}

export function getPartnerByCode(code?: string | null): Partner | null {
  const normalised = (code ?? "").trim().toUpperCase();
  if (!normalised) return null;
  return Object.values(PARTNERS).find((p) => p.active && p.code === normalised) ?? null;
}

export function activePartners(): Partner[] {
  return Object.values(PARTNERS).filter((p) => p.active);
}

const CLIENT_METHODS: readonly ReferralMethod[] = ["link", "code_entered"];

/**
 * Server-side: validate a referral sent by the booking form against the
 * registry. Falls back to the attribution cookie's utm_source (e.g. someone
 * who arrived via the partner link, browsed, then booked later). Unknown
 * codes are dropped rather than stored.
 */
export function resolveReferral(
  code: string | null | undefined,
  method: string | null | undefined,
  utmSource: string | null | undefined,
): { code: string; method: ReferralMethod } | null {
  const partner = getPartnerByCode(code);
  if (partner) {
    const m = CLIENT_METHODS.find((x) => x === method) ?? "code_entered";
    return { code: partner.code, method: m };
  }
  const bySource = utmSource ? getPartnerBySlug(utmSource.trim().toLowerCase()) : null;
  return bySource ? { code: bySource.code, method: "utm_cookie" } : null;
}
