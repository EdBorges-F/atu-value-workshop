import SplitLayout from '../components/layout/SplitLayout'
import { useWizardState } from '../hooks/useWizardState'
import StepCustomer from '../components/wizard/StepCustomer'
import StepCustomerZero from '../components/wizard/StepCustomerZero'
import StepChallenges from '../components/wizard/StepChallenges'
import StepReview from '../components/wizard/StepReview'
import StepValueStory from '../components/wizard/StepValueStory'

export default function WizardPage() {
  const wizard = useWizardState()

  const renderStep = () => {
    switch (wizard.step) {
      case 0: return <StepCustomer wizard={wizard} />
      case 1: return <StepCustomerZero wizard={wizard} />
      case 2: return <StepChallenges wizard={wizard} />
      case 3: return <StepReview wizard={wizard} />
      case 4: return <StepValueStory wizard={wizard} />
      default: return null
    }
  }

  return (
    <SplitLayout currentStep={wizard.step} ndaConfirmed={wizard.data.ndaConfirmed} onStepClick={wizard.goToStep}>
      <div key={wizard.step} className="animate-slideUp">
        {renderStep()}
      </div>
    </SplitLayout>
  )
}
