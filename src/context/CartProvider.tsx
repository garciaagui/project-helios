import { CustomCredit } from '@/types/global'
import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

type CartContextValues = {
  items: CustomCredit[]
  addItem: (item: CustomCredit) => void
  removeItem: (item: CustomCredit) => void
  updatePurchaseAmount: (id: number, amount: number) => void
}

export const CartContext = createContext<CartContextValues | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CustomCredit[]>([])

  const addItem = useCallback((item: CustomCredit) => {
    item.purchaseAmount = 1
    setItems((prevItems) => [...prevItems, item])
  }, [])

  const removeItem = useCallback(
    (item: CustomCredit) => {
      item.purchaseAmount = 0
      const filtered = items.filter(({ id }) => id !== item.id)
      setItems(filtered)
    },
    [items],
  )

  const updatePurchaseAmount = useCallback((id: number, amount: number) => {
    if (amount >= 1) {
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, purchaseAmount: amount } : item)),
      )
    }
  }, [])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updatePurchaseAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
