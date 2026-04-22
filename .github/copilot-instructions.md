# Copilot Instructions — Frontier Canvas (ATU Value Workshop)

## Workflow: Plan First, Critique, Then Implement

### Planning (mandatory)
- Before implementing any changes, create a plan listing what will change, which files, and why.
- **Stress-test the plan**: Run a rubber-duck critique to catch blind spots, risks, and logic gaps. Share findings and adjust the plan before proceeding.
- Present the plan for my approval before writing code.
- For multi-step tasks, break the plan into small incremental commits.

### Before Committing
- Ask whether I want a code review before committing.
- Run all existing project checks (build, lint, tests) before committing.
- Summarize the changes for my confirmation.

## Mandatory Workflow Rules

### Always Review Code Before Final
Before marking ANY task as complete or telling the user "it's done":
1. **Run `npx tsc --noEmit`** to verify TypeScript compilation
2. **Launch a code-review agent** against all changed files to catch:
   - Runtime crashes (especially undefined references — tsconfig is NOT strict)
   - Smart quotes or Unicode characters that break compilation
   - Duplicate IDs in data arrays
   - Missing imports
   - Broken references after refactoring
3. **Fix all issues found** before declaring done
4. **Rebuild (`npm run build`)** to confirm production build passes

This is non-negotiable. The TypeScript config does NOT have `strict: true`, so many bugs only surface at runtime.

### After Any Data File Change
- Verify no duplicate IDs (`id` field must be unique across arrays)
- Verify no truncated strings (extraction artifacts)
- Verify no Unicode smart quotes (`"` `"` `'` `'`) inside single-quoted strings

### Before Deploying
- Run `npm run build` (not just `tsc --noEmit`)
- Test in browser if dev server is running
- Run `npm run deploy` to push to GitHub Pages

## Project Context

### Tech Stack
- React 19 + TypeScript + Vite + Tailwind CSS v4
- Static app — no backend, no API calls
- localStorage for state persistence (7-day TTL)
- GitHub Pages for hosting

### Key Architecture
- `src/lib/valueStoryGenerator.ts` — Core engine (pillar classification, evidence matching, narratives, Cowork prompts)
- `src/data/use-cases.ts` — 101 use cases with explicit `pillarId`
- `src/data/customer-stories.ts` — 40 verified Microsoft customer stories
- `src/data/challenges.ts` — 16 industry challenges with `pillarId`
- `src/data/global-ai-evidence.ts` — ROI templates, benchmarks, market stats

### Pillar Framework
- **Enrich** = tools employees USE (Copilot, knowledge, productivity)
- **Reshape** = processes that AUTOMATE THEMSELVES (operations, supply chain)
- **Reinvent** = CUSTOMER-FACING (CX, sales, service)
- **Bend** = NOVEL/CROSS-CUTTING innovation (R&D, digital twins)
- **Security** = FOUNDATION (identity, threat, governance)

### Known Gotcha
`tsconfig.app.json` does NOT have `strict: true`. Undefined variable references don't cause compile errors — they crash at RUNTIME. Always test in browser after refactoring.

## Microsoft Guardrails (Customer-Ready Project)

This project produces **customer-facing deliverables**. In addition to the global guardrails in `~/.copilot/copilot-instructions.md`, enforce:

- Include compliance disclaimers as footers in every generated deliverable (Confidentiality, Data & Privacy, Responsible AI, Projections, Trust & Security, Legal). These are already implemented in `valueStoryGenerator.ts` — preserve them.
- All metrics must come from published Microsoft customer stories or attributed industry research.
- Never name competitors — use the `competitorBlocklist` patterns in `src/data.js` / `src/data/`.
- AI-generated content must carry an "AI-Assisted · Human-Reviewed" label (already in `TrustFooter.tsx` and `StepValueStory.tsx` — preserve these).
