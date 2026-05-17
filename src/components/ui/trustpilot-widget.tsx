// Replace with real Trustpilot embed once profile is created.
// Get your Business Unit ID and template IDs from:
// https://businessapp.b2b.trustpilot.com/trustbox

import Link from "next/link";
import { cn } from "@/lib/utils";

// Verify these template IDs in your Trustpilot Business dashboard
const TEMPLATE_IDS = {
  micro: "5419b637fa0340045cd0c936",
  mini: "5406968d00006400cdacd001",
  carousel: "54ad5defc6454f065c28af8b",
} as const;

const HEIGHTS = {
  micro: "24px",
  mini: "150px",
  carousel: "140px",
} as const;

export interface TrustpilotWidgetProps {
  businessUnitId?: string;
  theme?: "light" | "dark";
  variant?: keyof typeof TEMPLATE_IDS;
  className?: string;
}

function Stars({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TrustpilotLogo({ className }: { className?: string }) {
  return (
    <span className={cn("font-bold text-[#00B67A]", className)}>Trustpilot</span>
  );
}

function PlaceholderMicro({
  isDark,
  profileUrl,
}: {
  isDark: boolean;
  profileUrl: string;
}) {
  return (
    <Link
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
      aria-label="4.8 out of 5 — Excellent on Trustpilot"
    >
      <TrustpilotLogo className="text-base" />
      <Stars />
      <span className={cn("font-bold", isDark ? "text-white" : "text-brand-charcoal")}>
        4.8
      </span>
      <span className={cn(isDark ? "text-blue-200" : "text-brand-grey")}>
        Excellent · 50+ reviews
      </span>
    </Link>
  );
}

function PlaceholderMini({
  isDark,
  profileUrl,
}: {
  isDark: boolean;
  profileUrl: string;
}) {
  return (
    <Link
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex flex-col items-center gap-2 px-6 py-5 rounded-2xl border max-w-xs mx-auto hover:border-[#00B67A] transition-colors",
        isDark ? "border-white/20 bg-white/10" : "border-border bg-warm-white",
      )}
      aria-label="Trustpilot rating 4.8 out of 5 — Excellent"
    >
      <TrustpilotLogo className="text-xl" />
      <Stars />
      <div className="text-center">
        <p className={cn("text-3xl font-bold leading-none mb-0.5", isDark ? "text-white" : "text-brand-charcoal")}>
          4.8
        </p>
        <p className={cn("text-sm font-semibold", isDark ? "text-white/80" : "text-brand-charcoal")}>
          Excellent
        </p>
        <p className={cn("text-xs mt-0.5", isDark ? "text-blue-200" : "text-brand-grey")}>
          Based on 50+ reviews
        </p>
      </div>
    </Link>
  );
}

function PlaceholderCarousel({
  isDark,
  profileUrl,
}: {
  isDark: boolean;
  profileUrl: string;
}) {
  const quotes = [
    {
      text: "Booked Sunday night, engineer at the property by 9am Tuesday. Certificate arrived same day. Exactly what a busy landlord needs.",
      author: "Sarah M.",
      location: "Hackney",
    },
    {
      text: "Third year running I've used them for the Croydon HMO. Always on time. The CP12 is in my inbox before I've had a chance to follow up.",
      author: "James T.",
      location: "Croydon",
    },
    {
      text: "The EPC assessor flagged two low-cost improvements that would push us from D to C before the 2025 deadline. Genuinely useful advice.",
      author: "Rachel B.",
      location: "Lewisham",
    },
  ];

  return (
    <div
      className={cn(
        "rounded-2xl border p-8",
        isDark ? "border-white/20 bg-white/10" : "border-border bg-warm-white",
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <TrustpilotLogo className="text-2xl" />
          <Stars />
          <span className={cn("font-bold text-lg", isDark ? "text-white" : "text-brand-charcoal")}>
            4.8
          </span>
          <span className={cn("text-sm font-semibold", isDark ? "text-white/70" : "text-brand-grey")}>
            Excellent
          </span>
        </div>
        <Link
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#00B67A] hover:bg-[#009a68] text-white font-semibold px-5 py-2 rounded-xl transition-colors text-sm shrink-0"
        >
          See all reviews
          <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {quotes.map((q) => (
          <blockquote
            key={q.author}
            className={cn(
              "rounded-xl border p-4",
              isDark ? "border-white/10 bg-white/5" : "border-border bg-white",
            )}
          >
            <div className="flex gap-0.5 mb-3" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className={cn("text-sm leading-relaxed mb-3", isDark ? "text-white/80" : "text-brand-charcoal/80")}>
              &ldquo;{q.text}&rdquo;
            </p>
            <footer className={cn("text-xs font-semibold", isDark ? "text-white/60" : "text-brand-grey")}>
              {q.author} · {q.location}
            </footer>
          </blockquote>
        ))}
      </div>

      <p className={cn("text-center text-xs mt-6", isDark ? "text-blue-200/60" : "text-brand-grey")}>
        Trustpilot widget will display live reviews once your business profile is verified.
      </p>
    </div>
  );
}

export function TrustpilotWidget({
  businessUnitId,
  theme = "light",
  variant = "mini",
  className,
}: TrustpilotWidgetProps) {
  const profileUrl =
    process.env.NEXT_PUBLIC_TRUSTPILOT_PROFILE_URL ||
    "https://uk.trustpilot.com/review/mylandlordcertificate.co.uk";
  const isDark = theme === "dark";

  if (!businessUnitId) {
    return (
      <div className={className}>
        {variant === "micro" && <PlaceholderMicro isDark={isDark} profileUrl={profileUrl} />}
        {variant === "mini" && <PlaceholderMini isDark={isDark} profileUrl={profileUrl} />}
        {variant === "carousel" && <PlaceholderCarousel isDark={isDark} profileUrl={profileUrl} />}
      </div>
    );
  }

  return (
    <div
      className={cn("trustpilot-widget", className)}
      data-locale="en-GB"
      data-template-id={TEMPLATE_IDS[variant]}
      data-businessunit-id={businessUnitId}
      data-style-height={HEIGHTS[variant]}
      data-style-width="100%"
      data-theme={theme}
    >
      <Link href={profileUrl} target="_blank" rel="noopener noreferrer">
        View our reviews on Trustpilot
      </Link>
    </div>
  );
}
