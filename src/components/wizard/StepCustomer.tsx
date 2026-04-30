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

const COPILOT_GATHER_PROMPT = `@Sales Agent — I'm preparing a Frontier Transformation value story for [CUSTOMER NAME]. Before you answer, do the following web research first:

Search for their official website and find the Leadership, Management Team, Executive Team, or About pages — these list the actual names of C-level executives and VPs. Also check their LinkedIn company page. If they are publicly listed, check their Investor Relations page or annual report for named executives. Do this research BEFORE answering — do not rely on CRM alone for names.

Now give me the following, combining what you found on the web with CRM data, emails, and Teams messages:

1. **Company Name** — Full account name
2. **Industry** — Primary industry (e.g., Manufacturing, Banking, Retail, Healthcare, Energy)
3. **Company Size** — Employee count estimate (under 500 / 500-2,500 / 2,500-10,000 / 10,000+)
4. **Strategic Priorities** — Their top 3-5 business priorities or transformation initiatives, using web research (Investor Relations, press releases, strategy pages) to fill gaps from internal conversations
5. **Key Challenges** — Business pain points, blockers, or pressures they face
6. **Key Stakeholders** — For each of these roles: CIO, CISO, CTO, CFO, CDO, VP of IT, VP of AI or Digital Transformation — provide the full name and title. First check CRM contacts and my emails. For any role where the name is missing or unconfirmed, look it up on their website Leadership/Team/About page or LinkedIn. Public and listed companies always have executive names published. Format each as: Name — Title (source: CRM or web). If genuinely not findable anywhere, write: Not found — [Title].

Format as plain text only — no links, no URLs, no source citations, no markdown formatting. At the end, do a sanity check for yourself: flag if anything looks contradictory or if you found information that wasn't captured above — but do NOT include this check in the output you give me.`

