import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export default function validateToken(req: Request, res: Response, next: NextFunction){
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '').trim();

  const secretKey = process.env.JWT_TOKEN;

  jwt.verify(token, secretKey, (error , result: {userId:number}) => {
    if(error) return res.status(401).send({error});
    if(result){
      res.locals.userId = result.userId;
      next();
    }
  })
}