'use client'

import { NavigationMenu } from '@/components/navigation-menu'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SaleCompletedDialog } from './_components'
import { productSaleSchema } from './_utils/schemas'
import { FormData } from './_utils/types'

export default function Sale() {
  const [unitPrice, setUnitPrice] = useState('')

  const form = useForm<FormData>({
    resolver: zodResolver(productSaleSchema),
  })

  const { control, handleSubmit, setValue, formState } = form
  const { isSubmitSuccessful } = formState

  const formatToBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  const handleUnitPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    if (inputValue === '') {
      setUnitPrice(formatToBRL(0))
      setValue('unitPrice', 0)
      return
    }

    const numericValue = parseFloat(inputValue.replace(/[^0-9]/g, '')) / 100

    if (!isNaN(numericValue)) {
      setUnitPrice(formatToBRL(numericValue))
      setValue('unitPrice', numericValue)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File
    setValue('creditProofFile', file)
  }

  const finishSale = () => {
    console.log('Processo concluído!')
  }

  return (
    <>
      <NavigationMenu />
      <main className="mx-auto my-10 flex w-1/2 flex-col gap-y-12">
        <div className="flex flex-col">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Venda
          </h2>
          <p className="[&:not(:first-child)] leading-7">
            Preencha as informações e coloque seus créditos à venda.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(finishSale)}
            className="flex w-full flex-col gap-8"
            id="sale-form"
          >
            <FormField
              control={control}
              name="creditAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade de créditos</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => {
                        const inputValue = e.target.value
                        field.onChange(Number(inputValue))
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="unitPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor unitário (R$)</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={unitPrice}
                      onChange={handleUnitPriceChange}
                    />
                  </FormControl>
                  <FormDescription>Valor mínimo: R$ 0,10</FormDescription>
                  <FormDescription>
                    Nossa plataforma cobra uma taxa de 10% sobre o valor unitário
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="creditProofFile"
              render={() => (
                <FormItem>
                  <FormLabel>Arquivo</FormLabel>
                  <FormControl>
                    <Input type="file" onChange={handleFileChange} />
                  </FormControl>
                  <FormDescription>
                    Insira o documento que comprove os créditos que serão vendidos (formato PDF)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" onClick={() => finishSale()}>
              Finalizar
            </Button>
          </form>
        </Form>
        {isSubmitSuccessful ? <SaleCompletedDialog /> : ''}
      </main>
    </>
  )
}
