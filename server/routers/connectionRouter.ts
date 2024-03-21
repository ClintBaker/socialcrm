import { Router } from 'express'
import { login, signup } from '../modules/auth'
import {
  createConnection,
  deleteConnection,
  editConnection,
  getConnections,
} from '../handlers/connection'

export const connectionRouter = Router()

connectionRouter.get('/', getConnections)
connectionRouter.post('/', createConnection)
connectionRouter.put('/:connectionId', editConnection)
connectionRouter.delete('/:connectionId', deleteConnection)
