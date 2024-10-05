import { Document, Prisma } from '@prisma/client'

export interface DocumentsRepository {
  create(data: Prisma.DocumentUncheckedCreateInput): Promise<Document>
}
