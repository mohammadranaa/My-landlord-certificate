/**
 * ServiceM8 REST API client.
 *
 * Base URL: https://api.servicem8.com/api_1.0
 * Auth:     OAuth 2.0 Bearer token (env SERVICEM8_ACCESS_TOKEN)
 *
 * Every function throws ServiceM8Error on non-2xx responses so callers
 * can distinguish API failures from network failures.
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ServiceM8Company {
  uuid?: string;
  /** Trading / display name */
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  /** 1 = active, 0 = archived */
  active?: 1 | 0;
}

export interface ServiceM8Job {
  uuid?: string;
  company_uuid: string;
  /** Full address of the property being inspected */
  job_address?: string;
  job_city?: string;
  job_state?: string;
  job_postcode?: string;
  job_country?: string;
  description?: string;
  /** "Quote" | "Work Order" | "Completed" | "Unsuccessful" | "Cancelled" */
  status?: string;
  category_uuid?: string;
  /** On-site contact (may differ from billing client) */
  contact_first?: string;
  contact_last?: string;
  contact_email?: string;
  contact_phone?: string;
  active?: 1 | 0;
}

export interface ServiceM8JobActivity {
  uuid?: string;
  job_uuid: string;
  staff_uuid: string;
  /** ISO 8601 date "YYYY-MM-DD HH:MM:SS" */
  start_date?: string;
  end_date?: string;
  /** Free-text notes for the engineer */
  notes?: string;
  active?: 1 | 0;
}

export interface ServiceM8Staff {
  uuid: string;
  first?: string;
  last?: string;
  email?: string;
  phone?: string;
  active?: 1 | 0;
}

export interface ServiceM8JobMaterial {
  uuid?: string;
  job_uuid: string;
  /** Certificate / service name shown on the invoice */
  name: string;
  quantity?: number;
  unit_price?: number;
  unit_cost?: number;
  active?: 1 | 0;
}

export interface ServiceM8JobPayment {
  uuid?: string;
  job_uuid: string;
  /** Amount in GBP (not pence) */
  payment_amount: number;
  /** e.g. "Stripe", "Card", "Bank Transfer" */
  payment_method?: string;
  /** ISO 8601 "YYYY-MM-DD" */
  payment_date?: string;
  /** Stripe charge ID or other reference */
  payment_note?: string;
}

/** Minimal shape of a ServiceM8 POST success response */
interface ServiceM8PostResult {
  uuid: string;
}

// ── Error class ───────────────────────────────────────────────────────────────

export class ServiceM8Error extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
  ) {
    super(message);
    this.name = "ServiceM8Error";
  }
}

// ── Base fetch wrapper ────────────────────────────────────────────────────────

const BASE_URL =
  process.env.SERVICEM8_API_URL ?? "https://api.servicem8.com/api_1.0";

async function sm8Fetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = process.env.SERVICEM8_ACCESS_TOKEN;
  if (!token || token === "your_token_here") {
    throw new ServiceM8Error(
      "SERVICEM8_ACCESS_TOKEN is not configured. Set it in .env.local.",
      401,
    );
  }

  const url = `${BASE_URL}/${path}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...init.headers,
    },
    // Never cache ServiceM8 responses server-side
    cache: "no-store",
  });

  const text = await res.text();

  if (!res.ok) {
    throw new ServiceM8Error(
      `ServiceM8 ${res.status} ${res.statusText} — ${path}: ${text.slice(0, 300)}`,
      res.status,
    );
  }

  if (!text.trim()) return {} as T;
  return JSON.parse(text) as T;
}

// ── Company (client) helpers ──────────────────────────────────────────────────

/**
 * Create a new client record in ServiceM8.
 * Returns the UUID of the created company.
 */
export async function createCompany(
  data: Omit<ServiceM8Company, "uuid">,
): Promise<string> {
  const result = await sm8Fetch<ServiceM8PostResult>("company.json", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return result.uuid;
}

/**
 * Look up an existing client by email address.
 * Returns the first match or null if not found.
 *
 * ServiceM8 supports OData-style $filter queries.
 */
export async function findCompanyByEmail(
  email: string,
): Promise<ServiceM8Company | null> {
  const filter = encodeURIComponent(`email eq '${email}'`);
  const results = await sm8Fetch<ServiceM8Company[]>(
    `company.json?$filter=${filter}`,
  );
  return results.length > 0 ? results[0] : null;
}

// ── Job helpers ───────────────────────────────────────────────────────────────

/**
 * Create a job (booking) linked to a company.
 * Returns the UUID of the created job.
 */
export async function createJob(
  data: Omit<ServiceM8Job, "uuid">,
): Promise<string> {
  const result = await sm8Fetch<ServiceM8PostResult>("job.json", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return result.uuid;
}

/** Fetch a single job by UUID. */
export async function getJob(uuid: string): Promise<ServiceM8Job> {
  return sm8Fetch<ServiceM8Job>(`job/${uuid}.json`);
}

// ── Job activity (scheduling) helpers ────────────────────────────────────────

/**
 * Schedule an engineer to a job at a specific date/time.
 * Returns the UUID of the created activity.
 */
export async function createJobActivity(
  data: Omit<ServiceM8JobActivity, "uuid">,
): Promise<string> {
  const result = await sm8Fetch<ServiceM8PostResult>("jobactivity.json", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return result.uuid;
}

// ── Job materials (line items) helpers ───────────────────────────────────────

/**
 * Add multiple line items (certificate services) to a job.
 * Returns an array of the created material UUIDs.
 */
export async function addJobMaterials(
  jobUuid: string,
  materials: Omit<ServiceM8JobMaterial, "uuid" | "job_uuid">[],
): Promise<string[]> {
  const uuids = await Promise.all(
    materials.map((m) =>
      sm8Fetch<ServiceM8PostResult>("jobmaterial.json", {
        method: "POST",
        body: JSON.stringify({ ...m, job_uuid: jobUuid }),
      }).then((r) => r.uuid),
    ),
  );
  return uuids;
}

// ── Payment helpers ───────────────────────────────────────────────────────────

/**
 * Record a Stripe (or other) payment against a job.
 * Returns the UUID of the created payment record.
 */
export async function recordJobPayment(
  jobUuid: string,
  paymentData: Omit<ServiceM8JobPayment, "uuid" | "job_uuid">,
): Promise<string> {
  const result = await sm8Fetch<ServiceM8PostResult>("jobpayment.json", {
    method: "POST",
    body: JSON.stringify({ ...paymentData, job_uuid: jobUuid }),
  });
  return result.uuid;
}

// ── Staff helpers ─────────────────────────────────────────────────────────────

/**
 * Fetch all active staff (engineers) from ServiceM8.
 * Useful for verifying the connection and populating engineer assignment.
 */
export async function getStaffList(): Promise<ServiceM8Staff[]> {
  const all = await sm8Fetch<ServiceM8Staff[]>("staff.json");
  return all.filter((s) => s.active !== 0);
}
