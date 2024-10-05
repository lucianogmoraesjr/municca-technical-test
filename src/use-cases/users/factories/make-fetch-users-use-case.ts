import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchUsersUseCase } from '../fetch-users-use-case'

export function makeFetchUsersUseCase() {
  return new FetchUsersUseCase(inMemoryUsersRepository)
}
