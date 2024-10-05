import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { DeleteUserUseCase } from '../delete-user-use-case'

export function makeDeleteUserUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  return new DeleteUserUseCase(usersRepository)
}
