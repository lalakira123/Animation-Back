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

async function getOnlyEpisodeById(id: number){
  const episode = await prisma.episode.findFirst({
    where: {
      id
    }
  });
  return episode;
}

async function getEpisodeIdBySeasonIdAndNumber(seasonId: number, number: number){
  const nextEpisode = await prisma.episode.findFirst({
    where: {
      seasonId,
      number
    },
    select: {
      id: true
    }
  });
  return nextEpisode;
}

async function updateView(id: number, newView: number){
  await prisma.episode.update({
    where: {
      id
    },
    data: {
      views: newView
    }
  });
}

const episodeRepository = {
  getById,
  getOnlyEpisodeById,
  getEpisodeIdBySeasonIdAndNumber,
  updateView
}

export default episodeRepository;