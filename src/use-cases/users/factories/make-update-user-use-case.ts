import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UpdateUserUseCase } from '../update-user-use-case'

export function makeUpdateUserUseCase() {
  return new UpdateUserUseCase(inMemoryUsersRepository)
}
