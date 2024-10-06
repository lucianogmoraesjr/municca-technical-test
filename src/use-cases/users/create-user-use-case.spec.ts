import { AppError } from '@/errors/app-error'
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'
import { CreateUserUseCase } from './create-user-use-case'

let sut: CreateUserUseCase

describe('Create user use case', () => {
  beforeEach(() => {
    sut = new CreateUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to create a user', async () => {
    const user = await sut.execute({
      name: 'Mary Doe',
      email: 'mary@mail.com',
      password: '12345678',
    })

    expect(user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      }),
    )
  })

  it('should not be able to create a user if e-mail already exists', async () => {
    inMemoryUsersRepository.create(
      makeUser({
        email: 'existent@mail.com',
      }),
    )

    await expect(
      sut.execute({
        name: 'John Doe',
        email: 'existent@mail.com',
        password: '12345678',
      }),
    ).rejects.toThrowError(AppError)
  })
})
