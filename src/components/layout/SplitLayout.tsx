import type { ReactNode } from 'react'
import LeftPanel from './LeftPanel'

const TOTAL_STEPS = 5
const NDA_STEP_COUNT = 1

interface SplitLayoutProps {
  currentStep: number
  ndaConfirmed?: boolean
  onStepClick?: (step: number) => void
  onClearSession?: () => void
  children: ReactNode
}

export default function SplitLayout({ currentStep, ndaConfirmed, onStepClick, onClearSession, children }: SplitLayoutProps) {
  const visibleTotal = ndaConfirmed ? TOTAL_STEPS : TOTAL_STEPS - NDA_STEP_COUNT
  // Map currentStep (0-4) to display index accounting for hidden NDA step
  const displayStep = !ndaConfirmed && currentStep > 0 ? currentStep : currentStep + 1
  const clampedDisplay = Math.min(displayStep, visibleTotal)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile header — visible only on small screens */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 bg-gradient-to-r from-dark-start to-dark-end text-white no-print">
        <span className="text-sm font-bold tracking-tight">Frontier Canvas</span>
        <span className="text-xs text-white/60">Step {clampedDisplay} of {visibleTotal}</span>
        {onClearSession && (
          <button
            onClick={onClearSession}
            className="text-[10px] text-white/40 hover:text-white/70 transition-colors"
          >
            🗑️ Clear
          </button>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex shrink-0">
        <LeftPanel currentStep={currentStep} ndaConfirmed={ndaConfirmed} onStepClick={onStepClick} onClearSession={onClearSession} />
      </div>

      <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-surface-alt">
        {children}
      </main>
    </div>
  )
}
