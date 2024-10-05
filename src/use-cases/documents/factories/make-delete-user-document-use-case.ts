import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { DeleteUserDocumentUseCase } from '../delete-user-document-use-case'

export function makeDeleteUserDocumentUseCase() {
  return new DeleteUserDocumentUseCase(
    inMemoryDocumentsRepository,
    inMemoryUsersRepository,
  )
}
