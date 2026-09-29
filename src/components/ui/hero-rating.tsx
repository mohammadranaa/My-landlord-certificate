interface HeroRatingProps {
  /** "dark" for coloured/blue hero backgrounds (light text), "light" for white/pale hero backgrounds (dark text). */
  theme?: "dark" | "light";
  className?: string;
}

/**
 * Disabled (owner decision): no Google/Trustpilot badge or link on the
 * homepage, service pages or the bundle page. Kept as a no-op so the ~30
 * call sites that render `<HeroRating />` beneath their H1 don't need
 * individual edits — it renders nothing.
 */
export function HeroRating(_props: HeroRatingProps) {
  return null;
}
