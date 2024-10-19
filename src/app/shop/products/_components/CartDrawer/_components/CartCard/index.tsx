import { convertPriceToBRL } from '@/app/shop/products/_utils/functions'
import { CartCardProps } from '@/app/shop/products/_utils/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartProvider'
import { InfoCircledIcon, TrashIcon } from '@radix-ui/react-icons'

export default function CartCard({ credit }: CartCardProps) {
  const { removeItem, updatePurchaseAmount } = useCart()
  const { id, currentAmount, purchaseAmount, unitPrice } = credit

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseInt(e.target.value, 10) || 1
    const amount = Math.min(currentAmount, Math.max(1, inputAmount))
    updatePurchaseAmount(id, amount)
  }

  return (
    <Card>
      <CardHeader className="flex flex-col border-b-[1px] px-4 py-3">
        <div className="flex flex-row justify-between">
          <CardTitle className="text-lg">{convertPriceToBRL(unitPrice)} por kWh</CardTitle>
          <Button variant="destructive" size="sm" onClick={() => removeItem(credit)}>
            <TrashIcon width={16} height={16} />
          </Button>
        </div>
        <span className="text-sm">Código: #{id}</span>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <span>Quantidade:</span>
          <Input
            type="number"
            min={1}
            max={currentAmount}
            value={purchaseAmount}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <InfoCircledIcon />
          <span className="text-sm">{currentAmount} créditos disponíveis</span>
        </div>
      </CardContent>
    </Card>
  )
}
