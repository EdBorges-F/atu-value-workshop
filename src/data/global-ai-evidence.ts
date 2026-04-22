// Global AI Evidence — Industry benchmarks and ROI templates
// Sources: Published industry research from McKinsey, BCG, Accenture, IDC, Gartner (2024–2025)
// Purpose: Provide market-wide context and ROI ranges for AI use cases
// IMPORTANT: No individual company evidence here — only aggregated industry research
// All company-specific evidence comes from verified Microsoft customer stories only

// Feature flag: Customer Zero data is present but hidden until NDA checkbox + source decks are ready
export const SHOW_CUSTOMER_ZERO = false

// Strips Customer Zero sentences from a string when the flag is off
export function filterCustomerZero(text: string): string {
  if (SHOW_CUSTOMER_ZERO) return text
  // Remove sentences containing "Customer Zero" or "Microsoft <Function>:" patterns
  return text
    .replace(/[.;]\s*Microsoft\s+\w[\w\s]*?:.*?(?=\.|;|$)/gi, '')
    .replace(/\s*\(Customer Zero\)/gi, '')
    .replace(/\s*\.\s*$/, '')
    .trim()
}

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
    avgROI: 'McKinsey estimates AI could unlock up to $1T in additional annual value for global banking; realized ROI varies widely by use case and data readiness',
    topPerformerMultiple: 'BCG: AI leaders achieved 1.5× higher revenue growth vs. peers (cross-industry leader comparison)',
    marketProjection: 'McKinsey estimates AI could deliver up to $1T of additional annual value for global banking',
  },
  {
    industry: 'insurance',
    adoptionGrowthRate: '33%',
    topUseCases: ['Claims processing automation', 'Underwriting risk assessment', 'Fraud detection at intake', 'Customer self-service'],
    avgROI: 'Value typically measured through lower leakage, faster claims handling, and improved risk selection',
    topPerformerMultiple: 'Fraud savings depend on claim volume, fraud prevalence, and false-positive rates',
  },
  {
    industry: 'healthcare-provider',
    adoptionGrowthRate: 'Among the fastest-growing AI adoption sectors',
    topUseCases: ['AI diagnostics & imaging', 'Clinical documentation (ambient AI)', 'Remote patient monitoring', 'AI triage', 'Revenue cycle automation'],
    avgROI: 'Large health systems can generate meaningful savings from revenue-cycle and administrative automation; savings should be modeled from local denial rates, labor mix, and patient volume',
    topPerformerMultiple: 'Diagnostic AI performance must be stated for a named clinical task and validated dataset',
  },
  {
    industry: 'healthcare-medtech',
    adoptionGrowthRate: 'Among the fastest-growing AI adoption sectors',
    topUseCases: ['Drug discovery acceleration', 'Clinical trial optimization', 'Medical device intelligence', 'Patient outcome prediction'],
    avgROI: 'McKinsey estimates AI could create $60B–$110B in annual economic value across pharma and medical products',
    topPerformerMultiple: 'AI can compress early-stage target and molecule screening from months to days, but the full 10–15-year development lifecycle requires clinical trials, regulatory approval, and manufacturing scale-up',
  },
  {
    industry: 'manufacturing',
    adoptionGrowthRate: 'One of the fastest-scaling AI sectors',
    topUseCases: ['Predictive maintenance', 'Computer vision QA', 'AI copilots for technicians', 'Supply chain optimization', 'Digital twins'],
    avgROI: 'In well-instrumented environments, predictive maintenance can reduce maintenance spend and unplanned downtime; estimate impact from failure history and downtime cost',
    topPerformerMultiple: 'WEF Global Lighthouse exemplar factories report ~53% labor-productivity improvement (exemplar sites, not industry average)',
  },
  {
    industry: 'retail',
    adoptionGrowthRate: '30.4%',
    topUseCases: ['Demand forecasting', 'Personalization/recommendations', 'Automated customer support', 'Dynamic pricing', 'Inventory optimization'],
    avgROI: 'Service AI ROI varies widely; model using contact volume, containment rate, handle time, and labor cost',
    topPerformerMultiple: 'Well-scoped service bots can automate a meaningful share of routine contacts; containment depends on channel mix and knowledge quality',
  },
  {
    industry: 'consumer-goods',
    adoptionGrowthRate: '30.4%',
    topUseCases: ['Demand forecasting', 'Content generation', 'Supply chain optimization', 'Brand and product assistants'],
    avgROI: 'GenAI can reduce content-production effort and support faster campaign cycles; model ROI separately for content cost savings and personalization-driven revenue uplift',
    topPerformerMultiple: 'Teams often see much faster first-draft creation, but end-to-end production speed depends on review, compliance, and localization',
  },
  {
    industry: 'energy-resources',
    adoptionGrowthRate: '35%',
    topUseCases: ['Asset performance management', 'Grid optimization', 'Predictive equipment maintenance', 'Energy demand forecasting'],
    avgROI: 'AI value in asset-heavy operations is typically measured through reduced unplanned downtime, better field productivity, and avoided maintenance spend',
    topPerformerMultiple: 'Quantify savings from named assets, outage cost, and maintenance history',
  },
  {
    industry: 'automotive',
    adoptionGrowthRate: 'Among the fastest-scaling AI sectors',
    topUseCases: ['Predictive maintenance', 'Connected car AI', 'Smart factory logistics', 'Quality control'],
    avgROI: 'Estimate predictive-maintenance value from line downtime, warranty exposure, and maintenance history',
    topPerformerMultiple: 'Savings scale with plant footprint, throughput, and downtime economics; use customer-specific modeling',
  },
  {
    industry: 'telecommunications',
    adoptionGrowthRate: '31.7%',
    topUseCases: ['Network optimization', 'Predictive failure', 'Customer support automation', 'Churn prediction'],
    avgROI: 'Telecom AI programs often target lower handling cost and faster resolution; outcomes depend on call mix, containment rate, and service design',
    topPerformerMultiple: 'AI-assisted incident triage can reduce time to identify and resolve network issues; results depend on alert quality and observability coverage',
  },
]

