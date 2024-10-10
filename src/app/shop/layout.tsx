'use client'

import { CartProvider } from '@/context/CartProvider'
import { ReactNode } from 'react'

type ShopLayoutProps = {
  children: ReactNode
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  return <CartProvider>{children}</CartProvider>
}
