import { prisma } from "../config/db.js";

async function findByUserIdAndSerieId(userId: number, serieId: number){
  return await prisma.favorite.findFirst({
    where: {
      serieId,
      userId
    }
  });
}

async function postFavorite(userId: number, serieId: number){
  await prisma.favorite.create({
    data: {
      userId,
      serieId
    }
  });
}

async function unpostFavorite(id: number){
  await prisma.favorite.delete({
    where: {
      id
    }
  });
}

const favoriteRepository = {
  findByUserIdAndSerieId,
  postFavorite,
  unpostFavorite
}

export default favoriteRepository;