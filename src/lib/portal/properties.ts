import "server-only";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { untyped } from "@/lib/portal/untyped";

// ── Certificate types ───────────────────────────────────────────────────────
// Matches the normalize_certificate_type() trigger in the database. Fire
// Safety Certificate (FSC) and Fire Risk Assessment (FRA) are deliberately
// separate products.

export type CertCode =
  | "EPC"
  | "GAS"
  | "EICR"
  | "FSC"
  | "FRA"
  | "FDC"
  | "ELC"
  | "LEG"
  | "PAT"
  | "ALM"
  | "ASB";

export const CERT_CODES: CertCode[] = [
  "EPC",
  "GAS",
  "EICR",
  "FSC",
  "FRA",
  "FDC",
  "ELC",
  "LEG",
  "PAT",
  "ALM",
  "ASB",
];

export const CERT_TYPE_LABELS: Record<CertCode, string> = {
  EPC: "EPC",
  GAS: "Gas Safety (CP12)",
  EICR: "EICR",
  FSC: "Fire Safety Certificate",
  FRA: "Fire Risk Assessment",
  FDC: "Fire Door Certificate",
  ELC: "Emergency Lighting",
  LEG: "Legionella Assessment",
  PAT: "PAT Testing",
  ALM: "Smoke & CO Alarms",
  ASB: "Asbestos Survey",
};

/**
 * Classifies a certificate type OR a job service type / job title into a
 * compliance column. Non-compliance work (remedials, diagnostics, consumer
 * unit replacements, "Other") returns null. Order matters — specific
 * matches come before the generic "fire" / "electrical" ones.
 */
export function classifyCertType(raw: string | null | undefined): CertCode | null {
  if (!raw) return null;
  const t = raw.toLowerCase().trim();
  if (t.includes("remedial") || t.includes("diagnostic") || t.includes("replacement") || t === "other") {
    return null;
  }
  if (t.includes("emergency") || /\belc\b/.test(t)) return "ELC";
  if (t.includes("fire door")) return "FDC";
  if (t.includes("asbestos")) return "ASB";
  if (t.includes("eicr") || t.includes("electrical")) return "EICR";
  if (t.includes("gas") || t.includes("cp12")) return "GAS";
  if (/\bepc\b/.test(t) || t.includes("energy performance")) return "EPC";
  if (t.includes("legionella")) return "LEG";
  if (/\bpat\b/.test(t)) return "PAT";
  if (t.includes("alarm") || t.includes("smoke")) return "ALM";
  if (t.includes("risk assessment") || /\bfra\b/.test(t)) return "FRA";
  if (t.includes("fire")) return "FSC";
  return null;
}

// ── Row types (portal-safe columns only) ────────────────────────────────────
// public_url and storage_path are never sent to the browser. PDFs are served
// through /api/portal/certificates/[id], which checks ownership first.

export interface PropertyRow {
  id: string;
  client_id: string | null;
  address: string;
  city: string | null;
  postcode: string | null;
  property_type: string | null;
  property_subtype: string | null;
  bedrooms: number | null;
}

export interface JobRow {
  id: string;
  job_number: string;
  title: string;
  status: string;
  site_address: string | null;
  site_postcode: string | null;
  scheduled_date: string | null;
  scheduled_slot: string | null;
  completed_date: string | null;
  service_types: string[] | null;
  property_id: string | null;
  created_at: string;
}

export interface CertRow {
  id: string;
  job_id: string | null;
  property_id: string | null;
  certificate_type: string | null;
  issue_date: string | null;
  expiry_date: string | null;
  result: string | null;
  notes: string | null;
  created_at: string;
}

export interface InvoiceRow {
  id: string;
  job_id: string | null;
  invoice_number: string | null;
  status: string | null;
  total: number | null;
  amount_paid: number | null;
  balance_due: number | null;
  date: string | null;
}

// ── Status logic ────────────────────────────────────────────────────────────

