import { AppError } from '@/errors/app-error'
import { InMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { makeDocument } from 'test/factories/make-document'
import { makeUser } from 'test/factories/make-user'
import { DeleteUserDocumentUseCase } from './delete-user-document-use-case'

let inMemoryDocumentsRepository: InMemoryDocumentsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: DeleteUserDocumentUseCase

describe('Delete user document by id use case', () => {
  beforeEach(() => {
    inMemoryDocumentsRepository = new InMemoryDocumentsRepository()
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new DeleteUserDocumentUseCase(
      inMemoryDocumentsRepository,
      inMemoryUsersRepository,
    )
  })

  it('should be able to delete an user document', async () => {
    await inMemoryUsersRepository.create(
      makeUser({
        id: 'user-id',
      }),
    )

    await Promise.all([
      inMemoryDocumentsRepository.create(
        makeDocument({
          userId: 'user-id',
          id: 'document-id',
        }),
      ),
      inMemoryDocumentsRepository.create(makeDocument()),
    ])

    expect(inMemoryDocumentsRepository.documents.length).toBe(2)

    await sut.execute({
      documentId: 'document-id',
      userId: 'user-id',
    })

    expect(inMemoryDocumentsRepository.documents.length).toBe(1)
  })

  it('should not be able to delete an user document if user does not exists', async () => {
    await expect(
      sut.execute({
        documentId: 'document-id',
        userId: 'non-existent-user',
      }),
    ).rejects.toThrowError(AppError)
  })

  it('should not be able to delete a non-existent user document', async () => {
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
