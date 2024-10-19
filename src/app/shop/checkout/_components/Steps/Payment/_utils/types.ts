import { z } from 'zod'
import { creditCardSchema } from './schemas'

export type FormData = z.infer<typeof creditCardSchema>
