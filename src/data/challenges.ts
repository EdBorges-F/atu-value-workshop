import type { Challenge } from './types';

// Frontier Canvas — Board Mandate Challenges (16)
// These are the cross-industry executive mandates that AI transformation addresses.
// Each challenge maps to specific industries where it's most relevant.

export const CHALLENGES: Challenge[] = [
  {
    id: 'operational-efficiency',
    name: 'Operational Efficiency',
    description: 'Streamline processes, reduce waste, and improve productivity across the organization',
    industryIds: ['manufacturing', 'energy-resources', 'retail', 'telecommunications', 'healthcare-provider', 'government', 'mobility-travel', 'real-estate'],
    pillarId: 'reshape',
  },
  {
    id: 'customer-experience',
    name: 'Customer Experience',
    description: 'Deliver personalized, seamless experiences that drive loyalty and revenue growth',
    industryIds: ['retail', 'banking', 'insurance', 'telecommunications', 'mobility-travel', 'media-entertainment', 'consumer-goods', 'manufacturing', 'professional-services', 'real-estate'],
    pillarId: 'reinvent',
  },
  {
    id: 'revenue-growth',
    name: 'Revenue Growth & New Markets',
    description: 'Identify new revenue streams, accelerate go-to-market, and expand addressable markets with AI',
    industryIds: ['capital-markets', 'retail', 'telecommunications', 'media-entertainment', 'professional-services', 'consumer-goods', 'manufacturing', 'energy-resources'],
    pillarId: 'reinvent',
  },
  {
    id: 'security-compliance',
    name: 'Security & Compliance',
    description: 'Protect critical assets, meet regulatory requirements, and build trust with stakeholders',
    industryIds: ['banking', 'capital-markets', 'government', 'healthcare-provider', 'healthcare-medtech', 'insurance', 'energy-resources', 'manufacturing', 'real-estate'],
    pillarId: 'security',
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    description: 'Unlock insights from enterprise data, enable real-time decisions, and democratize analytics',
    industryIds: ['capital-markets', 'banking', 'insurance', 'retail', 'manufacturing', 'healthcare-medtech', 'energy-resources', 'real-estate'],
    pillarId: 'intelligence',
  },
  {
    id: 'workforce-modernization',
    name: 'Workforce Modernization',
    description: 'Empower employees with AI tools, address talent gaps, and transform how teams collaborate',
    industryIds: ['professional-services', 'healthcare-provider', 'higher-education', 'government', 'manufacturing', 'retail', 'banking', 'insurance', 'capital-markets', 'telecommunications', 'energy-resources', 'real-estate'],
    pillarId: 'enrich',
  },
  {
    id: 'innovation-speed',
    name: 'Innovation & Time-to-Market',
    description: 'Accelerate product development, reduce R&D cycles, and bring innovations to market faster',
    industryIds: ['healthcare-medtech', 'automotive', 'consumer-goods', 'manufacturing', 'media-entertainment', 'telecommunications', 'banking', 'insurance', 'capital-markets', 'professional-services'],
    pillarId: 'bend',
  },
  {
    id: 'cost-optimization',
    name: 'Cost Optimization',
    description: 'Reduce operational costs, optimize resource allocation, and improve margins through automation',
    industryIds: ['manufacturing', 'energy-resources', 'retail', 'mobility-travel', 'telecommunications', 'government', 'insurance', 'banking', 'capital-markets', 'professional-services', 'healthcare-provider', 'real-estate'],
    pillarId: 'reshape',
  },
  {
    id: 'sustainability',
    name: 'Sustainability & ESG',
    description: 'Meet environmental goals, report on ESG metrics, and build sustainable operations',
    industryIds: ['energy-resources', 'manufacturing', 'automotive', 'consumer-goods', 'mobility-travel', 'retail'],
    pillarId: 'reshape',
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Modernize legacy systems, adopt cloud-first architectures, and build digital capabilities',
    industryIds: ['banking', 'government', 'insurance', 'healthcare-provider', 'manufacturing', 'higher-education', 'real-estate'],
    pillarId: 'reshape',
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Resilience',
    description: 'Build agile supply chains with real-time visibility, demand forecasting, and disruption response',
    industryIds: ['manufacturing', 'automotive', 'consumer-goods', 'retail', 'healthcare-medtech', 'energy-resources'],
    pillarId: 'reshape',
  },
  {
    id: 'knowledge-management',
    name: 'Knowledge & Content',
    description: 'Capture institutional knowledge, automate content creation, and enable faster information discovery',
    industryIds: ['professional-services', 'higher-education', 'media-entertainment', 'government', 'healthcare-provider', 'insurance', 'banking', 'manufacturing', 'energy-resources', 'real-estate'],
    pillarId: 'enrich',
  },
  {
    id: 'risk-management',
    name: 'Risk Management',
    description: 'Predict and mitigate risks, improve decision quality, and strengthen governance frameworks',
    industryIds: ['banking', 'capital-markets', 'insurance', 'energy-resources', 'healthcare-medtech', 'government', 'real-estate'],
    pillarId: 'security',
  },
  {
    id: 'patient-outcomes',
    name: 'Patient & Student Outcomes',
    description: 'Improve care quality, learning outcomes, and service delivery for the people you serve',
    industryIds: ['healthcare-provider', 'healthcare-medtech', 'higher-education'],
    pillarId: 'reinvent',
  },
  {
    id: 'field-operations',
    name: 'Field & Frontline Operations',
    description: 'Enable frontline workers with real-time data, mobile tools, and AI-assisted decision-making',
    industryIds: ['energy-resources', 'manufacturing', 'retail', 'healthcare-provider', 'mobility-travel', 'telecommunications'],
    pillarId: 'enrich',
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous & Intelligent Systems',
    description: 'Deploy AI agents, autonomous processes, and intelligent automation at enterprise scale',
    industryIds: ['automotive', 'manufacturing', 'telecommunications', 'capital-markets', 'energy-resources'],
    pillarId: 'bend',
  },
];
