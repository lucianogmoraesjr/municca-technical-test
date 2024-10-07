import { app } from '@/app'
import request from 'supertest'

describe('Create document (E2E)', () => {
  test('[POST] /documents', async () => {
    const { body: authResponseBody } = await request(app).post('/auth').send({
      email: 'john@mail.com',
      password: '12345678',
    })

    const response = await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send({
        name: 'document-name.test',
      })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      id: expect.any(String),
    })
  })
})
