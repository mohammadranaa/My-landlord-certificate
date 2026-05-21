"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { calculateBundlePrice, ADDITIONAL_CHARGES } from "@/lib/pricing";
import type { ServiceType } from "@/lib/pricing";
import type { PartialBookingData, ServiceEntry } from "@/lib/booking-schema";

interface OrderSummaryProps {
  data: PartialBookingData;
  mobile?: boolean;
}

function calcTotals(data: PartialBookingData) {
  const services: ServiceEntry[] = data.services ?? [];
  const { subtotal, discount, total } = calculateBundlePrice(
    services.map((s) => ({
      service: s.serviceType as ServiceType,
      price: s.price,
    })),
  );
  const charges =
    (data.congestionZone ? ADDITIONAL_CHARGES.congestionZone : 0) +
    (data.parkingRestriction ? ADDITIONAL_CHARGES.parking : 0);
  return { services, subtotal, discount, servicesTotal: total, charges, grandTotal: total + charges };
}

function SummaryContent({ data }: { data: PartialBookingData }) {
  const { services, subtotal, discount, charges, grandTotal } = calcTotals(data);

  if (services.length === 0) {
    return (
      <p className="text-sm text-brand-grey text-center py-2">
        No services selected yet
      </p>
    );
  }

  return (
    <div className="space-y-1.5">
      {services.map((s) => (
        <div
          key={s.serviceType}
          className="flex items-start justify-between gap-2 text-sm"
        >
          <div className="min-w-0">
            <p className="font-medium text-brand-charcoal leading-tight">
              {s.label}
            </p>
            <p className="text-xs text-brand-grey truncate">{s.optionLabel}</p>
          </div>
          <span className="font-medium text-brand-charcoal whitespace-nowrap tabular-nums">
            £{s.price.toFixed(2)}
          </span>
        </div>
      ))}

      <div className="border-t border-border pt-2 mt-2 space-y-1">
        {services.length > 1 && (
          <div className="flex justify-between text-sm text-brand-grey">
            <span>Subtotal</span>
            <span className="tabular-nums">£{subtotal.toFixed(2)}</span>
          </div>
        )}
        {data.congestionZone && (
          <div className="flex justify-between text-sm text-brand-grey">
            <span>Congestion zone</span>
            <span className="tabular-nums">
              £{ADDITIONAL_CHARGES.congestionZone.toFixed(2)}
            </span>
          </div>
        )}
        {data.parkingRestriction && (
          <div className="flex justify-between text-sm text-brand-grey">
            <span>Parking restriction</span>
            <span className="tabular-nums">
              £{ADDITIONAL_CHARGES.parking.toFixed(2)}
            </span>
          </div>
        )}
        {charges > 0 && (
          <div className="flex justify-between text-sm text-brand-grey">
            <span>Total Additional Charges</span>
            <span className="tabular-nums">£{charges.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-base font-bold text-brand-charcoal border-t border-border pt-1.5">
          <span>Total</span>
          <span className="tabular-nums">£{grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {data.preferredDate && (
        <div className="border-t border-border pt-2 mt-1 space-y-0.5">
          <p className="text-xs text-brand-grey">
            <span className="font-medium text-brand-charcoal">Date: </span>
            {new Date(data.preferredDate).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          {data.timePreference && (
            <p className="text-xs text-brand-grey">
              <span className="font-medium text-brand-charcoal">Time: </span>
              {data.timePreference === "morning"
                ? "Morning (8am–12pm)"
                : "Afternoon (12pm–6pm)"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function OrderSummary({ data, mobile = false }: OrderSummaryProps) {
  const [open, setOpen] = useState(false);
  const { grandTotal, services } = calcTotals(data);

  if (mobile) {
    return (
      <div className="bg-white rounded-xl border border-border overflow-hidden mb-6 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-brand-charcoal"
          aria-expanded={open}
        >
          <span>
            Order summary{" "}
            {services.length > 0 && (
              <span className="text-brand-grey font-normal">
                ({services.length} service{services.length !== 1 ? "s" : ""})
              </span>
            )}
          </span>
          <div className="flex items-center gap-2">
            {grandTotal > 0 && (
              <span className="text-compliance-blue tabular-nums">
                £{grandTotal.toFixed(2)}
              </span>
            )}
            <svg
              className={cn(
                "w-4 h-4 text-brand-grey transition-transform",
                open && "rotate-180",
              )}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {open && (
          <div className="px-4 pb-4 border-t border-border">
            <SummaryContent data={data} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <div className="bg-white rounded-xl border border-border p-5 sticky top-6">
        <h3 className="font-semibold text-brand-charcoal mb-4 text-sm uppercase tracking-wide">
          Order Summary
        </h3>
        <SummaryContent data={data} />
      </div>
    </div>
  );
}
