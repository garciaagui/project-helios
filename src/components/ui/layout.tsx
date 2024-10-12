'use client'
import backgroundImage from '../../../public/images/image-background.jpg'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children }) {
  const [selectedItem, setSelectedItem] = useState('')

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 -z-10 bg-white/60" />

      <div className="z-10 flex w-full items-center justify-between px-20 py-4">
        <div className="text-3xl font-bold text-gray-900">Helios</div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#sobre"
                className={`text-lg text-gray-700 hover:text-black ${selectedItem === 'sobre' ? 'border-b-2 border-black' : ''}`}
                onClick={() => handleItemClick('sobre')}
              >
                sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shopping" passHref legacyBehavior>
                <NavigationMenuLink
                  className={`text-lg text-gray-700 hover:text-black ${selectedItem === 'compra' ? 'border-b-2 border-black' : ''}`}
                  onClick={() => handleItemClick('compra')}
                >
                  compra
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#venda"
                className={`text-lg text-gray-700 hover:text-black ${selectedItem === 'venda' ? 'border-b-2 border-black' : ''}`}
                onClick={() => handleItemClick('venda')}
              >
                venda
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contato"
                className={`text-lg text-gray-700 hover:text-black ${selectedItem === 'contato' ? 'border-b-2 border-black' : ''}`}
                onClick={() => handleItemClick('contato')}
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
