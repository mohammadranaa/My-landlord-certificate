"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginData } from "@/lib/portal/schemas";
import { loginPortalUser } from "@/lib/portal/actions";
import {
  fieldError,
  formAlert,
  input,
  label,
  primaryButton,
  textLink,
} from "@/components/portal/auth-ui";

export function LoginForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="login-email" className={label}>
          Email
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.co.uk"
          aria-invalid={errors.email ? true : undefined}
          className={input}
          {...register("email")}
        />
        {errors.email && <p className={fieldError}>{errors.email.message}</p>}
      </div>

      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <label htmlFor="login-password" className={`${label} mb-0`}>
            Password
          </label>
          <Link href="/portal/forgot-password" className={`${textLink} text-[13.5px]`}>
            Forgot password?
          </Link>
        </div>
        <div className="flex">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            aria-invalid={errors.password ? true : undefined}
            className={`${input} border-r-0`}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-pressed={showPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="h-12 shrink-0 border border-[#CFD6DE] bg-white px-4 text-[13px] font-semibold text-[#4B5563] hover:text-[#0078b8] focus:outline-none focus:ring-2 focus:ring-[#0093DB]/30"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <p className={fieldError}>{errors.password.message}</p>}
      </div>

      {serverError && (
        <p role="alert" className={formAlert}>
          {serverError}
        </p>
      )}

      <button type="submit" className={`${primaryButton} mt-1`} disabled={submitting}>
        {submitting ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
}
