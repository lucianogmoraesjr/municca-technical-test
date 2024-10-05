import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { makeDocument } from 'test/factories/make-document'
import { FetchUserDocumentsUseCase } from './fetch-user-documents-use-case'

let sut: FetchUserDocumentsUseCase

describe('Fetch user documents use case', () => {
  beforeEach(() => {
    sut = new FetchUserDocumentsUseCase(inMemoryDocumentsRepository)
  })

  it('should be able to create a document', async () => {
    await Promise.all([
      inMemoryDocumentsRepository.create(
        makeDocument({
          userId: 'user-id',
        }),
      ),
      inMemoryDocumentsRepository.create(
        makeDocument({
          userId: 'user-id',
        }),
      ),
      inMemoryDocumentsRepository.create(makeDocument()),
    ])

    const documents = await sut.execute('user-id')

    expect(documents.length).toBe(2)
  })
})
