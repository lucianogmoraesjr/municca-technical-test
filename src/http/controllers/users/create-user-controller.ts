import { Request, Response } from 'express'
import z from 'zod'

import { makeCreateUserUseCase } from '@/use-cases/users/factories/make-create-user-use-case'

const createUserBodySchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name } = createUserBodySchema.parse(request.body)

    const createUserUseCase = makeCreateUserUseCase()

    const user = await createUserUseCase.execute({
      email,
      name,
    })

    response.status(201).json(user)
  }
}
