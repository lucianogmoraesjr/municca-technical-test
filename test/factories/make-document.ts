import { faker } from '@faker-js/faker'
import { Document } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export function makeDocument(override: Partial<Document> = {}, id?: string) {
  const document: Document = {
    id: id ?? randomUUID(),
    name: faker.system.fileName(),
    status: 'PENDING',
    userId: faker.string.uuid(),
    ...override,
  }

  return document
}
