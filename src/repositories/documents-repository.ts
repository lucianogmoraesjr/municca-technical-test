import { Document, Prisma } from '@prisma/client'

export interface GetByIdAndUserIdInput {
  userId: string
  documentId: string
}

export type UpdateDocumentInput = Omit<
  Required<Prisma.DocumentUncheckedCreateInput>,
  'status'
>

export interface DeleteByUserIdInput {
  userId: string
  documentId: string
}

export interface DocumentsRepository {
  fetchByUserId(userId: string): Promise<Document[]>
  getByIdAndUserId(input: GetByIdAndUserIdInput): Promise<Document | null>
  create(data: Prisma.DocumentUncheckedCreateInput): Promise<Document>
  update(data: UpdateDocumentInput): Promise<Document>
  deleteByUserId(input: DeleteByUserIdInput): Promise<void>
}
