import { Router } from 'express'
import { documentsRoutes } from './http/controllers/documents/routes'
import { usersRoutes } from './http/controllers/users/routes'

export const router = Router()

router.use('/users', usersRoutes)
router.use('/documents', documentsRoutes)
