# ATU Value Workshop — Project Plan

## Overview
A modern AI Value Story Builder for Microsoft Account Executives in Americas SME&C Corporate. Built from scratch as a React web app, incorporating lessons from the F.A.S.T. v1.x prototype and a rigorous stress test that surfaced 7 critical findings.

**App name**: Frontier Canvas

**Core thesis**: An honest, measured, credibility-first tool beats a brochure generator. The tool makes AEs *more credible* by being transparent about what it knows, what it doesn't, and what the AE should verify.

---

## Tech Stack
| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | React + Vite + TypeScript | Modern, fast builds, type safety, component ecosystem |
| Styling | Tailwind CSS + Frontier design tokens | Utility-first, consistent with Frontier brand |
| Hosting | Azure Static Web Apps (free tier) | HTTPS, global CDN, AAD auth built-in, GitHub CI/CD |
| Auth | Azure AD (Entra ID) | Org-scoped, team-level access via AAD groups |
| CI/CD | GitHub Actions | Auto-deploy on push to `main` |
| API | Azure Functions (serverless) | Telemetry, feedback — added as needed, no server to manage |
| Analytics | Custom events → Azure Table Storage | Lightweight, serverless, no third-party analytics |
| State | React Context + localStorage | Session persistence, resume later |

---

## Architecture
```
┌──────────────────────────────────────────────────────┐
│  Azure Static Web Apps                               │
│                                                      │
│  ┌─────────────────────┐  ┌───────────────────────┐  │
│  │  React SPA (Vite)   │  │  /api (Azure Funcs)   │  │
│  │  • pages/           │  │  • telemetry           │  │
│  │  • components/      │  │  • feedback            │  │
│  │  • data/            │  │  • (future: CRM)       │  │
│  │  • hooks/           │  └───────────────────────┘  │
│  │  • utils/           │                             │
│  └─────────────────────┘                             │
│                                                      │
│  Auth: Azure AD — org-scoped via AAD groups          │
│  CDN: Global edge, HTTPS automatic                   │
└──────────────────────────────────────────────────────┘
         ↑
         GitHub repo → GitHub Actions → auto-deploy
```

---

## Project Structure
```
atu-value-workshop/
├── .github/
│   ├── copilot-instructions.md       # AI coding instructions
│   └── workflows/
│       └── deploy.yml                # Azure SWA deploy
├── api/                              # Azure Functions (serverless)
│   ├── telemetry/index.ts
│   └── feedback/index.ts
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── pages/
│   │   ├── WizardPage.tsx
│   │   ├── AdminPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.tsx
│   │   │   ├── LeftPanel.tsx
│   │   │   └── SplitLayout.tsx
│   │   ├── wizard/
│   │   │   ├── StepCustomer.tsx
│   │   │   ├── StepReadiness.tsx
│   │   │   ├── StepChallenges.tsx
│   │   │   ├── StepReview.tsx
│   │   │   ├── StepValueStory.tsx
│   │   │   └── WizardNav.tsx
│   │   ├── smart-fill/
│   │   │   ├── SmartFillCard.tsx
│   │   │   ├── PromptDisplay.tsx
│   │   │   ├── ExtractionResult.tsx
│   │   │   └── ConfidenceBar.tsx
│   │   ├── industry/
│   │   │   ├── IndustryGrid.tsx
│   │   │   └── IndustryCard.tsx
│   │   ├── challenges/
│   │   │   ├── ChallengeGrid.tsx
│   │   │   ├── ChallengePill.tsx
│   │   │   └── PriorityBadge.tsx
│   │   ├── use-cases/
│   │   │   ├── UseCaseGrid.tsx
│   │   │   ├── UseCaseCard.tsx
│   │   │   ├── SizeRelevanceBadge.tsx
│   │   │   └── EvidenceBadge.tsx
│   │   ├── value-story/
│   │   │   ├── ValueStory.tsx
│   │   │   ├── CustomerProfile.tsx
│   │   │   ├── ChallengesSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── FrontierImperative.tsx
│   │   │   ├── ReadinessAdaptiveSection.tsx
│   │   │   ├── PriorityAlignmentMap.tsx
│   │   │   ├── NextSteps.tsx
│   │   │   └── Disclaimer.tsx
│   │   ├── review/
│   │   │   └── ReviewSummaryCard.tsx
│   │   ├── readiness/
│   │   │   ├── ReadinessQuiz.tsx
│   │   │   └── ReadinessScore.tsx
│   │   ├── export/
│   │   │   ├── CopyButton.tsx
│   │   │   ├── PrintButton.tsx
│   │   │   └── FeedbackPrompt.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Toast.tsx
│   │       ├── Tooltip.tsx
│   │       └── ProgressDots.tsx
│   ├── data/
│   │   ├── industries.ts
│   │   ├── use-cases.ts
│   │   ├── challenges.ts
│   │   ├── challenge-uc-map.ts
│   │   ├── priority-keywords.ts
│   │   ├── readiness-questions.ts
│   │   └── frontier-vision.ts
│   ├── hooks/
│   │   ├── useWizardState.ts
│   │   ├── useSmartFill.ts
│   │   ├── useReadiness.ts
│   │   ├── usePriorityMatching.ts
│   │   ├── useTelemetry.ts
│   │   └── useLocalStorage.ts
│   ├── utils/
│   │   ├── extraction.ts
│   │   ├── confidence.ts
│   │   ├── sizeFilter.ts
│   │   ├── priorityMatcher.ts
│   │   ├── readinessScorer.ts
│   │   ├── valueStoryGenerator.ts
│   │   └── telemetry.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   └── types/
│       └── index.ts
├── staticwebapp.config.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## WIZARD FLOW

```
Step 1: Customer Profile
  ├── Smart Fill (copy Copilot prompt → paste response → extract with confidence)
  ├── Company Name, Industry Grid (12 visual cards), Size, Priorities
  └── AI Readiness Quick Check (4 questions, optional but encouraged)
          ↓
