import { AppError } from '@/errors/app-error'
import { InMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { makeDocument } from 'test/factories/make-document'
import { makeUser } from 'test/factories/make-user'
import { ApproveDocumentUseCase } from './aprove-document-use-case'

let inMemoryDocumentsRepository: InMemoryDocumentsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: ApproveDocumentUseCase

describe('Approve user document use case', () => {
  beforeEach(() => {
    inMemoryDocumentsRepository = new InMemoryDocumentsRepository()
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new ApproveDocumentUseCase(
      inMemoryDocumentsRepository,
      inMemoryUsersRepository,
    )
  })

  it('should be able to approve an user document', async () => {
    await inMemoryUsersRepository.create(
      makeUser({
        id: 'user-id',
      }),
    )

    await inMemoryDocumentsRepository.create(
      makeDocument({
        userId: 'user-id',
        id: 'document-id',
      }),
    )

    await sut.execute({
      documentId: 'document-id',
      userId: 'user-id',
    })

    expect(inMemoryDocumentsRepository.documents[0].status).toBe('APPROVED')
  })

  it('should not be able to update an user document if user does not exists', async () => {
    await expect(
      sut.execute({
        documentId: 'document-id',
        userId: 'non-existent-user',
      }),
    ).rejects.toThrowError(AppError)
  })

  it('should not be able to update a non-existent user document', async () => {
    await inMemoryUsersRepository.create(
      makeUser({
        id: 'user-id',
      }),
    )

    await expect(
      sut.execute({
        documentId: 'non-existent-document',
        userId: 'user-id',
      }),
    ).rejects.toThrowError(AppError)
  })
})
