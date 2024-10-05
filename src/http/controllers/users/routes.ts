import { Router } from 'express'
import { CreateUserController } from './create-user-controller'
import { DeleteUserController } from './delete-user-controller'
import { FetchUsersController } from './fetch-users-controller'
import { GetUserController } from './get-user-controller'
import { UpdateUserController } from './update-user-controller'

const usersRoutes = Router()

const fetchUsersController = new FetchUsersController()
const createUserController = new CreateUserController()
const getUserController = new GetUserController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

usersRoutes.get('/', fetchUsersController.handle)
usersRoutes.get('/:userId', getUserController.handle)
usersRoutes.post('/', createUserController.handle)
usersRoutes.delete('/:userId', deleteUserController.handle)
usersRoutes.put('/:userId', updateUserController.handle)

export { usersRoutes }
