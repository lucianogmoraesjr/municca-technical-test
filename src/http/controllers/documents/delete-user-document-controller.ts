import { Request, Response } from 'express'
import z from 'zod'

import { makeDeleteUserDocumentUseCase } from '@/use-cases/documents/factories/make-delete-user-document-use-case'

export class DeleteUserDocumentController {
  async handle(request: Request, response: Response) {
    const { id: userId } = request.user

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
