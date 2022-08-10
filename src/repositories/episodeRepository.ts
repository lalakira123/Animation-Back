import { prisma } from "../config/db.js";

async function getById(id: number){
  const episode = await prisma.episode.findFirst({
    where: {
      id
    },
    select: {
      id: true,
      number: true,
      name: true,
      views: true,
      season: {
        select: {
          number: true,
          serie: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });
  return episode;
}

const episodeRepository = {
  getById
}

export default episodeRepository;