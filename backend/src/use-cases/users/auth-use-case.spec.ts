import { AppError } from '@/errors/app-error'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthUseCase } from './auth-use-case'

let sut: AuthUseCase

describe('Auth user use case', () => {
  beforeEach(() => {
    sut = new AuthUseCase(inMemoryUsersRepository)
  })

  it('should be able to create a user', async () => {
    const accessToken = await sut.execute({
      email: 'john@mail.com',
      password: '12345678',
    })

    expect(accessToken).toEqual(
      expect.objectContaining({
        accessToken: expect.any(String),
      }),
    )
  })

  it('should not be able to auth a non-existent user', async () => {
    await expect(
      sut.execute({
        email: 'nonexistent@mail.com',
        password: '12345678',
      }),
    ).rejects.toThrowError(AppError)
  })

  it('should not be able to auth an user with wrong password', async () => {
    await expect(
      sut.execute({
        email: 'john@mail.com',
        password: 'wrong-password',
      }),
    ).rejects.toThrowError(AppError)
  })
})
