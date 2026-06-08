"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { parseISO } from "date-fns";

type ServiceSummary = {
  label: string;
  optionLabel: string;
  price: number;
};

type BookingSummary = {
  name: string;
  email: string;
  services: ServiceSummary[];
  appointment: { date: string; timeSlot: string };
  totalPrice: number;
  discount: number;
};

export default function BookingSuccessPage() {
  const [summary, setSummary] = useState<BookingSummary | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("mlc_booking_success");
      if (raw) {
        setSummary(JSON.parse(raw) as BookingSummary);
        sessionStorage.removeItem("mlc_booking_success");
      }
    } catch {
      // sessionStorage unavailable — show generic success
    }
  }, []);

  const formattedDate =
    summary?.appointment.date
      ? parseISO(summary.appointment.date).toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null;

  const timeLabel =
    summary?.appointment.timeSlot === "morning"
      ? "Morning — 8am to 12pm"
      : summary?.appointment.timeSlot === "afternoon"
        ? "Afternoon — 12pm to 6pm"
        : summary?.appointment.timeSlot ?? "";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Checkmark */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-20 h-20 rounded-full bg-action-green/15 flex items-center justify-center mb-5">
          <svg
            className="w-10 h-10 text-action-green"
            fill="none"
            viewBox="0 0 24 24"
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
        </div>
        <h1 className="text-3xl font-bold text-brand-charcoal mb-3">
          Booking Request Received!
        </h1>
        <p className="text-brand-charcoal/70 max-w-md">
          Thank you{summary?.name ? `, ${summary.name.split(" ")[0]}` : ""}. Our team will call you within{" "}
          <strong className="text-brand-charcoal">2 hours</strong> to confirm your appointment and arrange payment.
        </p>
        {summary?.email && (
          <p className="text-sm text-brand-grey mt-2">
            A confirmation will be sent to <span className="text-brand-charcoal">{summary.email}</span>
          </p>
        )}
      </div>

      {/* Booking summary */}
      {summary && (
        <div className="rounded-2xl border border-border bg-white p-6 mb-8">
          <h2 className="font-bold text-brand-charcoal mb-4 text-sm uppercase tracking-wide">
            Booking summary
          </h2>

          <div className="space-y-2 mb-4">
            {summary.services.map((s) => (
              <div key={s.label} className="flex justify-between items-start gap-3 text-sm">
                <div>
                  <p className="font-medium text-brand-charcoal">{s.label}</p>
                  <p className="text-xs text-brand-grey">{s.optionLabel}</p>
                </div>
                <span className="tabular-nums text-brand-charcoal whitespace-nowrap">
                  £{s.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {summary.discount > 0 && (
            <div className="flex justify-between text-sm text-action-green font-medium mb-2">
              <span>10% multi-service discount</span>
              <span className="tabular-nums">−£{summary.discount.toFixed(2)}</span>
            </div>
          )}

          <div className="border-t border-border pt-3 flex justify-between items-center">
            <p className="font-bold text-brand-charcoal">Estimated total</p>
            <p className="text-xl font-bold text-compliance-blue tabular-nums">
              £{summary.totalPrice.toFixed(2)}
            </p>
          </div>

          {(formattedDate || timeLabel) && (
            <div className="mt-4 pt-4 border-t border-border text-sm text-brand-charcoal/70 space-y-0.5">
              {formattedDate && <p>Preferred date: <span className="text-brand-charcoal font-medium">{formattedDate}</span></p>}
              {timeLabel && <p>Preferred slot: <span className="text-brand-charcoal font-medium">{timeLabel}</span></p>}
            </div>
          )}
        </div>
      )}

      {/* What happens next */}
      <div className="rounded-2xl bg-warm-white border border-border p-6 mb-8">
        <h2 className="font-bold text-brand-charcoal mb-5">What happens next</h2>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              title: "We call you",
              body: "One of our team will call you within 2 hours (during business hours) to confirm the appointment time.",
            },
            {
              n: "2",
              title: "Payment arranged",
              body: "We take payment over the phone or send a secure payment link — no card details stored.",
            },
            {
              n: "3",
              title: "Engineer visits",
              body: "An accredited engineer attends at the agreed time. Most certificates are issued within 24 hours.",
            },
          ].map(({ n, title, body }) => (
            <li key={n} className="flex gap-4">
              <span className="w-7 h-7 rounded-full bg-compliance-blue text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {n}
              </span>
              <div>
                <p className="font-semibold text-brand-charcoal text-sm">{title}</p>
                <p className="text-sm text-brand-charcoal/70 mt-0.5 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Trust line */}
      <div className="text-center mb-8 space-y-1">
        <p className="text-sm text-brand-grey">
          NICEIC approved · Gas Safe Registered · 500+ London landlords served
        </p>
        <p className="text-sm text-brand-grey">
          Questions? Call us on{" "}
          <a href="tel:03301330066" className="text-compliance-blue font-medium hover:underline">
            0330 133 0066
          </a>
        </p>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-compliance-blue hover:underline"
        >
          ← Return to homepage
        </Link>
      </div>
    </div>
  );
}
