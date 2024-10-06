import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthUseCase } from '../auth-use-case'

export function makeAuthUseCase() {
  return new AuthUseCase(inMemoryUsersRepository)
}
