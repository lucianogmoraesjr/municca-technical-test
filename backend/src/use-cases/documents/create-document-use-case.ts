import { DocumentsRepository } from '@/repositories/documents-repository'

interface CreateDocumentUseCaseRequest {
  name: string
  userId: string
}

export class CreateDocumentUseCase {
  constructor(private documentsRepository: DocumentsRepository) {}

  async execute({ name, userId }: CreateDocumentUseCaseRequest) {
    const document = await this.documentsRepository.create({
      name,
      userId,
    })

    return document
  }
}
