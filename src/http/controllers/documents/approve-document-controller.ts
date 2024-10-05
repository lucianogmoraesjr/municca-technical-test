import { Request, Response } from 'express'
import z from 'zod'

import { makeApproveDocumentUseCase } from '@/use-cases/documents/factories/make-approve-document-use-case'

export class ApproveDocumentController {
  async handle(request: Request, response: Response) {
    const userId = '4a6fd64d-d50e-4f53-b0c3-a9859d71e417'

    const approveDocumentParamsSchema = z.object({
      documentId: z.string().uuid(),
    })

    const { documentId } = approveDocumentParamsSchema.parse(request.params)

    const approveDocumentUseCase = makeApproveDocumentUseCase()

    await approveDocumentUseCase.execute({
      userId,
      documentId: documentId,
    })

    response.sendStatus(204)
  }
}
