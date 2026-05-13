import { cn } from "@/lib/utils";

type DisplaySize = "sm" | "md" | "lg";

interface PriceDisplayProps {
  /** Numeric price — formatted automatically (e.g. 67.99 → "£67.99", 50 → "£50"). */
  price: number;
  /** Shows "from" prefix. */
  from?: boolean;
  size?: DisplaySize;
  className?: string;
}

const sizeMap: Record<
  DisplaySize,
  { wrapper: string; prefix: string; amount: string }
> = {
  sm: {
    wrapper: "gap-1",
    prefix: "text-sm",
    amount: "text-2xl",
  },
  md: {
    wrapper: "gap-1.5",
    prefix: "text-base",
    amount: "text-3xl md:text-4xl",
  },
  lg: {
    wrapper: "gap-2",
    prefix: "text-lg",
    amount: "text-4xl md:text-5xl",
  },
};

function formatPrice(price: number): string {
  return price % 1 === 0 ? `£${price}` : `£${price.toFixed(2)}`;
}

/**
 * Single "from £X" price display. Used in hero sections and service page headers.
 * The number renders in Compliance Blue; the "from" prefix in Soft Grey.
 *
 * @example
 * <PriceDisplay price={67.99} from size="lg" />   // → from £67.99
 * <PriceDisplay price={50} from size="md" />        // → from £50
 */
export function PriceDisplay({
  price,
  from = false,
  size = "md",
  className,
}: PriceDisplayProps) {
  const styles = sizeMap[size];

  return (
    <p
      className={cn(
        "flex items-baseline font-bold leading-none",
        styles.wrapper,
        className,
      )}
    >
      {from && (
        <span className={cn("font-normal text-soft-grey", styles.prefix)}>
          from
        </span>
      )}
      <span className={cn("text-compliance-blue", styles.amount)}>
        {formatPrice(price)}
      </span>
    </p>
  );
}