export type CertStatus =
  | "valid"
  | "expiring"
  | "expired"
  | "awaiting" // visit done, certificate PDF not uploaded yet
  | "booked" // open job covers this certificate type
  | "missing" // never supplied, nothing booked ("Not available" in the UI)
  | "na";

export const EXPIRING_WINDOW_DAYS = 30;

export function daysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const target = new Date(`${dateStr.slice(0, 10)}T12:00:00Z`).getTime();
  const today = new Date(`${new Date().toISOString().slice(0, 10)}T12:00:00Z`).getTime();
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

export function certExpiryStatus(expiryDate: string | null): "valid" | "expiring" | "expired" {
  const days = daysUntil(expiryDate);
  if (days === null) return "valid";
  if (days < 0) return "expired";
  if (days <= EXPIRING_WINDOW_DAYS) return "expiring";
  return "valid";
}

export function latestCert<T extends CertRow>(certs: T[]): T | null {
  if (certs.length === 0) return null;
  return certs.reduce((a, b) => ((a.issue_date ?? a.created_at) >= (b.issue_date ?? b.created_at) ? a : b));
}

function isClosedJob(job: JobRow): boolean {
  const s = (job.status ?? "").toLowerCase();
  return s === "completed" || s === "cancelled" || s === "canceled";
}

function isCompletedJob(job: JobRow): boolean {
  return (job.status ?? "").toLowerCase() === "completed";
}

/** Which certificate columns a job covers — from its service types, falling back to its title. */
export function jobCertCodes(job: JobRow): Set<CertCode> {
  const codes = new Set<CertCode>();
  for (const s of job.service_types ?? []) {
    const c = classifyCertType(s);
    if (c) codes.add(c);
  }
  if (codes.size === 0) {
    const c = classifyCertType(job.title);
    if (c) codes.add(c);
  }
  return codes;
}

/**
 * Status of one certificate type at one property. Only jobs that actually
 * cover this certificate type count — an open EICR job no longer marks the
 * EPC column as "Booked in".
 */
export function cellStatus(certsOfType: CertRow[], jobsForType: JobRow[]): CertStatus {
  const latest = latestCert(certsOfType);
  const openJob = jobsForType.some((j) => !isClosedJob(j));
  const completedAfter = (since: string | null) =>
    jobsForType.some(
      (j) => isCompletedJob(j) && (!since || (j.completed_date ?? j.created_at.slice(0, 10)) >= since),
    );

  if (!latest) {
    if (completedAfter(null)) return "awaiting";
    if (openJob) return "booked";
    return "missing";
  }

  const status = certExpiryStatus(latest.expiry_date);
  if (status === "expired" || status === "expiring") {
    if (completedAfter(latest.issue_date)) return "awaiting";
    if (openJob) return "booked";
  }
  return status;
}

// ── Property grouping ───────────────────────────────────────────────────────

export type PropertyHealth = "expired" | "expiring" | "notAvailable" | "awaiting" | "booked" | "compliant";

export interface PaymentSummary {
  outstanding: number;
  unpaidCount: number;
  overdue: boolean;
  invoiceCount: number;
}

export interface PropertyGroup {
  property: PropertyRow;
  jobs: JobRow[];
  certsByCode: Record<CertCode, CertRow[]>;
  otherCerts: CertRow[];
  statuses: Record<CertCode, CertStatus>;
  health: PropertyHealth;
  invoicesByJob: Map<string, InvoiceRow>;
  payment: PaymentSummary;
}

function emptyByCode<T>(make: () => T): Record<CertCode, T> {
  return CERT_CODES.reduce((acc, code) => ({ ...acc, [code]: make() }), {} as Record<CertCode, T>);
}

function isVisibleInvoice(inv: InvoiceRow): boolean {
  // Draft and void invoices haven't been issued to the client — never show them.
  const s = (inv.status ?? "").toLowerCase();
  return s !== "draft" && s !== "void" && s !== "voided" && s !== "cancelled";
}

