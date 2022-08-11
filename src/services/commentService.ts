import { Comment } from "@prisma/client";

import { notFound, unauthorized } from "../middlewares/errorHandlerMiddleware.js";
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

async function deleteComment(userId: number, commentId: number){
  const existUser = await userRepository.findUserById(userId);
  if(!existUser) throw notFound('Usuário não existe!');

  const existComment = await commentRepository.findCommentById(commentId);
  if(!existComment) throw notFound('Comentário não existe!');

  if(userId !== existUser.id) throw unauthorized('Este comentário não pertence ao usuário');

  await commentRepository.deleteCommentById(commentId);
}

const commentService = {
  createComment,
  listComments,
  deleteComment
}

export default commentService;