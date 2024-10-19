'use client'

import { StepperProvider } from '@/context/StepperProvider'
import { Stepper, Steps } from './_components'

export default function Checkout() {
  return (
    <main className="mx-auto my-10 flex w-1/2 flex-col gap-y-12">
      <div className="flex flex-col">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Checkout
        </h2>
        <p className="[&:not(:first-child)] leading-7">
          Preencha as informações e finalize sua compra.
        </p>
      </div>

      <StepperProvider stepsNumber={2}>
        <Stepper
          steps={[
            {
              content: <Steps.Items />,
            },
            {
              content: <Steps.Payment />,
            },
          ]}
        />
      </StepperProvider>
    </main>
  )
}
