import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUserDocumentByIdUseCase } from '../get-user-document-by-id-use-case'

export function makeGetUserDocumentByIdUseCase() {
  return new GetUserDocumentByIdUseCase(
    inMemoryDocumentsRepository,
    inMemoryUsersRepository,
  )
}
