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
import LoadingIcon from '@/components/ui/loading-icon'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/shadcn'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, SignInResponse } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from './_utils/schemas'
import { LoginType } from './_utils/types'

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { toast } = useToast()
  const toastProps = {
    title: 'Login bem-sucedido!',
    description: 'Você será redirecionado para a tela inicial',
    className: cn('top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'),
    duration: 2000,
  }

  const router = useRouter()
  const loginForm = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit, control } = loginForm

  const login = async (data: LoginType) => {
    setLoading(true)

    const response = (await signIn('credentials', {
      ...data,
      redirect: false,
    })) as SignInResponse

    const { ok, error } = response

    if (ok) {
      toast({ ...toastProps })
      setErrorMessage('')
      router.push('/')
    } else if (!ok && error) {
      setErrorMessage(error)
    }
    setLoading(false)
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
          {loading ? <LoadingIcon /> : 'Entrar'}
        </Button>

        {errorMessage.length ? <span className="text-destructive">{errorMessage}</span> : ''}
      </div>

      <div className="w-1/2 border-l-[1px] bg-zinc-900" />
    </main>
  )
}
