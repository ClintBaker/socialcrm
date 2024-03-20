import { Router } from 'express'
import { signup } from '../modules/auth'

export const authRouter = Router()

authRouter.post('/signup', signup)

authRouter.post('/signin', (req, res, next) => {
  res.send('SIGNIN ENDPOINT HIT')
})
