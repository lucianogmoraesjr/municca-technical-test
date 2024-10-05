import { makeCreateDocumentUseCase } from '@/use-cases/documents/factories/make-create-document-use-case'
import { Request, Response } from 'express'
import z from 'zod'

export class CreateDocumentController {
  async handle(request: Request, response: Response) {
    const createDocumentBodySchema = z.object({
      userId: z.string().uuid(),
      name: z.string().min(3),
    })

    const { name, userId } = createDocumentBodySchema.parse(request.body)

    const createDocumentUseCase = makeCreateDocumentUseCase()

    const document = await createDocumentUseCase.execute({
      name,
      userId,
    })

    response.status(201).json(document)
  }
}
