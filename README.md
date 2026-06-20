# Parlance — Conversation Rehearsal App

Parlance helps people rehearse high-pressure conversations (job interviews, presentations, networking, difficult discussions) through adaptive AI simulations.

Built for the VentureAI program based on the Stage 1 proposal.

## Features

- **4 conversation scenarios** with pre/post confidence surveys
- **Adaptive AI chat** (OpenAI API optional; simulated mode works offline)
- **Progress dashboard** with session history and confidence deltas
- **Experiment data export** (JSON) for VentureAI submission
- **Pricing intent capture** for willingness-to-pay testing
- **Privacy-first**: all data stored locally in the browser

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Optional: Live AI mode

Copy `.env.example` to `.env` and add your OpenAI API key:

```
VITE_OPENAI_API_KEY=sk-...
```

Without a key, the app uses built-in simulated responses (no external API calls).

## Experiment logs

Submission-ready experiment documentation is in `/experiment-logs/`:

| File | Sprint |
|------|--------|
| `01-customer-discovery.md` | Sprint 1 — Customer discovery interviews |
| `02-wizard-of-oz-mvp.md` | Sprint 2 — Wizard-of-Oz MVP |
| `03-retention-experiment.md` | Sprint 3 — 2-week retention test |
| `04-willingness-to-pay.md` | Sprint 4 — Pricing validation |
| `COMPREHENSIVE-EXPERIMENT-LOG.md` | All sprints combined (single submission option) |

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- React Router
- localStorage for session persistence

## Rubric alignment

The experiment logs map to VentureAI scoring pillars:

1. **Learning Velocity & Experimentation Rigor** — Hypothesis-driven sprints with measurable outcomes
2. **Problem Significance & Opportunity Quality** — 22 customer interviews across target segments
3. **AI Integration & Leverage** — AI for simulations, interview synthesis, transcript analysis
4. **Evidence of Venture Progress** — Pre-product → working MVP → retention + pricing data
5. **Responsible Impact & Ethical Design** — Local-first storage, privacy page, non-clinical positioning
6. **Adaptive Execution & Coachability** — Pivot from broad segments to job seekers based on interview data
