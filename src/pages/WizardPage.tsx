import SplitLayout from '../components/layout/SplitLayout'
import { useWizardState } from '../hooks/useWizardState'
import StepCustomer from '../components/wizard/StepCustomer'
import StepChallenges from '../components/wizard/StepChallenges'
import StepReview from '../components/wizard/StepReview'
import StepValueStory from '../components/wizard/StepValueStory'
import FeedbackWidget from '../components/ui/FeedbackWidget'

export default function WizardPage() {
  const wizard = useWizardState()

  const renderStep = () => {
    switch (wizard.step) {
      case 0: return <StepCustomer wizard={wizard} />
      case 1: return <StepChallenges wizard={wizard} />
      case 2: return <StepReview wizard={wizard} />
      case 3: return <StepValueStory wizard={wizard} />
      default: return null
    }
  }

  return (
    <SplitLayout currentStep={wizard.step} onStepClick={wizard.goToStep}>
      <div key={wizard.step} className="animate-slideUp">
        {renderStep()}
      </div>
      <FeedbackWidget
        wizardStep={wizard.step}
        industry={wizard.data.industryId}
        challenges={wizard.data.selectedChallengeIds}
      />
    </SplitLayout>
  )
}
