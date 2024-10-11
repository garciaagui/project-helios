import prisma from '@/lib/prisma'
import { NotFoundException } from '@/utils/exceptions'
import HttpException from '@/utils/exceptions/HttpException'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  let credits

  try {
    credits = await prisma.credit.findMany({
      include: {
        seller: { select: { name: true } },
      },
      where: {
        currentAmount: { gt: 0 },
      },
      orderBy: { id: 'asc' },
    })

    if (!credits) {
      throw new NotFoundException('Créditos não encontrados')
    } else {
      credits = credits.map((credit) => {
        return {
          ...credit,
          seller: credit.seller.name,
          purchaseAmount: 0,
        }
      })
    }

    return NextResponse.json(
      {
        message: 'Créditos encontrados',
        data: credits,
      },
      { status: 200 },
    )
  } catch (error: unknown) {
    if (error instanceof HttpException) {
      const { message, status } = error
      console.error(message, status)

      return NextResponse.json({ message }, { status })
    } else {
      const message = 'Erro inesperado ao buscar créditos'
      console.error(message, error)

      return NextResponse.json({ message }, { status: 500 })
    }
  }
}
