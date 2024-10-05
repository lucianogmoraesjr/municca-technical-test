import { Router } from 'express'
import { CreateUserController } from './create-user-controller'
import { FetchUsersController } from './fetch-users-controller'

const usersRoutes = Router()

const fetchUsersController = new FetchUsersController()
const createUserController = new CreateUserController()

usersRoutes.get('/', fetchUsersController.handle)
usersRoutes.post('/', createUserController.handle)

export { usersRoutes }