Step 2: Challenges & Use Cases
  ├── Challenge pills (priority-matched sorted to top, "📌 Matches" badges)
  ├── Use Case cards (size-filtered, evidence with source tags)
  └── Recommended UCs auto-highlighted by challenge mapping
          ↓
Step 3: Review Checkpoint
  ├── Summary of all selections with confidence markers
  ├── ⚠️ flags on uncertain fields
  └── [← Edit Selections] or [Generate Story →]
          ↓
Step 4: Value Story
  ├── Full narrative (tone adapts by readiness tier)
  ├── Priority Alignment Map (Priority → Challenge → UC chain)
  ├── Solutions with sourced evidence + disclaimer
  ├── Readiness-adaptive Next Steps
  └── Export: Copy to clipboard | Print/PDF | Feedback prompt
```

---

## FEATURES — DETAILED SPEC

### F1. Smart Fill with Confidence Scoring
**What**: AE copies prompt → pastes Copilot response → fields extracted with visible confidence.

**Confidence levels**:
- **High** (✅): Exact labeled match (e.g., `Company: Contoso Manufacturing`)
- **Medium** (⚠️): Heuristic/fuzzy (industry inferred from body text, not explicit label)
- **Low** (❓): No match, fallback, or very uncertain

**UI**:
- Confidence Summary Bar: "4/5 fields extracted · 1 needs review ⚠️"
- Low-confidence fields: amber border + pulsing "verify" icon
- If ANY field is Low → Next button becomes "Review & Continue →"

**Why**: Prevents the #1 risk — silent misextraction leading to wrong output at scale.

---

### F2. AI Readiness Quick Check
**What**: Optional 30-second assessment that adapts the entire value story.

**4 questions** (radio):
1. Cloud data platform? → Yes / Partial / No
2. IT resources for AI? → Dedicated team / Shared / None identified
3. Previous AI/ML projects? → Production / Pilot / None
4. Executive sponsorship? → Strong / Emerging / Unknown

**Scoring** (0/1/2 per answer):
- **Ready** (6-8): "Accelerate your AI transformation"
- **Developing** (3-5): "Build your AI foundation"
- **Early Stage** (0-2): "Start your AI journey"

**Impact**:
- Value Story tone adapts per tier
- Next Steps section completely different:
  - Early Stage: Discovery Workshop → Readiness Assessment → Foundation Pilot
  - Developing: Envisioning Session → Proof of Value → Adoption Plan
  - Ready: Executive Briefing → Proof of Value → Scale Roadmap

**Why**: Creates an honest "not ready yet" path — no circular reasoning.

---

### F3. Priority-Driven Challenge Ranking
**What**: Strategic priorities text actually influences challenge ordering.

**How**:
- Match `PRIORITY_KEYWORDS` against priorities text
- Matching challenges: "📌 Matches priorities" badge + sorted to top
- Non-matching: shown but de-emphasized (lighter opacity)
- Value Story includes **Priority Alignment Map**:
  ```
  Priority: "Operational Efficiency"
    → Challenge: Operational Efficiency
      → Use Case: Factory Operations AI (Bridgestone, IPG)
  ```

**Why**: Inputs → visibly different output. Not one-size-fits-all.

---

### F4. Size-Aware Use Case Filtering
**What**: Company size changes which UCs are recommended.

**Data model**: Each UC gets `sizeRelevance: ('small'|'mid'|'large'|'enterprise')[]`

**UI**:
- Matching size: shown normally + "✓ Best fit for your size"
- Non-matching: moved to bottom, grayed, "May require larger scale"

**Why**: 200-person company ≠ 50,000-person enterprise. Different recommendations.

---

### F5. Evidence Provenance & Disclaimers
**What**: Every evidence item sourced. Honest framing throughout.

**Data model per evidence entry**:
```typescript
{
  company: string;
  metric: string;
  source: 'Microsoft Case Study' | 'Forrester TEI' | 'Press Release' | 'Earnings Call' | 'Partner Report';
  year?: number;
  sourceUrl?: string;
}
```

**UI**:
- Source tag: "📊 Harting — Microsoft Case Study (2025)"
- Section title: "AI Solutions with Customer Evidence" (not "Proven")
- Disclaimer footer (in all outputs):
  > "Customer evidence represents published success stories from Microsoft reference accounts. Results vary by organization maturity, scope, and implementation approach."

**Why**: Addresses survivorship bias honestly.

---

### F6. Human Review Checkpoint
**What**: Pre-generation review of all selections.

**Review Summary Card**:
```
📋 Review Before Generating

