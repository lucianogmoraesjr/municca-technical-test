import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchUsersUseCase } from '../fetch-users-use-case'

export function makeFetchUsersUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  return new FetchUsersUseCase(usersRepository)
}
