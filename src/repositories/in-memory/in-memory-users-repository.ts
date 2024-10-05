import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { makeUser } from 'test/factories/make-user'
import { UsersRepository, UserUpdateInput } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [
    {
      id: '4a6fd64d-d50e-4f53-b0c3-a9859d71e417',
      email: 'john@mail.com',
      name: 'John Doe',
    },
    makeUser(),
  ]

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
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
    }

    this.users.push(user)

    return user
  }

  async update({ id, email, name }: UserUpdateInput): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id)

    const updatedUser: User = {
      id,
      email,
      name,
    }

    this.users[userIndex] = updatedUser

    return updatedUser
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id)

    this.users.splice(userIndex, 1)
  }
}
