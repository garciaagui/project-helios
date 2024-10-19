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
import { PurchaseCompletedDialog } from './_components'
import { formatCardNumber, formatCpf, formatCvv, formatExpirationDate } from './_utils/functions'
import { creditCardSchema } from './_utils/schemas'
import { FormData } from './_utils/types'

export default function Payment() {
  const { previousStep } = useStepper()

  const form = useForm<FormData>({
    resolver: zodResolver(creditCardSchema),
  })

  const { control, handleSubmit, setValue, getValues, formState } = form
  const { isSubmitSuccessful } = formState

  const finishPurchase = () => {
    const values = getValues()
    console.log(values)
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const formatted = formatCardNumber(input)

    setValue('cardNumber', formatted)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uppercasedName = e.target.value.toUpperCase()
    setValue('fullName', uppercasedName)
  }

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const formatted = formatExpirationDate(input)

    setValue('expirationDate', formatted)
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const formatted = formatCvv(input)

    setValue('cvv', formatted)
  }

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const formatted = formatCpf(input)

    setValue('cpf', formatted)
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
      {isSubmitSuccessful ? <PurchaseCompletedDialog /> : ''}
    </>
  )
}
