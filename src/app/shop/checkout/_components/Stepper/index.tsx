import { useStepper } from '@/context/StepperProvider'
import { StepperProps } from '../../_utils/types'

export function Stepper({ steps }: StepperProps) {
  const { currentStep } = useStepper()

  return <div className="flex h-full gap-8">{steps[currentStep].content}</div>
}
