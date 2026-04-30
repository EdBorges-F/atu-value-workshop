import type { Industry } from './types';

// Frontier Canvas — Canonical Industries (16)
// Curated from 20 Frontier Conversation decks, removing roles (CMO/CFO)
// Each industry has: clean ID, name, icon, description, and 3-4 key pressures

export const INDUSTRIES: Industry[] = [
  {
    id: 'automotive',
    name: 'Automotive',
    icon: '🚗',
    description: 'Vehicle manufacturing, mobility services, and automotive supply chain',
    themes: [
      'Software-defined vehicle development',
      'Supply chain resilience and visibility',
      'Connected and autonomous driving',
      'Sustainability and EV transition',
    ],
  },
  {
    id: 'banking',
    name: 'Banking',
    icon: '🏦',
    description: 'Retail, commercial, and investment banking',
    themes: [
      'Regulatory compliance at scale',
      'Personalized customer experiences',
      'Fraud detection and risk management',
      'Legacy modernization',
    ],
  },
  {
    id: 'capital-markets',
    name: 'Capital Markets',
    icon: '📈',
    description: 'Asset management, trading, and financial services',
    themes: [
      'Real-time analytics and trading intelligence',
      'Regulatory reporting automation',
      'Client relationship personalization',
      'Operational efficiency in back-office',
    ],
  },
  {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    icon: '🛒',
    description: 'CPG, food and beverage, and consumer products manufacturing',
    themes: [
      'Demand forecasting and inventory optimization',
      'Content generation at scale',
      'Revenue growth management',
      'Supply chain agility',
    ],
  },
  {
    id: 'energy-resources',
    name: 'Energy & Resources',
    icon: '⚡',
    description: 'Oil and gas, mining, utilities, and renewable energy',
    themes: [
      'Asset reliability and predictive maintenance',
      'Worker safety and field operations',
      'Energy transition and sustainability',
      'Critical infrastructure protection',
    ],
  },
  {
    id: 'government',
    name: 'Government',
    icon: '🏛️',
    description: 'Federal, state, and local government agencies',
    themes: [
      'Citizen engagement and service delivery',
      'Mission efficiency and automation',
      'Data-driven policy decisions',
      'Security and compliance',
    ],
  },
  {
    id: 'healthcare-provider',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Hospitals, health systems, and clinical care delivery',
    themes: [
      'Clinical documentation and burnout reduction',
      'Patient experience and access',
      'Care coordination and outcomes',
      'Operational efficiency',
    ],
  },
  {
    id: 'healthcare-medtech',
    name: 'MedTech & Life Sciences',
    icon: '🔬',
    description: 'Medical devices, pharma, and biotech',
    themes: [
      'R&D acceleration and drug discovery',
      'Regulatory submission automation',
      'Supply chain quality and traceability',
      'Patient safety and device innovation',
    ],
  },
  {
    id: 'higher-education',
    name: 'Higher Education',
    icon: '🎓',
    description: 'Universities, colleges, and research institutions',
    themes: [
      'Student engagement and retention',
      'Research acceleration with AI',
      'Administrative efficiency',
      'Personalized learning at scale',
    ],
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: '🛡️',
    description: 'Property, casualty, life, and health insurance',
    themes: [
      'Underwriting speed and accuracy',
      'Claims automation and fraud detection',
      'Customer experience modernization',
      'Risk modeling and pricing',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Industrial manufacturing, process industries, and materials',
    themes: [
      'Operational efficiency and yield optimization',
      'Predictive maintenance and asset performance',
      'Product development acceleration',
      'Workforce empowerment and safety',
    ],
  },
  {
    id: 'media-entertainment',
    name: 'Media & Entertainment',
    icon: '🎬',
    description: 'Broadcasting, streaming, gaming, and content creation',
    themes: [
      'Content creation acceleration',
      'Personalized audience experiences',
      'Media asset management and monetization',
      'Creative workflow transformation',
    ],
  },
  {
    id: 'mobility-travel',
    name: 'Travel & Hospitality',
    icon: '✈️',
    description: 'Airlines, hotels, transportation, and logistics',
    themes: [
      'Guest and traveler experience',
      'Operational disruption management',
      'Revenue optimization and pricing',
      'Sustainability and fleet efficiency',
    ],
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: '🏪',
    description: 'Omnichannel retail, e-commerce, and consumer experiences',
    themes: [
      'Personalized shopping experiences',
      'Demand planning and inventory optimization',
      'Store operations and associate enablement',
      'Supply chain visibility',
    ],
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    icon: '📡',
    description: 'Network operators, service providers, and infrastructure',
    themes: [
      'Network optimization and automation',
      'Customer churn prediction and retention',
      'Service assurance and operations',
      'New revenue streams from AI services',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: '💼',
    description: 'Consulting, legal, accounting, and engineering services',
    themes: [
      'Knowledge worker productivity',
      'Client engagement and delivery',
      'Project efficiency and resource optimization',
      'Talent development and retention',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: '🏢',
    description: 'Commercial real estate, REITs, property management, and real estate services',
    themes: [
      'Portfolio performance and asset management',
      'Tenant experience and retention',
      'Operational cost reduction across properties',
      'Data-driven investment and leasing decisions',
    ],
  },
];
