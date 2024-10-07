import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { ApproveDocumentUseCase } from '../aprove-document-use-case'

export function makeApproveDocumentUseCase() {
  return new ApproveDocumentUseCase(
    inMemoryDocumentsRepository,
    inMemoryUsersRepository,
  )
}
