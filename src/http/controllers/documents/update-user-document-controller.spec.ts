import { app } from '@/app'
import request from 'supertest'

describe('Update user document (E2E)', () => {
  test('[PUT] /documents/:documentId', async () => {
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
      .put(`/documents/${body.id}`)
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send({
        name: 'updated-document-name.test',
      })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      id: expect.any(String),
      name: 'updated-document-name.test',
    })
  })
})
