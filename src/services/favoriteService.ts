import { notFound } from '../middlewares/errorHandlerMiddleware.js';
import userRepository from './../repositories/userRepository.js';
import serieRepository from './../repositories/serieRepository.js';
import favoriteRepository from './../repositories/favoriteRepository.js';

async function favoriteSerie(userId: number, serieId: number){
  const existUser = await userRepository.findUserById(userId);
  if(!existUser) throw notFound('Usuário não existe!');

  const existSerie = await serieRepository.getById(serieId);
  if(!existSerie) throw notFound('Série não existe!');

  const alreadyFavorite = await favoriteRepository.findByUserIdAndSerieId(userId, serieId);
  
  if(!alreadyFavorite){
    await favoriteRepository.postFavorite(userId, serieId);
  } 

  if(alreadyFavorite){
    await favoriteRepository.unpostFavorite(alreadyFavorite.id);
  }
}

const favoriteService = {
  favoriteSerie
}

export default favoriteService;