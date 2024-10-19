import { calculateTotalPrice, calculateTotalPurchaseAmount } from '@/app/shop/_utils/functions'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/CartProvider'
import { DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { SummaryProps } from '../../_utils/types'

export default function Summary({ children }: SummaryProps) {
  const { items } = useCart()

  const [totalPrice, setTotalPrice] = useState<string>('')
  const [totalPurchaseAmount, setTotalPurchaseAmout] = useState<number>(0)

  useEffect(() => {
    const price = calculateTotalPrice(items)
    const totalAmount = calculateTotalPurchaseAmount(items)

    setTotalPrice(price)
    setTotalPurchaseAmout(totalAmount)
  }, [items])

  return (
    <div className="flex h-60 w-2/3 flex-col justify-between gap-4 rounded-xl border-[1px] p-4">
      <div className="flex flex-col gap-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Resumo da compra</h3>

        <Separator />

        <div className="mt-1">
          <div className="flex items-center gap-2">
            <DoubleArrowRightIcon />
            <p className="text-lg">Valor a pagar: {totalPrice}</p>
          </div>

          <div className="flex items-center gap-2">
            <DoubleArrowRightIcon />
            <p className="text-lg">Unidades: {totalPurchaseAmount}</p>
          </div>
        </div>

        <Separator />
      </div>

      <div className="flex gap-4 self-end">{children}</div>
    </div>
  )
}
