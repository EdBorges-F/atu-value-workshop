// Global AI Evidence — Industry benchmarks and ROI templates
// Sources: Published industry research from McKinsey, BCG, Accenture, IDC, Gartner (2024–2025)
// Purpose: Provide market-wide context and ROI ranges for AI use cases
// IMPORTANT: No individual company evidence here — only aggregated industry research
// All company-specific evidence comes from verified Microsoft customer stories only

export interface GlobalEvidence {
  id: string
  company: string
  industry: string        // maps to wizard industryIds
  useCase: string
  outcome: string         // headline metric
  details: string[]       // supporting bullet points
  source: string          // citation name
  sourceUrl: string
  year: number
}

export interface IndustryBenchmark {
  industry: string
  adoptionGrowthRate: string
  topUseCases: string[]
  avgROI: string
  topPerformerMultiple: string
  marketProjection?: string
}

export interface FunctionBenchmark {
  functionArea: string
  topUseCases: string[]
  productivityGain: string
  roiRange: string
  automationRate?: string
}

export interface UseCaseROITemplate {
  id: string
  useCase: string
  industries: string[]         // which wizard industries this applies to
  challengeIds: string[]       // maps to wizard challenge IDs
  costReduction: string        // e.g., "30–50%"
  speedImprovement: string     // e.g., "70% faster"
  qualityImprovement: string   // e.g., "60–80% accuracy improvement"
  roiTimeframe: string         // e.g., "12–24 months"
  globalEvidence: string[]     // IDs into GLOBAL_EVIDENCE
  pillar: 'enrich' | 'reshape' | 'reinvent' | 'bend'
}

// ─── Named Company Evidence ──────────────────────────────────
// CLEARED: All previous entries were non-Microsoft company stories (JPMorgan, HSBC, AmEx,
// Mayo Clinic/Google Cloud, Renault, Siemens, GE, Amazon, Walmart, Aramco, etc.)
// Microsoft-specific customer evidence lives in customer-stories.ts and hero-use-cases.ts

export const GLOBAL_EVIDENCE: GlobalEvidence[] = []


// ─── Industry Benchmarks ─────────────────────────────────────

export const INDUSTRY_BENCHMARKS: IndustryBenchmark[] = [
  {
    industry: 'banking',
    adoptionGrowthRate: '33%',
    topUseCases: ['Fraud detection', 'Document review (NLP)', 'Credit risk modeling', 'AML compliance', 'Customer service chatbots'],
    avgROI: '300–500% within 24 months (top performers)',
    topPerformerMultiple: '1.5× revenue growth, 1.6× shareholder returns',
    marketProjection: '$1 trillion in global value from AI by 2025 (McKinsey Global Institute)',
  },
  {
    industry: 'insurance',
    adoptionGrowthRate: '33%',
    topUseCases: ['Claims processing automation', 'Underwriting risk assessment', 'Fraud detection at intake', 'Customer self-service'],
    avgROI: '5-point reduction in combined ratio',
    topPerformerMultiple: '$30M+/year fraud avoidance',
  },
  {
    industry: 'healthcare-provider',
    adoptionGrowthRate: '38.5%',
    topUseCases: ['AI diagnostics & imaging', 'Clinical documentation (ambient AI)', 'Remote patient monitoring', 'AI triage', 'Revenue cycle automation'],
    avgROI: '$55M–$72M annual savings (large implementations)',
    topPerformerMultiple: '90%+ diagnostic accuracy',
  },
  {
    industry: 'healthcare-medtech',
    adoptionGrowthRate: '38.5%',
    topUseCases: ['Drug discovery acceleration', 'Clinical trial optimization', 'Medical device intelligence', 'Patient outcome prediction'],
    avgROI: '$60–110B/year potential economic value (McKinsey)',
    topPerformerMultiple: '25,000+ drug candidates in hours vs. 10–15 years traditional',
  },
  {
    industry: 'manufacturing',
    adoptionGrowthRate: '44.2% — fastest-growing',
    topUseCases: ['Predictive maintenance', 'Computer vision QA', 'AI copilots for technicians', 'Supply chain optimization', 'Digital twins'],
    avgROI: '15–30% maintenance cost reduction',
    topPerformerMultiple: '+53% labor productivity (Lighthouse factories)',
    marketProjection: '400bp higher shareholder returns over 5 years (BCG Manufacturing AI)',
  },
  {
    industry: 'retail',
    adoptionGrowthRate: '30.4%',
    topUseCases: ['Demand forecasting', 'Personalization/recommendations', 'Automated customer support', 'Dynamic pricing', 'Inventory optimization'],
    avgROI: 'Up to 500% ROI on customer service AI',
    topPerformerMultiple: '80% of routine inquiries automated',
  },
  {
    industry: 'consumer-goods',
    adoptionGrowthRate: '30.4%',
    topUseCases: ['Demand forecasting', 'Content generation', 'Supply chain optimization', 'Brand and product assistants'],
    avgROI: '200–400% ROI on content and personalization',
    topPerformerMultiple: '10× faster content production',
  },
  {
    industry: 'energy-resources',
    adoptionGrowthRate: '35%',
    topUseCases: ['Asset performance management', 'Grid optimization', 'Predictive equipment maintenance', 'Energy demand forecasting'],
    avgROI: '15–25% average cost reduction in asset-heavy operations (industry research)',
    topPerformerMultiple: 'Significant cost avoidance on aging infrastructure',
  },
  {
    industry: 'automotive',
    adoptionGrowthRate: '44.2%',
    topUseCases: ['Predictive maintenance', 'Connected car AI', 'Smart factory logistics', 'Quality control'],
    avgROI: '15–30% maintenance cost reduction (industry research)',
    topPerformerMultiple: 'Hundreds of millions in annual savings for large OEMs',
  },
  {
    industry: 'telecommunications',
    adoptionGrowthRate: '31.7%',
    topUseCases: ['Network optimization', 'Predictive failure', 'Customer support automation', 'Churn prediction'],
    avgROI: '30% cost reduction in customer service',
    topPerformerMultiple: '20–30% reduction in network incident resolution time',
  },
]

