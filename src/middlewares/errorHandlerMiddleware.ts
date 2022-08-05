import { Request, Response, NextFunction } from 'express';

const serviceToErrorStatusCode = {
  unauthorized: 401,
  notFound: 404,
  conflict: 409
};

export function conflict(message: string){
  return { type: 'conflict', message };
}

export function notFound(message: string){
  return { type: 'notFound', message };
}

export function unauthorized(message: string){
  return { type: 'unauthorized', message };
}

export default async function handleError(error, req: Request, res: Response, next: NextFunction){
  if(error.type) return res.status(serviceToErrorStatusCode[error.type]).send(error.message);
  
  res.status(500).send('Houve um problema ao se conectar com o servidor');
}