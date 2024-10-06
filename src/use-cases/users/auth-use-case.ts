import { AppError } from '@/errors/app-error'
import { UsersRepository } from '@/repositories/users-repository'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthUseCaseRequest {
  email: string
  password: string
}

export class AuthUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ email, password }: AuthUseCaseRequest) {
    const user = await this.usersRepository.getByEmail(email)

    if (!user) {
      throw new AppError('Invalid credentials', 401)
    }

    const passwordsMatches = await compare(password, user.passwordHash)

    if (!passwordsMatches) {
      throw new AppError('Invalid credentials', 401)
    }

    const accessToken = sign({ userId: user.id }, 'jwt-secret', {
      expiresIn: '1d',
    })

    return { accessToken }
  }
}
