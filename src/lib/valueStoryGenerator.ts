import type { WizardData } from '../hooks/useWizardState'
import { INDUSTRIES } from '../data/industries'
import { CHALLENGES } from '../data/challenges'
import { USE_CASES } from '../data/use-cases'
import { CUSTOMER_STORIES } from '../data/customer-stories'
import { HERO_USE_CASES } from '../data/hero-use-cases'
import { INDUSTRY_CONTEXTS } from '../data/industry-context'
import { INDUSTRY_BENCHMARKS, USE_CASE_ROI_TEMPLATES, MARKET_STATS, GLOBAL_EVIDENCE } from '../data/global-ai-evidence'
import type { UseCaseROITemplate } from '../data/global-ai-evidence'
import type { CustomerStory } from '../data/types'

// ─── Frontier Transformation Pillars ─────────────────────────
// Under the "Intelligence & Trust" umbrella
export interface FrontierPillar {
  id: string
  name: string
  subtitle: string
  fullName: string
  icon: string
  keywords: string[]
}

export const FRONTIER_PILLARS: FrontierPillar[] = [
  {
    id: 'enrich',
    name: 'Enrich',
    subtitle: 'Employee Experiences',
    fullName: 'Enrich Employee Experiences',
    icon: '🧠',
    keywords: [
      'employee', 'workforce', 'talent', 'skill', 'training', 'productivity',
      'collaboration', 'knowledge', 'onboarding', 'frontline', 'worker',
      'enablement', 'experience', 'work', 'human', 'people', 'upskill',
      'capability', 'culture', 'engagement', 'wellbeing',
    ],
  },
  {
    id: 'reshape',
    name: 'Reshape',
    subtitle: 'Business Processes',
    fullName: 'Reshape Business Processes',
    icon: '⚙️',
    keywords: [
      'process', 'automat', 'efficien', 'operation', 'workflow', 'streamline',
      'supply chain', 'manufactur', 'maintenance', 'quality', 'compliance',
      'governance', 'cost', 'consolidat', 'legacy', 'modern', 'scale',
      'infrastructure', 'platform', 'data', 'analytics', 'integration',
    ],
  },
  {
    id: 'reinvent',
    name: 'Reinvent',
    subtitle: 'Customer Engagement',
    fullName: 'Reinvent Customer Engagement',
    icon: '🚀',
    keywords: [
      'customer', 'revenue', 'growth', 'market', 'engagement', 'experience',
      'personali', 'loyalty', 'sales', 'commerce', 'channel', 'service',
      'support', 'satisfaction', 'retention', 'acquisition', 'brand',
      'outreach', 'demand', 'relationship',
    ],
  },
  {
    id: 'bend',
    name: 'Bend the Curve',
    subtitle: 'Innovation',
    fullName: 'Bend the Curve on Innovation',
    icon: '💡',
    keywords: [
      'innovat', 'speed', 'agil', 'ai-first', 'transform', 'new product',
      'r&d', 'research', 'experiment', 'disrupt', 'accelerat', 'time-to-market',
      'digital twin', 'autonomous', 'agent', 'generative', 'frontier',
      'reinvent', 'breakthrough', 'next-gen',
    ],
  },
]

export const INTELLIGENCE_FOUNDATION = {
  id: 'intelligence',
  name: 'Intelligence & Trust',
  subtitle: 'Data Foundation',
  fullName: 'Intelligence & Trust',
  icon: '🔮',
  keywords: [
    'data', 'analytics', 'fabric', 'foundry', 'intelligence', 'insight',
    'warehouse', 'lake', 'estate', 'unified', 'governed', 'lineage',
    'real-time', 'telemetry', 'reporting', 'dashboard', 'bi ',
    'data mesh', 'data platform', 'iq', 'decision', 'context',
  ],
}

export const SECURITY_FOUNDATION = {
  id: 'security',
  name: 'Security',
  subtitle: 'Foundation',
  fullName: 'Security Foundation',
  icon: '🛡️',
  keywords: [
    'secur', 'compliance', 'risk', 'govern', 'privacy', 'identity',
    'threat', 'protect', 'trust', 'audit', 'regulat', 'zero trust',
    'defender', 'data protection', 'confidential',
  ],
}

// ─── Output Types ────────────────────────────────────────────
export interface MatchedStory {
  company: string
  title: string
  metric: string
  quote: string | null
  product: string
  storyUrl: string | null
}

export interface ROICard {
  useCase: string
  costReduction: string
  speedImprovement: string
  qualityImprovement: string
  roiTimeframe: string
  pillar: string
  evidenceCompanies: string[]
}

export interface UseCaseEntry {
  name: string
  description: string
  evidence: string | null
  matchedStories: MatchedStory[]
  roiCard: ROICard | null
}

export interface IndustryBenchmarkSummary {
  industry: string
  adoptionGrowthRate: string
  avgROI: string
  topPerformerMultiple: string
  marketProjection?: string
  topUseCases: string[]
  frontierStats?: string[]
}

export interface ValueStory {
  title: string
  executive_summary: string
  marketContext: string[]
  industryBenchmark: IndustryBenchmarkSummary | null
  pillarSections: PillarSection[]
  intelligenceSection: FoundationSection | null
  securitySection: FoundationSection | null
  solutionMap: SolutionMapEntry[]
  stakeholderMap: StakeholderEntry[]
  missingPillars: { id: string; name: string; fullName: string; icon: string; subtitle: string }[]
  nextSteps: string[]
  coworkPrompts: CoworkPrompt[]
}

export interface StakeholderEntry {
  pillar: string
  areas: string[]
  roles: string[]
  useCases: string[]
}

export interface PillarSection {
  pillar: FrontierPillar
  customerPriorities: string[]
  useCases: UseCaseEntry[]
  pillarStories: MatchedStory[]
}

export interface FoundationSection {
  customerPriorities: string[]
  useCases: UseCaseEntry[]
  pillarStories: MatchedStory[]
}

// Legacy alias for backward compat
export type SecuritySection = FoundationSection

export interface SolutionMapEntry {
  useCase: string
  solutions: string[]
  pillar: string
}

export interface CoworkPrompt {
  id: string
  label: string
  icon: string
  description: string
  phase: 'prep' | 'meeting' | 'after'
  prompt: string
}

// ─── Pillar Classification ───────────────────────────────────
export function classifyToPillar(text: string): string {
  const lower = text.toLowerCase()
  let bestPillar = 'reshape' // default
  let bestScore = 0

  // Check intelligence first (data foundation)
  let intScore = 0
  for (const kw of INTELLIGENCE_FOUNDATION.keywords) {
    if (lower.includes(kw)) intScore++
  }
  if (intScore >= 2) return 'intelligence'

  // Check security (foundation)
  let secScore = 0
  for (const kw of SECURITY_FOUNDATION.keywords) {
    if (lower.includes(kw)) secScore++
  }
  if (secScore >= 2) return 'security'

  for (const pillar of FRONTIER_PILLARS) {
    let score = 0
    for (const kw of pillar.keywords) {
      if (lower.includes(kw)) score++
    }
    if (score > bestScore) {
      bestScore = score
      bestPillar = pillar.id
    }
  }
  return bestPillar
}

// ─── Evidence Sanitizer ──────────────────────────────────────
// Clean up truncated metrics from extraction: skip empty, colon-ended, mid-sentence cuts
function cleanMetric(text: string): string {
  const trimmed = text.trim()
  if (!trimmed) return ''
  // Skip metrics that end with ':' or ',' (clearly truncated headers)
  if (/[:;,]$/.test(trimmed)) return ''
  // Skip very short metrics (likely fragments)
  if (trimmed.length < 10) return ''
  // Skip metrics that end mid-word (last word < 3 chars and no number/%)
  const lastWord = trimmed.split(/\s+/).pop() ?? ''
  if (lastWord.length < 3 && !/\d|%/.test(lastWord)) return ''
  return trimmed
}

// Find the first valid metric from a list
function bestMetric(metrics: string[]): string {
  for (const m of metrics) {
    const cleaned = cleanMetric(m)
    if (cleaned) return cleaned
  }
  return ''
}

// ─── Story Matching ──────────────────────────────────────────
// Normalize story industry tags to match the app's industry IDs
const INDUSTRY_ALIAS: Record<string, string[]> = {
  'healthcare-provider': ['healthcare', 'health'],
  'healthcare-medtech': ['healthcare', 'health', 'pharma', 'biotech', 'life-sciences', 'healthcare-pharma'],
  'energy-resources': ['energy', 'oil-gas', 'utilities'],
  'media-entertainment': ['media', 'entertainment'],
  'mobility-travel': ['travel-hospitality', 'transportation', 'logistics'],
  'capital-markets': ['financial-services'],
  'banking': ['financial-services'],
  'higher-education': ['education'],
  'consumer-goods': ['consumer-goods', 'cpg'],
  'automotive': ['automotive', 'mobility', 'manufacturing'],
  'professional-services': ['professional-services', 'technology'],
}