// ─── Function Benchmarks (Cross-Industry) ────────────────────

export const FUNCTION_BENCHMARKS: FunctionBenchmark[] = [
  {
    functionArea: 'marketing',
    topUseCases: ['Content production', 'Hyper-personalization', 'A/B testing automation', 'Campaign optimization'],
    productivityGain: '10× faster content production',
    roiRange: '200–400% ROI in first year',
  },
  {
    functionArea: 'sales',
    topUseCases: ['Lead gen/qualification', 'Email drafting', 'CRM data enrichment', 'Predictive forecasting'],
    productivityGain: '20% of sales tasks automated',
    roiRange: 'Up to 15% revenue lift',
  },
  {
    functionArea: 'customer-service',
    topUseCases: ['AI chatbots', 'Virtual agents', 'Ticket triage', 'Sentiment analysis', 'Agent assist'],
    productivityGain: '80% of routine inquiries automated',
    roiRange: 'Up to 50% cost reduction; 94%+ CSAT',
    automationRate: '70–80% of routine queries handled',
  },
  {
    functionArea: 'hr',
    topUseCases: ['Job description generation', 'Resume screening', 'Interview scheduling', 'Internal Q&A bots'],
    productivityGain: '30–50% reduction in HR processing time',
    roiRange: 'Measurable improvement in candidate experience and retention',
  },
  {
    functionArea: 'it',
    topUseCases: ['Helpdesk automation', 'Security alerting', 'Code review', 'Workflow automation'],
    productivityGain: 'Faster resolution, reduced ticket backlog',
    roiRange: 'Direct cost savings through automation',
  },
  {
    functionArea: 'software-development',
    topUseCases: ['Code generation', 'Debugging', 'Test generation', 'Documentation', 'API integration'],
    productivityGain: '55% reduction in development time',
    roiRange: '340%+ ROI in first year',
  },
]

// ─── Use Case ROI Templates ──────────────────────────────────
// These are "scenario builders" — when a customer describes their problem,
// the wizard matches it to a template with expected ROI ranges and global evidence.

