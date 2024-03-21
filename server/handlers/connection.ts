import prisma from '../modules/db'
import type { RequestHandler } from 'express'

export const getConnections: RequestHandler = async (req: any, res, next) => {
  try {
    // query connections that contain userId
    const connections = await prisma.connection.findMany({
      where: {
        userId: req.auth.id,
      },
    })
    res.status(200).send(connections)
  } catch (e) {
    res.status(500)
    next(new Error('unable to get connections'))
  }
}

export const createConnection: RequestHandler = async (req: any, res, next) => {
  try {
    // create a connection with req.body and attach user id from auth.id
    const newConnection = await prisma.connection.create({
      data: {
        ...req.body,
        userId: req.auth.id,
      },
    })

    console.log(newConnection)
    res.status(201).send({ connection: newConnection })
  } catch (e) {
    console.dir(e)
    res.status(500)
    next(new Error('unable to create connection'))
  }
}
