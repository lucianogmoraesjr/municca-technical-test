import { Document, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

import { DocumentsRepository } from '../documents-repository'

export class InMemoryDocumentsRepository implements DocumentsRepository {
  public documents: Document[] = []

  async fetchByUserId(userId: string): Promise<Document[]> {
    return this.documents.filter((document) => document.userId === userId)
  }

  async create({
    name,
    status,
    userId,
  }: Prisma.DocumentUncheckedCreateInput): Promise<Document> {
    const document: Document = {
      id: randomUUID(),
      name,
      status,
      userId,
    }

    this.documents.push(document)

    return document
  }
}
