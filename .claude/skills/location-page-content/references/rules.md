# Location Page Rules (the rulebook)

Every agent in the location pipeline reads this file before doing anything. The verifier and critic check work against it rule by rule, quoting the rule ID when something fails.

Source of these rules: the October 2026 SEO audit (finding C2, C3, C4, C5), `CLAUDE.md`, and the in-depth content audit evidence rules.

---

## R. Research and evidence

- **R1. Every local fact needs a source.** A fact is anything that is true of one borough and not another: a licensing scheme, a fee, a date, a percentage, a housing-stock figure, a council process, a conservation area count. Each one must trace to a URL that was actually opened, with the date it was checked.
- **R2. Allowed sources, in order of trust.**
  1. The borough council's own website (licensing pages, housing strategy, conservation area lists, private sector housing pages)
  2. GOV.UK, legislation.gov.uk, the Valuation Office Agency, the English Housing Survey
  3. ONS / Census 2021 (Nomis tables TS044 accommodation type, TS054 tenure, etc.), London Datastore, GLA housing data
  4. Recognised landlord bodies (NRLA, London Property Licensing) only to point at the council source, never as the only source
- **R3. Never use competitor pages as a source of facts.** Competitor pages show which topics matter. They do not prove that anything is true.
- **R4. Never invent.** No guessed percentages, dates, fees, scheme names, street names, estate names or job examples. If a fact cannot be found, it is left out. Missing facts are listed in the research file as `NOT FOUND`, not written around.
- **R5. Licensing schemes change.** Additional and selective licensing schemes start, expire and get renewed. For each scheme, record: scheme name, type (mandatory HMO / additional / selective), area covered (whole borough or named wards), start date, end date, fee if published, and the council page URL. If the end date has passed and no renewal is found, the scheme is written as expired or omitted. Never present an expired scheme as current.
- **R6. Date-stamp time-sensitive facts.** Licensing and fees are written with "as of <Month YYYY>" in the copy or the research file.
- **R7. Label assumptions.** Anything inferred and not observed is tagged `Assumption` in the research file and may not be published as fact.

## U. Uniqueness (the core of finding C2)

- **U1. The swap test.** Every local sentence must become false or meaningless if another borough's name is swapped in. "Camden landlords need an EICR" fails. "Camden's additional licensing scheme covers HMOs of three or more people across the whole borough" passes (if sourced).
- **U2. Local word target.** Each borough page carries 350 to 400 words that pass the swap test. This is a usefulness target, not a padding target. If there are not enough real facts for a borough, write fewer words and report the shortfall. Never pad.
- **U3. Service-specific local angle.** Within one borough, the 18 service pages must not repeat the same local paragraph. Borough facts are shared, but each service page explains what those facts mean for that service. Examples of the right kind of link (only when the facts support it):
  - EICR: age of housing stock and conversions, and what that means for older wiring and consumer units
  - Gas safety: flats in converted houses, shared flues, HMO gas duties
  - EPC: conservation areas and listed buildings limiting insulation upgrades, MEES minimum E rating
  - Fire risk assessment / fire doors / alarms: HMO volume, purpose-built blocks, licensing fire conditions
  - Asbestos: share of pre-2000 stock, council-built estates of a given era
- **U4. Measured uniqueness.** After `npx next build`, run `node scripts/location-similarity.mjs`. It strips borough names and postcodes, then counts, for each page, the words that appear on no other borough page of the same service.
  - **Per-borough gate** (`--boroughs=<slug>`): every page of that borough has **350+ unique words**.
  - **Final gate** (no flag, after all 33 boroughs pass): every page 350+ unique words AND the average 8-word-phrase overlap within each service set is **60% or less**. The set average cannot be judged earlier because un-rewritten boroughs still carry the old ~80% template overlap.
  - **Baseline (15 Oct 2026, before rewrite):** 90 to 184 unique words per page; overlap 75% to 86% (hubs 86%). Full table in `content-research/locations/baseline.txt`.
  - The overlap number stays above 40% by design because pricing, "what's included" and reviews are legitimately shared (U5). The unique-word count is the main measure.
