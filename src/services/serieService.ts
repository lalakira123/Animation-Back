import { notFound } from '../middlewares/errorHandlerMiddleware.js';
import serieRepository from './../repositories/serieRepository.js';

async function getRandom(){
  return await serieRepository.getRandom();
}

async function getById(id: number){
  const serie = await serieRepository.getById(id);
  if(!serie) throw notFound('Série não existe!');

  return serie;
}

const serieService = {
  getRandom,
  getById
}

export default serieService;