export function isIndustryMatch(storyIndustry: string, appIndustryId: string): boolean {
  if (storyIndustry === appIndustryId) return true
  const aliases = INDUSTRY_ALIAS[appIndustryId]
  return aliases ? aliases.includes(storyIndustry) : false
}

// Match stories to use cases via shared challengeIds AND content relevance
// Also checks HERO_USE_CASES for additional evidence
function matchStoriesToUseCase(
  uc: { name: string; challengeIds: string[]; industryIds: string[]; description?: string },
  industryId: string
): MatchedStory[] {
  const sameIndustry: { story: CustomerStory; score: number }[] = []
  const crossIndustry: { story: CustomerStory; score: number }[] = []

  // Build UC keyword set — filter out generic words that cause false matches
  const STOP_WORDS = new Set(['using', 'based', 'powered', 'across', 'drive', 'build', 'enable', 'improve', 'teams', 'business', 'company', 'platform', 'solutions', 'tools', 'management', 'planning', 'operations', 'customer', 'process', 'digital', 'intelligence', 'optimize', 'microsoft', 'azure', 'copilot'])
  const ucText = (uc.name + ' ' + (uc.description || '')).toLowerCase()
  const ucKeywords = ucText.split(/\s+/).filter(w => w.length > 4 && !STOP_WORDS.has(w))

  for (const story of CUSTOMER_STORIES) {
    let challengeScore = 0
    for (const cid of story.challengeIds) {
      if (uc.challengeIds.includes(cid)) challengeScore++
    }
    if (challengeScore === 0) continue

    const isSameIndustry = isIndustryMatch(story.industry, industryId)

    // Content relevance: domain-specific keyword overlap
    const summaryLower = (story.summary || '').toLowerCase()
    const contentOverlap = ucKeywords.filter(kw => summaryLower.includes(kw)).length

    if (isSameIndustry) {
      // Same industry: 1 shared challenge is enough, but prefer content overlap
      sameIndustry.push({ story, score: challengeScore + (contentOverlap * 0.5) })
    } else {
      // Cross industry: only if VERY relevant — 3+ challenges OR 2 challenges + 3+ keyword overlap
      if (challengeScore >= 3 || (challengeScore >= 2 && contentOverlap >= 3)) {
        crossIndustry.push({ story, score: challengeScore + (contentOverlap * 0.5) })
      }
    }
  }

  // Also match from HERO_USE_CASES (same-industry only)
  // Use full UC keywords (name + description) for richer matching
  for (const hero of HERO_USE_CASES) {
    if (!isIndustryMatch(hero.industry, industryId)) continue
    const heroText = (hero.title + ' ' + (hero.valueProp || '')).toLowerCase()
    const heroWords = heroText.split(/\s+/).filter(w => w.length > 4 && !STOP_WORDS.has(w))
    const overlap = ucKeywords.filter(w => heroWords.some(hw => hw.includes(w) || w.includes(hw)))
    if (overlap.length >= 1) {
      for (const customer of hero.customers) {
        // Skip customers with empty outcomes or title-like names (extraction artifacts)
        if (customer.outcomes.length === 0) continue
        if (customer.name.includes(',') && customer.name.length > 30) continue
        const validMetric = bestMetric(customer.outcomes)
        if (!validMetric) continue
        const heroStory: CustomerStory = {
          id: `hero-${hero.industry}-${customer.name.toLowerCase().replace(/\s+/g, '-')}`,
          company: customer.name,
          industry: hero.industry,
          product: hero.products.join(', ') || 'Microsoft AI',
          challengeIds: uc.challengeIds,
          keyMetrics: customer.outcomes.filter(o => cleanMetric(o)).slice(0, 3),
          summary: customer.outcomes.filter(o => cleanMetric(o)).join('. '),
          quotes: [],
        }
        sameIndustry.push({ story: heroStory, score: overlap.length })
      }
    }
  }

  // Only same-industry stories; cross-industry only if zero same-industry results
  const result = sameIndustry.sort((a, b) => b.score - a.score).slice(0, 3)
  if (result.length === 0) {
    result.push(...crossIndustry.sort((a, b) => b.score - a.score).slice(0, 2))
  }

  return result.map(({ story }) => ({
    company: story.company,
    title: story.summary ? story.summary.split(/[.!?]/)[0].trim().slice(0, 120) : '',
    metric: bestMetric(story.keyMetrics),
    quote: story.quotes?.[0] ?? null,
    product: story.product,
    storyUrl: story.storyUrl ?? null,
  }))
}

// Find the best priority match for a use case within a pillar
// ─── ROI Template Matching ────────────────────────────────────
// Match a use case to its ROI template by industry + challenge overlap + name similarity
function matchROITemplate(
  uc: { name: string; challengeIds: string[]; industryIds: string[] },
  industryId: string
): ROICard | null {
  let bestTemplate: UseCaseROITemplate | null = null
  let bestScore = 0

  for (const tmpl of USE_CASE_ROI_TEMPLATES) {
    // Must match industry
    if (!tmpl.industries.includes(industryId)) continue

    // Score: challenge overlap + name similarity
    const challengeOverlap = tmpl.challengeIds.filter(cid => uc.challengeIds.includes(cid)).length
    const ucWords = uc.name.toLowerCase().split(/\s+/).filter(w => w.length > 3)
    const tmplWords = tmpl.useCase.toLowerCase().split(/\s+/).filter(w => w.length > 3)
    const nameOverlap = ucWords.filter(w => tmplWords.some(tw => tw.includes(w) || w.includes(tw))).length

    const score = (nameOverlap * 10) + (challengeOverlap * 5)
    if (score > bestScore && score >= 10) {
      bestScore = score
      bestTemplate = tmpl
    }
  }

  if (!bestTemplate) return null

  // Graceful fallback: GLOBAL_EVIDENCE is empty, so look up company names but don't break if missing
  const evidenceCompanies = bestTemplate.globalEvidence
    .map(id => GLOBAL_EVIDENCE.find(e => e.id === id))
    .filter(Boolean)
    .map(e => e!.company)

  return {
    useCase: bestTemplate.useCase,
    costReduction: bestTemplate.costReduction,
    speedImprovement: bestTemplate.speedImprovement,
    qualityImprovement: bestTemplate.qualityImprovement,
    roiTimeframe: bestTemplate.roiTimeframe,
    pillar: bestTemplate.pillar,
    evidenceCompanies,
  }
}

// Get industry benchmark summary
function getIndustryBenchmark(industryId: string): IndustryBenchmarkSummary | null {
  const bench = INDUSTRY_BENCHMARKS.find(b => b.industry === industryId)
  if (!bench) return null
  return {
    industry: bench.industry,
    adoptionGrowthRate: bench.adoptionGrowthRate,
    avgROI: bench.avgROI,
    topPerformerMultiple: bench.topPerformerMultiple,
    marketProjection: bench.marketProjection,
    topUseCases: bench.topUseCases,
    frontierStats: bench.frontierStats,
  }
}

