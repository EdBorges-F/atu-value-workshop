import type { ReactNode } from 'react'
import LeftPanel from './LeftPanel'

interface SplitLayoutProps {
  currentStep: number
  ndaConfirmed?: boolean
  onStepClick?: (step: number) => void
  onClearSession?: () => void
  children: ReactNode
}

export default function SplitLayout({ currentStep, ndaConfirmed, onStepClick, onClearSession, children }: SplitLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel currentStep={currentStep} ndaConfirmed={ndaConfirmed} onStepClick={onStepClick} onClearSession={onClearSession} />
      <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-surface-alt">
        {children}
      </main>
    </div>
  )
}
