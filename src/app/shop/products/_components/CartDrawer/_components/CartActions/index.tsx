import { CartActionsProps } from '@/app/shop/products/_utils/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function CartActions({ totalPrice }: CartActionsProps) {
  const router = useRouter()

  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-3 px-4 py-3">
        <CardTitle className="text-lg">Total: {totalPrice}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-4 py-3">
        <Button
          variant="default"
          size="lg"
          className="text-md"
          onClick={() => router.push('/shop/checkout')}
        >
          Finalizar compra
        </Button>
      </CardContent>
    </Card>
  )
}
