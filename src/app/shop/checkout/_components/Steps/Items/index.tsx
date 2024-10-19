'use client'

import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartProvider'
import { useStepper } from '@/context/StepperProvider'
import Link from 'next/link'
import Summary from '../../Summary'
import { CheckoutCard, EmptyCartDialog } from './_components'

export default function Items() {
  const { items } = useCart()
  const { nextStep } = useStepper()

  return (
    <>
      {items.length > 0 ? (
        <>
          <div className="flex w-1/3 flex-col justify-between">
            <ul className="flex flex-grow list-none flex-col gap-8">
              {items.map((item, index) => (
                <li key={index}>
                  <CheckoutCard credit={item} />
                </li>
              ))}
            </ul>
          </div>

          <Summary>
            <Button variant={'outline'}>
              <Link href={'/shop/products'}>Voltar para tela de produtos</Link>
            </Button>
            <Button onClick={nextStep}>Ir para pagamento</Button>
          </Summary>
        </>
      ) : (
        <EmptyCartDialog />
      )}
    </>
  )
}
