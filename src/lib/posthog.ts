import posthog from "posthog-js";
import type { PostHogInterface } from "posthog-js";

export { posthog };

export function initPostHog() {
  if (typeof window === "undefined") return;
  if (posthog.__loaded) return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    session_recording: {
      sampleRate: 0.05,
    },
    loaded(ph: PostHogInterface) {
      if (process.env.NODE_ENV !== "production") ph.opt_out_capturing();
    },
  });
}
