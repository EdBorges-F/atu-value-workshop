// ATU Value Workshop — Core Type Definitions
// All data structures for the React app

// ─── Industry ───────────────────────────────────────────────
export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  themes: string[];
  subVerticals?: string[];
}

// ─── Challenge / Board Mandate ──────────────────────────────
export interface Challenge {
  id: string;
  name: string;
  description: string;
  industryIds: string[];
  pillarId: 'enrich' | 'reshape' | 'reinvent' | 'bend' | 'security';
}

// ─── Evidence Provenance ────────────────────────────────────
export type EvidenceSource =
  | 'Microsoft Case Study'
  | 'Forrester TEI'
  | 'Press Release'
  | 'Earnings Call'
  | 'Partner Report'
  | 'Industry Report'
  | 'Customer Presentation';

export interface Evidence {
  company: string;
  metric: string;
  source: EvidenceSource;
  year?: number;
  sourceUrl?: string;
}

// ─── Use Case ───────────────────────────────────────────────
export type CompanySize = 'small' | 'mid' | 'large' | 'enterprise';

// Agent capability classification on the simple→complex spectrum
// (per Building Agents with Microsoft customer pitch deck, L200):
//   • generation — generate summaries, images, audio, and more from instructions
//   • retrieval  — retrieve and reason over information to produce a grounded response
//   • action     — take actions to automate workflows and replace repetitive tasks
export type AgentCapabilityType = 'generation' | 'retrieval' | 'action';

export interface UseCase {
  id: string;
  name: string;
  description: string;
  industryIds: string[];
  challengeIds: string[];
  sizeRelevance: CompanySize[];
  evidence: string[];
  microsoftProducts: string[];
  category?: string;
  pillarId: 'enrich' | 'reshape' | 'reinvent' | 'bend' | 'security';
  agentType?: AgentCapabilityType;
}

// ─── Challenge → Use Case Mapping ───────────────────────────
export interface ChallengeUseCaseMap {
  challengeId: string;
  useCaseIds: string[];
}

// ─── Customer Story ─────────────────────────────────────────
export interface CustomerStory {
  id: string;
  company: string;
  industry: string;
  product: string;
  challengeIds: string[];
  keyMetrics: string[];
  summary: string;
  quotes?: string[];
  storyUrl?: string;
}

// ─── Function Vision ────────────────────────────────────────
export interface FunctionVision {
  id: string;
  name: string;
  description: string;
  keyCapabilities: string[];
  relevantUseCases: string[];
}

// ─── Frontier Vision ────────────────────────────────────────
export interface TransformationStage {
  name: string;
  description: string;
}

export interface IQProduct {
  tagline: string;
  description: string;
  components: string[];
}

export interface E7StackComponent {
  name: string;
  description: string;
}

export interface Agent365Data {
  tagline: string;
  capabilities: string[];
}

export interface FrontierVisionData {
  stats: Record<string, string>;
  transformationArc: TransformationStage[];
  solutionsOverview: string[];
  securityNarrative?: string;
  iqProducts?: {
    workIQ: IQProduct;
    fabricIQ: IQProduct;
    foundryIQ: IQProduct;
  };
  microsoftAgents?: string[];
  e7Stack?: E7StackComponent[];
  agent365?: Agent365Data;
}

// ─── Priority Keywords ──────────────────────────────────────
export interface PriorityKeywordMap {
  challengeId: string;
  keywords: string[];
}

// ─── Readiness ──────────────────────────────────────────────
export type ReadinessTier = 'ready' | 'developing' | 'early-stage';

export interface ReadinessOption {
  label: string;
  score: number;
}

export interface ReadinessQuestion {
  id: string;
  question: string;
  options: ReadinessOption[];
}
