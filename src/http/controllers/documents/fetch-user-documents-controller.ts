import { makeFetchUserDocumentsUseCase } from '@/use-cases/documents/factories/make-fetch-user-documents-use-case'

import { Request, Response } from 'express'

export class FetchUserDocumentsController {
  async handle(request: Request, response: Response) {
    const { id } = request.user

    const fetchUserDocumentsUseCase = makeFetchUserDocumentsUseCase()

    const documents = await fetchUserDocumentsUseCase.execute(id)

    response.json(documents)
  }
}
