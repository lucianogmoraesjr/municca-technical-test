import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchUsersUseCase } from './fetch-users-use-case'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: FetchUsersUseCase

describe('Fetch users use case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new FetchUsersUseCase(inMemoryUsersRepository)
  })

  it('should be able to fetch users', async () => {
    const users = await sut.execute()

    expect(users.length).toBe(2)
  })
})
