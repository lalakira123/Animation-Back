import supertest from "supertest";
import { faker } from '@faker-js/faker';

import app from './../../src/app.js';
import { prisma } from './../../src/config/db.js';
import userFactory from "./factories/userFactory.js";

const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`
    DELETE FROM users;
  `
});

describe('Test all user Routes', () => {
  it('Given a valid input should create a new user POST/signup', async () => {
    const user = userFactory.createDataUser();
    await agent.post('/signup').send(user);
 
    const userCreated = await userFactory.findUserByEmail(user.email);
    expect(userCreated).not.toBeNull();
  });

  it('Given an email that already exists should return status code 409 POST/signup', async () => {
    const user = userFactory.createDataUser();
    await userFactory.createUser(user);

    const response = await agent.post('/signup').send(user);
    expect(response.statusCode).toEqual(409);
  });

  it('Given an invalid input should return status code 422 POST/signup', async () => {
    const invalidUser = userFactory.createInvalidDataUser();

    const response = await agent.post('/signup').send(invalidUser);
    expect(response.statusCode).toEqual(422);
  });

  it('Given a valid input to login should return the name POST/signin', async () => {
    const user = userFactory.createDataUser();
    await userFactory.createUser(user);

    const response = await agent.post('/signin').send({email: user.email, password: user.confirmPassword});
    expect(response.body).not.toBeNull();
  });

  it('Given a email that does not exist should return status code 404 POST/signin', async () => {
    const user = userFactory.createDataUser();

    const response = await agent.post('/signin').send({email: user.email, password: user.confirmPassword});
    expect(response.statusCode).toEqual(404);
  });

  it('Given a invalid password should return status code 401 POST/signin', async () => {
    const user = userFactory.createDataUser();
    await userFactory.createUser(user);

    const response = await agent.post('/signin').send({email: user.email, password: faker.internet.userName()});
    expect(response.statusCode).toEqual(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});