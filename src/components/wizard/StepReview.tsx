import { useMemo } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import { INDUSTRIES } from '../../data/industries'
import { CHALLENGES } from '../../data/challenges'
import { USE_CASES } from '../../data/use-cases'
import { classifyToPillar, FRONTIER_PILLARS, SECURITY_FOUNDATION } from '../../lib/valueStoryGenerator'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

const PILLAR_STYLES: Record<string, { gradient: string; text: string; bg: string; border: string }> = {
  enrich:   { gradient: 'from-amber-500 to-orange-500', text: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' },
  reshape:  { gradient: 'from-emerald-500 to-teal-500', text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  reinvent: { gradient: 'from-blue-500 to-indigo-500', text: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' },
  bend:     { gradient: 'from-violet-500 to-purple-500', text: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-200' },
  security: { gradient: 'from-rose-500 to-red-500', text: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-200' },
}

export default function StepReview({ wizard }: WizardProps) {
  const { data, prevStep, nextStep, goToStep } = wizard
  const { companyName, industryId, companySize, priorities, selectedChallengeIds, selectedUseCaseIds } = data

  const industry = useMemo(() => INDUSTRIES.find((i) => i.id === industryId), [industryId])
  const challenges = useMemo(
    () => CHALLENGES.filter((c) => selectedChallengeIds.includes(c.id)),
    [selectedChallengeIds]
  )
  const useCases = useMemo(
    () => USE_CASES.filter((uc) => selectedUseCaseIds.includes(uc.id)),
    [selectedUseCaseIds]
  )

  // Group use cases under pillars for narrative preview
  const pillarPreview = useMemo(() => {
    const grouped: Record<string, typeof useCases> = {}
    for (const uc of useCases) {
      const pillarId = uc.pillarId ?? classifyToPillar(uc.name + ' ' + uc.description)
      if (!grouped[pillarId]) grouped[pillarId] = []
      grouped[pillarId].push(uc)
    }
    return grouped
  }, [useCases])

  const sizeLabel: Record<string, string> = {
    small: 'Growing org (<500)',
    mid: 'Mid-size (500–2.5K)',
    large: 'Large enterprise (2.5K–10K)',
    enterprise: 'Global enterprise (10K+)',
  }

  const allPillarEntries = [
    ...FRONTIER_PILLARS.map((p) => ({ id: p.id, icon: p.icon, fullName: p.fullName })),
    { id: 'security', icon: SECURITY_FOUNDATION.icon, fullName: 'Security Foundation' },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-text">Story Preview</h2>
        <p className="text-text-secondary mt-1">
          Here's what your Value Story will look like. Edit anything before generating.
        </p>
      </div>

      {/* Narrative Preview Card */}
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-semibold tracking-wider uppercase">
              Intelligence & Trust
            </span>
          </div>
          <h3 className="text-lg font-bold">Frontier Transformation: {companyName || '—'}</h3>
          <p className="text-white/60 text-sm mt-0.5">{industry?.icon} {industry?.name ?? '—'} · {sizeLabel[companySize] ?? '—'}</p>
          <button onClick={() => goToStep(0)} className="text-[11px] text-white/50 hover:text-white/80 mt-2 underline">
            Edit customer profile
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Business Challenges — right after customer name */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold">
                Business Challenges ({challenges.length})
              </p>
              <button onClick={() => goToStep(2)} className="text-[11px] text-primary hover:underline">Edit</button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {challenges.map((c) => (
                <span key={c.id} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-text font-medium whitespace-normal break-words max-w-full">
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar sections preview */}
          {allPillarEntries.map((pillar) => {
            const ucs = pillarPreview[pillar.id] ?? []
            // Also check if any priorities map here
            const priorityItems = priorities
              ? priorities.split(/[;\n]+/).map((p) => p.trim()).filter((p) => p.length > 5 && classifyToPillar(p) === pillar.id)
              : []
            if (ucs.length === 0 && priorityItems.length === 0) return null

            const style = PILLAR_STYLES[pillar.id] ?? PILLAR_STYLES.reshape
            return (
              <div key={pillar.id} className={`p-4 rounded-xl ${style.bg} border ${style.border}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{pillar.icon}</span>
                  <h4 className={`text-sm font-bold ${style.text}`}>{pillar.fullName}</h4>
                  {ucs.length > 0 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/60 text-text-secondary font-medium">
                      {ucs.length} use {ucs.length === 1 ? 'case' : 'cases'}
                    </span>
                  )}
                </div>
                {priorityItems.length > 0 && (
                  <ul className="space-y-1 mb-2">
                    {priorityItems.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${style.gradient}`} />
                        <span className="text-[11px] text-text-secondary leading-snug break-words whitespace-normal flex-1 min-w-0">{p.trim()}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {ucs.length > 0 && (
                  <div className="space-y-2 mt-2">
                    {ucs.map((uc) => (
                      <div key={uc.id} className="flex items-start gap-2 bg-white/50 rounded-lg p-2">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${style.gradient}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-text whitespace-normal break-words">{uc.name}</p>
                          <p className="text-[11px] text-text-secondary leading-snug mt-0.5 break-words whitespace-normal">
                            {uc.description}
                          </p>
                          {uc.microsoftProducts.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {uc.microsoftProducts.map((p) => (
                                <span key={p} className="text-[9px] px-1.5 py-0.5 rounded-full bg-gray-100 text-text-secondary">{p}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Customer Zero — NDA-gated review chapter */}
      <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/30 p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">🔒</span>
          <h3 className="text-sm font-bold text-text">Microsoft Customer Zero</h3>
          {data.ndaConfirmed ? (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">NDA Confirmed</span>
          ) : (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-500 font-semibold">NDA Required</span>
          )}
        </div>
        <p className="text-xs text-text-secondary">
          {data.ndaConfirmed
            ? 'Customer Zero evidence will be included in your Value Story — Microsoft\'s internal AI transformation results from 10 departments.'
            : 'NDA not confirmed. Customer Zero evidence will not be included. You can enable it on the Value Story page.'
          }
        </p>
      </div>

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
          className="px-6 py-3 rounded-2xl bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
        >
          Generate Value Story →
        </button>
      </div>
    </div>
  )
}
