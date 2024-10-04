import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  getAll(): Promise<User[]>
  getById(id: string): Promise<User | null>
  getByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
