import "server-only";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import type {
  PortalJobSummary,
  PortalCertificate,
  PortalInvoice,
  PortalProperty,
} from "@/types/database";
// (no functional change here — see the separate status.tsx update for the
// "Missing" → "Not available" label wording fix)

// ── Certificate type classification ─────────────────────────────────────────

export type CertCode = "EPC" | "GAS" | "EICR" | "FSC" | "FRA" | "LEG" | "PAT" | "ALM";

export const CERT_CODES: CertCode[] = ["EPC", "GAS", "EICR", "FSC", "FRA", "LEG", "PAT", "ALM"];

export const CERT_TYPE_LABELS: Record<CertCode, string> = {
  EPC: "EPC",
  GAS: "Gas Safety (CP12)",
  EICR: "EICR",
  FSC: "Fire Safety Certificate",
  FRA: "Fire Risk Assessment",
  LEG: "Legionella Assessment",
  PAT: "PAT Testing",
  ALM: "Smoke & CO Alarms",
};

export function classifyCertType(rawType: string | null): CertCode | null {
  if (!rawType) return null;
  const t = rawType.toLowerCase();
  if (t.includes("eicr") || t.includes("electrical")) return "EICR";
  if (t.includes("gas")) return "GAS";
  if (t.includes("epc")) return "EPC";
  if (t.includes("legionella")) return "LEG";
  if (t.includes("pat")) return "PAT";
  if (t.includes("alarm") || t.includes("smoke")) return "ALM";
  if (t.includes("risk assessment") || t === "fra") return "FRA";
  if (t.includes("fire")) return "FSC";
  return null;
}

// ── Certificate status ──────────────────────────────────────────────────────

export type CertStatus = "valid" | "expiring" | "expired" | "booked" | "missing" | "na";

export function certExpiryStatus(expiryDate: string | null): "valid" | "expiring" | "expired" {
  if (!expiryDate) return "valid";
  const days = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (days < 0) return "expired";
  if (days <= 30) return "expiring";
  return "valid";
}

export function daysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

// ── Property grouping — real property_id joins ──────────────────────────────

export interface InvoiceRow {
  id: string;
  job_id: string | null;
  status: string | null;
  balance_due: number | null;
  date: string | null;
}

export interface PropertyGroup {
  property: PortalProperty;
  jobs: PortalJobSummary[];
  certsByCode: Record<CertCode, PortalCertificate[]>;
  latestInvoice: InvoiceRow | null;
}

function emptyCertsByCode(): Record<CertCode, PortalCertificate[]> {
  return { EPC: [], GAS: [], EICR: [], FSC: [], FRA: [], LEG: [], PAT: [], ALM: [] };
}

export function groupIntoProperties(
  properties: PortalProperty[],
  jobs: PortalJobSummary[],
  certs: PortalCertificate[],
  invoices: InvoiceRow[],
): PropertyGroup[] {
  const groups = new Map<string, PropertyGroup>();

  for (const property of properties) {
    groups.set(property.id, {
      property,
      jobs: [],
      certsByCode: emptyCertsByCode(),
      latestInvoice: null,
    });
  }

  for (const job of jobs) {
    if (!job.property_id || !groups.has(job.property_id)) continue;
    groups.get(job.property_id)!.jobs.push(job);
  }

  for (const cert of certs) {
    if (!cert.property_id || !groups.has(cert.property_id)) continue;
    const code = classifyCertType(cert.certificate_type);
    if (!code) continue;
    groups.get(cert.property_id)!.certsByCode[code].push(cert);
  }

  const invoicesByJobId = new Map<string, InvoiceRow>();
  for (const inv of invoices) {
    if (!inv.job_id) continue;
    if (!invoicesByJobId.has(inv.job_id)) invoicesByJobId.set(inv.job_id, inv); // pre-sorted by date desc
  }
  for (const group of groups.values()) {
    for (const job of group.jobs) {
      const inv = invoicesByJobId.get(job.id);
      if (inv && (!group.latestInvoice || (inv.date ?? "") > (group.latestInvoice.date ?? ""))) {
        group.latestInvoice = inv;
      }
    }
  }

  return Array.from(groups.values());
}

/** Status for one certificate-type cell in the property matrix. */
export function cellStatus(certsOfType: PortalCertificate[], hasOpenJob: boolean): CertStatus {
  if (certsOfType.length === 0) {
    return hasOpenJob ? "booked" : "missing";
  }
  const latest = certsOfType.reduce((a, b) => ((a.issue_date ?? "") > (b.issue_date ?? "") ? a : b));
  return certExpiryStatus(latest.expiry_date);
}

