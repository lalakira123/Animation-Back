import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { conflict, notFound, unauthorized } from '../middlewares/errorHandlerMiddleware.js';
import { LoginUserSchema } from '../schemas/userSchema.js';

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

async function loginUser(user: LoginUserSchema){
  const { email, password } = user;
  const existUser = await findUserByEmail(email);

  if(!existUser) throw notFound('Usuário não existe!');

  if(!decryptPassword(password, existUser.password)){
    throw unauthorized('Senha incorreta!');
  } 

  const objectLogin = {
    token: generateToken({userId: existUser.id}),
    name: existUser.name,
    imageUrl: existUser.imageUrl,
    userId: existUser.id
  }

  return objectLogin;
}

async function findUserByEmail(email: string){
  return await userRepository.findUserByEmail(email);
}

function encryptPassword(password: string){
  const SALT = 10;
  return bcrypt.hashSync(password, SALT);
}

function decryptPassword(password: string, encryptedPassword: string){
  return bcrypt.compareSync(password, encryptedPassword);
}

function generateToken(userId: {userId: number}){
  const secretKey = process.env.JWT_TOKEN;
  const twelveHours = 60*60*12;
  const config = { expiresIn: twelveHours };
  return jwt.sign(userId, secretKey, config);
}

const userService = {
  createUser,
  loginUser
}

export default userService;