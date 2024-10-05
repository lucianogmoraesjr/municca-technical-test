import { Request, Response } from 'express'
import z from 'zod'

import { makeRejectDocumentUseCase } from '@/use-cases/documents/factories/make-reject-document-use-case'

export class RejectDocumentController {
  async handle(request: Request, response: Response) {
    const userId = '4a6fd64d-d50e-4f53-b0c3-a9859d71e417'

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
