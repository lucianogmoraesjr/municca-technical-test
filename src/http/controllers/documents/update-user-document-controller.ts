import { Request, Response } from 'express'
import z from 'zod'

import { makeUpdateUserDocumentUseCase } from '@/use-cases/documents/factories/make-update-user-document'

export class UpdateUserDocumentController {
  async handle(request: Request, response: Response) {
    const { id: userId } = request.user

    const updateUserDocumentBodySchema = z.object({
      name: z.string().min(3),
    })

    const updateUserDocumentParamsSchema = z.object({
      documentId: z.string().uuid(),
    })

    const { name } = updateUserDocumentBodySchema.parse(request.body)
    const { documentId } = updateUserDocumentParamsSchema.parse(request.params)

    const fetchUserDocumentsUseCase = makeUpdateUserDocumentUseCase()

    const document = await fetchUserDocumentsUseCase.execute({
      userId,
      name,
      id: documentId,
    })

    response.status(201).json(document)
  }
}
