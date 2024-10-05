import { Request, Response } from 'express'
import z from 'zod'

import { makeGetUserDocumentByIdUseCase } from '@/use-cases/documents/factories/make-get-user-document-by-id-use-case'

export class GetUserDocumentController {
  async handle(request: Request, response: Response) {
    const userId = '4a6fd64d-d50e-4f53-b0c3-a9859d71e417'

    const updateUserDocumentParamsSchema = z.object({
      documentId: z.string().uuid(),
    })

    const { documentId } = updateUserDocumentParamsSchema.parse(request.params)

    const getUserDocumentByIdUseCase = makeGetUserDocumentByIdUseCase()

    const document = await getUserDocumentByIdUseCase.execute({
      userId,
      documentId: documentId,
    })

    response.json(document)
  }
}
