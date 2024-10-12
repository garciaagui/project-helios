import Layout from '@/components/ui/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CardShopping from '@/components/ui/card-shopping'

export default function Shopping() {
  // const handleContactClick = () => {
  //   alert('Entrando em contato com o gerador!')
  // }
  return (
    <Layout>
      <Card className="w-full rounded-lg border-0 bg-cyan-200/45 text-center shadow-lg">
        <CardHeader>
          <CardTitle className="mb-4 text-3xl font-bold text-gray-800">
            Ofertas disponíveis
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-10">
          <CardShopping
            generatorName="Gerador 1"
            availableCredits={150}
            price={67.5}
            pricePerKwh={0.45}
            // onContactClick={handleContactClick}
          />
          <CardShopping
            generatorName="Gerador 1"
            availableCredits={150}
            price={67.5}
            pricePerKwh={0.45}
            // onContactClick={handleContactClick}
          />
          <CardShopping
            generatorName="Gerador 1"
            availableCredits={150}
            price={67.5}
            pricePerKwh={0.45}
            // onContactClick={handleContactClick}
          />
        </CardContent>
      </Card>
    </Layout>
  )
}
