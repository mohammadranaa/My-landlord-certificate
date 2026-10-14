"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { signupSchema, type SignupData } from "@/lib/portal/schemas";
import { signUpPortalUser } from "@/lib/portal/actions";
import {
  fieldError,
  formAlert,
  input,
  label,
  primaryButton,
  textLink,
} from "@/components/portal/auth-ui";

type SignupFormValues = z.input<typeof signupSchema>;

const optional = (
  <span className="ml-1 font-medium normal-case tracking-normal text-[#6B7280]">— optional</span>
);

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="signup-name" className={label}>
            Full name
          </label>
          <input id="signup-name" autoComplete="name" className={input} {...register("fullName")} />
          {errors.fullName && <p className={fieldError}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="signup-phone" className={label}>
            Phone{optional}
          </label>
          <input id="signup-phone" type="tel" autoComplete="tel" className={input} {...register("phone")} />
        </div>
      </div>

      <div>
        <label htmlFor="signup-email" className={label}>
          Email
        </label>
        <input id="signup-email" type="email" autoComplete="email" className={input} {...register("email")} />
        {errors.email && <p className={fieldError}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="signup-company" className={label}>
          Company or agency name
        </label>
        <input
          id="signup-company"
          autoComplete="organization"
          placeholder="Landlord? Use your own name"
          className={input}
          {...register("agencyName")}
        />
        {errors.agencyName && <p className={fieldError}>{errors.agencyName.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="signup-website" className={label}>
            Website{optional}
          </label>
          <input id="signup-website" type="url" autoComplete="url" className={input} {...register("website")} />
        </div>
        <div>
          <label htmlFor="signup-properties" className={label}>
            Properties{optional}
          </label>
          <input
            id="signup-properties"
            type="number"
            inputMode="numeric"
            min={0}
            className={input}
            {...register("propertiesManaged")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="signup-password" className={label}>
          Create a password
        </label>
        <input
          id="signup-password"
          type="password"
          autoComplete="new-password"
          className={input}
          {...register("password")}
        />
        {errors.password ? (
          <p className={fieldError}>{errors.password.message}</p>
        ) : (
          <p className="mt-1.5 text-[13px] text-[#6B7280]">At least 8 characters.</p>
        )}
      </div>

      {serverError && (
        <p role="alert" className={formAlert}>
          {serverError}
        </p>
      )}

      <button type="submit" className={`${primaryButton} mt-1`} disabled={submitting}>
        {submitting ? "Sending request…" : "Request access"}
      </button>

      <p className="text-[13px] leading-relaxed text-[#6B7280]">
        By requesting access you agree to our{" "}
        <Link href="/terms" className={textLink}>
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className={textLink}>
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
