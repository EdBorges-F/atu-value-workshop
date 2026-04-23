import { useState, useMemo } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import { FRONTIER_PILLARS } from '../../lib/valueStoryGenerator'
import { CHALLENGES } from '../../data/challenges'
import {
  CUSTOMER_ZERO_USE_CASES,
  CUSTOMER_ZERO_DEPARTMENTS,
  CUSTOMER_ZERO_PATTERNS,
  CUSTOMER_ZERO_RECIPES,
  CUSTOMER_ZERO_NEXT_STEPS,
  CUSTOMER_ZERO_PRINCIPLES,
} from '../../data/customer-zero'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

const PILLAR_COLORS: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  enrich:   { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', gradient: 'from-amber-500 to-orange-500' },
  reshape:  { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-500' },
  reinvent: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', gradient: 'from-blue-500 to-indigo-500' },
  bend:     { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', gradient: 'from-violet-500 to-purple-500' },
}

const DEPT_ICONS: Record<string, string> = {
  'dept-change-adoption': '🚀', 'dept-css': '🎧', 'dept-developer': '💻',
  'dept-it': '🖥️', 'dept-legal': '⚖️', 'dept-marketing': '📢',
  'dept-operations': '⚙️', 'dept-responsible-ai': '🛡️', 'dept-sales': '💰',
  'dept-supply-chain': '📦',
}

export default function StepCustomerZero({ wizard }: WizardProps) {
  const { prevStep, nextStep, data, updateData } = wizard
  const [expandedDept, setExpandedDept] = useState<string | null>(null)

  const toggleLiked = (ucId: string) => {
    const prev = data.czLikedUseCaseIds ?? []
    updateData({
      czLikedUseCaseIds: prev.includes(ucId)
        ? prev.filter(id => id !== ucId)
        : [...prev, ucId],
    })
  }

  // Compute active pillar IDs from selected challenges
  const activePillarIds = useMemo(() => {
    const ids = new Set<string>()
    for (const cId of data.selectedChallengeIds) {
      const ch = CHALLENGES.find(c => c.id === cId)
      if (ch) ids.add(ch.pillarId)
    }
    return ids
  }, [data.selectedChallengeIds])

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* ━━ Header ━━ */}
      <div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">🔒 NDA Protected</p>
        <h2 className="text-2xl font-bold text-text mt-1">Microsoft's AI Transformation Story</h2>
        <p className="text-text-secondary mt-1">
          How Microsoft transformed itself with AI — and what your customer can learn from it.
        </p>
      </div>

      {/* ━━ 1. WHY NOW — Market Urgency ━━ */}
      <section>
        <SectionLabel number={1} title="Why Now" icon="⚡" />
        <div className="grid grid-cols-3 gap-3 mt-3">
          <UrgencyCard value="82%" label="of leaders say AI is a make-or-break moment" source="2025 Work Trends Index" />
          <UrgencyCard value="1.3B" label="AI agents projected by 2028" source="IDC, May 2025" />
          <UrgencyCard value="1 in 2" label="leaders already automating workflows with AI agents" source="2025 Work Trends Index" />
        </div>
      </section>

      {/* ━━ 2. THE FRONTIER FIRM — Framework ━━ */}
      <section>
        <SectionLabel number={2} title="The Frontier Firm Framework" icon="🏗️" />
        <p className="text-xs text-text-secondary mt-2 mb-3">
          Frontier Firms structure themselves around on-demand intelligence — powered by humans and the AI they manage.
        </p>
        <div className="grid grid-cols-4 gap-3">
          {FRONTIER_PILLARS.map((p) => {
            const style = PILLAR_COLORS[p.id]
            return (
              <div key={p.id} className={`p-3 rounded-xl ${style.bg} border ${style.border} text-center`}>
                <span className="text-2xl">{p.icon}</span>
                <p className={`text-xs font-bold ${style.text} mt-1`}>{p.name}</p>
                <p className="text-[10px] text-text-secondary">{p.subtitle}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ━━ 3. MICROSOFT'S RESULTS — The credibility punch ━━ */}
      <section>
        <SectionLabel number={3} title="Microsoft Did It" icon="📊" />
        <p className="text-xs text-text-secondary mt-2 mb-3">
          Internal results from ~100 case studies across 60,000+ employees.
        </p>

        {/* Headline stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <StatCard value="68%" label="Daily Active Users" color="bg-blue-50 text-blue-700" />
          <StatCard value="$63M" label="Influenced Pipeline" color="bg-emerald-50 text-emerald-700" />
          <StatCard value="+9.4%" label="Revenue per Seller" color="bg-amber-50 text-amber-700" />
          <StatCard value="~60K" label="Employees Using AI" color="bg-violet-50 text-violet-700" />
        </div>

        {/* Use cases grouped by pillar */}
        {FRONTIER_PILLARS.map((pillar) => {
          const style = PILLAR_COLORS[pillar.id]
          const ucs = CUSTOMER_ZERO_USE_CASES.filter((uc) => uc.pillar === pillar.id)
          if (ucs.length === 0) return null
          return (
            <div key={pillar.id} className={`rounded-xl ${style.bg} border ${style.border} p-4 mb-3`}>
              <p className={`text-[10px] font-bold ${style.text} uppercase tracking-wider mb-2`}>
                {pillar.icon} {pillar.fullName}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {ucs.map((uc) => {
                  const liked = (data.czLikedUseCaseIds ?? []).includes(uc.id)
                  return (
                    <button key={uc.id} onClick={() => toggleLiked(uc.id)}
                      className={`p-2 rounded-lg text-left transition-all ${liked
                        ? 'bg-white ring-2 ring-primary shadow-sm'
                        : 'bg-white/70 hover:bg-white/90'}`}>
                      <div className="flex items-start justify-between gap-1">
                        <p className="text-xs font-bold text-text">{uc.name}</p>
                        <span className={`text-sm flex-shrink-0 transition-transform ${liked ? 'scale-110' : 'opacity-40'}`}>
                          {liked ? '💡' : '○'}
                        </span>
                      </div>
                      {uc.metrics.map((m, i) => (
                        <p key={i} className="text-[10px] text-primary font-medium mt-0.5">📈 {m}</p>
                      ))}
                      {liked && (
                        <p className="text-[9px] text-primary font-semibold mt-1">✓ Customer interested — will boost related use cases</p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
        <p className="text-[9px] text-gray-400 italic">
          *Figures based on internal telemetry data. Microsoft makes no warranties, express, implied or statutory.
        </p>
      </section>

      {/* ━━ 4. THREE PATTERNS — AI Adoption Maturity ━━ */}
      <section>
        <SectionLabel number={4} title="Three AI Adoption Patterns" icon="🔄" />
        <p className="text-xs text-text-secondary mt-2 mb-3">
          Microsoft found these three patterns across all departments — look for them in your customer's use cases.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {CUSTOMER_ZERO_PATTERNS.map((p) => (
            <div key={p.id} className="p-4 rounded-xl bg-violet-50 border border-violet-100 text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center mx-auto">
                {p.level}
              </div>
              <p className="text-xs font-bold text-text mt-2">{p.name}</p>
              <p className="text-[10px] text-text-secondary mt-1 leading-snug">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━ 5. THREE RECIPES — Transformation Approaches ━━ */}
      <section>
        <SectionLabel number={5} title="Three Transformation Recipes" icon="🧪" />
        <p className="text-xs text-text-secondary mt-2 mb-3">
          Informed by nearly 100 internal case studies — three proven approaches to AI transformation.
        </p>
        <div className="space-y-2">
          {CUSTOMER_ZERO_RECIPES.map((r, i) => (
            <div key={r.id} className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-text">{r.name}</p>
                <p className="text-xs text-text-secondary mt-0.5">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━ 6. GO DEEPER — Department Chapters ━━ */}
      <section>
        <SectionLabel number={6} title="Go Deeper — Department Chapters" icon="📋" />
        <p className="text-xs text-text-secondary mt-2 mb-3">
          Pick the departments most relevant to your customer. Each has detailed use cases, metrics, and tools.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {CUSTOMER_ZERO_DEPARTMENTS.map((dept) => {
            const isExpanded = expandedDept === dept.id
            const isRelevant = activePillarIds.size > 0 && dept.pillarIds.some(p => activePillarIds.has(p))
            return (
              <button
                key={dept.id}
                onClick={() => setExpandedDept(isExpanded ? null : dept.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isExpanded ? 'border-primary bg-primary/5 shadow-md col-span-2'
                  : isRelevant ? 'border-primary/40 bg-primary/5 shadow-sm hover:border-primary/60 ring-1 ring-primary/20'
                  : 'border-gray-100 bg-white shadow-sm hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{DEPT_ICONS[dept.id] ?? '📋'}</span>
                  <p className="text-xs font-bold text-text flex-1">{dept.name}</p>
                  {isRelevant && !isExpanded && (
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">
                      Relevant
                    </span>
                  )}
                  <span className="text-[9px] text-gray-400">{dept.useCases.length} UCs</span>
                  <span className="text-text-secondary text-sm">{isExpanded ? '▾' : '▸'}</span>
                </div>
                {!isExpanded && dept.headlineMetrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="flex items-baseline gap-1.5 mt-1 ml-7">
                    <span className="text-xs font-bold text-primary">{m.value}</span>
                    <span className="text-[10px] text-text-secondary">{m.metric}</span>
                  </div>
                ))}
                {isExpanded && (
                  <div className="mt-3 space-y-2 ml-7" onClick={(e) => e.stopPropagation()}>
                    <p className="text-[11px] text-text-secondary">{dept.description}</p>
                    {dept.headlineMetrics.map((m, i) => (
                      <div key={i} className="flex items-baseline gap-1.5">
                        <span className="text-xs font-bold text-primary">{m.value}</span>
                        <span className="text-[10px] text-text-secondary">{m.metric}</span>
                      </div>
                    ))}
                    <div className="space-y-1.5 mt-2">
                      {dept.useCases.map((uc, i) => (
                        <div key={i} className="p-2 rounded-lg bg-gray-50">
                          <p className="text-[11px] font-semibold text-text">{uc.name}</p>
                          {uc.metrics.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {uc.metrics.map((m, j) => (
                                <span key={j} className="text-[9px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                  {m.value} — {m.metric}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {dept.quote && (
                      <blockquote className="text-[11px] text-text-secondary italic border-l-2 border-primary/30 pl-3 mt-2">
                        "{dept.quote}"
                      </blockquote>
                    )}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* ━━ 7. NEXT STEPS — CEO-Level Actions ━━ */}
      <section>
        <SectionLabel number={7} title="Recommended Next Steps" icon="🎯" />
        <p className="text-xs text-text-secondary mt-2 mb-3">
          Six CEO-level actions from Microsoft's transformation playbook.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CUSTOMER_ZERO_NEXT_STEPS.map((step, i) => (
            <div key={step.id} className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-xs font-bold text-text">{step.title}</p>
              </div>
              <p className="text-[10px] text-text-secondary leading-snug ml-8">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━ Transformation Principles (bonus — collapsed) ━━ */}
      <details className="rounded-xl border border-gray-100 bg-gray-50/50">
        <summary className="px-4 py-3 text-xs font-semibold text-text cursor-pointer hover:bg-gray-50">
          📖 Digital → AI Transformation Principles (bonus)
        </summary>
        <div className="px-4 pb-4 space-y-2">
          {CUSTOMER_ZERO_PRINCIPLES.map((p) => (
            <div key={p.id} className="flex gap-3 text-[11px]">
              <div className="flex-1 p-2 rounded-lg bg-gray-100">
                <p className="text-[9px] text-gray-400 font-semibold uppercase">Digital</p>
                <p className="text-text-secondary">{p.digital}</p>
              </div>
              <span className="self-center text-gray-300">→</span>
              <div className="flex-1 p-2 rounded-lg bg-primary/5">
                <p className="text-[9px] text-primary font-semibold uppercase">AI</p>
                <p className="text-text">{p.ai}</p>
              </div>
            </div>
          ))}
        </div>
      </details>

      {/* ━━ Bridge CTA — dynamic based on customer interest ━━ */}
      {(data.czLikedUseCaseIds ?? []).length > 0 ? (
        <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">💡</span>
            <p className="text-sm font-semibold text-emerald-800">
              {(data.czLikedUseCaseIds ?? []).length} area{(data.czLikedUseCaseIds ?? []).length > 1 ? 's' : ''} resonated with the customer
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {(data.czLikedUseCaseIds ?? []).map(id => {
              const uc = CUSTOMER_ZERO_USE_CASES.find(u => u.id === id)
              if (!uc) return null
              const pillar = FRONTIER_PILLARS.find(p => p.id === uc.pillar)
              return (
                <span key={id} className="px-2.5 py-1 rounded-full bg-white/80 border border-emerald-200 text-[11px] font-medium text-emerald-800">
                  {pillar?.icon} {uc.name}
                </span>
              )
            })}
          </div>
          <p className="text-xs text-emerald-600">
            These signals will <strong>boost related use cases</strong> in the Value Story and appear in the Executive Summary.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-5 text-center">
          <p className="text-sm font-semibold text-blue-800">
            💡 Tap any use case above that resonates with the customer
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Their interest signals will boost related use cases in the Value Story.
          </p>
        </div>
      )}

      {/* ━━ Navigation ━━ */}
      <div className="flex justify-between pt-4">
        <button onClick={prevStep}
          className="px-6 py-3 rounded-[14px] border border-gray-200 text-text font-medium text-sm hover:bg-gray-50 transition-all">
          ← Back
        </button>
        <button onClick={nextStep}
          className="px-6 py-3 rounded-[14px] bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
          Continue to Use Cases →
        </button>
      </div>
    </div>
  )
}

/* ── Sub-components ─────────────────────────────────────── */

function SectionLabel({ number, title, icon }: { number: number; title: string; icon: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
        {number}
      </span>
      <span className="text-base">{icon}</span>
      <h3 className="text-sm font-bold text-text uppercase tracking-wider">{title}</h3>
    </div>
  )
}

function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className={`p-3 rounded-xl ${color} text-center`}>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] font-medium mt-0.5">{label}</p>
    </div>
  )
}

function UrgencyCard({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className="p-3 rounded-xl bg-gray-900 text-white text-center">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-[10px] text-white/70 mt-1 leading-snug">{label}</p>
      <p className="text-[9px] text-white/40 mt-1">{source}</p>
    </div>
  )
}
