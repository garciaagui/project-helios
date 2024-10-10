import { Credit } from '@prisma/client'

export type CustomCredit = {
  seller: string
} & Credit
