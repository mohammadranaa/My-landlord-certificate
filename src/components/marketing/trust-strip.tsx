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

        {/* Trustpilot */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-[#00B67A]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span
            className={cn(
              "text-sm",
              isDark ? "text-white" : "text-brand-charcoal"
            )}
          >
            <strong>4.8</strong>
            <span
              className={cn(
                isDark ? "text-brand-grey" : "text-brand-grey"
              )}
            >
              {" "}on Trustpilot
            </span>
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
