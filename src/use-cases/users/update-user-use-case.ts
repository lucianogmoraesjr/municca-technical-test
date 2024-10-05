import { AppError } from '@/errors/app-error'
import { UsersRepository } from '@/repositories/users-repository'

interface UpdateUserUseCaseRequest {
  id: string
  name: string
  email: string
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ id, email, name }: UpdateUserUseCaseRequest) {
    const userExists = await this.usersRepository.getById(id)

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    const updatedUser = await this.usersRepository.update({
      id,
      email,
      name,
    })

    return updatedUser
  }
}
