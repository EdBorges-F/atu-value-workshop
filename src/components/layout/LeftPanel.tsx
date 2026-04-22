import ProgressDots from './ProgressDots'
import TrustFooter from './TrustFooter'

interface LeftPanelProps {
  currentStep: number
  onStepClick?: (step: number) => void
}

export default function LeftPanel({ currentStep, onStepClick }: LeftPanelProps) {
  return (
    <aside className="flex flex-col w-full lg:w-[24%] lg:max-w-[280px] lg:min-h-screen lg:sticky lg:top-0 bg-gradient-to-b from-dark-start to-dark-end p-4 lg:p-6 no-print">
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
        <ProgressDots currentStep={currentStep} onStepClick={onStepClick} />
      </div>

      {/* Trust Footer */}
      <TrustFooter />
    </aside>
  )
}
