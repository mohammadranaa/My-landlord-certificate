"use client";

import { useRouter } from "next/navigation";
import { ChangePasswordForm } from "./change-password-form";

export function ResetPasswordPanel() {
  const router = useRouter();
  return <ChangePasswordForm onDone={() => router.push("/portal")} />;
}
