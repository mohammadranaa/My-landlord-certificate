import { cn } from "@/lib/utils";

const STEPS = [
  "Property",
  "Your Details",
  "Services",
  "Date & Time",
  "Review",
] as const;

interface ProgressBarProps {
  currentStep: number;
}

export function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <nav aria-label="Booking progress" className="mb-8">
      <ol className="flex items-start">
        {STEPS.map((label, i) => {
          const step = i + 1;
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <li key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1 w-full">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors shrink-0",
                    isCompleted
                      ? "bg-compliance-blue border-compliance-blue text-white"
                      : isCurrent
                        ? "bg-white border-compliance-blue text-compliance-blue"
                        : "bg-white border-brand-grey/30 text-brand-grey",
                  )}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium hidden sm:block text-center",
                    isCurrent
                      ? "text-compliance-blue"
                      : isCompleted
                        ? "text-brand-charcoal"
                        : "text-brand-grey",
                  )}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-1 -mt-4 sm:-mt-5",
                    step < currentStep ? "bg-compliance-blue" : "bg-brand-grey/20",
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
