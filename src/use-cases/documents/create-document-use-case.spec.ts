import { inMemoryDocumentsRepository } from '@/repositories/in-memory/in-memory-documents-repository'
import { CreateDocumentUseCase } from './create-document-use-case'

let sut: CreateDocumentUseCase

describe('Create user use case', () => {
  beforeEach(() => {
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
