"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { calculateBundlePrice, ADDITIONAL_CHARGES } from "@/lib/pricing";
import type { ServiceType } from "@/lib/pricing";
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


export function BookingForm() {
  const router = useRouter();
  const posthog = usePostHog();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [data, setData] = useState<PartialBookingData>({});

  useEffect(() => {
    posthog?.capture("booking_started");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function merge(partial: Partial<PartialBookingData>) {
    setData((prev) => ({ ...prev, ...partial }));
  }

  function handleStep1Complete(stepData: Step1Data) {
    merge(stepData);
    posthog?.capture("property_entered", {
      property_type: stepData.propertyCategory,
      property_size: stepData.propertySize,
    });
    setStep(2);
  }

  function handleStep2Complete(stepData: Step2Data) {
    merge(stepData);
    posthog?.capture("contact_entered");
    setStep(3);
  }

  function handleStep3Complete(services: ServiceEntry[]) {
    merge({ services });
    posthog?.capture("service_selected", {
      services: services.map((s) => s.serviceType),
      service_count: services.length,
    });
    setStep(4);
  }

  function handleStep4Complete(stepData: Step4Data) {
    merge(stepData);
    posthog?.capture("slot_selected", {
      preferred_date: stepData.preferredDate,
      time_preference: stepData.timePreference,
    });
    setStep(5);
  }

  async function handleSubmit(termsAccepted: boolean): Promise<void> {
    merge({ acceptedTerms: termsAccepted });
    setIsSubmitting(true);
    setSubmitError(null);
    posthog?.capture("payment_initiated", {
      total_price: data.services?.reduce((sum, s) => sum + s.price, 0) ?? 0,
      service_count: data.services?.length ?? 0,
    });

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
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server error ${res.status}`);
      }

      try {
        sessionStorage.setItem(
          "mlc_booking_success",
          JSON.stringify({
            name: data.name,
            email: data.email,
            services: services.map((s) => ({
              label: s.label,
              optionLabel: s.optionLabel,
              price: s.price,
            })),
            appointment: { date: data.preferredDate, timeSlot: data.timePreference },
            totalPrice: grandTotal,
            discount,
          }),
        );
      } catch {
        // sessionStorage unavailable — success page shows generic state
      }

      posthog?.capture("booking_confirmed", {
        total_price: grandTotal,
        services: (data.services ?? []).map((s) => s.serviceType),
        discount,
      });
      router.push("/book/success");
    } catch {
      posthog?.capture("booking_error");
      setSubmitError("Something went wrong. Please try again or call us on 0330 133 0066.");
      setIsSubmitting(false);
    }
  }

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
    </div>
  );
}
