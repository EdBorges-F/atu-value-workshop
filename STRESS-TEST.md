# F.A.S.T. Stress Test — Cynical Executive Review

*Reviewer posture: VP of Commercial Strategy who has killed 14 internal tools in the last 3 years and has zero patience for "innovation theater."*

---

## 1. LOGICAL FAILURES

### Logical Failure #1 — Survivorship Bias Masquerading as Proof

The entire evidence layer — all 56 "hero use cases" — is a **hand-picked highlight reel**. Claims such as "design cycles from weeks to 10 minutes" (attributed to published Microsoft customer stories) and similar outcomes are cherry-picked from Microsoft marketing decks. Where are the failures? Where are the implementations that cost 3x and delivered 0.5x?

You are presenting **survivor outcomes as base rates**. An AE walking into a healthcare system saying "Northwestern cut documentation time by 24%" is committing the same logical sin as showing someone a single investor's exceptional returns and saying "investing is easy." The customer evidence isn't *wrong* — it's *unfalsifiable*, because you systematically exclude the counterexamples.

**The damage**: If even one customer Googles the evidence and finds a contradicting case study, the AE's credibility is destroyed — and with it, the deal.

### Logical Failure #2 — Circular Reasoning: "AI is the Answer, Now Let Me Show You Why"

The tool's logic is: Select industry → see pre-mapped challenges → see pre-mapped AI solutions. The entire decision tree is rigged from the root. There is **no path** through this wizard that concludes "AI is not the right investment for you." The tool is not a diagnostic — it's a brochure generator wearing the costume of an assessment.

This is classic **question-begging**: you assume the conclusion (customer should buy Microsoft AI) and then structure the questions to lead there. The "Strategic Priorities" field? Purely decorative. It doesn't change the use case mapping. The "Company Size" field? Doesn't filter anything either. Whether you're a 200-person manufacturer or a 50,000-employee one, you get the same five use cases.

**The damage**: Sophisticated buyers — the ones spending real money — will see through this in one meeting. You've given AEs a tool that makes them *less* credible with the exact audience that matters most.

### Logical Failure #3 — False Precision in an Uncertain Domain

The main wizard (fast-wizard.html) compounds this with NPV/IRR/payback calculations using Forrester TEI methodology. But the inputs are *guesses*. An AE filling in "employees," "IT budget," and "adoption ramp" is producing spreadsheet-grade precision from cocktail-napkin-grade inputs. Presenting estimated IRR to two decimal places based on a dropdown company size — without qualifying language — risks conveying false precision. Financial projections should be presented as ranges with appropriate caveats.

The lite version dodges this by not calculating ROI at all — but then what exactly is the "business case" it claims to build? It's a narrative with stats from other companies. That's a one-pager, not a business case. You've relabeled a marketing document as a strategic tool.

**The damage**: Finance teams and procurement will shred this. You've armed AEs with a "business case" that can't survive a CFO's first question: "Where did you get these numbers?"

---

## 2. EVIDENTIARY GAPS (Blind Leaps)

### Blind Leap #1 — "Smart Fill Works" Is an Untested Claim

Smart Fill — the Copilot-powered extraction feature — is the headliner of fast-lite. But there is **zero measured accuracy data**. The regex extraction logic matches patterns like `Company: [text]` and `Industry: [text]`. What's the extraction accuracy across real Copilot responses? 95%? 60%? 30%? Nobody knows. And the failure mode is silent: bad data gets populated into fields, the AE doesn't notice, and the value story goes out with the wrong industry or company size.

You are betting the tool's credibility on a string-matching function that has never been validated against a corpus of real Copilot outputs. That's not engineering — that's hope.

### Blind Leap #2 — "AEs Will Use This" Is Assumed, Not Proven

Where is the usage data? Where is the field validation? This tool assumes AEs have the time, motivation, and context to:
1. Open a standalone HTML file
2. Copy a multi-paragraph prompt into Copilot
3. Paste the result back
4. Review extracted fields
5. Click through 3 wizard steps
6. Review a value story
7. Copy or print it

