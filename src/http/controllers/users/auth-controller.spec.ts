import { app } from '@/app'
import request from 'supertest'

describe('Auth (E2E)', () => {
  test('[POST] /auth', async () => {
    const response = await request(app).post('/auth').send({
      email: 'john@mail.com',
      password: '12345678',
    })

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      accessToken: expect.any(String),
    })
  })
})
