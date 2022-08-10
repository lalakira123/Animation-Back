import { notFound } from '../middlewares/errorHandlerMiddleware.js';

import episodeRepository from './../repositories/episodeRepository.js';

async function getById(id: number){
  const episode = await episodeRepository.getById(id);
  if(!episode) throw notFound('Episódio não existe!');

  return episode;
}

const episodeService = {
  getById
}

export default episodeService;