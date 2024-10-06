import { Request, Response } from 'express'
import z from 'zod'

import { makeCreateUserUseCase } from '@/use-cases/users/factories/make-create-user-use-case'

const createUserBodySchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, password } = createUserBodySchema.parse(request.body)

    const createUserUseCase = makeCreateUserUseCase()

    const user = await createUserUseCase.execute({
      email,
      name,
      password,
    })

    response.status(201).json(user)
  }
}
