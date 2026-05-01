// Microsoft Customer Zero — AI Transformation Story
// DATA REMOVED: NDA-gated content is not included in this public repository.
// Interfaces and type exports are preserved for build compatibility.
// To restore data, use a secure data source (see project plan for architecture options).

export interface CustomerZeroUseCase {
  id: string
  name: string
  pillar: 'enrich' | 'reshape' | 'reinvent' | 'bend'
  metrics: string[]
  source: string
}

export interface CustomerZeroRecipe {
  id: string
  name: string
  description: string
  pattern: string
}

export interface CustomerZeroTransformationPrinciple {
  id: string
  digital: string
  ai: string
}

export const CUSTOMER_ZERO_USE_CASES: CustomerZeroUseCase[] = []

export const CUSTOMER_ZERO_PATTERNS: readonly { id: string; name: string; description: string; level: number }[] = []

export const CUSTOMER_ZERO_RECIPES: CustomerZeroRecipe[] = []

export const CUSTOMER_ZERO_PRINCIPLES: CustomerZeroTransformationPrinciple[] = []

export const CUSTOMER_ZERO_NEXT_STEPS: readonly { id: string; title: string; description: string }[] = []

export const CUSTOMER_ZERO_STATS = {
  totalInternalCaseStudies: '',
  deckDate: '',
  refreshCadence: '',
  contactEmail: '',
  resourceUrl: '',
} as const

export interface CustomerZeroDeptUseCase {
  name: string
  description: string
  metrics: { metric: string; value: string }[]
}

export interface CustomerZeroDepartment {
  id: string
  name: string
  description: string
  pillarIds: string[]
  useCases: CustomerZeroDeptUseCase[]
  headlineMetrics: { metric: string; value: string; context: string }[]
  tools: string[]
  pattern: 'human-with-assistant' | 'human-agent-teams' | 'human-led-agent-operated' | 'mixed'
  quote?: string
}

export const CUSTOMER_ZERO_DEPARTMENTS: CustomerZeroDepartment[] = []

export interface CustomerZeroProofPoint {
  department: string
  headlineMetric: string
  value: string
}

export const CUSTOMER_ZERO_HEADLINE_PROOF_POINTS: CustomerZeroProofPoint[] = []