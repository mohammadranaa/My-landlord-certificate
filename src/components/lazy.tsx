"use client"

/**
 * Centralised lazy-import definitions.
 * "use client" is required so that ssr:false is legal —
 * Next.js only allows ssr:false inside Client Modules.
 * Server Component pages import these as client component
 * references; ssr:true ones are still server-rendered.
 */

import dynamic from "next/dynamic"

export const LazyFAQAccordion = dynamic(
  () => import("@/components/ui/faq-accordion").then(m => m.FAQAccordion),
  {
    ssr: true,
    // MUST stay ssr:true — FAQ JSON-LD schema must be in
    // the initial HTML for Google rich results to work.
    loading: () => (
      <div className="space-y-3 mt-8" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-14 rounded-xl bg-border/30 animate-pulse"
          />
        ))}
      </div>
    ),
  }
)

export const LazyStickyMobileCTA = dynamic(
  () => import("@/components/ui/sticky-mobile-cta").then(m => m.StickyMobileCTA),
  { ssr: false }
  // ssr:false fine — mobile-only UI, no SEO value
)

export const LazyAccreditationSlider = dynamic(
  () => import("@/components/ui/accreditation-slider").then(m => m.AccreditationSlider),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-24 rounded-xl bg-border/20 animate-pulse mx-auto max-w-5xl"
        aria-hidden="true"
      />
    ),
  }
)

export const LazyBookingForm = dynamic(
  () => import("@/components/booking/booking-form").then(m => m.BookingForm),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[480px] rounded-2xl bg-border/20 animate-pulse"
        aria-hidden="true"
      />
    ),
  }
)
