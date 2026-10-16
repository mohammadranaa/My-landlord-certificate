# Research Spec (borough facts + competitor gaps)

Adapted from the in-depth content audit (sections R6, R7, R9, R11, R12) and narrowed to one borough at a time. Evidence rules R1 to R7 in `rules.md` apply to every line.

Output folder per borough: `content-research/locations/<slug>/`

---

## Part 1. Borough facts (location-researcher)

Collect each item below. Record every fact in `facts.md` using the facts table format. If an item cannot be sourced, write `NOT FOUND` with the searches tried. Never fill a gap with a guess.

### 1. Council and contact route
- Exact council name (e.g. "London Borough of Camden", "Royal Borough of Kensington and Chelsea", "City of London Corporation")
- URL of the private sector housing / private renting page
- URL of the property licensing page and how a landlord applies (online portal, form, email)
- Whether the council publishes a public register of licensed properties (URL)

### 2. Property licensing (most important, highest risk)
For each scheme currently in force (mandatory HMO, additional HMO, selective):
- Official scheme name and type
- Area covered: whole borough, or named wards (list them)
- Who it applies to (e.g. HMOs with 3+ people from 2+ households; all privately rented homes in listed wards)
- Start date and end date (designation period)
- Licence fee if published (record as text with "as of <Month YYYY>"; fees go in research only unless the writer has a reason to cite them)
- Any published licence conditions that mention gas safety certificates, EICRs, smoke/CO alarms, fire safety, EPCs (quote the condition briefly, with URL)
- Any consultation on a new or renewed scheme (name, dates, URL)
- Check: has any scheme expired? If yes, record it as expired with the end date.
- Article 4 directions restricting HMO conversions (areas covered, URL)

### 3. Housing stock and tenure (Census 2021)
From ONS / Nomis (TS044 accommodation type, TS054 tenure) or the council's own housing evidence base:
- Share of households privately renting (borough figure; London average for comparison)
- Accommodation mix: detached / semi / terraced / purpose-built flats / converted or shared house flats / flats in commercial buildings
- Number or share of HMOs if the council publishes an estimate

### 3b. Heating (shared file)
- Census 2021 TS046 central heating type is already in `content-research/locations/census-heating.md` for all boroughs; do not re-research it, but note in Service hooks if it gives the gas/boiler/EPC angle a genuine local point.

### 4. Property age and type
- Typical build eras of the stock (council character appraisals, local plan, housing strategy, VOA council tax stock by build period table CTSOP)
- Conversions (houses split into flats) and their prevalence if documented
- Notable estates or tower blocks only if a council or GOV.UK source names them in a housing or safety context

### 5. Conservation and heritage (feeds EPC, fuse box, alarm, boiler angles)
- Number of conservation areas (council page)
- Listed building count if published
- Any council guidance on energy efficiency works in conservation areas (URL)

### 6. Other local compliance signals (only if sourced)
- Council enforcement news or annual reports on private renting (civil penalties issued, licensing enforcement)
- Local energy efficiency or retrofit grants for private landlords
- Air quality or smoke control zone rules that affect boilers or solid fuel (Smoke Control Area status)

### facts.md format

```
# <Borough> facts
Checked on: <YYYY-MM-DD>   Researcher: location-researcher

| # | Topic | Fact (as it may be written) | Source URL | Source type | Checked | Confidence |
|---|-------|-----------------------------|------------|-------------|---------|------------|
| F1 | Licensing | ... | https://... | Council | 2026-10-15 | High |

## NOT FOUND
- <item>: searches tried "<query>", "<query>"

## Assumptions (not publishable)
- ...

## Service hooks
One line per service key saying which facts (by F-number) make a genuine local angle for it, or "no genuine local angle found".
```

Confidence: High = council or GOV.UK page states it directly. Medium = official dataset you read and interpreted (state the table). Low = anything else (not publishable).

---

## Part 2. Competitor local content (location-competitor-analyst)

For the borough, search Google UK for these queries and read the top 3 organic location pages for each (skip directories, Checkatrade, Rated People, Yell, government pages):
- "EICR <borough>", "gas safety certificate <borough>", "EPC <borough>", "fire risk assessment <borough>", "landlord certificates <borough>"

For each page actually opened, record in `competitors.md`:
- URL, H1, outline (H2s)
- Every genuinely local item it includes (licensing details, wards, housing stock, council links, local FAQs, neighbourhoods)
- Local items that are wrong or outdated (e.g. expired scheme presented as current) - a chance for us to be more accurate
- Questions it answers that ours does not

Then write a gap list using evidence-card format:

```
Our page: /eicr/<slug>
Competitor: <URL>
Gap: competitor explains X and Y about <borough>; ours explains neither.
Use: only if Part 1 has a sourced fact for it (F-number), otherwise "needs research".
```

Rules: competitor pages are evidence of what matters, never a source of facts (rule R3). No bare URL lists. If a query returns no real location pages, write "no location competitor found".
