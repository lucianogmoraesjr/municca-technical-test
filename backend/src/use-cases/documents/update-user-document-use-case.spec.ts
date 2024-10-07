import { AppError } from '@/errors/app-error'
import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { makeDocument } from 'test/factories/make-document'
import { makeUser } from 'test/factories/make-user'
import { UpdateUserDocumentUseCase } from './update-user-document-use-case'

let sut: UpdateUserDocumentUseCase

describe('Update user document use case', () => {
  beforeEach(() => {
    sut = new UpdateUserDocumentUseCase(
      inMemoryDocumentsRepository,
      inMemoryUsersRepository,
    )
  })

  it('should be able to update an user document', async () => {
    await inMemoryUsersRepository.create(
      makeUser({
        id: 'user-id',
      }),
    )

    await inMemoryDocumentsRepository.create(
      makeDocument({
        userId: 'user-id',
        id: 'document-id',
        name: 'document-name.test',
      }),
    )

    await sut.execute({
      id: 'document-id',
      name: 'updated-document.test',
      userId: 'user-id',
    })

    expect(inMemoryDocumentsRepository.documents[0].name).toBe(
      'updated-document.test',
    )
  })

  it('should not be able to update an user document if user does not exists', async () => {
    await expect(
      sut.execute({
        id: 'document-id',
        userId: 'non-existent-user',
        name: 'document-name.test',
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
        id: 'non-existent-document',
        userId: 'user-id',
        name: 'document-name.test',
      }),
    ).rejects.toThrowError(AppError)
  })
})
