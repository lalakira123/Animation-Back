import Joi from 'joi';

import { CreateDataUser } from './../services/userService.js';

export type LoginUserSchema = Omit<CreateDataUser, "name" | "imageUrl">

interface CreateUser {
  name: string,
  password: string,
  confirmPassword: string,
  email: string,
  imageUrl: string
}

export const createUserSchema = Joi.object<CreateUser>({
  name: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  email: Joi.string().email().required(),
  imageUrl: Joi.string().uri().required()
});

export const loginUserSchema = Joi.object<LoginUserSchema>({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})