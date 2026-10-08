import "server-only";
import { Resend } from "resend";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mylandlordcertificate.co.uk";

const FROM =
  process.env.PORTAL_FROM_EMAIL ?? "My Landlord Certificate <portal@mylandlordcertificate.co.uk>";

/** Your team's inbox for portal requests (set PORTAL_NOTIFY_EMAIL in Vercel). */
export function staffInbox(): string | null {
  return process.env.PORTAL_NOTIFY_EMAIL ?? null;
}

export function escapeHtml(value: string | null | undefined): string {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Simple branded wrapper that renders consistently in Gmail/Outlook. */
export function emailLayout(heading: string, bodyHtml: string): string {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#FAFAF7;font-family:Arial,Helvetica,sans-serif;color:#1F2937;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #dcdfd8;">
        <tr><td style="background:#1F2937;padding:18px 24px;color:#FAFAF7;font-size:15px;font-weight:bold;letter-spacing:.04em;">
          MY LANDLORD CERTIFICATE <span style="color:#80D100;font-weight:normal;">· AGENT PORTAL</span>
        </td></tr>
        <tr><td style="padding:24px;">
          <h1 style="margin:0 0 16px;font-size:20px;color:#1F2937;">${escapeHtml(heading)}</h1>
          ${bodyHtml}
        </td></tr>
        <tr><td style="padding:16px 24px;border-top:1px solid #e7e4dc;font-size:12px;color:#9CA3AF;">
          My Landlord Certificate · <a href="${SITE_URL}" style="color:#0078b8;">${SITE_URL.replace("https://", "")}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

/** Key/value table used in staff notification emails. */
export function detailsTable(rows: [string, string | null | undefined][]): string {
  const body = rows
    .filter(([, v]) => v !== null && v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6B7280;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0;font-size:14px;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  return `<table cellpadding="0" cellspacing="0" style="margin:0 0 16px;">${body}</table>`;
}

export function button(href: string, label: string): string {
  return `<a href="${href}" style="display:inline-block;background:#0093DB;color:#FAFAF7;padding:12px 20px;text-decoration:none;font-weight:bold;font-size:14px;">${escapeHtml(
    label,
  )}</a>`;
}

/**
 * Sends an email via Resend. Returns false (and logs) instead of throwing if
 * Resend isn't configured or the send fails, so a portal action never breaks
 * because of email — the request is always recorded in the database first.
 */
export async function sendEmail(input: {
  to: string | string[];
  subject: string;
  html: string;
  bcc?: string | string[];
  replyTo?: string;
}): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[portal email] RESEND_API_KEY not set — email not sent:", input.subject);
    return false;
  }
  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: FROM,
      to: input.to,
      bcc: input.bcc,
      replyTo: input.replyTo,
      subject: input.subject,
      html: input.html,
    });
    if (error) {
      console.error("[portal email] send failed:", input.subject, error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[portal email] send threw:", input.subject, err);
    return false;
  }
}

/** Notification to your own team. */
export async function sendStaffEmail(subject: string, html: string, replyTo?: string): Promise<boolean> {
  const to = staffInbox();
  if (!to) {
    console.warn("[portal email] PORTAL_NOTIFY_EMAIL not set — staff notification not sent:", subject);
    return false;
  }
  return sendEmail({ to, subject, html, replyTo });
}
