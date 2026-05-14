"use client";

import { useState } from "react";
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

function SuccessScreen({ data }: { data: PartialBookingData }) {
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

  return (
    <div className="rounded-2xl border border-action-green/30 bg-action-green/5 px-8 py-12 text-center max-w-md mx-auto">
      <div className="w-14 h-14 rounded-full bg-action-green/20 flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-action-green" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-brand-charcoal mb-2">
        Booking received
      </h2>
      <p className="text-brand-grey text-sm mb-4">
        Payment processing is coming soon. Your booking details have been logged
        below (check the browser console).
      </p>
      <div className="rounded-xl bg-white border border-border px-4 py-3 text-left mb-4">
        <p className="text-sm font-semibold text-brand-charcoal mb-1">
          {data.name}
        </p>
        <p className="text-xs text-brand-grey">{data.addressLine1}, {data.postcode?.toUpperCase()}</p>
        <p className="text-xs text-brand-grey mt-2">
          {services.length} service{services.length !== 1 ? "s" : ""} —{" "}
          <span className="font-semibold text-brand-charcoal">
            £{grandTotal.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="text-action-green ml-1">(10% discount applied)</span>
          )}
        </p>
      </div>
      <a
        href="/"
        className="inline-flex items-center gap-1 text-sm text-compliance-blue hover:underline font-medium"
      >
        ← Return to homepage
      </a>
    </div>
  );
}

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<PartialBookingData>({});

  function merge(partial: Partial<PartialBookingData>) {
    setData((prev) => ({ ...prev, ...partial }));
  }

  function handleStep1Complete(stepData: Step1Data) {
    merge(stepData);
    setStep(2);
  }

  function handleStep2Complete(stepData: Step2Data) {
    merge(stepData);
    setStep(3);
  }

  function handleStep3Complete(services: ServiceEntry[]) {
    merge({ services });
    setStep(4);
  }

  function handleStep4Complete(stepData: Step4Data) {
    merge(stepData);
    setStep(5);
  }

  function handleSubmit(termsAccepted: boolean) {
    merge({ acceptedTerms: termsAccepted });

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

    const bookingObject = {
      ...data,
      acceptedTerms: termsAccepted,
      pricing: {
        subtotal,
        discount,
        servicesTotal: total,
        additionalCharges: charges,
        grandTotal: total + charges,
      },
    };

    // eslint-disable-next-line no-console
    console.log("📋 Booking object:", bookingObject);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <SuccessScreen data={data} />
      </div>
    );
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
              <Step5Review
                data={data}
                onBack={() => setStep(4)}
                onGoToStep={setStep}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>

        <OrderSummary data={data} />
      </div>
    </div>
  );
}
