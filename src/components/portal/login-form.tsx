"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginData } from "@/lib/portal/schemas";
import { loginPortalUser } from "@/lib/portal/actions";

const inputClass = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal",
  "placeholder:text-brand-grey/60",
  "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
);

const labelClass = "mb-1 block text-sm font-medium text-brand-charcoal";
const errorClass = "mt-1 text-xs text-red-600";

export function LoginForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginData) {
    setServerError(null);
    setSubmitting(true);
    const result = await loginPortalUser(data.email, data.password);
    setSubmitting(false);

    if (!result.success) {
      setServerError(result.error);
      return;
    }

    router.push(result.redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
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

      {serverError && <p className={errorClass}>{serverError}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Logging in…" : "Log in"}
      </Button>
    </form>
  );
}
