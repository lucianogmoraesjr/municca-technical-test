import { Request, Response } from 'express'
import z from 'zod'

import { makeDeleteUserDocumentUseCase } from '@/use-cases/documents/factories/make-delete-user-document-use-case'

export class DeleteUserDocumentController {
  async handle(request: Request, response: Response) {
    const userId = '4a6fd64d-d50e-4f53-b0c3-a9859d71e417'

    const deleteUserDocumentParamsSchema = z.object({
      documentId: z.string().uuid(),
    })

    const { documentId } = deleteUserDocumentParamsSchema.parse(request.params)

    const deleteUserDocumentByIdUseCase = makeDeleteUserDocumentUseCase()

    await deleteUserDocumentByIdUseCase.execute({
      userId,
      documentId: documentId,
    })

    response.sendStatus(204)
  }
}
