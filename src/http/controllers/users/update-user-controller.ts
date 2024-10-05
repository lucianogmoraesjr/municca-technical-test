import { Request, Response } from 'express'
import z from 'zod'

import { makeUpdateUserUseCase } from '@/use-cases/users/factories/make-update-user-use-case'

const updateUserParamsSchema = z.object({
  userId: z.string().uuid(),
})

const updateUserBodySchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { userId } = updateUserParamsSchema.parse(request.params)
    const { email, name } = updateUserBodySchema.parse(request.body)

    const updateUserUseCase = makeUpdateUserUseCase()

    const user = await updateUserUseCase.execute({
      email,
      id: userId,
      name,
    })

    response.status(201).json(user)
  }
}
