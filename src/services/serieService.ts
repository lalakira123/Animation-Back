import { notFound } from '../middlewares/errorHandlerMiddleware.js';
import serieRepository from './../repositories/serieRepository.js';

async function getRandom(){
  return await serieRepository.getRandom();
}

async function getSerieSeasonAndEpisodeById(id: number){
  const serie = await serieRepository.getSerieSeasonAndEpisodeById(id);
  if(!serie) throw notFound('Série não existe!');

  return serie;
}

const serieService = {
  getRandom,
  getSerieSeasonAndEpisodeById
}

export default serieService;