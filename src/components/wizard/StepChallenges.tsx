import { useMemo, useState } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import { CHALLENGES } from '../../data/challenges'
import { USE_CASES } from '../../data/use-cases'
import { CUSTOMER_STORIES } from '../../data/customer-stories'
import { HERO_USE_CASES } from '../../data/hero-use-cases'
import { PRIORITY_KEYWORDS } from '../../data/priority-keywords'
import { isIndustryMatch, FRONTIER_PILLARS, INTELLIGENCE_FOUNDATION, SECURITY_FOUNDATION } from '../../lib/valueStoryGenerator'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

/* ── Discovery Companion ──────────────────────────────── */

const DISCOVERY_THEMES = [
  {
    pillarId: 'enrich',
    name: 'Employee Experience',
    icon: '🧠',
    color: 'bg-violet-50 border-violet-200',
    questions: [
      'How do employees find information and expertise today?',
      'Where are the biggest skill gaps or onboarding bottlenecks?',
      'How much time do knowledge workers spend searching vs. creating?',
    ],
  },
  {
    pillarId: 'reshape',
    name: 'Business Processes',
    icon: '⚙️',
    color: 'bg-blue-50 border-blue-200',
    questions: [
      'Which processes are most manual or error-prone?',
      'Where do bottlenecks slow the business down?',
      'Are there legacy systems causing friction or data silos?',
    ],
  },
  {
    pillarId: 'reinvent',
    name: 'Customer Engagement',
    icon: '🚀',
    color: 'bg-rose-50 border-rose-200',
    questions: [
      'How do they serve customers today — and where is there friction?',
      'What does their competition do better in the customer journey?',
      'Where do they lose customers or miss upsell opportunities?',
    ],
  },
  {
    pillarId: 'bend',
    name: 'Innovation & Speed',
    icon: '💡',
    color: 'bg-amber-50 border-amber-200',
    questions: [
      'How fast can they bring new products or services to market?',
      'What blocks experimentation or rapid prototyping?',
      'Where would they invest if cost and time were no object?',
    ],
  },
  {
    pillarId: 'intelligence',
    name: 'Data & Intelligence',
    icon: '🔮',
    color: 'bg-indigo-50 border-indigo-200',
    questions: [
      'Is their data unified or siloed across systems and teams?',
      'Can leaders get real-time insights or do they rely on stale reports?',
      'What business decisions are made on gut feeling vs. data?',
    ],
  },
  {
    pillarId: 'security',
    name: 'Security & Trust',
    icon: '🛡️',
    color: 'bg-slate-50 border-slate-200',
    questions: [
      'What regulatory pressures or compliance mandates do they face?',
      'How mature is their security posture — Zero Trust adoption?',
      'Any recent data breaches, audit findings, or governance gaps?',
    ],
  },
] as const

/** Score challenges based on free-text match against PRIORITY_KEYWORDS */
function scoreChallenges(priorities: string) {
  const lower = priorities.toLowerCase()
  if (!lower.trim()) return new Map<string, number>()

  const scores = new Map<string, number>()
  for (const pk of PRIORITY_KEYWORDS) {
    let score = 0
    for (const kw of pk.keywords) {
      if (lower.includes(kw.toLowerCase())) score++
    }
    if (score > 0) scores.set(pk.challengeId, score)
  }
  return scores
}

/** Count industry-matching customer stories per use case (from 1-pagers) */
function countStoryEvidence(uc: { challengeIds: string[] }, industryId: string): number {
  let count = 0
  for (const story of CUSTOMER_STORIES) {
    if (!isIndustryMatch(story.industry, industryId)) continue
    if (story.challengeIds.some((cid) => uc.challengeIds.includes(cid))) count++
  }
  return count
}

const HERO_STOP_WORDS = new Set(['using', 'based', 'powered', 'across', 'drive', 'build', 'enable', 'improve', 'teams', 'business', 'company', 'platform', 'solutions', 'tools', 'management', 'planning', 'operations', 'customer', 'process', 'digital', 'intelligence', 'optimize', 'microsoft', 'azure', 'copilot'])

