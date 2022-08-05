import { jest } from '@jest/globals';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

import { conflict, unauthorized, notFound } from './../../src/middlewares/errorHandlerMiddleware';
import userService from './../../src/services/userService.js';
import userRepository from './../../src/repositories/userRepository.js';

describe('User Service test suites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Test createUser function', async () => {
    jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(():any => false);
    jest.spyOn(userRepository, "createUser").mockImplementationOnce(():any => {});

    const password = faker.internet.userName();
    const user = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      imageUrl: faker.internet.url(),
      password,
      confirmPassword: password
    }

    await userService.createUser(user);
    expect(userRepository.createUser).toBeCalled();
  });

  it('Test createUser function if user already exist', async () => {
    jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(():any => true);

    const password = faker.internet.userName();
    const user = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      imageUrl: faker.internet.url(),
      password,
      confirmPassword: password
    }

    const promise = userService.createUser(user);
    expect(promise).rejects.toEqual(conflict('E-mail já cadastrado'));
  });

  it('Test loginUser function', async () => {
    const email = faker.internet.email();
    const password = faker.internet.userName();
    const hashSync = bcrypt.hashSync(password, 10);
    jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(():any => {
      return {
        id: 1,
        name: faker.internet.userName(),
        email,
        imageUrl: faker.internet.url(),
        password: hashSync
      }
    });

    const user = {
      email,
      password
    }

    const promise = userService.loginUser(user);
    expect(promise).not.toBeNull();
  });

  it('Test loginUser function if the user does not exist', async () => {
    jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(():any => false);

    const user = {
      email: faker.internet.email(),
      password: faker.internet.userName()
    }

    const promise = userService.loginUser(user);
    expect(promise).rejects.toEqual(notFound('Usuário não existe!'));
  });

  it('Test loginUser function if the password is not correct', async () => {
    jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(():any => {
      return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        imageUrl: faker.internet.url(),
        password: faker.internet.userName()
      }
    });

    const user = {
      email: faker.internet.email(),
      password: faker.internet.userName()
    }

    const promise = userService.loginUser(user);
    expect(promise).rejects.toEqual(unauthorized('Senha incorreta!'));
  });
});