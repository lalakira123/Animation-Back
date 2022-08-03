import { Request, Response, NextFunction } from 'express';

const serviceToErrorStatusCode = {
  conflict: 409
};

export function conflict(message: string){
  return { type: 'conflict', message };
}

export default async function handleError(error, req: Request, res: Response, next: NextFunction){
  if(error.type) return res.status(serviceToErrorStatusCode[error.type]).send(error.message);
  
  res.status(500).send('Houve um problema ao se conectar com o servidor');
}