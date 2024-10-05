import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { CreateUserUseCase } from '../create-user-use-case'

export function makeCreateUserUseCase() {
  return new CreateUserUseCase(inMemoryUsersRepository)
}
