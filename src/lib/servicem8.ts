import { randomUUID } from "crypto";
import type {
  ServiceM8Company,
  ServiceM8Job,
  ServiceM8JobActivity,
  ServiceM8Staff,
  ServiceM8JobMaterial,
  CreateCompanyInput,
  CreateJobInput,
  CreateJobActivityInput,
  JobMaterial,
  PaymentData,
} from "@/types/servicem8";

// Re-export types so callers can use a single import path
export type {
  ServiceM8Company,
  ServiceM8Job,
  ServiceM8JobActivity,
  ServiceM8Staff,
  ServiceM8JobMaterial,
  CreateCompanyInput,
  CreateJobInput,
  CreateJobActivityInput,
  JobMaterial,
  PaymentData,
};

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

// ── Mode detection ────────────────────────────────────────────────────────────

function isMockMode(): boolean {
  const token = process.env.SERVICEM8_ACCESS_TOKEN;
  const mock = process.env.SERVICEM8_MOCK_MODE;
  return (
    mock === "true" ||
    !token ||
    token === "" ||
    token === "your_token_here"
  );
}

// ── Real-mode base fetch ──────────────────────────────────────────────────────

const BASE_URL =
  process.env.SERVICEM8_API_URL ?? "https://api.servicem8.com/api_1.0";

async function sm8Fetch<T>(
  endpoint: string,
  method: "GET" | "POST" = "GET",
  body?: unknown,
): Promise<T> {
  const token = process.env.SERVICEM8_ACCESS_TOKEN!;
  const url = `${BASE_URL}/${endpoint}`;

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    cache: "no-store",
  });

  const text = await res.text();

  if (!res.ok) {
    throw new ServiceM8Error(
      `ServiceM8 ${res.status} ${res.statusText} — ${endpoint}: ${text.slice(0, 300)}`,
      res.status,
    );
  }

  const parsed = text.trim() ? (JSON.parse(text) as T) : ({} as T);

  const uuid =
    parsed &&
    typeof parsed === "object" &&
    "uuid" in parsed
      ? (parsed as { uuid: string }).uuid
      : "";
  // eslint-disable-next-line no-console
  console.log(
    `[ServiceM8 REAL] ${method} /${endpoint} → ${res.status} OK${uuid ? ` (uuid: ${uuid})` : ""}`,
  );

  return parsed;
}

// ── Mock helpers ──────────────────────────────────────────────────────────────

function mockLog(message: string) {
  // eslint-disable-next-line no-console
  console.log(`[ServiceM8 MOCK] ${message}`);
}

const MOCK_STAFF: ServiceM8Staff[] = [
  {
    uuid: "mock-staff-001",
    first: "James",
    last: "Mitchell",
    email: "james.mitchell@mylandlordcert.co.uk",
    mobile: "07700 900001",
    active: 1,
  },
  {
    uuid: "mock-staff-002",
    first: "Sarah",
    last: "Thompson",
    email: "sarah.thompson@mylandlordcert.co.uk",
    mobile: "07700 900002",
    active: 1,
  },
  {
    uuid: "mock-staff-003",
    first: "David",
    last: "Williams",
    email: "david.williams@mylandlordcert.co.uk",
    mobile: "07700 900003",
    active: 1,
  },
];

// ── Company helpers ───────────────────────────────────────────────────────────

/**
 * Create a new client record in ServiceM8.
 * Returns the full company object including the assigned UUID.
 */
export async function createCompany(
  data: CreateCompanyInput,
): Promise<ServiceM8Company> {
  if (isMockMode()) {
    const uuid = randomUUID();
    mockLog(`Creating company: ${data.name} (${data.email})`);
    return { uuid, ...data, active: 1 };
  }

  const result = await sm8Fetch<{ uuid: string }>("company.json", "POST", {
    ...data,
    active: 1,
  });
  return { uuid: result.uuid, ...data, active: 1 };
}

/**
 * Find an existing client by email address.
 * Returns the first match or null. Use before createCompany to avoid duplicates.
 */
export async function findCompanyByEmail(
  email: string,
): Promise<ServiceM8Company | null> {
  if (isMockMode()) {
    mockLog(`Looking up company by email: ${email} → not found (mock)`);
    return null;
  }

  const filter = encodeURIComponent(`email eq '${email}'`);
  const results = await sm8Fetch<ServiceM8Company[]>(
    `company.json?$filter=${filter}`,
  );
  return results.length > 0 ? (results[0] ?? null) : null;
}

