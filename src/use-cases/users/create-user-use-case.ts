import { AppError } from '@/errors/app-error'
import { UsersRepository } from '@/repositories/users-repository'

interface CreateUserUseCaseRequest {
  name: string
  email: string
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email }: CreateUserUseCaseRequest) {
    const emailAlreadyExists = await this.usersRepository.getByEmail(email)

    if (emailAlreadyExists) {
      throw new AppError('E-mail already exists', 400)
    }

    const user = await this.usersRepository.create({
      name,
      email,
    })

    return user
  }
}
