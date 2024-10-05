import { DocumentsRepository } from '@/repositories/documents-repository'
import { DocumentStatus } from '@prisma/client'

interface CreateDocumentUseCaseRequest {
  name: string
  status: DocumentStatus
  userId: string
}

export class CreateDocumentUseCase {
  constructor(private documentsRepository: DocumentsRepository) {}

  async execute({ name, status, userId }: CreateDocumentUseCaseRequest) {
    const document = await this.documentsRepository.create({
      name,
      status,
      userId,
    })

    return document
  }
}
