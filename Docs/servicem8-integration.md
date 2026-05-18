# ServiceM8 Integration

ServiceM8 is the operational backend for My Landlord Certificate. It stores clients, jobs, engineer schedules, and certificates. The website handles the customer-facing booking form and Stripe payment, then pushes data to ServiceM8 via its REST API.

---

## Architecture overview

```
Customer → Next.js booking form → Stripe payment
                                       ↓
                              /api/book (POST)
                                       ↓
                         src/lib/servicem8.ts client
                                (mock or real)
                                       ↓
                     ServiceM8 REST API (api_1.0)
                     ┌─────────────────────────────┐
                     │  Company  (client record)   │
                     │  Job      (booking)         │
                     │  JobActivity (time slot)    │
                     │  JobMaterial (line items)   │
                     │  JobPayment (Stripe ref)    │
                     └─────────────────────────────┘
```

---

## Mock mode vs real mode

The integration has two modes controlled by environment variables in `.env.local`:

| Variable | Mock mode | Real mode |
|---|---|---|
| `SERVICEM8_MOCK_MODE` | `true` | `false` |
| `SERVICEM8_ACCESS_TOKEN` | empty / `your_token_here` | real Bearer token |

**Mock mode activates automatically if either condition is true:**
- `SERVICEM8_MOCK_MODE=true`, OR
- `SERVICEM8_ACCESS_TOKEN` is missing, empty, or set to `your_token_here`

This means you never need to manually switch — adding a real token and setting `SERVICEM8_MOCK_MODE=false` together enables real mode.

### Mock mode behaviour

- All API functions return realistic placeholder data immediately
- No HTTP requests are made to ServiceM8
- UUIDs are generated with `crypto.randomUUID()`
- Console output: `[ServiceM8 MOCK] Creating company: Sarah Smith (sarah@example.com)`
- `getStaffList()` returns 3 placeholder engineers
- `findCompanyByEmail()` always returns `null` (new customer path)

### Real mode behaviour

- All API functions make authenticated HTTP requests to `api.servicem8.com/api_1.0`
- Console output: `[ServiceM8 REAL] POST /company.json → 200 OK (uuid: abc-123)`
- Errors throw `ServiceM8Error` with a `.statusCode` for structured handling

---

## Switching from mock to real mode

**When you have a ServiceM8 Growing plan and Bearer token:**

1. Open `.env.local`
2. Set `SERVICEM8_ACCESS_TOKEN=your_real_token_here`
3. Set `SERVICEM8_MOCK_MODE=false`
4. Restart the dev server: `npx next dev`
5. Open `http://localhost:3000/api/test-servicem8`
6. You should see: `"mode": "real"` and your real staff list

Nothing else needs changing — all booking flow code is mode-agnostic.

**Token rotation:** Generate a new token in ServiceM8 admin → **Settings → API Access**, then update the value in `.env.local` (dev) and your Vercel environment variables (production).

---

## Credentials & environment

| Variable | Description |
|---|---|
| `SERVICEM8_MOCK_MODE` | `true` to use mock responses; `false` for real API |
| `SERVICEM8_ACCESS_TOKEN` | OAuth 2.0 Bearer token from ServiceM8 |
| `SERVICEM8_API_URL` | Base URL — do not change unless using a proxy |

`.env.local` is in `.gitignore` — never commit it.

---

## TypeScript types

All ServiceM8 types live in `src/types/servicem8.ts` and are re-exported from `src/lib/servicem8.ts` for a single import path.

### Entity types

| Type | Description |
|---|---|
| `ServiceM8Company` | Client / company record |
| `ServiceM8Job` | Job / booking record |
| `ServiceM8JobActivity` | Scheduled engineer appointment |
| `ServiceM8Staff` | Engineer record |
| `ServiceM8JobMaterial` | Invoice line item |

### Input types

| Type | Used by |
|---|---|
| `CreateCompanyInput` | `createCompany()` |
| `CreateJobInput` | `createJob()` |
| `CreateJobActivityInput` | `createJobActivity()` |
| `JobMaterial` | `addJobMaterials()` |
| `PaymentData` | `recordJobPayment()` |

---

## API client — `src/lib/servicem8.ts`

All functions check mock mode first. If real mode, calls go through `sm8Fetch()` which injects the Bearer token and logs the result.

### Exported functions

#### Company (client)

```ts
createCompany(data: CreateCompanyInput): Promise<ServiceM8Company>
```
Creates a new client record. Returns the full company with its assigned `uuid`.

```ts
findCompanyByEmail(email: string): Promise<ServiceM8Company | null>
```
OData filter query (`$filter=email eq '...'`). Returns the first match or `null`. Call this before `createCompany` to avoid duplicate clients.

#### Job (booking)

```ts
createJob(data: CreateJobInput): Promise<ServiceM8Job>
```
Creates a job linked to a `company_uuid`. Returns the full job with its UUID.

```ts
getJob(uuid: string): Promise<ServiceM8Job>
```
Fetch job details by UUID.

#### JobActivity (scheduling)

```ts
createJobActivity(data: CreateJobActivityInput): Promise<ServiceM8JobActivity>
```
Schedules an engineer to a job at a `start_date`/`end_date`. Set `activity_was_scheduled: 1`.

#### JobMaterial (line items)

```ts
addJobMaterials(jobUuid: string, materials: JobMaterial[]): Promise<void>
```
Adds certificate/service line items to a job. In real mode, POSTs are made in parallel.

#### Payment

```ts
recordJobPayment(jobUuid: string, payment: PaymentData): Promise<void>
```
Records a payment against a job. Set `payment.reference` to the Stripe charge ID.

#### Staff

