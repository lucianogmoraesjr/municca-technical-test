import { app } from '@/app'
import request from 'supertest'

describe('Update user document (E2E)', () => {
  test('[GET] /documents/:documentId', async () => {
    const { body: authResponseBody } = await request(app).post('/auth').send({
      email: 'john@mail.com',
      password: '12345678',
    })

    const { body } = await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send({
        name: 'document-name.test',
      })

    const response = await request(app)
      .get(`/documents/${body.id}`)
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send()

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      id: expect.any(String),
      name: 'document-name.test',
    })
  })
})