// ── Job helpers ───────────────────────────────────────────────────────────────

/**
 * Create a job (booking) linked to a company.
 * Returns the full job object including the assigned UUID.
 */
export async function createJob(data: CreateJobInput): Promise<ServiceM8Job> {
  if (isMockMode()) {
    const uuid = randomUUID();
    mockLog(
      `Creating job for company ${data.company_uuid} at ${data.job_address ?? "TBC"}`,
    );
    return { uuid, ...data, status: data.status ?? "Work Order", active: 1 as const };
  }

  const payload = { ...data, status: data.status ?? "Work Order", active: 1 as const };
  const result = await sm8Fetch<{ uuid: string }>("job.json", "POST", payload);
  return { uuid: result.uuid, ...payload };
}

/** Fetch a single job by UUID. */
export async function getJob(uuid: string): Promise<ServiceM8Job> {
  if (isMockMode()) {
    mockLog(`Fetching job ${uuid}`);
    return {
      uuid,
      company_uuid: "mock-company-001",
      status: "Work Order",
      job_address: "12 Mock Street, London, E1 1AA",
      job_description: "EICR Certificate",
      active: 1,
    };
  }

  return sm8Fetch<ServiceM8Job>(`job/${uuid}.json`);
}

// ── Job activity (scheduling) helpers ────────────────────────────────────────

/**
 * Schedule an engineer to a job at a specific date/time.
 * Returns the full activity object including the assigned UUID.
 */
export async function createJobActivity(
  data: CreateJobActivityInput,
): Promise<ServiceM8JobActivity> {
  if (isMockMode()) {
    const uuid = randomUUID();
    mockLog(
      `Creating job activity for job ${data.job_uuid} on ${data.start_date}`,
    );
    return { uuid, ...data, active: 1 };
  }

  const result = await sm8Fetch<{ uuid: string }>("jobactivity.json", "POST", {
    ...data,
    active: 1,
  });
  return { uuid: result.uuid, ...data, active: 1 };
}

// ── Job materials (line items) helpers ───────────────────────────────────────

/**
 * Add certificate/service line items to a job.
 * Each material becomes an invoice line item in ServiceM8.
 */
export async function addJobMaterials(
  jobUuid: string,
  materials: JobMaterial[],
): Promise<void> {
  if (isMockMode()) {
    mockLog(
      `Adding ${materials.length} material(s) to job ${jobUuid}: ${materials.map((m) => `${m.name} × ${m.qty} @ £${m.unit_cost}`).join(", ")}`,
    );
    return;
  }

  await Promise.all(
    materials.map((m) =>
      sm8Fetch<{ uuid: string }>("jobmaterial.json", "POST", {
        job_uuid: jobUuid,
        name: m.name,
        qty: m.qty,
        unit_cost: m.unit_cost,
        active: 1,
      } satisfies ServiceM8JobMaterial),
    ),
  );
}

// ── Payment helpers ───────────────────────────────────────────────────────────

/**
 * Record a payment (Stripe or other) against a job.
 * Set reference to the Stripe charge ID for cross-referencing.
 */
export async function recordJobPayment(
  jobUuid: string,
  payment: PaymentData,
): Promise<void> {
  if (isMockMode()) {
    mockLog(
      `Recording payment of £${payment.amount.toFixed(2)} via ${payment.payment_method} for job ${jobUuid}${payment.reference ? ` (ref: ${payment.reference})` : ""}`,
    );
    return;
  }

  await sm8Fetch<{ uuid: string }>("jobpayment.json", "POST", {
    job_uuid: jobUuid,
    payment_amount: payment.amount,
    payment_method: payment.payment_method,
    payment_date: new Date().toISOString().slice(0, 10),
    payment_note: payment.reference ?? "",
  });
}

// ── Staff helpers ─────────────────────────────────────────────────────────────

/**
 * Fetch all active staff (engineers) from ServiceM8.
 * In mock mode returns three placeholder engineers.
 */
export async function getStaffList(): Promise<ServiceM8Staff[]> {
  if (isMockMode()) {
    mockLog("Returning mock staff list (3 engineers)");
    return MOCK_STAFF;
  }

  const all = await sm8Fetch<ServiceM8Staff[]>("staff.json");
  return all.filter((s) => s.active !== 0);
}
