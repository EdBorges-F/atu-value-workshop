# Copilot Instructions — Frontier Canvas (ATU Value Workshop)

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
