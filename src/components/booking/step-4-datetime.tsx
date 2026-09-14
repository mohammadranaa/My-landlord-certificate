"use client";

import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSunday,
  isToday,
  isSameDay,
  isSameMonth,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  parseISO,
} from "date-fns";
import { cn } from "@/lib/utils";
import { step4Schema, type Step4Data } from "@/lib/booking-schema";
import { ADDITIONAL_CHARGES } from "@/lib/pricing";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";
import { getEarliestBookingDate, isPastUkBookingCutoff } from "@/lib/booking-datetime";

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface CalendarProps {
  value: string;
  onChange: (iso: string) => void;
  earliestDate: Date;
}

function Calendar({ value, onChange, earliestDate }: CalendarProps) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today);

  const selectedDate = value ? parseISO(value) : null;

  const monthStart = startOfMonth(viewMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(endOfMonth(viewMonth), { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  function isDisabled(day: Date) {
    if (isSunday(day)) return true;
    if (day < earliestDate) return true;
    return false;
  }

  return (
    <div className="rounded-xl border border-border bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <button
          type="button"
          onClick={() => setViewMonth(subMonths(viewMonth, 1))}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue"
          aria-label="Previous month"
        >
          <svg className="w-4 h-4 text-brand-charcoal" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-sm font-semibold text-brand-charcoal">
          {format(viewMonth, "MMMM yyyy")}
        </span>
        <button
          type="button"
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue"
          aria-label="Next month"
        >
          <svg className="w-4 h-4 text-brand-charcoal" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 px-2">
        {WEEKDAY_LABELS.map((d) => (
          <div
            key={d}
            className={cn(
              "text-center text-xs font-medium py-2",
              d === "Sun" ? "text-brand-grey/40" : "text-brand-grey",
            )}
          >
            {d}
          </div>
        ))}
        {days.map((day) => {
          const disabled = isDisabled(day);
          const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
          const inMonth = isSameMonth(day, viewMonth);
          const todayDay = isToday(day);

          return (
            <div key={day.toISOString()} className="p-0.5">
              <button
                type="button"
                disabled={disabled}
                onClick={() => !disabled && onChange(format(day, "yyyy-MM-dd"))}
                className={cn(
                  "w-full aspect-square rounded-lg text-xs sm:text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
                  !inMonth && "text-brand-grey/30",
                  inMonth && !disabled && !isSelected && "text-brand-charcoal hover:bg-compliance-blue/10",
                  todayDay && !isSelected && "ring-1 ring-compliance-blue/40",
                  isSelected && "bg-compliance-blue text-white",
                  disabled && !isSelected && "text-brand-grey/25 cursor-not-allowed",
                )}
                aria-label={format(day, "d MMMM yyyy")}
                aria-pressed={isSelected}
              >
                {format(day, "d")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface Step4Props {
  defaultValues?: Partial<Step4Data>;
  onBack: () => void;
  onComplete: (data: Step4Data) => void;
}

export function Step4DateTime({ defaultValues, onBack, onComplete }: Step4Props) {
  // Computed once on mount — a user filling in the form for a few minutes
  // around the exact 5pm boundary is an acceptable edge case to not chase.
  const isAfterCutoff = useMemo(() => isPastUkBookingCutoff(), []);
  const earliestDate = useMemo(() => getEarliestBookingDate(), []);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      congestionZone: defaultValues?.congestionZone ?? false,
      parkingRestriction: defaultValues?.parkingRestriction ?? false,
      preferredDate: defaultValues?.preferredDate ?? "",
      timePreference: defaultValues?.timePreference ?? "morning",
    },
  });

  const congestion = watch("congestionZone");
  const parking = watch("parkingRestriction");

  return (
    <form onSubmit={handleSubmit(onComplete)} className="space-y-6" noValidate>
      <div>
        <h2 className="text-xl font-bold text-brand-charcoal mb-1">
          Choose a date & time
        </h2>
        <p className="text-sm text-brand-grey mb-4">
          We're available Monday to Saturday. We'll confirm your exact slot by
          text.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-brand-charcoal">
          Additional charges
        </p>

        <label className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 cursor-pointer hover:border-compliance-blue/40 transition-colors">
          <input
            type="checkbox"
            {...register("congestionZone")}
            className="mt-0.5 w-4 h-4 rounded accent-compliance-blue shrink-0"
          />
          <div>
            <p className="text-sm font-medium text-brand-charcoal">
              Property is in the Congestion Zone{" "}
              <span className="text-brand-grey font-normal">
                (+£{ADDITIONAL_CHARGES.congestionZone})
              </span>
            </p>
            <p className="text-xs text-brand-grey mt-0.5">
              Applies to the central London ULEZ/Congestion Charge zone
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 cursor-pointer hover:border-compliance-blue/40 transition-colors">
          <input
            type="checkbox"
            {...register("parkingRestriction")}
            className="mt-0.5 w-4 h-4 rounded accent-compliance-blue shrink-0"
          />
          <div>
            <p className="text-sm font-medium text-brand-charcoal">
              Parking restrictions nearby{" "}
              <span className="text-brand-grey font-normal">
                (+£{ADDITIONAL_CHARGES.parking})
              </span>
            </p>
            <p className="text-xs text-brand-grey mt-0.5">
              CPZ, permit zones, or no free parking within 5 minutes
            </p>
          </div>
        </label>

        {(congestion || parking) && (
          <p className="text-xs text-brand-grey bg-warm-white rounded-lg px-3 py-2">
            Additional charges total:{" "}
            <span className="font-semibold text-brand-charcoal">
              £
              {(
                (congestion ? ADDITIONAL_CHARGES.congestionZone : 0) +
                (parking ? ADDITIONAL_CHARGES.parking : 0)
              ).toFixed(2)}
            </span>
          </p>
        )}
      </div>

      <div>
        {/* Always shown — urgent booking CTA. Wording changes depending on
            whether next-day slots are still bookable online (before 5pm UK)
            or the cutoff has passed (day-after-tomorrow is the earliest). */}
        <div className="mb-5 p-4 rounded-xl border border-border bg-warm-white flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-compliance-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              className="w-4 h-4 text-compliance-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            {isAfterCutoff ? (
              <>
                <p className="text-sm font-semibold text-brand-charcoal">
                  Need an urgent appointment?
                </p>
                <p className="text-xs text-brand-grey mt-0.5 mb-2">
                  Online bookings after 5pm are for the day after tomorrow onwards.
                  For tomorrow&apos;s availability, call us now.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold text-brand-charcoal">
                  Need a same-day or urgent booking?
                </p>
                <p className="text-xs text-brand-grey mt-0.5 mb-2">
                  Next-day appointments are available online until 5pm. For
                  same-day bookings, call us directly.
                </p>
              </>
            )}
            <a
              href={TEL}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-compliance-blue hover:underline"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <p className="text-sm font-medium text-brand-charcoal mb-2">
          Preferred appointment date{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </p>
        <Controller
          control={control}
          name="preferredDate"
          render={({ field }) => (
            <Calendar value={field.value} onChange={field.onChange} earliestDate={earliestDate} />
          )}
        />
        {isAfterCutoff ? (
          <p className="text-xs text-brand-grey mt-2">
            Earliest available: the day after tomorrow. For tomorrow, call
            <a href={TEL} className="text-compliance-blue font-medium ml-1">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        ) : (
          <p className="text-xs text-brand-grey mt-2">
            Next-day appointments available — book by 5pm today for tomorrow.
          </p>
        )}
        {errors.preferredDate && (
          <p className="mt-1 text-xs text-red-600">
            {errors.preferredDate.message}
          </p>
        )}
      </div>

      <div>
        <p className="text-sm font-medium text-brand-charcoal mb-3">
          Preferred time slot{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          {(["morning", "afternoon"] as const).map((slot) => (
            <label
              key={slot}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border-2 p-4 cursor-pointer transition-colors",
                watch("timePreference") === slot
                  ? "border-compliance-blue bg-compliance-blue/5"
                  : "border-border bg-white hover:border-compliance-blue/40",
              )}
            >
              <input
                type="radio"
                value={slot}
                {...register("timePreference")}
                className="sr-only"
              />
              <span className="text-sm font-semibold text-brand-charcoal capitalize">
                {slot === "morning" ? "Morning" : "Afternoon"}
              </span>
              <span className="text-xs text-brand-grey">
                {slot === "morning" ? "8am – 12pm" : "12pm – 6pm"}
              </span>
            </label>
          ))}
        </div>
        {errors.timePreference && (
          <p className="mt-1 text-xs text-red-600">
            {errors.timePreference.message}
          </p>
        )}
      </div>

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
          Review booking →
        </button>
      </div>
    </form>
  );
}
