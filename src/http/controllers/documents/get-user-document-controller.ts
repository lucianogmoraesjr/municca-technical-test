import { Request, Response } from 'express'
import z from 'zod'

import { makeGetUserDocumentByIdUseCase } from '@/use-cases/documents/factories/make-get-user-document-by-id-use-case'

export class GetUserDocumentController {
  async handle(request: Request, response: Response) {
    const { id: userId } = request.user

    const updateUserDocumentParamsSchema = z.object({
      documentId: z.string().uuid(),
    })

    const { documentId } = updateUserDocumentParamsSchema.parse(request.params)

    const getUserDocumentByIdUseCase = makeGetUserDocumentByIdUseCase()

    const document = await getUserDocumentByIdUseCase.execute({
      userId,
      documentId,
    })

    response.json(document)
  }
}
