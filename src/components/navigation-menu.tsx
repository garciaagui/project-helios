import {
  NavigationMenu as NM,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { ModeToggle } from './ui/mode-toggle'

export function NavigationMenu() {
  return (
    <header className="z-10 flex w-full items-center justify-between border px-20 py-4">
      <div className="flex gap-20">
        <span className="text-3xl font-extrabold text-primary">Helios</span>

        <NM className="flex items-center gap-10">
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Página Inicial</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/shop/products">Compra</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/sale">Venda</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NM>
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  )
}