// Collect stories relevant to a pillar via challenge overlap (verified Microsoft stories only)
// ─── Generator ───────────────────────────────────────────────
export function generateValueStory(data: WizardData): ValueStory {
  const industry = INDUSTRIES.find((i) => i.id === data.industryId)
  const challenges = CHALLENGES.filter((c) => data.selectedChallengeIds.includes(c.id))
  const useCases = USE_CASES.filter((uc) => data.selectedUseCaseIds.includes(uc.id))

  const companyName = data.companyName || 'the customer'
  const industryName = industry?.name ?? 'their industry'
  const industryId = data.industryId ?? ''

  const sizeContext: Record<string, string> = {
    small: 'a growing organization',
    mid: 'a mid-size organization scaling operations',
    large: 'a large enterprise managing complexity',
    enterprise: 'a global enterprise driving transformation at scale',
  }
  const sizeDesc = sizeContext[data.companySize] || 'an organization'

  // Parse priorities into individual items, stripping bullet prefixes
  const priorityItems = data.priorities
    ? data.priorities
        .split(/[;\n]+/)
        .map((p) => p.trim().replace(/^[-•–—]\s*/, '').replace(/^\d+[.)]\s*/, '').trim())
        .filter((p) => p.length > 3)
    : []

  // Classify each priority into a pillar
  const pillarPriorities: Record<string, string[]> = {
    enrich: [], reshape: [], reinvent: [], bend: [], intelligence: [], security: [],
  }
  for (const priority of priorityItems) {
    const pillarId = classifyToPillar(priority)
    pillarPriorities[pillarId].push(priority)
  }

  // Classify challenges into pillars using explicit pillarId
  const pillarChallenges: Record<string, string[]> = {
    enrich: [], reshape: [], reinvent: [], bend: [], intelligence: [], security: [],
  }
  for (const challenge of challenges) {
    const pid = challenge.pillarId ?? classifyToPillar(challenge.name + ' ' + challenge.description)
    pillarChallenges[pid].push(challenge.id)
  }

  // Map use cases to pillars using explicit pillarId
  const pillarUseCases: Record<string, typeof useCases> = {
    enrich: [], reshape: [], reinvent: [], bend: [], intelligence: [], security: [],
  }
  for (const uc of useCases) {
    const pid = uc.pillarId ?? classifyToPillar(uc.name + ' ' + uc.description)
    pillarUseCases[pid].push(uc)
  }

  // Executive Summary — strategy-first narrative, not data dump
  const topPillars = FRONTIER_PILLARS.filter(
    (p) => pillarPriorities[p.id].length > 0 || pillarUseCases[p.id].length > 0
  )

  // Count evidence-backed stories using the same matching logic as matchStoriesToUseCase
  // (previously this was looser — any 1 shared challengeId counted)
  const evidenceStories = new Set<string>()
  for (const uc of useCases) {
    const matched = matchStoriesToUseCase(uc, industryId)
    for (const m of matched) {
      evidenceStories.add(m.company)
    }
  }

  // Build a narrative executive summary
  // Use industry imperatives from Frontier Context if available
  const industryContext = INDUSTRY_CONTEXTS.find(ctx => isIndustryMatch(ctx.industry, industryId))
  const imperativePhrase = industryContext && industryContext.imperatives.length > 0
    ? industryContext.imperatives[0]
    : ''

  const challengePhrase = challenges.length > 0
    ? challenges.slice(0, 3).map((c) => c.name.toLowerCase()).join(', ')
    : 'multiple strategic imperatives'
  const pillarPhrase = topPillars.length > 0
    ? topPillars.map((p) => `${p.fullName}`).join(', ')
    : 'transformation across key business dimensions'
  
  // matchStoriesToUseCase already includes hero use cases, so totalEvidence = evidenceStories
  const totalEvidence = evidenceStories.size
  const evidencePhrase = totalEvidence > 0
    ? ` Backed by ${totalEvidence} published customer ${totalEvidence === 1 ? 'story' : 'stories'} from ${industryName}, these use cases represent proven paths to measurable outcomes.`
    : ''

  const contextSentence = imperativePhrase
    ? ` In an industry where ${imperativePhrase.toLowerCase().replace(/\.$/, '')},`
    : ''

  const executive_summary = `As ${sizeDesc} in ${industryName}, ${companyName} faces key business challenges around ${challengePhrase}.${contextSentence} Through the Intelligence & Trust framework, we've identified ${useCases.length} high-impact use case${useCases.length !== 1 ? 's' : ''} organized across ${pillarPhrase} — each grounded in ${companyName}'s stated strategic priorities, not technology.${evidencePhrase}`

  // Market context — top-level urgency stats
  const industryBenchmark = getIndustryBenchmark(industryId)
  const marketContext: string[] = [
    MARKET_STATS.adoption,
    MARKET_STATS.leaderRevenue,
    MARKET_STATS.scalingGap,
  ]
  if (industryBenchmark?.marketProjection) {
    marketContext.push(industryBenchmark.marketProjection)
  }

  // Build pillar sections with story matching, priority linkage, and ROI cards
  const pillarSections: PillarSection[] = []
  const globalSeenStories = new Set<string>() // no story appears in more than one pillar

  for (const pillar of FRONTIER_PILLARS) {
    const priorities = pillarPriorities[pillar.id]
    const ucs = pillarUseCases[pillar.id]
    const challengeIdsInPillar = pillarChallenges[pillar.id]
    const allUCs = [...ucs]

    if (priorities.length === 0 && allUCs.length === 0) continue

    const effectivePriorities = priorities.length > 0
      ? priorities
      : challenges.filter((c) => challengeIdsInPillar.includes(c.id)).map((c) => c.name)

    const ucEntries = allUCs.map((uc) => ({
        name: uc.name,
        description: uc.description.split('.')[0] + '.',
        evidence: uc.evidence.length > 0 ? uc.evidence[0] : null,
        matchedStories: matchStoriesToUseCase(uc, industryId),
        roiCard: matchROITemplate(uc, industryId),
      }))

    // Derive pillar stories from UC-matched stories (deduplicated within and across pillars)
    const derivedPillarStories: MatchedStory[] = []
    for (const entry of ucEntries) {
      for (const s of entry.matchedStories) {
        if (!globalSeenStories.has(s.company)) {
          globalSeenStories.add(s.company)
          derivedPillarStories.push(s)
        }
      }
    }

    pillarSections.push({
      pillar,
      customerPriorities: effectivePriorities,
      useCases: ucEntries,
      pillarStories: derivedPillarStories.slice(0, 3),
    })
  }

  // Intelligence & Trust section — data foundation layer
  const intPriorities = pillarPriorities.intelligence
  const intUCs = pillarUseCases.intelligence
  const allIntUCs = [...intUCs]

  const effectiveIntPriorities = intPriorities.length > 0
    ? intPriorities
    : ['Unified data estate and governed AI intelligence as the platform for frontier transformation']

  const intUcEntries = allIntUCs.length > 0
    ? allIntUCs.map((uc) => ({
        name: uc.name,
        description: uc.description.split('.')[0] + '.',
        evidence: uc.evidence.length > 0 ? uc.evidence[0] : null,
        matchedStories: matchStoriesToUseCase(uc, industryId),
        roiCard: matchROITemplate(uc, industryId),
      }))
    : [{
        name: 'Unified Data Estate & AI Intelligence',
        description: 'Build a governed, unified data platform with Fabric IQ and Foundry IQ to power AI-driven decisions across the organization.',
        evidence: null,
        matchedStories: [] as MatchedStory[],
        roiCard: null,
      }]

  const derivedIntStories: MatchedStory[] = []
  for (const entry of intUcEntries) {
    for (const s of entry.matchedStories) {
      if (!globalSeenStories.has(s.company)) {
        globalSeenStories.add(s.company)
        derivedIntStories.push(s)
      }
    }
  }

  const intelligenceSection: FoundationSection = {
    customerPriorities: effectiveIntPriorities,
    useCases: intUcEntries,
    pillarStories: derivedIntStories.slice(0, 3),
  }

  // Security section — uses explicit pillarId like regular pillars
  const secPriorities = pillarPriorities.security
  const secUCs = pillarUseCases.security
  const allSecUCs = [...secUCs]

  const effectiveSecPriorities = secPriorities.length > 0
    ? secPriorities
    : ['Enterprise-grade security, governance, and compliance as the foundation for AI transformation']

  const secUcEntries = allSecUCs.length > 0
    ? allSecUCs.map((uc) => ({
        name: uc.name,
        description: uc.description.split('.')[0] + '.',
        evidence: uc.evidence.length > 0 ? uc.evidence[0] : null,
        matchedStories: matchStoriesToUseCase(uc, industryId),
        roiCard: null,
      }))
    : [{
        name: 'AI Governance & Security Posture',
        description: 'Secure governance of AI workloads, agent observability, and data protection across the AI stack.',
        evidence: null,
        matchedStories: [] as MatchedStory[],
        roiCard: null,
      }]

  // Derive security stories from UC-matched stories (deduplicated globally)
  const derivedSecStories: MatchedStory[] = []
  for (const entry of secUcEntries) {
    for (const s of entry.matchedStories) {
      if (!globalSeenStories.has(s.company)) {
        globalSeenStories.add(s.company)
        derivedSecStories.push(s)
      }
    }
  }

  const securitySection: FoundationSection = {
    customerPriorities: effectiveSecPriorities,
    useCases: secUcEntries,
    pillarStories: derivedSecStories.slice(0, 3),
  }

  // Solution map — full pillar names
  const solutionMap: SolutionMapEntry[] = useCases.map((uc) => {
    const pid = uc.pillarId ?? classifyToPillar(uc.name + ' ' + uc.description)
    const pillar = pid === 'security'
      ? { fullName: 'Security Foundation' }
      : pid === 'intelligence'
      ? { fullName: 'Intelligence & Trust' }
      : (FRONTIER_PILLARS.find((p) => p.id === pid) ?? FRONTIER_PILLARS[1])
    return {
      useCase: uc.name,
      solutions: uc.microsoftProducts.slice(0, 3),
      pillar: pillar.fullName,
    }
  })

  // Next steps — with business areas and stakeholders derived from pillars/use cases
  const pillarStakeholders: Record<string, { areas: string[]; roles: string[] }> = {
    enrich: {
      areas: ['Human Resources', 'Learning & Development', 'Internal Communications'],
      roles: ['CHRO', 'VP of People', 'Head of L&D'],
    },
    reshape: {
      areas: ['Operations', 'IT', 'Supply Chain', 'Finance'],
      roles: ['COO', 'CIO', 'VP of Operations', 'CFO'],
    },
    reinvent: {
      areas: ['Sales', 'Marketing', 'Customer Service', 'Digital'],
      roles: ['CMO', 'CRO', 'VP of Customer Experience', 'CDO'],
    },
    bend: {
      areas: ['R&D', 'Product', 'Engineering', 'Innovation'],
      roles: ['CTO', 'VP of R&D', 'Chief Innovation Officer', 'Head of Product'],
    },
    intelligence: {
      areas: ['Data & Analytics', 'Business Intelligence', 'IT', 'Enterprise Architecture'],
      roles: ['CDO', 'Chief Data Officer', 'VP of Analytics', 'CIO'],
    },
    security: {
      areas: ['Information Security', 'Compliance', 'Risk', 'IT Governance'],
      roles: ['CISO', 'Chief Risk Officer', 'VP of Compliance'],
    },
  }

  // Collect unique areas and roles from active pillars
  const activeAreas = new Set<string>()
  const activeRoles = new Set<string>()
  const stakeholderMap: StakeholderEntry[] = []
  for (const ps of pillarSections) {
    const sh = pillarStakeholders[ps.pillar.id]
    if (sh) {
      sh.areas.slice(0, 2).forEach((a) => activeAreas.add(a))
      sh.roles.slice(0, 2).forEach((r) => activeRoles.add(r))
      stakeholderMap.push({
        pillar: ps.pillar.fullName,
        areas: sh.areas.slice(0, 3),
        roles: sh.roles.slice(0, 3),
        useCases: ps.useCases.map(uc => uc.name),
      })
    }
  }
  if (intelligenceSection.useCases.length > 0 || intelligenceSection.customerPriorities.some((p) => !p.startsWith('Unified data estate'))) {
    pillarStakeholders.intelligence.areas.slice(0, 2).forEach((a) => activeAreas.add(a))
    pillarStakeholders.intelligence.roles.slice(0, 1).forEach((r) => activeRoles.add(r))
    stakeholderMap.push({
      pillar: 'Intelligence & Trust',
      areas: pillarStakeholders.intelligence.areas.slice(0, 3),
      roles: pillarStakeholders.intelligence.roles.slice(0, 3),
      useCases: intelligenceSection.useCases.map(uc => uc.name),
    })
  }
  if (securitySection.useCases.length > 0 || securitySection.customerPriorities.some((p) => !p.startsWith('Enterprise-grade'))) {
    pillarStakeholders.security.areas.slice(0, 2).forEach((a) => activeAreas.add(a))
    pillarStakeholders.security.roles.slice(0, 1).forEach((r) => activeRoles.add(r))
    stakeholderMap.push({
      pillar: 'Security Foundation',
      areas: pillarStakeholders.security.areas.slice(0, 3),
      roles: pillarStakeholders.security.roles.slice(0, 3),
      useCases: securitySection.useCases.map(uc => uc.name),
    })
  }

  const areaList = [...activeAreas].slice(0, 5).join(', ')
  const roleList = [...activeRoles].slice(0, 5).join(', ')

  const nextSteps = [
    `Validate priority alignment with key stakeholders: ${roleList}`,
    `Map use cases to business areas: ${areaList}`,
    `Define success metrics for the highest-impact opportunity per pillar`,
    `Assess readiness across data, security, and change management`,
    `Explore a deployment vision with ${companyName}'s team — success criteria and suggested sponsors`,
  ]

  // Build ROI context string for prompts — use qualitative ranges from templates even when no named evidence exists
  const roiContext: string[] = []
  for (const ps of pillarSections) {
    for (const uc of ps.useCases) {
      if (uc.roiCard) {
        const evidenceNote = uc.roiCard.evidenceCompanies.length > 0
          ? ` (evidence: ${uc.roiCard.evidenceCompanies.join(', ')})`
          : ' (based on industry benchmarks for similar deployments)'
        roiContext.push(`${uc.name}: ${uc.roiCard.costReduction} cost reduction, ${uc.roiCard.speedImprovement}, quality: ${uc.roiCard.qualityImprovement}, ROI in ${uc.roiCard.roiTimeframe}${evidenceNote}`)
      }
    }
  }
  const roiBlock = roiContext.length > 0
    ? `\n\nROI EVIDENCE (indicative ranges from industry benchmarks and similar deployments):\n${roiContext.map(r => `- ${r}`).join('\n')}`
    : '\n\nROI EVIDENCE:\nFrame value qualitatively using industry benchmarks and customer reference stories. Use percentage improvement ranges (e.g., "15-30% reduction") rather than absolute figures.'

  // Stakeholder context for prompts — include CRM contacts and AE-assigned pillar sponsors if available
  const crmContactBlock = data.crmContacts && data.crmContacts.length > 0
    ? `\n\nCRM CONTACTS (extracted from account data):\n${data.crmContacts.map(c => `- ${c.name} — ${c.title}${c.email ? ` (${c.email})` : ''}`).join('\n')}`
    : ''
  const pillarOwnersBlock = data.pillarOwners && Object.keys(data.pillarOwners).length > 0
    ? '\n\nSUGGESTED EXECUTIVE SPONSORS (assigned by AE):\n' +
      Object.entries(data.pillarOwners)
        .filter(([, title]) => title != null && title !== '')
        .map(([pillarId, title]) => {
          const pillarNames: Record<string, string> = {
            enrich: 'Employee Experience (Enrich)', reshape: 'Business Processes (Reshape)',
            reinvent: 'Customer Engagement (Reinvent)', bend: 'Innovation (Bend)',
            intelligence: 'Data & Intelligence', security: 'Security & Trust',
          }
          // Cross-reference crmContacts to find a name for this title
          const matchedContact = data.crmContacts?.find(c =>
            c?.title && title &&
            (c.title.toLowerCase().includes(title.toLowerCase()) ||
             title.toLowerCase().includes(c.title.toLowerCase().split(' ')[0]))
          )
          const nameStr = matchedContact ? `${matchedContact.name} (${title})` : title
          return `- ${pillarNames[pillarId] || pillarId}: ${nameStr}`
        })
        .join('\n')
    : ''
  const stakeholderBlock = stakeholderMap.length > 0 || crmContactBlock || pillarOwnersBlock
    ? `${crmContactBlock}${pillarOwnersBlock}${stakeholderMap.length > 0 ? `\n\nSUGGESTED STAKEHOLDERS BY PILLAR:\n${stakeholderMap.map(s => `- ${s.pillar}: ${s.roles.join(', ')} (${s.areas.join(', ')})`).join('\n')}` : ''}`
    : ''

  // Industry benchmark context for prompts
  const benchmarkBlock = industryBenchmark
    ? `\n\nINDUSTRY BENCHMARK (${industryName}):\n- AI adoption growth: ${industryBenchmark.adoptionGrowthRate}\n- Average ROI: ${industryBenchmark.avgROI}\n- Top performers: ${industryBenchmark.topPerformerMultiple}`
    : ''

  // Customer evidence with public story links
  const allStories = pillarSections.flatMap(ps => ps.pillarStories)
  const uniqueStories = Array.from(new Map(allStories.map(s => [s.company, s])).values())
  const storiesWithUrls = uniqueStories.filter(s => s.storyUrl && s.storyUrl.trim() !== '')
  const customerEvidenceBlock = storiesWithUrls.length > 0
    ? `\n\nCUSTOMER EVIDENCE (published Microsoft customer stories — render each Source URL as a clickable hyperlink in output):\n${storiesWithUrls.map(s => `- ${s.company} (${s.title}): ${s.metric}\n  Source URL: ${s.storyUrl}`).join('\n')}`
    : ''

  // Cowork Prompts — 8 context-rich prompts powered by wizard data
  const challengeList = challenges.map((c) => c.name).join(', ')
  const ucList = useCases.map((uc) => uc.name).join(', ')
  const pillarContext = pillarSections.map((ps) => `${ps.pillar.fullName}: ${ps.customerPriorities.slice(0, 2).join(', ')}`).join('; ')
  const statedPriorities = data.priorities ? data.priorities.slice(0, 400) : challengeList

  // Enrich context with discovery conversation notes
  const discoveryBlock = data.discoveryNotes && Object.keys(data.discoveryNotes).length > 0
    ? '\n- Discovery conversation notes:\n' + Object.entries(data.discoveryNotes)
        .filter(([, v]) => v?.trim())
        .map(([pillarId, note]) => {
          const pillarNames: Record<string, string> = {
            enrich: 'Employee Experience', reshape: 'Business Processes',
            reinvent: 'Customer Engagement', bend: 'Innovation',
            intelligence: 'Data & Intelligence', security: 'Security & Trust',
          }
          return `  ${pillarNames[pillarId] || pillarId}: ${note.trim().slice(0, 200)}`
        })
        .join('\n')
    : ''

  const complianceBlock = `\n\nCONTENT INTEGRITY RULES — MANDATORY FOR ALL DELIVERABLES:

EVIDENCE SOURCING:
- ONLY cite customer stories that come from published Microsoft customer pages (microsoft.com/customers)
- NEVER reference non-Microsoft case studies (no Google Cloud, AWS, Salesforce, or competitor examples)
- NEVER fabricate or invent customer outcomes, metrics, or quotes — use only what is provided in the context above
- If a customer story lacks a URL or source, present it as "a Microsoft customer in [industry]" without naming the company
- Industry benchmark statistics (McKinsey, BCG, IDC, Gartner, Accenture) may be cited as "industry research" — always attribute the research firm

FINANCIAL & METRIC CLAIMS:
- ALL ROI figures, cost savings, and productivity gains are ESTIMATES based on industry benchmarks and published reference stories
- Present financial projections as ranges (e.g., "15–30%"), never as exact promises
- Use qualifying language: "estimated", "potential", "indicative", "based on similar deployments", "for reference"
- NEVER guarantee specific dollar amounts, timelines, or performance outcomes
- NEVER cite specific revenue, deal sizes, or contract values unless they appear in a public Microsoft customer story

PRODUCT REFERENCES:
- Only reference current, generally available Microsoft products and services
- Do NOT reference retired services (Azure Media Services, Azure Synapse Analytics, Microsoft Supply Chain Center)
- Use current product names: Microsoft Fabric (not Azure Synapse), DAX Copilot (not Nuance DAX), Azure AI Video Indexer (not Azure Media Services)

COMPETITOR & THIRD-PARTY POLICY:
- NEVER mention competitor products, platforms, or vendors by name
- NEVER make comparative claims against competitors
- Focus on Microsoft's value proposition on its own merits

MICROSOFT COMPLIANCE DISCLAIMERS — INCLUDE AS FOOTER IN EVERY DELIVERABLE:

CONFIDENTIALITY: "This document is intended solely for the use of ${companyName} and Microsoft. It contains proprietary information and should not be distributed without written consent."

DATA & PRIVACY: "Microsoft is committed to protecting your data. Any customer data referenced in this document is handled in accordance with Microsoft's Privacy Statement (https://privacy.microsoft.com) and applicable data processing agreements. No customer data was shared with third parties to produce this material."

RESPONSIBLE AI: "Microsoft's AI solutions are developed in accordance with our Responsible AI principles: fairness, reliability & safety, privacy & security, inclusiveness, transparency, and accountability. Learn more at https://www.microsoft.com/ai/responsible-ai."

PROJECTIONS DISCLAIMER: "ROI projections, cost estimates, and business impact figures referenced herein are based on industry benchmarks and publicly available Microsoft customer stories. Actual results will vary based on implementation scope, organizational readiness, and other factors. These figures do not constitute a guarantee of performance."

TRUST & SECURITY: "Microsoft cloud services referenced in this document comply with industry-leading security, privacy, and compliance standards including ISO 27001, SOC 2, GDPR, and HIPAA where applicable. For details, visit https://www.microsoft.com/trust-center."

LEGAL: "© ${new Date().getFullYear()} Microsoft Corporation. All rights reserved. This material is provided for informational purposes only. Microsoft makes no warranties, express or implied."`

  const researchBlock = `\n\nCUSTOMER RESEARCH — DO THIS FIRST:\nBefore generating any content, research ${companyName} using web search:\n1. Recent news & press releases (last 6 months) — product launches, partnerships, strategic announcements\n2. Public financials — if listed, check latest 10-K, earnings call transcripts, annual report for revenue, headcount, cost structure, and stated strategic priorities\n3. Leadership changes — any recent C-suite appointments, departures, or reorganizations\n4. M&A activity — recent acquisitions, divestitures, or joint ventures\n5. Industry pressures — regulatory changes, competitive moves, or market shifts affecting ${industryName} that ${companyName} would be responding to\n6. Digital transformation signals — any public statements about AI adoption, cloud migration, or technology investments\n\nUse what you find to ground your output in ${companyName}'s CURRENT reality. Reference specific findings (e.g., "In your Q3 earnings call, your CEO mentioned..." or "Following your recent acquisition of..."). If information is not publicly available for any area, state your assumptions clearly and proceed.`

  const fullContext = `You are helping a Microsoft Account Executive prepare materials for ${companyName}, a ${sizeDesc} in ${industryName}.${researchBlock}\n\nCUSTOMER CONTEXT:\n- Strategic priorities: ${statedPriorities}\n- Key challenges: ${challengeList}\n- Transformation areas:\n  ${pillarContext}${discoveryBlock}${benchmarkBlock}${roiBlock}${customerEvidenceBlock}${stakeholderBlock}\n\nTERMINOLOGY — USE THESE EXACT TERMS (do not paraphrase):\n- "Inspiration Use Cases" — the use cases the AE identified in the canvas as starting points for the conversation. NEVER paraphrase as "selected use cases", "chosen use cases", "confirmed use cases", "approved use cases", "selected inspirations", or "picked use cases". The customer has NOT yet committed to these — they are conversation starters meant to inspire discussion, not a scoped agreement.\n\nGUIDELINES:\n- Lead with customer's language, not Microsoft product names\n- Reference specific use cases and evidence from above\n- When citing customer stories, ALWAYS include the public source URL as a clickable hyperlink so readers can verify and access the story\n- Keep tone consultative, not salesy\n- Include specific next steps with suggested sponsors (these are suggestions for the customer to confirm or change)\n- NEVER suggest pilots, limited rollouts, small-group deployments, or specific user/seat quantities. This is a vision and inspiration stage — frame all recommendations as enterprise-wide transformation opportunities. Do not define firm scope, user counts, or deployment sizing.\n- IMPORTANT FRAMING: All projections, ROI figures, and timelines are ESTIMATES and REFERENCES for inspiration — use language like "estimated", "potential", "indicative range", "based on similar deployments", "for reference". Never present figures as guarantees or commitments. Titles should reflect this (e.g., "Estimated Implementation Roadmap", "Potential Value Scenarios", "Indicative ROI Range"). This is a starting point for conversation, not a binding proposal.${complianceBlock}`

  // Identify missing pillars for suggestion
  const activePillarIds = new Set(pillarSections.map(ps => ps.pillar.id))
  const missingPillars = FRONTIER_PILLARS.filter(p => !activePillarIds.has(p.id))
  const missingPillarNote = missingPillars.length > 0
    ? `\n\nIMPORTANT — MISSING PILLARS:\n${companyName}'s current priorities don't cover these Frontier pillars: ${missingPillars.map(p => p.fullName).join(', ')}.\nProactively suggest 2-3 use cases per missing pillar that would create additional value for a ${industryName} company of this size. Frame them as "expansion opportunities" worth exploring.`
    : ''

  // Full brand identity instruction for customer-facing deliverables
  const brandIdentityBlock = data.websiteUrl
    ? `VISUAL IDENTITY — Apply ${companyName}'s brand consistently throughout this deliverable:\n• COLORS: Extract primary, secondary, and accent colors from ${data.websiteUrl}. Use primary for headings and key accents; secondary for backgrounds and borders; accent sparingly for CTAs or highlights.\n• FONTS: Identify the heading and body font families used on ${data.websiteUrl}. Apply them via @import or system-font fallbacks (Inter, Segoe UI, system-ui). If undetectable, default to a clean sans-serif pairing.\n• LOGO: Find ${companyName}'s logo from ${data.websiteUrl} (check header, favicon, or og:image meta tag). Place it on the title slide or page header. If unavailable, render the company name in the heading font as a styled text-logo.\n• CONSISTENCY: Every page and slide must feel like one branded document — same color palette, same font pairing, same spacing rhythm. No mixing of styles between sections.\nIf brand extraction fails entirely, fall back to a neutral professional palette (#1a1a2e, #16213e, #0f3460) with Inter/system-ui fonts.`
    : `VISUAL IDENTITY — Use a neutral professional palette (#1a1a2e, #16213e, #0f3460) with Inter or system-ui fonts. Maintain consistent styling across all pages and slides.`

  const coworkPrompts: CoworkPrompt[] = [
    {
      id: 'exec-summary',
      label: 'Executive Summary Deck',
      icon: '📄',
      phase: 'meeting',
      description: `A concise 5-8 slide deck covering priorities, use cases, evidence, and next steps. Use it as the primary leave-behind for a 15-30 min meeting. Produces HTML + PPTX.${missingPillars.length > 0 ? ` Includes ${missingPillars.length} unexplored pillar${missingPillars.length > 1 ? 's' : ''} as expansion opportunities.` : ''}`,
      prompt: `${fullContext}${missingPillarNote}\n\nTASK: Create a concise executive summary deck for ${companyName}. Title: "${companyName} — AI Transformation: Executive Summary".\n\nThis is the AE's primary deliverable — designed for a short meeting (15-30 min) where you need to communicate maximum value in minimum time.\n\nSTRUCTURE (5-8 slides / 2-3 printed pages):\n\n1. TITLE SLIDE\n- "${companyName}: Frontier AI Transformation"\n- Subtitle: "Executive Summary — [Date]"\n- "Prepared by [AE Name], Microsoft"\n\n2. WHY NOW (1 slide)\n- One paragraph: why AI transformation matters for ${companyName} RIGHT NOW — reference a specific finding from your research (earnings call quote, recent announcement, competitive pressure)\n- 2-3 bullet points: their stated priorities mapped to transformation potential\n- One headline stat from industry benchmarks\n\n3. INDUSTRY CONTEXT (1 slide)\n- ${industryName} AI adoption landscape\n- Key benchmark metrics and peer comparisons\n- Market projection and competitive pressure\n\n4-6. RECOMMENDED FOCUS AREAS (1 slide per pillar)\n- For each active Frontier pillar, one slide:\n  • Pillar name + one-line description of what it means for ${companyName}\n  • 1-2 potential use cases (name + one sentence on value)\n  • Indicative ROI range (cite source)\n  • One customer reference outcome (from Microsoft published stories only — include source URL)\n\n7. SUCCESS CASES (1 slide)\n- 3-4 published Microsoft customer stories relevant to ${companyName}'s priorities\n- Company name, industry, key metric, and clickable link to the public story page\n\n8. SUGGESTED NEXT STEPS (1 slide)\n- 3-4 specific actions with suggested owners and timeframes\n- Clear ask: what you need from them to move forward\n- Proposed follow-up meeting topic and timing\n\nDESIGN REQUIREMENTS:\n- Professional, scannable — executives will skim this\n- Use bold headers, short bullets, white space\n- ${brandIdentityBlock}\n- Include a small "Estimated · Based on industry benchmarks" disclaimer footer on each slide\n- Speaker notes with talking points for the AE\n\nOUTPUT: Create TWO deliverables:\n1. A single HTML file (.html) with embedded CSS — print-ready (use @media print styles). Opens in browser, prints to 2-3 pages of A4/Letter. No external dependencies.\n2. A PowerPoint file (.pptx) — one slide per section above, clean layout, speaker notes with talking points. ${brandIdentityBlock}`,
    },
    {
      id: 'conversation-guide',
      label: 'Conversation Guide & Questions',
      icon: '💬',
      phase: 'prep',
      description: 'A structured question bank organized by conversation phase (opening, discovery, value framing, stakeholders, close). Each question has a "listen for" hint. Use to prepare before the meeting. Produces interactive HTML + Word.',
      prompt: `${fullContext}\n\nTASK: Create a meeting preparation guide with discovery and validation questions for the AE's conversation with ${companyName}. Title: "${companyName} — Conversation Guide".\n\nThis is the AE's prep document — reviewed before the meeting, glanced at during. It should feel like a trusted advisor whispering in your ear.\n\nSTRUCTURE BY CONVERSATION PHASE:\n\n—— PHASE 1: OPENING (2-3 min) ——\nGoal: Build rapport, validate you've done your homework.\n- 2-3 questions that reference specific findings from your research (recent news, earnings, leadership changes)\n- LISTEN FOR: Confirmation of priorities, corrections to your understanding, emotional energy around topics\n\n—— PHASE 2: DISCOVERY — CURRENT STATE (10-15 min) ——\nGoal: Understand where they are today and what's not working.\nFor EACH active Frontier pillar, provide 2-3 questions:\n- Questions about current tools, processes, and pain points in that area\n- Questions about what they've already tried (including failed initiatives)\n- LISTEN FOR: Urgency signals, budget indicators, timeline pressure, organizational blockers\n\n—— PHASE 3: VALUE FRAMING (10-15 min) ——\nGoal: Connect their pain to your use cases without pitching.\n- 2-3 questions that introduce use case concepts without naming products\n- Questions that test appetite for the ROI ranges you'll share\n- "What would it mean for your team if [outcome]?" type questions\n- LISTEN FOR: "Yes, and..." responses (buying signals), objections (address later), new priorities you missed\n\n—— PHASE 4: STAKEHOLDER & DECISION (5-10 min) ——\nGoal: Map the decision landscape.\n- Who else needs to be involved? Who has veto power?\n- What does their evaluation process look like?\n- Have they allocated budget or is this exploratory?\n- What's their timeline for a decision?\n- LISTEN FOR: Org chart clues, competing initiatives, budget cycle timing, urgency vs. nice-to-have\n\n—— PHASE 5: CLOSE & NEXT STEPS (2-3 min) ——\nGoal: Lock in momentum.\n- Summarize what you heard (2-3 bullets)\n- Propose specific next step (not vague "let's follow up")\n- Offer to send the executive summary / value story\n- LISTEN FOR: Agreement energy, hesitation (probe why), time commitment\n\n—— CHEAT SHEET ——\nAt the end, include:\n- Top 3 things to AVOID saying (common AE mistakes for this account type)\n- 3 "power phrases" grounded in their language (from priorities/challenges)\n- 1 "back pocket" question if conversation stalls\n- Key numbers to have ready (ROI ranges, customer references, market stats)\n\nFORMATTING:\n- Each question on its own line, clearly numbered\n- "LISTEN FOR" hints in italics or a different color — easy to spot at a glance\n- Compact enough to print on 2-3 pages for a physical meeting\n- ${brandIdentityBlock}\n\nOUTPUT: Create TWO deliverables:\n1. An interactive HTML file (.html) with embedded CSS and JavaScript — collapsible sections per phase, checkboxes next to each question (so the AE can tick off what was asked), a notes field per phase for live capture, and a "Print Summary" button that prints only checked questions + notes. ${brandIdentityBlock} No external dependencies.\n2. A Word document (.docx) — clean, print-ready version with all questions, "LISTEN FOR" hints in italics, and space for handwritten notes. Professional layout ready for a physical meeting.`,
    },
    {
      id: 'exec-email',
      label: 'Executive Briefing Email',
      icon: '✉️',
      phase: 'prep',
      description: 'A short strategic email to the C-suite referencing their priorities and one benchmark stat. Use for first outreach or re-engagement before a meeting. Creates an Outlook draft ready to send.',
      prompt: `${fullContext}\n\nTASK: Draft an Outlook email to ${companyName}'s C-suite executive. Reference their top 2-3 priorities by name. Include one industry benchmark stat and one ROI projection from their Inspiration Use Cases. End with a clear CTA for a 30-minute strategy conversation. Under 250 words. Tone: strategic peer, not vendor pitch.\n\nOUTPUT: Create this as a draft email in Outlook, ready to review and send.`,
    },
    {
      id: 'competitive-differentiation',
      label: 'Competitive Differentiation Brief',
      icon: '🏆',
      phase: 'prep',
      description: `A customer-shareable brief mapping ${companyName}'s priorities to Microsoft's full AI platform — Work IQ, Foundry IQ, Fabric IQ, Agent Platform, Security & Observability, and Multi-Model choice. Includes objection-handling talk tracks and public comparison links. Use when the customer is evaluating alternatives.`,
      prompt: `${fullContext}\n\nTASK: Create a competitive differentiation brief for ${companyName}. Title: "${companyName} — Why Microsoft's AI Platform: A Differentiation Brief".\n\nThis is a CUSTOMER-SHAREABLE document. It helps the AE articulate why Microsoft's AI platform is uniquely positioned to deliver on ${companyName}'s priorities — grounded in facts, not competitive attacks.\n\nIMPORTANT RULES:\n- This document IS shareable with the customer\n- Ground every claim in ${companyName}'s specific priorities, challenges, and use cases from the context above\n- Use the 6 Microsoft differentiation pillars below as the structure\n- CRITICAL: Do NOT position everything as M365 Copilot. Match the RIGHT platform to each use case — some will be Copilot (productivity), others Azure AI Foundry (custom agents), Microsoft Fabric (data/analytics), Copilot Studio (workflow agents), Power BI (insights), or Dynamics 365 (business apps)\n- Include talk tracks for common objection scenarios\n- NEVER make negative claims about any other vendor — focus on Microsoft's value on its own merits\n- All comparison framing should be "what Microsoft offers" not "what others lack"\n\nREFERENCE CONTEXT — MICROSOFT LEADERSHIP VISION:\nJudson Althoff (CEO, Microsoft Commercial Business) defines Frontier Transformation as built on "Intelligence + Trust" with three traits:\n1. AI in the flow of human ambition — Copilot + agents embedded in every role across every industry\n2. Ubiquitous innovation — Azure AI Foundry + Copilot Studio + Power Platform democratize building AI solutions for everyone\n3. Observability at every layer — Agent 365 as the control plane to observe, govern, and secure ALL AI artifacts\nSource: https://blogs.microsoft.com/blog/2026/01/27/how-microsoft-is-empowering-frontier-transformation-with-intelligence-trust/\nSource: https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/\nSource: https://blogs.microsoft.com/blog/2026/04/28/unlocking-human-ambition-to-drive-business-growth-with-ai/\n\nSTRUCTURE:\n\n1. EXECUTIVE SUMMARY (half page)\n- Opening: "${companyName}'s priorities in ${industryName} require an AI platform that [connects their specific needs to platform requirements]"\n- One paragraph connecting their stated priorities to the need for a comprehensive, secure, enterprise-grade AI platform that spans productivity, data intelligence, custom AI, and business applications\n- Key message: Microsoft is the only vendor offering a unified AI platform — from employee productivity (Work IQ) to custom agents (Foundry IQ) to data intelligence (Fabric IQ) — all governed by a single security and observability layer\n\n2. YOUR PRIORITIES, OUR PLATFORM (1 page)\n- Create a table mapping each of ${companyName}'s stated priorities to the SPECIFIC Microsoft platform that best serves it\n- For each priority: what they need → which platform delivers it → expected outcome\n- IMPORTANT: Match platforms accurately:\n  • Employee productivity, knowledge work, meeting prep → Microsoft 365 Copilot (Work IQ)\n  • Custom AI agents, RAG patterns, fine-tuned models → Azure AI Foundry (Foundry IQ)\n  • Data analytics, real-time intelligence, unified data estate → Microsoft Fabric + Power BI (Fabric IQ)\n  • Workflow automation agents, no-code/low-code → Copilot Studio + Power Platform\n  • Sales, service, operations processes → Dynamics 365 + Copilot\n  • Security, identity, threat protection → Microsoft Security (Entra, Defender, Purview)\n- Reference specific use cases from the Frontier pillar analysis above\n\n3. SIX REASONS MICROSOFT'S AI PLATFORM STANDS APART\n\n3a. WORK IQ — AI That Knows Your Business\n- Microsoft 365 Copilot is grounded in Work IQ — organizational intelligence from meetings, emails, chats, documents, and people relationships\n- Unlike standalone AI chat tools, Copilot reasons over your company's actual work context — not just what you paste into a prompt\n- For ${companyName}: explain how Work IQ applies to their specific productivity and knowledge-work challenges\n- Example proof: 90% of Fortune 500 now use Copilot; Mercedes Benz, NASA, ING, Fiserv deployed at global scale\n\n3b. FOUNDRY IQ — Build Custom AI That Transforms Your Business\n- Azure AI Foundry is the professional platform for building custom AI agents, RAG applications, and industry-specific AI solutions\n- Supports any model (OpenAI, open-source, custom fine-tuned), any data source, any deployment pattern\n- Built-in responsible AI tooling: content safety, prompt shields, groundedness detection, evaluation\n- For ${companyName}: identify which of their use cases need custom AI beyond Copilot — e.g., domain-specific agents, custom knowledge bases, AI-powered products\n- Example proof: Cemex built LUCA Bot on Foundry for 120+ KPIs across global operations; Air India's AI.g handles 40,000 daily queries with 97% success rate; Atomicwork built agentic service management on Foundry\n\n3c. FABRIC IQ — Unified Data Intelligence\n- Microsoft Fabric unifies data engineering, data science, real-time analytics, and business intelligence in one platform\n- Power BI delivers AI-powered insights from any data source with enterprise governance\n- Real-time intelligence capabilities enable streaming analytics and event-driven architectures\n- For ${companyName}: map this to their data and analytics priorities — demand forecasting, operational dashboards, real-time monitoring, data-driven decision making\n- Key differentiator: Fabric + Copilot together mean employees can ask questions of their data in natural language, grounded in their organization's actual data estate\n\n3d. AGENT PLATFORM — Build, Deploy, Govern at Every Skill Level\n- Two paths to build agents, ONE governance layer:\n  • Copilot Studio: no-code/low-code for business users and citizen developers (Dow Freight Agent, Eneco multilingual chatbot, BDO Colombia payroll agent)\n  • Azure AI Foundry: pro-code for developers building complex, multi-step agents (Fujitsu sales automation, Estée Lauder ConsumerIQ)\n- Agent 365: the enterprise control plane to observe, govern, manage, and secure ALL agents — whether built on Microsoft's platforms or third-party tools\n- IDC predicts 1.3B agents in circulation by 2028 — governance is not optional\n- For ${companyName}: suggest 2-3 agent scenarios at different complexity levels appropriate for their challenges\n\n3e. SECURITY & OBSERVABILITY — Trust Built Into Every Layer\n- Security is not an add-on — it's the foundation layer across the entire Microsoft AI stack:\n  • Microsoft Entra for identity and access\n  • Microsoft Defender for threat protection\n  • Microsoft Purview for data governance and compliance\n  • Enterprise Data Protection applies to ALL data Copilot and agents reason over\n- Agent 365 provides observability across ALL agents: registry, lifecycle management, policy enforcement, usage analytics\n- Users only see information they're authorized to access — zero additional configuration\n- For ${companyName}: reference their industry's specific compliance requirements (${industryName} regulations, data residency, audit requirements)\n\n3f. MULTI-MODEL CHOICE — Right Model for Each Task\n- Access multiple leading AI models within a single secure platform — OpenAI, Anthropic Claude, and open-source models\n- Model diversity by design: the right model is selected per task type, balancing capability, speed, and cost\n- No vendor lock-in: customers can bring their own models or use any model from the catalog\n- For ${companyName}: explain how different models serve different use cases in their context (e.g., fast reasoning for chat, deep analysis for research, specialized models for domain tasks)\n\n4. ADDRESSING COMMON QUESTIONS (1 page)\nCreate a table with 6 common objection scenarios and responses. Adapt these to ${companyName}'s context:\n\n| "We already have..." | Why Microsoft Is Different |\n|---|---|\n| An AI assistant / chat tool | "Copilot isn't a separate tool — it's embedded in the apps your people already use. Work IQ means it understands your company's context from meetings, emails, and documents — not just what you type." |\n| A productivity suite with some AI features | "The difference is depth AND breadth. Beyond productivity, Microsoft's platform extends to custom AI (Foundry), data intelligence (Fabric), and workflow automation (Copilot Studio) — all governed by the same security layer." |\n| An AI platform investment on another cloud | "Microsoft's AI platform works alongside your current tools. Azure AI Foundry supports any model and integrates with existing data sources. Agent 365 governs ALL agents regardless of where they were built." |\n| A data analytics / BI platform | "Fabric unifies data engineering, real-time analytics, and BI in one governed platform. Combined with Copilot, your analysts and business users can explore data in natural language — grounded in your actual data estate, not just connected to it." |\n| Concerns about data security with AI | "Microsoft doesn't train on your data. Security inherits from your existing Microsoft 365 and Azure controls — permissions, DLP, auditing, data residency — all enforced automatically across Copilot, agents, and custom AI." |\n| We're building our own AI agents | "That's exactly what Foundry and Copilot Studio are designed for. Whether your team builds no-code or pro-code agents, Agent 365 provides the governance layer to manage them all — lifecycle, policies, security, and observability in one place." |\n\n5. WHAT THIS MEANS FOR ${companyName.toUpperCase()} (half page)\n- Synthesis paragraph: map their top 3 priorities to the SPECIFIC platforms that serve each one (not everything through Copilot)\n- Show the "stack" — how Work IQ + Foundry IQ + Fabric IQ + Security work together as layers, not silos\n- Quantify where possible using ROI ranges from the evidence above\n- End with a clear "next step" invitation\n\n6. REFERENCES\nInclude these public resources as clickable hyperlinks:\n- Frontier Transformation vision: https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/\n- Microsoft 365 Copilot vs. the Competition: https://www.microsoft.com/en-us/microsoft-365-copilot/copilot-vs-the-competition\n- Compare with ChatGPT Enterprise: https://www.microsoft.com/en-us/microsoft-365-copilot/copilot-vs-chatgpt-enterprise\n- Compare with Claude Enterprise: https://www.microsoft.com/en-us/microsoft-365-copilot/copilot-vs-claude-enterprise\n- Compare with Gemini Enterprise: https://www.microsoft.com/en-us/microsoft-365-copilot/copilot-vs-gemini-enterprise\n- Azure AI Foundry: https://azure.microsoft.com/en-us/products/ai-foundry\n- Microsoft Fabric: https://www.microsoft.com/en-us/microsoft-fabric\n- Copilot Studio: https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio\n- Microsoft Security: https://www.microsoft.com/en-us/security\n\n7. DISCLAIMERS (footer)\nInclude all standard compliance disclaimers from the guidelines above.\n\nDESIGN:\n- Professional, scannable — designed for a customer executive audience\n- Use bold headers, short bullets, white space\n- ${brandIdentityBlock}\n- Tables for structured comparisons\n- Total length: 4-6 pages when printed\n\nOUTPUT: Create a single HTML file (.html) with embedded CSS — print-ready (@media print styles), professional layout. Opens in browser, prints cleanly. No external dependencies.`,
    },
    {
      id: 'customer-presentation',
      label: 'Customer Presentation Package',
      icon: '🎯',
      phase: 'meeting',
      description: `The full package — use case catalog, executive presentation, and business case combined. Use for a 60-min deep-dive workshop or when the customer wants the complete value story. Produces HTML + PPTX.${missingPillars.length > 0 ? ` Includes ${missingPillars.length} unexplored pillar${missingPillars.length > 1 ? 's' : ''} as expansion opportunities.` : ''}`,
      prompt: `${fullContext}${missingPillarNote}\n\nTASK: Create a complete customer presentation package for ${companyName}. Title: "${companyName} — AI Transformation: Value Story & Business Case".\n\nBEFORE GENERATING: Ask the user — "What is your preferred timeline for the use case rollout? (e.g., 6 months, 12 months, 18 months)". Use their answer to shape the investment phasing in Section 3.\n\nThis single deliverable has FOUR integrated sections. Each section has a distinct purpose — DO NOT duplicate content across sections.\n\n—— SECTION 1: EXECUTIVE PRESENTATION (the strategic narrative — WHY) ——\n\nStructure as 5-8 slides:\n1. Title — "${companyName}: AI Transformation Opportunity" with "Estimated Value Scenarios" subtitle\n2. Industry context + market urgency — reference specific findings from your research (earnings calls, press releases, competitive moves)\n3-6. One section per active Frontier pillar:\n  • Their priorities mapped to this pillar\n  • How Microsoft's AI platform addresses each priority (map to the RIGHT platform: M365 Copilot, Azure AI Foundry, Microsoft Fabric, Copilot Studio, Power BI, or Dynamics 365)\n  • Indicative ROI ranges from industry benchmarks\n  • One customer reference story with clickable source URL\n7. Stakeholder alignment + suggested areas to explore\n\nProducts appear only as "powered by" footnotes. Frame all numbers as estimates and references.\n\n—— SECTION 2: POTENTIAL USE CASES (the inspiration catalog — WHAT) ——\n\nPART A — INSPIRATION USE CASES (identified by the AE in the canvas as conversation starters for ${companyName}):\nList each of these use cases organized by Frontier pillar, with a brief summary of what it does, who benefits, and the expected value: ${ucList}\n\nPART B — EXPANSION OPPORTUNITIES:\nBased on ${companyName}'s priorities and your research findings, generate 10-15 ADDITIONAL use case ideas beyond the Inspiration Use Cases listed in Part A. For each:\n- Name and 1-sentence description\n- Which Frontier pillar it maps to\n- Estimated potential impact (high/medium/low)\n- Indicative complexity to implement\n- Suggested executive sponsor (for the customer to confirm or change)\n- One comparable company reference outcome if available (from Microsoft customer stories only — include source URL)${missingPillars.length > 0 ? `\n\nPRIORITIZE generating use cases for the missing pillars (${missingPillars.map(p => p.name).join(', ')}) — these represent untapped value areas.` : ''}\n\n—— SECTION 3: BUSINESS CASE (the financial analysis — HOW MUCH) ——\n\nIMPORTANT: This section contains ONLY financial analysis. Do NOT repeat use case descriptions, customer stories, or pillar narratives from Sections 1 and 2.\n\nFINANCIAL GROUNDING:\n- Use the public financial data you researched (10-K, earnings, annual reports) as the baseline. If found, reference their actual revenue, headcount, and cost structure.\n- If no public data available (private company), present ALL projections as percentage improvements only — NEVER fabricate absolute dollar figures.\n- State the baseline assumption explicitly: "Based on ${companyName}'s reported $X revenue..." OR "Based on industry averages for a ${data.companySize} ${industryName} company..."\n- Cite the source of every number.\n\nInclude:\n- Investment thesis — why now (one paragraph, referencing their recent announcements)\n- Estimated value scenarios — percentage improvement ranges per use case, translated to indicative dollar ranges if public financials available\n- "Delay risk" — competitive and operational cost of inaction\n- Risk-adjusted scenarios (conservative / moderate / optimistic)\n- Investment phasing aligned to the user's preferred timeline\n\n—— SECTION 4: SUGGESTED NEXT STEPS (the call to action — WHO / WHEN) ——\n\n- 3-5 specific proposed actions for ${companyName}\n- For each action: what needs to happen, suggested sponsor (for customer to confirm or change), and proposed timing\n- Clear ask: what the AE needs from the customer to advance the conversation\n- Proposed follow-up meeting topic and timing\n- Frame as enterprise-wide transformation — not pilots or limited rollouts\n\n—— OUTPUT ——\n\nCreate TWO deliverables:\n1. A single HTML file (.html) with embedded CSS — professional, executive-ready design. ${brandIdentityBlock} All four sections clearly delineated with navigation. Presentation-ready: open in browser full-screen to present, or print to PDF. No external dependencies.\n2. A PowerPoint file (.pptx) — one slide per major section, clean layout, speaker notes with talking points. ${brandIdentityBlock}`,
    },
    {
      id: 'follow-up-email',
      label: 'Follow-Up Email',
      icon: '📨',
      phase: 'after',
      description: 'A post-meeting recap email with priorities discussed, use cases explored, and proposed next steps. Use after the customer conversation to maintain momentum. Creates an Outlook draft ready to send.',
      prompt: `${fullContext}\n\nTASK: Write a follow-up email after meeting with ${companyName}. Structure:\n1. Thank them and reference a specific insight from the conversation\n2. Recap their top 3 priorities (use their words)\n3. Recap the use cases discussed per pillar with indicative ROI references\n4. List proposed next steps with suggested owners and dates\n5. Propose next meeting focused on [highest-priority pillar]\n\nTone: Confident partner, not vendor. Under 300 words.\n\nOUTPUT: Create this as a draft email in Outlook, ready to review, attach files to, and send.`,
    },
    {
      id: 'customer-alignment',
      label: 'Customer Stakeholder Alignment',
      icon: '🤝',
      phase: 'after',
      description: 'A document written AS the customer FOR their colleagues — not a Microsoft pitch. The customer champion forwards this internally to get org-wide alignment on AI priorities and next steps.',
      prompt: `${fullContext}\n\nTASK: Create a stakeholder alignment communication for ${companyName}'s internal teams — the kind of document a customer champion would circulate to get buy-in across their organization. Title: "${companyName} — AI Transformation Alignment Brief".\n\nThis is NOT a Microsoft sales document. It should read as if written BY ${companyName}'s transformation lead FOR their colleagues.\n\nInclude:\n1. "Why AI, Why Now" — frame in ${companyName}'s own strategic priorities and ${industryName} market context\n2. Alignment summary — which business areas were identified, organized by Frontier pillar, using ${companyName}'s language for each priority\n3. Use case overview — for each Inspiration Use Case, a 2-sentence summary of what it does and who benefits (employees, customers, operations)\n4. Estimated value potential — indicative ROI ranges per pillar (framed as "based on similar ${industryName} deployments")\n5. "What we're asking" — a clear ask for each stakeholder group: sponsor, validate, participate in next steps\n6. Suggested next steps — proposed timeline for validation conversations with each business area\n\nTone: Internal, collaborative, action-oriented. No Microsoft jargon — use ${companyName}'s language. Frame as "our opportunity" not "Microsoft's proposal".\n\nOUTPUT: Create this as a single HTML file (.html) with embedded CSS — clean, professional design that a customer executive would be comfortable forwarding internally. ${brandIdentityBlock} Print-ready. No external dependencies.`,
    },
    {
      id: 'account-team-handoff',
      label: 'Account Team & Partner Handoff',
      icon: '📋',
      phase: 'after',
      description: 'An internal Microsoft brief for STU, specialists, and partners with solution mapping, stakeholder map, and execution plan. Use after the customer shows interest and you need the extended team to execute.',
      prompt: `${fullContext}\n\nTASK: Create a handoff brief for the Microsoft account team (STU), specialist sellers, and partner ecosystem to drive progress on the Inspiration Use Cases for ${companyName}. Title: "${companyName} — STU & Partner Handoff Brief".\n\nCONTEXT: The customer has shown interest in the AI Value Story. This document enables the extended team to take action on the areas where the customer expressed interest.\n\nThis is an INTERNAL Microsoft document — not customer-facing. It should give every team member what they need to execute.\n\nInclude:\n1. Engagement summary — what ${companyName} showed interest in, which use cases were discussed, expected timeline\n2. Account snapshot — ${companyName} (${data.companySize}, ${industryName}), key priorities, relationship context\n3. Frontier pillar alignment — which pillars are active, which priorities map to each, and the Inspiration Use Cases\n4. Solution play mapping — for each Inspiration Use Case, which Microsoft products/platforms are involved and which specialist sellers or solution areas should engage\n5. Evidence & proof points — the customer stories and ROI benchmarks that support each use case (for seller and partner prep — include source URLs)\n6. STAKEHOLDER POWER MAP (dedicated section with visual hierarchy):\n   a. Org hierarchy — Board of Directors → C-Suite → SVP/VP → Operational leaders. Show reporting lines where known.\n   b. Role-to-pillar mapping — for each Frontier pillar, who is the likely sponsor based on title and function\n   c. Influence map — classify each stakeholder as: Champion (advocates internally), Economic Buyer (controls budget), Technical Evaluator (validates feasibility), or Potential Blocker (may resist change)\n   d. Suggested Microsoft counterparts — for each key customer stakeholder, who from Microsoft should engage (AE, STU lead, specialist seller, CSA)\n   e. Engagement strategy — for each key person, one sentence on how to approach them and what they care about\n   Format this as a visual org-chart-style table, not just a bullet list.\n7. Partner opportunity — where systems integrators, ISVs, or consulting partners add value (implementation, industry expertise, managed services)\n8. Execution plan — who does what, key milestones, dependencies, and success metrics\n9. Open questions & risks — areas that still need validation, dependencies, and potential blockers\n\nTone: Direct, actionable, no fluff. This is a working document for execution.\n\nOUTPUT: Create this as a single HTML file (.html) with embedded CSS — clean, structured, easy to scan. Use Microsoft branding colors (#0078D4, #243A5E, #50E6FF). Designed to be shared via email or Teams. No external dependencies.`,
    },
  ]

  return {
    title: `Frontier Transformation: ${companyName}`,
    executive_summary,
    marketContext,
    industryBenchmark,
    pillarSections,
    intelligenceSection,
    securitySection,
    solutionMap,
    stakeholderMap,
    missingPillars: missingPillars.map(p => ({ id: p.id, name: p.name, fullName: p.fullName, icon: p.icon, subtitle: p.subtitle })),
    nextSteps,
    coworkPrompts,
  }
}
