import type { FrontierVisionData } from './types';

// Frontier Transformation Vision — core data
// Source: Frontier Transformation - Vision Conversation Deck.PDF
// Source: Frontier Transformation - Solutions Conversation Deck.PDF
// Source: Security CSA Conversation based on RSA 2026 narrative.PDF
// NOTE: Stats below are extracted from the Microsoft Frontier Transformation decks (March 2026)
// and IDC InfoBriefs sponsored by Microsoft. Verify citation IDs before external publication.

export const FRONTIER_VISION: FrontierVisionData = {
  stats: {
    'agentic-adoption': '36% of organizations are currently using Agentic AI and another 50% are in planning stages (Source: IDC InfoBrief sponsored by Microsoft, "What Every Company Can Learn From Frontier Firms Leading the AI Revolution," US53838325, November 2025)',
    'frontier-vs-laggards': 'Frontier Firms report 86.5% stronger business performance (top-line growth, brand differentiation, cost, efficiency, and CX) versus 22.0% for laggards (Source: IDC InfoBrief sponsored by Microsoft, US53838325, November 2025)',
    'fragmentation-cost': 'Structured AI acceleration delivers 3.7× the business value of fractured AI initiatives (Source: IDC InfoBrief sponsored by Microsoft, "2024 Business Opportunity of AI," US52699124, November 2024)',
    'infra-readiness-gap': '56% of executives believe their infrastructure isn\'t ready for AI workloads (Source: Frontier Transformation Vision Deck, 2026)',
    'skills-gap': '67% of leaders believe they lack AI skills and talent (Source: Frontier Transformation Vision Deck, 2026)',
    'security-signals': 'Microsoft Security processes 100 trillion daily signals to power threat intelligence across the AI stack (Source: Microsoft internal data, October 2025)',
    'copilot-platform': 'Microsoft 365 Copilot brings Work IQ, agentic capabilities, multi-model choice, and an agent ecosystem across the apps people use every day',
    'agent-365': 'Agent 365 is the control plane for agents — Observe, Govern, and Secure across Defender, Entra, and Purview',
    'microsoft-iq': 'Microsoft IQ unifies Work IQ (how employees work), Fabric IQ (state and actions of the business), and Foundry IQ (curated knowledge) to power agents with enterprise context',
    'foundry-models': 'Microsoft Foundry provides access to 11,000+ models, including OpenAI and Anthropic Claude, for custom agent development',
    'copilot-studio-connectors': 'Copilot Studio offers 1,400+ pre-built tools and connectors with publishing to 20+ channels including Microsoft 365, Teams, and web',
  },
  transformationArc: [
    { name: 'Enrich', description: 'Enrich employee experiences — integrate AI and agentic solutions into daily workflows so people spend less time on low-value tasks and more time on high-impact work' },
    { name: 'Reshape', description: 'Reshape business processes — embed AI directly into core workflows to automate, triage, and surface answers in real time at enterprise scale' },
    { name: 'Reinvent', description: 'Reinvent customer engagement — redesign products, services, and experiences around AI-first principles to deepen engagement and accelerate innovation' },
    { name: 'Bend the Curve', description: 'Bend the curve on innovation — build a centralized enterprise AI platform that embeds safety, compliance, and performance to scale innovation across the organization' },
  ],
  solutionsOverview: [
    'Microsoft IQ Platform — Work IQ + Fabric IQ + Foundry IQ unified intelligence layer that powers every agent',
    'Work IQ — Context on people, collaboration, and workflows ("how your employees work")',
    'Fabric IQ — Context on business entities, systems of record, and actions ("how your business operates")',
    'Foundry IQ — Context on policies, authoritative documents, and knowledge bases ("how your agents unlock knowledge")',
    'Microsoft 365 Copilot — AI in the flow of work across Word, Excel, PowerPoint, Outlook, and Teams with agentic capabilities and multi-model choice (OpenAI, Anthropic)',
    'Agent 365 — Control plane for agents: Observe, Govern, and Secure (Registry, Access Control, Visualization, Interoperability, Security)',
    'Copilot Studio — Low-code agent building with 1,400+ connectors and publishing to 20+ channels',
    'GitHub Copilot — AI-powered coding assistant for pro-developers building agents in IDE, CLI, and GitHub',
    'Microsoft Foundry — Pro-code agent platform with 11,000+ models, full lifecycle tooling, and cloud-to-edge deployment',
    'Microsoft Fabric + OneLake — Unified data platform across all clouds, on-prem, databases, apps, and files with zero ETL',
    'Windows 365 for Agents — Scale AI workloads with enterprise control on Windows or Linux',
    'Microsoft Security (Defender, Entra, Purview, Security Copilot) — End-to-end AI security powered by 100 trillion daily signals',
    'Microsoft 365 E7 — M365 E5 + Copilot + Agent 365 + Entra Suite: secure productive work, AI built for work, and the control plane for agents',
    'Microsoft Agent Factory — Scale AI with one plan, access deep expertise via Forward Deployed Engineers, and upskill org-wide for the agentic era',
  ],
  securityNarrative: 'As organizations accelerate AI adoption, the attack surface expands to include agents, AI data and orchestration, generative prompts and responses, plug-ins and functions, and source models — on top of traditional identity, endpoint, application, cloud, network, and data threat vectors. Microsoft\'s AI-first end-to-end security platform addresses this with Agent 365 as the agent control plane (Registry, Access Control, Visualization, Interoperability, Security), Microsoft Defender for threat detection and remediation, Microsoft Entra for agent identity and conditional access, and Microsoft Purview for data labels and compliance. Security Copilot, powered by 100 trillion daily Microsoft signals (October 2025), provides incident response and managed services across agents, apps, platforms, and infrastructure.',
};