Company: Contoso Manufacturing         ✅ High
Industry: Manufacturing                ✅ High
Size: Large (2,500 - 10,000)           ⚠️ Medium
Readiness: Developing

Challenges (3): Operational Efficiency, Digital Transformation, Quality
Use Cases (4): Generative Design, Factory Ops AI, Frontline Worker, Product Data

⚠️ 1 field has medium confidence — verify before sharing.

[← Edit Selections]           [Generate Story →]
```

**Why**: 3-second speed bump prevents wrong output reaching customers.

---

### F7. Differentiation & Positioning
**UI elements**:
- Topbar tagline: "From research to Value Story in under 5 minutes"
- "Why this tool?" expandable:
  > Copilot finds the data. This tool structures the story.
  > • Consistent format across your entire team
  > • Pre-vetted evidence by industry with sources
  > • Challenge → solution mapping backed by Frontier methodology
  > • Ready for customer delivery in minutes
- "Powered by Frontier Methodology" footer badge

**Why**: Clear answer to "why not just use Copilot directly?"

---

### F8. Telemetry & Feedback
**Events → Azure Function → Table Storage**:
- Session start, Smart Fill usage, confidence distribution
- Steps completed (funnel tracking with drop-offs)
- Value Story generated (industry, size, UC count)
- Export actions (copy/print)
- Time-to-completion
- Feedback rating + comment

**Admin Dashboard** (`/admin`, restricted to AAD group):
- Sessions per day/week
- Completion funnel
- Most-used industries & UCs
- Smart Fill accuracy (confidence distribution)
- Feedback summary

**Post-export**: Non-blocking "How useful was this?" (1-5 stars + optional comment)

**Why**: "You can't improve what you don't measure."

---

### F9. Session Persistence
- State → localStorage on every change
- Resume prompt on app load ("Continue previous session?")
- Auto-expire after 7 days
- "Start Fresh" always available

---

### F10. Premium Value Story Output
- Hero header: gradient, company name, industry icon, readiness badge
- Customer Profile with priority alignment map
- Challenges as tag cloud with priority-match indicators
- Solutions: indigo left-border blocks, evidence with source tags
- Frontier Imperative: stat circles (56% infra gap, 67% skills gap, 36% agentic), transformation arc (Enrich → Reshape → Reinvent → Bend)
- Readiness-adaptive Next Steps
- Disclaimer footer
- Print: clean PDF, chrome hidden

### F11. Deliverables via Copilot Cowork (Primary Output Path)

**What**: Frontier Canvas is a **gateway to Cowork**. The Value Story is the
context builder — but the final customer-ready materials are ALL created in Cowork.
This drives Cowork adoption among AEs by making it the natural next step.

**Design principle:** Every deliverable has a [📋 Copy to Cowork] button as the
PRIMARY action. The tool builds the perfect prompt — Cowork builds the artifact.

#### Deliverables (all via Cowork)

| # | Deliverable | What Cowork Creates | Format |
|---|-------------|--------------------|---------| 
| 1 | Customer Frontier Deck | 5-7 slide presentation: industry context, Frontier vision, use cases, peer evidence, discussion questions | PowerPoint |
| 2 | Customer Value Brief | 1-page executive summary for customer's champion to circulate internally | Word |
| 3 | Executive Outreach Email | Personalized email to VP/CTO inviting them to a Frontier conversation | Outlook |
| 4 | Meeting Agenda | Structured 45-min agenda: industry forces → listening → use cases → next steps | Word |
| 5 | Follow-up + Roadmap Email | Post-meeting summary with confirmed priorities, roadmap, commitment ask | Outlook |
| 6 | Account Team Alignment | Internal brief to CSA/STU with customer context, readiness, and asks | Teams/Email |

#### How It Works

```
Frontier Canvas                         Copilot Cowork
┌─────────────────────┐                ┌──────────────────────┐
│  Value Story ready   │                │                      │
│                      │  [📋 Copy]     │  AE pastes prompt    │
│  "Your Deliverables" │ ──────────────▶│  Cowork builds:      │
│  • Frontier Deck     │                │  • .pptx deck        │
│  • Value Brief       │                │  • .docx brief       │
│  • Outreach Email    │                │  • Email in Outlook  │
│  • Meeting Agenda    │                │  • Agenda doc        │
│  • Follow-up Email   │                │  Checkpoints for     │
│  • Team Alignment    │                │  AE review & edit    │
│                      │                │                      │
└─────────────────────┘                └──────────────────────┘
```

#### Prompt Design (each pre-filled with customer context)

**Example — Customer Frontier Deck:**
```
Create a 5-7 slide PowerPoint presentation for a customer meeting.

