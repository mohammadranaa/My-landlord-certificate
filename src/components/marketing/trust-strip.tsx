import { cn } from "@/lib/utils";

interface TrustStripProps {
  variant?: "dark" | "light";
  className?: string;
}

export function TrustStrip({ variant = "dark", className }: TrustStripProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "py-3 px-6",
        isDark ? "bg-brand-charcoal" : "bg-brand-warm-white border-b border-border",
        className
      )}
    >
      <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-6">
        {/* NICEIC */}
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
              isDark ? "bg-brand-blue text-white" : "bg-brand-blue text-white"
            )}
          >
            N
          </span>
          <span
            className={cn(
              "text-sm font-medium",
              isDark ? "text-white" : "text-brand-charcoal"
            )}
          >
            NICEIC Approved
          </span>
        </div>

        {/* Gas Safe */}
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
              isDark ? "bg-brand-green text-white" : "bg-brand-green text-white"
            )}
          >
            GS
          </span>
          <span
            className={cn(
              "text-sm font-medium",
              isDark ? "text-white" : "text-brand-charcoal"
            )}
          >
            Gas Safe Registered
          </span>
        </div>

        {/* Completion count */}
        <span
          className={cn(
            "text-sm",
            isDark ? "text-brand-grey" : "text-brand-grey"
          )}
        >
          1,000+ certificates issued
        </span>
      </div>
    </div>
  );
}
