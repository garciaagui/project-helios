import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

type Credentials = {
  email: string
  password: string
}

type User = {
  id: string
  name: string
  email: string
}

export const requestLogin = async (data: Credentials) => {
  const body = JSON.stringify(data)

  const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })

  return response
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as Credentials

        try {
          const response = await requestLogin({ email, password })

          if (!response.ok) {
            const errorData = await response.json()
            console.log(`Console log 1: ${errorData.message}`)
            throw new Error(errorData.message)
          } else {
            const result = await response.json()
            return {
              ...result.data,
            } as User
          }
        } catch (error) {
          const err = error as Error
          throw new Error(err.message)
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      const sessionCustomData = {
        token: { ...token },
        expires: session.expires,
      }

      return sessionCustomData
    },
  },
}
