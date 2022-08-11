import { Request, Response } from 'express';

import favoriteService from '../services/favoriteService.js';

export async function favoriteSerie(req: Request, res: Response){
  const userId: number = res.locals.userId;
  const serieId: number = Number(req.params.id);

  await favoriteService.favoriteSerie(userId, serieId);

  res.status(200).send('Favoritar/Desfavoritar foi executado!');
}

export async function getFavoriteSerie(req: Request, res: Response){
  const userId: number = res.locals.userId;
  
  const series = await favoriteService.listFavoritesSerie(userId);

  res.status(200).send(series);
}