"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { step2Schema, type Step2Data } from "@/lib/booking-schema";

const inputClass = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal",
  "placeholder:text-brand-grey/60",
  "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
);

const errorClass = "mt-1 text-xs text-red-600";

interface Step2Props {
  defaultValues?: Partial<Step2Data>;
  onBack: () => void;
  onComplete: (data: Step2Data) => void;
}

export function Step2PersonalInfo({
  defaultValues,
  onBack,
  onComplete,
}: Step2Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      email: defaultValues?.email ?? "",
      phone: defaultValues?.phone ?? "",
      tenantPhone: defaultValues?.tenantPhone ?? "",
      addressLine1: defaultValues?.addressLine1 ?? "",
      addressLine2: defaultValues?.addressLine2 ?? "",
      city: defaultValues?.city ?? "London",
      postcode: defaultValues?.postcode ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onComplete)} className="space-y-5" noValidate>
      <div>
        <h2 className="text-xl font-bold text-brand-charcoal mb-1">
          Your details
        </h2>
        <p className="text-sm text-brand-grey mb-4">
          We'll use this to confirm your booking and send the certificate.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Full name{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            {...register("name")}
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Email address{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            {...register("email")}
            className={inputClass}
          />
          {errors.email && (
            <p className={errorClass}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Your phone number{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07700 900123"
            {...register("phone")}
            className={inputClass}
          />
          {errors.phone && (
            <p className={errorClass}>{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="tenantPhone"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Tenant phone{" "}
            <span className="text-xs font-normal text-brand-grey">
              (if different)
            </span>
          </label>
          <input
            id="tenantPhone"
            type="tel"
            autoComplete="tel"
            placeholder="07700 900456"
            {...register("tenantPhone")}
            className={inputClass}
          />
          {errors.tenantPhone && (
            <p className={errorClass}>{errors.tenantPhone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="addressLine1"
          className="block text-sm font-medium text-brand-charcoal mb-1.5"
        >
          Property address{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="addressLine1"
          type="text"
          autoComplete="address-line1"
          placeholder="12 High Street"
          {...register("addressLine1")}
          className={inputClass}
        />
        {errors.addressLine1 && (
          <p className={errorClass}>{errors.addressLine1.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="addressLine2"
          className="block text-sm font-medium text-brand-charcoal mb-1.5"
        >
          Address line 2{" "}
          <span className="text-xs font-normal text-brand-grey">(optional)</span>
        </label>
        <input
          id="addressLine2"
          type="text"
          autoComplete="address-line2"
          placeholder="Flat 3"
          {...register("addressLine2")}
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            City{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            placeholder="London"
            {...register("city")}
            className={inputClass}
          />
          {errors.city && <p className={errorClass}>{errors.city.message}</p>}
        </div>

        <div>
          <label
            htmlFor="postcode"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Postcode{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="postcode"
            type="text"
            autoComplete="postal-code"
            placeholder="SW1A 1AA"
            {...register("postcode")}
            className={cn(inputClass, "uppercase")}
          />
          {errors.postcode && (
            <p className={errorClass}>{errors.postcode.message}</p>
          )}
        </div>
      </div>

      <p className="text-xs text-brand-grey">
        We only serve London and the South East. If your property is outside our
        coverage area we'll let you know.
      </p>

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={onBack}
          className={cn(
            "flex-1 rounded-xl border-2 border-border bg-white text-brand-charcoal font-semibold py-3 text-sm transition-colors",
            "hover:border-brand-grey/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
          )}
        >
          ← Back
        </button>
        <button
          type="submit"
          className={cn(
            "flex-[2] rounded-xl bg-compliance-blue text-white font-semibold py-3 text-sm transition-colors",
            "hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
          )}
        >
          Continue →
        </button>
      </div>
    </form>
  );
}
