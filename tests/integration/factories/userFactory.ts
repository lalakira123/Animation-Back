import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { prisma } from './../../../src/config/db.js';

interface CreateDataUser {
  name: string,
  email: string,
  imageUrl: string,
  password: string,
  confirmPassword: string
}

type User = Omit<CreateDataUser, "confirmPassword">;

function createDataUser(){
  const password: string = faker.internet.userName();
  const user: CreateDataUser = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    imageUrl: faker.internet.url(),
    password,
    confirmPassword: password
  }
  return user;
}

function createInvalidDataUser(){
  const password: string = faker.internet.userName();
  const user: CreateDataUser = {
    name: faker.internet.userName(),
    email: faker.internet.userName(),
    imageUrl: faker.internet.url(),
    password,
    confirmPassword: password
  }
  return user;
}

async function findUserByEmail(email: string){
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  });
  return user;
}

async function createUser(user: User){
  const { name, email, imageUrl, password } = user;
  await prisma.user.create({
    data: {
      name,
      email,
      imageUrl,
      password: bcrypt.hashSync(password, 10)
    }
  });
}

const userFactory = {
  createDataUser,
  findUserByEmail,
  createUser,
  createInvalidDataUser
}

export default userFactory;
