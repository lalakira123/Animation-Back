import { prisma } from "../config/db.js";

async function createComment(userId: number, episodeId: number, comment: string){
  await prisma.comment.create({
    data: {
      userId,
      episodeId,
      comment
    }
  });
}

async function listCommentsOfEpisode(episodeId: number){
  return await prisma.comment.findMany({
    where: {
      episodeId
    },
    select: {
      id: true,
      comment: true,
      user: {
        select: {
          id: true,
          imageUrl: true,
          name: true
        }
      }
    }
  });
}

async function findCommentById(commentId: number){
  return await prisma.comment.findFirst({
    where: {
      id: commentId
    }
  });
}

async function deleteCommentById(commentId: number){
  await prisma.comment.delete({
    where: {
      id: commentId
    }
  });
}

const commentRepository = {
  createComment,
  listCommentsOfEpisode,
  findCommentById,
  deleteCommentById
}

export default commentRepository;