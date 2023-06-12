import { prisma } from '@/pages/lib/prisma'
import { setCookie } from 'nookies'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const userExist = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExist) {
    return res.status(400).json({
      message: 'Username already exist!',
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({ res }, '@ignite-call:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return res.status(201).json(user)
}
