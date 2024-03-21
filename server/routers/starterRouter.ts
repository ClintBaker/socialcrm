import { Router } from 'express'
import { createStarter, getStarters } from '../handlers/starter'

export const starterRouter = Router()

starterRouter.get('/:connectionId', getStarters)
starterRouter.post('/:connectionId', createStarter)
// starterRouter.get('/:connectionId/:starterId')
