import { Router } from 'express'
import { CreateUserController } from './create-user-controller'
import { FetchUsersController } from './fetch-users-controller'
import { GetUserController } from './get-user-controller'

const usersRoutes = Router()

const fetchUsersController = new FetchUsersController()
const createUserController = new CreateUserController()
const getUserController = new GetUserController()

usersRoutes.get('/', fetchUsersController.handle)
usersRoutes.get('/:userId', getUserController.handle)
usersRoutes.post('/', createUserController.handle)

export { usersRoutes }
