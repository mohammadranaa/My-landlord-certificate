"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signupSchema, type SignupData } from "@/lib/portal/schemas";
import { signUpPortalUser } from "@/lib/portal/actions";

type SignupFormValues = z.input<typeof signupSchema>;

const inputClass = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal",
  "placeholder:text-brand-grey/60",
  "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
);

const labelClass = "mb-1 block text-sm font-medium text-brand-charcoal";
const errorClass = "mt-1 text-xs text-red-600";

export function SignupForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues, unknown, SignupData>({
    resolver: zodResolver(signupSchema),
  });

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label className={labelClass}>Agency name</label>
        <input className={inputClass} {...register("agencyName")} />
        {errors.agencyName && <p className={errorClass}>{errors.agencyName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Your full name</label>
        <input className={inputClass} {...register("fullName")} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input type="email" className={inputClass} {...register("email")} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Password</label>
        <input type="password" className={inputClass} {...register("password")} />
        {errors.password && <p className={errorClass}>{errors.password.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Phone (optional)</label>
        <input className={inputClass} {...register("phone")} />
      </div>

      <div>
        <label className={labelClass}>Website (optional)</label>
        <input className={inputClass} {...register("website")} />
      </div>

      <div>
        <label className={labelClass}>Properties managed (optional)</label>
        <input type="number" min={0} className={inputClass} {...register("propertiesManaged")} />
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Creating account…" : "Create account"}
      </Button>
    </form>
  );
}
