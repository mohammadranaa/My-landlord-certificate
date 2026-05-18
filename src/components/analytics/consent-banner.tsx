"use client";

import { useConsent } from "./consent-provider";

export function ConsentBanner() {
  const { consent, accept, decline } = useConsent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-brand-charcoal font-medium mb-0.5">
            We use cookies to improve your experience
          </p>
          <p className="text-xs text-brand-grey leading-relaxed">
            We use analytics cookies (Google Analytics, PostHog) to understand how visitors use our
            site, and ad cookies (Meta Pixel) to measure our marketing. You can accept or decline
            non-essential cookies.{" "}
            <a href="/privacy" className="text-compliance-blue underline hover:no-underline">
              Privacy policy
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-xs text-brand-grey hover:text-brand-charcoal border border-border rounded-lg px-4 py-2 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs font-semibold bg-compliance-blue hover:bg-blue-600 text-white rounded-lg px-5 py-2 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