function summarisePayment(invoices: InvoiceRow[]): PaymentSummary {
  let outstanding = 0;
  let unpaidCount = 0;
  let overdue = false;
  for (const inv of invoices) {
    const due = inv.balance_due ?? 0;
    if (due > 0) {
      outstanding += due;
      unpaidCount += 1;
    }
    if ((inv.status ?? "").toLowerCase() === "overdue") overdue = true;
  }
  return { outstanding, unpaidCount, overdue, invoiceCount: invoices.length };
}

function propertyHealth(statuses: Record<CertCode, CertStatus>): PropertyHealth {
  const values = Object.values(statuses);
  if (values.includes("expired")) return "expired";
  if (values.includes("expiring")) return "expiring";
  if (values.includes("missing")) return "notAvailable";
  if (values.includes("awaiting")) return "awaiting";
  if (values.includes("booked")) return "booked";
  return "compliant";
}

export const HEALTH_RANK: Record<PropertyHealth, number> = {
  expired: 0,
  expiring: 1,
  notAvailable: 2,
  awaiting: 3,
  booked: 4,
  compliant: 5,
};

function buildGroups(
  properties: PropertyRow[],
  jobs: JobRow[],
  certs: CertRow[],
  invoices: InvoiceRow[],
): PropertyGroup[] {
  const groups = new Map<string, Omit<PropertyGroup, "statuses" | "health" | "payment">>();

  for (const property of properties) {
    groups.set(property.id, {
      property,
      jobs: [],
      certsByCode: emptyByCode<CertRow[]>(() => []),
      otherCerts: [],
      invoicesByJob: new Map(),
    });
  }

  for (const job of jobs) {
    if (job.property_id && groups.has(job.property_id)) groups.get(job.property_id)!.jobs.push(job);
  }

  for (const cert of certs) {
    if (!cert.property_id || !groups.has(cert.property_id)) continue;
    const group = groups.get(cert.property_id)!;
    const code = classifyCertType(cert.certificate_type);
    if (code) group.certsByCode[code].push(cert);
    else group.otherCerts.push(cert);
  }

  // Latest visible invoice per job (invoices arrive sorted newest first).
  const invoiceByJob = new Map<string, InvoiceRow>();
  for (const inv of invoices) {
    if (!inv.job_id || !isVisibleInvoice(inv)) continue;
    if (!invoiceByJob.has(inv.job_id)) invoiceByJob.set(inv.job_id, inv);
  }

  return Array.from(groups.values()).map((g) => {
    for (const job of g.jobs) {
      const inv = invoiceByJob.get(job.id);
      if (inv) g.invoicesByJob.set(job.id, inv);
    }

    const jobCodes = new Map(g.jobs.map((j) => [j.id, jobCertCodes(j)]));
    const statuses = emptyByCode<CertStatus>(() => "missing");
    for (const code of CERT_CODES) {
      const jobsForType = g.jobs.filter((j) => jobCodes.get(j.id)!.has(code));
      statuses[code] = cellStatus(g.certsByCode[code], jobsForType);
    }

    return {
      ...g,
      statuses,
      health: propertyHealth(statuses),
      payment: summarisePayment(Array.from(g.invoicesByJob.values())),
    };
  });
}

// ── Needs-attention list ────────────────────────────────────────────────────

export interface AttentionItem {
  propertyId: string;
  address: string;
  postcode: string | null;
  code: CertCode;
  status: "expired" | "expiring" | "missing";
  urgencyText: string;
  certId: string | null;
  rank: number;
}

/** Expired first (most overdue first), then expiring (soonest first), then never supplied. */
export function buildAttentionItems(groups: PropertyGroup[]): AttentionItem[] {
  const items: AttentionItem[] = [];
  for (const g of groups) {
    for (const code of CERT_CODES) {
      const status = g.statuses[code];
      if (status !== "expired" && status !== "expiring" && status !== "missing") continue;
      const latest = latestCert(g.certsByCode[code]);
      const days = latest ? daysUntil(latest.expiry_date) ?? 0 : 0;

      let urgencyText = "Not available — never supplied";
      let rank = 2_000_000;
      if (status === "expired") {
        urgencyText = `Expired ${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago`;
        rank = days; // negative: most overdue sorts first
      } else if (status === "expiring") {
        urgencyText = days === 0 ? "Expires today" : `Expires in ${days} day${days === 1 ? "" : "s"}`;
        rank = 1_000_000 + days;
      }

      items.push({
        propertyId: g.property.id,
        address: g.property.address,
        postcode: g.property.postcode,
        code,
        status,
        urgencyText,
        certId: latest?.id ?? null,
        rank,
      });
    }
  }
  return items.sort((a, b) => a.rank - b.rank);
}

