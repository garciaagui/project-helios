import { z } from 'zod'
import { productSaleSchema } from './schemas'

export type FormData = z.infer<typeof productSaleSchema>
