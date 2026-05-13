import { cn } from "@/lib/utils";

type PriceSize = "sm" | "md" | "lg";

interface PriceTagProps {
  price: number;
  /** Shows "from" prefix before the price. */
  from?: boolean;
  size?: PriceSize;
  /** Renders white text for dark backgrounds. */
  inverted?: boolean;
  className?: string;
}

const sizeMap: Record<PriceSize, string> = {
  sm: "text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
};

/**
 * Bold price display. Used in service page heroes and pricing cards.
 * @example
 *   <PriceTag price={99} from size="lg" />   // → from £99
 *   <PriceTag price={59} />                   // → £59
 */
export function PriceTag({
  price,
  from = false,
  size = "md",
  inverted = false,
  className,
}: PriceTagProps) {
  return (
    <p
      className={cn(
        "flex items-baseline gap-1.5 font-bold",
        inverted ? "text-white" : "text-brand-charcoal",
        className,
      )}
    >
      {from && (
        <span
          className={cn(
            "text-base font-normal",
            inverted ? "text-blue-200" : "text-brand-grey",
          )}
        >
          from
        </span>
      )}
      <span className={sizeMap[size]}>£{price}</span>
    </p>
  );
}
