import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { RejectDocumentUseCase } from '../reject-document-use-case'

export function makeRejectDocumentUseCase() {
  return new RejectDocumentUseCase(
    inMemoryDocumentsRepository,
    inMemoryUsersRepository,
  )
}
