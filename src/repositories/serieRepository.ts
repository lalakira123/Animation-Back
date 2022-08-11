import { prisma } from "../config/db.js";

async function getRandom(){
  const serie = await prisma.$queryRaw`
    SELECT * FROM series ORDER BY random() LIMIT 1
  `
  return serie;
}

async function getById(id: number){
  return await prisma.serie.findFirst({
    where: {
      id
    }
  });
}

async function getSerieSeasonAndEpisodeById(id: number){
  const serie = await prisma.serie.findFirst({
    where: {
      id
    },
    select: {
      imageUrl: true,
      description: true,
      name: true,
      season: {
        select: {
          number: true,
          episode: {
            orderBy: {
              number: 'asc'
            },
            select: {
              id: true,
              name: true,
              number: true
            }
          }
        }
        }
      }
    }
  );
  return serie;
}

const serieRepository = {
  getRandom,
  getById,
  getSerieSeasonAndEpisodeById
}

export default serieRepository;