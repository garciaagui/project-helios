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

export default function CartDrawer() {
  const { items } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Meu carrinho</Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Meu carrinho</SheetTitle>
          <SheetDescription>Aqui estão os itens adicionados</SheetDescription>
        </SheetHeader>

        <div>
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index}>
                <p>{item.id}</p>
              </div>
            ))
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
