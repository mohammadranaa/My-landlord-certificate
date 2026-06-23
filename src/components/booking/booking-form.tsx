"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { calculateBundlePrice, ADDITIONAL_CHARGES } from "@/lib/pricing";
import type { ServiceType } from "@/lib/pricing";
import { GOOGLE_ADS_CONVERSION_LEAD } from "@/lib/constants";
import type {
  PartialBookingData,
  ServiceEntry,
  Step1Data,
  Step2Data,
  Step4Data,
} from "@/lib/booking-schema";
import { ProgressBar } from "./progress-bar";
import { OrderSummary } from "./order-summary";
import { Step1PropertyType } from "./step-1-property-type";
import { Step2PersonalInfo } from "./step-2-personal-info";
import { Step3Services } from "./step-3-services";
import { Step4DateTime } from "./step-4-datetime";
import { Step5Review } from "./step-5-review";
import { SaveQuotePrompt } from "./save-quote-prompt";


export function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? undefined;
  const preselectedType = (searchParams.get("type") as "residential" | "commercial") ?? undefined;

  const sessionId = useRef(
    `form_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
  ).current;

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [data, setData] = useState<PartialBookingData>({
    propertyCategory: preselectedType ?? undefined,
  });

  function merge(partial: Partial<PartialBookingData>) {
    setData((prev) => ({ ...prev, ...partial }));
  }

  async function savePartialBooking(
    currentStep: number,
    currentData: PartialBookingData,
  ) {
    if (!currentData.email) return;

    const services = (currentData.services ?? []).map((s) => ({
      type: s.serviceType,
      variant: s.optionLabel,
      price: s.price,
    }));

    const { total } = calculateBundlePrice(
      (currentData.services ?? []).map((s) => ({
        service: s.serviceType as ServiceType,
        price: s.price,
      })),
    );
    const charges =
      (currentData.congestionZone ? ADDITIONAL_CHARGES.congestionZone : 0) +
      (currentData.parkingRestriction ? ADDITIONAL_CHARGES.parking : 0);

    try {
      await fetch("/api/partial-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          step: currentStep,
          name: currentData.name ?? "",
          email: currentData.email,
          phone: currentData.phone ?? "",
          propertyType: currentData.propertyCategory ?? "",
          propertySubType: currentData.propertySize ?? "",
          services,
          property: {
            streetAddress: [currentData.addressLine1, currentData.addressLine2]
              .filter(Boolean)
              .join(", "),
            city: currentData.city ?? "",
            postcode: (currentData.postcode ?? "").toUpperCase(),
          },
          appointment: {
            date: currentData.preferredDate ?? "",
            timeSlot:
              currentData.timePreference === "morning"
                ? "Morning (8am–12pm)"
                : currentData.timePreference === "afternoon"
                  ? "Afternoon (12pm–6pm)"
                  : "",
          },
          totalPrice: total + charges,
          sessionId,
        }),
      });
    } catch {
      // Silently fail — never block the user
    }
  }

  function handleStep1Complete(stepData: Step1Data) {
    const merged = { ...data, ...stepData };
    merge(stepData);
    void savePartialBooking(1, merged);
    setStep(2);
  }

  function handleStep2Complete(stepData: Step2Data) {
    const merged = { ...data, ...stepData };
    merge(stepData);
    void savePartialBooking(2, merged);
    setStep(3);
  }

  function handleStep3Complete(services: ServiceEntry[]) {
    const merged = { ...data, services };
    merge({ services });
    void savePartialBooking(3, merged);
    setStep(4);
  }

  function handleStep4Complete(stepData: Step4Data) {
    const merged = { ...data, ...stepData };
    merge(stepData);
    void savePartialBooking(4, merged);
    setStep(5);
  }

  async function handleSubmit(termsAccepted: boolean): Promise<void> {
    merge({ acceptedTerms: termsAccepted });
    setIsSubmitting(true);
    setSubmitError(null);
    const services = data.services ?? [];
    const { discount, total } = calculateBundlePrice(
      services.map((s) => ({
        service: s.serviceType as ServiceType,
        price: s.price,
      })),
    );
    const charges =
      (data.congestionZone ? ADDITIONAL_CHARGES.congestionZone : 0) +
      (data.parkingRestriction ? ADDITIONAL_CHARGES.parking : 0);
    const grandTotal = total + charges;

    const payload = {
      customer: {
        name: data.name ?? "",
        email: data.email ?? "",
        phone: data.phone ?? "",
        tenantPhone: data.tenantPhone ?? undefined,
      },
      property: {
        streetAddress: [data.addressLine1, data.addressLine2].filter(Boolean).join(", "),
        city: data.city ?? "",
        postcode: (data.postcode ?? "").toUpperCase(),
      },
      propertyType: data.propertyCategory ?? "",
      propertySubType: data.propertySize ?? "",
      services: services.map((s) => ({
        type: s.serviceType,
        label: s.label,
        variant: s.optionLabel,
        price: s.price,
      })),
      additionalCharges: {
        congestionCharge: data.congestionZone ?? false,
        parkingCharge: data.parkingRestriction ?? false,
      },
      appointment: {
        date: data.preferredDate ?? "",
        timeSlot: data.timePreference === "morning" ? "Morning (8am–12pm)" : "Afternoon (12pm–6pm)",
      },
      totalPrice: grandTotal,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server error ${res.status}`);
      }

      const { url } = (await res.json()) as { url?: string };

      if (!url) {
        throw new Error("No checkout URL returned");
      }

      // Push begin_checkout to the dataLayer (GTM trigger: Custom Event = "begin_checkout")
      const w = window as unknown as {
        dataLayer: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "begin_checkout",
        currency: "GBP",
        value: grandTotal,
        items: services.map((s) => ({
          item_name: s.label ?? s.serviceType,
          item_category: s.serviceType,
          price: s.price,
          quantity: 1,
        })),
      });

      // Fire the Google Ads "Submit lead form" conversion (consent-gated: gtag
      // only exists once analytics consent is granted). Uses sendBeacon so it
      // survives the redirect to Stripe.
      if (typeof w.gtag === "function") {
        w.gtag("event", "conversion", {
          send_to: GOOGLE_ADS_CONVERSION_LEAD,
          value: grandTotal,
          currency: "GBP",
        });
      }

      window.location.href = url;
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or call us on 020 3996 1070.",
      );
      setIsSubmitting(false);
    }
  }

  const { total: quoteServicesTotal } = calculateBundlePrice(
    (data.services ?? []).map((s) => ({
      service: s.serviceType as ServiceType,
      price: s.price,
    })),
  );
  const quoteAdditional =
    (data.congestionZone ? ADDITIONAL_CHARGES.congestionZone : 0) +
    (data.parkingRestriction ? ADDITIONAL_CHARGES.parking : 0);
  const quoteTotal = quoteServicesTotal + quoteAdditional;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <ProgressBar currentStep={step} />

      <OrderSummary data={data} mobile />

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-border p-6">
            {step === 1 && (
              <Step1PropertyType
                defaultValues={{
                  propertyCategory: data.propertyCategory,
                  propertySize: data.propertySize,
                }}
                onComplete={handleStep1Complete}
              />
            )}
            {step === 2 && (
              <Step2PersonalInfo
                defaultValues={{
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  tenantPhone: data.tenantPhone,
                  addressLine1: data.addressLine1,
                  addressLine2: data.addressLine2,
                  city: data.city,
                  postcode: data.postcode,
                }}
                onBack={() => setStep(1)}
                onComplete={handleStep2Complete}
              />
            )}
            {step === 3 && (
              <Step3Services
                propertyCategory={data.propertyCategory ?? "residential"}
                defaultServices={data.services ?? []}
                preselectedServiceId={data.services?.length ? undefined : preselectedService}
                onBack={() => setStep(2)}
                onComplete={handleStep3Complete}
              />
            )}
            {step === 4 && (
              <Step4DateTime
                defaultValues={{
                  congestionZone: data.congestionZone,
                  parkingRestriction: data.parkingRestriction,
                  preferredDate: data.preferredDate,
                  timePreference: data.timePreference,
                }}
                onBack={() => setStep(3)}
                onComplete={handleStep4Complete}
              />
            )}
            {step === 5 && (
              <>
                <Step5Review
                  data={data}
                  onBack={() => setStep(4)}
                  onGoToStep={setStep}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
                {submitError && (
                  <p className="mt-3 text-sm text-red-600 text-center">{submitError}</p>
                )}
              </>
            )}
          </div>
        </div>

        <OrderSummary data={data} />
      </div>

      <SaveQuotePrompt
        email={data.email ?? ""}
        name={data.name ?? ""}
        services={(data.services ?? []).map((s) => ({
          type: s.serviceType,
          variant: s.optionLabel,
          price: s.price,
        }))}
        totalPrice={quoteTotal}
        onDismiss={() => {}}
      />
    </div>
  );
}
