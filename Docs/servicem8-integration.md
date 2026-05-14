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

## Credentials & environment

| Variable | Description |
|---|---|
| `SERVICEM8_ACCESS_TOKEN` | OAuth 2.0 Bearer token from ServiceM8 |
| `SERVICEM8_API_URL` | Base URL — do not change unless using a proxy |

Set these in `.env.local` (never commit this file — it is in `.gitignore`).

To rotate the token: generate a new one in the ServiceM8 admin panel under **Settings → API Access**, then update the value in your deployment environment (Vercel dashboard or equivalent).

---

## API client — `src/lib/servicem8.ts`

### Base fetch wrapper

`sm8Fetch<T>(path, init?)` is the internal primitive. It:
- Injects the `Authorization: Bearer <token>` header
- Sets `cache: "no-store"` so Next.js never caches operational data
- Throws `ServiceM8Error` (with `.statusCode`) on any non-2xx response
- Returns parsed JSON or an empty object on 2xx with no body

All exported functions call `sm8Fetch` — never call it directly from page code.

### Exported functions

#### Company (client)

```ts
createCompany(data: Omit<ServiceM8Company, "uuid">): Promise<string>
```
Creates a new client record. Returns the ServiceM8 UUID.

```ts
findCompanyByEmail(email: string): Promise<ServiceM8Company | null>
```
OData filter query (`$filter=email eq '...'`). Returns the first match or `null`. Use this before `createCompany` to avoid duplicates.

#### Job (booking)

```ts
createJob(data: Omit<ServiceM8Job, "uuid">): Promise<string>
```
Creates a job linked to a `company_uuid`. Returns the job UUID.

```ts
getJob(uuid: string): Promise<ServiceM8Job>
```
Fetch job details by UUID.

#### JobActivity (scheduling)

```ts
createJobActivity(data: Omit<ServiceM8JobActivity, "uuid">): Promise<string>
```
Assigns an engineer (`staff_uuid`) to a job at a `start_date`. Returns the activity UUID.

#### JobMaterial (line items)

```ts
addJobMaterials(
  jobUuid: string,
  materials: Omit<ServiceM8JobMaterial, "uuid" | "job_uuid">[]
): Promise<string[]>
```
Adds certificate/service line items to a job in parallel. Returns an array of UUIDs.

#### Payment

```ts
recordJobPayment(
  jobUuid: string,
  paymentData: Omit<ServiceM8JobPayment, "uuid" | "job_uuid">
): Promise<string>
```
Records a payment against a job. Set `payment_note` to the Stripe charge ID for cross-referencing.

#### Staff

```ts
getStaffList(): Promise<ServiceM8Staff[]>
```
Returns all active engineers. Useful for populating engineer dropdowns in the admin panel and verifying connectivity.

---

## Planned booking flow (Phase 2)

When the booking form (`/api/book`) is built, the sequence will be:

```
1. findCompanyByEmail(email)        — avoid duplicate clients
   └─ null  → createCompany(...)   — create new client
   └─ found → use existing UUID

2. createJob({
     company_uuid,
     job_address,        ← property address
     description,        ← service type (EICR / Gas Safety / etc.)
     status: "Work Order",
     contact_email,
     contact_phone,
   })

3. addJobMaterials(jobUuid, [
     { name: "EICR Certificate", unit_price: 94.99, quantity: 1 },
   ])

4. Stripe PaymentIntent — charge the customer

5. recordJobPayment(jobUuid, {
     payment_amount: 94.99,
     payment_method: "Stripe",
     payment_date: today,
     payment_note: stripeChargeId,
   })

6. createJobActivity({
     job_uuid,
     staff_uuid,         ← assigned engineer (auto or manual)
     start_date,         ← chosen appointment slot
   })

7. Return success → trigger booking confirmation email
```

---

## Testing the connection

```
GET /api/test-servicem8
```

Returns the staff list to confirm the Bearer token is valid and the API is reachable. Expected response:

```json
{
  "ok": true,
  "message": "ServiceM8 connection successful",
  "staff_count": 4,
  "staff": [
    { "uuid": "abc-123", "name": "John Smith", "email": "john@example.com" }
  ]
}
```

**Remove or add authentication to `/api/test-servicem8` before going to production.** It is an unauthenticated route that exposes staff names and emails.

---

## ServiceM8 entity reference

| Entity | Endpoint | Key fields |
|---|---|---|
| Company | `company.json` | `uuid`, `name`, `email`, `phone`, `postcode` |
| Job | `job.json` | `uuid`, `company_uuid`, `status`, `job_address`, `description` |
| JobActivity | `jobactivity.json` | `uuid`, `job_uuid`, `staff_uuid`, `start_date` |
| Staff | `staff.json` | `uuid`, `first`, `last`, `email`, `active` |
| JobMaterial | `jobmaterial.json` | `uuid`, `job_uuid`, `name`, `unit_price`, `quantity` |
| JobPayment | `jobpayment.json` | `uuid`, `job_uuid`, `payment_amount`, `payment_method`, `payment_note` |

All UUIDs are assigned by ServiceM8 on POST. Include `active: 1` on creation where the field exists.

---

## Error handling

`ServiceM8Error` extends `Error` and exposes `.statusCode`. Callers should:

- `401` — token is missing or expired; rotate in environment
- `404` — UUID not found; check the UUID before referencing it
- `422` — validation failure; check the request payload against the entity fields above
- `5xx` — ServiceM8 outage; retry with exponential back-off

```ts
import { ServiceM8Error } from "@/lib/servicem8";

try {
  const uuid = await createJob(data);
} catch (err) {
  if (err instanceof ServiceM8Error && err.statusCode === 401) {
    // token expired
  }
}
```
