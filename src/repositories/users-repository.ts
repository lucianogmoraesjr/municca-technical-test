import { User } from '@prisma/client'

export interface UsersRepository {
  getAll(): Promise<User[]>
}
