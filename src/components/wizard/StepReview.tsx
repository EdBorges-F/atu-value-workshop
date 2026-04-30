import { useMemo, useState, useEffect, useRef } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import type { CRMContact } from '../../hooks/useWizardState'
import { INDUSTRIES } from '../../data/industries'
import { CHALLENGES } from '../../data/challenges'
import { generateValueStory, INTELLIGENCE_FOUNDATION, SECURITY_FOUNDATION } from '../../lib/valueStoryGenerator'
import { FUNCTION_BENCHMARKS, filterCustomerZero } from '../../data/global-ai-evidence'
import type { CustomerZeroDepartment } from '../../data/customer-zero'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

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
    if (score > bestScore && score >= 6) { bestScore = score; best = fb }
  }
  if (!best) return null
  return { area: best.functionArea.replace(/-/g, ' '), gain: filterCustomerZero(best.productivityGain) }
}

const SIZE_LABELS: Record<string, string> = {
  small: 'Growing org (<500)',
  mid: 'Mid-size (500–2.5K)',
  large: 'Large enterprise (2.5K–10K)',
  enterprise: 'Global enterprise (10K+)',
}

export default function StepReview({ wizard }: WizardProps) {
  const { data, prevStep, nextStep, goToStep, updateData } = wizard
  const printRef = useRef<HTMLDivElement>(null)

  const story = useMemo(() => generateValueStory(data), [data])
  const industry = useMemo(() => INDUSTRIES.find((i) => i.id === data.industryId), [data.industryId])
  const challenges = useMemo(
    () => CHALLENGES.filter((c) => data.selectedChallengeIds.includes(c.id)),
    [data.selectedChallengeIds]
  )

  // CZ departments lazy-loaded when NDA confirmed (for badge only)
  const [czDepartments, setCzDepartments] = useState<CustomerZeroDepartment[]>([])
  useEffect(() => {
    if (!data.ndaConfirmed) { setCzDepartments([]); return }
    import('../../data/customer-zero').then(mod => setCzDepartments(mod.CUSTOMER_ZERO_DEPARTMENTS))
  }, [data.ndaConfirmed])

  const czMatchedDepts = useMemo(() => {
    if (czDepartments.length === 0) return []
    const activePillarIds = new Set(story.pillarSections.map(s => s.pillar.id))
    if (story.securitySection) activePillarIds.add('security')
    return czDepartments.filter(d => d.pillarIds.some(p => activePillarIds.has(p)))
  }, [czDepartments, story])

  // Derived counts for key stats strip
  const topUseCases = useMemo(() => {
    const all = [
      ...story.pillarSections.flatMap(s => s.useCases.map(uc => ({ ...uc }))),
      ...(story.intelligenceSection?.useCases ?? []),
      ...(story.securitySection?.useCases ?? []),
    ]
    return all.sort((a, b) => {
      const scoreA = a.matchedStories.length + (a.roiCard ? 1 : 0) + (a.evidence ? 1 : 0)
      const scoreB = b.matchedStories.length + (b.roiCard ? 1 : 0) + (b.evidence ? 1 : 0)
      return scoreB - scoreA
    })
  }, [story])

  const totalEvidenceCount = useMemo(() => {
    const seen = new Set<string>()
    for (const ps of story.pillarSections) {
      for (const s of [...ps.pillarStories, ...ps.useCases.flatMap(uc => uc.matchedStories)]) seen.add(s.company.toLowerCase())
    }
    for (const s of (story.intelligenceSection?.useCases ?? []).flatMap(uc => uc.matchedStories)) seen.add(s.company.toLowerCase())
    for (const s of (story.securitySection?.useCases ?? []).flatMap(uc => uc.matchedStories)) seen.add(s.company.toLowerCase())
    return seen.size
  }, [story])

  const roiCount = story.pillarSections.reduce((n, s) => n + s.useCases.filter(uc => uc.roiCard).length, 0)
    + (story.securitySection?.useCases.filter(uc => uc.roiCard).length ?? 0)

  // PDF export — prints exec summary card in a clean window
  const handlePrintPDF = () => {
    const heroEl = printRef.current?.querySelector('.hero-card')
    const execEl = printRef.current?.querySelector('#exec-summary')
    if (!heroEl || !execEl) { window.print(); return }
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map(el => el.outerHTML).join('\n')
    const win = window.open('', '_blank', 'width=900,height=700')
    if (!win) { window.print(); return }
    const escHtml = (s: string) => s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m] || m))
    win.document.write(`<!DOCTYPE html><html><head>
      <title>${escHtml(data.companyName || 'Executive Summary')} — Frontier Canvas</title>
      ${styles}
      <style>
        @page { margin: 0.5in; size: letter; }
        @media print { @page { margin: 0.5in; size: letter; } }
        body { margin: 0; padding: 0.5in; background: white; font-size: 8px; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        .print\\:hidden, .no-print { display: none !important; }
        .print-disclaimer { display: block !important; }
      </style>
    </head><body>
      <div style="max-width:100%;">
        ${heroEl.outerHTML}
        <div style="margin-top:0.2rem;">${execEl.outerHTML}</div>
      </div>
    </body></html>`)
    win.document.close()
    setTimeout(() => { win.print(); setTimeout(() => win.close(), 1000) }, 500)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8" ref={printRef}>
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-text">Executive Summary</h2>
        <p className="text-text-secondary mt-1">
          Review before the meeting — PDF-ready for printing.
        </p>
      </div>

      {/* ── Dark Hero ── */}
      <div className="hero-card rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white shadow-xl print:shadow-none print:rounded-none print:bg-gray-900">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                Frontier Transformation
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">{story.title}</h3>
            <p className="text-white/60 text-sm mt-1">{industry?.icon} {industry?.name ?? '—'} · {SIZE_LABELS[data.companySize] ?? '—'}</p>
            <button onClick={() => goToStep(0)} className="text-[11px] text-white/40 hover:text-white/70 mt-2 underline print:hidden">
              Edit profile
            </button>
          </div>
          <button
            onClick={handlePrintPDF}
            className="print:hidden px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          >
            📄 Export PDF
          </button>
        </div>

        {challenges.length > 0 && (
          <div className="mt-4">
            <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold block mb-1.5">Based on</span>
            <div className="flex flex-wrap gap-1.5">
              {challenges.map(c => (
                <span key={c.id} className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-white/70 font-medium">{c.name}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Exec Summary Card ── */}
      <div id="exec-summary" className="rounded-2xl border border-gray-200 bg-white shadow-lg p-6 print:shadow-none print:border-none print:p-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">📋</span>
          <h3 className="text-sm font-bold text-text uppercase tracking-wider">Executive Summary</h3>
        </div>

        <p className="text-sm text-text leading-relaxed">{story.executive_summary}</p>

        {/* Two-tier engagement model */}
        {(() => {
          type TierItem = { id: string; icon: string; name: string; priorities: string[]; useCases: any[]; colorScheme: 'default' | 'indigo' | 'rose' }
          const allItems: TierItem[] = [
            ...story.pillarSections.map(s => ({ id: s.pillar.id, icon: s.pillar.icon, name: s.pillar.fullName, priorities: s.customerPriorities, useCases: s.useCases, colorScheme: 'default' as const })),
            ...(story.intelligenceSection ? [{ id: 'intelligence', icon: INTELLIGENCE_FOUNDATION.icon, name: 'Intelligence & Trust Foundation', priorities: [] as string[], useCases: story.intelligenceSection.useCases, colorScheme: 'indigo' as const }] : []),
            ...(story.securitySection ? [{ id: 'security', icon: SECURITY_FOUNDATION.icon, name: 'Security Foundation', priorities: [] as string[], useCases: story.securitySection.useCases, colorScheme: 'rose' as const }] : []),
          ]
          const tier1 = allItems.filter(i => i.useCases.length > 0)
          const tier2 = allItems.filter(i => i.useCases.length === 0)
          const colorMap = {
            default: { bg: 'bg-gray-50', border: 'border-gray-100', label: 'text-text', sub: 'text-text-secondary' },
            indigo:  { bg: 'bg-indigo-50/50', border: 'border-indigo-100', label: 'text-indigo-700', sub: 'text-indigo-500' },
            rose:    { bg: 'bg-rose-50/50', border: 'border-rose-100', label: 'text-rose-700', sub: 'text-rose-500' },
          }
          return (
            <>
              {tier1.length > 0 && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">🚀</span>
                    <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Your Starting Point</p>
                  </div>
                  <p className="text-[10px] text-text-secondary mb-3">These scenarios are ready to explore — backed by use cases, customer stories, and benchmarks.</p>
                  <div className="space-y-3">
                    {tier1.map(item => {
                      const topUc = item.useCases[0]
                      const fb = topUc ? matchFunctionBenchmark(topUc.name, topUc.description) : null
                      const topMetric = topUc?.matchedStories?.[0]?.metric
                      const c = colorMap[item.colorScheme]
                      return (
                        <div key={item.id} className={`rounded-xl ${c.bg} ${c.border} border p-3`}>
                          <div className="flex items-start gap-2">
                            <span className="text-base mt-0.5">{item.icon}</span>
                            <div className="min-w-0 flex-1">
                              {item.priorities.length > 0 && (
                                <p className="text-[10px] text-text-secondary italic mb-1">"{item.priorities[0]}"</p>
                              )}
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-xs font-bold ${c.label}`}>{item.name}</span>
                                <span className={`text-[10px] ${c.sub}`}>· {item.useCases.length} use case{item.useCases.length !== 1 ? 's' : ''}</span>
                                {item.useCases.reduce((n: number, uc: any) => n + (uc.matchedStories?.length || 0), 0) > 0 && (
                                  <span className="text-[10px] text-emerald-600">· {item.useCases.reduce((n: number, uc: any) => n + (uc.matchedStories?.length || 0), 0)} stories</span>
                                )}
                              </div>
                              {topUc && (
                                <p className="text-[11px] text-text mt-1">
                                  Top: <strong>{topUc.name}</strong>
                                  {topMetric && <span className="text-emerald-600 ml-1">— {topMetric}</span>}
                                </p>
                              )}
                              {fb && <p className="text-[10px] text-primary mt-0.5">📊 Benchmark: {fb.gain}</p>}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              {tier2.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">🤝</span>
                    <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Your Next Conversation</p>
                  </div>
                  <p className="text-[10px] text-text-secondary mb-3">These priorities are the perfect agenda for a deeper session with your extended team.</p>
                  <div className="space-y-2">
                    {tier2.map(item => (
                      <div key={item.id} className="rounded-xl bg-amber-50/60 border border-amber-200/60 p-3">
                        <div className="flex items-start gap-2">
                          <span className="text-base mt-0.5">{item.icon}</span>
                          <div className="min-w-0 flex-1">
                            {item.priorities.length > 0 && (
                              <p className="text-[10px] text-amber-700 italic mb-1">"{item.priorities[0]}"</p>
                            )}
                            <span className="text-xs font-bold text-amber-900">{item.name}</span>
                            <p className="text-[10px] text-amber-700 mt-0.5">Workshop topic — explore use cases with the broader team</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )
        })()}

        {/* Projected Value Indicators */}
        {(() => {
          const fbMatches: { area: string; gain: string }[] = []
          const seenAreas = new Set<string>()
          for (const uc of topUseCases.slice(0, 10)) {
            const fb = matchFunctionBenchmark(uc.name, uc.description)
            if (fb && !seenAreas.has(fb.area)) { seenAreas.add(fb.area); fbMatches.push(fb) }
          }
          const roiHighlights: string[] = []
          for (const uc of topUseCases) {
            if (uc.roiCard) {
              if (uc.roiCard.costReduction && roiHighlights.length < 3) roiHighlights.push(`${uc.name}: ${uc.roiCard.costReduction}`)
              if (uc.roiCard.speedImprovement && roiHighlights.length < 3) roiHighlights.push(`${uc.name}: ${uc.roiCard.speedImprovement}`)
            }
          }
          const hasFinancials = fbMatches.length > 0 || story.industryBenchmark || roiHighlights.length > 0
          if (!hasFinancials) return null
          return (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-3">📊 Projected Value Indicators</p>
              <div className="space-y-2">
                {story.industryBenchmark && (
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-100">
                    <span className="text-sm mt-0.5">🏆</span>
                    <div>
                      <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Industry Peers</p>
                      <p className="text-xs text-amber-900 mt-0.5">{story.industryBenchmark.avgROI}</p>
                      {story.industryBenchmark.topPerformerMultiple && (
                        <p className="text-[10px] text-amber-700 mt-0.5">{story.industryBenchmark.topPerformerMultiple}</p>
                      )}
                    </div>
                  </div>
                )}
                {fbMatches.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
                    <p className="text-[10px] font-bold text-blue-800 uppercase tracking-wider mb-1.5">⚡ Function Benchmarks</p>
                    <div className="space-y-1">
                      {fbMatches.slice(0, 4).map((fb, i) => (
                        <p key={i} className="text-xs text-blue-900"><strong className="capitalize">{fb.area}:</strong> {fb.gain}</p>
                      ))}
                    </div>
                  </div>
                )}
                {roiHighlights.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                    <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-1.5">💰 Use Case ROI Signals</p>
                    <div className="space-y-1">
                      {roiHighlights.map((h, i) => (
                        <p key={i} className="text-xs text-emerald-900">{h}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-[10px] text-gray-400 mt-2 italic">
                Based on published research from McKinsey, BCG, IDC, Forrester, and Microsoft internal telemetry. Results vary by organization.
              </p>
            </div>
          )
        })()}

        {/* Key Stats Strip */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{topUseCases.length}</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider">AI Use Cases</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{totalEvidenceCount}</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider">Customer Stories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{roiCount}</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider">ROI Insights</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{story.pillarSections.length + (story.intelligenceSection ? 1 : 0) + (story.securitySection ? 1 : 0)}</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider">Pillars</p>
          </div>
        </div>

        {/* Print-only disclaimer */}
        <div className="print-disclaimer hidden print:!block mt-3 pt-2 border-t border-gray-200">
          <p className="text-[6.5px] text-gray-400 leading-tight text-center">
            This document is intended solely for the use of {data.companyName || 'the customer'} and Microsoft and contains proprietary information.
            ROI projections and business impact figures are based on industry benchmarks and publicly available customer stories —
            actual results will vary. These figures do not constitute a guarantee of performance.
            Microsoft's AI solutions are developed in accordance with our Responsible AI principles.
            © {new Date().getFullYear()} Microsoft Corporation. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Stakeholder Assignment (non-printable) ── */}
      <div className="print:hidden rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
          <span className="text-lg">🎯</span>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-text">Stakeholder Assignment</h3>
            <p className="text-[10px] text-text-secondary mt-0.5">
              {data.crmContacts.length > 0
                ? 'Assign a business champion to each pillar — carried into your Action Center prompts'
                : 'Add CRM contacts via Smart Fill in Step 1 to assign real owners'}
            </p>
          </div>
          {Object.values(data.pillarOwners).filter(Boolean).length > 0 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
              {Object.values(data.pillarOwners).filter(Boolean).length} assigned
            </span>
          )}
        </div>
        <div className="divide-y divide-gray-50">
          {story.pillarSections.map(section => {
            const pillarId = section.pillar.id
            const assigned: CRMContact | null = data.pillarOwners[pillarId] ?? null
            const suggested = story.stakeholderMap.find(e => e.pillar === section.pillar.fullName)
            return (
              <div key={pillarId} className="flex items-center gap-3 px-5 py-3">
                <span className="text-xl flex-shrink-0">{section.pillar.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-text">{section.pillar.fullName}</p>
                  <p className="text-[10px] text-text-secondary">{section.useCases.length} use case{section.useCases.length !== 1 ? 's' : ''}</p>
                </div>
                {data.crmContacts.length > 0 ? (
                  <select
                    value={assigned ? (assigned.email ?? assigned.name) : ''}
                    onChange={e => {
                      const contact = data.crmContacts.find(c => (c.email ?? c.name) === e.target.value) ?? null
                      updateData({ pillarOwners: { ...data.pillarOwners, [pillarId]: contact } })
                    }}
                    className="text-xs rounded-lg border border-gray-200 px-2 py-1.5 bg-white text-text max-w-[220px] truncate"
                  >
                    <option value="">— Assign owner</option>
                    {data.crmContacts.map((c, i) => (
                      <option key={i} value={c.email ?? c.name}>
                        {c.name}{c.title ? ` · ${c.title}` : ''}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="text-[10px] text-text-secondary italic text-right max-w-[200px] leading-snug">
                    {suggested?.roles[0] ?? 'Executive sponsor'}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Customer Zero badge */}
      {czMatchedDepts.length > 0 && (
        <div className="print:hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/30 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🔒</span>
            <h3 className="text-sm font-bold text-text">Microsoft Customer Zero</h3>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">NDA Confirmed</span>
          </div>
          <p className="text-xs text-text-secondary">
            {czMatchedDepts.length} of 10 departments match your selected pillars — their proof points will appear in your Action Center.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4 print:hidden">
        <button
          onClick={prevStep}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-gray-200 text-text font-medium text-sm hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
        >
          Take Action →
        </button>
      </div>
    </div>
  )
}
