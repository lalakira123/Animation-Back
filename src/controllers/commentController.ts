import { Request, Response } from 'express';

import commentService from '../services/commentService.js';
import { CreateDataComment } from '../services/commentService.js';

export async function postComment(req: Request, res: Response){
  const userId: number = res.locals.userId;
  let comment: CreateDataComment = req.body;

  await commentService.createComment(comment, userId);

  res.status(201).send('Comentário postado!');
}

export async function listComments(req: Request, res: Response){
  const episodeId: number = Number(req.params.id);

  const comments = await commentService.listComments(episodeId);

  res.status(200).send(comments);
}

export async function deleteComment(req: Request, res: Response){
  const commentId: number = Number(req.params.id);
  const userId: number = res.locals.userId;

  await commentService.deleteComment(userId, commentId);

  res.status(200).send('Comentário deletado com sucesso!');
}