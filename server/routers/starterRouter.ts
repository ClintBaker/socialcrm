import { Router } from 'express'
import { createStarter, editStarter, getStarters } from '../handlers/starter'

export const starterRouter = Router({ mergeParams: true })

starterRouter.get('/', getStarters)
starterRouter.post('/', createStarter)
starterRouter.put('/:starterId', editStarter)
// starterRouter.get('/:connectionId/:starterId')
