import type { PriorityKeywordMap } from './types';

// Frontier Canvas — Priority Keywords
// Maps each challenge to keywords that match against AE's "strategic priorities" free-text input.
// When a keyword matches, the challenge gets a "Matches priorities" badge.

export const PRIORITY_KEYWORDS: PriorityKeywordMap[] = [
  {
    challengeId: 'operational-efficiency',
    keywords: ['efficiency', 'productivity', 'streamline', 'automate', 'process', 'operations', 'lean', 'waste', 'throughput', 'cycle time', 'bottleneck'],
  },
  {
    challengeId: 'customer-experience',
    keywords: ['customer experience', 'CX', 'personalization', 'loyalty', 'retention', 'NPS', 'satisfaction', 'engagement', 'omnichannel', 'journey'],
  },
  {
    challengeId: 'revenue-growth',
    keywords: ['revenue', 'growth', 'market share', 'upsell', 'cross-sell', 'new markets', 'go-to-market', 'pipeline', 'sales', 'monetize'],
  },
  {
    challengeId: 'security-compliance',
    keywords: ['security', 'compliance', 'regulation', 'audit', 'risk', 'GDPR', 'SOX', 'HIPAA', 'governance', 'breach', 'vulnerability', 'zero trust'],
  },
  {
    challengeId: 'data-analytics',
    keywords: ['data', 'analytics', 'insights', 'reporting', 'dashboard', 'business intelligence', 'BI', 'data-driven', 'real-time', 'visualization'],
  },
  {
    challengeId: 'workforce-modernization',
    keywords: ['workforce', 'employee', 'talent', 'hiring', 'retention', 'collaboration', 'productivity', 'skills gap', 'hybrid work', 'burnout', 'enablement'],
  },
  {
    challengeId: 'innovation-speed',
    keywords: ['innovation', 'time-to-market', 'R&D', 'agile', 'speed', 'prototype', 'launch', 'development cycle', 'competitive', 'first mover'],
  },
  {
    challengeId: 'cost-optimization',
    keywords: ['cost', 'reduce', 'savings', 'budget', 'margin', 'OPEX', 'CAPEX', 'ROI', 'consolidate', 'optimize spend', 'TCO'],
  },
  {
    challengeId: 'sustainability',
    keywords: ['sustainability', 'ESG', 'carbon', 'emissions', 'green', 'renewable', 'circular', 'net zero', 'environmental', 'climate'],
  },
  {
    challengeId: 'digital-transformation',
    keywords: ['digital transformation', 'modernize', 'legacy', 'cloud', 'migration', 'technical debt', 'platform', 'architecture', 'infrastructure'],
  },
  {
    challengeId: 'supply-chain',
    keywords: ['supply chain', 'logistics', 'inventory', 'demand', 'forecast', 'procurement', 'disruption', 'visibility', 'supplier', 'fulfillment'],
  },
  {
    challengeId: 'knowledge-management',
    keywords: ['knowledge', 'content', 'documentation', 'search', 'information', 'institutional', 'onboarding', 'training', 'expertise', 'findability'],
  },
  {
    challengeId: 'risk-management',
    keywords: ['risk', 'fraud', 'detect', 'predict', 'mitigate', 'governance', 'exposure', 'loss', 'credit', 'actuarial'],
  },
  {
    challengeId: 'patient-outcomes',
    keywords: ['patient', 'clinical', 'care', 'outcomes', 'student', 'learning', 'health', 'quality of care', 'access', 'equity'],
  },
  {
    challengeId: 'field-operations',
    keywords: ['field', 'frontline', 'mobile', 'remote', 'technician', 'store', 'branch', 'on-site', 'deskless', 'worker safety'],
  },
  {
    challengeId: 'autonomous-systems',
    keywords: ['autonomous', 'agent', 'agentic', 'intelligent', 'automation', 'self-driving', 'robotics', 'IoT', 'digital twin', 'predictive maintenance'],
  },
];
