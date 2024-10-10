export const convertPriceToBRL = (price: number) => {
  const converted = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  // Replace invisible character with whitespace
  const formatted = converted.replace(/\s/g, ' ')

  return formatted
}

export function convertISODate(date: Date) {
  const reference = new Date(date)

  const day = String(reference.getUTCDate()).padStart(2, '0')
  const month = String(reference.getUTCMonth() + 1).padStart(2, '0')
  const year = reference.getUTCFullYear()

  return `${day}/${month}/${year}`
}
