import { Request, Response } from 'express';

import serieService from '../services/serieService.js';

export async function getRandom(req: Request, res: Response){
  const serie = await serieService.getRandom();

  res.status(200).send(serie);
}

export async function getById(req: Request, res: Response){
  const id: number = Number(req.params);

  const serie = await serieService.getById(id);

  res.status(200).send(serie);
}