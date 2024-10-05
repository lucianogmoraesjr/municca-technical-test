import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUserUseCase } from '../get-user-use-case'

export function makeGetUserUseCase() {
  return new GetUserUseCase(inMemoryUsersRepository)
}
