import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/context/CartProvider'
import { useEffect, useState } from 'react'
import { calculateTotalPrice } from '../../_utils/functions'
import { CartActions, CartCard } from './_components/'

export default function CartDrawer() {
  const [totalPrice, setTotalPrice] = useState<string>('')
  const { items } = useCart()

  useEffect(() => {
    const price = calculateTotalPrice(items)
    setTotalPrice(price)
  }, [items])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Meu carrinho</Button>
      </SheetTrigger>

      <SheetContent className="flex h-full flex-col">
        <SheetHeader>
          <SheetTitle>Meu carrinho</SheetTitle>
          <SheetDescription>Aqui estão os itens adicionados</SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex-grow">
          {items.length > 0 ? (
            <div className="flex h-full flex-col justify-between">
              <ul className="flex flex-grow list-none flex-col gap-4">
                {items.map((item, index) => (
                  <CartCard credit={item} key={index} />
                ))}
              </ul>

              <CartActions totalPrice={totalPrice} />
            </div>
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
