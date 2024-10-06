import { app } from '@/app'
import request from 'supertest'

describe('Create user (E2E)', () => {
  test('[POST] /users', async () => {
    const response = await request(app).post('/users').send({
      name: 'Mary Doe',
      email: 'mary@mail.com',
      password: '123456',
    })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      id: expect.any(String),
    })
  })
})
