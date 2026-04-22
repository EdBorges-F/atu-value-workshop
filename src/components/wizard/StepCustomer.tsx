import { useState } from 'react'
import type { useWizardState } from '../../hooks/useWizardState'
import { INDUSTRIES } from '../../data/industries'
import { extractSmartFill, type SmartFillResult } from '../../lib/smartFillEngine'

type WizardProps = { wizard: ReturnType<typeof useWizardState> }

const SIZE_OPTIONS = [
  { value: 'small', label: '< 500 employees', desc: '' },
  { value: 'mid', label: '500 – 2,500 employees', desc: '' },
  { value: 'large', label: '2,500 – 10,000 employees', desc: '' },
  { value: 'enterprise', label: '10,000+ employees', desc: '' },
] as const

const CONFIDENCE_BADGE: Record<string, { label: string; color: string }> = {
  high: { label: 'High', color: 'bg-green-50 text-green-700' },
  medium: { label: 'Medium', color: 'bg-amber-50 text-amber-700' },
  low: { label: 'Low', color: 'bg-red-50 text-red-600' },
}

const SAMPLE_PASTE = `Account: Contoso Manufacturing
Industry: Manufacturing / Industrial Materials
Contoso Manufacturing is a global enterprise with 5,000+ employees, headquartered in Europe.
Revenue: €2.5B+, operating 80+ plants and 50+ facilities worldwide.

Strategic priorities:
- Operational efficiency and yield optimization across production facilities
- Predictive maintenance to reduce unplanned downtime in heavy equipment
- Supply chain visibility and demand forecasting for raw materials
- Sustainability: reducing carbon emissions in energy-intensive processes
- Digital transformation of legacy plant systems
- Worker safety and frontline enablement across distributed sites

Key challenges: They struggle with fragmented data across plants, aging equipment requiring costly maintenance, and pressure to meet ESG targets while maintaining production output.`

const COPILOT_GATHER_PROMPT = `@Sales Agent — I'm preparing a Frontier Transformation value story for [CUSTOMER NAME]. Combine CRM data, my emails, Teams messages, and public web information about this company. Give me:

1. **Company Name** — Full account name
2. **Industry** — Primary industry (e.g., Manufacturing, Banking, Retail, Healthcare, Energy)
3. **Company Size** — Employee count estimate (under 500 / 500-2,500 / 2,500-10,000 / 10,000+)
4. **Strategic Priorities** — Their top 3-5 business priorities or transformation initiatives based on conversations and public sources
5. **Key Challenges** — Business pain points, blockers, or pressures they face
6. **Key Stakeholders** — Senior decision-makers involved in AI or digital transformation (Name, Title if available). Check CRM contacts, recent emails, and meeting attendees for CTO, CIO, CDO, CISO, CFO, or VP-level sponsors

Format as plain text only — no links, no URLs, no source citations, no markdown formatting. At the end, do a sanity check for yourself: flag if anything looks contradictory or if you found information that wasn't captured above — but do NOT include this check in the output you give me.`

