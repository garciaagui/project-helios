import { z } from 'zod'

const REQUIRED_ERROR = 'Preencha este campo'

export const creditCardSchema = z.object({
  cardNumber: z
    .string({ required_error: REQUIRED_ERROR })
    .min(19, { message: 'O número do cartão deve ter 16 dígitos' }),
  fullName: z
    .string({ required_error: REQUIRED_ERROR })
    .min(6, { message: 'O nome completo deve ter ao menos 6 dígitos' })
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome deve conter apenas letras e espaços' }),
  expirationDate: z
    .string({ required_error: REQUIRED_ERROR })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Formato inválido. Use MM/AA' }),
  cvv: z
    .string({ required_error: REQUIRED_ERROR })
    .length(3, { message: 'O CVV deve ter 3 dígitos' })
    .regex(/^\d{3}$/, { message: 'O CVV deve conter apenas dígitos' }),
  cpf: z
    .string({ required_error: REQUIRED_ERROR })
    .min(14, { message: 'O CPF deve ter 11 dígitos' }),
})
