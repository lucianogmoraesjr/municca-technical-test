import { app } from '@/app'
import request from 'supertest'

describe('Fetch users (E2E)', () => {
  test('[GET] /users', async () => {
    const response = await request(app).get('/users')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
        }),
      ]),
    )
  })
})
