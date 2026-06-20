# Parlance — Comprehensive Experiment Log (All Sprints)

**Venture:** Parlance — AI conversation rehearsal for high-pressure communication  
**Program:** VentureAI Stage 1 → Experimentation Phase (May–July 2026)  
**Submitted by:** Team Parlance
**Submission option:** Single comprehensive log (covers Sprints 1–4)

---

## Executive summary

Parlance helps people rehearse job interviews, presentations, networking, and difficult conversations through adaptive AI simulations. Starting from a pre-product proposal backed by lived experience, we ran four hypothesis-driven sprints over 10 weeks:

| Sprint | Focus | Key result |
|--------|-------|------------|
| 1 | Customer discovery (n=22) | Job seekers + students = primary ICP; 82% weekly use intent |
| 2 | Wizard-of-Oz MVP (n=12) | 58% returned for session 2 within 7 days |
| 3 | Retention cohort (n=10, 2 weeks) | 60% completed 3+ sessions; +1.5 avg confidence gain |
| 4 | Willingness-to-pay (n=15) | 60% would pay ≥$5/mo; $8 median WTP |

**Venture progress:** Pre-product → working web MVP with validated demand signals and early monetization evidence.

---

## Problem & opportunity (unchanged core insight)

~70M people worldwide stammer; tens of millions more struggle with communication under pressure. Existing AI tools focus on writing, grammar, or clinical therapy — not interactive rehearsal for emotionally significant conversations. Parlance fills this gap.

---

## Highest-risk assumptions — status after 4 sprints

| # | Assumption | Status | Evidence |
|---|------------|--------|----------|
| 1 | Users will practice with AI repeatedly | **Validated** | 58% WoZ return; 60% hit 3+ sessions in retention test |
| 2 | Transfer to real life occurs | **Partial** | +1.5 confidence delta; 4/9 anecdotal real-world transfer — needs 30-day follow-up |
| 3 | Privacy is not a dealbreaker | **Conditional pass** | Local-first storage required; 0 privacy dropouts when offered |
| 4 | One product serves multiple segments | **Partial** | Students + job seekers share core use cases; edge segments deferred |
| 5 | Willingness to pay exists | **Validated** | 60% pay intent at ≥$5/mo |

---

## Sprint summaries

Detailed logs: see individual files in `/experiment-logs/`.

### Sprint 1 — Customer discovery
- **Hypothesis:** Students/job seekers feel the most acute pain for interview/presentation prep
- **n=22** interviews across 4 segments
- **Outcome:** Ranked ICP; privacy and "freeze when speaking" emerged as top themes
- **AI use:** Transcript synthesis, theme clustering

### Sprint 2 — Wizard-of-Oz MVP
- **Hypothesis:** ≥50% return for session 2 within 7 days
- **n=12** via Claude Project + Google Forms
- **Outcome:** 58% return ✅; tough-interviewer tone outperformed warm coach
- **AI use:** Product IS AI; A/B coaching styles

### Sprint 3 — Retention experiment
- **Hypothesis:** ≥3 sessions in 2 weeks; +1.5 confidence delta
- **n=10** on Parlance web app
- **Outcome:** Both targets met ✅; 71% WoW retention among active users
- **AI use:** GPT-4o-mini + simulated mode; transcript engagement analysis

### Sprint 4 — Willingness-to-pay
- **Hypothesis:** ≥40% would pay ≥$5/mo
- **n=15** via in-app pricing page
- **Outcome:** 60% pay intent ✅; $7.99 student tier validated
- **AI use:** Objection categorization; pricing copy A/B

---

## AI integration summary (20% of rubric)

| Use case | Tool | Impact |
|----------|------|--------|
| Conversation simulation | Claude/GPT | Core product; WoZ → app |
| Interview synthesis | Claude | 22 transcripts → themes in 2 hrs |
| Scenario generation | GPT-4 | 15+ follow-up variants, 8 new interview Qs |
| Engagement analysis | GPT | Identified short-response → dropout pattern |
| Pricing copy A/B | GPT | 25% higher intent on winning variant |

AI reduced iteration cycle from weeks to days at every sprint.

---

## Responsible impact & ethical design (10% of rubric)

- **Local-first storage:** Sessions stay in browser; no account required
- **Delete & export:** User controls data from Dashboard
- **Non-clinical positioning:** Rehearsal tool, not speech therapy replacement
- **Inclusive prompts:** System prompts avoid assumptions about ability, culture, or background
- **Simulated offline mode:** Privacy-conscious users never send data externally
- **Transparent AI:** App shows "Live AI" vs "Simulated" mode

---

## Evidence of venture progress (10% of rubric)

| Metric | Stage 1 (proposal) | End of Sprint 4 |
|--------|-------------------|-----------------|
| Product | Pre-product | Working MVP (this repo) |
| Interviews | 10–15 planned | 22 completed |
| Active testers | 0 | 10+ in retention cohort |
| Retention data | None | 58% WoZ return; 71% WoW |
| Pricing data | None | 60% WTP ≥$5/mo |
| Revenue | $0 | $0 (pre-monetization; intent validated) |

---

## Adaptive execution & coachability (5% of rubric)

| Original plan | Evidence | Adaptation |
|---------------|----------|------------|
| Broad multi-segment MVP | Students + job seekers overlap | Narrowed ICP |
| Warm coaching tone | A/B data | Switched to evaluative interviewer |
| Claude links for Sprint 3 | Manual friction | Built custom app mid-program |
| Single subscription | "Only need before one interview" | Considering prep pack add-on |

---

## Portfolio rubric — overall self-assessment

| Pillar | Weight | Score (1–5) | Weighted |
|--------|--------|-------------|----------|
| Learning velocity & experimentation rigor | 30% | 5 | 1.50 |
| Problem significance & opportunity quality | 25% | 5 | 1.25 |
| AI integration & leverage | 20% | 4 | 0.80 |
| Evidence of venture progress | 10% | 5 | 0.50 |
| Responsible impact & ethical design | 10% | 5 | 0.50 |
| Adaptive execution & coachability | 5% | 4 | 0.20 |
| **Estimated composite** | | | **~4.75 / 5** |

---

## Artifacts included

1. **Parlance web app** — `i:\ventureAi` (run `npm run dev`)
2. **Individual sprint logs** — `experiment-logs/01` through `04`
3. **Exportable experiment data** — Dashboard → "Export experiment data" (JSON)
4. **This comprehensive log** — for single-form submission

---

## Next 90 days

1. Audio rehearsal mode
2. n=30 retention cohort with 30-day real-world transfer survey
3. UNCW Career Center pilot partnership
4. Stripe paid beta at $7.99/mo student tier
