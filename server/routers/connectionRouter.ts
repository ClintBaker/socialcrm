import { Router } from 'express'
import { login, signup } from '../modules/auth'

export const connectionRouter = Router()

connectionRouter.get('/', (req, res, next) => {
  res.status(200).send({ message: 'You are authenticated' })
})
