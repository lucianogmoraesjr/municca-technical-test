import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UpdateUserUseCase } from '../update-user-use-case'

export function makeUpdateUserUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  return new UpdateUserUseCase(usersRepository)
}
