# Temporary Booking Setup — Manual Processing via Google Sheets

This document describes the current booking flow and what the team does
when a booking comes in, until the automated Stripe + ServiceM8 integration
is ready.

---

## Current flow

```
Customer fills out /book form
        ↓
POST /api/bookings (Next.js API route)
        ↓
Google Apps Script Web App
        ↓
Row appended to "MLC Bookings" Google Sheet
        ↓
Email notification sent to business
        ↓
Customer sees /book/success page
        ↓
Team calls customer within 2 hours
```

---

## What the team does when a booking appears in the Sheet

A new row appears with **Status = "New"** every time a booking is submitted.
You also receive an email notification immediately.

**Step-by-step:**

1. **Call the customer within 2 hours** — use the Phone column. If no answer,
   try the Tenant Phone column and leave a voicemail.

2. **Confirm the appointment date and time** — the customer selected a preferred
   date/slot but it is not yet confirmed. Agree the exact time with them.

3. **Take payment** — options until Stripe is live:
   - Take card details over the phone (use your card terminal)
   - Send a Stripe Payment Link (create one manually in Stripe dashboard)
   - Take bank transfer (send sort code + account number)

4. **Create the job in ServiceM8 manually**:
   - Log into ServiceM8
   - Create a new job with the customer details from the Sheet
   - Assign to an engineer and set the confirmed appointment time
   - Add the services from the "Services (Readable)" column

5. **Update the Sheet** — change the **Status** column from "New" to:
   - `Confirmed` — payment taken and job created
   - `No Answer` — couldn't reach customer after 3 attempts
   - `Cancelled` — customer cancelled

---

## Upgrade path — when to switch to automated flow

Switch to the automated Stripe + ServiceM8 flow when:
- Stripe account is fully set up and tested
- ServiceM8 API credentials are obtained (Growing plan required)
- The webhook endpoint at `/api/webhooks/stripe` is deployed and tested

**To upgrade:**
1. Follow `docs/servicem8-integration.md` to configure the ServiceM8 API client.
2. Set up Stripe webhooks pointing to `/api/webhooks/stripe`.
3. In `src/components/booking/booking-form.tsx`, change the fetch URL in
   `handleSubmit` from `/api/bookings` to `/api/checkout`.
4. The Google Sheet submission can be removed from `/api/bookings/route.ts`
   at that point — or kept as a backup log.
5. The Google Sheet becomes a useful historical record of all bookings.

---

## Environment variables required

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GOOGLE_SHEET_URL` | Apps Script Web App URL (see `docs/google-sheets-setup.md`) |

---

## What is NOT affected by this temporary setup

- `src/lib/servicem8.ts` — ServiceM8 client is untouched, ready for Phase 2.
- Any Stripe code — not removed, just not called from the booking form yet.
- The booking form itself — identical user experience, just no payment step.
