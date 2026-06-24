/**
 * Ad attribution captured from the landing URL (Google Ads click ids + UTM).
 * Stored in a first-party cookie so it survives the Stripe Checkout round-trip
 * and can be read server-side in /api/checkout and the Stripe webhook.
 */
export const ATTRIBUTION_COOKIE = "mlc_attribution";

export interface Attribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
}

/** Parse the attribution cookie value (URL-encoded JSON). Never throws. */
export function parseAttribution(raw: string | undefined | null): Attribution {
  if (!raw) return {};
  try {
    return JSON.parse(decodeURIComponent(raw)) as Attribution;
  } catch {
    return {};
  }
}
