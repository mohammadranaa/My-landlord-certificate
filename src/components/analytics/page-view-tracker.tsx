"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getPostHog } from "@/lib/posthog";

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const ph = getPostHog();
    if (!ph) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    ph.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}
