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

export const getOneConnection: RequestHandler = async (req: any, res, next) => {
  try {
    // get connection that matches param id and req.auth.id
    const connection = await prisma.connection.findUnique({
      where: {
        id: Number(req.params.connectionId),
        userId: req.auth.id,
      },
    })

    res.status(200).send({ connection })
  } catch (e) {
    res.status(500)
    next(new Error('unable to get connection'))
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

    res.status(201).send({ connection: newConnection })
  } catch (e) {
    console.dir(e)
    res.status(500)
    next(new Error('unable to create connection'))
  }
}

export const editConnection: RequestHandler = async (req: any, res, next) => {
  try {
    // find and edit connection where the userId matches req.auth.id & connection id matches params
    const editedConnection = await prisma.connection.update({
      where: {
        id: Number(req.params.connectionId),
        userId: req.auth.id,
      },
      data: {
        ...req.body,
      },
    })
    res.status(200).send({ connection: editedConnection })
  } catch (e) {
    console.log(e)
    res.status(500)
    next(new Error('Unable to edit connection'))
  }
}

export const deleteConnection: RequestHandler = async (req: any, res, next) => {
  try {
    // delete connection with correct id and userId
    const deletedConnection = await prisma.connection.delete({
      where: {
        id: Number(req.params.connectionId),
        userId: req.auth.id,
      },
    })
    res.status(200).send({ connection: deletedConnection })
  } catch (e) {
    console.log(e)
    res.status(500)
    next(new Error('unable to delete connection'))
  }
}
