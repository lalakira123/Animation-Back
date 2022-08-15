import { jest } from '@jest/globals';

import { notFound } from './../../src/middlewares/errorHandlerMiddleware';
import favoriteService from './../../src/services/favoriteService.js';
import userRepository from './../../src/repositories/userRepository.js';
import serieRepository from './../../src/repositories/serieRepository.js';
import favoriteRepository from './../../src/repositories/favoriteRepository.js';

describe('Favorite Service test suites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Favorite a serie', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => true);
    jest.spyOn(serieRepository, "getById").mockImplementationOnce(():any => true);
    jest.spyOn(favoriteRepository, "findByUserIdAndSerieId").mockImplementationOnce(():any => false);
    jest.spyOn(favoriteRepository, "postFavorite").mockImplementationOnce(():any => true);

    await favoriteService.favoriteSerie(1, 2);
    expect(favoriteRepository.postFavorite).toBeCalled();
  });

  it('Favorite a serie', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => true);
    jest.spyOn(serieRepository, "getById").mockImplementationOnce(():any => true);
    jest.spyOn(favoriteRepository, "findByUserIdAndSerieId").mockImplementationOnce(():any => true);
    jest.spyOn(favoriteRepository, "unpostFavorite").mockImplementationOnce(():any => true);

    await favoriteService.favoriteSerie(1, 2);
    expect(favoriteRepository.unpostFavorite).toBeCalled();
  });

  it('Favorite a serie when user doesnt exist', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => false);

    const promise = favoriteService.favoriteSerie(1, 2);
    expect(promise).rejects.toEqual(notFound('Usuário não existe!'));
  });

  it('Favorite a serie when serie doesnt exist', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => true);
    jest.spyOn(serieRepository, "getById").mockImplementationOnce(():any => false);

    const promise = favoriteService.favoriteSerie(1, 2);
    expect(promise).rejects.toEqual(notFound('Série não existe!'));
  });

  it('List favorite series', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => true);
    jest.spyOn(favoriteRepository, "listFavoritesSeriesByUserId").mockImplementationOnce(():any => {});

    await favoriteService.listFavoritesSerie(1);
    expect(favoriteRepository.listFavoritesSeriesByUserId).toBeCalled();
  });

  it('List favorite series when user doesnt exist', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => false);

    const promise = favoriteService.listFavoritesSerie(1);
    expect(promise).rejects.toEqual(notFound('Usuário não existe!'));
  });

  it('Check favorite a serie', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => true);
    jest.spyOn(serieRepository, "getById").mockImplementationOnce(():any => true);
    jest.spyOn(favoriteRepository, "findByUserIdAndSerieId").mockImplementationOnce(():any => true);

    await favoriteService.checkFavorite(1, 2);
    expect(favoriteRepository.findByUserIdAndSerieId).toBeCalled();
  });

  it('Check favorite a serie', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => true);
    jest.spyOn(serieRepository, "getById").mockImplementationOnce(():any => true);
    jest.spyOn(favoriteRepository, "findByUserIdAndSerieId").mockImplementationOnce(():any => false);

    await favoriteService.checkFavorite(1, 2);
    expect(favoriteRepository.findByUserIdAndSerieId).toBeCalled();
  });

  it('Check favorite a serie when user doesnt exist', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => false);

    const promise = favoriteService.checkFavorite(1, 2);
    expect(promise).rejects.toEqual(notFound('Usuário não existe!'));
  });

  it('Check favorite a serie', async () => {
    jest.spyOn(userRepository, "findUserById").mockImplementationOnce(():any => true);
    jest.spyOn(serieRepository, "getById").mockImplementationOnce(():any => false);

    const promise = favoriteService.checkFavorite(1, 2);
    expect(promise).rejects.toEqual(notFound('Série não existe!'));
  });
});