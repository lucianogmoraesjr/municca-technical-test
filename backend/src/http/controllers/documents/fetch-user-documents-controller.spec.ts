import { app } from '@/app'
import request from 'supertest'

describe('Fetch user documents (E2E)', () => {
  test('[GET] /documents', async () => {
    const { body: authResponseBody } = await request(app).post('/auth').send({
      email: 'john@mail.com',
      password: '12345678',
    })

    await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send({
        name: 'document-name.test',
      })

    const response = await request(app)
      .get('/documents')
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send()

    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: 'document-name.test',
        }),
      ]),
    )
  })
})
