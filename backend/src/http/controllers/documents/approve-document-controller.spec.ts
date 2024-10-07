import { app } from '@/app'
import request from 'supertest'

describe('Approve document (E2E)', () => {
  test('[PATCH] /documents/:documentId', async () => {
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
      .patch(`/documents/${body.id}/approve`)
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send()

    expect(response.status).toBe(204)
  })
})
