# Content Spec (what the writer produces)

## Where content lives

One data file per borough: `src/data/borough-local/<slug>.ts`, exporting a `BoroughLocal` object (type in `src/data/borough-local/types.ts`). All 19 page sets render it through one shared component, `src/components/location/borough-local-section.tsx`. Writers edit data files only, unless the orchestrator asks for a code change.

## BoroughLocal fields

| Field | Purpose | Length guide |
|---|---|---|
| `checkedOn` | Date facts were verified (YYYY-MM-DD) | - |
| `council` | `{ name, housingUrl, licensingUrl }` | - |
| `licensing` | Array of schemes: `{ name, type, area, appliesTo, period, status }` (status: "in force", "consultation", "expired") | 1 to 4 rows |
| `stockFacts` | 2 to 4 short sourced facts: `{ label, value, source }` (e.g. "Households renting privately", "31% (Census 2021)") | - |
| `overview` | Borough-level landlord picture: stock, tenure, licensing in plain words. Used on the coverage-area hub | 120 to 170 words |
| `serviceAngles` | `Record<ServiceKey, { heading, body }>`: what this borough's facts mean for that one service. `body` is an array of 1 to 3 short paragraphs | 110 to 160 words each |
| `serviceFaqs` | `Partial<Record<ServiceKey, {question, answer}[]>>`: 1 to 2 local FAQs per service, answered from sourced facts | answers 40 to 80 words |
| `sources` | `{ label, url }[]` shown as "Sources" under the section | - |

## How the section renders (per service page)

1. H2: "<Service short name> in <Borough>: local rules and housing" (wording varies by service; the writer picks a natural H2 and stores it in `serviceAngles` as `{ heading, body }`)
2. `serviceAngles[service]` body
3. Licensing table (scheme, area, who it applies to, period, status), plus "Check the current scheme on <council> website" link
4. `stockFacts` as a small fact list
5. Sources list (small text)
6. `serviceFaqs[service]` merged into the page FAQ list (before the generic FAQs)

On the coverage-area hub: `overview`, licensing table, stock facts, sources.

That gives roughly: angle 130 + licensing table 60 to 100 + stock facts 40 + local FAQs 80 to 150 = 310 to 420 local words per service page, on top of the existing `propertyContext` / `landlordContext`.

## Writing each serviceAngle

- Start from the service's legal duty only as far as needed, then go local at once: "In <Borough>, ..."
- Use 2 to 4 facts from `facts.md`, cite them by F-number in the draft notes (not in the copy).
- Explain the consequence for the landlord: what to check, what to book, what licensing asks for.
- Every angle in a borough must be different from the other 17 angles in the same borough (U3). If two services share the same local hook (e.g. fire door and fire alarm both depend on HMO licensing), lead each with a different fact and a different consequence.
- If `facts.md` has no genuine borough-specific hook for a service, set that angle's `body` to `[]` (keep a `heading`, it is ignored). The page then shows the borough's licensing and housing facts under a plain heading. Do NOT write a paragraph that makes the same argument other boroughs make with the numbers swapped (e.g. "X% of homes are in commercial buildings, so commercial EICRs matter"); the critic compares boroughs and fails that as cross-borough sameness. A national rule restated with the borough's name also fails (swap test). Flag empty angles in `draft-notes.md`.

## Draft package (writer output)

- `src/data/borough-local/<slug>.ts`
- `content-research/locations/<slug>/draft-notes.md`: for each sentence with a local claim, the F-number it rests on; list of services with weak hooks.