// ─── Function Benchmarks (Cross-Industry) ────────────────────

export const FUNCTION_BENCHMARKS: FunctionBenchmark[] = [
  {
    functionArea: 'marketing',
    topUseCases: ['Content production', 'Hyper-personalization', 'Campaign execution', 'Customer research', 'Media planning'],
    productivityGain: '20–30% faster content creation through AI productivity tools (Source: PwC); faster media planning and campaign budgeting cycles from AI automation (Source: BCG). Microsoft Marketing compressed campaign creation from 12 weeks to 3 weeks (Customer Zero)',
    roiRange: 'Significant cut in lead costs from AI-assisted marketing and sales (Source: BCG); meaningful increase in customer engagement through AI predictive personalization (Source: IDC). Microsoft saw 4.75x increase in chat engagement and 21.5% lift in conversion rates on Azure.com',
  },
  {
    functionArea: 'sales',
    topUseCases: ['Lead gen/qualification', 'Email drafting', 'CRM data enrichment', 'Predictive forecasting'],
    productivityGain: 'Meaningful automation of admin-heavy sales tasks (data entry, email drafts, forecasting)',
    roiRange: 'Revenue impact depends on pipeline quality, deal size, and adoption; measure from lead-to-close metrics',
  },
  {
    functionArea: 'customer-service',
    topUseCases: ['Self-service AI assistants', 'Always-on agent assist', 'Case management agents', 'Customer intent agents', 'Knowledge management'],
    productivityGain: 'Microsoft support engineers report 50% reduction in time spent on case resolution; case summarization compressed from 30–40 minutes to under 15 minutes (Customer Zero)',
    roiRange: 'Reduction in customer service operating expenses from AI-based automation (Source: Gartner); improved first-call resolution and lower repeat-call rates with Gen AI (Source: McKinsey, Deloitte)',
    automationRate: 'Significant decrease in call volume to human agents by offloading queries to AI assistants (Source: McKinsey)',
  },
  {
    functionArea: 'finance',
    topUseCases: ['AI-driven financial research', 'AI-powered collections & payments', 'Automated risk & compliance', 'Contract & document inspection', 'Spend anomaly detection'],
    productivityGain: 'Faster data summarization for financial reports — cutting analysis prep time roughly in half (Source: SAP); reduction in Days Sales Outstanding speeding up invoice processing (Source: Billtrust). Microsoft Finance: 70% reduction in invoice processing time, 75% time savings in reporting and compliance, 99% forecast accuracy',
    roiRange: 'Lower procurement operating costs through process automation (Source: BCG); quicker contract review cycles through AI optimization (Source: Icertis); reduction in forecasting errors (Source: IJISAE). Microsoft Finance: 50% reduction in contract review time, 60% of contracts with errors flagged within 10 days',
  },
  {
    functionArea: 'hr',
    topUseCases: ['Ask HR self-service agents', 'AI-enabled candidate search & selection', 'Career development assistants', 'Talent & workforce planning', 'Onboarding automation'],
    productivityGain: 'Inquiries handled immediately by AI HR agents versus 24–48 hour traditional resolution timelines (Source: Botable); recruiting AI shrinks hiring timeline from 12 days to 4 days (Source: Forbes). Microsoft HR: 82% reduction in time to create weekly headcount and recruiting reports (Customer Zero)',
    roiRange: 'Reduction in cost-per-hire through AI-augmented recruiting (Source: Deloitte); cost savings on learning & development content (Source: BCG); 40% reduction in HR staff involvement per new hire (Source: Business Insider). Microsoft HR reallocated 13 FTE from Shared Services to higher-value work',
  },
  {
    functionArea: 'it',
    topUseCases: ['AI Helpdesk agents', 'AI-driven assessment & remediation', 'AI-enabled app modernization', 'Identity lifecycle automation', 'AIOps & device care'],
    productivityGain: 'Up to half of threat detection and response can be automated with AI (Source: Virtasant); significant reduction in unplanned downtime and 50% faster issue resolution with AIOps (Source: LogicMonitor). Microsoft Security: 90% faster incident summaries with Copilot for Security (Customer Zero)',
    roiRange: 'Reduction in IT support costs by implementing AIOps (Source: BCG); savings in annual IT spending by using AI-driven automation to modernize legacy systems (Source: Bain & Co.); hours of downtime prevented per year via AIOps (Source: IDC)',
    automationRate: 'Significant share of threat detection and response can be automated with AI cybersecurity applications (Source: Virtasant)',
  },
  {
    functionArea: 'legal',
    topUseCases: ['AI-optimized contract management', 'Automated compliance & risk', 'Ask Legal advisory agents', 'Contract review & redlining', 'Regulatory change monitoring'],
    productivityGain: 'Contract review time cut from 3 hours to 45 minutes (Source: Wolters Kluwer); AI reviews a 100-page due-diligence document in a fraction of the typical 1–4 hours (Source: Merlin). Microsoft Legal: users find correct answers 2.97x faster with the SharePoint AI agent (Customer Zero)',
    roiRange: 'Significant additional annual value from AI-powered productivity increases (Source: Thomson Reuters); lawyer hours saved over 3 years from AI contract review automation (Source: Forrester/LawGeex); reduced reliance on outside counsel spend (Source: ACC); reduction in contract errors minimizing downstream disputes (Source: Merlin)',
  },
  {
    functionArea: 'software-development',
    topUseCases: ['Code completion & autofix', 'AI-enabled code generation', 'Legacy app modernization', 'Documentation & knowledge agents', 'Test automation'],
    productivityGain: 'Decrease in median code review turnaround time and developer-years of work saved on software upgrades (Source: Deloitte); faster framework and platform upgrades using Gen AI tools (Source: KPMG); faster test automation after Gen AI integration (Source: Capgemini). Microsoft: 88% of 42K monthly active Copilot users report higher task throughput (Customer Zero)',
    roiRange: 'Higher application quality through reduced bugs and errors (Source: OutSystems & KPMG); legacy code migrations compressed from 1.5 years to 6-week deployments (Source: Deloitte); IDC 2024 survey reported 340% ROI for Copilot deployments. Microsoft: 71% of developers say Gen AI helps them deliver customer value, 66% report a positive shift in feelings about work',
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
    costReduction: 'Lower fraud losses and fewer false positives; model impact from fraud rate, alert volume, investigation cost, and precision baseline',
    speedImprovement: 'Real-time detection (milliseconds vs. batch review)',
    qualityImprovement: 'Higher precision reduces false-positive alert fatigue for investigators',
    roiTimeframe: '12–18 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-claims-processing',
    useCase: 'Automated Claims Processing',
    industries: ['insurance'],
    challengeIds: ['operational-efficiency', 'customer-experience', 'cost-optimization'],
    costReduction: 'Reduce manual touches and rework; quantify from claim volume, straight-through-processing rate, and average handling cost',
    speedImprovement: 'Faster cycle time for routine claims through auto-adjudication',
    qualityImprovement: 'Fewer errors, higher customer satisfaction from faster resolution',
    roiTimeframe: '12–24 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-underwriting',
    useCase: 'AI-Powered Underwriting',
    industries: ['insurance'],
    challengeIds: ['operational-efficiency', 'innovation-speed'],
    costReduction: 'Faster quote turnaround and more consistent risk assessment',
    speedImprovement: 'Reduced underwriting cycle time through automated data enrichment',
    qualityImprovement: 'Improved loss-ratio performance where underwriting decisions change pricing or selection',
    roiTimeframe: '12–24 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-predictive-maintenance',
    useCase: 'Predictive Maintenance & Asset Performance',
    industries: ['manufacturing', 'automotive', 'energy-resources'],
    challengeIds: ['operational-efficiency', 'cost-optimization'],
    costReduction: 'Reduced maintenance spend and spare-parts waste; estimate from asset criticality and failure frequency',
    speedImprovement: 'Lower unplanned downtime through early anomaly detection',
    qualityImprovement: 'Improved asset uptime and extended equipment life',
    roiTimeframe: '6–18 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-quality-inspection',
    useCase: 'AI-Powered Quality Inspection (Computer Vision)',
    industries: ['manufacturing', 'automotive'],
    challengeIds: ['operational-efficiency', 'innovation-speed'],
    costReduction: 'Lower scrap and rework rates on stable, well-labeled defect classes',
    speedImprovement: 'Real-time inspection at production line speed',
    qualityImprovement: 'Improved defect detection; performance should be validated on the customer\'s own lines before quoting a rate',
    roiTimeframe: '3–12 months',
    globalEvidence: [],
    pillar: 'reshape',
  },
  {
    id: 'roi-supply-chain',
    useCase: 'AI Supply Chain & Demand Forecasting',
    industries: ['retail', 'consumer-goods', 'manufacturing'],
    challengeIds: ['operational-efficiency', 'cost-optimization', 'customer-experience'],
    costReduction: 'Measure as lower forecast error, fewer stockouts, lower expedite spend, and lower inventory days on hand',
    speedImprovement: 'More granular, faster demand predictions at local level',
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
    costReduction: 'Reduced documentation burden and after-hours EHR work; savings vary by specialty and workflow',
    speedImprovement: 'Physicians report meaningful time freed from note-writing; use local pilot results for specific claims',
    qualityImprovement: 'Improved documentation completeness; reduced clinician burnout',
    roiTimeframe: '3–12 months',
    globalEvidence: [],
    pillar: 'enrich',
  },
  {
    id: 'roi-developer-productivity',
    useCase: 'AI Code Generation & Developer Productivity',
    industries: ['telecommunications', 'banking', 'insurance', 'retail', 'manufacturing'],
    challengeIds: ['innovation-speed', 'workforce-modernization', 'digital-transformation'],
    costReduction: 'GitHub reported developers completed certain coding tasks up to 55% faster with Copilot in controlled studies (2023)',
    speedImprovement: 'IDC 2024 survey (Microsoft-sponsored): respondents reported 340% ROI for Copilot deployments; results vary by team and codebase',
    qualityImprovement: 'Fewer boilerplate defects, easier onboarding for new team members',
    roiTimeframe: '3–6 months',
    globalEvidence: [],
    pillar: 'enrich',
  },
  {
    id: 'roi-knowledge-management',
    useCase: 'AI Knowledge Management & Employee Copilots',
    industries: ['banking', 'insurance', 'manufacturing', 'retail', 'healthcare-provider'],
    challengeIds: ['workforce-modernization', 'operational-efficiency'],
    costReduction: 'Model value from time saved on search, drafting, and case resolution by role; overall productivity lift varies widely',
    speedImprovement: 'Faster access to organizational knowledge and institutional context',
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
    costReduction: 'Model from contact volume, containment rate, handle time, and labor cost; avoid generic percentage claims',
    speedImprovement: 'Well-scoped bots can handle a meaningful share of routine contacts; containment depends on knowledge quality',
    qualityImprovement: 'Higher first-contact resolution and customer satisfaction when properly designed',
    roiTimeframe: '6–12 months',
    globalEvidence: [],
    pillar: 'reinvent',
  },
  {
    id: 'roi-personalization',
    useCase: 'AI-Powered Personalization & Recommendations',
    industries: ['retail', 'consumer-goods', 'banking', 'media-entertainment'],
    challengeIds: ['customer-experience', 'revenue-growth'],
    costReduction: 'Model from conversion uplift, basket size, retention, and margin; tie to named study and scope',
    speedImprovement: 'Real-time personalized offers across channels',
    qualityImprovement: 'Higher conversion rates and improved customer lifetime value',
    roiTimeframe: '6–12 months',
    globalEvidence: [],
    pillar: 'reinvent',
  },
  {
    id: 'roi-ai-diagnostics',
    useCase: 'AI Diagnostics & Medical Imaging',
    industries: ['healthcare-provider', 'healthcare-medtech'],
    challengeIds: ['customer-experience', 'innovation-speed', 'operational-efficiency'],
    costReduction: 'Use task-specific clinical or operational evidence — e.g., a named triage, imaging, or revenue-cycle workflow',
    speedImprovement: 'Faster triage and diagnostic turnaround for specific clinical workflows',
    qualityImprovement: 'Improved consistency in diagnostic reads; performance must be stated for named clinical task and validated dataset',
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
    costReduction: 'McKinsey estimates AI could create $60B–$110B in annual economic value across pharma and medical products',
    speedImprovement: 'AI can compress early-stage target identification and molecule screening from months to days; the full 10–15-year pipeline still requires clinical trials and regulatory approval',
    qualityImprovement: 'Better targeting of candidate molecules, potentially improved approval rates over time',
    roiTimeframe: '24–36 months (pipeline impact)',
    globalEvidence: [],
    pillar: 'bend',
  },
  {
    id: 'roi-digital-twins',
    useCase: 'AI Digital Twins for Product & Asset Innovation',
    industries: ['manufacturing', 'automotive', 'energy-resources'],
    challengeIds: ['innovation-speed', 'operational-efficiency'],
    costReduction: 'Improved uptime and design iteration speed when live operational data is available; estimate from specific assets and failure modes',
    speedImprovement: 'Virtual simulation before physical prototyping reduces design cycles',
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
    costReduction: 'Measure as attach rate, service revenue, churn reduction, warranty-cost reduction, or upsell conversion',
    speedImprovement: 'Real-time product intelligence and over-the-air updates',
    qualityImprovement: 'Enhanced brand value, safety, and customer experience',
    roiTimeframe: '18–36 months',
    globalEvidence: [],
    pillar: 'bend',
  },
  {
    id: 'roi-identity-security',
    useCase: 'Identity & Access Management (Entra Suite)',
    industries: ['banking', 'insurance', 'capital-markets', 'healthcare-provider', 'healthcare-medtech', 'government', 'telecommunications', 'manufacturing', 'retail'],
    challengeIds: ['security-compliance', 'cost-optimization', 'operational-efficiency'],
    costReduction: 'Forrester TEI (July 2025): 80% reduction in total cost of ownership through vendor consolidation and automation',
    speedImprovement: 'Forrester TEI (July 2025): 75% faster employee onboarding through automated provisioning',
    qualityImprovement: 'Forrester TEI (July 2025): 30% reduction in identity-related risk exposure; 90% reduction in help desk tickets',
    roiTimeframe: '12–18 months',
    globalEvidence: [],
    pillar: 'reshape' as const,
  },
]

