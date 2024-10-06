import { hash } from 'bcryptjs'

import { AppError } from '@/errors/app-error'
import { UsersRepository } from '@/repositories/users-repository'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: CreateUserUseCaseRequest) {
    const emailAlreadyExists = await this.usersRepository.getByEmail(email)

    if (emailAlreadyExists) {
      throw new AppError('E-mail already exists', 400)
    }

    const passwordHash = await hash(password, 8)

    const user = await this.usersRepository.create({
      name,
      email,
      passwordHash,
    })

    return user
  }
}
