import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { makeUser } from 'test/factories/make-user'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [makeUser(), makeUser()]

  async getAll(): Promise<User[]> {
    return this.users
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
    }

    this.users.push(user)

    return user
  }
}
