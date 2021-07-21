import supertest from 'supertest';
import { server } from '../server';

describe('POST endpoints', () => {
  test('send an email', async () => {
    const res = await supertest(server)
      .post('/api/v1/email/sendemail')
      .send({
        name: 'John',
        email: 'john@smith.eu',
        message: 'Hello',
      })
      .set('Accept', 'application/json');
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      status: 'Sucess',
    });
    server.close();
  });
});
