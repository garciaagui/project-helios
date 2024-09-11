'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from './_utils/schemas'
import { LoginType } from './_utils/types'

export default function Login() {
  const loginForm = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit, control } = loginForm

  const login = () => {
    console.log('test')
  }

  return (
    <main className="flex h-screen flex-row">
      <div className="flex w-1/2 flex-col items-center gap-8 px-20 py-48">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Seja bem-vindo(a)</h3>

        <Form {...loginForm}>
          <form
            onSubmit={handleSubmit(login)}
            className="flex w-1/2 flex-col gap-4"
            id="login-form"
          >
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu e-mail" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Sua senha" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button type="submit" className="w-1/2" form="login-form">
          Entrar
        </Button>
      </div>

      <div className="w-1/2 border-l-[1px] bg-zinc-900" />
    </main>
  )
}
