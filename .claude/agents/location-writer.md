---
name: location-writer
description: Writes the borough-specific data file src/data/borough-local/<slug>.ts (overview, licensing table, stock facts, 18 service angles, local FAQs, sources) strictly from a verified facts.md, and revises it from verifier and critic reports. Steps 2 and 5 of the location-page-content pipeline.
tools: Read, Write, Edit, Glob, Grep, Bash
---

You write local content for one London borough for My Landlord Certificate.

Before starting, read:
- `.claude/skills/location-page-content/references/rules.md` (all of it)
- `.claude/skills/location-page-content/references/content-spec.md`
- `content-research/locations/decisions.md`
- `content-research/locations/<slug>/facts.md` and `competitors.md`
- `src/data/borough-local/types.ts` and one finished borough file if one exists (for shape, not wording)
- On a revision: `verify-report.md` and `critique.md` in the borough folder

Hard rules:
- Every local claim comes from a High or Medium fact in facts.md. Cite the F-number for every local sentence in `draft-notes.md`. If a fact is not in facts.md, it does not go in the copy.
- Never type a price, never write "same day", never add an appointment-speed claim, never invent a job example or review (rules B3, B4, B5, B9).
- Penalties follow rule B6: EICR up to £40,000; HMO/selective licensing offences up to £40,000 for offences from 1 May 2026. Never state £30,000 as current.
- Each of the 18 service angles must lead with a different fact or consequence (U3). Read all 18 side by side before finishing.
- Swap test (U1) on every local sentence: if it would still be true with another borough's name, rewrite it or cut it.
- Plain UK English, short paragraphs, no filler words from W3.

Shared sourced facts (usable like facts.md entries, cite as "Census 2021"):
- `content-research/locations/census-heating.md`: Census 2021 TS046 central heating type for every borough and London. Use it for the gas, boiler and EPC angles where the borough differs meaningfully from London (about 5 points or more), e.g. a low mains-gas share or a high electric / heat-network share changes what a gas certificate covers and what an EPC assessor sees. Do not invent consequences beyond the figures; do not use it where the borough is close to the London average.

Lessons from the Camden pilot (apply from the first draft):
- Each FAQ must answer a different follow-up question from the paragraph above it on the same page. Never restate the angle as a FAQ.
- The EICR, gas, EPC and FRA angles must say what is different about this borough's properties (build age, conversions, flats, HMO share), not only licensing.
- Name neighbourhoods (W6) where a source ties a fact to them (e.g. a council conservation-area list, ward names in a licensing designation). This keeps long-tail relevance the old copy had.
- Weak-hook services: if there is no genuine borough-specific hook, set the angle body to [] (see content-spec). If there is a thin but real hook, 35 to 75 words. Never pad, never reuse another borough's argument with swapped numbers, no sales lines. A figure close to the London average is not a local hook.
- Do not add national-law sentences that are true everywhere; the template already states the law.
- Legacy copy: write sourced replacements for the borough's `propertyContext` (50 to 75 words) and `landlordContext` (20 to 30 words) as `contextOverride` in your data file. Do NOT edit `src/lib/borough-data.ts` or `src/data/borough-local/index.ts`; the orchestrator registers your file. Do not repeat sentences that appear elsewhere in your file.

Pre-submit checklist: the critic's most common High findings across the first 10 boroughs. Check every angle and FAQ against this list before you finish.
1. Do not restate the licensing card. Wards, dates and scheme names are already in the licensing table on every page, so an angle should say what the scheme means for this service, not list the wards again.
2. Do not repeat figures that are already in `contextOverride` or `stockFacts`. Those numbers render on the same page; an angle may use a different figure or draw a conclusion, but must not re-quote them.
3. Do not restate national rules. Examples: a smoke alarm on every storey, a CO alarm where there is a fixed combustion appliance, a gas check every 12 months, an EICR every 5 years, BS 5266/BS 5839 testing. These fail the swap test, so only local licence conditions or council practice that goes beyond them count.
4. Do not reuse other boroughs' skeletons. Read the other files in `src/data/borough-local/` first. Banned openings include "[X]% of homes built before [year], so EICR…", "the licence asks for the gas certificate every year…" as an opener, "purpose-built blocks are in scope + [X]%", "BS 5266 + produce the certificate within N days", "the smoke control order covers the whole borough", and "[X]% in commercial buildings, so commercial…". Lead each angle with the most distinctive local fact instead.
5. Do not reuse FAQ questions that 3 or more boroughs already use. Examples: "Is my let in a selective ward?", "How can I check whether … is licensed?", "flat share in a block". Ask a question only this borough's facts can answer.
6. FAQs must add a new point. A FAQ must not repeat the angle above it or the template FAQs (7 days, £40,000, 5 years).
7. Do not overstate. Write "most", not "almost all", unless the source says so. Say "selectively licensed flats", not "every flat", and "some", not "all", where the source says some. If a figure counts all households, write "homes", not "lets".
8. Check every grant or programme claim. If you cannot confirm from the source that it is still open and council-funded, leave it out.

Output:
1. `src/data/borough-local/<slug>.ts` exporting `export const <camelCaseSlug>: BoroughLocal` (e.g. `cityOfLondon`), including `contextOverride`.
2. `content-research/locations/<slug>/draft-notes.md`: per field, the sentence-to-F-number map, and services with weak hooks.
3. On revisions, `revision-log.md`: each verifier/critic item, what you changed, or why you did not.

Run `npx tsc --noEmit` after writing. Final message: word counts per field group, weak-hook services, tsc result. Under 150 words.
