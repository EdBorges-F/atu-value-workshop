const ALL_STEPS = [
  { label: 'Customer Profile', short: 'Profile', step: 0 },
  { label: '🔒 Customer Zero', short: 'CZ', step: 1, ndaOnly: true },
  { label: 'Challenges & Use Cases', short: 'Challenges', step: 2 },
  { label: 'Review', short: 'Review', step: 3 },
  { label: 'Value Story', short: 'Story', step: 4 },
]

interface ProgressDotsProps {
  currentStep: number
  ndaConfirmed?: boolean
  onStepClick?: (step: number) => void
}

export default function ProgressDots({ currentStep, ndaConfirmed, onStepClick }: ProgressDotsProps) {
  const visibleSteps = ALL_STEPS.filter((s) => !s.ndaOnly || ndaConfirmed)

  return (
    <nav className="flex flex-col gap-3 w-full" aria-label="Wizard progress">
      {visibleSteps.map((step, displayIdx) => {
        const isActive = step.step === currentStep
        const isCompleted = step.step < currentStep
        return (
          <button
            key={step.label}
            onClick={() => onStepClick?.(step.step)}
            disabled={step.step > currentStep}
            aria-current={isActive ? 'step' : undefined}
            aria-label={`Step ${displayIdx + 1}: ${step.label}`}
            aria-disabled={step.step > currentStep ? true : undefined}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200
              ${isActive ? 'bg-white/10 text-white' : ''}
              ${isCompleted ? 'text-white/80 hover:bg-white/5' : ''}
              ${!isActive && !isCompleted ? 'text-white/40 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span
              className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 transition-all
                ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/30' : ''}
                ${isCompleted ? 'bg-success text-white' : ''}
                ${!isActive && !isCompleted ? 'bg-white/10 text-white/40' : ''}
              `}
            >
              {isCompleted ? '✓' : displayIdx + 1}
            </span>
            <span className="text-sm font-medium">{step.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
