import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful register', async () => {
  return request(app)
    .post('/api/users/register')
    .send({
      email: 'test@test.com',
      password: 'password',
      name: 'Julian'
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/register')
    .send({
      email: 'test',
      password: 'password',
      name: 'Julian'
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/register')
    .send({
      email: 'test@test.com',
      password: 'p',
      name: 'Julian'
    })
    .expect(400);
});

it('returns a 400 with an invalid name', async () => {
    return request(app)
      .post('/api/users/register')
      .send({
        email: 'test@test.com',
        password: 'p',
        name: ''
      })
      .expect(400);
  });

it('returns a 400 with missing email, name and password', async () => {
    await request(app)
        .post('/api/users/register')
        .send({ email: 'test@test.com' })
        .expect(400);

    await request(app)
        .post('/api/users/register')
        .send({
        password: 'password',
        })
        .expect(400);

    await request(app)
        .post('/api/users/register')
        .send({
        name: 'Julian',
        })
        .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/register')
    .send({
      email: 'test@test.com',
      password: 'password',
      name: 'Julian'
    })
    .expect(201);

  await request(app)
    .post('/api/users/register')
    .send({
      email: 'test@test.com',
      password: 'password',
      name: 'Julian'
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/register')
    .send({
      email: 'test@test.com',
      password: 'password',
      name: 'Julian'
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});

