import prisma from '../modules/db'
import type { RequestHandler } from 'express'

export const getStarters: RequestHandler = async (req: any, res, next) => {
  try {
    // validate the user owns the connection
    const connection = await prisma.connection.findUnique({
      where: {
        id: Number(req.params.connectionId),
        userId: req.auth.id,
      },
    })

    // if we can't find the connection, either there is no connection or the user doesn't own it
    if (!connection) {
      res.status(400)
      return next(new Error('unauthorized, or connection does not exist'))
    }
    // Getting all starters for a specific connection
    const starters = await prisma.starter.findMany({
      where: {
        connectionId: Number(req.params.connectionId),
      },
    })
    res.status(200).send({ starters })
  } catch (e) {
    res.status(500)
    return next(new Error('unable to get starters'))
  }
}

export const createStarter: RequestHandler = async (req: any, res, next) => {
  try {
    // validate user owns the connection
    const connection = await prisma.connection.findUnique({
      where: {
        id: Number(req.params.connectionId),
        userId: req.auth.id,
      },
    })

    // if we can't find the connection, either there is no connection or the user doesn't own it
    if (!connection) {
      res.status(400)
      return next(new Error('unauthorized, or connection does not exist'))
    }
    // create starter
    const newStarter = await prisma.starter.create({
      data: {
        ...req.body,
        connectionId: Number(req.params.connectionId),
      },
    })

    res.status(201).send({ newStarter })
  } catch (e) {
    res.status(500)
    return next(new Error('unable to create starter'))
  }
}
