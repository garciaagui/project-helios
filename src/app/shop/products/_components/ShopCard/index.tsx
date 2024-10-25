import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '@/context/CartProvider'
import {
  AvatarIcon,
  CalendarIcon,
  Cross2Icon,
  InfoCircledIcon,
  LightningBoltIcon,
  PlusIcon,
} from '@radix-ui/react-icons'
import { convertISODate, convertPriceToBRL } from '../../../_utils/functions'
import { ShopCardProps } from '../../_utils/types'

export default function ShopCard({ credit }: ShopCardProps) {
  const { id, createdAt, currentAmount, seller, unitPrice } = credit
  const { addItem, items, removeItem } = useCart()

  const isOnCart = () => {
    return items.some((item) => item.id === id)
  }

  return (
    <Card className="w-64">
      <CardHeader className="flex flex-row items-center gap-3 border-b-[1px] p-4">
        <LightningBoltIcon width={30} height={30} />
        <div>
          <CardTitle className="text-lg">{convertPriceToBRL(unitPrice)} por kWh</CardTitle>
          <span className="text-sm">Código: #{id}</span>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <InfoCircledIcon />
          <span className="text-sm">{currentAmount} créditos disponíveis</span>
        </div>

        <div className="flex items-center gap-2">
          <AvatarIcon />
          <span className="text-sm">Vendedor: {seller}</span>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <CalendarIcon />
          <span className="text-sm">Postado: {convertISODate(createdAt)}</span>
        </div>

        {isOnCart() ? (
          <Button
            size={'lg'}
            className="flex items-center gap-1"
            onClick={() => removeItem(credit)}
            variant={'outline'}
          >
            <Cross2Icon />
            <span>Remover do carrinho</span>
          </Button>
        ) : (
          <Button size={'lg'} className="flex items-center gap-1" onClick={() => addItem(credit)}>
            <PlusIcon />
            <span>Adicionar ao carrinho</span>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
