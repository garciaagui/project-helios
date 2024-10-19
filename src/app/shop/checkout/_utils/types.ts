import { CustomCredit } from '@/types/global'
import { ReactNode } from 'react'

export type CheckoutCardProps = {
  credit: CustomCredit
}

export type StepperProps = {
  initialStep?: number
  steps: {
    content: ReactNode
  }[]
}

export type SummaryProps = {
  children: ReactNode
}