// ─── Market-wide stats for executive context ─────────────────

export const MARKET_STATS = {
  adoption: 'McKinsey 2025 global survey: 88% of respondents report using AI in at least one business function',
  agenticAdoption: 'IDC InfoBrief sponsored by Microsoft (US53838325, November 2025): 36% of organizations are currently using Agentic AI and another 50% are in planning stages',
  frontierFirmPerformance: 'IDC InfoBrief sponsored by Microsoft (US53838325, November 2025): Frontier Firms report 86.5% stronger business performance (top-line growth, brand differentiation, cost, efficiency, and customer experience) versus 22.0% for laggards',
  scalingGap: 'McKinsey 2025: only 6% of respondents qualified as AI "high performers," reporting at least 5% EBIT impact from AI',
  fragmentationCost: 'IDC InfoBrief sponsored by Microsoft, "2024 Business Opportunity of AI" (US52699124, November 2024): structured AI acceleration delivers 3.7× the business value of fractured AI initiatives',
  avgROI: 'IDC 2024 survey (Microsoft-sponsored, 4,000+ leaders): respondents reported an average $3.70 return for every $1 invested in generative AI',
  leaderRevenue: 'BCG: AI leaders achieved 1.5× higher revenue growth and 1.6× greater shareholder returns vs. peers over three years (leader-vs-peer comparison, not causal proof for a single project)',
  leaderReturns: 'BCG: AI leaders outperformed peers on revenue and shareholder returns; this is a cross-industry leader comparison',
  productionReady: 'ISG 2025 survey (400 senior AI decision-makers): 31% of top AI use cases had reached full production',
  barrierPeopleProcess: 'BCG recommends focusing ~70% of AI transformation effort on people and process change, ~20% on data and technology, ~10% on algorithms',
  infrastructureGap: 'Microsoft Frontier Transformation Vision Deck (2026): 56% of executives believe their infrastructure isn\'t ready for AI workloads',
  skillsGap: 'Microsoft Frontier Transformation Vision Deck (2026): 67% of leaders believe they lack AI skills and talent',
  csuiteBacking: 'Executive sponsorship is consistently associated with stronger AI scaling and ROI outcomes across industry research',
  roiTimeframe: 'IDC 2024 survey (Microsoft-sponsored): respondents said AI deployments took under 8 months on average and value was realized within about 13 months',
  reinventionReady: 'Accenture 2024: 16% of organizations were "reinvention-ready," up from 9% in 2023',
  securitySignalScale: 'Microsoft internal data (October 2025): Microsoft Security processes 100 trillion daily signals to power threat intelligence across agents, apps, infrastructure, and the AI stack',
  modelChoice: 'Microsoft Foundry provides access to 11,000+ models including OpenAI and Anthropic Claude, available across Microsoft 365 Copilot and custom agents (Microsoft Frontier Solutions Deck, 2026)',

  // From Security CSA / RSA 2026 deck
  botSignupsBlocked: 'Microsoft Digital Defense Report (October 2025): 1.6 million bot-driven fake signups blocked per hour',

  // From Agent 365 deck
  unsanctionedAgents: 'Microsoft Cyber Pulse Security Report 2025: 29% of employees have turned to unsanctioned AI agents for work tasks',
  agentGovernanceMaturity: 'Deloitte State of AI 2026: only 21% of companies report having a mature model for governance of autonomous agents',
  aiSecurityRisk: 'Deloitte State of AI 2026: 73% of organizations say data privacy and security is the biggest AI risk',

  // From Microsoft IQ deck
  agentIntegrationIntent: 'Capgemini Research Institute (July 2024): 82% of organizations intend to integrate AI agents within 1–3 years',
  agentProjection2028: 'IDC Info Snapshot (May 2025): 1.3 billion AI agents projected by 2028',
  taskSpecificAgents2026: 'Gartner (August 2025): 40% of enterprise apps will integrate task-specific AI agents by 2026',
} as const
