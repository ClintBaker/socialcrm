import { Router } from 'express'
import { login, signup } from '../modules/auth'

export const authRouter = Router()

authRouter.post('/signup', signup)
authRouter.post('/login', login)
