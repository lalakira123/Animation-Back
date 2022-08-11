import { Comment } from "@prisma/client";

import { notFound } from "../middlewares/errorHandlerMiddleware.js";
import episodeRepository from "../repositories/episodeRepository.js";
import userRepository from "../repositories/userRepository.js";
import commentRepository from "../repositories/commentRepository.js";

export type CreateDataComment = Omit<Comment, 'id'|'userId'>;

async function createComment(commentData: CreateDataComment, userId: number){
  const { comment, episodeId } = commentData;

  const existUser = await userRepository.findUserById(userId);
  if(!existUser) throw notFound('Usuário não existe!');

  const existEpisode = await episodeRepository.getOnlyEpisodeById(episodeId);
  if(!existEpisode) throw notFound('Episódio não existe!');

  await commentRepository.createComment(userId, episodeId, comment);
}

async function listComments(episodeId: number){
  const existEpisode = await episodeRepository.getOnlyEpisodeById(episodeId);
  if(!existEpisode) throw notFound('Episódio não existe!');

  return await commentRepository.listCommentsOfEpisode(episodeId);
}

const commentService = {
  createComment,
  listComments
}

export default commentService;