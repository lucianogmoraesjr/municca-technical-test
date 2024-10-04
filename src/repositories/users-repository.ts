import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  getAll(): Promise<User[]>
  create(data: Prisma.UserCreateInput): Promise<User>
}
