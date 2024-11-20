'use client'

import { NavigationMenu } from '@/components/navigation-menu'
import { CustomCredit } from '@/types/global'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { CartDrawer, ShopCard, SkeletonProducts } from './_components'

export default function Products() {
  const [credits, setCredits] = useState<CustomCredit[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { data: session, status } = useSession()
  const username = session?.token?.user?.name
  const userId = session?.token?.user?.id as string

  useEffect(() => {
    if (status === 'authenticated' && userId) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/credits/${userId}`, {
            method: 'GET',
          })

          const { data } = await response.json()
          setCredits(data)
        } catch (error) {
          console.error('Erro ao buscar créditos:', error)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [status, userId])

  if (loading || status === 'loading') {
    return <SkeletonProducts />
  }

  return (
    <>
      <NavigationMenu />
      <main className="mx-auto my-10 flex w-3/4 flex-col gap-y-12">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Olá, {username}
            </h2>
            <p className="[&:not(:first-child)] leading-7">
              Navegue pelas opções abaixo e faça sua compra 😃
            </p>
          </div>

          <CartDrawer />
        </div>

        <div className="flex flex-wrap gap-x-20 gap-y-8 py-4">
          {credits.map((credit, index) => {
            return <ShopCard credit={credit} key={index} />
          })}
        </div>
      </main>
    </>
  )
}
