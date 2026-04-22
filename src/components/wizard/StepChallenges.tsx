import { useMemo } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import { CHALLENGES } from '../../data/challenges'
import { USE_CASES } from '../../data/use-cases'
import { CUSTOMER_STORIES } from '../../data/customer-stories'
import { HERO_USE_CASES } from '../../data/hero-use-cases'
import { PRIORITY_KEYWORDS } from '../../data/priority-keywords'
import { isIndustryMatch } from '../../lib/valueStoryGenerator'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

/** Score challenges based on priority text match */
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

/** Count Hero AI evidence for a use case (keyword matching UC title to Hero titles) */
function countHeroEvidence(uc: { id: string; name: string }, industryId: string): number {
  const ucWords = uc.name.toLowerCase().split(/\s+/).filter(w => w.length > 4)
  let count = 0
  for (const hero of HERO_USE_CASES) {
    if (!isIndustryMatch(hero.industry, industryId)) continue
    // Match by title similarity (share 2+ substantive words)
    const heroWords = hero.title.toLowerCase().split(/\s+/).filter(w => w.length > 4)
    const overlap = ucWords.filter(w => heroWords.some(hw => hw.includes(w) || w.includes(hw)))
    if (overlap.length >= 2) count += hero.customers.length
  }
  return count
}

/** Get all evidence names for a UC (from both customer stories and Hero AI) */
function getEvidenceNames(uc: { id: string; name: string; challengeIds: string[] }, industryId: string): string[] {
  const names: string[] = []
  // From customer 1-pagers
  for (const story of CUSTOMER_STORIES) {
    if (!isIndustryMatch(story.industry, industryId)) continue
    if (story.challengeIds.some((cid) => uc.challengeIds.includes(cid))) {
      names.push(story.company)
    }
  }
  // From Hero AI decks
  const ucWords = uc.name.toLowerCase().split(/\s+/).filter(w => w.length > 4)
  for (const hero of HERO_USE_CASES) {
    if (!isIndustryMatch(hero.industry, industryId)) continue
    const heroWords = hero.title.toLowerCase().split(/\s+/).filter(w => w.length > 4)
    const overlap = ucWords.filter(w => heroWords.some(hw => hw.includes(w) || w.includes(hw)))
    if (overlap.length >= 2) {
      for (const c of hero.customers) {
        if (!names.includes(c.name)) names.push(c.name)
      }
    }
  }
  return names
}

export default function StepChallenges({ wizard }: WizardProps) {
  const { data, updateData, prevStep, nextStep, canAdvance } = wizard
  const { industryId, priorities, selectedChallengeIds, selectedUseCaseIds } = data
  // viewFilter removed — all UCs always visible

  const priorityScores = useMemo(() => scoreChallenges(priorities), [priorities])

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
  const challengeKey = selectedChallengeIds.sort().join(',')
  if (challengeKey !== prevChallengesRef.current && rankedUseCases.length > 0) {
    prevChallengesRef.current = challengeKey
    const ids = rankedUseCases.slice(0, 12).map((r) => r.uc.id)
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
  const recommendedIds = new Set(rankedUseCases.slice(0, 12).map((r) => r.uc.id))
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
        {priorityScores.size > 0 && (
          <p className="text-xs text-text-secondary">
            <span className="text-accent">★</span> = Matches strategic priorities
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
                  const ids = rankedUseCases.slice(0, 12).map((r) => r.uc.id)
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
      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-6 py-3 rounded-2xl border border-gray-200 text-text font-medium text-sm hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          disabled={!canAdvance()}
          className="px-6 py-3 rounded-2xl bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all shadow-lg shadow-primary/20
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
