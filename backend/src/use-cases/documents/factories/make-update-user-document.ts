import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UpdateUserDocumentUseCase } from '../update-user-document-use-case'

export function makeUpdateUserDocumentUseCase() {
  return new UpdateUserDocumentUseCase(
    inMemoryDocumentsRepository,
    inMemoryUsersRepository,
  )
}
