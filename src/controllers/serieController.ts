import { Request, Response } from 'express';

import serieService from '../services/serieService.js';

export async function getRandom(req: Request, res: Response){
  const serie = await serieService.getRandom();

  res.status(200).send(serie);
}

export async function getById(req: Request, res: Response){
  const serieId = Number(req.params.id);

  const serie = await serieService.getById(serieId);

  res.status(200).send(serie);
}