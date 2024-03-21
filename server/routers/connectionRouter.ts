import { Router } from 'express'
import { login, signup } from '../modules/auth'
import { createConnection, getConnections } from '../handlers/connection'

export const connectionRouter = Router()

connectionRouter.get('/', getConnections)
connectionRouter.post('/', createConnection)
