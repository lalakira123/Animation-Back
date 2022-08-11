import { prisma } from "../config/db.js";

async function findByUserIdAndSerieId(userId: number, serieId: number){
  return await prisma.favorite.findFirst({
    where: {
      serieId,
      userId
    }
  });
}

async function listFavoritesSeriesByUserId(userId: number){
  return await prisma.favorite.findMany({
    where: {
      userId
    },
    select: {
      serie: {
        select: {
          id: true,
          bigImageUrl: true,
          imageUrl: true
        }
      }
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
  listFavoritesSeriesByUserId,
  postFavorite,
  unpostFavorite
}

export default favoriteRepository;