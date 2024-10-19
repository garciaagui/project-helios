import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useStepper } from '@/context/StepperProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import Summary from '../../Summary'
import { creditCardSchema } from './_utils/schemas'
import { FormData } from './_utils/types'

export default function Payment() {
  const { previousStep } = useStepper()

  const form = useForm<FormData>({
    resolver: zodResolver(creditCardSchema),
  })

  const { control, handleSubmit, setValue, getValues } = form

  const finishPurchase = () => {
    const values = getValues()
    console.log(values)
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 16)
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 ')
    setValue('cardNumber', formattedInput)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uppercasedName = e.target.value.toUpperCase()
    setValue('fullName', uppercasedName)
  }

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '').substring(0, 4) // Remove não numéricos e limita a 4 dígitos

    if (input.length >= 2) {
      // Pega os primeiros dois dígitos para validar o mês
      let month = parseInt(input.substring(0, 2))

      // Valida o mês entre 1 e 12
      if (month < 1) {
        month = 1
      } else if (month > 12) {
        month = 12
      }

      // Formata o mês para dois dígitos
      const formattedMonth = month.toString().padStart(2, '0')

      // Se o ano também já estiver presente, valida os dois últimos dígitos
      if (input.length >= 4) {
        let year = parseInt(input.substring(2))

        // Valida se o ano é maior ou igual a 24
        if (year < 24) {
          year = 24
        }

        // Atualiza o input com mês e ano validado
        input = `${formattedMonth}/${year}`
      } else {
        // Apenas formata o mês se o ano não estiver completo
        input = `${formattedMonth}/${input.substring(2)}`
      }
    }

    setValue('expirationDate', input)
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '') // Remove qualquer caractere que não seja numérico

    // Limita o número de dígitos a 4
    input = input.substring(0, 4)

    setValue('cvv', input) // Atualiza o campo CVV com o valor filtrado
  }

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '') // Remove caracteres não numéricos

    // Formata o CPF no padrão XXX.XXX.XXX-XX
    if (input.length > 3 && input.length <= 6) {
      input = `${input.substring(0, 3)}.${input.substring(3)}`
    } else if (input.length > 6 && input.length <= 9) {
      input = `${input.substring(0, 3)}.${input.substring(3, 6)}.${input.substring(6)}`
    } else if (input.length > 9) {
      input = `${input.substring(0, 3)}.${input.substring(3, 6)}.${input.substring(6, 9)}-${input.substring(9)}`
    }

    setValue('cpf', input) // Atualiza o campo CPF com o valor formatado
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(finishPurchase)}
          className="flex w-1/2 flex-col gap-4"
          id="payment-form"
        >
          <FormField
            control={control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número do cartão</FormLabel>
                <FormControl>
                  <Input type="text" {...field} maxLength={19} onChange={handleCardNumberChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input type="text" {...field} onChange={handleNameChange} />
                </FormControl>
                <FormDescription>Conforme aparece no cartão</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="expirationDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de vencimento</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    maxLength={5}
                    onChange={handleExpirationDateChange}
                  />
                </FormControl>
                <FormDescription>Mês / Ano</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código de segurança</FormLabel>
                <FormControl>
                  <Input type="text" {...field} maxLength={3} onChange={handleCvvChange} />
                </FormControl>
                <FormDescription>CVV</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF do titular do cartão</FormLabel>
                <FormControl>
                  <Input type="text" {...field} onChange={handleCpfChange} maxLength={14} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <Summary>
        <Button variant={'outline'} onClick={previousStep}>
          Voltar para resumo dos produtos
        </Button>
        <Button className="flex gap-1" type="submit" form="payment-form">
          <CheckCircledIcon />
          Confirmar compra
        </Button>
      </Summary>
    </>
  )
}
