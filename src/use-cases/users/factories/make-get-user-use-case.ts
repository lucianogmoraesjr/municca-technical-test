import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUserUseCase } from '../get-user-use-case'

export function makeGetUserUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  return new GetUserUseCase(usersRepository)
}
