"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  fieldError,
  formAlert,
  input,
  label,
  primaryButton,
} from "@/components/portal/auth-ui";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Enter a valid email address");
      return;
    }
    setSubmitting(true);
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/portal/auth/callback?next=/portal/reset-password`;
    // The result is deliberately ignored: the same message is shown whether or
    // not an account exists, so this page can't be used to discover accounts.
    await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo });
    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="border border-[#dcdfd8] bg-white px-[18px] py-4 text-[15px] leading-relaxed text-[#374151]">
        <p className="font-semibold text-[#1F2937]">Check your inbox</p>
        <p className="mt-1">
          If an account exists for <strong>{email.trim()}</strong>, a reset link is on its way. It
          expires in one hour. Check your spam folder if it hasn&apos;t arrived within a few minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="forgot-email" className={label}>
          Email
        </label>
        <input
          id="forgot-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          className={input}
        />
        {error && <p className={fieldError}>{error}</p>}
      </div>
      <button type="submit" className={primaryButton} disabled={submitting}>
        {submitting ? "Sending…" : "Send reset link"}
      </button>
    </form>
  );
}

export function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (password !== confirm) {
      setError("The two passwords don't match");
      return;
    }
    setSubmitting(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSubmitting(false);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    router.push("/portal/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="reset-password" className={label}>
          New password
        </label>
        <input
          id="reset-password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={input}
        />
        <p className="mt-1.5 text-[13px] text-[#6B7280]">At least 8 characters.</p>
      </div>
      <div>
        <label htmlFor="reset-confirm" className={label}>
          Confirm new password
        </label>
        <input
          id="reset-confirm"
          type="password"
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className={input}
        />
      </div>
      {error && (
        <p role="alert" className={formAlert}>
          {error}
        </p>
      )}
      <button type="submit" className={primaryButton} disabled={submitting}>
        {submitting ? "Saving…" : "Save and log in"}
      </button>
    </form>
  );
}
