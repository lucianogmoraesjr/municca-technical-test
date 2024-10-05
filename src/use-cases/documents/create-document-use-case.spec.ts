import { InMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { CreateDocumentUseCase } from './create-document-use-case'

let inMemoryDocumentsRepository: InMemoryDocumentsRepository
let sut: CreateDocumentUseCase

describe('Create user use case', () => {
  beforeEach(() => {
    inMemoryDocumentsRepository = new InMemoryDocumentsRepository()
    sut = new CreateDocumentUseCase(inMemoryDocumentsRepository)
  })

  it('should be able to create a document', async () => {
    const user = await sut.execute({
      name: 'document-name',
      userId: 'user-id',
    })

    expect(user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      }),
    )
  })
})
