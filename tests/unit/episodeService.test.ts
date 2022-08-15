import { jest } from '@jest/globals';

import { notFound } from './../../src/middlewares/errorHandlerMiddleware';
import episodeService from './../../src/services/episodeService.js';
import episodeRepository from './../../src/repositories/episodeRepository.js';

describe('Episode Service test suites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Get episode by id', async () => {
    jest.spyOn(episodeRepository, "getById").mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, "updateView").mockImplementationOnce(():any => {});

    await episodeService.getById(1);
    expect(episodeRepository.updateView).toBeCalled();
  });

  it('Get episode by id when the espisode doesnt exist', async () => {
    jest.spyOn(episodeRepository, "getById").mockImplementationOnce(():any => false);

    const promise = episodeService.getById(1);
    expect(promise).rejects.toEqual(notFound('Episódio não existe!'));
  });

  it('Get next and previous episode', async () => {
    jest.spyOn(episodeRepository, "getOnlyEpisodeById").mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, "getEpisodeIdBySeasonIdAndNumber").mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, "getEpisodeIdBySeasonIdAndNumber").mockImplementationOnce(():any => true);

    await episodeService.getNextEpisodeId(1);
    expect(episodeRepository.getEpisodeIdBySeasonIdAndNumber).toBeCalled();
  });

  it('Get next and previous episode when episode doesnt exist', async () => {
    jest.spyOn(episodeRepository, "getOnlyEpisodeById").mockImplementationOnce(():any => false);

    const promise = episodeService.getNextEpisodeId(1);
    expect(promise).rejects.toEqual(notFound('Episódio não existe'));
  });

  it('Get next and previous episode', async () => {
    jest.spyOn(episodeRepository, "getOnlyEpisodeById").mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, "getEpisodeIdBySeasonIdAndNumber").mockImplementationOnce(():any => false);

    await episodeService.getNextEpisodeId(1);
    expect(episodeRepository.getEpisodeIdBySeasonIdAndNumber).toBeCalled();
  });

  it('Get next and previous episode', async () => {
    jest.spyOn(episodeRepository, "getOnlyEpisodeById").mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, "getEpisodeIdBySeasonIdAndNumber").mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, "getEpisodeIdBySeasonIdAndNumber").mockImplementationOnce(():any => false);

    await episodeService.getNextEpisodeId(1);
    expect(episodeRepository.getEpisodeIdBySeasonIdAndNumber).toBeCalled();
  });
});