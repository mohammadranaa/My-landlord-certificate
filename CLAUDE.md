# CLAUDE.md — My Landlord Certificate

Project context and conventions for Claude Code. Read this before making any changes.

---

## 0. Owner decisions (source of truth — October 2026)

1. **Prices:** `src/lib/pricing.ts` is the only source. Every price on every page, FAQ, JSON-LD schema, meta description and blog post must match it. Build prices from the module (`FROM_PRICES`, the `getPriceFor…` helpers, the tables, `LANDLORD_BUNDLES`, `formatPounds`) — never retype a number. `.mdx` posts can't import, so they must use exactly the current values.
2. **Appointments: always next day.** Use `APPOINTMENT_SHORT`, `APPOINTMENT_LINE` or `APPOINTMENT_FAQ` from `src/lib/constants.ts`. The booking form allows tomorrow if booked before 5pm UK time, otherwise the day after, 7 days a week — so the site says "Book by 5pm for a next-day appointment". Never "same-week", "1–3 days" or "within the week". (Booking *confirmation* time — "we'll call you within 2 hours" — is a different thing and stays.)
3. **Certificates issued: 1,000+.** Use `CERTIFICATES_ISSUED` from `src/lib/constants.ts`.
4. **Reviews: only real ones**, from `src/data/reviews.ts`, shown with `ReviewsSection` on every service page. Rating shows "★★★★★ Rated 5.0 on Google" with no count until `SHOW_REVIEW_COUNT_FROM`. Never add `AggregateRating` or `Review` schema, and never invent a testimonial (DMCC Act 2024).

---

## 1. Project overview

**My Landlord Certificate** is a UK landlord compliance certificate booking platform. Landlords book EICR, Gas Safety (CP12), EPC, Fire Risk Assessment, PAT Testing and other compliance services online. Engineers are dispatched and certificates are emailed within 24 hours.

- **Target audience:** UK residential landlords, HMO operators, letting agents
- **Geography:** London and the M25 area (all 33 London boroughs)
- **Business model:** Fixed-price certificates booked online, fulfilled by accredited engineers

### COVERAGE LANGUAGE RULES

