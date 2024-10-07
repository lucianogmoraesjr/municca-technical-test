import { Request, Response } from 'express'
import z from 'zod'

import { makeDeleteUserUseCase } from '@/use-cases/users/factories/make-delete-user-use-case'

const deleteUserParamsSchema = z.object({
  userId: z.string().uuid(),
})

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { userId } = deleteUserParamsSchema.parse(request.params)

    const deleteUserUseCase = makeDeleteUserUseCase()

    await deleteUserUseCase.execute(userId)

    response.sendStatus(204)
  }
}
