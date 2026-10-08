"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { z } from "zod";
import { signupSchema, type SignupData } from "@/lib/portal/schemas";
import { signUpPortalUser } from "@/lib/portal/actions";

const inputClass = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal",
  "placeholder:text-brand-grey/60",
  "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
);
const labelClass = "mb-1 block text-sm font-medium text-brand-charcoal";
const errorClass = "mt-1 text-xs text-red-600";

type SignupFormValues = z.input<typeof signupSchema>;

export function SignupForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues, unknown, SignupData>({ resolver: zodResolver(signupSchema) });

  async function onSubmit(data: SignupData) {
    setServerError(null);
    setSubmitting(true);
    const result = await signUpPortalUser(data);
    setSubmitting(false);
    if (!result.success) {
      setServerError(result.error);
      return;
    }
    router.push("/portal/pending");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="agencyName" className={labelClass}>Agency name</label>
        <input id="agencyName" className={inputClass} {...register("agencyName")} />
        {errors.agencyName && <p className={errorClass}>{errors.agencyName.message}</p>}
      </div>
      <div>
        <label htmlFor="fullName" className={labelClass}>Your full name</label>
        <input id="fullName" autoComplete="name" className={inputClass} {...register("fullName")} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Work email</label>
        <input id="email" type="email" autoComplete="email" className={inputClass} {...register("email")} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password" className={labelClass}>Choose a password</label>
        <input id="password" type="password" autoComplete="new-password" className={inputClass} {...register("password")} />
        {errors.password && <p className={errorClass}>{errors.password.message}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" type="tel" autoComplete="tel" className={inputClass} {...register("phone")} />
        </div>
        <div>
          <label htmlFor="propertiesManaged" className={labelClass}>Properties managed</label>
          <input id="propertiesManaged" type="number" min={0} className={inputClass} {...register("propertiesManaged")} />
        </div>
      </div>
      <div>
        <label htmlFor="website" className={labelClass}>Website (optional)</label>
        <input id="website" className={inputClass} {...register("website")} />
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending request…" : "Request access"}
      </Button>
    </form>
  );
}
