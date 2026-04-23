import { useMemo, useState, useRef, useEffect } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import { generateValueStory, INTELLIGENCE_FOUNDATION, SECURITY_FOUNDATION, type CoworkPrompt, type PillarSection, type MatchedStory, type StakeholderEntry } from '../../lib/valueStoryGenerator'
import { CHALLENGES } from '../../data/challenges'
import { FUNCTION_BENCHMARKS, filterCustomerZero } from '../../data/global-ai-evidence'
import type { CustomerZeroDepartment, CustomerZeroProofPoint } from '../../data/customer-zero'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

// Lazy-loaded CZ data (only fetched when ndaConfirmed)
interface CZData {
  departments: CustomerZeroDepartment[]
  proofPoints: CustomerZeroProofPoint[]
  patterns: readonly { readonly id: string; readonly name: string; readonly level: number; readonly description: string }[]
  recipes: readonly { readonly id: string; readonly name: string; readonly description: string }[]
}

// ─── Function benchmark matching ─────────────────────────────
const STOP_WORDS = new Set(['with', 'from', 'into', 'that', 'this', 'their', 'your', 'based', 'using', 'across', 'powered'])
function matchFunctionBenchmark(ucName: string, ucDescription: string): { area: string; gain: string } | null {
  const text = `${ucName} ${ucDescription}`.toLowerCase()
  const words = text.split(/\s+/).filter(w => w.length > 3 && !STOP_WORDS.has(w))
  let best: typeof FUNCTION_BENCHMARKS[0] | null = null
  let bestScore = 0
  for (const fb of FUNCTION_BENCHMARKS) {
    const areaWords = fb.functionArea.split('-')
    const ucWords = fb.topUseCases.join(' ').toLowerCase().split(/\s+/).filter(w => w.length > 3)
    const areaMatch = areaWords.some(aw => text.includes(aw)) ? 5 : 0
    const ucMatch = ucWords.filter(w => words.some(tw => tw.includes(w) || w.includes(tw))).length
    const score = areaMatch + ucMatch * 3
    if (score > bestScore && score >= 6) {
      bestScore = score
      best = fb
    }
  }
  if (!best) return null
  return { area: best.functionArea.replace(/-/g, ' '), gain: filterCustomerZero(best.productivityGain) }
}

// ─── Pillar accent colors ──────────────────────────────────
const PILLAR_STYLES: Record<string, { gradient: string; accent: string; light: string; border: string }> = {
  enrich:   { gradient: 'from-amber-500 to-orange-500', accent: 'text-amber-700', light: 'bg-amber-50', border: 'border-amber-200' },
  reshape:  { gradient: 'from-emerald-500 to-teal-500', accent: 'text-emerald-700', light: 'bg-emerald-50', border: 'border-emerald-200' },
  reinvent: { gradient: 'from-blue-500 to-indigo-500', accent: 'text-blue-700', light: 'bg-blue-50', border: 'border-blue-200' },
  bend:     { gradient: 'from-violet-500 to-purple-500', accent: 'text-violet-700', light: 'bg-violet-50', border: 'border-violet-200' },
}

// ─── Collapsible wrapper — always renders children for print ─
function Collapsible({ title, icon, summary, defaultOpen = false, children }: {
  title: string; icon?: string; summary?: string; defaultOpen?: boolean; children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="collapsible-section rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-5 py-3.5 text-left bg-gray-50/80 hover:bg-gray-100/80 transition-all print:hidden border-b border-gray-100">
        {icon && <span className="text-base">{icon}</span>}
        <span className="text-sm font-bold text-text uppercase tracking-wider flex-1">{title}</span>
        {summary && !open && <span className="text-[11px] text-text-secondary">{summary}</span>}
        <span className="text-text-secondary text-[10px]">{open ? '▾ collapse' : '▸ expand'}</span>
      </button>
      <div className={`${open ? 'px-5 py-4' : 'hidden'} print:!block print:px-5 print:py-4`}>
        {children}
      </div>
    </div>
  )
}

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handleCopy}
      className="px-4 py-2 rounded-xl text-xs font-semibold transition-all
                 bg-gray-900 text-white hover:bg-gray-800 shadow-md">
      {copied ? '✓ Copied' : label ?? 'Copy'}
    </button>
  )
}

function CoworkCard({ prompt }: { prompt: CoworkPrompt }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{prompt.icon}</span>
          <div>
            <p className="font-semibold text-sm text-text">{prompt.label}</p>
            <p className="text-xs text-text-secondary">{prompt.description}</p>
          </div>
        </div>
        <CopyButton text={prompt.prompt} />
      </div>
      <div className="mt-2">
        <button onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:underline">
          {expanded ? 'Hide prompt' : 'Preview prompt'}
        </button>
        {expanded && (
          <pre className="mt-2 p-3 rounded-xl bg-gray-50 text-xs text-text-secondary whitespace-pre-wrap font-mono leading-relaxed max-h-48 overflow-y-auto">
            {prompt.prompt}
          </pre>
        )}
      </div>
    </div>
  )
}

