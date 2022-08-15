import { jest } from '@jest/globals';

import { notFound } from './../../src/middlewares/errorHandlerMiddleware';
import serieService from './../../src/services/serieService.js';
import serieRepository from './../../src/repositories/serieRepository.js';

describe('Serie Service test suites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Get Random', async () => {
    jest.spyOn(serieRepository, "getRandom").mockImplementationOnce(():any => {});

    await serieService.getRandom();
    expect(serieRepository.getRandom).toBeCalled();
  });

  it('Get series and seasons', async () => {
    jest.spyOn(serieRepository, "getSerieSeasonAndEpisodeById").mockImplementationOnce(():any => true);

    await serieService.getSerieSeasonAndEpisodeById(1);
    expect(serieRepository.getSerieSeasonAndEpisodeById).toBeCalled();
  });

  it('Get series and seasons when series doesnt exist', async () => {
    jest.spyOn(serieRepository, "getSerieSeasonAndEpisodeById").mockImplementationOnce(():any => false);

    const promise = serieService.getSerieSeasonAndEpisodeById(1);
    expect(promise).rejects.toEqual(notFound('Série não existe!'));
  });
});