export const USE_CASE_ROI_TEMPLATES: UseCaseROITemplate[] = [
  // RESHAPE — Business Process
  {
    id: 'roi-fraud-detection',
    useCase: 'AI Fraud Detection & Prevention',
    industries: ['banking', 'insurance', 'capital-markets'],
    challengeIds: ['security-compliance', 'operational-efficiency', 'cost-optimization'],
    costReduction: '30–50% reduction in fraud losses',
    speedImprovement: 'Real-time detection (milliseconds)',
    qualityImprovement: '60–80% accuracy improvement; 2–4× fewer false positives',
    roiTimeframe: '12–18 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-claims-processing',
    useCase: 'Automated Claims Processing',
    industries: ['insurance'],
    challengeIds: ['operational-efficiency', 'customer-experience', 'cost-optimization'],
    costReduction: '30–50% operational cost reduction',
    speedImprovement: '70% faster settlement; routine claims auto-processed in 60–80% of cases',
    qualityImprovement: 'Fewer errors, higher customer satisfaction',
    roiTimeframe: '12–24 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-underwriting',
    useCase: 'AI-Powered Underwriting',
    industries: ['insurance'],
    challengeIds: ['operational-efficiency', 'innovation-speed'],
    costReduction: '5-point reduction in combined ratio; $30M+/year fraud avoidance',
    speedImprovement: 'Faster risk assessment and policy issuance',
    qualityImprovement: 'Better pricing accuracy, growth in book of business',
    roiTimeframe: '12–24 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-predictive-maintenance',
    useCase: 'Predictive Maintenance & Asset Performance',
    industries: ['manufacturing', 'automotive', 'energy-resources'],
    challengeIds: ['operational-efficiency', 'cost-optimization'],
    costReduction: '15–30% maintenance cost reduction',
    speedImprovement: '30–50% reduction in unplanned downtime',
    qualityImprovement: '10–20% improvement in asset uptime',
    roiTimeframe: '6–18 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-quality-inspection',
    useCase: 'AI-Powered Quality Inspection (Computer Vision)',
    industries: ['manufacturing', 'automotive'],
    challengeIds: ['operational-efficiency', 'innovation-speed'],
    costReduction: 'Up to 49% reduction in defects/scrap',
    speedImprovement: 'Real-time inspection at production line speed',
    qualityImprovement: '99%+ defect detection rates',
    roiTimeframe: '3–12 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-supply-chain',
    useCase: 'AI Supply Chain & Demand Forecasting',
    industries: ['retail', 'consumer-goods', 'manufacturing'],
    challengeIds: ['operational-efficiency', 'cost-optimization', 'customer-experience'],
    costReduction: 'Lower logistics costs, reduced overstock/understock',
    speedImprovement: 'Hyper-local demand predictions',
    qualityImprovement: 'Improved product availability and service levels',
    roiTimeframe: '6–18 months',
    globalEvidence: [],
    pillar: 'reshape',
  },

  // ENRICH — Employee Experience
  {
    id: 'roi-clinical-documentation',
    useCase: 'AI Clinical Documentation (Ambient AI Scribes)',
    industries: ['healthcare-provider', 'healthcare-medtech'],
    challengeIds: ['workforce-modernization', 'operational-efficiency'],
    costReduction: '50–60% reduction in documentation time',
    speedImprovement: 'Freed 2+ hours per physician per day',
    qualityImprovement: '30% improved documentation accuracy; reduced burnout',
    roiTimeframe: '3–12 months',
    globalEvidence: [],
    pillar: 'enrich',
  },
  {
    id: 'roi-developer-productivity',
    useCase: 'AI Code Generation & Developer Productivity',
    industries: ['telecommunications', 'banking', 'insurance', 'retail', 'manufacturing'],
    challengeIds: ['innovation-speed', 'workforce-modernization', 'digital-transformation'],
    costReduction: '340%+ ROI in first year',
    speedImprovement: '55% reduction in development time',
    qualityImprovement: 'Fewer defects, easier onboarding for new team members',
    roiTimeframe: '3–6 months',
    globalEvidence: [],
    pillar: 'enrich',
  },
  {
    id: 'roi-knowledge-management',
    useCase: 'AI Knowledge Management & Employee Copilots',
    industries: ['banking', 'insurance', 'manufacturing', 'retail', 'healthcare-provider'],
    challengeIds: ['workforce-modernization', 'operational-efficiency'],
    costReduction: '8–15% overall employee productivity improvement',
    speedImprovement: 'Instant access to organizational knowledge',
    qualityImprovement: 'Reduced time-to-competence for new hires',
    roiTimeframe: '3–12 months',
    globalEvidence: [],
    pillar: 'enrich',
  },

  // REINVENT — Customer Engagement
  {
    id: 'roi-customer-service-ai',
    useCase: 'AI Customer Service & Virtual Agents',
    industries: ['retail', 'banking', 'telecommunications', 'insurance'],
    challengeIds: ['customer-experience', 'cost-optimization', 'operational-efficiency'],
    costReduction: 'Up to 50% cost reduction in support; 30% lower service costs',
    speedImprovement: '80% of routine inquiries automated',
    qualityImprovement: '94%+ CSAT; 20%+ higher first-contact resolution',
    roiTimeframe: '6–12 months',
    globalEvidence: [],
    pillar: 'reinvent',
  },
  {
    id: 'roi-personalization',
    useCase: 'AI-Powered Personalization & Recommendations',
    industries: ['retail', 'consumer-goods', 'banking', 'media-entertainment'],
    challengeIds: ['customer-experience', 'revenue-growth'],
    costReduction: '200–400% ROI in first year',
    speedImprovement: 'Real-time personalized offers',
    qualityImprovement: 'Higher conversion rates, improved basket size',
    roiTimeframe: '6–12 months',
    globalEvidence: [],
    pillar: 'reinvent',
  },
  {
    id: 'roi-ai-diagnostics',
    useCase: 'AI Diagnostics & Medical Imaging',
    industries: ['healthcare-provider', 'healthcare-medtech'],
    challengeIds: ['customer-experience', 'innovation-speed', 'operational-efficiency'],
    costReduction: '$55M–$72M annual savings in revenue cycle',
    speedImprovement: 'ER wait times cut by up to 55%',
    qualityImprovement: '90%+ accuracy; fewer diagnostic errors',
    roiTimeframe: '12–24 months',
    globalEvidence: [],
    pillar: 'reinvent',
  },

  // BEND — Innovation
  {
    id: 'roi-drug-discovery',
    useCase: 'GenAI Drug Discovery & R&D Acceleration',
    industries: ['healthcare-medtech'],
    challengeIds: ['innovation-speed', 'revenue-growth'],
    costReduction: '$60–110B/year potential economic value (McKinsey)',
    speedImprovement: '25,000+ drug candidates in hours vs. 10–15 years traditional',
    qualityImprovement: 'Better targeting of therapies, improved approval rates',
    roiTimeframe: '24–36 months (pipeline impact)',
    globalEvidence: [],
    pillar: 'bend',
  },
  {
    id: 'roi-digital-twins',
    useCase: 'AI Digital Twins for Product & Asset Innovation',
    industries: ['manufacturing', 'automotive', 'energy-resources'],
    challengeIds: ['innovation-speed', 'operational-efficiency'],
    costReduction: '10–20% improvement in asset uptime',
    speedImprovement: 'Virtual simulation before physical prototyping',
    qualityImprovement: 'Early fault detection, optimized design iterations',
    roiTimeframe: '12–24 months',
    globalEvidence: [],
    pillar: 'bend',
  },
  {
    id: 'roi-connected-products',
    useCase: 'AI-Powered Connected Products & Services',
    industries: ['automotive', 'manufacturing', 'telecommunications'],
    challengeIds: ['innovation-speed', 'customer-experience', 'revenue-growth'],
    costReduction: 'New revenue streams from product-as-a-service',
    speedImprovement: 'Real-time product intelligence and updates',
    qualityImprovement: 'Enhanced brand value, safety, and customer experience',
    roiTimeframe: '18–36 months',
    globalEvidence: [],
    pillar: 'bend',
  },
]

// ─── Market-wide stats for executive context ─────────────────

export const MARKET_STATS = {
  adoption: '88% of organizations use AI globally (McKinsey 2025)',
  scalingGap: 'Only 6% achieve 5%+ EBIT impact (McKinsey 2025)',
  avgROI: '3.7× ROI per dollar invested in GenAI',
  leaderRevenue: '1.5× higher revenue growth for AI leaders (BCG)',
  leaderReturns: '1.6× greater shareholder returns for AI leaders (BCG)',
  productionReady: '31% of AI use cases now in full production (ISG 2025)',
  barrierPeopleProcess: '70% of AI barriers are people & process, not technology (BCG)',
  csuiteBacking: '78% of orgs with C-suite AI backing report ROI vs. 43% without (industry research)',
  roiTimeframe: '12–14 months average time to full ROI realization',
  reinventionReady: 'Only 16% of organizations are "reinvention-ready" (Accenture)',
} as const