Context:
- Customer: {companyName}
- Industry: {industry} ({industryDescription})
- Company size: {companySize}
- Key priorities: {priorities}
- Challenges identified: {selectedChallenges}
- Recommended AI use cases: {selectedUseCases}
- Peer evidence: {topEvidence}
- AI Readiness tier: {readinessTier}

Structure:
Slide 1: Title — "Frontier Transformation: {industry}" with customer name
Slide 2: Industry context — 3-4 pressures facing {industry} today
Slide 3: Peer evidence — what leading organizations are achieving with AI
Slide 4: Recommended use cases (top 3) with brief description
Slide 5: The Frontier platform — how Microsoft enables this at scale
Slide 6: Suggested next steps (adapted for {readinessTier} readiness)
Slide 7: Discussion questions for the customer

Tone: Consultative, insight-led. Not a product pitch — a business conversation starter.
Use Microsoft branding and professional formatting.
```

#### UI Design

- Section titled "Build Your Deliverables in Cowork"
- 6 cards, each with: icon, title, 1-line description, [📋 Copy Prompt] button
- After copying, show a toast: "Prompt copied — paste into Copilot Cowork to generate"
- Optional: brief HTML preview of what the output will look like (sets expectations)
- Badge: "🚀 Powered by Copilot Cowork" linking to Cowork documentation

#### Why This Architecture

1. **Drives Cowork adoption** — the tool makes Cowork the obvious next step
2. **Better outputs** — Cowork creates real .pptx, .docx, emails with formatting, 
   images, and org branding. Better than any HTML→PDF can achieve.
3. **Personalization** — AE can iterate with Cowork ("make it shorter", 
   "add a slide about security", "change the tone")
4. **Consistency** — the prompt ensures structure, but Cowork adapts to the moment
5. **Measurable** — we can track prompt copies as a proxy for Cowork activation

---

| Token | Value |
|-------|-------|
| Font | Inter (Google Fonts) |
| Primary | `#6366f1` (indigo-500) |
| Secondary | `#8b5cf6` (violet) |
| Accent | `#22d3ee` (cyan) |
| Success | `#10b981` (emerald) |
| Warning | `#f59e0b` (amber) |
| Dark BG | `#0f172a` → `#1e1b4b` gradient |
| Surface | `#ffffff` |
| Text | `#0f172a` |
| Text secondary | `#64748b` |
| Card radius | 20px |
| Button radius | 14px |
| Shadows | Multi-layer, indigo glow on interactive |
| Layout | Split-screen: dark left 38% + white right 62% |

---

## AZURE SWA AUTH

```json
{
  "auth": {
    "identityProviders": {
      "azureActiveDirectory": {
        "registration": {
          "openIdIssuer": "https://login.microsoftonline.com/<TENANT_ID>/v2.0",
          "clientIdSettingName": "AAD_CLIENT_ID",
          "clientSecretSettingName": "AAD_CLIENT_SECRET"
        }
      }
    }
  },
  "routes": [
    { "route": "/admin/*", "allowedRoles": ["admin"] },
    { "route": "/api/*", "allowedRoles": ["authenticated"] },
    { "route": "/*", "allowedRoles": ["authenticated"] }
  ],
  "responseOverrides": {
    "401": { "redirect": "/.auth/login/aad" }
  }
}
```

