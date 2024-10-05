import { faker } from '@faker-js/faker'
import { randomUUID } from 'node:crypto'

import { User } from '@prisma/client'

export function makeUser(override: Partial<User> = {}) {
  const user: User = {
    id: override.id ?? randomUUID(),
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    ...override,
  }

  return user
}