/** Count Hero AI evidence for a use case (keyword matching UC name+desc to Hero title+valueProp) */
function countHeroEvidence(uc: { id: string; name: string; description?: string }, industryId: string): number {
  const ucText = (uc.name + ' ' + (uc.description || '')).toLowerCase()
  const ucWords = ucText.split(/\s+/).filter(w => w.length > 4 && !HERO_STOP_WORDS.has(w))
  let count = 0
  for (const hero of HERO_USE_CASES) {
    if (!isIndustryMatch(hero.industry, industryId)) continue
    const heroText = (hero.title + ' ' + (hero.valueProp || '')).toLowerCase()
    const heroWords = heroText.split(/\s+/).filter(w => w.length > 4 && !HERO_STOP_WORDS.has(w))
    const overlap = ucWords.filter(w => heroWords.some(hw => hw.includes(w) || w.includes(hw)))
    if (overlap.length >= 1) count += hero.customers.length
  }
  return count
}

/** Get all evidence names for a UC (from both customer stories and Hero AI) */
function getEvidenceNames(uc: { id: string; name: string; description?: string; challengeIds: string[] }, industryId: string): string[] {
  const names: string[] = []
  // From customer 1-pagers
  for (const story of CUSTOMER_STORIES) {
    if (!isIndustryMatch(story.industry, industryId)) continue
    if (story.challengeIds.some((cid) => uc.challengeIds.includes(cid))) {
      names.push(story.company)
    }
  }
  // From Hero AI decks
  const ucText = (uc.name + ' ' + (uc.description || '')).toLowerCase()
  const ucWords = ucText.split(/\s+/).filter(w => w.length > 4 && !HERO_STOP_WORDS.has(w))
  for (const hero of HERO_USE_CASES) {
    if (!isIndustryMatch(hero.industry, industryId)) continue
    const heroText = (hero.title + ' ' + (hero.valueProp || '')).toLowerCase()
    const heroWords = heroText.split(/\s+/).filter(w => w.length > 4 && !HERO_STOP_WORDS.has(w))
    const overlap = ucWords.filter(w => heroWords.some(hw => hw.includes(w) || w.includes(hw)))
    if (overlap.length >= 1) {
      for (const c of hero.customers) {
        if (!names.includes(c.name)) names.push(c.name)
      }
    }
  }
  return names
}

