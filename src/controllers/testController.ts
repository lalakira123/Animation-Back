import { Request, Response } from 'express';

import testService from './../services/testService.js';

export async function resetDatabase(req: Request, res: Response){
  await testService.resetDatabase();

  res.sendStatus(200);
} 