```ts
getStaffList(): Promise<ServiceM8Staff[]>
```
Returns all active engineers. Mock mode returns 3 placeholder engineers.

---

## Booking flow (Phase 2 — /api/book)

When the booking API route is built, the full sequence will be:

```
1. findCompanyByEmail(email)
   └─ null  → createCompany({ name, email, phone, address, postcode })
   └─ found → use existing uuid

2. createJob({
     company_uuid,
     job_address,          ← property address from booking form
     job_description,      ← "EICR, Gas Safety" (service names)
     status: "Work Order",
     date,                 ← preferred appointment date
     contact_email,
     contact_phone,
   })

3. addJobMaterials(jobUuid, [
     { name: "EICR Certificate",        qty: 1, unit_cost: 94.99 },
     { name: "Gas Safety Certificate",  qty: 1, unit_cost: 50.00 },
   ])

4. Stripe PaymentIntent.create({ amount: grandTotalInPence, ... })

5. recordJobPayment(jobUuid, {
     amount: 144.99,
     payment_method: "Stripe",
     reference: stripePaymentIntentId,
   })

6. createJobActivity({
     job_uuid: jobUuid,
     activity_was_scheduled: 1,
     start_date: "2026-06-01 08:00:00",
     end_date:   "2026-06-01 12:00:00",
     staff_uuid: assignedEngineerUuid,  ← optional; can assign manually later
   })

7. Return { ok: true, jobUuid } → send confirmation email
```

---

## Testing the connection

```
GET /api/test-servicem8
```

Returns the mode and staff list. Example mock response:

```json
{
  "ok": true,
  "mode": "mock",
  "message": "Running in mock mode — no real API calls made",
  "staff_count": 3,
  "staff": [
    { "uuid": "mock-staff-001", "name": "James Mitchell", "email": "james.mitchell@..." }
  ]
}
```

Example real response:

```json
{
  "ok": true,
  "mode": "real",
  "message": "ServiceM8 connection successful",
  "staff_count": 4,
  "staff": [
    { "uuid": "abc-123", "name": "John Smith", "email": "john@example.com" }
  ]
}
```

**Remove or add authentication to `/api/test-servicem8` before going to production.**

---

## Error handling

`ServiceM8Error` extends `Error` and exposes `.statusCode`. Callers should handle:

| Status | Meaning | Action |
|---|---|---|
| `401` | Token missing or expired | Rotate in `.env.local` / Vercel dashboard |
| `404` | UUID not found | Check the UUID before referencing it |
| `422` | Validation failure | Check the request payload |
| `5xx` | ServiceM8 outage | Retry with exponential back-off |

```ts
import { ServiceM8Error, createJob } from "@/lib/servicem8";

try {
  const job = await createJob(data);
} catch (err) {
  if (err instanceof ServiceM8Error) {
    if (err.statusCode === 401) { /* token expired */ }
    if (err.statusCode === 422) { /* bad payload */ }
  }
}
```

---

## Rate limits

ServiceM8 Growing plan: **60 requests per minute** per account. During a single booking flow, we make approximately 5–7 API calls. At typical booking volumes this is well within limits.

For high-traffic scenarios (e.g., a bulk import), use `Promise.all()` with batching rather than firing all requests simultaneously.

---

## ServiceM8 entity reference

| Entity | Endpoint | Key fields |
|---|---|---|
| Company | `company.json` | `uuid`, `name`, `email`, `phone`, `postcode` |
| Job | `job.json` | `uuid`, `company_uuid`, `status`, `job_address`, `job_description` |
| JobActivity | `jobactivity.json` | `uuid`, `job_uuid`, `staff_uuid`, `start_date`, `activity_was_scheduled` |
| Staff | `staff.json` | `uuid`, `first`, `last`, `email`, `mobile`, `active` |
| JobMaterial | `jobmaterial.json` | `uuid`, `job_uuid`, `name`, `qty`, `unit_cost` |
| JobPayment | `jobpayment.json` | `uuid`, `job_uuid`, `payment_amount`, `payment_method`, `payment_note` |

All UUIDs are assigned by ServiceM8 on POST. Include `active: 1` on all records created.

---

## Webhook receiver — `/api/webhooks/servicem8`

The webhook endpoint lives at `src/app/api/webhooks/servicem8/route.ts`. It accepts POST requests from ServiceM8 whenever a job record changes.

### What it does

| Job status | Action |
|---|---|
| `Completed` | Logs `Job {uuid} completed`. ServiceM8 handles certificate email + review request automatically via its own automation rules. |
| `Unsuccessful` | Logs `Job {uuid} marked unsuccessful`. Future: admin notification. |
| Any other status | Logs the transition at debug level. |

In mock mode the payload is logged but no processing runs. In real mode the handler processes every entry.

### Registering the webhook in ServiceM8

Do this **after** deploying to Vercel with a real domain:

1. Log in to ServiceM8 → **Settings → Webhooks → Add Webhook**
2. Set:
   - **URL:** `https://mylandlordcertificate.co.uk/api/webhooks/servicem8`
   - **Events:** `job.updated`
3. Save — ServiceM8 will POST the updated job object to the URL on every job change.

> Do not register the webhook pointing at `localhost` — ServiceM8 cannot reach your local machine. Use a tool like ngrok for local testing if needed.

### Payload format

ServiceM8 POSTs the updated job object as JSON. Fields the handler reads:

```json
{
  "uuid": "abc-123",
  "status": "Completed",
  "company_uuid": "...",
  "contact_email": "customer@example.com",
  "job_address": "12 Example Street, London"
}
```

Multiple records may be batched into an array — the handler normalises both shapes automatically.
