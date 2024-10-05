import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { DeleteUserUseCase } from '../delete-user-use-case'

export function makeDeleteUserUseCase() {
  return new DeleteUserUseCase(inMemoryUsersRepository)
}
