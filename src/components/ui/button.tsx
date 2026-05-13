import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base — shared across all variants
  [
    "group/button inline-flex shrink-0 items-center justify-center rounded-lg",
    "border border-transparent font-medium whitespace-nowrap",
    "transition-all outline-none select-none cursor-pointer",
    "focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
    "active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        // ── Brand variants ────────────────────────────────────────────────
        /** Compliance Blue background, white text. Primary actions. */
        primary:
          "bg-compliance-blue text-white hover:bg-brand-blue-dark",
        /** Outlined Compliance Blue. Secondary actions beside a primary. */
        secondary:
          "border-2 border-compliance-blue bg-transparent text-compliance-blue hover:bg-compliance-blue/10",
        /** Text-only. Low-emphasis actions. */
        tertiary:
          "bg-transparent text-compliance-blue underline-offset-4 hover:underline",
        /**
         * Action Green background, Charcoal text.
         * Use for booking CTAs. Dark text is required — #80D100 is too light for white text (WCAG fail).
         */
        cta: "bg-action-green text-brand-charcoal hover:bg-brand-green-dark font-semibold",
        // ── Utility variants (shadcn/base-ui compatibility) ───────────────
        default:
          "bg-compliance-blue text-white hover:bg-brand-blue-dark",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive",
        link: "text-compliance-blue underline-offset-4 hover:underline",
      },
      size: {
        // ── Named sizes (use these in new code) ──────────────────────────
        sm: "h-9 gap-1.5 px-4 text-sm",
        md: "h-11 gap-2 px-5 text-sm",
        lg: "h-12 gap-2 px-7 text-base",
        xl: "h-14 gap-2 px-9 text-lg",
        // ── Legacy sizes (shadcn compat) ──────────────────────────────────
        default: "h-9 gap-1.5 px-4 text-sm",
        xs: "h-7 gap-1 rounded-md px-2.5 text-xs",
        icon: "size-9 p-0",
        "icon-sm": "size-8 p-0 rounded-md",
        "icon-lg": "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {}

/**
 * Base button component. Supports brand variants and three named sizes.
 *
 * Variants: `primary` · `secondary` · `tertiary` · `cta` (green — uses dark text)
 * Sizes: `sm` · `md` · `lg` · `xl`
 *
 * @example
 *   <Button variant="primary" size="lg">Book Now</Button>
 *   <Button variant="cta" size="xl">Book from £99</Button>
 *   <Button variant="secondary">Learn more</Button>
 */
function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
