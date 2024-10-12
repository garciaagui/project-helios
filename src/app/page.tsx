'use client' // Essa diretiva define que este é um Client Component

import Layout from '@/components/ui/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './../components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <div className="z-10 flex flex-col items-center space-y-8">
        {/* Banner */}
        <Card className="w-full rounded-lg border-0 bg-cyan-200/45 text-center shadow-lg">
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
          <Button
            size={'lg'}
            className="bg-[#F7D560]/80 text-gray-800 hover:bg-[#f7c64d]"
            onClick={() => router.push('/shopping')}
          >
            Quero Comprar
          </Button>
          <Button size={'lg'} className="bg-[#F7D560]/80 text-gray-800 hover:bg-[#f7c64d]">
            Quero Vender
          </Button>
        </div>
      </div>
    </Layout>
  )
}
