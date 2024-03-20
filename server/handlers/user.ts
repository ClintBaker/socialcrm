import prisma from '../modules/db'
import type { RequestHandler } from 'express'

export const createUser = async () => {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })

  //   do something
}

export const getUsers = async () => {
  const users = await prisma.user.findMany()
  console.log(users)
}

export const nested = async () => {
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      connections: {
        create: {
          name: 'Bill',
        },
      },
    },
  })

  console.log(user)
}

export const userWithConnections = async () => {
  const user = await prisma.user.findMany({
    include: {
      connections: true,
    },
  })
  console.dir(user, { depth: null })
}

userWithConnections()
