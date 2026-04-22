import type { FrontierVisionData } from './types';

// Frontier Transformation Vision — core data
// Source: Frontier Transformation - Vision Conversation Deck.PDF
// Source: Frontier Transformation - Solutions Conversation Deck.PDF
// Source: Security CSA Conversation based on RSA 2026 narrative.PDF
// NOTE: Stats below are from PDF extraction and may need manual verification

export const FRONTIER_VISION: FrontierVisionData = {
  stats: {
    'agentic-adoption': '50% of organizations are currently using Agentic AI',
    'ai-investment': 'AI investment is accelerating across every industry',
    'copilot-platform': 'Microsoft 365 Copilot across apps and tools you use every day',
    'agent-365': 'Agent 365 for deploying AI agents to transform business processes',
    'fabric-iq': 'Fabric IQ provides real-time business context for intelligent agents',
    'foundry-iq': 'Foundry IQ powers custom AI solutions built on your data',
  },
  transformationArc: [
    { name: 'Enrich', description: 'Enhance existing workflows with AI copilots and intelligent automation' },
    { name: 'Reshape', description: 'Redesign business processes around AI-first principles' },
    { name: 'Reinvent', description: 'Create entirely new business models and capabilities powered by AI' },
    { name: 'Bend the Curve', description: 'Achieve exponential value through scaled AI transformation' },
  ],
  solutionsOverview: [
    'Work IQ — How your people work smarter with AI',
    'Fabric IQ — How your data powers intelligent decisions',
    'Foundry IQ — How your agents solve complex problems',
    'Microsoft IQ Platform — Unified intelligence across the organization',
    'Agent 365 — Transform business processes with AI agents',
    'Microsoft 365 Copilot — AI assistant across productivity apps',
    'Microsoft Copilot Studio — Build and deploy custom agents',
    'Microsoft Fabric — Unified analytics and data platform',
    'Azure AI Foundry — Build, deploy, and manage AI models',
    'Microsoft Defender — Security posture for the AI era',
  ],
  securityNarrative: 'As organizations accelerate AI adoption, security must evolve to protect AI agents, data pipelines, and model interactions. The Microsoft security approach covers agent observability, secure governance of AI workloads, data protection for AI training and inference, and threat defense across the AI stack.',
};
