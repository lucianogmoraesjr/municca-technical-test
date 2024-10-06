import { Router } from 'express'
import { documentsRoutes } from './http/controllers/documents/routes'
import { AuthController } from './http/controllers/users/auth-controller'
import { usersRoutes } from './http/controllers/users/routes'

export const router = Router()

const authController = new AuthController()

router.post('/auth', authController.handle)

router.use('/users', usersRoutes)
router.use('/documents', documentsRoutes)
