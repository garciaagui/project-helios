import { CustomCredit } from '@/types/global'
import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

type CartContextValues = {
  items: CustomCredit[]
  addItem: (item: CustomCredit) => void
  removeItem: (item: CustomCredit) => void
}

export const CartContext = createContext<CartContextValues | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CustomCredit[]>([])

  const addItem = useCallback((item: CustomCredit) => {
    setItems((prevItems) => [...prevItems, item])
  }, [])

  const removeItem = useCallback(
    (item: CustomCredit) => {
      const filtered = items.filter(({ id }) => id !== item.id)
      setItems(filtered)
    },
    [items],
  )

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
