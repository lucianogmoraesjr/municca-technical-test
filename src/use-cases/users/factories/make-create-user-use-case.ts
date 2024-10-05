import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { CreateUserUseCase } from '../create-user-use-case'

export function makeCreateUserUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  return new CreateUserUseCase(usersRepository)
}
