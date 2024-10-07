import { Request, Response } from 'express'
import z from 'zod'

import { makeRejectDocumentUseCase } from '@/use-cases/documents/factories/make-reject-document-use-case'

export class RejectDocumentController {
  async handle(request: Request, response: Response) {
    const { id: userId } = request.user

    const rejectDocumentParamsSchema = z.object({
      documentId: z.string().uuid(),
    })

    const { documentId } = rejectDocumentParamsSchema.parse(request.params)

    const rejectDocumentUseCase = makeRejectDocumentUseCase()

    await rejectDocumentUseCase.execute({
      userId,
      documentId: documentId,
    })

    response.sendStatus(204)
  }
}
