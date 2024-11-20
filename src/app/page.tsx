'use client'

import { NavigationMenu } from '@/components/navigation-menu'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <div className="z-10 flex flex-col items-center space-y-8">
        <Card className="mt-20 w-1/2 rounded-lg bg-secondary text-center shadow-lg">
          <CardHeader>
            <CardTitle className="mb-4 text-3xl font-bold">
              Conduzindo o futuro da energia sustentável
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              O setor de energias renováveis tem crescido devido à demanda por fontes sustentáveis e
              à necessidade de reduzir o impacto ambiental. Sistemas fotovoltaicos permitem a
              geração de energia em pequena e média escala, promovendo a comercialização de
              excedentes.
            </p>
            <p className="mt-4 text-lg">
              Nosso principal objetivo é a comercialização de créditos excedentes de energia solar,
              promovendo o acesso à energia limpa.
            </p>
          </CardContent>
        </Card>

        <div className="flex space-x-4">
          <Button size={'lg'}>
            <Link href={'/shop/products'}>Quero comprar</Link>
          </Button>
          <Button size={'lg'}>
            <Link href={'/sale'}>Quero vender</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
