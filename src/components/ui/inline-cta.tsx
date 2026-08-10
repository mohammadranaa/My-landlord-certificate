import Link from "next/link";

interface InlineCTAProps {
  /** Booking destination, e.g. "/book?service=eicr". */
  href: string;
  /** Bold headline, e.g. "Ready to book your EICR?". */
  heading: string;
  /** Optional supporting line under the headline. */
  subtext?: string;
  /** Button label. Defaults to "Book now". */
  buttonLabel?: string;
}

/**
 * Compact mid-page conversion band for long service pages. Breaks up the
 * content with a clear "Book now" prompt without the weight of the full
 * bottom CTA block.
 */
export function InlineCTA({
  href,
  heading,
  subtext,
  buttonLabel = "Book now",
}: InlineCTAProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-compliance-blue to-blue-900 px-6 py-7 text-center text-white sm:flex sm:items-center sm:justify-between sm:text-left">
      <div className="mb-4 sm:mb-0 sm:mr-6">
        <p className="text-lg font-bold leading-snug">{heading}</p>
        {subtext && <p className="mt-1 text-sm text-blue-100">{subtext}</p>}
      </div>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-action-green px-6 py-3 font-semibold text-brand-charcoal transition-colors hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
