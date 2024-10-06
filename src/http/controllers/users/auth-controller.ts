import { Request, Response } from 'express'
import z from 'zod'

import { makeAuthUseCase } from '@/use-cases/users/factories/make-auth-use-case'

export class AuthController {
  async handle(request: Request, response: Response) {
    const authBodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { email, password } = authBodySchema.parse(request.body)

    const authUseCase = makeAuthUseCase()

    const accessToken = await authUseCase.execute({
      email,
      password,
    })

    response.status(200).json(accessToken)
  }
}
