'use client'

import { CustomCredit } from '@/types/global'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { CartDrawer, ShopCard } from './_components'

export default function Products() {
  const [credits, setCredits] = useState<CustomCredit[]>([])
  const { data: session } = useSession()
  const username = session?.token.user.name

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/credits', {
        method: 'GET',
      })
      const { data } = await response.json()
      setCredits(data)
    }
    fetchData()
  }, [])

  return (
    <main className="mx-auto my-10 flex w-1/2 flex-col gap-y-12">
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

      <div className="flex flex-wrap gap-8 py-4">
        {credits.map((credit, index) => {
          return <ShopCard credit={credit} key={index} />
        })}
      </div>
    </main>
  )
}
