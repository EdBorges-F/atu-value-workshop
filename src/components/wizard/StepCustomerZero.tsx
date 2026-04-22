import type { useWizardState } from '../../hooks/useWizardState'
import {
  CUSTOMER_ZERO_HEADLINE_PROOF_POINTS,
  CUSTOMER_ZERO_DEPARTMENTS,
  CUSTOMER_ZERO_PATTERNS,
  CUSTOMER_ZERO_RECIPES,
} from '../../data/customer-zero'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

const DEPT_ICONS: Record<string, string> = {
  'dept-change-adoption': '🚀',
  'dept-css': '🎧',
  'dept-developer': '💻',
  'dept-it': '🖥️',
  'dept-legal': '⚖️',
  'dept-marketing': '📢',
  'dept-operations': '⚙️',
  'dept-responsible-ai': '🛡️',
  'dept-sales': '💰',
  'dept-supply-chain': '📦',
}

export default function StepCustomerZero({ wizard }: WizardProps) {
  const { prevStep, nextStep } = wizard

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🔒</span>
          <h2 className="text-2xl font-bold text-text">Microsoft Customer Zero</h2>
        </div>
        <p className="text-text-secondary mt-1">
          How Microsoft transformed its own business with AI — use this to inspire bolder use case selection.
        </p>
        <p className="text-[10px] text-gray-400 mt-1">
          NDA-protected · Source: Customer Zero deck (March 2026) · ~100 case studies across {CUSTOMER_ZERO_DEPARTMENTS.length} departments
        </p>
      </div>

      {/* Headline Stats — extracted from proof points */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard value="68%" label="Daily Active Users" color="bg-blue-50 text-blue-700" />
        <StatCard value="$63M" label="Influenced Pipeline" color="bg-emerald-50 text-emerald-700" />
        <StatCard value="+9.4%" label="Revenue per Seller" color="bg-amber-50 text-amber-700" />
        <StatCard value="~60K" label="Employees Using AI" color="bg-violet-50 text-violet-700" />
      </div>

      {/* Headline Proof Points */}
      <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5">
        <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">⭐ Headline Results Across Departments</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CUSTOMER_ZERO_HEADLINE_PROOF_POINTS.map((pp, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-white/70 border border-amber-100/50">
              <p className="text-[10px] text-amber-600 font-semibold">{pp.department}</p>
              <p className="text-sm font-bold text-text">{pp.value}</p>
              <p className="text-[10px] text-text-secondary leading-snug">{pp.headlineMetric}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Adoption Patterns */}
      <div className="rounded-2xl border border-violet-100 bg-violet-50/30 p-5">
        <p className="text-xs font-bold text-violet-800 uppercase tracking-wider mb-3">🔄 Three AI Adoption Patterns</p>
        <p className="text-xs text-text-secondary mb-3">
          Microsoft found these three patterns across all departments — look for them in the customer's use cases.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {CUSTOMER_ZERO_PATTERNS.map((p) => (
            <div key={p.id} className="p-3 rounded-xl bg-white/70 border border-violet-100/50 text-center">
              <p className="text-2xl font-bold text-violet-600">{p.level}</p>
              <p className="text-xs font-bold text-text mt-1">{p.name}</p>
              <p className="text-[10px] text-text-secondary mt-1 leading-snug">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transformation Recipes */}
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5">
        <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">🧪 Transformation Recipes</p>
        <div className="space-y-2">
          {CUSTOMER_ZERO_RECIPES.map((r) => (
            <div key={r.id} className="p-3 rounded-xl bg-white/70 border border-emerald-100/50">
              <p className="text-sm font-bold text-text">{r.name}</p>
              <p className="text-xs text-text-secondary mt-0.5 leading-snug">{r.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Department Quick Cards */}
      <div>
        <p className="text-xs font-bold text-text uppercase tracking-wider mb-3">📋 Department Highlights</p>
        <div className="grid grid-cols-2 gap-3">
          {CUSTOMER_ZERO_DEPARTMENTS.map((dept) => (
            <div key={dept.id} className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-base">{DEPT_ICONS[dept.id] ?? '📋'}</span>
                <p className="text-xs font-bold text-text">{dept.name}</p>
              </div>
              <p className="text-[10px] text-text-secondary leading-snug line-clamp-2 mb-2">{dept.description}</p>
              {dept.headlineMetrics.slice(0, 2).map((m, i) => (
                <div key={i} className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-xs font-bold text-primary">{m.value}</span>
                  <span className="text-[10px] text-text-secondary">{m.metric}</span>
                </div>
              ))}
              <p className="text-[9px] text-gray-400 mt-1.5">{dept.useCases.length} use cases · {dept.headlineMetrics.length} metrics</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-5 text-center">
        <p className="text-sm font-semibold text-blue-800">
          💡 Keep these results in mind as you select use cases next
        </p>
        <p className="text-xs text-blue-600 mt-1">
          The use cases you pick can reference Customer Zero metrics in the final Value Story.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-6 py-3 rounded-[14px] border border-gray-200 text-text font-medium text-sm hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-3 rounded-[14px] bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
        >
          Continue to Use Cases →
        </button>
      </div>
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
