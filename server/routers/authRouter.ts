import { Router } from 'express'

export const authRouter = Router()

authRouter.post('/signup', (req, res, next) => {
  res.send('SIGNUP ENDPOINT HIT')
})

authRouter.post('/signin', (req, res, next) => {
  res.send('SIGNIN ENDPOINT HIT')
})
