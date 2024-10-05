import { makeFetchUserDocumentsUseCase } from '@/use-cases/documents/factories/make-fetch-user-documents-use-case'

import { Request, Response } from 'express'

export class FetchUserDocumentsController {
  async handle(request: Request, response: Response) {
    const userId = '4a6fd64d-d50e-4f53-b0c3-a9859d71e417'

    const fetchUserDocumentsUseCase = makeFetchUserDocumentsUseCase()

    const documents = await fetchUserDocumentsUseCase.execute(userId)

    response.json(documents)
  }
}
