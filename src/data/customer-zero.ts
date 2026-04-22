// Microsoft Customer Zero — AI Transformation Story
// Source: "MSFT AI Transformation - Customer Zero" deck (March 2026)
// CONFIDENTIAL: Approved for presentation to customers/partners with signed NDA only.
// All figures are based on internal Microsoft telemetry data.
// Microsoft makes no warranties, express, implied, or statutory.

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

// ─── Microsoft Internal Use Cases with Measured Results ──────
// Source: Customer Zero deck, Page 8 — "The Frontier Firm success framework"

export const CUSTOMER_ZERO_USE_CASES: CustomerZeroUseCase[] = [
  // Enrich Employee Experiences
  {
    id: 'cz-self-service-hr',
    name: 'Self-Service HR',
    pillar: 'enrich',
    metrics: ['25% increased accuracy in answering employee questions'],
    source: 'Microsoft internal telemetry',
  },
  {
    id: 'cz-github-copilot-delivery',
    name: 'GitHub Copilot-Led Customer Delivery',
    pillar: 'enrich',
    metrics: ['15% more developer productivity'],
    source: 'Microsoft internal telemetry',
  },

  // Reshape Business Processes
  {
    id: 'cz-copilot-accelerated-sales',
    name: 'Copilot-Accelerated Sales',
    pillar: 'reshape',
    metrics: [
      '9% more revenue per seller',
      '20% faster deal closure',
    ],
    source: 'Microsoft internal telemetry',
  },
  {
    id: 'cz-customer-investment-agility',
    name: 'Improving Customer Investment Agility',
    pillar: 'reshape',
    metrics: [
      '70% velocity improvement',
      '10% cost savings',
    ],
    source: 'Microsoft internal telemetry',
  },
  {
    id: 'cz-quote-to-cash',
    name: 'Quote-to-Cash',
    pillar: 'reshape',
    metrics: ['2.5x faster time to payment collections resolution'],
    source: 'Microsoft internal telemetry',
  },
  {
    id: 'cz-actionable-seller-insights',
    name: 'Driving Actionable Seller Insights',
    pillar: 'reshape',
    metrics: [
      '30% cost savings',
      '100K seller hours saved',
    ],
    source: 'Microsoft internal telemetry',
  },

  // Reinvent Customer Engagement
  {
    id: 'cz-reimagining-customer-support',
    name: 'Reimagining Customer Support',
    pillar: 'reinvent',
    metrics: ['9–12% more cases managed by support agents'],
    source: 'Microsoft internal telemetry',
  },
  {
    id: 'cz-marketing-campaigns',
    name: 'Marketing Campaigns',
    pillar: 'reinvent',
    metrics: ['21% higher conversion rate on digital sales campaign'],
    source: 'Microsoft internal telemetry',
  },
]

// ─── 3 AI Adoption Patterns ─────────────────────────────────
// Source: Customer Zero deck, Page 9 — "How Frontier Firms use AI"

export const CUSTOMER_ZERO_PATTERNS = [
  {
    id: 'pattern-1',
    name: 'Human with Assistant',
    description: 'Every employee has an AI assistant that helps them work better and faster.',
    level: 1,
  },
  {
    id: 'pattern-2',
    name: 'Human-Agent Teams',
    description: 'Agents join teams as "digital colleagues," taking on specific tasks with human direction.',
    level: 2,
  },
  {
    id: 'pattern-3',
    name: 'Human-Led, Agent Operated',
    description: 'Humans set direction and agents run entire business processes and workflows, checking in as needed.',
    level: 3,
  },
] as const

// ─── 3 Transformation Recipes ────────────────────────────────
// Source: Customer Zero deck, Page 11 — "Our approach relies on three recipes"
// Informed by nearly 100 internal case studies

export const CUSTOMER_ZERO_RECIPES: CustomerZeroRecipe[] = [
  {
    id: 'recipe-persona',
    name: 'Persona Acceleration',
    description: 'Empowering specific roles (e.g., sellers, support agents) with AI tools tailored to their workflows.',
    pattern: 'Role-specific AI enablement',
  },
  {
    id: 'recipe-workflow',
    name: 'AI-Powered Workflow Optimization',
    description: 'Reinventing existing processes with AI to improve outcomes.',
    pattern: 'Process reimagination',
  },
  {
    id: 'recipe-incubator',
    name: 'AI-First Incubator',
    description: 'Designing new work from scratch, with AI at the center of how the team operates.',
    pattern: 'Greenfield AI-native design',
  },
]

// ─── Digital → AI Transformation Principles ──────────────────
// Source: Customer Zero deck, Page 12

export const CUSTOMER_ZERO_PRINCIPLES: CustomerZeroTransformationPrinciple[] = [
  {
    id: 'principle-1',
    digital: 'Enlist and empower employees',
    ai: 'Design backwards from outcomes and then workflows',
  },
  {
    id: 'principle-2',
    digital: 'Hold line leaders accountable',
    ai: 'Treat intelligence as abundant, and redesign work and decision rights accordingly',
  },
  {
    id: 'principle-3',
    digital: 'Expose the work',
    ai: 'Build observability and responsible AI into every layer of the stack',
  },
  {
    id: 'principle-4',
    digital: 'Incentivize outcomes',
    ai: 'Reward structured, AI-enabled experimentation',
  },
  {
    id: 'principle-5',
    digital: 'Lead & orchestrate from the top',
    ai: 'Consider AI as a foundational platform',
  },
]

