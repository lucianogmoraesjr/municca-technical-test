import { app } from '@/app'
import request from 'supertest'

describe('Get user (E2E)', () => {
  test('[GET] /users/:userId', async () => {
    const response = await request(app)
      .get('/users/4a6fd64d-d50e-4f53-b0c3-a9859d71e417')
      .send()

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      id: expect.any(String),
    })
  })
})
