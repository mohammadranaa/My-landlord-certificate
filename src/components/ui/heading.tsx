import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Level = 1 | 2 | 3 | 4;

const tagMap = { 1: "h1", 2: "h2", 3: "h3", 4: "h4" } as const;

const styleMap: Record<Level, string> = {
  1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
  2: "text-3xl md:text-4xl font-semibold leading-snug",
  3: "text-2xl md:text-3xl font-semibold leading-snug",
  4: "text-xl md:text-2xl font-semibold leading-snug",
};

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Semantic heading level — controls both HTML tag and visual size. */
  level?: Level;
  /** Renders white text for use on dark/coloured backgrounds. */
  inverted?: boolean;
}

/**
 * Semantic heading with brand typography scale from the playbook.
 * The `level` prop controls both the HTML tag and the visual size.
 * @example
 *   <Heading level={1} inverted>Your landlord certificates. Sorted.</Heading>
 *   <Heading level={2}>Why landlords choose us</Heading>
 */
export function Heading({
  level = 2,
  inverted = false,
  className,
  ...props
}: HeadingProps) {
  const Tag = tagMap[level];
  return (
    <Tag
      className={cn(
        styleMap[level],
        inverted ? "text-white" : "text-brand-charcoal",
        className,
      )}
      {...props}
    />
  );
}
