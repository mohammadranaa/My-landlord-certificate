import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

type Spacing = "sm" | "md" | "lg";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** HTML element to render. Defaults to `section`. */
  as?: ElementType;
  /**
   * Vertical padding scale.
   * - sm → py-8 md:py-12
   * - md → py-12 md:py-16 lg:py-24  (default)
   * - lg → py-16 md:py-24 lg:py-32
   */
  spacing?: Spacing;
}

const spacingMap: Record<Spacing, string> = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16 lg:py-24",
  lg: "py-16 md:py-24 lg:py-32",
};

/**
 * Vertically-padded page section. Combine with `<Container>` for full-width sections.
 * @example
 *   <Section spacing="lg">
 *     <Container>…</Container>
 *   </Section>
 */
export function Section({
  as: Tag = "section",
  className,
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(spacingMap[spacing], className)} {...props} />
  );
}
