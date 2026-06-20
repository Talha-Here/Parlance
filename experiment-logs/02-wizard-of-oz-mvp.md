# Experiment Log — Sprint 2: Wizard-of-Oz MVP

**Venture:** Parlance  
**Date range:** May 22 – June 10, 2026  
**Experiment type:** Solution validation (fake door / manual MVP)  
**Submitted by:** Team Parlance

---

## Hypothesis

Users who complete one AI conversation rehearsal session will return for a second session within 7 days without prompting.

## Experiment Design

| Element | Detail |
|---------|--------|
| **MVP form** | Shared Claude Project + Google Form feedback (no custom app yet) |
| **Scenarios offered** | Job interview (behavioral), presentation Q&A |
| **Participants** | 12 users from Sprint 1 warm leads |
| **Flow** | Pre-confidence Google Form (4 Likert items) → 10-min Claude conversation → post-confidence form |
| **Success metric** | ≥50% return for session 2 within 7 days |
| **Failure metric** | <30% return → hypothesis rejected |

## Results

| Metric | Result |
|--------|--------|
| Session 1 completions | 12/12 (100%) |
| Session 2 within 7 days | **7/12 (58%)** ✅ |
| Session 3+ within 14 days | 4/12 (33%) |
| Avg session duration | 11.4 minutes |
| Avg pre→post confidence (overall) | +1.8 points (1–10 scale) |

### Session 1 vs Session 2 confidence delta

| Measure | Session 1 avg Δ | Session 2 avg Δ |
|---------|-----------------|-----------------|
| Overall confidence | +1.8 | +2.4 |
| Verbal organization | +1.6 | +2.1 |
| Anxiety (lower = better) | −1.2 | −1.9 |
| Preparedness | +2.0 | +2.6 |

### Dropout reasons (n=5 did not return)

- 2 — "Forgot / busy with finals"
- 1 — "Felt awkward talking to AI"
- 1 — "Wanted video/audio, not text"
- 1 — No response

## AI Leverage

- Claude Project configured with scenario system prompts (same prompts now in Parlance app)
- GPT-4 used to generate 15 follow-up question variants; A/B tested "warm coach" vs "tough interviewer" tone
- **Finding:** Tough interviewer tone had 67% session 2 return vs 50% for warm coach → adopted in MVP

## Key learning

> Users **will** return to AI rehearsal if the first session feels realistic and they see a confidence bump.

The 58% return rate exceeds our 50% threshold. Awkwardness was lower than feared (1/12). Text-only was acceptable for MVP but audio is top feature request (9/12).

## Pivot

- **Add:** Pre/post confidence surveys as core product loop (now in app)
- **Defer:** Audio mode, custom scenarios
- **Build:** Custom web app (this repo) to replace manual Claude links for Sprint 3

## Risk assumptions tested

| Assumption | Result |
|------------|--------|
| Users will practice with AI repeatedly | ✅ 58% week-1 return |
| Transfer to real life occurs | ⚠️ Early signal: 5 users reported "felt more prepared" in real interview within 2 weeks — anecdotal, needs Sprint 3 |

## Rubric self-assessment

| Pillar | Score | Notes |
|--------|-------|-------|
| Learning velocity | 5 | WoZ in 2 weeks; clear build decision |
| Problem significance | 4 | Return rate confirms problem-solution fit emerging |
| AI integration | 5 | AI was the product AND the analysis tool |
| Venture progress | 4 | WoZ → decision to build |
| Responsible impact | 4 | Disclosed as beta; no data retention on Claude free tier |
| Coachability | 5 | Pivoted coaching tone based on A/B data |

## Next experiment

Sprint 3 — 10 users, 2-week access to Parlance web app. Measure session frequency, WoW retention, confidence change.
