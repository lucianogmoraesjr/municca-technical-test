import { app } from '@/app'
import request from 'supertest'

describe('Update user (E2E)', () => {
  test('[PUT] /users/:userId', async () => {
    const response = await request(app)
      .put('/users/4a6fd64d-d50e-4f53-b0c3-a9859d71e417')
      .send({
        name: 'John C. Doe',
        email: 'john@acme.com',
      })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      name: 'John C. Doe',
    })
  })
})
