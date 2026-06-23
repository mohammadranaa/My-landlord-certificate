-- Migration: bookings table (captures every checkout attempt + ad attribution)
-- Apply via the Supabase dashboard SQL editor or: `supabase db push`
--
-- Stores one row per checkout attempt. Created with status 'pending' when the
-- Stripe Checkout session is created, then updated to 'paid' by the Stripe
-- webhook (checkout.session.completed). Captures Google Ads click id (gclid /
-- gbraid / wbraid) and UTM params for ad performance analysis.

-- ── Enum ─────────────────────────────────────────────────────────────────────
create type public.booking_payment_status as enum ('pending', 'paid', 'failed', 'refunded');

-- ── Table ────────────────────────────────────────────────────────────────────
create table public.bookings (
  id                   uuid primary key default gen_random_uuid(),
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now(),

  -- Payment
  stripe_session_id    text unique,
  payment_status       public.booking_payment_status not null default 'pending',
  amount_total         numeric(10,2),
  currency             text not null default 'GBP',
  paid_at              timestamptz,

  -- Customer
  customer_name        text,
  customer_email       text,
  customer_phone       text,
  tenant_phone         text,

  -- Property
  property_address     text,
  property_city        text,
  property_postcode    text,
  property_type        text,
  property_subtype     text,

  -- Booking
  services             jsonb,
  services_readable    text,
  appointment_date     text,
  appointment_slot     text,
  congestion_charge    boolean not null default false,
  parking_charge       boolean not null default false,

  -- Ad attribution
  gclid                text,
  gbraid               text,
  wbraid               text,
  utm_source           text,
  utm_medium           text,
  utm_campaign         text,
  utm_term             text,
  utm_content          text,
  landing_page         text,
  referrer             text
);

create index bookings_email_idx       on public.bookings (customer_email);
create index bookings_created_idx     on public.bookings (created_at desc);
create index bookings_status_idx      on public.bookings (payment_status);
create index bookings_gclid_idx       on public.bookings (gclid);

-- ── Row Level Security ───────────────────────────────────────────────────────
-- RLS enabled with NO policies for anon/authenticated => those roles cannot
-- read or write. All access is via the server-side service role (which bypasses
-- RLS) in /api/checkout and the Stripe webhook. Preview rows in the Supabase
-- dashboard (Table Editor), which authenticates separately.
alter table public.bookings enable row level security;

-- Keep updated_at fresh on every update.
create or replace function public.set_bookings_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger bookings_set_updated_at
  before update on public.bookings
  for each row execute procedure public.set_bookings_updated_at();
