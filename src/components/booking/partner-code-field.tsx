"use client";

import { cn } from "@/lib/utils";
import { getPartnerByCode } from "@/lib/partners";

const inputClass = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal uppercase",
  "placeholder:text-brand-grey/60 placeholder:normal-case",
  "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
);

/** Optional partner/introducer code. Never blocks the booking. */
export function PartnerCodeField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const partner = getPartnerByCode(value);

  return (
    <div>
      <label htmlFor="partnerCode" className="mb-1 block text-sm font-medium text-brand-charcoal">
        Partner code (optional)
      </label>
      <input
        id="partnerCode"
        type="text"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. a code from a partner app"
        className={inputClass}
      />
      {partner ? (
        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-green-700">
          <span aria-hidden="true">✓</span> {partner.name} partner code applied
        </p>
      ) : value.trim() ? (
        <p className="mt-1 text-xs text-brand-grey">Code not recognised</p>
      ) : null}
    </div>
  );
}
