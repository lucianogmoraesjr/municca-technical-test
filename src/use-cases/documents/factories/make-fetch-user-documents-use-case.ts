import inMemoryDocumentsRepository from '@/repositories/in-memory/in-memory-documents-repository'
import { FetchUserDocumentsUseCase } from '../fetch-user-documents-use-case'

export function makeFetchUserDocumentsUseCase() {
  return new FetchUserDocumentsUseCase(inMemoryDocumentsRepository)
}
