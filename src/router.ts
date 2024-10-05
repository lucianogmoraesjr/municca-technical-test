import { Router } from 'express'
import { usersRoutes } from './http/controllers/users/routes'

export const router = Router()

router.use('/users', usersRoutes)
