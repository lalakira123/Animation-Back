import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

import { conflict } from '../middlewares/errorHandlerMiddleware.js';

import userRepository from './../repositories/userRepository.js';

export type CreateDataUser = Omit<User, "id">;

async function createUser(newUser: CreateDataUser){
  const { email, password } = newUser;
  const existUser = await findUserByEmail(email);
  
  if(existUser) throw conflict('E-mail já cadastrado');
  
  newUser = {
    ...newUser,
    password: encryptPassword(password)
  }

  await userRepository.createUser(newUser);
}

async function findUserByEmail(email: string){
  return await userRepository.findUserByEmail(email);
}

function encryptPassword(password: string){
  const SALT = 10;
  return bcrypt.hashSync(password, SALT);
}

const userService = {
  createUser
}

export default userService;