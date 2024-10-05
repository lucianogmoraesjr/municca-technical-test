import { Document, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

import {
  DeleteByUserIdInput,
  DocumentsRepository,
  GetByIdAndUserIdInput,
  UpdateDocumentInput,
} from '../documents-repository'

class InMemoryDocumentsRepository implements DocumentsRepository {
  private static instance: InMemoryDocumentsRepository
  public documents: Document[] = []

  private constructor() {}

  public static getInstance(): InMemoryDocumentsRepository {
    if (!InMemoryDocumentsRepository.instance) {
      InMemoryDocumentsRepository.instance = new InMemoryDocumentsRepository()
    }

    return InMemoryDocumentsRepository.instance
  }

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
    userId,
    id,
  }: Prisma.DocumentUncheckedCreateInput): Promise<Document> {
    const document: Document = {
      id: id ?? randomUUID(),
      name,
      status: 'PENDING',
      userId,
    }

    this.documents.push(document)

    return document
  }

  async update({
    id,
    name,
    userId,
    status,
  }: UpdateDocumentInput): Promise<Document> {
    const documentIndex = this.documents.findIndex(
      (document) => document.id === id && document.userId === userId,
    )

    const updatedDocument: Document = {
      ...this.documents[documentIndex],
      id,
      userId: userId,
      name: name ? name : this.documents[documentIndex].name,
      status: status ? status : this.documents[documentIndex].status,
    }

    this.documents[documentIndex] = updatedDocument

    return updatedDocument
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

export const inMemoryDocumentsRepository =
  InMemoryDocumentsRepository.getInstance()
