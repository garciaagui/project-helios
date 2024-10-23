import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/shadcn'
import Image from 'next/image'
import { ReactNode } from 'react'
import backgroundImage from '../../../public/images/image-background.jpg'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { toast } = useToast()

  const toastProps = {
    title: 'Pagina ainda não implementada!',
    description: 'Páginas disponíveis: Compra e Venda',
    className: cn('top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'),
    duration: 2000,
  }

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
              <NavigationMenuLink
                href="#sobre"
                className="text-lg text-gray-700 hover:text-black"
                onClick={() => {
                  toast({ ...toastProps, variant: 'destructive' })
                }}
              >
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
              <NavigationMenuLink href="/sale" className="text-lg text-gray-700 hover:text-black">
                venda
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contato"
                className="text-lg text-gray-700 hover:text-black"
                onClick={() => {
                  toast({ ...toastProps, variant: 'destructive' })
                }}
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
