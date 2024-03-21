import { Router } from 'express'
import {
  createStarter,
  deleteStarter,
  editStarter,
  getStarters,
} from '../handlers/starter'

export const starterRouter = Router({ mergeParams: true })

starterRouter.get('/', getStarters)
starterRouter.post('/', createStarter)
starterRouter.put('/:starterId', editStarter)
starterRouter.delete('/:starterId', deleteStarter)
// starterRouter.get('/:connectionId/:starterId')