export default function StepCustomer({ wizard }: WizardProps) {
  const { data, updateData, nextStep, canAdvance } = wizard
  const [smartFillOpen, setSmartFillOpen] = useState(true)
  const [smartFillCollected, setSmartFillCollected] = useState(false)
  const [smartFillText, setSmartFillText] = useState(data.smartFillRaw)
  const [extraction, setExtraction] = useState<SmartFillResult | null>(null)
  const [copiedPrompt, setCopiedPrompt] = useState(false)
  const [appliedFields, setAppliedFields] = useState<Set<string>>(new Set())

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
    const fields = new Set<string>()

    if (extraction.companyName) {
      update.companyName = extraction.companyName.value as string
      conf.companyName = extraction.companyName.confidence
      fields.add('companyName')
    }
    if (extraction.industryId) {
      update.industryId = extraction.industryId.value as string
      conf.industryId = extraction.industryId.confidence
      fields.add('industryId')
    }
    if (extraction.companySize) {
      update.companySize = extraction.companySize.value as typeof data.companySize
      conf.companySize = extraction.companySize.confidence
      fields.add('companySize')
    }
    if (extraction.priorities) {
      update.priorities = extraction.priorities.value as string
      conf.priorities = extraction.priorities.confidence
      fields.add('priorities')
    }
    // Apply challenges and use cases (these are additive, not conflicting with industry clear)
    if (extraction.suggestedChallengeIds) {
      update.selectedChallengeIds = extraction.suggestedChallengeIds.value as string[]
      ;(conf as Record<string, string>).challenges = extraction.suggestedChallengeIds.confidence
      fields.add('challenges')
    }
    if (extraction.suggestedUseCaseIds) {
      update.selectedUseCaseIds = extraction.suggestedUseCaseIds.value as string[]
      fields.add('useCases')
    }
    if (extraction.contacts) {
      update.crmContacts = extraction.contacts.value as { name: string; title: string; email?: string }[]
      fields.add('contacts')
    }
    update.confidence = conf
    updateData(update)
    setAppliedFields(fields)
    setSmartFillOpen(false)
    setSmartFillCollected(true)
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

        {/* Collected state — shown after Apply All */}
        {smartFillCollected ? (
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              <div>
                <p className="text-sm font-semibold text-primary">Profile loaded via Copilot</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                  {data.companyName && <span className="text-[11px] text-text-secondary">{data.companyName}</span>}
                  {data.industryId && <span className="text-[11px] text-text-secondary">{INDUSTRIES.find(i => i.id === data.industryId)?.name ?? data.industryId}</span>}
                  {data.priorities && <span className="text-[11px] text-text-secondary">{data.priorities.split('\n').filter(Boolean).length} priorities</span>}
                  {data.crmContacts.length > 0 && <span className="text-[11px] text-text-secondary">{data.crmContacts.length} contacts</span>}
                </div>
              </div>
            </div>
            <button
              onClick={() => { setSmartFillCollected(false); setSmartFillOpen(true); setSmartFillText(''); setExtraction(null) }}
              className="text-[11px] text-text-secondary hover:text-primary px-2 py-1 rounded-md
                         hover:bg-white/60 transition-all"
            >
              Re-run ↺
            </button>
          </div>
        ) : (
          <>
        <div className="flex items-center justify-between px-5 py-3">
          <button
            onClick={() => setSmartFillOpen(!smartFillOpen)}
            aria-expanded={smartFillOpen}
            aria-controls="smart-fill-panel"
            className="flex items-center gap-2 text-left hover:opacity-80 transition-all"
          >
            <span className="text-lg">🚀</span>
            <span className="text-sm font-semibold text-primary">Start Here</span>
            <span className="text-xs text-text-secondary">Paste your Copilot account summary to auto-fill</span>
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
          <div id="smart-fill-panel" className="px-5 pb-5 space-y-3">
            {/* 3-step visual guide */}
            <div className="flex items-center gap-1 text-[10px] font-medium text-text-secondary -mt-1 mb-1">
              <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-primary">
                <span className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[9px] font-bold">1</span>
                Copy prompt
              </span>
              <span className="text-gray-300">→</span>
              <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100">
                <span className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center text-[9px] font-bold">2</span>
                Paste response
              </span>
              <span className="text-gray-300">→</span>
              <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100">
                <span className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center text-[9px] font-bold">3</span>
                Extract &amp; apply
              </span>
            </div>
            {/* Copilot Prompt to gather data */}
            <div className="p-3 rounded-[10px] bg-primary/5 border border-primary/10 space-y-2">
              <p className="text-xs font-medium text-primary">
                Step 1: Copy this prompt → Paste into Copilot → Get your account summary
              </p>
              <p className="text-[11px] text-text/60">
                Only replace <span className="font-semibold text-primary">[CUSTOMER NAME]</span> before pasting — everything else is ready
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
          </>
        )}
      </div>

      {/* Smart Fill Verification Banner */}
      {appliedFields.size > 0 && (
        <div className="rounded-[16px] border border-primary/20 bg-primary/5 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              <div>
                <p className="text-sm font-semibold text-primary">
                  Smart Fill applied {appliedFields.size} field{appliedFields.size > 1 ? 's' : ''}
                </p>
                <p className="text-[11px] text-text-secondary mt-0.5">
                  Review the highlighted fields below — edit anything that needs adjusting
                </p>
              </div>
            </div>
            <button
              onClick={() => setAppliedFields(new Set())}
              className="text-[10px] text-text-secondary hover:text-text px-2 py-1 rounded-md
                         hover:bg-white/50 transition-all"
            >
              Dismiss
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {appliedFields.has('companyName') && <AppliedTag label="Company Name" value={data.companyName} />}
            {appliedFields.has('industryId') && <AppliedTag label="Industry" value={INDUSTRIES.find(i => i.id === data.industryId)?.name ?? data.industryId} />}
            {appliedFields.has('companySize') && <AppliedTag label="Size" value={SIZE_OPTIONS.find(s => s.value === data.companySize)?.label ?? data.companySize} />}
            {appliedFields.has('priorities') && <AppliedTag label="Priorities" value={data.priorities.slice(0, 50) + (data.priorities.length > 50 ? '…' : '')} />}
            {appliedFields.has('challenges') && <AppliedTag label="Challenges" value={`${data.selectedChallengeIds.length} selected`} />}
            {appliedFields.has('useCases') && <AppliedTag label="Use Cases" value={`${data.selectedUseCaseIds.length} matched`} />}
            {appliedFields.has('contacts') && <AppliedTag label="Stakeholders" value={`${data.crmContacts.length} contacts`} />}
          </div>
        </div>
      )}

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
      <div className={appliedFields.has('companyName') ? 'ring-1 ring-primary/20 rounded-[16px] p-3 bg-primary/[0.02]' : ''}>
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
      <div className={appliedFields.has('industryId') ? 'ring-1 ring-primary/20 rounded-[16px] p-3 bg-primary/[0.02]' : ''}>
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
              aria-pressed={data.industryId === ind.id}
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
      <div className={appliedFields.has('companySize') ? 'ring-1 ring-primary/20 rounded-[16px] p-3 bg-primary/[0.02]' : ''}>
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
              aria-pressed={data.companySize === size.value}
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
      <div className={appliedFields.has('priorities') ? 'ring-1 ring-primary/20 rounded-[16px] p-3 bg-primary/[0.02]' : ''}>
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

      {/* NDA / Customer Zero Toggle */}
      <div className="rounded-[16px] border border-gray-200 bg-gray-50/50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg">🔒</span>
            <div>
              <p className="text-sm font-medium text-text">Customer Zero Access</p>
              <p className="text-[11px] text-text-secondary leading-snug mt-0.5">
                Enable Microsoft's internal AI transformation data (NDA required)
              </p>
            </div>
          </div>
          <button
            onClick={() => updateData({ ndaConfirmed: !data.ndaConfirmed })}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0
              ${data.ndaConfirmed ? 'bg-primary' : 'bg-gray-300'}`}
            role="switch"
            aria-checked={data.ndaConfirmed}
            aria-label="Enable NDA-protected content"
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200
              ${data.ndaConfirmed ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>
        {data.ndaConfirmed && (
          <div className="mt-3 p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
            <p className="text-[11px] text-emerald-700">
              ✅ NDA confirmed — Customer Zero inspiration step will appear next.
            </p>
            <a
              href="https://contracts.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-primary hover:underline mt-1 inline-block"
            >
              Verify NDA in Legal Contracting Experience (LCE) ↗
            </a>
          </div>
        )}
        {!data.ndaConfirmed && (
          <p className="text-[10px] text-gray-400 mt-2">
            <a href="https://contracts.microsoft.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gray-500">
              Check NDA status in LCE ↗
            </a>
          </p>
        )}
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

function AppliedTag({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-primary/10 text-[11px]">
      <span className="font-medium text-primary">{label}:</span>
      <span className="text-text truncate max-w-[140px]">{value}</span>
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
