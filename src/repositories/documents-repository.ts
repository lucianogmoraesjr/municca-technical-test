import { Document, Prisma } from '@prisma/client'

export interface DocumentsRepository {
  fetchByUserId(userId: string): Promise<Document[]>
  create(data: Prisma.DocumentUncheckedCreateInput): Promise<Document>
}
