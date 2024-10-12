import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '../ui/button'

export default function CardShopping({ generatorName, availableCredits, price, pricePerKwh }) {
  return (
    <Card className="w-full rounded-lg border-0 bg-white/90 pt-6 text-center shadow-lg">
      <CardContent className="flex flex-col items-center">
        <Avatar className="mb-4 h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <h3 className="mb-4 text-center text-xl font-semibold text-gray-500">{generatorName}</h3>
        <div className="w-full text-left">
          <p className="mb-2 text-gray-500">
            Créditos disponíveis: <span className="font-bold">{availableCredits} kWh</span>
          </p>
          <p className="mb-4 text-gray-500">
            Preço:{' '}
            <span className="font-bold">
              R$ {price} ({pricePerKwh}/kWh)
            </span>
          </p>
        </div>
        <Button className="rounded-full bg-yellow-500/60 px-4 py-2 text-white hover:bg-yellow-600">
          Entrar em Contato
        </Button>
      </CardContent>
    </Card>
  )
}