// ─── Recommended Next Steps for Customers ────────────────────
// Source: Customer Zero deck, Page 14

export const CUSTOMER_ZERO_NEXT_STEPS = [
  { id: 'step-1', title: 'Set CEO-Level Priorities', description: 'Establish a steering committee and/or an AI Transformation Office to define desired business outcomes.' },
  { id: 'step-2', title: 'Lead from the Business', description: 'Ensure AI is a business-wide effort, not just an IT or engineering initiative.' },
  { id: 'step-3', title: 'Grow AI-Ready Footprint', description: 'Build your data and infrastructure backbone.' },
  { id: 'step-4', title: 'Experiment and Launch', description: 'Find new ways to empower employees, drive cross-functionality, enhance distinctive processes.' },
  { id: 'step-5', title: 'Measure, Ask, and Adapt', description: 'Use embedded instrumentation to measure progress against goals, gather feedback, and experiment further.' },
  { id: 'step-6', title: 'Engage and Inspire', description: 'Be transparent, set expectations for employees, celebrate success.' },
] as const

// ─── Aggregate Stats ─────────────────────────────────────────

export const CUSTOMER_ZERO_STATS = {
  totalInternalCaseStudies: '~100',
  deckDate: 'March 2026',
  refreshCadence: 'Quarterly',
  contactEmail: 'mcapsaiideas@microsoft.com',
  resourceUrl: 'https://aka.ms/AITOCustomerZero',
} as const

// ═══════════════════════════════════════════════════════════════
// Departmental Chapters — extracted from 10 Customer Zero PDFs
// Source: Customer Zero supplemental decks (March–April 2026)
// All figures based on internal Microsoft telemetry data.
// ═══════════════════════════════════════════════════════════════

export interface CustomerZeroDeptUseCase {
  name: string
  description: string
  metrics: { metric: string; value: string }[]
}

export interface CustomerZeroDepartment {
  id: string
  name: string
  description: string
  useCases: CustomerZeroDeptUseCase[]
  headlineMetrics: { metric: string; value: string; context: string }[]
  tools: string[]
  pattern: 'human-with-assistant' | 'human-agent-teams' | 'human-led-agent-operated' | 'mixed'
  quote?: string
}

// ─── All 10 Departmental Chapters ────────────────────────────