// ── Portfolio-level fetch + aggregation ─────────────────────────────────────

export interface PortfolioData {
  jobs: PortalJobSummary[];
  certs: PortalCertificate[];
  invoices: InvoiceRow[];
  properties: PropertyGroup[];
  kpis: {
    compliant: number;
    expiring: number;
    /** A certificate was actually issued and has since lapsed. Never
     * includes properties that simply never had a certificate at all —
     * see `notAvailable` for that. */
    expired: number;
    /** No certificate of this type has ever been supplied, and there's no
     * open job to produce one. Distinct from `expired` on purpose — this
     * was previously (wrongly) folded into the same bucket, making
     * "never had one" look identical to "had one, now lapsed" in the UI. */
    notAvailable: number;
    awaitingCertificate: number;
  };
  byType: Record<CertCode, { valid: number; expiring: number; expired: number; total: number }>;
}

export const getPortfolioData = cache(async function getPortfolioData(): Promise<PortfolioData> {
  const supabase = await createClient();

  const [{ data: properties }, { data: jobs }, { data: certs }, { data: invoices }] =
    await Promise.all([
      supabase
        .from("properties")
        .select("id, client_id, address, city, postcode, property_type, property_subtype, bedrooms")
        .returns<PortalProperty[]>(),
      supabase
        .from("jobs")
        .select(
          "id, job_number, title, status, site_address, site_postcode, scheduled_date, scheduled_slot, completed_date, certificate_status, property_id, created_at",
        )
        .order("created_at", { ascending: false })
        .returns<PortalJobSummary[]>(),
      supabase
        .from("certificates")
        .select(
          "id, job_id, property_id, certificate_type, site_address, issue_date, expiry_date, result, public_url, notes, created_at",
        )
        .returns<PortalCertificate[]>(),
      supabase
        .from("invoices")
        .select("id, job_id, status, balance_due, date")
        .order("date", { ascending: false })
        .returns<InvoiceRow[]>(),
    ]);

  const safeProperties = properties ?? [];
  const safeJobs = jobs ?? [];
  const safeCerts = certs ?? [];
  const safeInvoices = invoices ?? [];

  const propertyGroups = groupIntoProperties(safeProperties, safeJobs, safeCerts, safeInvoices);

  let compliant = 0;
  let expiring = 0;
  let expired = 0;
  let notAvailable = 0;
  let awaitingCertificate = 0;

  const byType: PortfolioData["byType"] = CERT_CODES.reduce(
    (acc, code) => ({ ...acc, [code]: { valid: 0, expiring: 0, expired: 0, total: 0 } }),
    {} as PortfolioData["byType"],
  );

  for (const group of propertyGroups) {
    let hasExpired = false;
    let hasExpiring = false;
    let hasMissing = false;
    let hasBooked = false;

    for (const code of CERT_CODES) {
      const certsOfType = group.certsByCode[code];
      const hasOpenJob = group.jobs.some((j) => j.status?.toLowerCase() !== "completed");
      const status = cellStatus(certsOfType, hasOpenJob && certsOfType.length === 0);

      if (status === "valid") byType[code].valid += 1;
      else if (status === "expiring") {
        byType[code].expiring += 1;
        hasExpiring = true;
      } else if (status === "expired") {
        byType[code].expired += 1;
        hasExpired = true;
      } else if (status === "missing") {
        hasMissing = true;
      } else if (status === "booked") {
        hasBooked = true;
      }
      if (status !== "na") byType[code].total += 1;
    }

    // Priority order matters: an actual lapsed certificate is more urgent
    // than "never supplied," which is more urgent than "booked in," which
    // beats a clean compliant property. Missing and expired are counted in
    // completely separate buckets — never combined.
    if (hasExpired) expired += 1;
    else if (hasExpiring) expiring += 1;
    else if (hasMissing) notAvailable += 1;
    else if (hasBooked) awaitingCertificate += 1;
    else compliant += 1;
  }

  return {
    jobs: safeJobs,
    certs: safeCerts,
    invoices: safeInvoices,
    properties: propertyGroups,
    kpis: { compliant, expiring, expired, notAvailable, awaitingCertificate },
    byType,
  };
});
