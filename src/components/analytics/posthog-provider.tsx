"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { posthog, initPostHog } from "@/lib/posthog";
import { useConsent } from "./consent-provider";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent === "granted") {
      initPostHog();
    }
  }, [consent]);

  return (
    <PHProvider client={posthog}>
      {consent === "granted" && <PageViewTracker />}
      {children}
    </PHProvider>
  );
}