- **Primary phrase:** "within the M25" or "across London and the M25 area"
- **Secondary:** "all 33 London boroughs" (for borough map sections and borough-specific content)
- **Never use:** "London and the South East" on service pages (South East implies areas outside M25 like Brighton, Southampton, which we don't cover)
- The `/coverage-areas` page may explain the M25 coverage in full detail
- Borough pages use borough-specific language only

### CERTIFICATE DELIVERY LANGUAGE RULE

- **NEVER use:** "same day certificate", "same-day delivery", "emailed same day", "issued same day", "certificates same day", or any "same day" / "same-day" variant anywhere on the site
- **Standard services** (EICR, Gas Safety, EPC, PAT Testing, Emergency Lights, Fire Safety Certificate, Asbestos, Commercial EICR, Commercial Gas, Commercial EPC): use **"certificate within 24 hours"** or **"emailed within 24 hours"**
- **Fire Risk Assessment** (`/fire-risk-assessment`, its borough pages and `/lp/fire-risk-assessment`): use **"report within 24 hours"** (owner decision, October 2026 — previously 48 hours)
- **Legionella Risk Assessment ONLY**: use **"report within 48 hours"**
- **Stats bars and eyebrow text:** short form `Within 24 hours` (standard and FRA) or `Within 48 hours` (Legionella only)
- **Metadata descriptions:** `certificate emailed within 24 hours` (standard), `report emailed within 24 hours` (FRA) or `report emailed within 48 hours` (Legionella)
- **Do NOT use:** "same day", "same-day", "emailed same day", "certificates same day", "issued same day"

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 (utility-first, no inline styles) |
| UI primitives | Base UI (`@base-ui/react`) + shadcn conventions |
| Class merging | `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts` |
| Variant management | `class-variance-authority` (cva) |
| React | v19 |

**Rules:**
- No inline styles — Tailwind classes only
- No `styled-components`, no CSS modules
- TypeScript strict mode — no `any`, no type assertions without justification
- Server Components by default; use `"use client"` only when state/effects are needed

---

## 3. Brand & design system

### Colour tokens (defined in `src/app/globals.css`)

| Token | Hex | Tailwind class | Use |
|---|---|---|---|
| Compliance Blue | `#0093DB` | `bg-compliance-blue` / `text-compliance-blue` | Primary brand, headers, CTAs |
| Action Green | `#80D100` | `bg-action-green` / `text-action-green` | Booking CTAs (always dark text — WCAG fail with white) |
| Charcoal | `#1F2937` | `text-brand-charcoal` | Body text, headings |
| Soft Grey | `#9CA3AF` | `text-brand-grey` / `text-soft-grey` | Secondary text, labels |
| Warm White | `#FAFAF7` | `bg-warm-white` | Page backgrounds, alternating table rows |
| Alert Amber | `#F59E0B` | `text-brand-amber` | Legal notices, warnings |

### Typography
- Font: Inter (variable, loaded via `next/font` in `src/app/layout.tsx`); the agent portal also uses Barlow Condensed (`--font-barlow-condensed`)
- Headings: use `<Heading level={1|2|3|4}>` component — never raw `<h1>–<h4>` on page content
- Body: `text-brand-charcoal/80` for readable body copy, `text-brand-grey` for secondary text

### Spacing & layout
- Page sections: use `<Section spacing="sm|md|lg">` component
- Max-width containers: use `<Container>` component
- Service page content well: `max-w-4xl mx-auto px-4 sm:px-6`

---

## 4. Component library

All reusable components live in `src/components/`. Do not duplicate — extend existing components.

### `src/components/ui/` — design system primitives

| Component | File | Purpose |
|---|---|---|
| `Button` | `button.tsx` | All buttons. Variants: `primary`, `secondary`, `tertiary`, `cta` (green, dark text). Sizes: `sm`, `md`, `lg`, `xl` |
| `Container` | `container.tsx` | Max-width wrapper |
| `Section` | `section.tsx` | Page section with spacing presets |
| `Heading` | `heading.tsx` | Typed heading (h1–h4) with brand styles and `inverted` prop |
| `PriceTag` | `price-tag.tsx` | Legacy price display — bold number, optional "from" prefix |
| `PriceDisplay` | `price-display.tsx` | Hero "from £X" price — number in Compliance Blue, "from" in Soft Grey. Sizes: `sm`, `md`, `lg` |
| `PriceTable` | `price-table.tsx` | Full pricing table — Compliance Blue header, alternating rows, optional `cheapest`/`most-popular` badges. Accepts `readonly PriceTableRow[]` directly from `src/lib/pricing.ts` |
| `CTABanner` | `cta-banner.tsx` | Full-width CTA section. Variants: `blue`, `white` |
| `FAQAccordion` | `faq-accordion.tsx` | Accessible accordion with optional FAQ schema |
| `ServiceCard` | `service-card.tsx` | Service listing card with icon, name, price, turnaround |
| `TestimonialCard` | `testimonial-card.tsx` | Review card with optional Trustpilot badge |
| `TrustBadges` | `trust-badges.tsx` | NICEIC / Gas Safe / Trustpilot badges. Variants: `light`, `dark` |
| `NavBar` | `nav-bar.tsx` | Site navigation (injected by marketing layout) |
| `Footer` | `footer.tsx` | Site footer (injected by marketing layout) |
| `StickyMobileCTA` | `sticky-mobile-cta.tsx` | Fixed bottom CTA — mobile only |

### `src/components/shared/`

| Component | File | Purpose |
|---|---|---|
| `JsonLd` | `json-ld.tsx` | Injects `<script type="application/ld+json">` — pass any schema object |

### `src/components/marketing/`

| Component | File | Purpose |
|---|---|---|
| `ServicePage` | `service-page.tsx` | Generic service page shell (legacy — new service pages are built as custom files) |

---

## 5. Directory structure

```
src/
├── app/
│   ├── (marketing)/          # Public marketing pages (NavBar + Footer via layout.tsx)
│   │   ├── eicr/             # EICR service page
│   │   ├── gas-safety-certificate/
│   │   ├── epc/
│   │   ├── fire-risk-assessment/
│   │   ├── pat-testing/
│   │   ├── landlord-certificates-bundle/
│   │   ├── eicr-cost/        # EICR pricing transparency / SEO page
│   │   ├── pricing/          # Master pricing page (all services)
│   │   └── ...
│   ├── book/                 # Booking flow
│   ├── admin/                # Admin dashboard
│   └── demo/                 # Component design system demo (noindex)
├── components/
│   ├── ui/                   # Design system primitives (see §4)
│   ├── marketing/            # Page-level marketing components
│   └── shared/               # Cross-cutting utilities (JsonLd etc.)
├── lib/
│   ├── pricing.ts            # ← SINGLE SOURCE OF TRUTH for all pricing
│   ├── services.ts           # Service metadata (name, FAQs, included items)
│   └── utils.ts              # cn() helper
└── types/
    └── index.ts
```

---

## 6. Content briefs — service pages

> **PRICING RULE:** All pricing must reference `src/lib/pricing.ts`. Never hardcode prices in page content — always import from the pricing module. Use the exported constants, helper functions and `FROM_PRICES` map directly in page files.

---

### PAGE: Homepage (/)

- **H1:** "Landlord Certificates in London — EICR, Gas Safety & EPC from £X" — price is the Gas Safety entry price (`getPriceForGasSafety(1)` → £64.99, up to 2 appliances), never hardcoded
- **Meta title:** "Landlord Certificates — EICR, Gas Safety & EPC | My Landlord Certificate"
- **Meta description:** "Book your EICR, Gas Safety Certificate, EPC, Fire Risk Assessment or PAT testing online. From £X, no hidden charges." — £X is `CORE_SERVICES_FROM` (cheapest of those five, currently £59.99)
- **Word count target:** 800–1,200 words (visible body text)
- **Sections (in order):** Hero → Services grid → How it works → Why us → Reviews → Letting agents teaser → FAQ preview → Final CTA
- **Schema:** Organization, LocalBusiness, BreadcrumbList (no AggregateRating or Review schema)
- **Target keywords** (use naturally, not stuffed):
  - Primary: `landlord certificates`, `property certificates`, `landlord compliance`
  - Service: `EICR certificate`, `gas safety certificate`, `CP12`, `EPC certificate`, `fire risk assessment`, `PAT testing`, `HMO certificates`
  - Qualifier: `London landlord`, `rental property`, `private rented sector`, `NICEIC approved`, `Gas Safe Registered`
  - Transactional: `fixed price`, `certificate within 24 hours`, `book online`
- **Service card prices:** Import from `src/lib/pricing.ts`:
  - EICR: `getPriceForEICR('studio')` → £67.99
  - Gas Safety: `getPriceForGasSafety(1)` → £64.99
  - EPC: `getPriceForEPC('studio')` → £89.99
  - Fire Risk Assessment: `getPriceForFRA('studio')` → £74.99
  - PAT Testing: `getPriceForPAT(1)` → £59.99
  - Bundle: `LANDLORD_BUNDLES.essential.bundlePrice` → £160
- **Hero:** Compliance Blue gradient background. No real photo yet — gradient + tagline only.
- **Do not hardcode any prices in body copy** — reference the pricing page or use `from £X` pulled from the module.

---

### Standard structure for every service page

Every service page must include:
1. **Breadcrumb nav** (Home › Service Name)
2. **Hero** — H1 with "from £X" price, accreditation badge line, `PriceDisplay`, two CTAs (Book + anchor to pricing), `TrustBadges`
3. **Stats bar** — dark charcoal bar with 4 quick facts (price, validity/frequency, certificate delivery, accreditation)
4. **What is it?** — 2–3 paragraphs + amber legal notice box
5. **Pricing section** — `PriceTable` using the relevant table constant from `src/lib/pricing.ts` + additional charges note (`ADDITIONAL_CHARGES`: parking £10, congestion £20) + link to commercial page if applicable
6. **What's included for £X** — checklist using the entry price
7. **FAQs** — `FAQAccordion` (no schema — schema is in the page-level `JsonLd`)
8. **CTA block** — blue rounded section, book button, fixed pricing reassurance
9. **Schema** — `Service` + `Offer` (lowest price, GBP) + `BreadcrumbList` + `FAQPage`
10. **`StickyMobileCTA`** — mobile only, correct price from pricing module

---

### (a) `/eicr` — EICR Certificate

- **H1:** "EICR Certificate from £67.99"
- **Meta title:** "EICR Certificate from £67.99 | My Landlord Certificate"
- **Entry price:** `getPriceForEICR('studio')` → £67.99
- **Price table:** `DOMESTIC_EICR_TABLE` with `highlightCheapest`
- **Schema offer price:** 67.99 GBP
- **Validity:** 5 years
- **Accreditation:** NICEIC approved
- **Additional note:** Link to `/commercial-eicr`

---

### (b) `/gas-safety-certificate` — Gas Safety Certificate (CP12)

- **H1:** "Gas Safety Certificate (CP12) from £64.99"
- **Meta title:** "Gas Safety Certificate (CP12) from £64.99 | My Landlord Certificate"
- **Entry price:** `getPriceForGasSafety(1)` → £64.99 (up to 2 appliances, excl. boiler)
- **Price table:** `GAS_SAFETY_CP12_TABLE` with "Most popular" badge on the first row
- **Schema offer price:** 64.99 GBP
- **Validity:** 12 months (annual)
- **Accreditation:** Gas Safe Registered
- **Additional note:** Link to `/commercial-gas-safety-certificate`

---

### (c) `/epc` — Energy Performance Certificate

- **H1:** "EPC Certificate from £89.99"
- **Meta title:** "EPC Certificate from £89.99 | My Landlord Certificate"
- **Entry price:** `getPriceForEPC('studio')` → £89.99
- **Price table:** `DOMESTIC_EPC_TABLE` with `highlightCheapest`
- **Schema offer price:** 89.99 GBP
- **Validity:** 10 years
- **Accreditation:** Accredited DEA assessors
- **Additional note:** Link to `/commercial-epc`

---

### (d) `/fire-risk-assessment` — Fire Risk Assessment

- **H1:** "Fire Risk Assessment from £74.99"
- **Meta title:** "Fire Risk Assessment from £74.99 | My Landlord Certificate"
- **Entry price:** `getPriceForFRA('studio')` → £74.99
- **Price table:** `FRA_RESIDENTIAL_TABLE` with "Most popular" badge on 1–3 bed row
- **Schema offer price:** 74.99 GBP
- **Review frequency:** Annually
- **Legal basis:** Regulatory Reform (Fire Safety) Order 2005
- **Additional note:** Link to commercial FRA pricing (`FRA_COMMERCIAL_TABLE`)

---

### (e) `/pat-testing` — PAT Testing

- **H1:** "PAT Testing from £59.99"
- **Meta title:** "PAT Testing from £59.99 | My Landlord Certificate"
- **Entry price:** `getPriceForPAT(1)` → £59.99 (up to 10 appliances)
- **Price table:** `PAT_TABLE` with `highlightCheapest`
- **Schema offer price:** 59.99 GBP
- **Review frequency:** Annually recommended

---

### (f) `/landlord-certificates-bundle` — Bundle

- **H1:** "All the certificates you need. One visit. One price."
- **Bundle prices:** defined once in `LANDLORD_BUNDLES` (`src/lib/pricing.ts`). The bundle price is a fixed marketing price; subtotal and saving are computed from the service prices, so they update automatically:
  - Essential Bundle: EICR 1–3 bed (£94.99) + Gas Safety boiler check + service (£84.99) = £179.98 → **£160** (save £19.98)
  - Full Compliance: Essential + EPC 1–3 bed (£109.99) = £289.97 → **£260** (save £29.97)
  - HMO Complete: EICR 4 bed (£104.99) + Gas boiler check + service (£84.99) + EPC 5 bed (£149.99) + FRA 4 bed (£179.99) = £519.96 → **£470** (save £49.96)
  - Biggest saving: `BUNDLE_MAX_SAVING` (£49.96)
- **Schema offer price:** `LANDLORD_BUNDLES.essential.bundlePrice` (lowest bundle)

---

### (g) `/eicr-cost` — EICR Cost Guide (SEO)

- **H1:** "How much does an EICR cost?"
- **Intent:** Targets "how much does an EICR cost" search query
- **Content:** Domestic EICR table + Commercial EICR table + cost factors (property size, circuits, wiring age, complexity) + tips to keep costs down
- **Schema:** `Article` + `BreadcrumbList` + `FAQPage`

---

### (h) `/pricing` — Master Pricing Page

- **H1:** "Transparent, fixed pricing"
- **Content:** Every service category with `PriceTable`, organised into sections: Electrical, Gas, EPC, Fire Safety, Other, Bundles, Additional Charges
- **CTA:** "Commercial work over £500?" with `PHONE_DISPLAY` (020 3996 1070) — appears after commercial tables
- **Bundle summary table:** built from `LANDLORD_BUNDLES` (Essential £160, Full Compliance £260, HMO Complete £470)

---

## 7. Schema markup conventions

Every service page must include these three schemas via `<JsonLd>`:

```ts
// 1. Service + Offer
{
  "@context": "https://schema.org",
  "@type": "Service",
  offers: { "@type": "Offer", price: "67.99", priceCurrency: "GBP", availability: "https://schema.org/InStock" }
}

// 2. BreadcrumbList
{ "@context": "https://schema.org", "@type": "BreadcrumbList", ... }

// 3. FAQPage
{ "@context": "https://schema.org", "@type": "FAQPage", ... }
```

The `Offer.price` must always match the lowest price from `src/lib/pricing.ts` for that service. Never hardcode a price that isn't sourced from the pricing module.

---

## 8. Additional charges

Always display these on service pages and the pricing page. Import from `src/lib/pricing.ts`:

```ts
import { ADDITIONAL_CHARGES } from "@/lib/pricing";
// ADDITIONAL_CHARGES.parking       → 10
// ADDITIONAL_CHARGES.congestionZone → 20
```

---

## 9. General rules

- **Never hardcode a price** — always import from `src/lib/pricing.ts`
- **No placeholder content** — if a price is unknown, check `Docs/pricing.md` first
- **Mobile-first** — all pages must work at 375px viewport
- **Accessibility** — use semantic HTML, `aria-label` on nav elements, `scope` on table headers
- **No comments in code** unless the WHY is non-obvious
- **No new dependencies** without checking if an existing one covers the need
- **Run `npx tsc --noEmit` before committing** to catch type errors
