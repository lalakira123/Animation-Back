import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default function validateSchema(schema: ObjectSchema){
  return (res: Response, req: Request, next:NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if(error){
      res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
  }
}