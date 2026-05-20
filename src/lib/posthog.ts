import type posthogJs from "posthog-js";

let _posthog: typeof posthogJs | null = null;

export function getPostHog() {
  return _posthog;
}

export async function initPostHog() {
  if (typeof window === "undefined") return;
  if (_posthog?.__loaded) return;
  const { default: posthog } = await import("posthog-js");
  _posthog = posthog;
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    session_recording: { sampleRate: 0.05 },
    loaded(ph) {
      if (process.env.NODE_ENV !== "production") ph.opt_out_capturing();
    },
  });
}
