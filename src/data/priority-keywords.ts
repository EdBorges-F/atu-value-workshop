import type { PriorityKeywordMap } from './types';

// Frontier Canvas — Priority Keywords
// Maps each challenge to keywords that match against AE's "strategic priorities" free-text input.
// When a keyword matches, the challenge gets a "Matches priorities" badge.

export const PRIORITY_KEYWORDS: PriorityKeywordMap[] = [
  {
    challengeId: 'operational-efficiency',
    keywords: [
      'efficiency', 'productivity', 'streamline', 'automate', 'process', 'operations', 'lean', 'waste', 'throughput', 'cycle time', 'bottleneck',
      'manual', 'slow', 'repetitive', 'friction', 'spreadsheet', 'too many steps', 'too many tools', 'error-prone', 'approval workflow',
      'copy paste', 'duplicate work', 'backlog', 'delays', 'handoff', 'rework', 'inefficient',
    ],
  },
  {
    challengeId: 'customer-experience',
    keywords: [
      'customer experience', 'CX', 'personalization', 'loyalty', 'retention', 'NPS', 'satisfaction', 'engagement', 'omnichannel', 'journey',
      'customer', 'client', 'complaint', 'support', 'churn', 'unhappy', 'frustrated', 'wait time', 'response time',
      'self-service', 'contact center', 'chatbot', 'service quality', 'customer feedback', 'customer trust',
    ],
  },
  {
    challengeId: 'revenue-growth',
    keywords: [
      'revenue', 'growth', 'market share', 'upsell', 'cross-sell', 'new markets', 'go-to-market', 'pipeline', 'sales', 'monetize',
      'win rate', 'deal', 'quota', 'prospect', 'conversion', 'lead', 'opportunity', 'close rate', 'expand',
      'new business', 'ARR', 'MRR', 'top line', 'sell more', 'grow faster',
    ],
  },
  {
    challengeId: 'security-compliance',
    keywords: [
      'security', 'compliance', 'regulation', 'audit', 'risk', 'GDPR', 'SOX', 'HIPAA', 'governance', 'breach', 'vulnerability', 'zero trust',
      'incident', 'attack', 'phishing', 'malware', 'ransomware', 'sensitive data', 'privacy', 'identity', 'access control',
      'MFA', 'encrypt', 'protect', 'threat', 'cyber', 'posture', 'shadow IT', 'unsanctioned',
    ],
  },
  {
    challengeId: 'data-analytics',
    keywords: [
      'data', 'analytics', 'insights', 'reporting', 'dashboard', 'business intelligence', 'BI', 'data-driven', 'real-time', 'visualization',
      'silos', 'gut feeling', 'no visibility', 'report', 'KPI', 'fragmented', 'scattered data',
      'manual report', 'stale', 'Excel', 'metrics', 'forecast', 'trend', 'decisions', 'blind spots',
    ],
  },
  {
    challengeId: 'workforce-modernization',
    keywords: [
      'workforce', 'employee', 'talent', 'hiring', 'retention', 'collaboration', 'productivity', 'skills gap', 'hybrid work', 'burnout', 'enablement',
      'overwhelm', 'attrition', 'onboard', 'turnover', 'quiet quitting', 'morale', 'engagement', 'training',
      'reskill', 'upskill', 'overworked', 'people', 'staff', 'HR', 'knowledge transfer', 'remote team',
    ],
  },
  {
    challengeId: 'innovation-speed',
    keywords: [
      'innovation', 'time-to-market', 'R&D', 'agile', 'speed', 'prototype', 'launch', 'development cycle', 'competitive', 'first mover',
      'slow to market', 'behind competition', 'disrupted', 'experiment', 'idea', 'pilot', 'proof of concept', 'POC',
      'iterate', 'MVP', 'test and learn', 'new product', 'transform', 'differentiate',
    ],
  },
  {
    challengeId: 'cost-optimization',
    keywords: [
      'cost', 'reduce', 'savings', 'budget', 'margin', 'OPEX', 'CAPEX', 'ROI', 'consolidate', 'optimize spend', 'TCO',
      'expensive', 'overspend', 'waste', 'bloat', 'license', 'subscription', 'vendor', 'renewal',
      'cut costs', 'save money', 'tight budget', 'headcount', 'outsource', 'efficiency gain',
    ],
  },
  {
    challengeId: 'sustainability',
    keywords: [
      'sustainability', 'ESG', 'carbon', 'emissions', 'green', 'renewable', 'circular', 'net zero', 'environmental', 'climate',
      'scope 1', 'scope 2', 'scope 3', 'energy consumption', 'water', 'waste reduction', 'pollution', 'impact reporting',
      'responsible', 'sustainable', 'decarbonize',
    ],
  },
  {
    challengeId: 'digital-transformation',
    keywords: [
      'digital transformation', 'modernize', 'legacy', 'cloud', 'migration', 'technical debt', 'platform', 'architecture', 'infrastructure',
      'legacy system', 'old system', 'outdated', 'on-prem', 'not integrated', 'paper', 'manual process', 'upgrade',
      'ERP', 'SAP', 'mainframe', 'technical', 'modernization', 'system consolidation',
    ],
  },
  {
    challengeId: 'supply-chain',
    keywords: [
      'supply chain', 'logistics', 'inventory', 'demand', 'forecast', 'procurement', 'disruption', 'visibility', 'supplier', 'fulfillment',
      'shipping', 'delay', 'out of stock', 'overstock', 'warehouse', 'raw material', 'shortage',
      'lead time', 'distribution', 'partner', 'sourcing', 'stockout',
    ],
  },
  {
    challengeId: 'knowledge-management',
    keywords: [
      'knowledge', 'content', 'documentation', 'search', 'information', 'institutional', 'onboarding', 'training', 'expertise', 'findability',
      'can not find', 'cannot find', 'hard to find', 'lost knowledge', 'tribal knowledge', 'siloed', 'scattered',
      'wiki', 'intranet', 'SharePoint', 'document', 'knowledge base', 'FAQ', 'best practice', 'know-how',
    ],
  },
  {
    challengeId: 'risk-management',
    keywords: [
      'risk', 'fraud', 'detect', 'predict', 'mitigate', 'governance', 'exposure', 'loss', 'credit', 'actuarial',
      'liability', 'lawsuit', 'regulatory', 'fine', 'penalty', 'audit finding', 'non-compliance',
      'market risk', 'operational risk', 'financial risk', 'controls', 'incident response', 'early warning',
    ],
  },
  {
    challengeId: 'patient-outcomes',
    keywords: [
      'patient', 'clinical', 'care', 'outcomes', 'student', 'learning', 'health', 'quality of care', 'access', 'equity',
      'clinician', 'physician', 'nurse', 'hospital', 'healthcare', 'readmission', 'diagnosis', 'treatment',
      'care plan', 'EHR', 'medical', 'wellness', 'prevention', 'caregiver',
    ],
  },
  {
    challengeId: 'field-operations',
    keywords: [
      'field', 'frontline', 'mobile', 'remote', 'technician', 'store', 'branch', 'on-site', 'deskless', 'worker safety',
      'shift', 'factory floor', 'retail floor', 'first responder', 'safety', 'inspection', 'maintenance',
      'equipment', 'dispatch', 'schedule', 'route', 'warehouse worker', 'line worker',
    ],
  },
  {
    challengeId: 'autonomous-systems',
    keywords: [
      'autonomous', 'agent', 'agentic', 'intelligent', 'automation', 'self-driving', 'robotics', 'IoT', 'digital twin', 'predictive maintenance',
      'AI agent', 'automated decision', 'sensor', 'machine learning', 'ML', 'predictive', 'anomaly',
      'real-time monitoring', 'connected device', 'smart factory', 'smart building', 'agentic AI',
    ],
  },
];
