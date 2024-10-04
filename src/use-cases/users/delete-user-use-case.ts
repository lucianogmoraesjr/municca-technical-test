import { AppError } from '@/errors/app-error'
import { UsersRepository } from '@/repositories/users-repository'

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(userId: string) {
    const userExists = await this.usersRepository.getById(userId)

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    await this.usersRepository.delete(userId)
  }
}