export default function StepChallenges({ wizard }: WizardProps) {
  const { data, updateData, prevStep, nextStep, canAdvance } = wizard
  const { industryId, priorities, selectedChallengeIds, selectedUseCaseIds, discoveryNotes } = data
  const [discoveryOpen, setDiscoveryOpen] = useState(true)
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null)

  // Combine priorities text + all discovery notes for scoring
  const allText = useMemo(() => {
    const noteTexts = Object.values(discoveryNotes).filter(Boolean).join(' ')
    return (priorities + ' ' + noteTexts).trim()
  }, [priorities, discoveryNotes])

  const priorityScores = useMemo(() => scoreChallenges(allText), [allText])

  // Also compute which pillar themes have notes → which challenges they suggest
  const discoveryInsights = useMemo(() => {
    const insights: { challengeId: string; reason: string }[] = []
    const allPillars = [...FRONTIER_PILLARS, INTELLIGENCE_FOUNDATION, SECURITY_FOUNDATION]

    for (const theme of DISCOVERY_THEMES) {
      const note = discoveryNotes[theme.pillarId]?.toLowerCase().trim()
      if (!note) continue

      const pillar = allPillars.find(p => p.id === theme.pillarId)
      if (!pillar) continue

      // Find challenges matching keywords regardless of pillar
      for (const challenge of CHALLENGES) {
        if (!challenge.industryIds.includes(industryId)) continue
        // Check if the note text has any keywords for this challenge
        const pk = PRIORITY_KEYWORDS.find(pk => pk.challengeId === challenge.id)
        if (!pk) continue
        const matched = pk.keywords.filter(kw => note.includes(kw.toLowerCase()))
        if (matched.length > 0) {
          insights.push({
            challengeId: challenge.id,
            reason: `Your "${theme.name}" notes mention: ${matched.slice(0, 3).join(', ')}`,
          })
        }
      }
    }
    // Deduplicate by challengeId (keep first match)
    const seen = new Set<string>();
    return insights.filter(i => {
      if (seen.has(i.challengeId)) return false;
      seen.add(i.challengeId);
      return true;
    });
  }, [discoveryNotes, industryId])

  const discoveryCount = Object.values(discoveryNotes).filter(Boolean).length

  const updateNote = (pillarId: string, text: string) => {
    updateData({ discoveryNotes: { ...discoveryNotes, [pillarId]: text } })
  }

  // Only show industry-relevant challenges (hide cross-industry ones to avoid confusion)
  const allChallenges = useMemo(() => {
    const industryRelevant = CHALLENGES.filter((c) => c.industryIds.includes(industryId))
    const byScore = (a: typeof CHALLENGES[0], b: typeof CHALLENGES[0]) =>
      (priorityScores.get(b.id) ?? 0) - (priorityScores.get(a.id) ?? 0)
    return industryRelevant.sort(byScore)
  }, [industryId, priorityScores])

  // Scored & ranked use cases
  const rankedUseCases = useMemo(() => {
    if (selectedChallengeIds.length === 0) return []
    const matchesChallenge = (uc: typeof USE_CASES[0]) =>
      uc.challengeIds.some((cid) => selectedChallengeIds.includes(cid))

    const scored = USE_CASES
      .filter((uc) => matchesChallenge(uc) && uc.industryIds.includes(industryId))
      .map((uc) => {
        const storyCount = countStoryEvidence(uc, industryId)
        const heroCount = countHeroEvidence(uc, industryId)
        const evidenceCount = storyCount + heroCount
        const evidenceNames = evidenceCount > 0 ? getEvidenceNames(uc, industryId) : []
        const challengeOverlap = uc.challengeIds.filter((cid) => selectedChallengeIds.includes(cid)).length
        const sizeMatch = uc.sizeRelevance.includes(data.companySize || 'enterprise')
        // Scoring: challenge match first, then size fit, evidence is just a tiebreaker
        const score =
          (challengeOverlap * 100) +
          (sizeMatch ? 10 : 0) +
          (evidenceCount * 1)
        return { uc, score, isIndustry: true, evidenceCount, evidenceNames }
      })
      .sort((a, b) => b.score - a.score)

    return scored
  }, [industryId, selectedChallengeIds, data.companySize])

  // Auto-select recommended use cases when challenges change
  const prevChallengesRef = useMemo(() => ({ current: '' }), [])
  const challengeKey = [...selectedChallengeIds].sort().join(',')
  if (challengeKey !== prevChallengesRef.current && rankedUseCases.length > 0) {
    prevChallengesRef.current = challengeKey
    const ids = rankedUseCases.slice(0, 6).map((r) => r.uc.id)
    updateData({ selectedUseCaseIds: ids })
  }

  const toggleChallenge = (id: string) => {
    const next = selectedChallengeIds.includes(id)
      ? selectedChallengeIds.filter((cid) => cid !== id)
      : [...selectedChallengeIds, id]
    updateData({ selectedChallengeIds: next })
  }

  const toggleUseCase = (id: string) => {
    const next = selectedUseCaseIds.includes(id)
      ? selectedUseCaseIds.filter((uid) => uid !== id)
      : [...selectedUseCaseIds, id]
    updateData({ selectedUseCaseIds: next })
  }

  // Counts for the header
  const recommendedIds = new Set(rankedUseCases.slice(0, 6).map((r) => r.uc.id))
  const evidenceBackedCount = rankedUseCases.filter((r) => r.evidenceCount > 0).length

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-text">Challenges & Use Cases</h2>
        <p className="text-text-secondary mt-1">
          Select the business challenges this customer faces, then review AI use cases ranked by evidence strength.
        </p>
      </div>

      {/* Discovery Companion */}
      <div className="rounded-[20px] border border-primary/15 bg-primary/[0.02] overflow-hidden">
        <button
          onClick={() => setDiscoveryOpen(!discoveryOpen)}
          aria-expanded={discoveryOpen}
          aria-controls="discovery-panel"
          className="w-full flex items-center justify-between px-5 py-3 hover:bg-primary/[0.03] transition-all"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <span className="text-sm font-semibold text-primary">Discovery Companion</span>
            <span className="text-xs text-text-secondary">
              {discoveryCount > 0
                ? `${discoveryCount} theme${discoveryCount > 1 ? 's' : ''} captured`
                : 'Guided questions to deepen the conversation'
              }
            </span>
          </div>
          <span className="text-text-secondary text-sm">{discoveryOpen ? '▾' : '▸'}</span>
        </button>

        {discoveryOpen && (
          <div id="discovery-panel" className="px-5 pb-5 space-y-3">
            <p className="text-xs text-text-secondary leading-relaxed">
              The Frontier approach: <strong>stay longer, listen more</strong>. Use these prompts during the conversation.
              Notes you capture here will automatically suggest matching challenges below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {DISCOVERY_THEMES.map((theme) => {
                const isExpanded = expandedTheme === theme.pillarId
                const hasNotes = !!discoveryNotes[theme.pillarId]?.trim()
                const matchingInsights = discoveryInsights.filter(i =>
                  CHALLENGES.find(c => c.id === i.challengeId)?.pillarId === theme.pillarId
                )

                return (
                  <div
                    key={theme.pillarId}
                    className={`rounded-xl border transition-all ${theme.color} ${
                      isExpanded ? 'md:col-span-2 ring-1 ring-primary/20' : ''
                    }`}
                  >
                    <button
                      onClick={() => setExpandedTheme(isExpanded ? null : theme.pillarId)}
                      aria-expanded={isExpanded}
                      aria-controls={`discovery-theme-${theme.pillarId}`}
                      className="w-full flex items-center justify-between p-3 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span>{theme.icon}</span>
                        <span className="text-xs font-semibold text-text">{theme.name}</span>
                        {hasNotes && (
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        )}
                      </div>
                      <span className="text-[10px] text-text-secondary">
                        {isExpanded ? '▾' : '▸'}
                      </span>
                    </button>

                    {isExpanded && (
                      <div id={`discovery-theme-${theme.pillarId}`} className="px-3 pb-3 space-y-2">
                        <div className="flex flex-wrap gap-1.5">
                          {theme.questions.map((q, i) => {
                            const isUsed = (discoveryNotes[theme.pillarId] || '').includes(q)
                            return (
                              <button
                                key={i}
                                onClick={() => {
                                  if (isUsed) return
                                  const current = discoveryNotes[theme.pillarId] || ''
                                  const separator = current.trim() ? '\n' : ''
                                  updateNote(theme.pillarId, current + separator + `• ${q} → `)
                                }}
                                className={`text-[11px] text-left px-2.5 py-1.5 rounded-lg border transition-all ${
                                  isUsed
                                    ? 'opacity-50 border-primary/20 bg-primary/5 text-text-secondary cursor-default'
                                    : 'border-gray-200 bg-white text-text hover:bg-primary/5 hover:border-primary/30 cursor-pointer'
                                }`}
                              >
                                {isUsed ? '✓ ' : '+ '}<span className="italic">{q}</span>
                              </button>
                            )
                          })}
                        </div>
                        <textarea
                          value={discoveryNotes[theme.pillarId] || ''}
                          onChange={(e) => updateNote(theme.pillarId, e.target.value)}
                          placeholder="Capture what you hear..."
                          rows={3}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-xs text-text
                                     placeholder:text-text-secondary/40 focus:outline-none focus:ring-1 focus:ring-primary/30
                                     focus:border-primary transition-all resize-none"
                        />
                        {matchingInsights.length > 0 && (
                          <div className="text-[11px] text-primary font-medium space-y-0.5">
                            {matchingInsights.map((ins, i) => (
                              <p key={i}>→ Suggests: <strong>{CHALLENGES.find(c => c.id === ins.challengeId)?.name}</strong></p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Summary of all discovery insights */}
            {discoveryInsights.length > 0 && (
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 space-y-1.5">
                <p className="text-xs font-semibold text-primary">
                  💡 Discovery suggests {discoveryInsights.length} challenge{discoveryInsights.length > 1 ? 's' : ''}:
                </p>
                {discoveryInsights.map((ins, i) => {
                  const ch = CHALLENGES.find(c => c.id === ins.challengeId)
                  const alreadySelected = selectedChallengeIds.includes(ins.challengeId)
                  return (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <div className="text-[11px] text-text min-w-0">
                        <span className="font-medium">{ch?.name}</span>
                        <span className="text-text-secondary ml-1.5">— {ins.reason}</span>
                      </div>
                      {!alreadySelected && (
                        <button
                          onClick={() => toggleChallenge(ins.challengeId)}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-all flex-shrink-0"
                        >
                          + Add
                        </button>
                      )}
                      {alreadySelected && (
                        <span className="text-[10px] text-primary/60 flex-shrink-0">✓ Selected</span>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Challenge pills */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
          Business Challenges
          <span className="ml-2 text-xs font-normal normal-case">
            ({selectedChallengeIds.length} selected)
          </span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {allChallenges.map((challenge) => {
            const isSelected = selectedChallengeIds.includes(challenge.id)
            const matchScore = priorityScores.get(challenge.id) ?? 0
            return (
              <button
                key={challenge.id}
                onClick={() => toggleChallenge(challenge.id)}
                aria-pressed={isSelected}
                title={challenge.description}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-surface border border-gray-200 text-text hover:border-primary/40 hover:bg-primary/5'
                  }
                `}
              >
                {challenge.name}
                {matchScore > 0 && !isSelected && (
                  <span className="ml-1.5 text-xs text-accent">★</span>
                )}
              </button>
            )
          })}
        </div>
        {(priorityScores.size > 0) && (
          <p className="text-xs text-text-secondary">
            <span className="text-accent">★</span> = Matches priorities{discoveryCount > 0 ? ' & discovery notes' : ''}
          </p>
        )}
      </section>

      {/* Use Case Cards — ranked by evidence */}
      {selectedChallengeIds.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                AI Use Cases
                <span className="ml-2 text-xs font-normal normal-case">
                  ({selectedUseCaseIds.length} selected)
                </span>
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                {evidenceBackedCount > 0 && (
                  <span className="text-emerald-600 font-medium">
                    📊 {evidenceBackedCount} with industry evidence
                  </span>
                )}
                {rankedUseCases.length > 0 && ` · ${rankedUseCases.length} total`}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => updateData({ selectedUseCaseIds: [] })}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
              >
                ✕ Clear
              </button>
              <button
                onClick={() => {
                  const ids = rankedUseCases.slice(0, 6).map((r) => r.uc.id)
                  updateData({ selectedUseCaseIds: ids })
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
              >
                ⚡ Recommended
              </button>
              <button
                onClick={() => {
                  const ids = rankedUseCases.map((r) => r.uc.id)
                  updateData({ selectedUseCaseIds: ids })
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
              >
                Select All ({rankedUseCases.length})
              </button>
            </div>
          </div>

          {rankedUseCases.length === 0 ? (
            <p className="text-sm text-text-secondary italic">
              No use cases match this combination. Try selecting different challenges.
            </p>
          ) : (
            <div className="space-y-2">
              {rankedUseCases
                .map((ranked) => {
                const { uc, evidenceCount, evidenceNames } = ranked
                const isSelected = selectedUseCaseIds.includes(uc.id)

                return (
                  <div key={uc.id}>
                    <button
                      onClick={() => toggleUseCase(uc.id)}
                      className={`
                        w-full text-left p-4 rounded-2xl border-2 transition-all
                        ${isSelected
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : evidenceCount > 0
                            ? 'border-emerald-200 bg-emerald-50/30 hover:border-emerald-300'
                            : 'border-gray-100 bg-white hover:border-primary/30'
                        }
                      `}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-semibold text-sm text-text">{uc.name}</p>
                            {recommendedIds.has(uc.id) && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
                                ⚡ Recommended
                              </span>
                            )}
                            {evidenceCount > 0 && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                                📊 {evidenceCount} {evidenceCount === 1 ? 'story' : 'stories'}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                            {uc.description}
                          </p>
                          {evidenceNames.length > 0 && (
                            <p className="text-[11px] text-emerald-700 mt-1.5 font-medium">
                              Evidence: {evidenceNames.slice(0, 3).join(', ')}
                              {evidenceNames.length > 3 ? ` +${evidenceNames.length - 3} more` : ''}
                            </p>
                          )}
                          {uc.evidence.length > 0 && evidenceCount === 0 && (
                            <p className="text-xs text-accent mt-1.5 flex items-center gap-1">
                              <span>📊</span>
                              <span className="italic">{uc.evidence[0]}</span>
                            </p>
                          )}
                        </div>
                        <div className={`
                          w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all
                          ${isSelected ? 'bg-primary border-primary' : 'border-gray-300'}
                        `}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      )}

      {/* Navigation */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4">
        <button
          onClick={prevStep}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-gray-200 text-text font-medium text-sm hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          disabled={!canAdvance()}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all shadow-lg shadow-primary/20
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
