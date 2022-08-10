import { Request, Response } from 'express';

import episodeService from '../services/episodeService.js';

export async function getById(req: Request, res: Response){
  const idEpisode: number = Number(req.params.id);

  const episode = await episodeService.getById(idEpisode);

  res.status(200).send(episode);
}