- **U5. No template sentences with only the name swapped** in the new local sections. Shared template sections (pricing, what's included, how it works) may stay shared; they are not counted as local words.

## B. Brand and legal rules (from CLAUDE.md, always in force)

- **B1. Coverage language.** Use "within the M25" or "across London and the M25 area"; "all 33 London boroughs" for borough sections. Never "London and the South East". Borough pages use borough-specific language.
- **B2. Certificate delivery.** Standard services: "certificate within 24 hours" / "emailed within 24 hours". Fire Risk Assessment: "report within 24 hours". Legionella only: "report within 48 hours".
- **B3. Never write "same day" or "same-day"** in any form.
- **B4. Appointment speed.** The owner has not yet chosen between "same-week" and "next-day". Do not add any new appointment-speed claim in the local sections until that decision is recorded in `decisions.md`.
- **B5. Prices.** Never type a price. Prices come only from `src/lib/pricing.ts` via the existing variables in the template. Location copy does not mention prices at all unless it interpolates a pricing-module value already used on the page.
- **B6. Penalties.**
  - EICR (Electrical Safety Standards Regulations 2020): up to £40,000 per breach (SI 2025/1043, from 1 November 2025).
  - HMO and selective licensing offences and HMO management regulation offences (s249A Housing Act 2004, s23 Housing and Planning Act 2016): up to £40,000 for offences committed on or after 1 May 2026 (Renters' Rights Act 2025; GOV.UK guidance "Civil penalties under the Renters' Rights Act 2025 and other housing legislation", published 13 November 2025). It was £30,000 before that date.
  - Lesser "breaches" under the Renters' Rights Act: up to £7,000.
  - Never state a penalty figure without one of these sources, and never write £30,000 as the current maximum for any of the above.
- **B7. Accreditation claims** stay as they are on the main service pages (NICEIC, NAPIT, Gas Safe, DEA, NEBOSH). Do not add new ones.
- **B8. No council endorsement.** Never imply the council recommends or partners with the business. Link to the council page as a reference only.
- **B9. No fake proof.** No invented reviews, job counts, "we recently tested 40 flats in Kentish Town" stories or local testimonials. Real local job examples may only be used if the owner supplies them in `decisions.md`.

- **B10. Tenancy law as of 1 May 2026.** The Renters' Rights Act 2025 abolished assured shorthold tenancies and section 21 "no-fault" evictions in England's private rented sector from 1 May 2026 (GOV.UK). Never present ASTs or section 21 as current. Possession now needs a Section 8 ground. If a council source still says "assured shorthold tenancy", paraphrase it without the term.

## W. Writing

- **W1. Audience:** UK landlords, HMO operators and letting agents. Plain UK English. Practical: what the rule is, what it means for this property type, what to do.
- **W2. Intent first.** A landlord searching "EICR Camden" wants: is it legally required here, are there extra local rules (licensing), how fast, how much, who does it. Local sections must help with that decision.
- **W3. No filler.** Banned: "nestled", "vibrant", "bustling", "rich history", "home to many", "look no further", "one-stop shop", "in today's world", tourism facts unrelated to property.
- **W4. Short paragraphs** (max 3 sentences). Use a small table or list when comparing schemes or facts.
- **W5. Link out** to the council licensing page once per page (external, `rel="noopener"`), and link to related internal service pages for the same borough.
- **W6. Neighbourhood names** (e.g. Kentish Town, Clapham) may be mentioned when a source ties a fact to them. Do not create neighbourhood pages here; that is audit item C5, after C2.

## C. Code rules (when the writer touches code)

- **C1.** Local content lives in data files, not hardcoded in page components. Templates render the fields.
- **C2.** Follow CLAUDE.md: Tailwind only, `<Heading>`, `<Section>`, `<Container>`, server components, strict TypeScript, no new dependencies.
- **C3.** Do not touch `src/components/analytics/*`, consent code, GTM, or booking conversion code.
- **C4.** Run `npx tsc --noEmit` and `npx next build` after code changes.

## D. Design (owner instruction, 15 Oct 2026)

- **D1. Fix only what is broken.** Do not redesign sections, restyle components or change layouts that work. A change is allowed only when a check shows a real problem (e.g. a table that is cramped or scrolls sideways at 375px).
- **D2. One rendering of each piece of text.** Never render the same content twice for different screen sizes (e.g. a table for desktop plus cards for mobile). Use one responsive layout. Duplicate hidden text counts as duplicate content.
- **D3. Check every visual change** at 375px and desktop width in the browser, with no horizontal page scroll, before calling it done.
- **D4. Reuse the design system:** brand tokens, `Heading`, existing card and table styles. No new colours, fonts or libraries.

## A. Audit alignment gate (finding C2)

Every borough must cover these, or list them as NOT FOUND with the searches tried:
- **A1.** Its licensing scheme(s): type, area, period, status
- **A2.** Council contact / application route
- **A3.** Housing stock and tenure (Census 2021)
- **A4.** Typical property age (VOA or council source)
- **A5.** Real local job examples: only if the owner supplies them (B9); otherwise reported as "not supplied"
- **A6.** The old `propertyContext` / `landlordContext` in `borough-data.ts` re-checked against facts.md and rewritten if any claim is unsourced or contradicted
- **A7.** Congestion zone wording matches `content-research/locations/congestion-zone.md` (all / part / none)

## Q. Quality gates (all must pass before a borough is marked passed)

- **Q1.** `node scripts/location-gates.mjs <slug>` passes: type check, banned-phrase scan, source links all respond, uniqueness (after build).
- **Q2.** Verifier PASS, critic READY (no High items), proofreader CLEAN.
- **Q3.** Browser check of `/eicr/<slug>`, one generic-template page and `/coverage-areas/<slug>` at 375px and desktop.
- **Q4.** Licensing facts re-verified every 3 months after publishing (schemes change).

## P. Process

- **P1.** Pilot first: one borough end to end, measured, before batching. Then the 10 highest rental-density boroughs, measured, then the rest (audit C2 recommendation).
- **P2.** Pipeline per borough: researcher + competitor analyst (parallel) -> writer -> verifier -> critic -> writer revision -> verifier re-check -> proofreader -> gates script -> browser check. Maximum two revision loops; after that, escalate to the user with the open issues.
- **P3.** Nothing is published (committed or pushed) until all 33 boroughs pass, the similarity check passes, and the user approves.
