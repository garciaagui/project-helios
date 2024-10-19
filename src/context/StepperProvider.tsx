import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

type StepperContextValues = {
  currentStep: number
  nextStep: () => void
  previousStep: () => void
  resetStep: () => void
  stepsNumber: number
}

type StepperProviderProps = {
  children: ReactNode
  initialStep?: number
  stepsNumber: number
}

export const StepperContext = createContext<StepperContextValues | undefined>(undefined)

export const StepperProvider = ({
  stepsNumber,
  initialStep = 0,
  children,
}: StepperProviderProps) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep)

  const previousStep = useCallback(() => {
    setCurrentStep((prevState) => Math.max(0, prevState - 1))
  }, [])

  const nextStep = useCallback(() => {
    setCurrentStep((prevState) => Math.min(stepsNumber - 1, prevState + 1))
  }, [stepsNumber])

  const resetStep = useCallback(() => {
    setCurrentStep(0)
  }, [])

  return (
    <StepperContext.Provider
      value={{ currentStep, nextStep, previousStep, resetStep, stepsNumber }}
    >
      {children}
    </StepperContext.Provider>
  )
}

export const useStepper = () => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider')
  }
  return context
}