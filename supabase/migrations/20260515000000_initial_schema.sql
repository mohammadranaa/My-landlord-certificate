-- Migration: initial schema
-- Run against your Supabase project via the dashboard SQL editor or
-- the Supabase CLI: `supabase db push`

-- ── Enums ──────────────────────────────────────────────────────────────────

create type public.lead_status as enum ('new', 'contacted', 'qualified', 'lost');

-- ── Tables ─────────────────────────────────────────────────────────────────

-- website_users
-- One row per registered customer. id = auth.users(id).
-- servicem8_company_uuid is written after the ServiceM8 company
-- record is created during the first booking flow.
create table public.website_users (
  id                      uuid primary key references auth.users(id) on delete cascade,
  email                   text not null unique,
  name                    text,
  phone                   text,
  servicem8_company_uuid  text,
  created_at              timestamptz not null default now()
);

-- letting_agent_leads
-- Marketing enquiries from /letting-agents. Not linked to auth.
create table public.letting_agent_leads (
  id                uuid        primary key default gen_random_uuid(),
  agency_name       text        not null,
  contact_name      text        not null,
  email             text        not null,
  phone             text,
  properties_count  integer,
  areas             text,
  notes             text,
  status            public.lead_status not null default 'new',
  created_at        timestamptz not null default now()
);

create index letting_agent_leads_email_idx on public.letting_agent_leads (email);
create index letting_agent_leads_status_idx on public.letting_agent_leads (status);

-- newsletter_subscribers
-- Simple email list. unsubscribed_at=null means currently subscribed.
create table public.newsletter_subscribers (
  id               uuid        primary key default gen_random_uuid(),
  email            text        not null unique,
  subscribed_at    timestamptz not null default now(),
  unsubscribed_at  timestamptz
);

-- ── Row Level Security ──────────────────────────────────────────────────────

alter table public.website_users          enable row level security;
alter table public.letting_agent_leads    enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- website_users: each user reads and updates only their own row.
-- Inserts are handled by the trigger below; no direct INSERT policy needed.
create policy "Users can view own profile"
  on public.website_users
  for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.website_users
  for update
  using (auth.uid() = id);

-- letting_agent_leads: anonymous and authenticated users can submit
-- (public form). Only the service role can read/update rows (admin dashboard).
create policy "Anyone can submit a lead"
  on public.letting_agent_leads
  for insert
  to anon, authenticated
  with check (true);

-- newsletter_subscribers: anyone can subscribe; anyone can unsubscribe
-- (we use the email address as the identify token in the unsubscribe link).
create policy "Anyone can subscribe"
  on public.newsletter_subscribers
  for insert
  to anon, authenticated
  with check (true);

create policy "Anyone can unsubscribe"
  on public.newsletter_subscribers
  for update
  to anon, authenticated
  using (true)
  with check (true);

-- ── Auth trigger ────────────────────────────────────────────────────────────

-- Automatically create a website_users row whenever a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.website_users (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
