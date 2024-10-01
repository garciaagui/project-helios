import { LoginType } from './types'

export const requestLogin = async (data: LoginType) => {
  const body = JSON.stringify(data)

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message)
  }

  return response
}
