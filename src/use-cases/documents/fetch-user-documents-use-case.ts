import { DocumentsRepository } from '@/repositories/documents-repository'

export class FetchUserDocumentsUseCase {
  constructor(private documentsRepository: DocumentsRepository) {}

  async execute(userId: string) {
    const documents = await this.documentsRepository.fetchByUserId(userId)

    return documents
  }
}
