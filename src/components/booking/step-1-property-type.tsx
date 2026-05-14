"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { step1Schema, type Step1Data } from "@/lib/booking-schema";

const RESIDENTIAL_TYPES = [
  { value: "studio", label: "Studio Apartment" },
  { value: "1-3bed", label: "1–3 Bedrooms" },
  { value: "4bed", label: "4 Bedrooms" },
  { value: "5bed", label: "5 Bedrooms" },
  { value: "6bed", label: "6 Bedrooms" },
  { value: "7bed", label: "7 Bedrooms" },
  { value: "8bed", label: "8+ Bedrooms" },
  { value: "hmo", label: "HMO / Communal" },
] as const;

const COMMERCIAL_TYPES = [
  { value: "office", label: "Office" },
  { value: "retail", label: "Retail / Shop" },
  { value: "industrial", label: "Industrial / Warehouse" },
  { value: "other-commercial", label: "Other Commercial" },
] as const;

interface Step1Props {
  defaultValues?: Partial<Step1Data>;
  onComplete: (data: Step1Data) => void;
}

export function Step1PropertyType({ defaultValues, onComplete }: Step1Props) {
  const [category, setCategory] = useState<"residential" | "commercial" | "">(
    defaultValues?.propertyCategory ?? "",
  );

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      propertyCategory: defaultValues?.propertyCategory,
      propertySize: defaultValues?.propertySize ?? "",
    },
  });

  const propertySize = watch("propertySize");

  function selectCategory(cat: "residential" | "commercial") {
    setCategory(cat);
    setValue("propertyCategory", cat, { shouldValidate: true });
    setValue("propertySize", "");
  }

  function selectSize(val: string) {
    setValue("propertySize", val, { shouldValidate: true });
  }

  const types =
    category === "residential"
      ? RESIDENTIAL_TYPES
      : category === "commercial"
        ? COMMERCIAL_TYPES
        : [];

  return (
    <form onSubmit={handleSubmit(onComplete)} className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-brand-charcoal mb-1">
          What type of property is it?
        </h2>
        <p className="text-sm text-brand-grey mb-4">
          This determines which certificates and services are available.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-2">
          {(["residential", "commercial"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => selectCategory(cat)}
              className={cn(
                "rounded-xl border-2 p-4 text-left transition-colors",
                category === cat
                  ? "border-compliance-blue bg-compliance-blue/5"
                  : "border-border bg-white hover:border-compliance-blue/40",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                    category === cat
                      ? "border-compliance-blue"
                      : "border-brand-grey/40",
                  )}
                >
                  {category === cat && (
                    <div className="w-2.5 h-2.5 rounded-full bg-compliance-blue" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm capitalize">
                    {cat}
                  </p>
                  <p className="text-xs text-brand-grey">
                    {cat === "residential"
                      ? "Houses, flats, HMOs"
                      : "Offices, retail, commercial"}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
        {errors.propertyCategory && (
          <p className="text-xs text-red-600 mt-1">
            {errors.propertyCategory.message}
          </p>
        )}
      </div>

      {category !== "" && (
        <div>
          <p className="text-sm font-medium text-brand-charcoal mb-3">
            {category === "residential"
              ? "How many bedrooms?"
              : "What type of premises?"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {types.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => selectSize(t.value)}
                className={cn(
                  "rounded-xl border-2 px-3 py-2.5 text-sm font-medium text-left transition-colors",
                  propertySize === t.value
                    ? "border-compliance-blue bg-compliance-blue/5 text-compliance-blue"
                    : "border-border bg-white text-brand-charcoal hover:border-compliance-blue/40",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          {errors.propertySize && (
            <p className="text-xs text-red-600 mt-1">
              {errors.propertySize.message}
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        className={cn(
          "w-full rounded-xl bg-compliance-blue text-white font-semibold py-3 text-sm transition-colors",
          "hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
        )}
      >
        Continue →
      </button>
    </form>
  );
}
