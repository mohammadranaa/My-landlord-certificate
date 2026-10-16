---
name: location-page-content
description: "Research, write, verify and critique borough-specific content for My Landlord Certificate's 627 location pages (/{service}/{borough} and /coverage-areas/{borough}). Project version of the in-depth-content-audit skill, narrowed to one borough at a time and fixing audit finding C2 (pages 75-86% identical). Use whenever the task is rewriting, deepening, auditing or checking a borough/location page, adding local licensing or housing facts, or running the location pipeline for a borough ('Camden page update karo', 'next borough', 'location pages rewrite')."
---

# Location Page Content Pipeline

Goal for every borough page: 350+ words a landlord could not read on any other borough page, every one of them true, sourced and useful for deciding what to book.

Read first, every time:
- `references/rules.md` : the rulebook (R evidence, U uniqueness, B brand/legal, W writing, C code, P process)
- `references/research-spec.md` : what to research and the facts/competitor file formats
- `references/content-spec.md` : the data shape and how each section is written
- `content-research/locations/decisions.md` : owner decisions (appointment speed, case studies, rollout)

What we kept from the in-depth content audit skill: its evidence rules (only cite opened pages, never invent numbers, label assumptions, no padding, no generic advice), the depth checklist (R6), evidence cards (R7), search-intent check (R9) and gaps-nobody-covers (R12). What we dropped: the full-site competitor discovery, topic universe, cluster map, HTML/XLSX report. The output here is page content, not a report.

## Agents (in `.claude/agents/`)

| Step | Agent | Output |
|---|---|---|
| 1a | `location-researcher` | `content-research/locations/<slug>/facts.md` |
| 1b | `location-competitor-analyst` (parallel with 1a) | `content-research/locations/<slug>/competitors.md` |
| 2 | `location-writer` | `src/data/borough-local/<slug>.ts` + `draft-notes.md` |
| 3 | `location-verifier` | `verify-report.md`: PASS/FAIL per rule, re-opens sources |
| 4 | `location-critic` | `critique.md`: swap test, U3 repetition, intent, competitor gaps, measured uniqueness |
| 5 | `location-writer` (revision) | updated data file, `revision-log.md` |
| 6 | `location-verifier` (re-check) | final PASS needed |
| 7 | `location-proofreader` | `proofread.md`: wording fixes only, never facts |
| 8 | `node scripts/location-gates.mjs <slug>` (after `npx next build`) | every automated gate PASS; REVIEW items checked by the orchestrator |
| 9 | Orchestrator browser check (rules D3, Q3) | 375px + desktop screenshots of 3 pages |
| 10 | `node scripts/location-changelog.mjs record <slug>` | before/after text + per-page log in `content-research/locations/change-log/` (git-ignored, local only); `status` prints pages done / pending out of 627 |

Maximum two revision loops (rule P2). Then stop and list open issues for the user.

## Orchestrator steps (main session)

1. Confirm the borough slug exists in `src/lib/borough-data.ts`.
2. Launch researcher and competitor analyst in parallel, each told the slug, display name and output folder.
3. When both finish, open 3 of the cited source URLs yourself (at least one licensing source) to spot-check before writing starts.
4. Launch the writer. Then the verifier. Then the critic. Pass the previous report paths to each.
5. If either report has a FAIL or a High critique item, send the writer the exact items. Re-verify.
6. Run `npx tsc --noEmit`, `npx next build`, then `node scripts/location-similarity.mjs --boroughs=<slug>`. Record the result in `content-research/locations/progress.md`.
7. Never commit or push. Publishing happens only after all 33 boroughs pass and the user approves (rule P3).

## Progress tracking

`content-research/locations/progress.md` holds one row per borough: status (researching / drafted / verified / critiqued / passed / blocked), unique-word min for that borough, open issues.
