import { useState, useCallback, useEffect } from 'react'
import type { CompanySize, ReadinessTier } from '../data/types'

export interface WizardData {
  // Step 1: Customer Profile
  companyName: string
  industryId: string
  companySize: CompanySize | ''
  priorities: string
  // Smart Fill
  smartFillRaw: string
  confidence: Record<string, 'high' | 'medium' | 'low'>
  // CRM Contacts (from Smart Fill)
  crmContacts: CRMContact[]
  // Stakeholder assignments: pillarId → CRM contact assigned by AE in Step 4 (Exec Summary)
  pillarOwners: Record<string, CRMContact | null>
  // Step 2: Challenges & Use Cases
  selectedChallengeIds: string[]
  selectedUseCaseIds: string[]
  // Discovery Conversation notes (keyed by pillar ID)
  discoveryNotes: Record<string, string>
  // Readiness
  readinessAnswers: Record<string, number>
  readinessTier: ReadinessTier | ''
  // NDA / Customer Zero
  ndaConfirmed: boolean
  // CZ use cases the customer expressed interest in
  czLikedUseCaseIds: string[]
}

export interface CRMContact {
  name: string
  title: string
  email?: string
}

const INITIAL_DATA: WizardData = {
  companyName: '',
  industryId: '',
  companySize: '',
  priorities: '',
  smartFillRaw: '',
  confidence: {},
  crmContacts: [],
  pillarOwners: {},
  selectedChallengeIds: [],
  selectedUseCaseIds: [],
  discoveryNotes: {},
  readinessAnswers: {},
  readinessTier: '',
  ndaConfirmed: false,
  czLikedUseCaseIds: [],
}

const STORAGE_KEY = 'frontier-canvas-session'

function loadFromStorage(): { step: number; data: WizardData } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    // Check staleness (24 hours)
    if (Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return { step: parsed.step, data: parsed.data }
  } catch {
    return null
  }
}

function saveToStorage(step: number, data: WizardData) {
  // Strip PII before persisting — crmContacts and pillarOwners contain names/titles/emails
  const { crmContacts: _strip, pillarOwners: _stripOwners, ...safeData } = data
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data: { ...safeData, crmContacts: [], pillarOwners: {} }, timestamp: Date.now() }))
}

export function useWizardState() {
  const saved = loadFromStorage()
  const [step, setStep] = useState(saved?.step ?? 0)
  const [data, setData] = useState<WizardData>({ ...INITIAL_DATA, ...(saved?.data ?? {}) })

  const MAX_STEP = 4

  // Persist on every change
  useEffect(() => {
    saveToStorage(step, data)
  }, [step, data])

  const updateData = useCallback((partial: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...partial }))
  }, [])

  // Step 1 (Customer Zero) is conditional — skip when NDA not confirmed
  const resolveNext = useCallback((current: number, dir: 1 | -1, ndaOn: boolean): number => {
    const target = current + dir
    if (target === 1 && !ndaOn) return target + dir // skip CZ step
    return Math.max(0, Math.min(target, MAX_STEP))
  }, [])

  const nextStep = useCallback(() => {
    setStep((s) => resolveNext(s, 1, data.ndaConfirmed))
  }, [data.ndaConfirmed, resolveNext])

  const prevStep = useCallback(() => {
    setStep((s) => resolveNext(s, -1, data.ndaConfirmed))
  }, [data.ndaConfirmed, resolveNext])

  const goToStep = useCallback((s: number) => {
    if (s === 1 && !data.ndaConfirmed) return // can't navigate to CZ without NDA
    if (s >= 0 && s <= MAX_STEP) setStep(s)
  }, [data.ndaConfirmed])

  const reset = useCallback(() => {
    setStep(0)
    setData(INITIAL_DATA)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const canAdvance = useCallback(() => {
    switch (step) {
      case 0: return data.companyName.trim() !== '' && data.industryId !== ''
      case 1: return true // CZ inspiration — always can proceed
      case 2: return data.selectedChallengeIds.length > 0 && data.selectedUseCaseIds.length > 0
      case 3: return true
      case 4: return true
      default: return false
    }
  }, [step, data])

  return { step, data, updateData, nextStep, prevStep, goToStep, reset, canAdvance }
}
