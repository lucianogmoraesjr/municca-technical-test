import { AppError } from '@/errors/app-error'
import { UsersRepository } from '@/repositories/users-repository'

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(userId: string) {
    const user = await this.usersRepository.getById(userId)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    return user
  }
}