export const CUSTOMER_ZERO_DEPARTMENTS: CustomerZeroDepartment[] = [
  // ── 1. Change & Adoption ──────────────────────────────────
  // Source: Customer Zero — Change & Adoption deck
  {
    id: 'dept-change-adoption',
    name: 'Change & Adoption',
    description: 'A 14-person team driving Copilot adoption across ~60,000 MCAPS employees through a six-pillar framework.',
    useCases: [
      {
        name: 'MCAPS-wide Copilot Adoption Program',
        description: 'Organization-wide rollout across ~60,000 employees driven by a 14-person change and adoption team.',
        metrics: [
          { metric: 'Initial DAU (Oct 2023)', value: '7.9%' },
          { metric: 'DAU post-launch dip (Dec 2023)', value: '4.4%' },
          { metric: 'DAU after adoption efforts (Jun 2024)', value: '36.4%' },
          { metric: 'DAU (May 2025)', value: '68%' },
          { metric: 'MAU (May 2025)', value: '76.5%' },
          { metric: 'WAU (May 2025)', value: '74.1%' },
        ],
      },
      {
        name: 'Executive Sponsorship',
        description: 'Structured process to engage leadership early; executives model Copilot usage to team members.',
        metrics: [],
      },
      {
        name: 'Empowering Champions',
        description: 'Networks of enthusiastic early adopters who bridge the gap between peers and leadership, building grassroots momentum.',
        metrics: [],
      },
      {
        name: 'Role-Based Immersion',
        description: 'Scenario-driven content for each MCAPS role using tools like Role Hub to centralize curated resources.',
        metrics: [],
      },
      {
        name: 'Build a Daily AI Habit',
        description: 'Small, repeatable actions to make Copilot approachable; sharing real-world prompts and success stories.',
        metrics: [],
      },
      {
        name: 'Gamification',
        description: '"Copilot Cup" challenge recognizing teams with highest daily active usage; hackathons; agent creation learning days.',
        metrics: [],
      },
      {
        name: 'Track Your Progress',
        description: 'Regular measurement of usage, engagement, and outcomes to drive continuous improvement.',
        metrics: [],
      },
    ],
    headlineMetrics: [
      { metric: 'DAU (Oct 2023)', value: '7.9%', context: 'Daily Active Users at launch' },
      { metric: 'DAU (Dec 2023)', value: '4.4%', context: 'Post-launch dip' },
      { metric: 'DAU (Jun 2024)', value: '36.4%', context: 'After adoption efforts' },
      { metric: 'DAU (May 2025)', value: '68%', context: 'Current daily active users' },
      { metric: 'MAU (May 2025)', value: '76.5%', context: 'Monthly active users' },
      { metric: 'WAU (May 2025)', value: '74.1%', context: 'Weekly active users' },
      { metric: 'DAU (May 2025, second metric)', value: '60.1%', context: 'Daily active users' },
      { metric: 'Change team size', value: '14', context: 'People driving adoption for ~60K employees' },
    ],
    tools: ['Microsoft 365 Copilot', 'Role Hub', 'Copilot Adoption-in-a-Box'],
    pattern: 'human-with-assistant',
    quote: 'Ultimately, it\'s not going to be about the technology — it\'s about how people and processes come together to drive transformation. — Satya Nadella',
  },

  // ── 2. Customer Service & Support (CSS) ───────────────────
  // Source: Customer Zero — CSS deck
  {
    id: 'dept-css',
    name: 'Customer Service & Support',
    description: 'Reimagining customer support by unifying 16 case management systems and 500+ tools with generative AI.',
    useCases: [
      {
        name: 'Multilingual Customer Support with AI-Powered Text Translation',
        description: 'Deployed Dynamics for Microsoft (DfM) Text Translation in Dynamics 365 to support Korean, Japanese, and Mandarin speakers without switching tools.',
        metrics: [
          { metric: 'Translation adequacy score', value: '4.95 out of 5' },
          { metric: 'Language quality score', value: '4.25 out of 5' },
        ],
      },
      {
        name: 'Reimagining Customer Support',
        description: 'Copilot generative AI connecting fragmented systems (16 case management systems, 500+ tools) for faster, more consistent customer service.',
        metrics: [
          { metric: 'Reduction in average handle time', value: '12–16%' },
          { metric: 'Increase in cases/chats managed per engineer', value: '9–12%' },
          { metric: 'Decrease in peer assistance needed', value: '13%' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Translation adequacy score', value: '4.95 out of 5', context: 'AI-based translation quality' },
      { metric: 'Language quality score', value: '4.25 out of 5', context: 'Language quality rating' },
      { metric: 'Reduction in average handle time', value: '12–16%', context: 'For chat cases' },
      { metric: 'Increase in cases/chats managed', value: '9–12%', context: 'Per support engineer' },
      { metric: 'Decrease in peer assistance needed', value: '13%', context: 'Support engineers requiring peer help' },
    ],
    tools: ['Dynamics 365', 'Dynamics for Microsoft (DfM) Text Translation', 'Copilot'],
    pattern: 'human-led-agent-operated',
  },

  // ── 3. Developer — Internal Engineering ───────────────────
  // Source: Customer Zero — Developer deck
  {
    id: 'dept-developer',
    name: 'Developer (Internal Engineering)',
    description: 'End-to-end AI-powered Software Development Lifecycle for internal engineering across six SDLC steps.',
    useCases: [
      {
        name: 'Business Requirements (SDLC Step 1)',
        description: 'AI tools synthesize conversations and documents into structured business requirements.',
        metrics: [
          { metric: 'Time to deliver business requirements', value: '~50% reduction' },
          { metric: 'Time to review/align requirements', value: '~70% less' },
        ],
      },
      {
        name: 'Prototyping (SDLC Step 2)',
        description: 'GitHub Spark turns ideas into code, prototypes, and workflows; AI-driven prototypes enable alignment.',
        metrics: [
          { metric: 'Reduction in engineering effort', value: '~65%' },
          { metric: 'Productivity gains', value: '~20%' },
        ],
      },
      {
        name: 'Backlog Creation (SDLC Step 3)',
        description: 'ADO AI Work Item Generator, Researcher, and GitHub Copilot convert requirements into complete work items.',
        metrics: [
          { metric: 'Backlog generation gains', value: 'Up to 50%' },
        ],
      },
      {
        name: 'Technical Specifications (SDLC Step 4)',
        description: 'GitHub Copilot + Azure DevOps via Model Context Protocol generates high-level and low-level design artifacts.',
        metrics: [
          { metric: 'Technical spec writing', value: 'Weeks to Hours' },
        ],
      },
      {
        name: 'Production Code (SDLC Step 5)',
        description: 'GitHub Copilot + ADO SWE Agent + MCP integration generates production-ready code from approved specifications.',
        metrics: [
          { metric: 'Reduction in development effort', value: '50% (20 person-days to 10)' },
        ],
      },
      {
        name: 'QA & Code Maintenance (SDLC Step 6)',
        description: 'AI-driven test creation through GitHub Copilot, ADO AI Work Item Assistant, and Playwright MCP.',
        metrics: [
          { metric: 'AI-generated tests', value: '80%' },
          { metric: 'QA cycle time reduction', value: '67% (80 hours to 26 hours)' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Time to deliver business requirements', value: '~50% reduction', context: 'AI-curated requirements' },
      { metric: 'Time to review/align requirements', value: '~70% less', context: 'Stakeholder alignment' },
      { metric: 'Reduction in engineering effort (prototyping)', value: '~65%', context: 'Internal engineering efforts' },
      { metric: 'Productivity gains (prototyping)', value: '~20%', context: 'Shortening requirements-to-code cycle' },
      { metric: 'Backlog generation gains', value: 'Up to 50%', context: 'Finalized requirements to actionable work items' },
      { metric: 'Technical spec writing', value: 'Weeks to Hours', context: 'AI-assisted design' },
      { metric: 'Reduction in development effort', value: '50%', context: 'From 20 person-days to 10 days' },
      { metric: 'AI-generated tests', value: '80%', context: 'Regression, integration and unit tests' },
      { metric: 'QA cycle time reduction', value: '67%', context: 'Reducing 80 human hours to 26 hours' },
    ],
    tools: [
      'M365 Copilot', 'Researcher', 'GitHub Spark', 'Azure DevOps (ADO)',
      'ADO AI Work Item Generator', 'ADO AI Work Item Assistant', 'GitHub Copilot',
      'ADO Software Engineering (SWE) Agent', 'Model Context Protocol (MCP)', 'Playwright MCP',
    ],
    pattern: 'mixed',
    quote: 'At Microsoft, we\'re on our own development journey, preparing our teams to lead in an AI-first world.',
  },

  // ── 4. Information Technology ──────────────────────────────
  // Source: Customer Zero — IT deck
  {
    id: 'dept-it',
    name: 'Information Technology',
    description: 'AI-powered network operations and proactive device health management across Microsoft corporate infrastructure.',
    useCases: [
      {
        name: 'Network Infrastructure Copilot (NiC)',
        description: 'AI and natural language to surface real-time network insights, automate troubleshooting and routine work for IT network operations.',
        metrics: [
          { metric: 'Reduction in time interpreting network issues', value: '75%' },
          { metric: 'Hours saved in FY25', value: '14,400' },
        ],
      },
      {
        name: 'Device Care',
        description: 'AI-powered solution proactively detecting and remediating device and software vulnerabilities across 12K corporate devices.',
        metrics: [
          { metric: 'Patch compliance within 10 days', value: '95% (2X Microsoft general standards)' },
          { metric: 'Hours saved in FY25', value: '6,000' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Reduction in time interpreting network issues', value: '75%', context: 'Network operations' },
      { metric: 'Hours saved in FY25 (network)', value: '14,400', context: 'Network Infrastructure Copilot' },
      { metric: 'Patch compliance within 10 days', value: '95%', context: '2X Microsoft general standards' },
      { metric: 'Hours saved in FY25 (device)', value: '6,000', context: 'Device Care solution' },
    ],
    tools: ['Network Infrastructure Copilot (NiC)', 'Device Care (AI-powered)', 'Natural language processing'],
    pattern: 'human-led-agent-operated',
  },

  // ── 5. Legal (CELA) ───────────────────────────────────────
  // Source: Customer Zero — Legal deck
  {
    id: 'dept-legal',
    name: 'Legal (CELA)',
    description: 'SharePoint Agent providing instant, vetted legal guidance through natural-language queries for marketing teams.',
    useCases: [
      {
        name: 'SharePoint Agent for Legal Guidance',
        description: 'CELA deployed a SharePoint Agent for instant, vetted legal guidance through natural-language queries, eliminating bottlenecks for marketing teams.',
        metrics: [
          { metric: 'Questions answered in <2 minutes', value: '100%' },
          { metric: 'Faster issue resolution', value: '2.97x' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Questions answered in <2 minutes', value: '100%', context: 'All legal queries resolved in under 2 min' },
      { metric: 'Faster issue resolution', value: '2.97x', context: 'With agent technology vs. prior process' },
    ],
    tools: ['SharePoint Agent', 'Copilot Analytics'],
    pattern: 'human-led-agent-operated',
  },

  // ── 6. Marketing ──────────────────────────────────────────
  // Source: Customer Zero — Marketing deck
  {
    id: 'dept-marketing',
    name: 'Marketing',
    description: 'AI-powered content creation, event support, planning automation, and global event scheduling across marketing operations.',
    useCases: [
      {
        name: 'Social Short Video Creation',
        description: 'AI Video platform prototype enables marketers to upload, analyze, and edit long-form footage into polished short-form videos without agency support.',
        metrics: [
          { metric: 'Reduction in social short creation time', value: '99% (full week to under an hour)' },
        ],
      },
      {
        name: 'Event Support (AI Event Assistant)',
        description: 'Built on Azure AI Foundry, enables attendees to navigate events and get personalized answers; deployed at Ignite and other events.',
        metrics: [
          { metric: 'Fewer support chats at Ignite 2023', value: '57%' },
          { metric: 'Decrease in email support tickets', value: '50% (2024 vs 2023)' },
        ],
      },
      {
        name: 'Marketing Planning Document Development (ORCA Agent)',
        description: 'Operations Resource and Colleague Agent captures inputs across systems through conversational intake to accelerate BRD readiness.',
        metrics: [
          { metric: 'Time to generate first BRD draft', value: '70–90% reduction' },
          { metric: 'Annual hours reinvested', value: '~12,000' },
        ],
      },
      {
        name: 'Global Event Scheduling (Events Scheduler)',
        description: 'AI-powered scheduling platform automating planning for 240+ global events per month.',
        metrics: [
          { metric: 'Days saved in FY26', value: '70' },
          { metric: 'Global events scheduled', value: '400+ for remainder of FY26' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Reduction in social short creation time', value: '99%', context: 'From a full week to under an hour' },
      { metric: 'Fewer support chats at Ignite 2023', value: '57%', context: 'Compared to Ignite 2022 (maintained in 2024)' },
      { metric: 'Decrease in email support tickets', value: '50%', context: 'In-person attendee tickets, 2024 vs 2023' },
      { metric: 'Time to generate first BRD draft', value: '70–90% reduction', context: 'Marketing planning documents' },
      { metric: 'Annual hours reinvested by ORCA', value: '~12,000', context: 'Freed from manual BRD work' },
      { metric: 'Days saved in FY26 (event scheduling)', value: '70', context: 'Automating event scheduling and planning' },
      { metric: 'Global events scheduled', value: '400+', context: 'For remainder of FY26' },
    ],
    tools: ['AI Video platform prototype', 'Azure AI Foundry (AI Event Assistant)', 'ORCA (Operations Resource and Colleague Agent)', 'Events Scheduler'],
    pattern: 'human-led-agent-operated',
  },

  // ── 7. Operations ─────────────────────────────────────────
  // Source: Customer Zero — Operations deck
  {
    id: 'dept-operations',
    name: 'Operations',
    description: 'Eight AI-powered use cases spanning partner onboarding, contracting, BPO, trade compliance, and employee productivity automation.',
    useCases: [
      {
        name: 'ADAPT AI Agent (Partner Onboarding)',
        description: 'Vets 500,000+ partner applications/year; consolidates dozens of manual steps into one intelligent workflow.',
        metrics: [
          { metric: 'Review speed', value: '17x faster' },
          { metric: 'Hours saved', value: '146K+ projected by end of FY26' },
          { metric: 'Human-comparable accuracy', value: '96%' },
        ],
      },
      {
        name: 'Automation Hub',
        description: 'Centralizes 50+ AI automations across M365 for employee productivity.',
        metrics: [
          { metric: 'Automations available', value: '50+' },
          { metric: 'Hours saved by Microsoft employees', value: '300K+' },
        ],
      },
      {
        name: 'Direct Enterprise Contracting',
        description: 'Embedded AI to automate data population, customer validation, and contract assembly for Commercial Strategic accounts.',
        metrics: [
          { metric: 'Faster response times', value: '2.3x' },
          { metric: 'Reduced internal cost per enrollment', value: '27%' },
          { metric: 'Contract manager capacity increase', value: '7x' },
        ],
      },
      {
        name: 'BPO Transformation',
        description: 'AI toolkit with Dynamics 365 and Azure AI to improve workflow across Business Process Outsourcing.',
        metrics: [
          { metric: 'Reduction in cost per transaction', value: '35%' },
          { metric: 'Processing quality improvement', value: '80% reduction in rework due to error' },
          { metric: 'Processes transformed with AI', value: '25%+' },
        ],
      },
      {
        name: 'Trade Screening Assisted AI',
        description: 'AI tools speed up Tier 1 and Tier 2 trade compliance reviews.',
        metrics: [
          { metric: 'Faster Tier-1 alert processing', value: '25%' },
          { metric: 'Faster Tier-2 investigations', value: '33%' },
          { metric: 'Annual vendor cost savings', value: '7%' },
        ],
      },
      {
        name: 'Reimagining Contracting (Unified Deal Contract Assist)',
        description: 'AI-powered Services Central Teams app integrated with Copilot and Dynamics 365.',
        metrics: [
          { metric: 'Faster quote to service', value: '77%' },
          { metric: 'Service usage growth', value: '2X' },
          { metric: 'Reduction in rework', value: '~12%' },
        ],
      },
      {
        name: 'Specialized Customer Onboarding',
        description: 'Team built 40 agents in 9 months for customer migration to Microsoft Customer Agreement.',
        metrics: [
          { metric: 'Manual processes automated', value: '42%' },
          { metric: 'Hours saved', value: '2,400 reallocated across team' },
          { metric: 'Adoption rate', value: '90%' },
          { metric: 'Days saved per customer scenario', value: '30' },
        ],
      },
      {
        name: 'Partner Support Assistant',
        description: 'Self-service, multilingual natural-language assistant for operational and licensing questions.',
        metrics: [
          { metric: 'Fewer escalations to case managers', value: '40%' },
          { metric: 'Faster response speed', value: '64,800X (6 days to 8 seconds)' },
          { metric: 'Reduction in annual support costs', value: '27%' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Review speed (partner onboarding)', value: '17x faster', context: 'ADAPT AI agent' },
      { metric: 'Hours saved (partner onboarding)', value: '146K+', context: 'Projected by end of FY26' },
      { metric: 'Human-comparable accuracy', value: '96%', context: 'ADAPT agent decisions' },
      { metric: 'Automations available', value: '50+', context: 'Automation Hub' },
      { metric: 'Hours saved (Automation Hub)', value: '300K+', context: 'By Microsoft employees' },
      { metric: 'Faster response times (contracting)', value: '2.3x', context: 'Direct enterprise contracting' },
      { metric: 'Reduced internal cost per enrollment', value: '27%', context: 'Direct enterprise contracting' },
      { metric: 'Contract manager capacity increase', value: '7x', context: 'Direct enterprise contracting' },
      { metric: 'Reduction in cost per transaction (BPO)', value: '35%', context: 'Business Process Outsourcing' },
      { metric: 'Processing quality improvement (BPO)', value: '80%', context: 'Reduction in rework due to error' },
      { metric: 'Processes transformed with AI (BPO)', value: '25%+', context: 'Of BPO processes' },
      { metric: 'Faster Tier-1 alert processing', value: '25%', context: 'Trade screening' },
      { metric: 'Faster Tier-2 investigations', value: '33%', context: 'Trade screening' },
      { metric: 'Annual vendor cost savings (trade)', value: '7%', context: 'Trade screening' },
      { metric: 'Faster quote to service', value: '77%', context: 'Unified Deal Contract Assist' },
      { metric: 'Service usage growth', value: '2X', context: 'After shift to human-led, agent operated' },
      { metric: 'Reduction in rework', value: '~12%', context: 'Contract rework' },
      { metric: 'Manual processes automated (onboarding)', value: '42%', context: 'Customer onboarding agents' },
      { metric: 'Hours saved (customer onboarding)', value: '2,400', context: 'Reallocated across team' },
      { metric: 'Adoption rate (customer onboarding)', value: '90%', context: 'Agent adoption' },
      { metric: 'Days saved per customer scenario', value: '30', context: 'Customer onboarding' },
      { metric: 'Fewer escalations to case managers', value: '40%', context: 'Partner support assistant' },
      { metric: 'Faster response speed', value: '64,800X', context: 'From 6 days to 8 seconds' },
      { metric: 'Reduction in annual support costs', value: '27%', context: 'Partner support' },
    ],
    tools: ['ADAPT AI Agent', 'Automation Hub', 'Microsoft 365', 'Dynamics 365', 'Azure AI', 'Copilot', 'Copilot Studio', 'Services Central Teams app'],
    pattern: 'mixed', // All three patterns represented
    quote: 'Sellers can spend more time with customers and customers see value faster.',
  },

  // ── 8. Responsible AI ─────────────────────────────────────
  // Source: Customer Zero — Responsible AI deck
  {
    id: 'dept-responsible-ai',
    name: 'Responsible AI',
    description: 'Governance, security, and compliance frameworks for AI agents — including RAI risk mitigation and Secure Future Initiative.',
    useCases: [
      {
        name: 'Agent J.ai Security',
        description: 'Executive-voice sales agent faced RAI/security risks (prompt injection, impersonation, session hijacking); resolved through cross-security governance.',
        metrics: [
          { metric: 'Faster skilling delivery', value: '90%' },
          { metric: 'Returning user rate', value: '54% (three months after launch)' },
        ],
      },
      {
        name: 'Digital Asset Risk Engine',
        description: 'AI-powered service connecting and synchronizing data sources to surface risks, detect correlations, and deliver trusted insights across digital assets.',
        metrics: [
          { metric: 'Assets recovered', value: '780K' },
          { metric: 'Findings resolved', value: '7K' },
          { metric: 'AI-generated insights', value: '357' },
        ],
      },
      {
        name: 'Secure Future Initiative (SFI)',
        description: 'Resolved 315,000+ noncompliant action items since May 2024 through automation, governance, compliance champions, and asset rationalization.',
        metrics: [
          { metric: 'SFI compliance', value: '100%' },
          { metric: 'Decrease in assets', value: '95%' },
          { metric: 'Reduction in Azure spending', value: '25% (saving 375K+ hours)' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Faster skilling delivery (Agent J.ai)', value: '90%', context: 'Compared to traditional training methods' },
      { metric: 'Returning user rate (Agent J.ai)', value: '54%', context: 'Three months after launch' },
      { metric: 'Assets recovered (Digital Asset Risk Engine)', value: '780K', context: 'Digital assets' },
      { metric: 'Findings resolved', value: '7K', context: 'Risk findings' },
      { metric: 'AI-generated insights', value: '357', context: 'Automated insights' },
      { metric: 'SFI compliance', value: '100%', context: 'All noncompliant items resolved' },
      { metric: 'Decrease in assets', value: '95%', context: 'Minimizing risk and simplifying management' },
      { metric: 'Reduction in Azure spending', value: '25%', context: 'With automation saving 375K+ hours' },
    ],
    tools: ['Agent J.ai', 'Digital Asset Risk Engine', 'Azure (for SFI cost optimization)'],
    pattern: 'mixed',
    quote: 'At Microsoft, we\'re on our own Responsible AI journey, preparing our teams to lead in an AI-first world.',
  },

  // ── 9. Sales ──────────────────────────────────────────────
  // Source: Customer Zero — Sales deck
  {
    id: 'dept-sales',
    name: 'Sales',
    description: 'Ten AI use cases across the full sales lifecycle — from seller productivity and insights to autonomous SMB agents and coaching.',
    useCases: [
      {
        name: 'Copilot-Enriched Seller Experiences',
        description: 'Broad Copilot adoption across MCAPS sellers to simplify routine processes.',
        metrics: [
          { metric: 'Revenue per pilot group seller', value: '+9.4%' },
          { metric: 'Increase in deals closed', value: '+20%' },
        ],
      },
      {
        name: 'Driving Actionable Seller Insights',
        description: 'Natural language queries in Power BI Copilot (CWYD) and Proactive Insights via AI Foundry and Fabric.',
        metrics: [
          { metric: 'Hours saved', value: '100K estimated annually' },
          { metric: 'Data ingestion cost savings', value: '30%' },
          { metric: 'Faster insights generation', value: '10X' },
        ],
      },
      {
        name: 'AI-Infused Sales Process (Sales Chat)',
        description: 'Single agentic experience for account executives with account details and performance insights.',
        metrics: [
          { metric: 'New influenced pipeline', value: '$63M (FY25)' },
          { metric: 'Deal cycle velocity', value: '+10% projected' },
        ],
      },
      {
        name: 'Digital Telesales',
        description: 'Copilot automated call prep, note-taking, CRM updates for telesales agents.',
        metrics: [
          { metric: 'Revenue per seller', value: '+20% (40%+ over 2 years)' },
          { metric: 'Deal volume per seller', value: '+10%' },
        ],
      },
      {
        name: 'Reshaping Quoting & Negotiations',
        description: 'AI-enabled experience connecting fragmented systems for deal quotes and upsell recommendations.',
        metrics: [
          { metric: 'Seller productivity', value: '+25% projected' },
        ],
      },
      {
        name: 'Improving Customer Investment Agility',
        description: 'AI-enabled guided navigation with multi-agent framework using Copilot Studio and Azure OpenAI.',
        metrics: [
          { metric: 'Velocity improvement', value: '+70%' },
          { metric: 'Operational cost reduction', value: '10%' },
        ],
      },
      {
        name: 'GitHub Copilot-Led Customer Delivery',
        description: 'AI-assisted developer productivity for customer solutions.',
        metrics: [
          { metric: 'Developer productivity', value: '+15%' },
          { metric: 'Faster task completion', value: '55%' },
        ],
      },
      {
        name: 'Scaling SMB with Autonomous Agents (Sales Agent)',
        description: 'Autonomous agent researching leads, arranging meetings, and engaging customers.',
        metrics: [
          { metric: 'Lead-to-opportunity conversion', value: '13% vs 10% non-agentic (30% increase)' },
        ],
      },
      {
        name: 'Managing Incentive-Based Compensation',
        description: 'Suite of agents for 40,000+ employees with incentive-based compensation.',
        metrics: [
          { metric: 'Decrease in quota support tickets', value: '32% (120 days post-launch)' },
          { metric: 'Employee satisfaction rating', value: '4.05 (beyond 4.0 goal)' },
          { metric: 'Decrease in vendor spend', value: '15%' },
        ],
      },
      {
        name: 'On-Demand Sales Coaching Agent',
        description: 'AI-powered, voice-first coaching agent grounded in Microsoft sales methodology.',
        metrics: [
          { metric: 'Employees using coaching agent', value: '82K (since July 2025)' },
          { metric: 'Users rating 4-5 stars', value: '81%' },
          { metric: 'Increase in interaction duration', value: '3.4X (FY26 Q1 to Q3)' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Revenue per pilot group seller', value: '+9.4%', context: 'Copilot-enriched sellers' },
      { metric: 'Increase in deals closed', value: '+20%', context: 'Copilot adoption' },
      { metric: 'Hours saved (seller insights)', value: '100K', context: 'Estimated annually by sales org' },
      { metric: 'Data ingestion cost savings', value: '30%', context: 'Power BI/Fabric insights' },
      { metric: 'Faster insights generation', value: '10X', context: 'Anytime & anywhere' },
      { metric: 'New influenced pipeline', value: '$63M', context: 'FY25, AI-infused sales process' },
      { metric: 'Deal cycle velocity', value: '+10% projected', context: 'AI-infused sales process' },
      { metric: 'Revenue per seller (telesales)', value: '+20%', context: '40%+ over 2 years' },
      { metric: 'Deal volume per seller (telesales)', value: '+10%', context: 'Digital telesales' },
      { metric: 'Seller productivity (quoting)', value: '+25% projected', context: 'Quoting & negotiations' },
      { metric: 'Velocity improvement (investment)', value: '+70%', context: 'Customer investment agility' },
      { metric: 'Operational cost reduction', value: '10%', context: 'Customer investment agility' },
      { metric: 'Developer productivity', value: '+15%', context: 'GitHub Copilot delivery' },
      { metric: 'Faster task completion', value: '55%', context: 'GitHub Copilot delivery' },
      { metric: 'Lead-to-opportunity conversion', value: '13%', context: 'vs 10% non-agentic (30% increase)' },
      { metric: 'Decrease in quota support tickets', value: '32%', context: '120 days post-launch' },
      { metric: 'Employee satisfaction rating', value: '4.05', context: 'Beyond 4.0 goal' },
      { metric: 'Decrease in vendor spend', value: '15%', context: 'Compensation management' },
      { metric: 'Employees using coaching agent', value: '82K', context: 'Since July 2025' },
      { metric: 'Users rating 4-5 stars', value: '81%', context: 'Coaching agent satisfaction' },
      { metric: 'Increase in interaction duration', value: '3.4X', context: 'FY26 Q1 to Q3, showing deeper engagement' },
    ],
    tools: [
      'Microsoft 365 Copilot', 'Power BI Copilot (CWYD)', 'AI Foundry', 'Microsoft Fabric',
      'Sales Chat (agentic)', 'Copilot Studio', 'Azure OpenAI Service', 'GitHub Copilot',
      'Dynamics 365', 'Sales Agent (autonomous)',
    ],
    pattern: 'mixed', // All three patterns represented
    quote: 'Microsoft is embracing our own AI Transformation — with 60K employees, millions of customers, 500K partners, 100 subsidiaries.',
  },

  // ── 10. Supply Chain ──────────────────────────────────────
  // Source: Customer Zero — Supply Chain deck
  {
    id: 'dept-supply-chain',
    name: 'Supply Chain',
    description: 'Unified agent platform orchestrating supply fulfilment investigations and data center power capacity planning across 300+ facilities.',
    useCases: [
      {
        name: 'Unified Supply Chain Platform',
        description: 'New platform orchestrating universal and dedicated agents through a shared layer with built-in routing, evaluation, telemetry, and health monitoring.',
        metrics: [
          { metric: 'Increase in monthly active usage', value: '2.5X' },
          { metric: 'Faster agent app development', value: '6X' },
        ],
      },
      {
        name: 'Accelerating Supply Fulfilment Investigations',
        description: 'Agent investigates demand fulfilment issues with explainable, conversational responses and traceable logic.',
        metrics: [
          { metric: 'Faster investigations', value: '1.3X' },
          { metric: 'Fulfilment investigations managed per member', value: '3X' },
        ],
      },
      {
        name: 'Augmenting Power Capacity',
        description: 'Agent for data center power planners to unify workflows, optimize capacity across 300+ data centers, and enable scenario-based analysis via natural language.',
        metrics: [
          { metric: 'Data centers optimized', value: '300+' },
          { metric: 'Hours saved per cycle', value: '40' },
        ],
      },
    ],
    headlineMetrics: [
      { metric: 'Increase in monthly active usage', value: '2.5X', context: 'Unified platform adoption' },
      { metric: 'Faster agent app development', value: '6X', context: 'Unified platform' },
      { metric: 'Faster investigations', value: '1.3X', context: 'Fulfilment investigations' },
      { metric: 'Fulfilment investigations managed per member', value: '3X', context: 'Per team member capacity' },
      { metric: 'Data centers optimized', value: '300+', context: 'Power capacity' },
      { metric: 'Hours saved per cycle', value: '40', context: 'Power capacity planning' },
    ],
    tools: ['AI agents (unified platform)', 'Azure DevOps', 'AI Canvas', 'Global Chat (natural language interface)'],
    pattern: 'human-led-agent-operated',
  },
]

// ─── Top Proof Points for Customer Conversations ─────────────
// Source: Customer Zero Structured Summary — cross-department headline metrics

export interface CustomerZeroProofPoint {
  department: string
  headlineMetric: string
  value: string
}

export const CUSTOMER_ZERO_HEADLINE_PROOF_POINTS: CustomerZeroProofPoint[] = [
  // Source: Customer Zero — Change & Adoption deck
  { department: 'Change & Adoption', headlineMetric: 'DAU growth (Oct 2023 → May 2025)', value: '7.9% → 68%' },
  // Source: Customer Zero — Sales deck
  { department: 'Sales', headlineMetric: 'Revenue per seller increase', value: '+9.4%' },
  // Source: Customer Zero — Sales deck
  { department: 'Sales', headlineMetric: 'Deals closed increase', value: '+20%' },
  // Source: Customer Zero — Sales deck
  { department: 'Sales', headlineMetric: 'SMB lead conversion (agentic vs non)', value: '13% vs 10%' },
  // Source: Customer Zero — Sales deck
  { department: 'Sales', headlineMetric: 'New influenced pipeline', value: '$63M' },
  // Source: Customer Zero — Operations deck
  { department: 'Operations', headlineMetric: 'Partner onboarding review speed', value: '17x faster' },
  // Source: Customer Zero — Operations deck
  { department: 'Operations', headlineMetric: 'Response speed (partner support)', value: '64,800x faster (6 days → 8 sec)' },
  // Source: Customer Zero — Developer deck
  { department: 'Developer', headlineMetric: 'QA cycle time reduction', value: '67% (80 → 26 hours)' },
  // Source: Customer Zero — Developer deck
  { department: 'Developer', headlineMetric: 'Development effort reduction', value: '50%' },
  // Source: Customer Zero — Marketing deck
  { department: 'Marketing', headlineMetric: 'Social video creation time', value: '99% reduction' },
  // Source: Customer Zero — IT deck
  { department: 'IT', headlineMetric: 'Network issue interpretation time', value: '75% reduction' },
  // Source: Customer Zero — CSS deck
  { department: 'CSS', headlineMetric: 'Average handle time reduction', value: '12–16%' },
  // Source: Customer Zero — Legal deck
  { department: 'Legal', headlineMetric: 'Issue resolution speed', value: '2.97x faster' },
  // Source: Customer Zero — Responsible AI deck
  { department: 'Responsible AI', headlineMetric: 'SFI compliance', value: '100% resolved' },
  // Source: Customer Zero — Supply Chain deck
  { department: 'Supply Chain', headlineMetric: 'Agent app development speed', value: '6x faster' },
]
