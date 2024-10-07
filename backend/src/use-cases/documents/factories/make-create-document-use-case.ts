import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { CreateDocumentUseCase } from '../create-document-use-case'

export function makeCreateDocumentUseCase() {
  return new CreateDocumentUseCase(inMemoryDocumentsRepository)
}
