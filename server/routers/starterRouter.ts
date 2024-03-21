import { Router } from 'express'
import { createStarter, getStarters } from '../handlers/starter'

export const starterRouter = Router()

starterRouter.get('/:connectionId/starters', getStarters)
starterRouter.post('/:connectionId', createStarter)
// starterRouter.get('/:connectionId/:starterId')
