import type { ReactNode } from "react";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: ReactNode;
  /** Supporting copy under the title. */
  children?: ReactNode;
  align?: "center" | "left";
  /** White text + translucent chip for dark backgrounds. */
  inverted?: boolean;
  className?: string;
}

/**
 * Premium section header: animated eyebrow chip, title, gradient accent bar
 * and supporting copy. Reveals on scroll. Colours use existing brand tokens only.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  inverted = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
            inverted ? "bg-white/15 text-white" : "bg-compliance-blue/10 text-compliance-blue",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              inverted ? "bg-white" : "bg-action-green",
            )}
          />
          {eyebrow}
        </span>
      )}

      <Heading
        level={2}
        inverted={inverted}
        className={cn("mt-4", centered ? "mx-auto max-w-3xl" : "max-w-3xl")}
      >
        {title}
      </Heading>

      <div className={cn("accent-bar mt-5", centered && "mx-auto")} aria-hidden="true" />

      {children && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            inverted ? "text-blue-100" : "text-brand-grey",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}
