import { User } from '@prisma/client'
import { makeUser } from 'test/factories/make-user'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [makeUser(), makeUser()]

  async getAll(): Promise<User[]> {
    return this.users
  }
}
