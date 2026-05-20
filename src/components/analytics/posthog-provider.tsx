"use client"

import { Suspense, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useConsent } from "./consent-provider"
import { initPostHog, getPostHog } from "@/lib/posthog"

// Separated into its own component so Suspense boundary
// is tight — only this component is suspended, not the app
function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const ph = getPostHog()
    if (!ph) return
    const url =
      pathname +
      (searchParams.toString() ? `?${searchParams.toString()}` : "")
    ph.capture("$pageview", { $current_url: url })
  }, [pathname, searchParams])

  return null
}

/**
 * Side-effect only component — renders nothing visible.
 * Initialises PostHog after consent, tracks page views.
 * Does NOT wrap children — placed as a sibling in layout.
 */
export function PostHogProvider() {
  const { consent } = useConsent()

  useEffect(() => {
    if (consent === "granted") {
      void initPostHog()
    }
  }, [consent])

  if (consent !== "granted") return null

  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  )
}
