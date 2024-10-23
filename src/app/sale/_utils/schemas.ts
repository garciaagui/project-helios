import { z } from 'zod'

const REQUIRED_ERROR = 'Preencha este campo'

export const productSaleSchema = z.object({
  unitPrice: z
    .number({ required_error: REQUIRED_ERROR })
    .min(0.1, { message: 'O valor unitário deve ser no mínimo 10 centavos' }),

  creditAmount: z
    .number({ required_error: REQUIRED_ERROR })
    .min(1, { message: 'A quantidade de créditos deve ser no mínimo 1 crédito' }),

  creditProofFile: z
    .instanceof(File, { message: 'Selecione um arquivo' })
    .refine((file) => file.size > 0, { message: 'Selecione um arquivo' })
    .refine((file) => file.type === 'application/pdf', { message: 'O arquivo deve ser um PDF' }),
})
