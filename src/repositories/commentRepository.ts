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

const commentRepository = {
  createComment,
  listCommentsOfEpisode
}

export default commentRepository;