// ── Portfolio fetch ─────────────────────────────────────────────────────────

export interface PortfolioData {
  groups: PropertyGroup[];
  jobs: JobRow[];
  certs: CertRow[];
  kpis: Record<PropertyHealth, number>;
  byType: Record<CertCode, { valid: number; expiring: number; expired: number; total: number }>;
  payment: PaymentSummary;
}

const EMPTY_PAYMENT: PaymentSummary = { outstanding: 0, unpaidCount: 0, overdue: false, invoiceCount: 0 };

/**
 * One fetch shared by every portal screen (cached per request). Every query
 * is filtered by the agency's client_id in code AS WELL AS by RLS, so a
 * future policy mistake can't leak another client's data.
 */
export const getPortfolioData = cache(async function getPortfolioData(
  clientId: string | null,
): Promise<PortfolioData> {
  const emptyKpis: Record<PropertyHealth, number> = {
    expired: 0,
    expiring: 0,
    notAvailable: 0,
    awaiting: 0,
    booked: 0,
    compliant: 0,
  };
  const emptyByType = emptyByCode(() => ({ valid: 0, expiring: 0, expired: 0, total: 0 }));

  if (!clientId) {
    return { groups: [], jobs: [], certs: [], kpis: emptyKpis, byType: emptyByType, payment: EMPTY_PAYMENT };
  }

  const supabase = untyped(await createClient());

  const [propertiesRes, jobsRes, certsRes, invoicesRes] = await Promise.all([
    supabase
      .from("properties")
      .select("id, client_id, address, city, postcode, property_type, property_subtype, bedrooms")
      .eq("client_id", clientId)
      .order("address"),
    supabase
      .from("jobs")
      .select(
        "id, job_number, title, status, site_address, site_postcode, scheduled_date, scheduled_slot, completed_date, service_types, property_id, created_at",
      )
      .eq("client_id", clientId)
      .order("created_at", { ascending: false }),
    supabase
      .from("certificates")
      .select("id, job_id, property_id, certificate_type, issue_date, expiry_date, result, notes, created_at")
      .eq("client_id", clientId),
    supabase
      .from("invoices")
      .select("id, job_id, invoice_number, status, total, amount_paid, balance_due, date")
      .eq("client_id", clientId)
      .order("date", { ascending: false }),
  ]);

  const properties = (propertiesRes.data ?? []) as PropertyRow[];
  const jobs = (jobsRes.data ?? []) as JobRow[];
  const certs = (certsRes.data ?? []) as CertRow[];
  const invoices = (invoicesRes.data ?? []) as InvoiceRow[];

  const groups = buildGroups(properties, jobs, certs, invoices);

  const kpis = { ...emptyKpis };
  const byType = emptyByType;
  let outstanding = 0;
  let unpaidCount = 0;
  let overdue = false;
  let invoiceCount = 0;

  for (const g of groups) {
    kpis[g.health] += 1;
    for (const code of CERT_CODES) {
      const latest = latestCert(g.certsByCode[code]);
      if (!latest) continue;
      byType[code][certExpiryStatus(latest.expiry_date)] += 1;
      byType[code].total += 1;
    }
    outstanding += g.payment.outstanding;
    unpaidCount += g.payment.unpaidCount;
    overdue = overdue || g.payment.overdue;
    invoiceCount += g.payment.invoiceCount;
  }

  return {
    groups,
    jobs,
    certs,
    kpis,
    byType,
    payment: { outstanding, unpaidCount, overdue, invoiceCount },
  };
});
