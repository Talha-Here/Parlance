# Experiment Log — Sprint 1: Customer Discovery

**Venture:** Parlance — AI conversation rehearsal for high-pressure communication  
**Date range:** May 1–21, 2026  
**Experiment type:** Problem validation / segment ranking  
**Submitted by:** Team Parlance

---

## Hypothesis

College students and job seekers experience the most acute pain around high-stakes verbal communication (interviews, presentations), and they would value a dedicated rehearsal tool over general writing/grammar AI.

## Experiment Design

| Element | Detail |
|---------|--------|
| **Method** | Semi-structured 20–30 min interviews (Zoom + in-person) |
| **Sample** | n=22 across 4 segments |
| **Segments** | College students (8), job seekers (7), neurodivergent communicators (4), immigrants/non-native speakers (3) |
| **Recruitment** | UNCW career center, LinkedIn posts, stuttering support communities, personal network |
| **Questions** | Last high-stakes conversation, current prep methods, willingness to practice with AI, privacy concerns, price sensitivity |
| **Success metric** | Rank segments by pain intensity (1–10) and stated intent to use |

## Results

### Pain intensity by segment (self-reported, n=22)

| Segment | Avg pain (1–10) | Would try AI rehearsal | Top use case |
|---------|-----------------|------------------------|--------------|
| Job seekers | **8.4** | 6/7 (86%) | Behavioral interview prep |
| College students | **7.9** | 7/8 (88%) | Internship & class presentations |
| Neurodivergent | 7.2 | 3/4 (75%) | Difficult conversations |
| Immigrants/NNS | 6.8 | 2/3 (67%) | Networking & small talk |

### Key qualitative findings

1. **"I can write answers but freeze when speaking"** — cited by 16/22 participants
2. **Existing tools gap:** Grammarly/ChatGPT help with text; YouTube is passive; therapy apps feel clinical
3. **Privacy concern:** 14/22 asked "who sees my practice sessions?" before expressing interest
4. **Return intent:** 18/22 said they'd use weekly if it felt private and realistic

### Segment ranking (decision)

1. **Job seekers** — highest urgency + clearest ROI (job = income)
2. **College students** — large accessible pool at UNCW, similar use case
3. Neurodivergent / immigrant segments — real need but more varied scenarios required

## AI Leverage

- Used Claude to synthesize 22 interview transcripts into theme clusters in ~2 hours (vs. estimated 8+ hours manual)
- AI-generated follow-up question variants for next interview batch
- Prompt: *"Extract top 5 pain themes, segment differences, and direct quotes supporting each"*

## Pivot / Learning

**Original assumption:** One product serves all segments equally.  
**Evidence:** Job seekers and students share 80% of use cases (interview + presentation). Neurodivergent users need slower pacing options — deferred to v2.  
**Decision:** MVP focuses on **job interview + presentation** scenarios for students/job seekers.

## Risk assumptions tested

| Assumption | Result |
|------------|--------|
| Users will practice with AI | ✅ 82% expressed weekly use intent |
| Privacy is not a dealbreaker | ⚠️ Conditional — local storage / no account strongly preferred |
| One product, multiple segments | ⚠️ Partial — core overlap exists, edge cases differ |

## Rubric self-assessment

| Pillar | Score (1–5) | Notes |
|--------|-------------|-------|
| Learning velocity | 4 | 22 interviews in 3 weeks; clear segment ranking |
| Problem significance | 5 | Strong pain signals; underserved market gap validated |
| AI integration | 4 | AI accelerated synthesis; interviews were human-led |
| Venture progress | 3 | Pre-product → validated ICP |
| Responsible impact | 4 | Anonymized notes; no clinical claims |
| Coachability | 4 | Narrowed ICP based on data, not original breadth |

## Next experiment

Build Wizard-of-Oz MVP (Sprint 2) — scripted AI conversation via ChatGPT/Claude shared links, measure return rate after first session.
