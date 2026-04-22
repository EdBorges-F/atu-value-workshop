import { useMemo, useState, useRef } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import { generateValueStory, SECURITY_FOUNDATION, type CoworkPrompt, type PillarSection, type MatchedStory, type ROICard, type StakeholderEntry } from '../../lib/valueStoryGenerator'
import PostGenSurvey from '../ui/PostGenSurvey'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

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
    <div className="collapsible-section">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 py-2 text-left hover:opacity-80 transition-all print:hidden">
        {icon && <span className="text-sm">{icon}</span>}
        <span className="text-xs font-bold text-text uppercase tracking-wider flex-1">{title}</span>
        {summary && !open && <span className="text-[11px] text-text-secondary">{summary}</span>}
        <span className="text-text-secondary text-xs">{open ? '▾' : '▸'}</span>
      </button>
      <div className={`${open ? '' : 'hidden'} print:!block`}>
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

function ROIBadge({ roi }: { roi: ROICard }) {
  return (
    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">💰</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">ROI Projection</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-medium">
          {roi.roiTimeframe}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <p className="text-[10px] text-text-secondary font-medium">Cost Reduction</p>
          <p className="text-xs font-bold text-indigo-700">{roi.costReduction}</p>
        </div>
        <div>
          <p className="text-[10px] text-text-secondary font-medium">Speed</p>
          <p className="text-xs font-bold text-indigo-700">{roi.speedImprovement}</p>
        </div>
        <div>
          <p className="text-[10px] text-text-secondary font-medium">Quality</p>
          <p className="text-xs font-bold text-indigo-700">{roi.qualityImprovement}</p>
        </div>
      </div>
      {roi.evidenceCompanies.length > 0 ? (
        <p className="text-[10px] text-indigo-500 mt-2">
          Based on: {roi.evidenceCompanies.join(', ')}
        </p>
      ) : (
        <p className="text-[10px] text-indigo-400 mt-2">
          Based on industry research and benchmarks
        </p>
      )}
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
                      <p key={j} className="text-xs text-text truncate">{uc}</p>
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
  const evidenceCount = section.pillarStories.length + section.useCases.reduce((n, uc) => n + uc.matchedStories.length, 0)

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm pillar-card">
      {/* Gradient header — always visible, clickable */}
      <button onClick={() => setOpen(!open)}
        className={`w-full bg-gradient-to-r ${style.gradient} px-6 py-4 flex items-center gap-3 text-left`}>
        <span className="text-2xl drop-shadow-sm">{section.pillar.icon}</span>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-white tracking-tight">{section.pillar.fullName}</h4>
          {!open && (
            <p className="text-white/70 text-xs mt-0.5">
              {ucCount} use case{ucCount !== 1 ? 's' : ''}
              {evidenceCount > 0 ? ` · ${evidenceCount} evidence points` : ''}
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
                <span className="text-sm text-text leading-snug">
                  {p.length > 100 ? p.slice(0, 97) + '...' : p}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        {section.useCases.length > 0 && (
          <div>
            <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-3">
              Enabling Use Cases
            </p>
            <div className="space-y-3">
              {section.useCases.map((uc, i) => (
                <div key={i} className={`p-4 rounded-xl ${style.light} border ${style.border}`}>
                  <p className="text-sm font-bold text-text">{uc.name}</p>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">{uc.description}</p>
                  {uc.linkedPriority && (
                    <p className={`text-[11px] ${style.accent} mt-1.5 font-medium`}>
                      → Aligned to: {uc.linkedPriority}
                    </p>
                  )}
                  {uc.evidence && (
                    <p className="text-[11px] text-emerald-600 mt-1 font-medium">📊 {uc.evidence}</p>
                  )}
                  {uc.roiCard && (
                    <div className="mt-2">
                      <ROIBadge roi={uc.roiCard} />
                    </div>
                  )}
                  {uc.matchedStories.length > 0 && (
                    <div className="grid gap-2 mt-3">
                      {uc.matchedStories.map((s, j) => (
                        <EvidenceCard key={j} story={s} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pillar-level evidence */}
        {section.pillarStories.length > 0 && (
          <div>
            <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-2">
              Industry Evidence
            </p>
            <div className="grid gap-2">
              {section.pillarStories.map((s, i) => (
                <EvidenceCard key={i} story={s} />
              ))}
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

  const handlePrint = () => {
    window.print()
  }

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
          if (uc.linkedPriority) lines.push(`  → Aligned to: ${uc.linkedPriority}`)
          if (uc.evidence) lines.push(`  📊 ${uc.evidence}`)
          if (uc.roiCard) {
            lines.push(`  💰 ROI: ${uc.roiCard.costReduction} cost reduction | ${uc.roiCard.speedImprovement} | ${uc.roiCard.roiTimeframe}`)
          }
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
    <div className="max-w-3xl mx-auto space-y-10 print:max-w-none print:mx-0" ref={printRef}>
      {/* ── Hero Header ── */}
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
            <p className="text-white/60 text-sm mt-1">{data.companyName}'s AI transformation journey</p>
          </div>
          <div className="flex gap-2 print:hidden">
            <CopyButton text={fullStoryText} label="📋 Copy" />
            <button onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all
                         bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              🖨️ Print
            </button>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-sm text-white/90 leading-relaxed">{story.executive_summary}</p>
        </div>
      </div>

      {/* ── Market Context Banner — 2x2 grid to avoid widow ── */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📈</span>
          <h3 className="text-sm font-bold text-blue-900">Why Now — The AI Imperative</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {story.marketContext.map((stat, i) => {
            const mainText = stat.split('(')[0].trim()
            const source = stat.includes('(') ? stat.split('(')[1]?.replace(')', '') : null
            return (
              <div key={i} className="p-2.5 rounded-xl bg-white/60 border border-blue-100/50">
                <p className="text-xs text-blue-900 font-semibold leading-snug">{mainText}</p>
                {source && (
                  <p className="text-[10px] text-blue-500 mt-0.5">— {source}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Industry Benchmark ── */}
      {story.industryBenchmark && (
        <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🏆</span>
            <h3 className="text-sm font-bold text-amber-900">
              Industry Benchmark: {data.industryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">AI Adoption Growth</p>
              <p className="text-sm font-bold text-amber-900 mt-1">{story.industryBenchmark.adoptionGrowthRate}</p>
            </div>
            <div>
              <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Average ROI</p>
              <p className="text-sm font-bold text-amber-900 mt-1">{story.industryBenchmark.avgROI}</p>
            </div>
            <div>
              <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">Top Performers</p>
              <p className="text-sm font-bold text-amber-900 mt-1">{story.industryBenchmark.topPerformerMultiple}</p>
            </div>
          </div>
          {story.industryBenchmark.marketProjection && (
            <p className="text-xs text-amber-700 mt-3 pt-3 border-t border-amber-200">
              📊 {story.industryBenchmark.marketProjection}
            </p>
          )}
          <p className="text-[9px] text-amber-500 mt-2">Sources: IDC, Forrester, McKinsey, BCG industry research</p>
        </div>
      )}

      {/* ── Pillar Sections (collapsible) ── */}
      <div className="space-y-4">
        {story.pillarSections.map((section, i) => (
          <PillarCard key={section.pillar.id} section={section} defaultOpen={i < 2} />
        ))}
      </div>

      {/* ── Security Foundation (collapsible) ── */}
      {story.securitySection && (
        <div className="rounded-2xl overflow-hidden border-2 border-dashed border-gray-300">
          <Collapsible title="Security Foundation" icon={SECURITY_FOUNDATION.icon}
            summary={`${story.securitySection.useCases.length} security use cases`} defaultOpen={false}>
            <div className="p-6 space-y-4 bg-white">
              <ul className="space-y-1.5">
                {story.securitySection.customerPriorities.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                    <span className="text-sm text-text leading-snug">
                      {p.length > 100 ? p.slice(0, 97) + '...' : p}
                    </span>
                  </li>
                ))}
              </ul>
              {story.securitySection.useCases.length > 0 && (
                <div className="space-y-3">
                  {story.securitySection.useCases.map((uc, i) => (
                    <div key={i} className="p-4 rounded-xl bg-rose-50 border border-rose-100">
                      <p className="text-sm font-bold text-text">{uc.name}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">{uc.description}</p>
                      {uc.matchedStories.length > 0 && (
                        <div className="grid gap-2 mt-3">
                          {uc.matchedStories.map((s, j) => (
                            <EvidenceCard key={j} story={s} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Collapsible>
        </div>
      )}

      {/* ── Missing Pillars Suggestion ── */}
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

      {/* ── Stakeholder Map ── */}
      <StakeholderMapCard entries={story.stakeholderMap} />

      {/* ── Solution Enablement Map (collapsible) ── */}
      {story.solutionMap.length > 0 && (
        <Collapsible title="Solution Enablement Map" icon="🧩" summary={`${story.solutionMap.length} solutions`}>
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-50">
              {story.solutionMap.map((entry, i) => (
                <div key={i} className="px-6 py-3 flex items-center gap-4">
                  <span className="text-sm font-semibold text-text flex-1 min-w-0">{entry.useCase}</span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs text-text-secondary">{entry.solutions.join(' · ')}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-text-secondary whitespace-nowrap">
                      {entry.pillar}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Collapsible>
      )}

      {/* ── Next Steps (collapsible) ── */}
      <Collapsible title="Recommended Next Steps" icon="🎯" defaultOpen={true}>
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
      </Collapsible>

      {/* ── Disclaimer ── */}
      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center print:border-none">
        <p className="text-[11px] text-text-secondary leading-relaxed">
          ⚡ AI-Assisted · Human-Reviewed — This Value Story was prepared using the ATU Value Workshop, aligned with Microsoft's
          Responsible AI principles and Secure Future Initiative standards. Evidence sourced from published customer stories,
          IDC/Forrester research, and industry benchmarks. Results vary by organization. Validate with customer-specific context before sharing.
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-text-secondary">
          <a href="https://www.microsoft.com/ai/responsible-ai" target="_blank" rel="noopener" className="hover:text-primary">🛡️ Responsible AI</a>
          <a href="https://www.microsoft.com/en-us/trust-center/security/secure-future-initiative" target="_blank" rel="noopener" className="hover:text-primary">🔒 SFI Secure</a>
          <a href="https://www.microsoft.com/en-us/trust-center/privacy" target="_blank" rel="noopener" className="hover:text-primary">🔏 Privacy</a>
          <a href="https://stories.microsoft.com" target="_blank" rel="noopener" className="hover:text-primary">📋 Evidence Standards</a>
        </div>
      </div>

      {/* ── Cowork Prompts (collapsible, hidden from print) ── */}
      <section className="space-y-4 print:hidden">
        <Collapsible title="Copilot Cowork Prompts" icon="✨"
          summary={`${story.coworkPrompts.length} context-rich prompts ready`} defaultOpen={false}>
          <div className="space-y-3">
            <p className="text-sm text-text-secondary">
              Each prompt generates a <strong>real deliverable</strong> — an Outlook email draft, PowerPoint deck, or Word document.
              Copy → Paste into Microsoft 365 Copilot (Business Chat or Cowork) and it will create the file for you, pre-loaded with {data.companyName}'s full context.
            </p>
            <div className="grid gap-3">
              {story.coworkPrompts.map((prompt) => (
                <CoworkCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </div>
        </Collapsible>
      </section>

      {/* ── Feedback Survey ── */}
      <PostGenSurvey
        industry={data.industryId}
        pillarCount={story.pillarSections.length}
        storyCount={story.pillarSections.reduce((sum, p) => sum + (p.pillarStories?.length || 0), 0)}
        useCaseCount={story.pillarSections.reduce((sum, p) => sum + (p.useCases?.length || 0), 0)}
      />

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
