import { Request, Response } from 'express';

import categoryService from '../services/categoryService.js';

export async function getCategoriesSeries(req: Request, res: Response){
  const categoriesSeries = await categoryService.getCategoriesSeries();

  res.status(200).send(categoriesSeries);
}

