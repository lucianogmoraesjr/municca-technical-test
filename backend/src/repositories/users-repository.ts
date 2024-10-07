import { Prisma, User } from '@prisma/client'

export type UserUpdateInput = Required<Prisma.UserCreateWithoutDocumentsInput>

export interface UsersRepository {
  getAll(): Promise<User[]>
  getById(id: string): Promise<User | null>
  getByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
  update(data: UserUpdateInput): Promise<User>
  delete(id: string): Promise<void>
}
