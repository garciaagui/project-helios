export const formatCardNumber = (input: string): string => {
  const value = input.replace(/\D/g, '').substring(0, 16)
  const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ')

  return formatted
}

const sanitizeInput = (input: string): string => {
  return input.replace(/\D/g, '').substring(0, 4)
}

const formatMonth = (input: string): string => {
  let month = parseInt(input.substring(0, 2))
  // Valida o mês entre 1 e 12
  if (month < 1) {
    month = 1
  } else if (month > 12) {
    month = 12
  }
  // Formata o mês para dois dígitos
  return month.toString().padStart(2, '0')
}

const validateYear = (year: number): number => {
  // Limite mínimo do ano é 24
  return year < 24 ? 24 : year
}

export const formatExpirationDate = (input: string): string => {
  const sanitizedInput = sanitizeInput(input)
  let formatted = sanitizedInput

  if (sanitizedInput.length >= 2) {
    const formattedMonth = formatMonth(sanitizedInput)

    if (sanitizedInput.length >= 4) {
      let year = parseInt(sanitizedInput.substring(2))
      year = validateYear(year)
      formatted = `${formattedMonth}/${year}`
    } else {
      formatted = `${formattedMonth}/${sanitizedInput.substring(2)}`
    }
  }

  return formatted
}

export const formatCvv = (input: string): string => {
  // Remove qualquer caractere que não seja numérico
  let formatted = input.replace(/\D/g, '')

  // Limita o número de dígitos a 4
  formatted = formatted.substring(0, 4)

  return formatted
}

export const formatCpf = (input: string): string => {
  // Remove caracteres não numéricos
  let formatted = input.replace(/\D/g, '')

  // Formata o CPF no padrão XXX.XXX.XXX-XX
  if (formatted.length > 3 && formatted.length <= 6) {
    formatted = `${formatted.substring(0, 3)}.${formatted.substring(3)}`
  } else if (formatted.length > 6 && formatted.length <= 9) {
    formatted = `${formatted.substring(0, 3)}.${formatted.substring(3, 6)}.${formatted.substring(6)}`
  } else if (formatted.length > 9) {
    formatted = `${formatted.substring(0, 3)}.${formatted.substring(3, 6)}.${formatted.substring(6, 9)}-${formatted.substring(9)}`
  }

  return formatted
}
