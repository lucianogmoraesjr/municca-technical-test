import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { makeUser } from 'test/factories/make-user'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [makeUser(), makeUser()]

  async getAll(): Promise<User[]> {
    return this.users
  }

  async getById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email)

    if (!user) {
      return null
    }

    return user
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
