import type { FunctionVision } from './types';
import { SHOW_CUSTOMER_ZERO } from './global-ai-evidence';

// Capability descriptions sourced from the "Frontier Transformation" function
// vision decks. Stats come from those decks (with citations preserved) and
// from the Microsoft Customer Zero stories highlighted in each deck.

const ALL_FUNCTIONS: FunctionVision[] = [
  {
    id: 'customer-service',
    name: 'Customer Service',
    description:
      'Reinvent service with AI agents and assistants that resolve customer issues across chat, voice, and avatar channels — cutting handle time, lifting first-call resolution, and freeing human agents for the complex cases that need them.',
    keyCapabilities: [
      'Self-service AI assistants (chat, voice, avatar) that deflect routine inquiries while preserving data privacy and security',
      'Real-time agent assist with summarization, response recommendations, and next-best-action — Microsoft support engineers report a 50% reduction in time spent on case resolution',
      'Automated case wrap-up and summarization — Microsoft cut post-call admin from 30–40 minutes to 15 minutes or less',
      'Customer Intent and Knowledge Management agents that mine cases, transcripts, and chats to keep self-service content current',
      'Reduced customer service operating expenses through AI-based automation (Source: Gartner)',
      'Higher first-call resolution and lower repeat-call rates by deploying Gen AI in the contact center (Source: McKinsey, Deloitte)',
      'Agent task coverage across the full service lifecycle: self-help, support assignment, issue diagnosis, problem resolution, continuous improvement, and post-sale follow-up & upsell (Source: Building Agents with Microsoft, L200)',
    ],
    relevantUseCases: [],
  },
  {
    id: 'finance',
    name: 'Finance',
    description:
      'Shift Finance from reporting the past to shaping the future — AI agents accelerate close, collections, planning, and compliance while strengthening controls and freeing FP&A teams for strategic work.',
    keyCapabilities: [
      'AI-driven financial research and FP&A copilots that summarize reports, earnings calls, and market signals — cutting analysis prep time roughly in half (Source: SAP)',
      'AI-powered collections and payments that reduce Days Sales Outstanding and speed up invoice processing (Source: Billtrust; EY)',
      'Automated contract and document inspection — Microsoft Finance reports 60% of contracts with errors flagged within 10 days and 50% reduction in contract review time',
      'Automated risk, compliance, and audit agents that monitor regulatory change and flag anomalies (Source: PWC, KPMG)',
      'Customer Zero outcomes at Microsoft Finance: 70% reduction in invoice processing time, 75% time savings in reporting and compliance, 99% forecast accuracy, 70% reduction in expense report volume',
      'Lower procurement operating costs through process automation and AI-assisted sourcing (Source: BCG)',
      'Agent task coverage across the finance value chain: quote-to-cash, record-to-report, tax & treasury, planning & analysis, predictive analysis, and procure-to-pay (Source: Building Agents with Microsoft, L200)',
    ],
    relevantUseCases: [],
  },
  {
    id: 'hr',
    name: 'HR',
    description:
      'Make HR a true business accelerator — AI assistants resolve employee questions instantly, recruiters source and screen at machine speed, and managers get personalized talent insights on demand.',
    keyCapabilities: [
      'Employee self-service "Ask HR" agents that resolve inquiries immediately versus traditional 24–48 hour resolution timelines (Source: Botable)',
      'AI-enabled candidate search and selection — recruiting AI agents have shrunk hiring timelines from 12 days to 4 days (Source: Forbes)',
      'Career development assistants that recommend learning paths, internal mobility, and personalized growth plans (Source: Talentguard)',
      'Reduction in cost-per-hire through AI-augmented recruiting (Source: Deloitte) and lower learning & development content costs (Source: BCG)',
      'Customer Zero outcomes at Microsoft HR: 82% reduction in time to create weekly headcount and recruiting reports, 49% email response rates with Copilot personalization, 13 FTE reallocated from HR Shared Services to higher-value work',
      'Talent and workforce planning agents that reason over org and skills data to model workforce scenarios',
      'Agent task coverage across the HR value chain: employee engagement, recruiting, HR admin & payroll, compensation & benefits, learning & development, talent management, advisory services, and HR strategy & planning (Source: Building Agents with Microsoft, L200)',
    ],
    relevantUseCases: [],
  },
  {
    id: 'it',
    name: 'IT',
    description:
      'Run IT as a frontier organization — AI agents resolve helpdesk tickets autonomously, modernize legacy code at scale, and continuously secure identities, devices, and apps against evolving threats.',
    keyCapabilities: [
      'AI Helpdesk agents that triage tickets, suggest fixes, and resolve routine issues — driving higher self-help success rates and a measurable reduction in IT support costs (Source: BCG)',
      'AI-driven assessment and remediation across identities, devices, clouds, and apps — automating up to half of threat detection and response (Source: Virtasant)',
      'AIOps that prevent outages and accelerate resolution — significant reduction in unplanned downtime and 50% faster issue resolution (Source: LogicMonitor)',
      'AI-enabled app modernization that analyzes legacy code, generates migration scripts, and automates code conversion (Source: BCG, Bain & Co.)',
      'Customer Zero outcomes at Microsoft Security: 90% faster incident summaries with Copilot for Security, enabling junior analysts to operate at senior level',
      'Employee Self-Service agent acting as the IT "front door" for HR, helpdesk, facilities, and expense scenarios in the flow of work',
      'Agent task coverage across IT: data management, software management & development, device management, IT operations, security operations, and change management & user adoption (Source: Building Agents with Microsoft, L200)',
    ],
    relevantUseCases: [],
  },
  {
    id: 'legal',
    name: 'Legal',
    description:
      'Turn Legal from a bottleneck into a velocity engine — AI agents draft and review contracts, monitor regulatory change, and put on-demand legal expertise in the hands of every employee.',
    keyCapabilities: [
      'AI-optimized contract management that drafts, redlines, and reviews — cutting contract review time from 3 hours to 45 minutes (Source: Wolters Kluwer)',
      'Automated compliance and risk management that scans regulations and alerts on changes (Source: Deloitte, PWC)',
      'On-demand "Ask Legal" advisory agents that summarize case law, draft memos, and surface prior guidance (Source: Thomson Reuters, Deloitte)',
      'Significant lawyer hours saved through AI-driven contract review automation (Source: Forrester/LawGeex); reduced reliance on outside counsel spend (Source: ACC)',
      'Customer Zero outcomes at Microsoft Legal: users find correct answers 2.97x faster than search; SharePoint AI agent achieves 100% success rate vs 83.3% for traditional search; 8,000 page views/month driving substantial cost savings',
      'AI reviews a 100-page due diligence document in a fraction of the 1–4 hours required manually (Source: Merlin)',
      'Agent task coverage across Legal: regulatory & compliance, contracting, litigation, risk management & compliance, consultation, and intellectual property (Source: Building Agents with Microsoft, L200)',
    ],
    relevantUseCases: [],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description:
      'Compress the campaign factory from weeks to days — AI agents research markets, generate on-brand content at scale, personalize in real time, and continuously optimize spend across channels.',
    keyCapabilities: [
      'Research agents that automate market analysis, customer feedback synthesis, and competitive intel to inform strategy (Source: McKinsey, BCG)',
      'AI-powered campaign execution that generates, launches, and optimizes campaigns — driving higher response rates through personalization and lower lead acquisition costs through predictive AI (Source: McKinsey, BCG)',
      'Content creation assistants that produce 20–30% faster content for marketers and meaningful savings in content production costs (Source: PwC; BCG)',
      'Customer Zero outcomes at Microsoft Marketing: 4.75x increase in digital chat engagement on Azure.com, 21.5% increase in conversion rates, campaign creation cycle compressed from 12 weeks to 3 weeks',
      'Faster media planning and budgeting cycles from AI automation (Source: BCG); cut in lead costs from AI-assisted marketing and sales (Source: BCG)',
      'Increase in customer engagement through AI predictive personalization (Source: IDC)',
      'Agent task coverage across Marketing: customer insights, content creation, campaign execution, and personalization (Source: Building Agents with Microsoft, L200)',
    ],
    relevantUseCases: [],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    description:
      'Make every developer a frontier developer — AI pair-programmers, modernization agents, and documentation assistants accelerate delivery, lift quality, and reduce the cost of legacy.',
    keyCapabilities: [
      'AI code completion, autofix, and code generation that boost throughput — Microsoft sees 88% of developers report higher task throughput across 42K monthly active Copilot users',
      'Streamlined legacy app modernization — AI-driven code refactoring has compressed migrations from 1.5 years to 6-week deployments (Source: Deloitte)',
      'Decrease in median code review turnaround time and developer-years saved on software upgrades (Source: Deloitte)',
      'Higher application quality through AI-driven bug reduction (Source: OutSystems & KPMG) and faster test automation (Source: Capgemini)',
      'Documentation and knowledge agents that explain code, generate API references, and accelerate onboarding (Source: McKinsey, KPMG)',
      'Developer experience gains: 66% of developers report a positive shift in feelings about work and 71% say AI helps them deliver more customer value (Microsoft Customer Zero)',
    ],
    relevantUseCases: [],
  },
];

// Filter out Customer Zero capability strings when flag is off
// Catches: "Customer Zero", "Microsoft <Department>:", and Microsoft-internal stats (but not "Building Agents with Microsoft" deck refs)
const isCZCapability = (c: string): boolean =>
  /Customer Zero/i.test(c) ||
  /— Microsoft\s+(support|cut|sees|Finance|HR|Security|Legal|Marketing)/i.test(c) ||
  /Microsoft sees \d/i.test(c)

export const FUNCTIONS: FunctionVision[] = SHOW_CUSTOMER_ZERO
  ? ALL_FUNCTIONS
  : ALL_FUNCTIONS.map(f => ({
      ...f,
      keyCapabilities: f.keyCapabilities.filter(c => !isCZCapability(c)),
    }));
