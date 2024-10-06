import { Request, Response } from 'express'
import z from 'zod'

import { UserPresenter } from '@/http/presenters/user-presenter'
import { makeGetUserUseCase } from '@/use-cases/users/factories/make-get-user-use-case'

const getUserParamsSchema = z.object({
  userId: z.string().uuid(),
})

export class GetUserController {
  async handle(request: Request, response: Response) {
    const { userId } = getUserParamsSchema.parse(request.params)

    const getUserUseCase = makeGetUserUseCase()

    const user = await getUserUseCase.execute(userId)

    response.json(UserPresenter.toHttp(user))
  }
}
