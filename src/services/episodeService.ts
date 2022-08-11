import { notFound } from '../middlewares/errorHandlerMiddleware.js';

import episodeRepository from './../repositories/episodeRepository.js';

async function getById(id: number){
  const episode = await episodeRepository.getById(id);
  if(!episode) throw notFound('Episódio não existe!');

  await episodeRepository.updateView(id, episode.views + 1);

  return episode;
}

async function getNextEpisodeId(id: number){
  const actualEpisode = await episodeRepository.getOnlyEpisodeById(id);
  if(!actualEpisode) throw notFound('Episódio não existe');

  const { seasonId, number } = actualEpisode;
  const nextNumber = number + 1;
  let nextEpisodeId = await episodeRepository.getEpisodeIdBySeasonIdAndNumber(seasonId, nextNumber);
  if(!nextEpisodeId) nextEpisodeId = {...nextEpisodeId, id: -1};

  const previousNumber = number - 1;
  let previousEpisodeId = await episodeRepository.getEpisodeIdBySeasonIdAndNumber(seasonId, previousNumber);
  if(!previousEpisodeId) previousEpisodeId = {...previousEpisodeId, id: -1};

  const nextAndPrevious = {
    previous: previousEpisodeId.id,
    next: nextEpisodeId.id
  }

  return nextAndPrevious;
}

const episodeService = {
  getById,
  getNextEpisodeId
}

export default episodeService;