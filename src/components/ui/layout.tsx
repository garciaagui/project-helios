import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import { ReactNode } from 'react'
import backgroundImage from '../../../public/images/image-background.jpg'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 -z-10 opacity-35">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* NavigationMenu */}
      <div className="z-10 flex w-full items-center justify-between px-20 py-4">
        <div className="text-3xl font-bold text-gray-900">Helios</div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="#sobre" className="text-lg text-gray-700 hover:text-black">
                sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/shop/products"
                className="text-lg text-gray-700 hover:text-black"
              >
                compra
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#venda" className="text-lg text-gray-700 hover:text-black">
                venda
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contato"
                className="text-lg text-gray-700 hover:text-black"
              >
                contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>USUARIO</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex w-full flex-1 items-center justify-center p-20">{children}</div>
    </div>
  )
}
