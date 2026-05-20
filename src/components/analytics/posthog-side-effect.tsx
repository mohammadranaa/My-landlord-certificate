"use client";

import { Suspense, useEffect } from "react";
import { useConsent } from "./consent-provider";
import { initPostHog } from "@/lib/posthog";
import { PageViewTracker } from "./page-view-tracker";

export function PostHogSideEffect() {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent === "granted") void initPostHog();
  }, [consent]);

  if (consent !== "granted") return null;

  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
