import { Request, Response } from "express";

import userService, { CreateDataUser } from "./../services/userService.js";

export async function createUser(req: Request, res: Response){
  delete req.body.confirmPassword;
  let newUser: CreateDataUser = req.body;

  await userService.createUser(newUser);
  
  res.status(201).send('Usuário Criado com Sucesso!');
}