import { CustomCredit } from '@/types/global'

export const convertPriceToBRL = (price: number) => {
  const converted = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  // Replace invisible character with whitespace
  const formatted = converted.replace(/\s/g, ' ')

  return formatted
}

export const convertISODate = (date: Date) => {
  const reference = new Date(date)

  const day = String(reference.getUTCDate()).padStart(2, '0')
  const month = String(reference.getUTCMonth() + 1).padStart(2, '0')
  const year = reference.getUTCFullYear()

  return `${day}/${month}/${year}`
}

export const calculateTotalPrice = (items: CustomCredit[]) => {
  const totalPrice = items.reduce((total, item) => {
    return total + item.unitPrice * item.purchaseAmount
  }, 0)

  const formatted = convertPriceToBRL(totalPrice)

  return formatted
}
