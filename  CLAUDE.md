\# MY LANDLORD CERTIFICATE — Claude Code Project Context

\*This is the master context document for Claude Code. Save as \`CLAUDE.md\` at the root of your project. Claude Code reads this automatically every session.\*

\*This document contains: business context, brand guidelines, full tech stack, complete site architecture, SEO keyword targets, and keyword-rich content briefs for every page.\*

\---

\#\# 1\. BUSINESS CONTEXT

\#\#\# What we're building

\*\*My Landlord Certificate\*\* is a UK B2C property compliance certificate service. We provide EICR, Gas Safety Certificate, EPC, Fire Risk Assessment, PAT testing and other compliance certificates to private landlords and small/medium letting agents.

\*\*Sister brand:\*\* PropAssure (separate website, B2B compliance for letting agents managing 20+ properties). My Landlord Certificate is the consumer-facing B2C brand; PropAssure handles enterprise B2B.

\#\#\# Audience split

\- \*\*75% private landlords (B2C)\*\* — accidental landlords, investor landlords, small portfolio landlords with 1–4 properties  
\- \*\*25% small/medium letting agents (B2B-lite)\*\* — agencies managing 10–50 properties

\#\#\# Growth model

\- \*\*Paid acquisition is the primary engine:\*\* Google Ads \+ Meta Ads  
\- \*\*Organic SEO \+ social is a parallel growth goal\*\*, not a secondary afterthought  
\- \*\*Brand name is itself a high-volume keyword cluster\*\* — every mention compounds SEO claim  
\- \*\*Critical:\*\* competing against established \`landlord-certificates.co.uk\` (2,400 vol exact match), \`landlordcertificatelondon.co.uk\`, \`landlord-certs.com\`. Strategy is to capture broader "landlord \[service\] certificate" cluster (\~13,500 monthly searches combined) rather than just the exact brand-name term.

\#\#\# Coverage area

London \+ South East primarily. Expanding nationally over time. Each major borough/area gets its own location page for local SEO.

\---

\#\# 2\. BRAND IDENTITY

\#\#\# Brand name

\*\*My Landlord Certificate\*\* (three words, title case). Never abbreviate to "MLC" in customer-facing copy. The "My" is the distinctive element — always use it.

\#\#\# Tagline

\*\*Primary:\*\* "Compliant. Sorted."

\*\*Variations by context:\*\*  
\- Hero/homepage: "Your landlord certificates. Sorted."  
\- Speed: "Compliant by next week."  
\- Pricing: "Fixed prices. No surprises."  
\- Coverage: "Every certificate. Every property. One provider."  
\- Trust: "Accredited engineers. Real certificates. Fast."  
\- B2C friendly: "Make it your landlord certificate. Not your headache."

\#\#\# Colour palette

| Name | Hex | Usage |  
|---|---|---|  
| Compliance Blue | \`\#0B4F8C\` | Primary — logo, headlines, buttons, navigation |  
| Action Green | \`\#16A34A\` | Success states, "compliant" indicators, secondary CTAs |  
| Charcoal | \`\#1F2937\` | Body text, headings |  
| Soft Grey | \`\#9CA3AF\` | Secondary text, dividers, placeholders |  
| Warm White | \`\#FAFAF7\` | Backgrounds (preferred over pure white) |  
| Pure White | \`\#FFFFFF\` | Cards, inputs, contrast areas |  
| Alert Amber | \`\#F59E0B\` | Urgency only — deadline warnings |

\*\*Banned: red of any kind.\*\* Landlords are anxious about compliance; red amplifies fear, not soothes.

\#\#\# Typography

\*\*Inter\*\* (Google Fonts, free):  
\- H1: Bold 700, 48–64px desktop / 32–40px mobile  
\- H2: Semi-bold 600, 32–40px / 24–28px  
\- H3: Semi-bold 600, 24px / 20px  
\- Body: Regular 400, 16–18px  
\- Buttons: Medium 500, 16px  
\- Numbers/prices: Bold 700

\#\#\# Voice principles

We sound like \*\*a knowledgeable, no-nonsense friend who happens to be qualified.\*\* Not a lawyer. Not a corporate vendor. Not a cheeky-chappie cowboy.

\*\*Use:\*\*  
your certificate · landlord · property owner · compliant · compliance · same-week · fast turnaround · accredited · NICEIC · Gas Safe · fixed price · no surprises · book now · sorted · simple · plain English

\*\*Avoid:\*\*  
world-class · best-in-class · leading provider · cowboy · rip-off · cheap · synergy · leverage · stakeholders · guys · chaps · "we hereby" · "kindly note"

\---

\#\# 3\. TECH STACK

| Layer | Tool |  
|---|---|  
| Framework | Next.js 15 (App Router) |  
| Language | TypeScript |  
| Styling | Tailwind CSS |  
| UI components | shadcn/ui |  
| Database | Supabase (PostgreSQL) |  
| Auth | Supabase Auth |  
| Payments | Stripe Checkout |  
| Email | Resend \+ React Email |  
| SMS | Twilio |  
| Background jobs | Inngest or Vercel Cron |  
| Reviews | Trustpilot API |  
| Hosting | Vercel |  
| Analytics | GA4 \+ Meta Pixel \+ Posthog \+ Vercel Analytics |  
| Error monitoring | Sentry |  
| Forms (B2B) | Custom forms → Supabase \+ Airtable (via webhook) |  
| Internal CRM (B2B leads) | Airtable (synced from website forms) |

\#\#\# Code conventions

\- TypeScript everywhere, no \`any\` types  
\- Server components by default, client components only when interactivity needed  
\- Tailwind for styling, shadcn/ui for component primitives  
\- Semantic HTML5 (header, nav, main, section, article, footer)  
\- Mobile-first responsive design  
\- Accessibility: WCAG AA minimum  
\- All images use \`next/image\` with proper alt text  
\- All links use \`next/link\` for client-side navigation  
\- API routes in \`/app/api/\` with proper TypeScript types  
\- Environment variables in \`.env.local\`, never committed

\---

\#\# 4\. COMPLETE SITE ARCHITECTURE

\`\`\`  
/                                  Homepage  
/eicr                              EICR service page (priority SEO target)  
/eicr-cost                         "EICR cost" landing page (1,600 vol KW)  
/eicr-london                       "EICR London" landing page (880 vol KW)  
/gas-safety-certificate            Gas Safety service page  
/gas-safety-certificate-cost       "Gas safety certificate cost" landing  
/epc                               EPC service page  
/epc-cost                          "EPC cost" landing page  
/fire-risk-assessment              Fire Risk Assessment service page  
/pat-testing                       PAT testing service page  
/landlord-certificates-bundle      Multi-cert bundle service page

/landlord-certificates             Pillar SEO page (cluster hub)  
/landlord-electrical-safety-certificate   Long-tail SEO page (1,600 vol)  
/landlord-gas-safety-certificate          Long-tail SEO page (1,900 vol)

/book                              Booking flow entry  
/pricing                           All services with transparent prices  
/how-it-works                      3-step explanation  
/coverage-areas                    Areas/boroughs covered

/letting-agents                    B2B-lite landing page (25% audience)

/about                             Brand story, accreditations, team  
/reviews                           Trustpilot embed \+ featured testimonials  
/faq                               Top 30 questions, schema-marked-up  
/blog                              Content hub (SEO foundation)  
/blog/\[slug\]                       Individual blog post template

/account                           Customer account (logged in)  
/account/bookings                  Customer's booking history  
/account/certificates              Customer's certificate library  
/account/renewals                  Upcoming renewals

/admin                             Admin dashboard (protected)  
/admin/bookings                    All bookings management  
/admin/customers                   Customer database  
/admin/engineers                   Engineer roster \+ scheduling  
/admin/certificates                Certificate library  
/admin/reports                     Revenue \+ ops reporting

/engineer                          Engineer mobile dashboard (protected)

/contact  
/privacy  
/terms  
/cookies

\# Location pages (add over months 3–6):  
/eicr-croydon  
/eicr-hackney  
/eicr-wandsworth  
/eicr-camden  
/eicr-islington  
... (one per borough)  
\`\`\`

\---

\#\# 5\. SEO KEYWORD STRATEGY

\#\#\# Primary keyword clusters with volume

| Cluster | Combined Volume | Strategy |  
|---|---|---|  
| Landlord certificate(s) | \~13,500/mo | Captured through service pages \+ brand mentions |  
| EICR | \~18,100/mo | EICR service page \+ cost \+ London variants |  
| Gas Safety Certificate | \~8,100/mo | Gas safety service page \+ cost variants |  
| EPC | \~12,100/mo (EPC certificate) | EPC service page \+ cost \+ checker variants |  
| Compliance Certificate | \~3,000/mo | Cluster covered by service umbrella |  
| Fire Risk Assessment | \~2,200/mo | Dedicated service page |

\#\#\# High-priority exact-match keywords (build pages around these)

| Keyword | Volume | KD | Target Page |  
|---|---|---|---|  
| eicr certificate | 14,800 | mid | \`/eicr\` |  
| eicr | 18,100 | high | \`/eicr\` |  
| gas safety certificate | 8,100 | 53 | \`/gas-safety-certificate\` |  
| electrical safety certificate | 3,600 | 32 | \`/eicr\` (covers both) |  
| landlord certificates | 2,400 | 40 | \`/landlord-certificates\` (pillar) |  
| eicr report | 2,400 | mid | \`/eicr\` |  
| eicr cost | 1,600 | low | \`/eicr-cost\` |  
| landlord gas safety certificate | 1,900 | 45 | \`/landlord-gas-safety-certificate\` |  
| landlord electrical safety certificate | 1,600 | 28 | \`/landlord-electrical-safety-certificate\` |  
| gas safety certificate cost | 1,600 | low | \`/gas-safety-certificate-cost\` |  
| epc cost | 2,900 | mid | \`/epc-cost\` |  
| eicr london | 880 | mid | \`/eicr-london\` |  
| landlord certificate | 720 | 20 | \`/landlord-certificates\` |  
| certificate of compliance | 880 | 20 | \`/landlord-certificates\` |  
| pat test certificate | 1,900 | low | \`/pat-testing\` |

\#\#\# Brand name as keyword

\- Every page should naturally include "My Landlord Certificate" at least 2–3 times in body content (not just headers/signatures)  
\- This trains Google's entity recognition that we're a distinct brand offering these certificates  
\- Over 12–18 months, this compounds into branded search traffic

\#\#\# Schema markup required on every page

\- \`Organization\` schema in root layout  
\- \`LocalBusiness\` schema on homepage \+ contact page  
\- \`Service\` schema on each service page  
\- \`FAQPage\` schema on FAQ section of each service page  
\- \`Review\`/\`AggregateRating\` schema on pages with reviews  
\- \`BreadcrumbList\` schema on all non-homepage pages  
\- \`Product\` \+ \`Offer\` schema with price on service pages (improves Google Shopping-style results)

\---

\#\# 6\. KEYWORD-RICH CONTENT BRIEFS FOR EVERY PAGE

\*This is the critical section for Claude Code. Each page brief includes: H1, target keywords, content structure, internal links, and word count targets.\*

\---

\#\#\# PAGE: Homepage (\`/\`)

\*\*H1:\*\* Your landlord certificates. Sorted.  
\*\*H2 examples:\*\* "Every certificate every UK landlord needs"; "Why landlords choose My Landlord Certificate"

\*\*Target keywords:\*\* landlord certificate, landlord certificates, property compliance certificates, UK landlord compliance

\*\*Word count:\*\* 800–1,200 words

\*\*Required sections:\*\*  
1\. \*\*Hero:\*\* H1 \+ subheading mentioning EICR, Gas Safety, EPC. Primary CTA "Book your certificate". Trust strip: NICEIC \+ Gas Safe \+ Trustpilot.  
2\. \*\*Services grid:\*\* 6 service cards, each with price and "Learn more" link to the service page  
3\. \*\*How it works:\*\* 3 steps (Book online → Engineer visits → Certificate emailed)  
4\. \*\*Why landlords trust us:\*\* 4 benefit cards (Fixed pricing, Accredited engineers, Same-week appointments, Digital certs within 24 hours)  
5\. \*\*Trustpilot reviews:\*\* 3 featured \+ "see all reviews" link  
6\. \*\*Letting agents teaser:\*\* Brief section linking to \`/letting-agents\`  
7\. \*\*FAQ preview:\*\* 5 most common questions, link to full FAQ  
8\. \*\*Final CTA:\*\* Big primary button

\*\*Internal links required:\*\* Every service page, /pricing, /how-it-works, /reviews, /faq, /letting-agents, /about

\*\*Schema:\*\* Organization, LocalBusiness, AggregateRating, BreadcrumbList

\*\*Keyword-rich body copy must include phrases:\*\*  
"UK landlord", "your landlord certificate", "property compliance", "EICR", "Gas Safety Certificate", "EPC", "Fire Risk Assessment", "PAT testing", "NICEIC approved", "Gas Safe registered", "same-week appointments", "fixed pricing", "rental property"

\---

\#\#\# PAGE: EICR (\`/eicr\`)

\*\*H1:\*\* EICR Certificate — Fixed £99 — Same-Week Appointments  
\*\*Meta title:\*\* "EICR Certificate from £99 | NICEIC Approved | My Landlord Certificate"  
\*\*Meta description:\*\* "Book your EICR certificate online from £99. NICEIC-approved engineers. Same-week appointments across London. Digital certificate emailed within 24 hours. Fixed pricing, no surprises."

\*\*Target keywords:\*\*  
\- Primary: eicr, eicr certificate, electrical installation condition report  
\- Secondary: eicr cost, eicr report, landlord eicr, eicr for rental property, eicr landlord certificate  
\- Long-tail: how much does an eicr cost, what is an eicr, eicr near me, electrical safety certificate landlord, residential eicr

\*\*Word count:\*\* 1,500–2,000 words (long-form for SEO)

\*\*Required sections:\*\*

1\. \*\*Above-the-fold hero\*\*  
   \- H1 with "EICR Certificate" \+ price \+ speed  
   \- Subhead mentioning NICEIC \+ digital within 24 hours delivery  
   \- Massive primary CTA "Book my EICR — £99"  
   \- Trust strip: NICEIC logo \+ Trustpilot 4.8★ \+ "1,000+ EICRs completed"  
   \- Mobile: sticky CTA bottom-of-screen

2\. \*\*What is an EICR? (Plain English explainer)\*\*  
   \- H2: "What is an EICR?"  
   \- 200–300 words explaining EICR \= Electrical Installation Condition Report  
   \- Why every UK rental property needs one  
   \- Difference between satisfactory/unsatisfactory results  
   \- Use phrase "your EICR" and "your landlord certificate" naturally

3\. \*\*What's included for £99\*\*  
   \- H2: "What you get for £99 — no hidden costs"  
   \- Bullet list: full installation inspection by NICEIC-registered engineer, test of fuse box / sockets / wiring / switches, digital certificate issued within 24 hours, minor remedial advice notes, valid for 5 years  
   \- Reinforce "fixed price" and "no surprises"

4\. \*\*Legal context section\*\*  
   \- H2: "Is an EICR a legal requirement?"  
   \- Required for all UK rental properties since 2020  
   \- Must be renewed every 5 years  
   \- Maximum fine for non-compliance: £30,000  
   \- Section 21 cannot be served without valid EICR  
   \- Include keyword phrase "landlord electrical safety certificate" naturally

5\. \*\*How it works (EICR-specific)\*\*  
   \- H2: "How your EICR booking works"  
   \- 3 steps: Book online (2 mins) → NICEIC engineer arrives → Certificate emailed  
   \- Each step expanded with EICR specifics

6\. \*\*EICR cost / pricing transparency\*\*  
   \- H2: "How much does an EICR cost?"  
   \- £99 fixed for residential up to 4 bedrooms  
   \- £150 for 5+ bedrooms or HMOs  
   \- £200 for commercial/mixed-use  
   \- Use phrase "eicr cost" multiple times naturally

7\. \*\*What happens if your EICR fails?\*\*  
   \- H2: "What if my property fails the EICR?"  
   \- Calm, informative — explain remedial work process  
   \- Most common failures (fuse box, earth bonding, etc.)  
   \- We can quote for remedial work, customer free to use another contractor

8\. \*\*Coverage area\*\*  
   \- H2: "EICR appointments across London and the South East"  
   \- List boroughs covered  
   \- Link to coverage areas page

9\. \*\*EICR-specific FAQ (10–12 questions, schema marked)\*\*  
   \- "How long does an EICR take?"  
   \- "Do I need to be present for the EICR?"  
   \- "How quickly will I get my EICR certificate?"  
   \- "Can you do EICR and Gas Safety in the same visit?"  
   \- "What's the difference between EICR and PAT testing?"  
   \- "How often do I need a new EICR?"  
   \- "Is the EICR engineer NICEIC registered?"  
   \- "What happens if I don't have a valid EICR?"  
   \- "Can I get an EICR for a commercial property?"  
   \- "Do you serve \[my area\]?"

10\. \*\*EICR-specific reviews\*\*  
    \- 3 featured Trustpilot reviews mentioning EICR specifically

11\. \*\*Final CTA\*\*  
    \- "Ready to book your EICR?"  
    \- Primary button \+ phone fallback

\*\*Internal links required:\*\* /gas-safety-certificate (cross-sell), /landlord-certificates-bundle, /eicr-cost, /eicr-london, /coverage-areas, /faq, /reviews

\*\*Schema:\*\* Service, Product, Offer, FAQPage, BreadcrumbList, AggregateRating

\*\*Must include phrases (naturally, not stuffed):\*\*  
"EICR", "EICR certificate", "electrical installation condition report", "EICR cost", "EICR report", "landlord EICR", "5-year EICR", "NICEIC EICR", "EICR engineer", "your EICR", "my landlord certificate" (brand mention 2–3 times)

\---

\#\#\# PAGE: Gas Safety Certificate (\`/gas-safety-certificate\`)

\*\*H1:\*\* Gas Safety Certificate (CP12) — Fixed £55 — Same-Week Appointments  
\*\*Meta title:\*\* "Gas Safety Certificate (CP12) from £55 | Gas Safe Registered | My Landlord Certificate"  
\*\*Meta description:\*\* "Book your Landlord Gas Safety Certificate (CP12) online from £55. Gas Safe registered engineers. Annual renewal. Digital certificate emailed within 24 hours."

\*\*Target keywords:\*\*  
\- Primary: gas safety certificate, gas safety certificate cost, landlord gas safety certificate, cp12  
\- Secondary: gas safe certificate, landlord gas certificate, annual gas safety check  
\- Long-tail: how much does a gas safety certificate cost, gas safety certificate for rental property, gas safety inspection landlord

\*\*Word count:\*\* 1,400–1,800 words

\*\*Required sections:\*\* Same structure as EICR page, adapted for Gas Safety:

1\. Hero with H1, price, speed, Gas Safe accreditation badge  
2\. What is a Gas Safety Certificate / CP12? (plain English)  
3\. What's included for £55 (gas appliance check, flue check, tightness test, CP12 certificate)  
4\. Legal context: annual renewal, all gas appliances checked, Gas Safe registered engineer required, certificate must be issued within 28 days  
5\. How it works  
6\. Pricing transparency: £55 for up to 3 appliances, £75 for 4–6 appliances  
7\. What happens if a gas appliance fails?  
8\. Coverage area  
9\. Gas Safety FAQ (10+ questions including "is CP12 the same as gas safety?")  
10\. Reviews  
11\. Final CTA

\*\*Internal links required:\*\* /eicr (cross-sell), /landlord-certificates-bundle, /gas-safety-certificate-cost, /coverage-areas

\*\*Schema:\*\* Service, Product, Offer, FAQPage, BreadcrumbList

\*\*Must include phrases:\*\*  
"gas safety certificate", "CP12", "landlord gas safety certificate", "Gas Safe registered", "annual renewal", "gas appliance check", "rental property gas safety", "your gas safety certificate", "my landlord certificate"

\---

\#\#\# PAGE: EPC (\`/epc\`)

\*\*H1:\*\* EPC Certificate — Fixed £75 — Same-Week Appointments  
\*\*Meta title:\*\* "EPC Certificate from £75 | Energy Performance Certificate | My Landlord Certificate"  
\*\*Meta description:\*\* "Book your EPC certificate online from £75. Accredited DEA assessors. Valid for 10 years. Digital certificate within 24 hours. Required for sale and rental properties."

\*\*Target keywords:\*\*  
\- Primary: epc, epc certificate, energy performance certificate  
\- Secondary: epc cost, epc for landlord, epc rental property, epc check  
\- Long-tail: how much does an epc cost, epc certificate for rental property, do i need an epc for selling

\*\*Word count:\*\* 1,300–1,700 words

\*\*Required sections:\*\*  
1\. Hero with H1, price, accreditation badge  
2\. What is an EPC? (plain English)  
3\. What's included for £75  
4\. Legal context: valid 10 years, minimum E rating to let (rising to D in 2028), required for sales and rentals  
5\. How it works  
6\. Pricing transparency: £75 up to 3 bedrooms, £95 4+ bedrooms, £120 commercial  
7\. EPC ratings explained (A–G scale, what each means)  
8\. How to improve your EPC rating (link to blog)  
9\. Coverage area  
10\. EPC FAQ  
11\. Reviews  
12\. Final CTA

\*\*Internal links required:\*\* /eicr, /gas-safety-certificate, /epc-cost, /landlord-certificates-bundle

\*\*Schema:\*\* Service, Product, Offer, FAQPage, BreadcrumbList

\*\*Must include phrases:\*\*  
"EPC", "EPC certificate", "energy performance certificate", "EPC cost", "EPC rating", "DEA assessor", "rental property EPC", "MEES regulations", "your EPC", "my landlord certificate"

\---

\#\#\# PAGE: Fire Risk Assessment (\`/fire-risk-assessment\`)

\*\*H1:\*\* Fire Risk Assessment — Fixed £150 — NEBOSH Qualified Assessors  
\*\*Meta title:\*\* "Fire Risk Assessment for Landlords from £150 | My Landlord Certificate"  
\*\*Meta description:\*\* "Book a Fire Risk Assessment for your HMO or rental property from £150. NEBOSH-qualified assessors. Same-week appointments. Required by the Regulatory Reform (Fire Safety) Order."

\*\*Target keywords:\*\* fire risk assessment, fire risk assessment cost, fire safety certificate, hmo fire risk assessment, landlord fire risk assessment

\*\*Word count:\*\* 1,200–1,500 words

\*\*Required sections:\*\*  
1\. Hero with H1, price, NEBOSH badge  
2\. What is a Fire Risk Assessment?  
3\. What's included for £150  
4\. Legal context: Regulatory Reform (Fire Safety) Order 2005, HMOs and larger flats required, post-Grenfell tightening, Building Safety Act 2022  
5\. How it works  
6\. Pricing: £150 single-occupancy flat, £250 HMO up to 5 bedrooms, custom quote for larger properties  
7\. Common fire risk findings  
8\. Coverage area  
9\. FRA FAQ  
10\. Reviews  
11\. CTA

\*\*Internal links:\*\* /landlord-certificates-bundle, /coverage-areas

\*\*Must include phrases:\*\*  
"fire risk assessment", "FRA", "fire safety certificate", "HMO fire risk assessment", "NEBOSH qualified", "Regulatory Reform Order", "Building Safety Act", "landlord fire safety", "my landlord certificate"

\---

\#\#\# PAGE: PAT Testing (\`/pat-testing\`)

\*\*H1:\*\* PAT Testing — Fixed £45 — Digital Certificate Within 24 Hours  
\*\*Meta title:\*\* "PAT Testing for Landlords from £45 | Portable Appliance Test | My Landlord Certificate"  
\*\*Meta description:\*\* "Book PAT testing for your furnished rental property from £45. Qualified engineers. Digital certificate within 24 hours. Required for furnished lets and HMOs."

\*\*Target keywords:\*\* pat testing, pat test certificate, portable appliance testing, landlord pat testing

\*\*Word count:\*\* 1,000–1,300 words

\*\*Required sections:\*\* Standard structure adapted for PAT testing. Highlight that PAT is required for furnished lets and HMOs.

\*\*Must include phrases:\*\*  
"PAT testing", "portable appliance test", "PAT test certificate", "furnished rental", "appliance safety", "landlord PAT testing", "my landlord certificate"

\---

\#\#\# PAGE: Landlord Certificates Bundle (\`/landlord-certificates-bundle\`)

\*\*H1:\*\* All Your Landlord Certificates — Bundled & Discounted  
\*\*Meta title:\*\* "Landlord Certificate Bundle | Save 15% on EICR \+ Gas \+ EPC | My Landlord Certificate"

\*\*Target keywords:\*\* landlord certificates bundle, all landlord certificates, landlord compliance package, eicr and gas safety certificate

\*\*Word count:\*\* 1,000–1,300 words

\*\*Required sections:\*\*  
1\. Hero: explain the bundle value (one engineer visit where possible, single payment, single digital folder of certificates)  
2\. Bundle options:  
   \- \*\*Essential Bundle:\*\* EICR \+ Gas Safety \= £140 (save £15)  
   \- \*\*Full Compliance:\*\* EICR \+ Gas Safety \+ EPC \= £200 (save £30)  
   \- \*\*HMO Complete:\*\* EICR \+ Gas Safety \+ EPC \+ Fire Risk Assessment \= £400 (save £50)  
3\. Why bundle (one appointment, one supplier, save money)  
4\. How bundling works (we coordinate the visit)  
5\. FAQ on bundles  
6\. Reviews  
7\. CTA

\*\*Must include phrases:\*\*  
"landlord certificates bundle", "all landlord certificates", "EICR and gas safety", "compliance package", "save on landlord certificates", "my landlord certificate"

\---

\#\#\# PAGE: Landlord Certificates (Pillar Page) (\`/landlord-certificates\`)

\*\*Purpose:\*\* This is the SEO pillar page targeting "landlord certificates" (2,400 vol) and "landlord certificate" (720 vol). It's a comprehensive guide that links out to every service page.

\*\*H1:\*\* Every UK Landlord Certificate You Need — Complete Guide

\*\*Meta title:\*\* "UK Landlord Certificates — The Complete Guide | My Landlord Certificate"

\*\*Target keywords:\*\* landlord certificates, landlord certificate, what landlord certificates do i need, uk landlord certificates, all landlord certificates

\*\*Word count:\*\* 2,500–3,500 words (long-form pillar content for SEO authority)

\*\*Required sections:\*\*

1\. \*\*Intro:\*\* "If you're a UK landlord, here's every certificate you legally need in 2026..."  
2\. \*\*The 5 essential landlord certificates\*\* (overview table linking to each service page)  
3\. \*\*EICR — Electrical Installation Condition Report\*\* (300 words, link to /eicr)  
4\. \*\*Gas Safety Certificate / CP12\*\* (300 words, link to /gas-safety-certificate)  
5\. \*\*EPC — Energy Performance Certificate\*\* (300 words, link to /epc)  
6\. \*\*Fire Risk Assessment\*\* (300 words, link to /fire-risk-assessment)  
7\. \*\*PAT Testing\*\* (200 words, link to /pat-testing)  
8\. \*\*Renewal schedule for landlord certificates\*\* (table showing each certificate's renewal frequency)  
9\. \*\*What happens if you don't have valid landlord certificates\*\* (fines, Section 21 invalidation, criminal liability under Renters' Rights Act 2026\)  
10\. \*\*How much do landlord certificates cost?\*\* (table with prices)  
11\. \*\*How to choose a landlord certificate provider\*\* (NICEIC accreditation, Gas Safe, fixed pricing, reviews, speed)  
12\. \*\*Why My Landlord Certificate\*\* (your USPs)  
13\. \*\*Landlord certificates FAQ\*\* (15+ questions, schema marked)  
14\. \*\*Final CTA\*\*

\*\*Internal links required:\*\* Every service page; /pricing; /reviews; /coverage-areas; /faq

\*\*Schema:\*\* Article, FAQPage, BreadcrumbList

\*\*Must include phrases (naturally throughout):\*\*  
"landlord certificate", "landlord certificates", "UK landlord", "rental property compliance", "EICR", "Gas Safety Certificate", "EPC", "Fire Risk Assessment", "PAT testing", "section 21", "Renters' Rights Act", "my landlord certificate"

\---

\#\#\# PAGE: EICR Cost (\`/eicr-cost\`)

\*\*Purpose:\*\* Capture commercial-intent search "eicr cost" (1,600 vol, low KD)

\*\*H1:\*\* How Much Does an EICR Cost in 2026? (Honest Pricing Guide)

\*\*Meta title:\*\* "EICR Cost 2026 — Fixed £99 for UK Landlords | My Landlord Certificate"

\*\*Target keywords:\*\* eicr cost, eicr cost london, how much does an eicr cost, eicr price, landlord eicr cost

\*\*Word count:\*\* 1,200–1,500 words

\*\*Required sections:\*\*  
1\. \*\*Headline answer:\*\* "A standard residential EICR costs £99 fixed with My Landlord Certificate"  
2\. \*\*Price breakdown by property type\*\* (1–4 bed, 5+ bed, HMO, commercial)  
3\. \*\*Why EICR prices vary\*\* (property size, complexity, engineer travel)  
4\. \*\*What you should pay for an EICR\*\* (typical UK price range £100–£300)  
5\. \*\*Warning signs of EICR rip-offs\*\* ("from £X" hidden fees, untrained engineers, unnecessary remedial recommendations)  
6\. \*\*Why our EICR is £99 fixed\*\* (efficiency, scale, no hidden fees)  
7\. \*\*What's included for £99\*\*  
8\. \*\*EICR cost FAQ\*\*  
9\. \*\*CTA: Book your EICR for £99\*\*

\*\*Internal links:\*\* /eicr (main service), /landlord-certificates-bundle

\*\*Must include phrases:\*\*  
"EICR cost", "how much does an EICR cost", "EICR price", "£99 EICR", "fixed price EICR", "London EICR cost", "landlord EICR cost"

\---

\#\#\# PAGE: EICR London (\`/eicr-london\`)

\*\*Purpose:\*\* Capture "eicr london" search (880 vol)

\*\*H1:\*\* EICR London — Fixed £99 — All London Boroughs Covered

\*\*Target keywords:\*\* eicr london, london eicr, eicr in london, eicr near me london

\*\*Word count:\*\* 1,000–1,300 words

\*\*Required sections:\*\* Same structure as \`/eicr\` but with London-specific framing. List every London borough served. Add testimonials from London customers.

\*\*Must include phrases:\*\*  
"EICR London", "London EICR", "London landlord", "EICR \[borough\]" (rotate through Croydon, Hackney, Wandsworth, Camden, Islington, etc.)

\---

\#\#\# PAGE: Pricing (\`/pricing\`)

\*\*H1:\*\* Transparent Pricing — Every Landlord Certificate, Fixed Prices  
\*\*Meta title:\*\* "Landlord Certificate Pricing | Fixed UK Prices | My Landlord Certificate"

\*\*Target keywords:\*\* landlord certificate cost, landlord certificate prices, eicr price, gas safety certificate price

\*\*Word count:\*\* 800–1,200 words

\*\*Required sections:\*\*  
1\. Pricing philosophy (fixed prices, no surprises, no hidden fees)  
2\. Full price table — every service, every variant  
3\. Bundle discounts table  
4\. What's included at each price point  
5\. What's NOT included (remedial work pricing structure)  
6\. Payment terms (pay after job complete)  
7\. FAQ on pricing

\---

\#\#\# PAGE: How It Works (\`/how-it-works\`)

\*\*H1:\*\* How My Landlord Certificate Works — 3 Simple Steps  
\*\*Target keywords:\*\* how to book a landlord certificate, landlord certificate process

\*\*Word count:\*\* 600–1,000 words

\*\*Required sections:\*\*  
1\. Step 1: Book online (2 minutes — show booking flow)  
2\. Step 2: Engineer arrives (same-week, NICEIC/Gas Safe, professional)  
3\. Step 3: Certificate emailed (within 24 hours digital delivery)  
4\. What to expect on the day  
5\. Customer reviews highlighting ease

\---

\#\#\# PAGE: Coverage Areas (\`/coverage-areas\`)

\*\*H1:\*\* Where We Cover — All London Boroughs \+ South East  
\*\*Target keywords:\*\* landlord certificate london, landlord certificate \[borough\]

\*\*Word count:\*\* 800–1,200 words

\*\*Required sections:\*\*  
1\. Map of coverage  
2\. London boroughs list (all 32, each linking to a future location page)  
3\. South East counties served  
4\. "Don't see your area?" CTA

\---

\#\#\# PAGE: Letting Agents (\`/letting-agents\`)

\*\*H1:\*\* Compliance, Simplified — For Letting Agents Managing 10–50 Properties  
\*\*Meta title:\*\* "Letting Agent Compliance Services | Bulk Pricing | My Landlord Certificate"

\*\*Target keywords:\*\* letting agent compliance, portfolio compliance, letting agent landlord certificates, bulk landlord certificates

\*\*Word count:\*\* 1,200–1,500 words

\*\*Tone:\*\* More professional than B2C. Operational. Direct.

\*\*Required sections:\*\*  
1\. Hero: H1 \+ subhead \+ "Request portfolio quote" CTA  
2\. The problem: managing compliance across 10+ properties  
3\. How we work with letting agents (single account manager, bulk pricing, scheduling dashboard, quarterly audit, renewal reminders)  
4\. Pricing model (volume discounts from 10 properties)  
5\. Letting agent testimonials  
6\. Comparison: DIY vs My Landlord Certificate  
7\. Portfolio quote form (agency name, contact, properties, areas)  
8\. Bridge to PropAssure (subtle, for 50+ property portfolios)

\*\*Internal links:\*\* /pricing; PropAssure external link (when live)

\*\*Must include phrases:\*\*  
"letting agent", "letting agency", "portfolio compliance", "property management", "bulk landlord certificates", "managed properties", "tenant compliance", "letting agent compliance"

\---

\#\#\# PAGE: About (\`/about\`)

\*\*H1:\*\* About My Landlord Certificate  
\*\*Target keywords:\*\* my landlord certificate, my landlord certificate reviews, my landlord certificate uk

\*\*Word count:\*\* 800–1,200 words

\*\*Required sections:\*\*  
1\. Brand story  
2\. Why we started this (problem with cowboy contractors, opaque pricing, slow service)  
3\. What makes us different (NICEIC/Gas Safe, fixed pricing, same-week, digital certs)  
4\. Team / engineers (with photos when available)  
5\. Accreditations (NICEIC, Gas Safe Register, NAPIT, NEBOSH, TrustMark)  
6\. Our promise to landlords

\*\*Must include phrases (heavy brand mention):\*\*  
"My Landlord Certificate" (5+ times naturally), "founded by", "our mission", "UK landlord compliance"

\---

\#\#\# PAGE: Reviews (\`/reviews\`)

\*\*H1:\*\* Real Reviews from Real Landlords  
\*\*Target keywords:\*\* my landlord certificate reviews, landlord certificate reviews

\*\*Word count:\*\* 600–900 words

\*\*Required sections:\*\*  
1\. Headline Trustpilot rating \+ count  
2\. Featured reviews (carousel)  
3\. Reviews by service (EICR / Gas / EPC tabs)  
4\. Reviews by area  
5\. "Leave a review" CTA for past customers  
6\. Full Trustpilot widget

\*\*Schema:\*\* Review, AggregateRating

\---

\#\#\# PAGE: FAQ (\`/faq\`)

\*\*H1:\*\* Frequently Asked Questions — UK Landlord Compliance  
\*\*Meta title:\*\* "Landlord Certificate FAQ | UK Compliance Answers | My Landlord Certificate"

\*\*Target keywords:\*\* landlord certificate faq, do i need an eicr, do i need a gas safety certificate, how much is an eicr, how often is an eicr renewed

\*\*Word count:\*\* 2,500–3,500 words (long-form for SEO)

\*\*Required sections:\*\* Categorised FAQs:

\*\*General:\*\*  
\- "What landlord certificates do I need in the UK?"  
\- "How quickly can I get a landlord certificate?"  
\- "How much does a landlord certificate cost?"  
\- "Do you cover \[my area\]?"

\*\*EICR:\*\*  
\- "What is an EICR?"  
\- "How often do I need an EICR?"  
\- "How long does an EICR take?"  
\- "What happens if my EICR fails?"  
\- "Is an EICR a legal requirement?"

\*\*Gas Safety:\*\*  
\- "Is CP12 the same as Gas Safety Certificate?"  
\- "How often is Gas Safety renewed?"  
\- "Who can issue a Gas Safety Certificate?"

\*\*EPC:\*\*  
\- "What is an EPC?"  
\- "What EPC rating do I need to rent out a property?"  
\- "How long is an EPC valid?"

\*\*Fire Risk Assessment:\*\*  
\- "Do I need a Fire Risk Assessment?"  
\- "What's a Fire Safety Certificate?"

\*\*Booking & Payment:\*\*  
\- "Do I need to be present?"  
\- "When do I pay?"  
\- "What if I need to reschedule?"

\*\*Renters' Rights Act 2026:\*\*  
\- "How has compliance changed under Renters' Rights Act?"  
\- "Am I personally liable for compliance breaches?"

\*\*Schema:\*\* FAQPage (every Q\&A marked up — critical for rich results)

\---

\#\#\# PAGE: Blog (\`/blog\`) and individual posts

\*\*Blog hub purpose:\*\* SEO content engine, capturing long-tail informational queries

\*\*Initial 12 blog posts to write (each 1,500–2,500 words):\*\*

1\. "What is an EICR? The Complete UK Landlord Guide \[2026\]"  
2\. "EICR Cost in 2026: What You Should (and Shouldn't) Pay"  
3\. "How Often Do I Need a New EICR? The 5-Year Rule Explained"  
4\. "What Happens If My EICR Fails? A Step-by-Step Guide"  
5\. "Gas Safety Certificates Explained — Plain English for UK Landlords"  
6\. "EPC Ratings Explained: What Every UK Landlord Needs to Know"  
7\. "How to Improve Your EPC Rating Without Breaking the Bank"  
8\. "The Renters' Rights Act 2026: What's Actually Changed for Landlords"  
9\. "Just Inherited a Flat? Every Certificate You Need to Rent It Out"  
10\. "Fire Risk Assessments for HMO Landlords: A Complete Guide"  
11\. "Section 21 in 2026: How Compliance Affects Eviction Rights"  
12\. "Buying-to-Let in 2026: The Pre-Tenancy Compliance Checklist"

Each blog post should:  
\- Have keyword-rich H1 with target keyword  
\- Use 8–12 H2/H3 subheadings with related keywords  
\- Include 2–3 internal links to service pages  
\- Have a CTA box mid-article and at the end ("Need an EICR? Book online from £99")  
\- Include FAQ section with schema markup  
\- Be 1,500+ words (long-form ranks better)  
\- Include date and "last updated" timestamps

\---

\#\#\# PAGES: Location pages (\`/eicr-\[borough\]\`)

\*\*Purpose:\*\* Local SEO for "EICR \[borough\]" type searches

\*\*Template structure for each location page (1,000–1,300 words):\*\*

\*\*H1:\*\* EICR \[Borough\] — Fixed £99 — Same-Week Appointments

\*\*Target keywords:\*\* eicr \[borough\], \[borough\] landlord certificate, landlord certificate \[borough\]

\*\*Required sections:\*\*  
1\. Hero with H1 \+ price \+ speed \+ "We cover all of \[Borough\]"  
2\. Local context (typical \[Borough\] property types — Victorian conversions, ex-council flats, etc.)  
3\. What's included for £99  
4\. How it works  
5\. Coverage within \[Borough\] (postcodes served)  
6\. Local customer reviews (mention \[Borough\] specifically)  
7\. EICR FAQ  
8\. CTA

\*\*Boroughs to build (priority order based on landlord density):\*\*  
Croydon, Hackney, Wandsworth, Camden, Islington, Tower Hamlets, Lambeth, Southwark, Lewisham, Newham, Haringey, Waltham Forest, Redbridge, Barnet, Enfield, Brent, Ealing, Hounslow, Richmond, Kingston, Merton, Sutton, Bromley, Greenwich, Bexley, Havering, Harrow, Hillingdon

\---

\#\# 7\. CONTENT WRITING RULES (FOR EVERY PAGE)

\*\*SEO rules:\*\*  
1\. Target keyword in H1  
2\. Target keyword in first 100 words of body  
3\. Target keyword in meta title (under 60 chars)  
4\. Target keyword in meta description (under 155 chars)  
5\. Variations of target keyword in H2s  
6\. Internal links (3–5 per page minimum) to related service/blog pages  
7\. Outbound links to authoritative sources where relevant (gov.uk, NICEIC, Gas Safe Register, NRLA)  
8\. Image alt text describes image AND includes relevant keyword where natural  
9\. URL slug matches H1 keyword (lowercase, hyphenated)

\*\*Content quality rules:\*\*  
1\. Plain English, no jargon (or jargon explained immediately)  
2\. Short sentences (15–20 words avg), short paragraphs (2–3 sentences)  
3\. Scannable: bullet lists, numbered steps, headings every 200 words  
4\. First-person plural ("we") \+ second-person ("your")  
5\. Specific numbers (£99, 5-year, 30-day) over vague language  
6\. Real customer language from the brand playbook  
7\. Brand name "My Landlord Certificate" mentioned 2–3 times naturally per page  
8\. Every page ends with a clear CTA

\*\*Conversion rules (for service pages especially):\*\*  
1\. Price visible above the fold  
2\. Primary CTA visible above the fold  
3\. Trust signal (accreditation \+ Trustpilot rating) above the fold  
4\. Sticky mobile CTA  
5\. Social proof (review count \+ quotes) in second half of page  
6\. Risk reversal (NICEIC promise, money-back, fixed price) reinforced 2+ times  
7\. Urgency without false scarcity (real "this week's slots" not fake countdowns)

\---

\#\# 8\. CRITICAL TECHNICAL REQUIREMENTS

\#\#\# Performance  
\- LCP \< 2.5s on every page (Google Ads quality score)  
\- CLS \< 0.1  
\- FID \< 100ms  
\- Use \`next/image\` for all images with priority loading on hero images  
\- Use \`next/font\` for Inter font loading  
\- Lazy-load below-fold sections

\#\#\# SEO foundations  
\- Generate \`/sitemap.xml\` automatically from routes  
\- \`/robots.txt\` allowing all crawlers except admin routes  
\- Canonical URLs on every page  
\- Open Graph \+ Twitter Card meta tags  
\- Hreflang tags (en-GB)  
\- JSON-LD schema on every page (per the schema list above)

\#\#\# Accessibility  
\- WCAG 2.1 AA compliance  
\- All images have alt text  
\- All form inputs have labels  
\- Keyboard navigation works throughout  
\- Sufficient colour contrast (Compliance Blue on Warm White passes; check all combos)  
\- ARIA labels on icon-only buttons

\#\#\# Tracking  
\- Google Analytics 4 (with cookie consent)  
\- Meta Pixel  
\- Google Tag Manager (optional, for flexible event tracking)  
\- Posthog (for funnel analysis \+ session recording)  
\- UK GDPR cookie consent banner before any tracking fires

\---

\#\# 9\. HOW TO USE THIS DOCUMENT IN CLAUDE CODE

This document is your single source of truth. Every time you ask Claude Code to build a page, reference this doc:

\*\*Example prompt:\*\*  
\`\`\`  
Build the /eicr service page following the keyword-rich content brief   
in CLAUDE.md section 6 "PAGE: EICR (/eicr)". Use the design system   
we've built, include all required sections, hit the word count target,   
include all required schema markup, and follow every content writing   
rule in section 7\.  
\`\`\`

When building, Claude Code will:  
1\. Use the right H1  
2\. Hit target keywords naturally  
3\. Include all required sections  
4\. Add proper schema markup  
5\. Link to the correct internal pages  
6\. Match brand voice  
7\. Match design system

\---

\#\# 10\. PROJECT STRUCTURE (recommended)

\`\`\`  
my-landlord-certificate/  
├── CLAUDE.md                          \# this file  
├── docs/  
│   ├── brand-playbook.md             \# full brand playbook v4.0  
│   ├── seo-strategy.md               \# extracted SEO section  
│   ├── database-schema.md            \# Supabase schema (build this)  
│   └── prompts-log.md                \# log of useful prompts  
├── public/  
│   ├── images/  
│   ├── favicon.ico  
│   └── logo.svg  
├── src/  
│   ├── app/                          \# Next.js App Router  
│   │   ├── (marketing)/              \# public pages  
│   │   ├── (legal)/                  \# privacy, terms  
│   │   ├── book/                     \# booking flow  
│   │   ├── account/                  \# customer account  
│   │   ├── admin/                    \# admin dashboard  
│   │   ├── engineer/                 \# engineer dashboard  
│   │   ├── api/                      \# API routes  
│   │   └── layout.tsx  
│   ├── components/  
│   │   ├── ui/                       \# shadcn/ui components  
│   │   ├── marketing/                \# landing page components  
│   │   ├── booking/                  \# booking flow components  
│   │   └── admin/                    \# admin components  
│   ├── lib/  
│   │   ├── supabase/  
│   │   ├── stripe/  
│   │   ├── email/  
│   │   └── utils.ts  
│   └── types/  
├── .env.local                        \# secrets (never commit)  
├── .gitignore  
├── next.config.js  
├── tailwind.config.ts  
├── tsconfig.json  
└── package.json  
\`\`\`

\---

\#\# END OF CONTEXT DOC

If anything is unclear, ask. If you're about to build something not covered here, pause and ask for clarification before writing code.

Compliant. Sorted.

\---

\*Document version: 1.0 | Created for Claude Code project | Source: distilled from conversation context covering business model, brand identity, competitor analysis (Semrush data), keyword research, audience definition, and architectural decisions.\*  
