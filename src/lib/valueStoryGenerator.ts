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
    `Design a pilot scope with ${companyName}'s team — clear outcomes, owners, and timeline`,
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
    ? '\n\nCONFIRMED EXECUTIVE SPONSORS (assigned by AE):\n' +
      Object.entries(data.pillarOwners)
        .filter(([, contact]) => contact != null)
        .map(([pillarId, contact]) => {
          const pillarNames: Record<string, string> = {
            enrich: 'Employee Experience (Enrich)', reshape: 'Business Processes (Reshape)',
            reinvent: 'Customer Engagement (Reinvent)', bend: 'Innovation (Bend)',
            intelligence: 'Data & Intelligence', security: 'Security & Trust',
          }
          return `- ${pillarNames[pillarId] || pillarId}: ${contact!.name} — ${contact!.title}`
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

  const fullContext = `You are helping a Microsoft Account Executive prepare materials for ${companyName}, a ${sizeDesc} in ${industryName}.\n\nCUSTOMER CONTEXT:\n- Strategic priorities: ${statedPriorities}\n- Key challenges: ${challengeList}\n- Transformation areas:\n  ${pillarContext}${discoveryBlock}${benchmarkBlock}${roiBlock}${stakeholderBlock}\n\nGUIDELINES:\n- Lead with customer's language, not Microsoft product names\n- Reference specific use cases and evidence from above\n- Keep tone consultative, not salesy\n- Include specific next steps with sponsors\n- IMPORTANT FRAMING: All projections, ROI figures, and timelines are ESTIMATES and REFERENCES for inspiration — use language like "estimated", "potential", "indicative range", "based on similar deployments", "for reference". Never present figures as guarantees or commitments. Titles should reflect this (e.g., "Estimated Implementation Roadmap", "Potential Value Scenarios", "Indicative ROI Range"). This is a starting point for conversation, not a binding proposal.${complianceBlock}`

  // Identify missing pillars for suggestion
  const activePillarIds = new Set(pillarSections.map(ps => ps.pillar.id))
  const missingPillars = FRONTIER_PILLARS.filter(p => !activePillarIds.has(p.id))
  const missingPillarNote = missingPillars.length > 0
    ? `\n\nIMPORTANT — MISSING PILLARS:\n${companyName}'s current priorities don't cover these Frontier pillars: ${missingPillars.map(p => p.fullName).join(', ')}.\nProactively suggest 2-3 use cases per missing pillar that would create additional value for a ${industryName} company of this size. Frame them as "expansion opportunities" worth exploring.`
    : ''

  // Brand color instruction for HTML deliverables
  const brandColorInstruction = data.websiteUrl
    ? `Use ${companyName}'s brand color palette — extract their primary, secondary, and accent colors from ${data.websiteUrl}. If unable to determine, fall back to a neutral professional palette (#1a1a2e, #16213e, #0f3460).`
    : `Use a neutral professional color palette (#1a1a2e, #16213e, #0f3460) for styling.`

  const coworkPrompts: CoworkPrompt[] = [
    {
      id: 'exec-email',
      label: 'Executive Briefing Email',
      icon: '🎯',
      description: 'Draft an Outlook email to the customer executive',
      prompt: `${fullContext}\n\nTASK: Draft an Outlook email to ${companyName}'s C-suite executive. Reference their top 2-3 priorities by name. Include one industry benchmark stat and one ROI projection from their selected use cases. End with a clear CTA for a 30-minute strategy conversation. Under 250 words. Tone: strategic peer, not vendor pitch.\n\nOUTPUT: Create this as a draft email in Outlook, ready to review and send.`,
    },
    {
      id: 'frontier-deck',
      label: 'Value Proposition Deck',
      icon: '📊',
      description: 'Generate a presentation deck (HTML + PPTX) for the customer',
      prompt: `${fullContext}\n\nTASK: Create a 5-8 section presentation for ${companyName}. Title: "${companyName} — AI Transformation Opportunity".\n\nSection structure:\n1. Title slide with "Estimated Value Scenarios" subtitle\n2. Industry context + market urgency (use benchmark data as reference points)\n3-6. One section per active Frontier pillar — their priorities, matched use cases, indicative ROI ranges, and customer reference stories\n7. Stakeholder alignment + suggested areas to explore\n8. Proposed next steps with sponsors and timeline\n\nProducts appear only as "powered by" footnotes. Frame all numbers as estimates and references.\n\nOUTPUT: Create TWO deliverables:\n1. A single HTML file (.html) with embedded CSS — professional, clean design. ${brandColorInstruction} The HTML should be presentation-ready: open it in a browser to present full-screen, or print to PDF as a handout. Include page-break CSS hints for printing. No external dependencies — everything inline.\n2. A PowerPoint file (.pptx) with the same content — one slide per section, clean layout, speaker notes with talking points. ${brandColorInstruction}`,
    },
    {
      id: 'business-case',
      label: 'Business Case',
      icon: '💰',
      description: 'Generate an HTML business case to present to the customer',
      prompt: `${fullContext}\n\nTASK: Generate an estimated business case and value proposal for ${companyName}'s AI investment as a single, self-contained HTML page. Title: "Estimated Business Case — ${companyName} AI Transformation".\n\nFINANCIAL GROUNDING — IMPORTANT:\n- First, look up ${companyName}'s publicly available financial data (10-K, annual reports, earnings). If found, use their actual revenue, headcount, and cost structure as the baseline for projections.\n- If no public financial data is available (private company), present ALL projections as percentage improvements only (e.g., "15-25% reduction in X") — NEVER fabricate absolute dollar figures.\n- Always state the baseline assumption explicitly: "Based on ${companyName}'s reported $X revenue..." OR "Based on industry averages for a ${data.companySize} ${industryName} company..."\n- Cite the source of every number: customer reference story, industry benchmark, or public financial filing.\n\nInclude:\n1. Executive summary — why now, market context\n2. Investment thesis — reference the ROI evidence above as indicative benchmarks\n3. Estimated value scenarios using percentage improvement ranges per use case. If public financials are available, translate percentages into indicative dollar ranges. If not, keep as percentages.\n4. "Delay risk" — competitive and operational cost of inaction\n5. Indicative implementation cost considerations for a ${data.companySize} company\n6. Risk-adjusted scenarios (conservative / moderate / optimistic percentage ranges)\n7. Suggested investment phasing aligned to the roadmap\n\nUse conservative estimates. Label all figures as "estimated" or "indicative". Cite every source.\n\nOUTPUT: Create this as a single HTML file (.html) with embedded CSS — executive-ready design with professional charts and tables. Open in a browser to present to the CFO, or print to PDF. ${brandColorInstruction} No external dependencies — everything inline.`,
    },
    {
      id: 'customer-alignment',
      label: 'Customer Stakeholder Alignment',
      icon: '🤝',
      description: 'Generate an HTML alignment brief for customer stakeholders and teams',
      prompt: `${fullContext}\n\nTASK: Create a stakeholder alignment communication for ${companyName}'s internal teams — the kind of document a customer champion would circulate to get buy-in across their organization. Title: "${companyName} — AI Transformation Alignment Brief".\n\nThis is NOT a Microsoft sales document. It should read as if written BY ${companyName}'s transformation lead FOR their colleagues.\n\nInclude:\n1. "Why AI, Why Now" — frame in ${companyName}'s own strategic priorities and ${industryName} market context\n2. Alignment summary — which business areas were identified, organized by Frontier pillar, using ${companyName}'s language for each priority\n3. Use case overview — for each selected use case, a 2-sentence summary of what it does and who benefits (employees, customers, operations)\n4. Estimated value potential — indicative ROI ranges per pillar (framed as "based on similar ${industryName} deployments")\n5. "What we're asking" — a clear ask for each stakeholder group: sponsor, validate, participate in next steps\n6. Suggested next steps — proposed timeline for validation conversations with each business area\n\nTone: Internal, collaborative, action-oriented. No Microsoft jargon — use ${companyName}'s language. Frame as "our opportunity" not "Microsoft's proposal".\n\nOUTPUT: Create this as a single HTML file (.html) with embedded CSS — clean, professional design that a customer executive would be comfortable forwarding internally. ${brandColorInstruction} Print-ready. No external dependencies.`,
    },
    {
      id: 'follow-up-email',
      label: 'Follow-Up Email',
      icon: '📨',
      description: 'Draft an Outlook email with recap and action items',
      prompt: `${fullContext}\n\nTASK: Write a follow-up email after meeting with ${companyName}. Structure:\n1. Thank them and reference a specific insight from the conversation\n2. Recap their top 3 priorities (use their words)\n3. Confirm the use cases aligned per pillar with expected ROI\n4. List agreed next steps with sponsors and dates\n5. Propose next meeting focused on [top priority pillar]\n\nTone: Confident partner, not vendor. Under 300 words.\n\nOUTPUT: Create this as a draft email in Outlook, ready to review, attach files to, and send.`,
    },
    {
      id: 'uc-expansion',
      label: 'Use Case Discovery',
      icon: '🔍',
      description: `Generate an HTML use case catalog to present + Word to send${missingPillars.length > 0 ? ` (+ ${missingPillars.length} missing pillar${missingPillars.length > 1 ? 's' : ''})` : ''}`,
      prompt: `${fullContext}${missingPillarNote}\n\nTASK: Create a comprehensive use case catalog for ${companyName}. Title it "Use Case Inspiration Catalog — ${companyName}".\n\nPART 1 — CONFIRMED USE CASES (already selected and aligned with ${companyName}):\nList each of these use cases organized by Frontier pillar, with a brief summary of what it does, who benefits, and the expected value: ${ucList}\n\nPART 2 — EXPANSION OPPORTUNITIES:\nBased on ${companyName}'s priorities, generate 10-15 ADDITIONAL use case ideas beyond those already selected. For each new use case provide:\n- Name and 1-sentence description\n- Which Frontier pillar it maps to\n- Estimated potential impact (high/medium/low)\n- Indicative complexity to implement\n- Suggested executive sponsor\n- One comparable company reference outcome if available (from Microsoft customer stories only)\n\nFocus on ${industryName}-specific opportunities that align with their stated priorities. Frame as inspiration — these are possibilities worth exploring, not prescriptions.${missingPillars.length > 0 ? `\n\nPRIORITIZE generating use cases for the missing pillars (${missingPillars.map(p => p.name).join(', ')}) — these represent potential value areas the customer hasn't considered yet.` : ''}\n\nOUTPUT: Create two deliverables:\n1. A single HTML file (.html) with embedded CSS — professional design. ${brandColorInstruction} Clearly separate "Confirmed" and "Expansion" sections. Presentation-ready: open in browser or print to PDF. No external dependencies.\n2. A Word document (.docx) version for the AE to customize and share with the customer's innovation team.`,
    },
    {
      id: 'account-team-handoff',
      label: 'Account Team & Partner Handoff',
      icon: '📋',
      description: 'Generate an HTML handoff brief for the STU and partners after customer agreement',
      prompt: `${fullContext}\n\nTASK: Create a handoff brief for the Microsoft account team (STU), specialist sellers, and partner ecosystem to drive progress on the AGREED use cases for ${companyName}. Title: "${companyName} — STU & Partner Handoff Brief".\n\nCONTEXT: The customer has reviewed and agreed to the AI Value Story. This document enables the extended team to take action.\n\nThis is an INTERNAL Microsoft document — not customer-facing. It should give every team member what they need to execute.\n\nInclude:\n1. Agreement summary — what ${companyName} agreed to, which use cases are approved, expected timeline\n2. Account snapshot — ${companyName} (${data.companySize}, ${industryName}), key priorities, relationship context\n3. Frontier pillar alignment — which pillars are active, which priorities map to each, and the approved use cases\n4. Solution play mapping — for each approved use case, which Microsoft products/platforms are involved and which specialist sellers or solution areas should engage\n5. Evidence & proof points — the customer stories and ROI benchmarks that support each use case (for seller and partner prep)\n6. Stakeholder map — who at ${companyName} sponsors each area, suggested Microsoft counterparts, and partner roles\n7. Partner opportunity — where systems integrators, ISVs, or consulting partners add value (implementation, industry expertise, managed services)\n8. Execution plan — who does what, key milestones, dependencies, and success metrics\n9. Open questions & risks — areas that still need validation, dependencies, and potential blockers\n\nTone: Direct, actionable, no fluff. This is a working document for execution.\n\nOUTPUT: Create this as a single HTML file (.html) with embedded CSS — clean, structured, easy to scan. Use Microsoft branding colors (#0078D4, #243A5E, #50E6FF). Designed to be shared via email or Teams. No external dependencies.`,
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