function EvidenceCard({ story }: { story: MatchedStory }) {
  return (
    <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <span className="text-sm">📊</span>
        </div>
        <div className="min-w-0 flex-1">
          {story.storyUrl ? (
            <a href={story.storyUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold text-primary hover:underline">
              {story.company} ↗
            </a>
          ) : (
            <p className="text-xs font-bold text-text">{story.company}</p>
          )}
          {story.title && (
            <p className="text-[11px] text-text-secondary mt-0.5 leading-snug line-clamp-2">{story.title}</p>
          )}
          {story.metric && (
            <p className="text-xs text-emerald-700 font-semibold mt-1">📈 {story.metric}</p>
          )}
          {story.quote && (
            <p className="text-[11px] text-text-secondary italic mt-1 leading-relaxed line-clamp-2">
              "{story.quote.slice(0, 150)}{story.quote.length > 150 ? '…' : ''}"
            </p>
          )}
          <p className="text-[9px] text-text-secondary/60 mt-1">
            {story.product || 'Microsoft AI'}
            {story.storyUrl && <> · <a href={story.storyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Read full story</a></>}
          </p>
        </div>
      </div>
    </div>
  )
}

function StakeholderMapCard({ entries }: { entries: StakeholderEntry[] }) {
  if (entries.length === 0) return null
  return (
    <Collapsible title="Suggested Stakeholders & Areas" icon="🤝" summary={`${entries.length} pillars mapped`}>
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 print:hidden">
          <p className="text-[11px] text-text-secondary">Review and adjust with the customer during the meeting</p>
        </div>
        <div className="divide-y divide-gray-50">
          {entries.map((entry, i) => (
            <div key={i} className="px-6 py-4">
              <p className="text-xs font-bold text-text mb-2">{entry.pillar}</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider mb-1">Stakeholders</p>
                  <div className="space-y-0.5">
                    {entry.roles.map((r, j) => (
                      <p key={j} className="text-xs text-text">{r}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider mb-1">Business Areas</p>
                  <div className="space-y-0.5">
                    {entry.areas.map((a, j) => (
                      <p key={j} className="text-xs text-text">{a}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider mb-1">Use Cases</p>
                  <div className="space-y-0.5">
                    {entry.useCases.slice(0, 3).map((uc, j) => (
                      <p key={j} className="text-xs text-text">{uc}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Collapsible>
  )
}

function PillarCard({ section, defaultOpen }: { section: PillarSection; defaultOpen: boolean }) {
  const style = PILLAR_STYLES[section.pillar.id] ?? PILLAR_STYLES.reshape
  const [open, setOpen] = useState(defaultOpen)

  const ucCount = section.useCases.length

  return (
    <div className="rounded-xl overflow-hidden pillar-card">
      {/* Gradient header — always visible, clickable */}
      <button onClick={() => setOpen(!open)}
        className={`w-full bg-gradient-to-r ${style.gradient} px-6 py-4 flex items-center gap-3 text-left`}>
        <span className="text-2xl drop-shadow-sm">{section.pillar.icon}</span>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-white tracking-tight">{section.pillar.fullName}</h4>
          {!open && (
            <p className="text-white/70 text-xs mt-0.5">
              {ucCount} use case{ucCount !== 1 ? 's' : ''}
              {section.customerPriorities.length > 0 ? ` · ${section.customerPriorities.length} priorities` : ''}
            </p>
          )}
        </div>
        <span className="text-white/60 text-sm print:hidden">{open ? '▾' : '▸'}</span>
      </button>

      {/* Content — hidden when collapsed, forced visible for print */}
      <div className={`${open ? '' : 'hidden'} print:!block p-6 space-y-5 bg-white`}>
        {/* Strategic Priorities */}
        <div>
          <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-2">
            Strategic Priorities
          </p>
          <ul className="space-y-1.5">
            {section.customerPriorities.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${style.gradient} flex-shrink-0`} />
                <span className="text-sm text-text leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases — clean, no evidence/ROI here */}
        {section.useCases.length > 0 && (
          <div>
            <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-3">
              Enabling Use Cases
            </p>
            <div className="space-y-3">
              {section.useCases.map((uc, i) => {
                const fb = matchFunctionBenchmark(uc.name, uc.description)
                return (
                  <div key={i} className={`p-3 rounded-lg ${style.light}`}>
                    <p className="text-sm font-bold text-text">{uc.name}</p>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">{uc.description}</p>
                    {fb && (
                      <p className="text-[11px] text-emerald-700 mt-1.5 leading-snug">
                        📊 <span className="font-semibold capitalize">{fb.area}:</span> {fb.gain}
                      </p>
                    )}
                    {/* ROI mini-card */}
                    {uc.roiCard && (
                      <div className="mt-2 p-2.5 rounded-lg bg-white/80 border border-gray-100">
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">💰 Cost</p>
                            <p className="text-[11px] text-text leading-snug mt-0.5">{uc.roiCard.costReduction}</p>
                          </div>
                          <div>
                            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">⚡ Speed</p>
                            <p className="text-[11px] text-text leading-snug mt-0.5">{uc.roiCard.speedImprovement}</p>
                          </div>
                          <div>
                            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">✨ Quality</p>
                            <p className="text-[11px] text-text leading-snug mt-0.5">{uc.roiCard.qualityImprovement}</p>
                          </div>
                        </div>
                        <p className="text-[9px] text-gray-400 mt-1.5 flex items-center gap-1">
                          <span>⏱️</span> Expected ROI: {uc.roiCard.roiTimeframe}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function StepValueStory({ wizard }: WizardProps) {
  const { data, prevStep, reset } = wizard
  const story = useMemo(() => generateValueStory(data), [data])
  const printRef = useRef<HTMLDivElement>(null)

  // Consolidated evidence across all pillars for "The Proof" section (deduped by company)
  const allEvidence = useMemo(() => {
    const seen = new Set<string>()
    const items: { pillar: string; pillarIcon: string; stories: MatchedStory[] }[] = []
    for (const ps of story.pillarSections) {
      const raw = [
        ...ps.pillarStories,
        ...ps.useCases.flatMap(uc => uc.matchedStories),
      ]
      const unique = raw.filter(s => {
        const key = s.company.toLowerCase()
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
      if (unique.length > 0) {
        items.push({ pillar: ps.pillar.fullName, pillarIcon: ps.pillar.icon, stories: unique })
      }
    }
    if (story.intelligenceSection) {
      const raw = story.intelligenceSection.useCases.flatMap(uc => uc.matchedStories)
      const unique = raw.filter(s => {
        const key = s.company.toLowerCase()
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
      if (unique.length > 0) {
        items.push({ pillar: 'Intelligence & Trust', pillarIcon: INTELLIGENCE_FOUNDATION.icon, stories: unique })
      }
    }
    if (story.securitySection) {
      const raw = story.securitySection.useCases.flatMap(uc => uc.matchedStories)
      const unique = raw.filter(s => {
        const key = s.company.toLowerCase()
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
      if (unique.length > 0) {
        items.push({ pillar: 'Security Foundation', pillarIcon: SECURITY_FOUNDATION.icon, stories: unique })
      }
    }
    return items
  }, [story])

  // Consolidated ROI across all pillars for "The Return" section (deduped by UC name)
  const challenges = useMemo(
    () => CHALLENGES.filter(c => data.selectedChallengeIds.includes(c.id)),
    [data.selectedChallengeIds]
  )

  const totalEvidenceCount = allEvidence.reduce((n, e) => n + e.stories.length, 0)
  const roiCount = story.pillarSections.reduce((n, s) => n + s.useCases.filter(uc => uc.roiCard).length, 0)
    + (story.securitySection?.useCases.filter(uc => uc.roiCard).length ?? 0)

  // Lazy-load CZ data only when NDA confirmed
  const [czData, setCzData] = useState<CZData | null>(null)
  useEffect(() => {
    if (!data.ndaConfirmed) { setCzData(null); return }
    import('../../data/customer-zero').then(mod => {
      setCzData({
        departments: mod.CUSTOMER_ZERO_DEPARTMENTS,
        proofPoints: mod.CUSTOMER_ZERO_HEADLINE_PROOF_POINTS,
        patterns: mod.CUSTOMER_ZERO_PATTERNS,
        recipes: mod.CUSTOMER_ZERO_RECIPES,
      })
    })
  }, [data.ndaConfirmed])

  // CZ departments filtered to active pillars (for nav + section rendering)
  const czMatchedDepts = useMemo(() => {
    if (!czData) return []
    const activePillarIds = new Set(story.pillarSections.map(s => s.pillar.id))
    if (story.securitySection) activePillarIds.add('security')
    return czData.departments.filter(d => d.pillarIds.some(p => activePillarIds.has(p)))
  }, [czData, story])

  const fullStoryText = useMemo(() => {
    const lines = [
      story.title,
      '',
      '━━ MARKET CONTEXT ━━',
      ...story.marketContext.map(s => `  • ${s}`),
      '',
      story.executive_summary,
      '',
    ]
    if (story.industryBenchmark) {
      lines.push('━━ INDUSTRY BENCHMARK ━━')
      lines.push(`  AI adoption growth: ${story.industryBenchmark.adoptionGrowthRate}`)
      lines.push(`  Average ROI: ${story.industryBenchmark.avgROI}`)
      lines.push(`  Top performers: ${story.industryBenchmark.topPerformerMultiple}`)
      if (story.industryBenchmark.frontierStats?.length) {
        lines.push('  Frontier Transformation Insights:')
        story.industryBenchmark.frontierStats.forEach((s) => lines.push(`    ▸ ${s}`))
      }
      lines.push('')
    }
    for (const ps of story.pillarSections) {
      lines.push(`━━ ${ps.pillar.fullName.toUpperCase()} ━━`)
      lines.push('')
      lines.push('Strategic Priorities:')
      ps.customerPriorities.forEach((p) => lines.push(`  • ${p}`))
      lines.push('')
      if (ps.useCases.length > 0) {
        lines.push('Use Cases:')
        for (const uc of ps.useCases) {
          lines.push(`  ${uc.name}`)
          lines.push(`  ${uc.description}`)
          if (uc.evidence) lines.push(`  📊 ${uc.evidence}`)
          const fb = matchFunctionBenchmark(uc.name, uc.description)
          if (fb) lines.push(`  📊 ${fb.area}: ${fb.gain}`)
          for (const s of uc.matchedStories) {
            lines.push(`  📖 ${s.company}: ${s.metric}${s.storyUrl ? ` (${s.storyUrl})` : ''}`)
          }
          lines.push('')
        }
      }
    }
    if (story.securitySection) {
      lines.push('━━ SECURITY FOUNDATION ━━')
      lines.push('')
      story.securitySection.customerPriorities.forEach((p) => lines.push(`  • ${p}`))
      for (const uc of story.securitySection.useCases) {
        lines.push(`  ${uc.name} — ${uc.description}`)
      }
      lines.push('')
    }
    if (story.stakeholderMap.length > 0) {
      lines.push('━━ STAKEHOLDER MAP ━━')
      lines.push('')
      for (const s of story.stakeholderMap) {
        lines.push(`  ${s.pillar}: ${s.roles.join(', ')} → ${s.areas.join(', ')}`)
      }
      lines.push('')
    }
    if (story.missingPillars.length > 0) {
      lines.push('━━ EXPANSION OPPORTUNITIES ━━')
      lines.push('')
      for (const p of story.missingPillars) {
        lines.push(`  ${p.icon} ${p.fullName} — not yet addressed; consider exploring use cases here`)
      }
      lines.push('')
    }
    lines.push('━━ SOLUTION MAP ━━')
    lines.push('')
    for (const entry of story.solutionMap) {
      lines.push(`  ${entry.useCase}`)
      lines.push(`    ${entry.solutions.join(' · ')}  [${entry.pillar}]`)
    }
    lines.push('')
    lines.push('━━ NEXT STEPS ━━')
    lines.push('')
    story.nextSteps.forEach((s, i) => lines.push(`  ${i + 1}. ${s}`))
    lines.push('')
    lines.push('---')
    lines.push('This Value Story was prepared using the ATU Value Workshop, aligned with Microsoft\'s Responsible AI principles.')
    lines.push('Evidence sourced from published customer stories, IDC/Forrester research, and industry benchmarks.')
    return lines.join('\n')
  }, [story])

  return (
    <div className="max-w-3xl mx-auto space-y-6 print:max-w-none print:mx-0" ref={printRef}>
      {/* ━━ HERO — Stats Card ━━ */}
      <div className="rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white shadow-xl print:shadow-none print:rounded-none print:bg-gray-900">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                Intelligence & Trust
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                Frontier Transformation
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{story.title}</h2>
          </div>
          <div className="flex gap-2 print:hidden">
            <CopyButton text={fullStoryText} label="📋 Copy" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-6 grid grid-cols-5 gap-3">
          {[
            { value: story.pillarSections.reduce((sum, p) => sum + (p.useCases?.length || 0), 0) + (story.securitySection?.useCases?.length || 0), label: 'AI Use Cases' },
            { value: story.pillarSections.length + (story.securitySection ? 1 : 0), label: 'Pillars' },
            { value: totalEvidenceCount, label: 'Customer Stories' },
            { value: roiCount, label: 'ROI Insights' },
            { value: data.industryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), label: 'Industry Focus', isText: true },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
              <div className={`font-bold ${stat.isText ? 'text-lg' : 'text-3xl'} text-white`}>{stat.value}</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge pills — grounding context */}
        {challenges.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mr-1 self-center">Based on:</span>
            {challenges.map(c => (
              <span key={c.id} className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-white/70 font-medium">
                {c.name}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ━━ Section Jump Nav ━━ */}
      <nav className="sticky top-0 z-40 -mx-2 px-2 py-2 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center gap-2 overflow-x-auto print:hidden">
        <span className="flex-shrink-0 text-xs font-semibold text-text-secondary">Jump to:</span>
        {[
          { id: 'plan', icon: '🎯', label: 'The Plan' },
          { id: 'proof', icon: '📊', label: 'The Proof' },
          { id: 'why-now', icon: '📈', label: 'Why Now' },
          { id: 'next-steps', icon: '🎯', label: 'Next Steps' },
          ...(czMatchedDepts.length > 0 ? [{ id: 'customer-zero', icon: '🔒', label: 'Customer Zero' }] : []),
          { id: 'cowork', icon: '🤖', label: 'Cowork Prompts' },
        ].map((s) => (
          <button key={s.id} onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 hover:bg-primary/10 hover:text-primary text-text-secondary transition-all">
            {s.icon} {s.label}
          </button>
        ))}
      </nav>

      {/* ━━ 2. THE PLAN — Pillars (open by default) ━━ */}
      <div id="plan">
      <Collapsible title="The Plan" icon="🎯"
        summary={`${story.pillarSections.length} pillars · ${story.pillarSections.reduce((n, s) => n + s.useCases.length, 0)} use cases`}
        defaultOpen={false}>
        <div className="space-y-4 pt-2">
          {story.pillarSections.map((section) => (
            <PillarCard key={section.pillar.id} section={section} defaultOpen={false} />
          ))}

          {/* Intelligence & Trust Foundation */}
          {story.intelligenceSection && (
            <div className="rounded-2xl overflow-hidden border-2 border-dashed border-indigo-300">
              <Collapsible title="Intelligence & Trust" icon={INTELLIGENCE_FOUNDATION.icon}
                summary={`${story.intelligenceSection.useCases.length} data foundation use cases`} defaultOpen={false}>
                <div className="p-6 space-y-4 bg-white">
                  <ul className="space-y-1.5">
                    {story.intelligenceSection.customerPriorities.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                        <span className="text-sm text-text leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                  {story.intelligenceSection.useCases.length > 0 && (
                    <div className="space-y-3">
                      {story.intelligenceSection.useCases.map((uc, i) => (
                        <div key={i} className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                          <p className="text-sm font-bold text-text">{uc.name}</p>
                          <p className="text-xs text-text-secondary mt-1 leading-relaxed">{uc.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Collapsible>
            </div>
          )}

          {/* Security Foundation */}
          {story.securitySection && (
            <div className="rounded-2xl overflow-hidden border-2 border-dashed border-gray-300">
              <Collapsible title="Security Foundation" icon={SECURITY_FOUNDATION.icon}
                summary={`${story.securitySection.useCases.length} security use cases`} defaultOpen={false}>
                <div className="p-6 space-y-4 bg-white">
                  <ul className="space-y-1.5">
                    {story.securitySection.customerPriorities.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                        <span className="text-sm text-text leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                  {story.securitySection.useCases.length > 0 && (
                    <div className="space-y-3">
                      {story.securitySection.useCases.map((uc, i) => (
                        <div key={i} className="p-4 rounded-xl bg-rose-50 border border-rose-100">
                          <p className="text-sm font-bold text-text">{uc.name}</p>
                          <p className="text-xs text-text-secondary mt-1 leading-relaxed">{uc.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Collapsible>
            </div>
          )}

          {/* Missing Pillars Suggestion */}
          {story.missingPillars.length > 0 && (
            <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">💡</span>
                <h3 className="text-sm font-bold text-violet-900">Expansion Opportunities</h3>
              </div>
              <p className="text-xs text-violet-700 mb-3">
                {data.companyName}'s current priorities don't cover {story.missingPillars.length === 1 ? 'this pillar' : 'these pillars'}. 
                Use the <strong>Use Case Discovery</strong> Cowork prompt below to explore additional value areas.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {story.missingPillars.map((p) => (
                  <div key={p.id} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/60 border border-violet-100">
                    <span className="text-lg">{p.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-violet-900">{p.fullName}</p>
                      <p className="text-[10px] text-violet-600">{p.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Collapsible>

      {/* Thin industry evidence warning — fewer than 3 matched stories */}
      {totalEvidenceCount < 3 && (
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 italic px-1">
          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.75-11.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zM9.25 9a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0V9z" clipRule="evenodd"/>
          </svg>
          <span>📊 Limited evidence catalog for this industry — stories are being added regularly</span>
        </div>
      )}
      </div>

      {/* ━━ 3. THE PROOF — Consolidated evidence ━━ */}
      <div id="proof">
      {totalEvidenceCount > 0 && (
        <Collapsible title="The Proof" icon="📊"
          summary={`${totalEvidenceCount} customer ${totalEvidenceCount === 1 ? 'story' : 'stories'}${story.industryBenchmark ? ' · Industry benchmark' : ''}`}
          defaultOpen={false}>
          <div className="space-y-4 pt-2">
            <p className="text-xs text-text-secondary">
              Companies in {data.industryId.replace(/-/g, ' ')} are already seeing results with similar use cases.
            </p>
            {totalEvidenceCount < 3 && (
              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span>ℹ️</span>
                📊 Limited evidence catalog for this industry — stories are being added regularly
              </p>
            )}
            {allEvidence.map((group, i) => (
              <div key={i}>
                <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-2">
                  {group.pillarIcon} {group.pillar}
                </p>
                <div className="grid gap-2">
                  {group.stories.map((s, j) => (
                    <EvidenceCard key={j} story={s} />
                  ))}
                </div>
              </div>
            ))}

            {/* Industry Benchmark */}
            {story.industryBenchmark && (
              <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🏆</span>
                  <h3 className="text-sm font-bold text-amber-900">
                    Industry Benchmark: {data.industryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">AI Adoption</p>
                    <p className="text-xs text-amber-900 mt-1 leading-snug">{story.industryBenchmark.adoptionGrowthRate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Value Potential</p>
                    <p className="text-xs text-amber-900 mt-1 leading-snug">{story.industryBenchmark.avgROI}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Key Insight</p>
                    <p className="text-xs text-amber-900 mt-1 leading-snug">{story.industryBenchmark.topPerformerMultiple}</p>
                  </div>
                </div>
                {story.industryBenchmark.marketProjection && (
                  <p className="text-xs text-amber-700 mt-3 pt-3 border-t border-amber-200">
                    📊 {story.industryBenchmark.marketProjection}
                  </p>
                )}
                {story.industryBenchmark.frontierStats && story.industryBenchmark.frontierStats.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-amber-200">
                    <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider mb-2">Frontier Transformation Insights</p>
                    <ul className="space-y-1.5">
                      {story.industryBenchmark.frontierStats.map((stat, i) => (
                        <li key={i} className="text-xs text-amber-900 leading-snug flex items-start gap-1.5">
                          <span className="text-amber-500 mt-0.5 flex-shrink-0">▸</span>
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="text-[9px] text-amber-500 mt-2">Based on published industry research from McKinsey, BCG, IDC, and Forrester</p>
              </div>
            )}
          </div>
        </Collapsible>
      )}

      {/* Thin industry warning when no evidence at all */}
      {totalEvidenceCount === 0 && (
        <div className="px-4 py-2">
          <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <span>ℹ️</span>
            📊 Limited evidence catalog for this industry — stories are being added regularly
          </p>
        </div>
      )}
      </div>

      {/* ━━ 4. MARKET CONTEXT — Why Now ━━ */}
      <div id="why-now">
      <Collapsible title="Why Now" icon="📈"
        summary={`${story.marketContext.length} market signals`}
        defaultOpen={false}>
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-3">
            {story.marketContext.map((stat, i) => {
              const mainText = stat.split('(')[0].trim()
              const source = stat.includes('(') ? stat.split('(')[1]?.replace(')', '') : null
              return (
                <div key={i} className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100/50">
                  <p className="text-[11px] text-blue-900 font-semibold leading-snug">{mainText}</p>
                  {source && (
                    <p className="text-[10px] text-blue-500 mt-0.5">— {source}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Collapsible>
      </div>

      {/* ━━ 5. NEXT STEPS — collapsible, default open ━━ */}
      <div id="next-steps">
      <Collapsible title="Next Steps" icon="🎯" defaultOpen={false}>
        <div className="space-y-4 pt-2">
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
            <div className="space-y-3">
              {story.nextSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stakeholder Map */}
          <StakeholderMapCard entries={story.stakeholderMap} />

          {/* CRM Key Stakeholders — from Smart Fill */}
          {data.crmContacts && data.crmContacts.length > 0 && (
            <div className="rounded-2xl border border-emerald-100 bg-white shadow-sm overflow-hidden">
              <div className="px-6 py-3 bg-emerald-50 border-b border-emerald-100">
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">👥 Key Stakeholders (from CRM)</p>
              </div>
              <div className="divide-y divide-gray-50">
                {data.crmContacts.map((contact, i) => (
                  <div key={i} className="px-6 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-emerald-700">{contact.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text">{contact.name}</p>
                      <p className="text-[11px] text-text-secondary">{contact.title}</p>
                    </div>
                    {contact.email && (
                      <a href={`mailto:${contact.email}`} className="text-[10px] text-primary hover:underline ml-auto">
                        {contact.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Solution Enablement Map */}
          {story.solutionMap.length > 0 && (
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <p className="text-[10px] font-bold text-text uppercase tracking-wider">🧩 Solution Enablement Map</p>
              </div>
              <div className="divide-y divide-gray-50">
                {story.solutionMap.map((entry, i) => (
                  <div key={i} className="px-4 py-2.5">
                    <p className="text-xs font-semibold text-text">{entry.useCase}</p>
                    <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                      <span className="text-[10px] text-text-secondary leading-snug">{entry.solutions.join(' · ')}</span>
                      <span className="px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-gray-100 text-text-secondary whitespace-nowrap">
                        {entry.pillar}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Collapsible>
      </div>

      {/* ━━ CUSTOMER ZERO — NDA-Gated, Pillar-Filtered Section ━━ */}
      {czMatchedDepts.length > 0 && czData && (() => {
        const matchedDeptNames = new Set(czMatchedDepts.map(d => d.name))
        const matchedProofPoints = czData.proofPoints.filter(pp => matchedDeptNames.has(pp.department))

        return (
      <div id="customer-zero">
          <Collapsible title="Microsoft Customer Zero" icon="🔒"
            summary={`${czMatchedDepts.length} departments match your pillars · ${matchedProofPoints.length} proof points`}
            defaultOpen={false}>
            <div className="space-y-5 pt-2">
              <p className="text-xs text-text-secondary">
                Microsoft's own AI transformation — showing {czMatchedDepts.length} of 10 departments that align with your selected pillars.
                <span className="text-[9px] text-gray-400 ml-1">Source: Customer Zero deck (March 2026) · NDA required</span>
              </p>

              {/* Headline Proof Points — filtered */}
              {matchedProofPoints.length > 0 && (
              <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-3">⭐ Headline Proof Points</p>
                <div className="grid grid-cols-2 gap-2">
                  {matchedProofPoints.map((pp, i) => (
                    <div key={i} className="p-2 rounded-lg bg-white/70">
                      <p className="text-[10px] text-amber-600 font-semibold">{pp.department}</p>
                      <p className="text-xs font-bold text-text">{pp.value}</p>
                      <p className="text-[10px] text-text-secondary">{pp.headlineMetric}</p>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* AI Adoption Patterns — always relevant */}
              <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4">
                <p className="text-[10px] font-bold text-violet-800 uppercase tracking-wider mb-3">🔄 AI Adoption Patterns</p>
                <div className="grid grid-cols-3 gap-2">
                  {czData.patterns.map((p) => (
                    <div key={p.id} className="p-2.5 rounded-lg bg-white/70 text-center">
                      <p className="text-lg font-bold text-violet-600">{p.level}</p>
                      <p className="text-xs font-bold text-text mt-1">{p.name}</p>
                      <p className="text-[10px] text-text-secondary mt-0.5">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transformation Recipes — always relevant */}
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-3">🧪 Transformation Recipes (from ~100 case studies)</p>
                <div className="space-y-2">
                  {czData.recipes.map((r) => (
                    <div key={r.id} className="p-2.5 rounded-lg bg-white/70">
                      <p className="text-xs font-bold text-text">{r.name}</p>
                      <p className="text-[10px] text-text-secondary mt-0.5">{r.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Details — filtered to matching pillars */}
              {czMatchedDepts.map((dept) => (
                <Collapsible key={dept.id} title={dept.name} icon="📋"
                  summary={`${dept.useCases.length} use cases · ${dept.headlineMetrics.length} metrics`}
                  defaultOpen={false}>
                  <div className="space-y-3 pt-1">
                    <p className="text-xs text-text-secondary">{dept.description}</p>

                    {/* Headline Metrics */}
                    <div className="grid grid-cols-2 gap-2">
                      {dept.headlineMetrics.map((m, i) => (
                        <div key={i} className="p-2 rounded-lg bg-gray-50">
                          <p className="text-xs font-bold text-primary">{m.value}</p>
                          <p className="text-[10px] text-text-secondary">{m.metric}</p>
                        </div>
                      ))}
                    </div>

                    {/* Use Cases */}
                    {dept.useCases.map((uc, i) => (
                      <div key={i} className="p-3 rounded-lg bg-gray-50/80">
                        <p className="text-xs font-bold text-text">{uc.name}</p>
                        <p className="text-[10px] text-text-secondary mt-0.5">{uc.description}</p>
                        {uc.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {uc.metrics.map((m, j) => (
                              <span key={j} className="text-[9px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                {m.value} — {m.metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1">
                      {dept.tools.map((t, i) => (
                        <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-gray-100 text-text-secondary">{t}</span>
                      ))}
                    </div>

                    {dept.quote && (
                      <blockquote className="text-[11px] text-text-secondary italic border-l-2 border-primary/30 pl-3 mt-2">
                        "{dept.quote}"
                      </blockquote>
                    )}
                  </div>
                </Collapsible>
              ))}

              <p className="text-[9px] text-gray-400 text-center">
                All figures based on internal Microsoft telemetry data. Microsoft makes no warranties, express, implied or statutory.
                Deck refreshed quarterly. Contact: mcapsaiideas@microsoft.com
              </p>
            </div>
          </Collapsible>
      </div>
        )
      })()}

      {/* ━━ 6. COWORK PROMPTS ━━ */}
      <section id="cowork" className="print:hidden">
        <Collapsible title="Copilot Cowork Prompts" icon="🤖"
          summary={`${story.coworkPrompts.length} context-rich prompts ready`} defaultOpen={false}>
          <div className="space-y-3 pt-2">
            <p className="text-sm text-text-secondary">
              Each prompt generates a <strong>real deliverable</strong> — an Outlook email draft, PowerPoint deck, or Word document.
              Copy → Paste into <a href="https://aka.ms/cowork" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Microsoft 365 Copilot Cowork ↗</a> and it will create the file for you, pre-loaded with {data.companyName}'s full context.
            </p>
            <div className="grid gap-3">
              {story.coworkPrompts.map((prompt) => (
                <CoworkCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ── Disclaimer ── */}
      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center print:border-none">
        <p className="text-[11px] text-text-secondary leading-relaxed">
          ⚡ AI-Assisted · Human-Reviewed — This Value Story was prepared using the ATU Value Workshop, aligned with Microsoft's
          Responsible AI principles and Secure Future Initiative standards. Evidence sourced from published customer stories,
          IDC/Forrester research, and industry benchmarks. Results vary by organization. Validate with customer-specific context before sharing.
        </p>
        <div className="flex items-center justify-center gap-3 mt-3 text-[10px] text-text-secondary flex-wrap">
          <a href="https://www.microsoft.com/ai/responsible-ai" target="_blank" rel="noopener" className="hover:text-primary">🛡️ Responsible AI</a>
          <a href="https://www.microsoft.com/en-us/trust-center/security/secure-future-initiative" target="_blank" rel="noopener" className="hover:text-primary">🔒 SFI Secure</a>
          <a href="https://www.microsoft.com/en-us/trust-center/privacy" target="_blank" rel="noopener" className="hover:text-primary">🔏 Privacy</a>
          <a href="https://stories.microsoft.com" target="_blank" rel="noopener" className="hover:text-primary">📋 Evidence Standards</a>
        </div>
      </div>

      {/* ── Feedback via GitHub Issue ── */}
      <div className="text-center print:hidden">
        <a
          href={`https://github.com/EdBorges-F/atu-value-workshop/issues/new?labels=feedback&title=${encodeURIComponent(`Feedback: ${data.industryId} — ${story.pillarSections.length} pillars`)}&body=${encodeURIComponent(`## Feedback on Frontier Canvas\n\n**Industry:** ${data.industryId}\n**Company Size:** ${data.companySize}\n**Pillars:** ${story.pillarSections.map(s => s.pillar.fullName).join(', ')}\n**Use Cases:** ${story.pillarSections.reduce((sum, p) => sum + (p.useCases?.length || 0), 0)}\n\n### Rating (1-5): \n\n### What worked well:\n\n### What needs improvement:\n\n### Missing content or use cases:\n\n### Other comments:\n`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 text-sm font-medium hover:shadow-md transition-all"
        >
          📋 Share Feedback on This Value Story
        </a>
        <p className="text-[10px] text-text-secondary mt-1.5">Opens a pre-filled GitHub Issue — takes 30 seconds</p>
      </div>

      {/* ── Navigation ── */}
      <div className="flex justify-between pt-4 print:hidden">
        <button onClick={prevStep}
          className="px-6 py-3 rounded-2xl border border-gray-200 text-text font-medium text-sm hover:bg-gray-50 transition-all">
          ← Back to Review
        </button>
        <button onClick={reset}
          className="px-6 py-3 rounded-2xl border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-all">
          Start New Canvas
        </button>
      </div>
    </div>
  )
}
