const STEPS = [
  { label: 'Customer Profile', short: 'Profile' },
  { label: 'Challenges & Use Cases', short: 'Challenges' },
  { label: 'Review', short: 'Review' },
  { label: 'Value Story', short: 'Story' },
]

interface ProgressDotsProps {
  currentStep: number
  onStepClick?: (step: number) => void
}

export default function ProgressDots({ currentStep, onStepClick }: ProgressDotsProps) {
  return (
    <nav className="flex flex-col gap-3 w-full" aria-label="Wizard progress">
      {STEPS.map((step, idx) => {
        const isActive = idx === currentStep
        const isCompleted = idx < currentStep
        return (
          <button
            key={step.label}
            onClick={() => onStepClick?.(idx)}
            disabled={idx > currentStep}
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
              {isCompleted ? '✓' : idx + 1}
            </span>
            <span className="text-sm font-medium">{step.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