export default function StepCustomer({ wizard }: WizardProps) {
  const { data, updateData, nextStep, canAdvance } = wizard
  const [smartFillOpen, setSmartFillOpen] = useState(false)
  const [smartFillText, setSmartFillText] = useState(data.smartFillRaw)
  const [extraction, setExtraction] = useState<SmartFillResult | null>(null)
  const [copiedPrompt, setCopiedPrompt] = useState(false)

  const handleExtract = () => {
    if (!smartFillText.trim()) return
    const result = extractSmartFill(smartFillText)
    setExtraction(result)
    updateData({ smartFillRaw: smartFillText })
  }

  const applyField = (field: keyof SmartFillResult) => {
    if (!extraction) return
    const item = extraction[field]
    if (!item) return

    if (field === 'companyName') {
      updateData({
        companyName: item.value as string,
        confidence: { ...data.confidence, companyName: item.confidence },
      })
    } else if (field === 'industryId') {
      updateData({
        industryId: item.value as string,
        selectedChallengeIds: [],
        selectedUseCaseIds: [],
        confidence: { ...data.confidence, industryId: item.confidence },
      })
    } else if (field === 'companySize') {
      updateData({
        companySize: item.value as typeof data.companySize,
        confidence: { ...data.confidence, companySize: item.confidence },
      })
    } else if (field === 'priorities') {
      updateData({
        priorities: item.value as string,
        confidence: { ...data.confidence, priorities: item.confidence },
      })
    } else if (field === 'suggestedChallengeIds') {
      updateData({
        selectedChallengeIds: [...new Set([...data.selectedChallengeIds, ...(item.value as string[])])],
        confidence: { ...data.confidence, challenges: item.confidence },
      })
    } else if (field === 'suggestedUseCaseIds') {
      updateData({
        selectedUseCaseIds: [...new Set([...data.selectedUseCaseIds, ...(item.value as string[])])],
      })
    } else if (field === 'contacts') {
      updateData({
        crmContacts: (item.value as { name: string; title: string; email?: string }[]),
      })
    }
  }

  const applyAll = () => {
    if (!extraction) return
    const update: Partial<typeof data> = {}
    const conf = { ...data.confidence }

    if (extraction.companyName) {
      update.companyName = extraction.companyName.value as string
      conf.companyName = extraction.companyName.confidence
    }
    if (extraction.industryId) {
      update.industryId = extraction.industryId.value as string
      conf.industryId = extraction.industryId.confidence
    }
    if (extraction.companySize) {
      update.companySize = extraction.companySize.value as typeof data.companySize
      conf.companySize = extraction.companySize.confidence
    }
    if (extraction.priorities) {
      update.priorities = extraction.priorities.value as string
      conf.priorities = extraction.priorities.confidence
    }
    // Apply challenges and use cases (these are additive, not conflicting with industry clear)
    if (extraction.suggestedChallengeIds) {
      update.selectedChallengeIds = extraction.suggestedChallengeIds.value as string[]
      ;(conf as Record<string, string>).challenges = extraction.suggestedChallengeIds.confidence
    }
    if (extraction.suggestedUseCaseIds) {
      update.selectedUseCaseIds = extraction.suggestedUseCaseIds.value as string[]
    }
    if (extraction.contacts) {
      update.crmContacts = extraction.contacts.value as { name: string; title: string; email?: string }[]
    }
    update.confidence = conf
    updateData(update)
  }

  const extractedCount = extraction
    ? Object.values(extraction).filter((v) => v !== null).length
    : 0

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-text">Customer Profile</h2>
        <p className="text-text-secondary mt-1">
          Tell us about the customer you're preparing for
        </p>
      </div>

      {/* Smart Fill Panel */}
      <div className="rounded-[20px] border border-primary/20 bg-primary/[0.02] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <button
            onClick={() => setSmartFillOpen(!smartFillOpen)}
            className="flex items-center gap-2 text-left hover:opacity-80 transition-all"
          >
            <span className="text-lg">⚡</span>
            <span className="text-sm font-semibold text-primary">Smart Fill</span>
            <span className="text-xs text-text-secondary">Paste account notes to auto-populate</span>
            <span className="text-text-secondary text-sm">{smartFillOpen ? '▾' : '▸'}</span>
          </button>
          <a
            href="https://m365.cloud.microsoft/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                       bg-primary/10 text-primary hover:bg-primary/20 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M10 2.5a.75.75 0 0 1 .712.513l1.537 4.613 4.613 1.537a.75.75 0 0 1 0 1.424l-4.613 1.537-1.537 4.613a.75.75 0 0 1-1.424 0L7.75 12.124l-4.613-1.537a.75.75 0 0 1 0-1.424l4.613-1.537 1.537-4.613A.75.75 0 0 1 10 2.5z"/>
            </svg> Open Copilot
          </a>
        </div>

        {smartFillOpen && (
          <div className="px-5 pb-5 space-y-3">
            {/* Copilot Prompt to gather data */}
            <div className="p-3 rounded-[10px] bg-primary/5 border border-primary/10 space-y-2">
              <p className="text-xs font-medium text-primary">
                Step 1: Copy this prompt → Paste into Copilot → Get your account summary
              </p>
              <div className="relative">
                <pre className="text-[11px] text-text bg-white p-3 rounded-lg border border-gray-100 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
{COPILOT_GATHER_PROMPT}
                </pre>
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(COPILOT_GATHER_PROMPT)
                    setCopiedPrompt(true)
                    setTimeout(() => setCopiedPrompt(false), 2000)
                  }}
                  className="absolute top-2 right-2 px-2 py-1 rounded-md text-[10px] font-medium
                             bg-primary text-white hover:bg-primary-hover transition-all"
                >
                  {copiedPrompt ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-[11px] text-text-secondary">
                Step 2: Paste Copilot's response here ↓
              </p>
            </div>

            {/* Paste area */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-text flex items-center gap-2">
                📋 Copilot Response
                <button
                  onClick={() => setSmartFillText(SAMPLE_PASTE)}
                  className="text-[10px] text-primary hover:underline font-normal"
                >
                  or try sample (Contoso)
                </button>
              </label>
              <textarea
                id="smart-fill-paste"
                value={smartFillText}
                onChange={(e) => setSmartFillText(e.target.value)}
                placeholder={"Paste what Copilot returned here...\n\nCompany Name: ...\nIndustry: ...\nCompany Size: ...\nStrategic Priorities: ...\nKey Challenges: ..."}
                rows={7}
                className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-white text-sm text-text
                           placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30
                           focus:border-primary transition-all resize-none font-mono"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleExtract}
                disabled={!smartFillText.trim()}
                className="px-4 py-2 rounded-[10px] bg-primary text-white text-sm font-medium
                           hover:bg-primary-hover transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Extract Fields
              </button>
              {extraction && extractedCount > 0 && (
                <button
                  onClick={applyAll}
                  className="px-4 py-2 rounded-[10px] border border-primary text-primary text-sm font-medium
                             hover:bg-primary/5 transition-all"
                >
                  Apply All ({extractedCount} found)
                </button>
              )}
            </div>

            {/* Extraction Results */}
            {extraction && (
              <div className="space-y-2 pt-2">
                {extraction.companyName && (
                  <ExtractionRow
                    label="Company Name"
                    value={extraction.companyName.value as string}
                    confidence={extraction.companyName.confidence}
                    onApply={() => applyField('companyName')}
                    applied={data.companyName === extraction.companyName.value}
                  />
                )}
                {extraction.industryId && (
                  <ExtractionRow
                    label="Industry"
                    value={INDUSTRIES.find((i) => i.id === (extraction.industryId!.value as string))?.name ?? extraction.industryId.value as string}
                    confidence={extraction.industryId.confidence}
                    onApply={() => applyField('industryId')}
                    applied={data.industryId === extraction.industryId.value}
                  />
                )}
                {extraction.companySize && (
                  <ExtractionRow
                    label="Company Size"
                    value={SIZE_OPTIONS.find((s) => s.value === extraction.companySize!.value)?.label ?? String(extraction.companySize.value)}
                    confidence={extraction.companySize.confidence}
                    onApply={() => applyField('companySize')}
                    applied={data.companySize === extraction.companySize.value}
                  />
                )}
                {extraction.priorities && (
                  <ExtractionRow
                    label="Priorities"
                    value={(extraction.priorities.value as string).slice(0, 80) + ((extraction.priorities.value as string).length > 80 ? '...' : '')}
                    confidence={extraction.priorities.confidence}
                    onApply={() => applyField('priorities')}
                    applied={data.priorities === extraction.priorities.value}
                  />
                )}
                {extraction.suggestedChallengeIds && (
                  <ExtractionRow
                    label="Challenges"
                    value={`${(extraction.suggestedChallengeIds.value as string[]).length} challenge(s) matched`}
                    confidence={extraction.suggestedChallengeIds.confidence}
                    onApply={() => applyField('suggestedChallengeIds')}
                    applied={(extraction.suggestedChallengeIds.value as string[]).every((id) => data.selectedChallengeIds.includes(id))}
                  />
                )}
                {extraction.suggestedUseCaseIds && (
                  <ExtractionRow
                    label="Use Cases"
                    value={`${(extraction.suggestedUseCaseIds.value as string[]).length} use case(s) matched to priorities`}
                    confidence={extraction.suggestedUseCaseIds.confidence}
                    onApply={() => applyField('suggestedUseCaseIds')}
                    applied={(extraction.suggestedUseCaseIds.value as string[]).every((id) => data.selectedUseCaseIds.includes(id))}
                  />
                )}
                {extraction.contacts && (extraction.contacts.value as { name: string; title: string }[]).length > 0 && (
                  <ExtractionRow
                    label="Stakeholders"
                    value={`${(extraction.contacts.value as { name: string; title: string }[]).length} contact(s) found`}
                    confidence={extraction.contacts.confidence}
                    onApply={() => applyField('contacts')}
                    applied={data.crmContacts.length > 0 && (extraction.contacts.value as { name: string; title: string }[]).every(c => data.crmContacts.some(dc => dc.name === c.name))}
                  />
                )}
                {extractedCount === 0 && (
                  <p className="text-sm text-text-secondary italic">
                    No fields could be extracted. Try pasting more detailed account notes.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Key Stakeholders Card (from Smart Fill) */}
      {data.crmContacts.length > 0 && (
        <div className="rounded-[16px] border border-emerald-100 bg-emerald-50/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">👥</span>
            <span className="text-xs font-semibold text-emerald-800">Key Stakeholders</span>
            <span className="text-[10px] text-emerald-600">({data.crmContacts.length} contacts)</span>
          </div>
          <div className="space-y-1">
            {data.crmContacts.map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-emerald-900">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="font-medium">{c.name}</span>
                <span className="text-emerald-600">— {c.title}</span>
                {c.email && <span className="text-emerald-500 text-[10px]">({c.email})</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Company Name */}
      <div>
        <label htmlFor="company-name" className="block text-sm font-medium text-text mb-2">
          Company Name *
          {data.confidence.companyName && (
            <ConfidenceBadge level={data.confidence.companyName} />
          )}
        </label>
        <input
          id="company-name"
          type="text"
          value={data.companyName}
          onChange={(e) => updateData({ companyName: e.target.value })}
          placeholder="e.g., Contoso"
          className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-white text-text 
                     placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 
                     focus:border-primary transition-all"
        />
      </div>

      {/* Industry Grid */}
      <div>
        <label className="block text-sm font-medium text-text mb-3">
          Industry *
          {data.confidence.industryId && (
            <ConfidenceBadge level={data.confidence.industryId} />
          )}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => {
                if (data.industryId !== ind.id) {
                  updateData({ industryId: ind.id, selectedChallengeIds: [], selectedUseCaseIds: [] })
                }
              }}
              className={`flex flex-col items-center gap-2 p-4 rounded-[20px] border-2 transition-all duration-200
                ${data.industryId === ind.id
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-gray-100 bg-white hover:border-primary/30 hover:shadow-md'
                }`}
            >
              <span className="text-2xl">{ind.icon}</span>
              <span className="text-xs font-medium text-center leading-tight">{ind.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Company Size */}
      <div>
        <label className="block text-sm font-medium text-text mb-3">
          Number of Employees
          {data.confidence.companySize && (
            <ConfidenceBadge level={data.confidence.companySize} />
          )}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SIZE_OPTIONS.map((size) => (
            <button
              key={size.value}
              onClick={() => updateData({ companySize: size.value })}
              className={`px-4 py-3 rounded-[14px] border-2 text-center transition-all
                ${data.companySize === size.value
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-100 bg-white hover:border-primary/30 text-text'
                }`}
            >
              <div className="text-sm font-medium">{size.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Strategic Priorities */}
      <div>
        <label htmlFor="priorities" className="block text-sm font-medium text-text mb-2">
          Strategic Priorities
          {data.confidence.priorities && (
            <ConfidenceBadge level={data.confidence.priorities} />
          )}
        </label>
        <textarea
          id="priorities"
          value={data.priorities}
          onChange={(e) => updateData({ priorities: e.target.value })}
          placeholder="What are this customer's top business priorities? (e.g., operational efficiency, digital transformation, sustainability)"
          rows={3}
          className="w-full px-4 py-3 rounded-[14px] border border-gray-200 bg-white text-text
                     placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 
                     focus:border-primary transition-all resize-none"
        />
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={nextStep}
          disabled={!canAdvance()}
          className="px-6 py-3 rounded-[14px] bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-all disabled:opacity-40 disabled:cursor-not-allowed
                     shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}

/* ── Sub-components ────────────────────────────────────── */

function ConfidenceBadge({ level }: { level: 'high' | 'medium' | 'low' }) {
  const badge = CONFIDENCE_BADGE[level]
  return (
    <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-medium ${badge.color}`}>
      ⚡ {badge.label}
    </span>
  )
}

function ExtractionRow({
  label,
  value,
  confidence,
  onApply,
  applied,
}: {
  label: string
  value: string
  confidence: 'high' | 'medium' | 'low'
  onApply: () => void
  applied: boolean
}) {
  const badge = CONFIDENCE_BADGE[confidence]
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-white border border-gray-100">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-xs font-medium text-text-secondary w-24 flex-shrink-0">{label}</span>
        <span className="text-xs text-text truncate">{value}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium flex-shrink-0 ${badge.color}`}>
          {badge.label}
        </span>
      </div>
      <button
        onClick={onApply}
        disabled={applied}
        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20
                   transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
      >
        {applied ? '✓ Applied' : 'Apply'}
      </button>
    </div>
  )
}
