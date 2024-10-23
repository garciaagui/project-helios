'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Layout from '@/components/ui/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="z-10 flex flex-col items-center space-y-8">
        {/* Banner */}
        <Card className="w-full rounded-lg bg-cyan-200/40 text-center shadow-lg">
          <CardHeader>
            <CardTitle className="mb-4 text-3xl font-bold text-gray-800">
              Conduzindo o futuro da energia sustentável
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-600">
              O setor de energias renováveis tem crescido devido à demanda por fontes sustentáveis e
              à necessidade de reduzir o impacto ambiental. Sistemas fotovoltaicos permitem a
              geração de energia em pequena e média escala, promovendo a comercialização de
              excedentes.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Nosso principal objetivo é a comercialização de créditos excedentes de energia solar,
              promovendo o acesso à energia limpa.
            </p>
          </CardContent>
        </Card>

        {/* Botões de Ação */}
        <div className="flex space-x-4">
          <Button size={'lg'} className="bg-[#F7D560] text-gray-800 hover:bg-[#f7c64d]">
            <Link href={'/shop/products'}>Quero Comprar</Link>
          </Button>
          <Button size={'lg'} className="bg-[#F7D560] text-gray-800 hover:bg-[#f7c64d]">
            <Link href={'/sale'}>Quero Vender</Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
