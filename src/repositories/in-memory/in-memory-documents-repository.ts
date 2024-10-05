import { Document, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

import {
  DeleteByUserIdInput,
  DocumentsRepository,
  GetByIdAndUserIdInput,
} from '../documents-repository'

export class InMemoryDocumentsRepository implements DocumentsRepository {
  public documents: Document[] = []

  async fetchByUserId(userId: string): Promise<Document[]> {
    return this.documents.filter((document) => document.userId === userId)
  }

  async getByIdAndUserId({
    documentId,
    userId,
  }: GetByIdAndUserIdInput): Promise<Document | null> {
    const document = this.documents.find(
      (document) => document.id === documentId && document.userId === userId,
    )

    if (!document) {
      return null
    }

    return document
  }

  async create({
    name,
    status,
    userId,
    id,
  }: Prisma.DocumentUncheckedCreateInput): Promise<Document> {
    const document: Document = {
      id: id ?? randomUUID(),
      name,
      status,
      userId,
    }

    this.documents.push(document)

    return document
  }

  async deleteByUserId({
    documentId,
    userId,
  }: DeleteByUserIdInput): Promise<void> {
    const documentIndex = this.documents.findIndex(
      (document) => document.id === documentId && document.userId === userId,
    )

    this.documents.splice(documentIndex, 1)
  }
}
