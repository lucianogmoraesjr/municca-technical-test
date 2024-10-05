import { app } from '@/app'
import request from 'supertest'

describe('Fetch user documents (E2E)', () => {
  test('[GET] /documents', async () => {
    await request(app).post('/documents').send({
      name: 'document-name.test',
      userId: '4a6fd64d-d50e-4f53-b0c3-a9859d71e417',
    })

    const response = await request(app).get('/documents').send()

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
