import { Router } from 'express'
import { FetchUsersController } from './fetch-users-controller'

const usersRoutes = Router()

const fetchUsersController = new FetchUsersController()

usersRoutes.get('/', fetchUsersController.handle)

export { usersRoutes }
