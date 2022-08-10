import { prisma } from "../config/db.js";

async function getRandom(){
  const serie = await prisma.$queryRaw`
    SELECT * FROM series ORDER BY random() LIMIT 1
  `
  return serie;
}

async function getById(id: number){
  const serie = await prisma.serie.findFirst({
    select: {
      imageUrl: true,
      description: true,
      name: true,
      season: {
        select: {
          number: true,
          episode: {
            select: {
              name: true,
              number: true
            }
          }
        }
      }
    }
  });
  return serie;
}

const serieRepository = {
  getRandom,
  getById
}

export default serieRepository;