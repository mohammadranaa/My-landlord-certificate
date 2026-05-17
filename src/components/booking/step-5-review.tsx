"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { step5Schema, type Step5Data, type PartialBookingData } from "@/lib/booking-schema";
import { calculateBundlePrice, ADDITIONAL_CHARGES } from "@/lib/pricing";
import type { ServiceType } from "@/lib/pricing";

function ReviewSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-brand-charcoal">{title}</p>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-medium text-compliance-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded"
        >
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

interface Step5Props {
  data: PartialBookingData;
  onBack: () => void;
  onGoToStep: (step: number) => void;
  onSubmit: (termsAccepted: boolean) => Promise<void>;
  isSubmitting?: boolean;
}

export function Step5Review({ data, onBack, onGoToStep, onSubmit, isSubmitting = false }: Step5Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step5Data>({
    resolver: zodResolver(step5Schema),
    defaultValues: { acceptedTerms: false },
  });

  const services = data.services ?? [];
  const { subtotal, discount, total } = calculateBundlePrice(
    services.map((s) => ({
      service: s.serviceType as ServiceType,
      price: s.price,
    })),
  );
  const charges =
    (data.congestionZone ? ADDITIONAL_CHARGES.congestionZone : 0) +
    (data.parkingRestriction ? ADDITIONAL_CHARGES.parking : 0);
  const grandTotal = total + charges;

  async function onFormSubmit(stepData: Step5Data) {
    await onSubmit(stepData.acceptedTerms);
  }

  const appointmentDate = data.preferredDate
    ? parseISO(data.preferredDate).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4" noValidate>
      <div>
        <h2 className="text-xl font-bold text-brand-charcoal mb-1">
          Review your booking
        </h2>
        <p className="text-sm text-brand-grey mb-4">
          Check everything looks correct before confirming your booking.
        </p>
      </div>

      <ReviewSection title="Property" onEdit={() => onGoToStep(1)}>
        <p className="text-sm text-brand-charcoal capitalize">
          {data.propertyCategory} —{" "}
          <span className="text-brand-grey">{data.propertySize?.replace(/-/g, " ")}</span>
        </p>
      </ReviewSection>

      <ReviewSection title="Your details" onEdit={() => onGoToStep(2)}>
        <dl className="space-y-1 text-sm">
          <div className="flex gap-2">
            <dt className="text-brand-grey w-20 shrink-0">Name</dt>
            <dd className="text-brand-charcoal">{data.name}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-brand-grey w-20 shrink-0">Email</dt>
            <dd className="text-brand-charcoal">{data.email}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-brand-grey w-20 shrink-0">Phone</dt>
            <dd className="text-brand-charcoal">{data.phone}</dd>
          </div>
          {data.tenantPhone && (
            <div className="flex gap-2">
              <dt className="text-brand-grey w-20 shrink-0">Tenant</dt>
              <dd className="text-brand-charcoal">{data.tenantPhone}</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt className="text-brand-grey w-20 shrink-0">Address</dt>
            <dd className="text-brand-charcoal">
              {[data.addressLine1, data.addressLine2, data.city, data.postcode?.toUpperCase()]
                .filter(Boolean)
                .join(", ")}
            </dd>
          </div>
        </dl>
      </ReviewSection>

      <ReviewSection title="Services" onEdit={() => onGoToStep(3)}>
        <div className="space-y-2">
          {services.map((s) => (
            <div
              key={s.serviceType}
              className="flex justify-between items-start gap-2 text-sm"
            >
              <div>
                <p className="text-brand-charcoal font-medium">{s.label}</p>
                <p className="text-xs text-brand-grey">{s.optionLabel}</p>
              </div>
              <span className="tabular-nums text-brand-charcoal whitespace-nowrap">
                £{s.price.toFixed(2)}
              </span>
            </div>
          ))}
          {services.length > 1 && (
            <div className="border-t border-border pt-2 mt-1 space-y-1 text-sm">
              <div className="flex justify-between text-brand-grey">
                <span>Subtotal</span>
                <span className="tabular-nums">£{subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-action-green font-medium">
                  <span>10% multi-service discount</span>
                  <span className="tabular-nums">−£{discount.toFixed(2)}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </ReviewSection>

      <ReviewSection title="Appointment" onEdit={() => onGoToStep(4)}>
        <p className="text-sm text-brand-charcoal">{appointmentDate}</p>
        <p className="text-sm text-brand-grey mt-0.5">
          {data.timePreference === "morning"
            ? "Morning slot — 8am to 12pm"
            : "Afternoon slot — 12pm to 6pm"}
        </p>
        {(data.congestionZone || data.parkingRestriction) && (
          <div className="mt-2 pt-2 border-t border-border space-y-1 text-sm text-brand-grey">
            {data.congestionZone && (
              <p>
                Congestion zone charge:{" "}
                <span className="tabular-nums">
                  +£{ADDITIONAL_CHARGES.congestionZone.toFixed(2)}
                </span>
              </p>
            )}
            {data.parkingRestriction && (
              <p>
                Parking restriction:{" "}
                <span className="tabular-nums">
                  +£{ADDITIONAL_CHARGES.parking.toFixed(2)}
                </span>
              </p>
            )}
          </div>
        )}
      </ReviewSection>

      <div className="rounded-xl border-2 border-compliance-blue bg-compliance-blue/5 px-4 py-3">
        <div className="flex justify-between items-center">
          <p className="font-bold text-brand-charcoal">Total due today</p>
          <p className="text-2xl font-bold text-compliance-blue tabular-nums">
            £{grandTotal.toFixed(2)}
          </p>
        </div>
        {discount > 0 && (
          <p className="text-xs text-action-green mt-1">
            Includes £{discount.toFixed(2)} multi-service discount
          </p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("acceptedTerms")}
          className="mt-0.5 w-4 h-4 rounded accent-compliance-blue shrink-0"
        />
        <span className="text-sm text-brand-grey">
          I agree to the{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-compliance-blue hover:underline"
          >
            terms and conditions
          </a>{" "}
          and confirm the property details are correct.
        </span>
      </label>
      {errors.acceptedTerms && (
        <p className="text-xs text-red-600">{errors.acceptedTerms.message}</p>
      )}

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className={cn(
            "flex-1 rounded-xl border-2 border-border bg-white text-brand-charcoal font-semibold py-3 text-sm transition-colors",
            "hover:border-brand-grey/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
            "disabled:opacity-50 disabled:pointer-events-none",
          )}
        >
          ← Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "flex-[2] rounded-xl bg-action-green text-brand-charcoal font-bold py-3 text-sm transition-colors",
            "hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green focus-visible:ring-offset-2",
            "disabled:opacity-70 disabled:pointer-events-none",
            "flex items-center justify-center gap-2",
          )}
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>Confirm Booking — £{grandTotal.toFixed(2)}</>
          )}
        </button>
      </div>
      <p className="text-xs text-center text-brand-grey pt-1">
        Our team will contact you within 2 hours to confirm your booking and arrange payment.
      </p>
    </form>
  );
}
