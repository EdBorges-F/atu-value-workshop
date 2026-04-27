import ProgressDots from './ProgressDots'
import TrustFooter from './TrustFooter'

interface LeftPanelProps {
  currentStep: number
  ndaConfirmed?: boolean
  onStepClick?: (step: number) => void
  onClearSession?: () => void
}

export default function LeftPanel({ currentStep, ndaConfirmed, onStepClick, onClearSession }: LeftPanelProps) {
  return (
    <aside className="flex flex-col w-full lg:w-72 lg:min-w-[240px] lg:min-h-screen lg:sticky lg:top-0 shrink-0 bg-gradient-to-b from-dark-start to-dark-end p-4 lg:p-6 no-print">
      {/* Brand */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white tracking-tight">
            Frontier Canvas
          </h1>
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent/20 text-accent font-medium">
            BETA v0.9
          </span>
        </div>
        <p className="text-sm text-white/50 mt-1">
          AI Value Stories for customer Industry conversations
        </p>
        <p className="text-[10px] text-white/25 mt-0.5">
          Americas SME&C Corporate · ATU
        </p>
      </div>

      {/* Progress */}
      <div className="flex-1">
        <ProgressDots currentStep={currentStep} ndaConfirmed={ndaConfirmed} onStepClick={onStepClick} />
      </div>

      {/* Clear Session + Trust Footer */}
      {onClearSession && (
        <button
          onClick={onClearSession}
          className="mx-4 mb-2 px-3 py-1.5 rounded-lg text-[10px] text-white/30 hover:text-white/60 hover:bg-white/5 transition-all text-left"
          title="Clear all session data from this device"
        >
          🗑️ Clear Session Data
        </button>
      )}
      <TrustFooter />
    </aside>
  )
}