---

## EXECUTION PHASES

### Phase 1 — Foundation
| ID | Todo | Depends On |
|----|------|------------|
| project-scaffold | Vite + React + TS + Tailwind + ESLint | — |
| azure-swa-setup | Azure SWA resource + GitHub Actions + AAD | — |
| design-tokens | Frontier CSS vars + Tailwind config | project-scaffold |
| layout-components | TopBar, SplitLayout, LeftPanel, ProgressDots | design-tokens |
| data-layer | 56 UCs (+ sizeRelevance + sources), industries, mappings | project-scaffold |
| wizard-navigation | Step router, useWizardState, localStorage persist | layout-components |

### Phase 2 — Core Features
| ID | Todo | Depends On |
|----|------|------------|
| step-customer | Company form, industry grid, size, priorities | wizard-navigation, data-layer |
| smart-fill | Prompt, paste, extraction + confidence scoring | step-customer |
| readiness-quiz | 4-question assessment + tier scoring | step-customer |
| step-challenges | Priority-sorted challenge grid + badges | step-customer, data-layer |
| step-use-cases | Size-filtered UC cards + evidence sources | step-challenges |
| review-checkpoint | Summary card with confidence markers | smart-fill, step-use-cases |

### Phase 3 — Value Story Output
| ID | Todo | Depends On |
|----|------|------------|
| value-story-gen | Readiness-adaptive narrative generator | review-checkpoint |
| priority-alignment | Visual Priority → Challenge → UC map | value-story-gen |
| evidence-provenance | Source tags + disclaimer footer | data-layer |
| export-features | Copy, Print/PDF, feedback prompt | value-story-gen |

### Phase 4 — Trust & Measurement
| ID | Todo | Depends On |
|----|------|------------|
| telemetry-api | Azure Function + Table Storage | azure-swa-setup |
| telemetry-client | useTelemetry hook, event tracking | telemetry-api |
| admin-dashboard | /admin analytics, funnel, feedback | telemetry-client |
| differentiation-ui | "Why this tool?" tooltip, tagline, badge | — |
| feedback-system | Post-export rating + comment | export-features, telemetry-api |

### Phase 5 — Polish & Launch
| ID | Todo | Depends On |
|----|------|------------|
| responsive-design | Mobile/tablet breakpoints | value-story-gen |
| print-optimization | Clean PDF output | value-story-gen |
| accessibility | WCAG 2.1 AA, focus, screen reader | responsive-design |
| error-handling | Fallbacks, offline, error boundaries | value-story-gen |
| documentation | README, setup guide, onboarding | accessibility |

---

## STRESS TEST ANSWER KEY

| Finding | How This App Answers It |
|---------|------------------------|
| **Survivorship bias** | Source + year on every evidence item. Honest disclaimer. "Customer Evidence" not "Proof." |
| **Circular reasoning** | Readiness gate creates "not ready" path. Priorities change ranking. Size changes UCs. |
| **False precision** | No NPV/IRR. Narrative + sourced evidence, not fake financial modeling. |
| **Smart Fill untested** | Confidence scoring with per-field visibility. Telemetry tracks accuracy at scale. |
| **AE adoption assumed** | Full telemetry funnel + feedback loop + admin dashboard with real data. |
| **Copilot redundancy** | Structured repeatability across team. Consistent format. Tool structures what Copilot finds. |
| **Wrong output at scale** | Confidence scoring + Review Checkpoint + verify flags. Never silently wrong. |

---

## DATA — SOURCE FILES
The following data from the F.A.S.T. v1.x project should be migrated into typed TypeScript modules:
- 12 industries with icons
- 56 hero use cases (+ new: sizeRelevance, evidence source, year)
- Board mandates (challenges) per industry
- Challenge → UC mapping
- Priority keywords map
- Frontier Vision stats and transformation arc

Source reference: `frontier-html-app/src/fast-lite.html` (inline JS data section)

---

## WHAT THIS IS NOT
- Not a CRM tool (no Dynamics pull — possible v3.0)
- Not a financial calculator (honest about uncertainty)
- Not a Copilot replacement (structured layer on top of Copilot)
- Not a general pitch generator (AI value stories only)
- Not building anything yet — this is the blueprint