That's a 7-step workflow for a population (AEs) notorious for abandoning tools after one failed attempt. What's the completion rate? What's the time-to-value? What's the adoption curve? There is no telemetry, no analytics, no feedback loop. You are building in the dark.

---

## 3. THE STEEL MAN COUNTER-ARGUMENT

**The strongest opposing view:** This tool is redundant because Microsoft already provides better alternatives, and the market is moving away from seller-push tools toward buyer-pull experiences.

**The argument:**

1. **Copilot itself does this.** The Smart Fill prompt — the tool's centerpiece — is literally a prompt you paste into Copilot. If you already have Copilot, why do you need a middleman HTML file to generate a narrative? A senior AE with a good Copilot prompt library produces better, more tailored output in less time than clicking through a 3-step wizard with 56 pre-canned use cases.

2. **Industry-specific pitch decks already exist.** Microsoft's corporate marketing machine produces industry vertical decks, battle cards, and customer stories at scale. Existing published assets are polished, reviewed, and legal-approved. F.A.S.T. repackages the same data into a less polished, un-reviewed format with no legal approval.

3. **The market is moving to agentic.** F.A.S.T.'s own roadmap acknowledges this — v4.0 is "Agentic Vision" with conversational mode, CRM data pull, dynamic recommendations. That *future* version is the only one that would address current gaps. The current version — a static HTML wizard with hardcoded data — is a v0.5 pretending to be v1.1. By the time the full version is built, Microsoft's own platform teams may have shipped equivalent capabilities natively.

4. **Internal insight tools already exist.** Existing internal customer intelligence and analytics tools pull *real* data. F.A.S.T. pulls nothing. It's a form you fill out yourself and then it gives you back your own inputs wrapped in prose.

**The steel man conclusion:** F.A.S.T. is a well-intentioned workaround for tooling gaps that are being closed by platform investments. It will be orphaned within 12-18 months by official product releases.

---

## 4. THE BUDGET-KILLER FLAW

**The single biggest risk: This tool produces confidently wrong output that damages customer relationships.**

Here's the scenario that kills this project:

1. An AE Smart-Fills a customer. The regex misidentifies the industry (e.g., a fintech gets tagged as "banking" instead of being recognized as a SaaS company).
2. The wrong challenges and use cases populate. The AE, trusting the tool, doesn't catch it.
3. The value story goes to a VP of Digital who immediately sees that the "hero evidence" is from irrelevant companies in the wrong vertical.
4. The VP forwards it internally with the note: "This is what Microsoft sent us. Generic, wrong, and clearly auto-generated."
5. That deal doesn't just stall — it poisons the account relationship.

**The scale of the risk**: This isn't a "one bad email" problem. The tool is designed to be used *at scale* across all of SME&C Corporate Americas. One bad story is a bad meeting. Twenty bad stories is a pattern. A hundred bad stories is a reputation problem.

And the tool has **zero guardrails** against this. No review step. No confidence score on extraction. No flag for "hey, I couldn't identify the industry with high confidence." It populates fields silently and confidently, whether it's right or catastrophically wrong.

**If this goes wrong, the downside isn't "wasted dev time." It's "AEs armed with a tool that makes them look less prepared than if they'd done nothing."**

---

## VERDICT

The project has energy and ambition. The code is clean. The design refresh is polished. None of that matters.

The fundamental question is: **does this tool make AEs more effective, or does it give them a false sense of preparation that actually makes them worse?**

Until there is:
- **Field validation data** (did AEs actually use it? did deals progress?)
- **Accuracy testing** (does Smart Fill work on real inputs?)
- **A differentiation story** (why this over Copilot + existing decks?)
- **Risk mitigation** (confidence scoring, extraction validation, human review checkpoints)

...this is a portfolio risk, not a portfolio asset.

---

*"The most dangerous internal tool is the one everyone loves but nobody measures."*
