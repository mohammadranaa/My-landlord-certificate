"use client";

import { useEffect } from "react";
import { ATTRIBUTION_COOKIE, type Attribution } from "@/lib/attribution";

const PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

/**
 * Captures Google Ads click ids (gclid/gbraid/wbraid) and UTM params from the
 * landing URL into a first-party cookie (90 days, SameSite=Lax). Only writes
 * when ad params are present, so organic visits never overwrite an ad click.
 * Mounted once in the root layout; runs on the first page load.
 */
export function AttributionCapture() {
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const found: Attribution = {};
      let hasAttribution = false;

      for (const key of PARAMS) {
        const value = url.searchParams.get(key);
        if (value) {
          (found as Record<string, string>)[key] = value;
          hasAttribution = true;
        }
      }

      if (!hasAttribution) return;

      found.landing_page = url.pathname + url.search;
      if (document.referrer) found.referrer = document.referrer;

      const value = encodeURIComponent(JSON.stringify(found));
      const maxAge = 60 * 60 * 24 * 90; // 90 days
      document.cookie = `${ATTRIBUTION_COOKIE}=${value}; path=/; max-age=${maxAge}; samesite=lax`;
    } catch {
      // Never block rendering on attribution capture.
    }
  }, []);

  return null;
}
