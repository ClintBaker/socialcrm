import { Router } from 'express'
import { login, signup } from '../modules/auth'
import {
  createConnection,
  editConnection,
  getConnections,
} from '../handlers/connection'

export const connectionRouter = Router()

connectionRouter.get('/', getConnections)
connectionRouter.post('/', createConnection)
connectionRouter.put('/:connectionId', editConnection)
