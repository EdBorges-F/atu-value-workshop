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
  // Step 2: Challenges & Use Cases
  selectedChallengeIds: string[]
  selectedUseCaseIds: string[]
  // Readiness
  readinessAnswers: Record<string, number>
  readinessTier: ReadinessTier | ''
  // NDA / Customer Zero
  ndaConfirmed: boolean
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
  selectedChallengeIds: [],
  selectedUseCaseIds: [],
  readinessAnswers: {},
  readinessTier: '',
  ndaConfirmed: false,
}

const STORAGE_KEY = 'frontier-canvas-session'

function loadFromStorage(): { step: number; data: WizardData } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    // Check staleness (7 days)
    if (Date.now() - parsed.timestamp > 7 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return { step: parsed.step, data: parsed.data }
  } catch {
    return null
  }
}

function saveToStorage(step: number, data: WizardData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data, timestamp: Date.now() }))
}

export function useWizardState() {
  const saved = loadFromStorage()
  const [step, setStep] = useState(saved?.step ?? 0)
  const [data, setData] = useState<WizardData>(saved?.data ?? INITIAL_DATA)

  // Persist on every change
  useEffect(() => {
    saveToStorage(step, data)
  }, [step, data])

  const updateData = useCallback((partial: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...partial }))
  }, [])

  const nextStep = useCallback(() => {
    setStep((s) => Math.min(s + 1, 3))
  }, [])

  const prevStep = useCallback(() => {
    setStep((s) => Math.max(s - 1, 0))
  }, [])

  const goToStep = useCallback((s: number) => {
    if (s >= 0 && s <= 3) setStep(s)
  }, [])

  const reset = useCallback(() => {
    setStep(0)
    setData(INITIAL_DATA)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const canAdvance = useCallback(() => {
    switch (step) {
      case 0: return data.companyName.trim() !== '' && data.industryId !== ''
      case 1: return data.selectedChallengeIds.length > 0 && data.selectedUseCaseIds.length > 0
      case 2: return true
      case 3: return true
      default: return false
    }
  }, [step, data])

  return { step, data, updateData, nextStep, prevStep, goToStep, reset, canAdvance }
}
