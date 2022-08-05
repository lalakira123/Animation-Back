import { Request, Response } from "express";

import { LoginUserSchema } from "../schemas/userSchema.js";
import userService, { CreateDataUser } from "./../services/userService.js";

export async function createUser(req: Request, res: Response){
  delete req.body.confirmPassword;
  let newUser: CreateDataUser = req.body;

  await userService.createUser(newUser);
  
  res.status(201).send('Usuário Criado com Sucesso!');
}

export async function loginUser(req: Request, res: Response){
  const user: LoginUserSchema = req.body;
  
  const loginSession = await userService.loginUser(user);

  res.status(200).send(loginSession);
}