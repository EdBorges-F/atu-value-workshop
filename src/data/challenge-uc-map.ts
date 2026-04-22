import type { ChallengeUseCaseMap } from './types';

// Frontier Canvas — Challenge → Use Case Mappings
// Maps each board mandate challenge to the use cases that address it.
// Built against the curated use case set.

export const CHALLENGE_UC_MAP: ChallengeUseCaseMap[] = [
  {
    challengeId: 'operational-efficiency',
    useCaseIds: [
      'mfg-predictive-maintenance',
      'mfg-quality-inspection',
      'retail-store-operations',
      'energy-asset-management',
      'gov-process-automation',
      'telecom-network-optimization',
      'healthcare-admin-automation',
    ],
  },
  {
    challengeId: 'customer-experience',
    useCaseIds: [
      'retail-personalized-shopping',
      'banking-relationship-mgmt',
      'insurance-claims-experience',
      'telecom-customer-service',
      'travel-guest-experience',
      'media-audience-engagement',
      'cpg-consumer-insights',
    ],
  },
  {
    challengeId: 'revenue-growth',
    useCaseIds: [
      'retail-demand-forecasting',
      'capital-markets-trading-insights',
      'telecom-new-services',
      'media-content-monetization',
      'proserv-client-engagement',
      'cpg-revenue-management',
    ],
  },
  {
    challengeId: 'security-compliance',
    useCaseIds: [
      'banking-fraud-detection',
      'banking-regulatory-compliance',
      'gov-security-operations',
      'healthcare-data-privacy',
      'energy-critical-infrastructure',
      'insurance-fraud-detection',
    ],
  },
  {
    challengeId: 'data-analytics',
    useCaseIds: [
      'capital-markets-research-analytics',
      'banking-risk-analytics',
      'insurance-actuarial-modeling',
      'retail-demand-forecasting',
      'mfg-production-analytics',
      'healthcare-clinical-insights',
      'energy-operations-analytics',
    ],
  },
  {
    challengeId: 'workforce-modernization',
    useCaseIds: [
      'proserv-knowledge-worker',
      'healthcare-clinician-experience',
      'edu-faculty-productivity',
      'gov-employee-enablement',
      'mfg-connected-worker',
      'retail-associate-enablement',
    ],
  },
  {
    challengeId: 'innovation-speed',
    useCaseIds: [
      'medtech-drug-discovery',
      'auto-vehicle-development',
      'cpg-product-development',
      'mfg-product-engineering',
      'media-content-creation',
      'telecom-service-innovation',
    ],
  },
  {
    challengeId: 'cost-optimization',
    useCaseIds: [
      'mfg-predictive-maintenance',
      'energy-asset-management',
      'retail-inventory-optimization',
      'travel-operations-efficiency',
      'telecom-network-optimization',
      'gov-process-automation',
      'insurance-underwriting-automation',
    ],
  },
  {
    challengeId: 'sustainability',
    useCaseIds: [
      'energy-emissions-tracking',
      'mfg-sustainability-reporting',
      'auto-ev-transition',
      'cpg-sustainable-supply',
      'travel-fleet-optimization',
      'retail-circular-economy',
    ],
  },
  {
    challengeId: 'digital-transformation',
    useCaseIds: [
      'banking-legacy-modernization',
      'gov-digital-services',
      'insurance-platform-modernization',
      'healthcare-ehr-optimization',
      'mfg-smart-factory',
      'edu-digital-campus',
    ],
  },
  {
    challengeId: 'supply-chain',
    useCaseIds: [
      'mfg-supply-chain-visibility',
      'auto-supply-chain-resilience',
      'cpg-demand-planning',
      'retail-inventory-optimization',
      'medtech-supply-traceability',
      'energy-procurement-optimization',
    ],
  },
  {
    challengeId: 'knowledge-management',
    useCaseIds: [
      'proserv-knowledge-worker',
      'edu-research-acceleration',
      'media-asset-management',
      'gov-institutional-knowledge',
      'healthcare-clinical-insights',
      'insurance-policy-knowledge',
    ],
  },
  {
    challengeId: 'risk-management',
    useCaseIds: [
      'banking-fraud-detection',
      'banking-risk-analytics',
      'capital-markets-risk-modeling',
      'insurance-actuarial-modeling',
      'energy-safety-monitoring',
      'gov-threat-intelligence',
    ],
  },
  {
    challengeId: 'patient-outcomes',
    useCaseIds: [
      'healthcare-clinical-insights',
      'healthcare-care-coordination',
      'medtech-patient-engagement',
      'edu-student-success',
    ],
  },
  {
    challengeId: 'field-operations',
    useCaseIds: [
      'energy-field-service',
      'mfg-connected-worker',
      'retail-store-operations',
      'healthcare-remote-care',
      'travel-operations-efficiency',
      'telecom-field-technician',
    ],
  },
  {
    challengeId: 'autonomous-systems',
    useCaseIds: [
      'auto-autonomous-driving',
      'mfg-smart-factory',
      'telecom-network-self-healing',
      'capital-markets-algorithmic-trading',
      'energy-autonomous-operations',
    ],
  },
];
