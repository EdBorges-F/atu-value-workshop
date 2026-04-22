import type { ReadinessQuestion } from './types';

// AI Readiness Quick Check — 4 questions from PLAN.md spec
// Scoring: 0/1/2 per answer → Ready (6-8), Developing (3-5), Early Stage (0-2)

export const READINESS_QUESTIONS: ReadinessQuestion[] = [
  {
    id: 'cloud-data',
    question: 'Does your organization have a cloud data platform?',
    options: [
      { label: 'Yes — cloud-native or fully migrated', score: 2 },
      { label: 'Partial — hybrid or in progress', score: 1 },
      { label: 'No — primarily on-premises', score: 0 },
    ],
  },
  {
    id: 'it-resources',
    question: 'What IT resources are available for AI initiatives?',
    options: [
      { label: 'Dedicated AI/ML team', score: 2 },
      { label: 'Shared IT resources', score: 1 },
      { label: 'None identified yet', score: 0 },
    ],
  },
  {
    id: 'ai-experience',
    question: 'What is your experience with AI/ML projects?',
    options: [
      { label: 'Production AI workloads', score: 2 },
      { label: 'Pilot or proof-of-concept', score: 1 },
      { label: 'No prior AI projects', score: 0 },
    ],
  },
  {
    id: 'exec-sponsorship',
    question: 'Is there executive sponsorship for AI transformation?',
    options: [
      { label: 'Strong — C-suite champion identified', score: 2 },
      { label: 'Emerging — interest but no formal sponsor', score: 1 },
      { label: 'Unknown — not yet discussed at leadership level', score: 0 },
    ],
  },
];