import { jest } from '@jest/globals';
import { faker } from '@faker-js/faker';

import { unauthorized, notFound } from './../../src/middlewares/errorHandlerMiddleware';
import commentService from './../../src/services/commentService.js';
import commentRepository from './../../src/repositories/commentRepository.js';
import episodeRepository from './../../src/repositories/episodeRepository.js';
import userRepository from './../../src/repositories/userRepository.js';

describe('Comment Service test suites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Create comment', async () => {
    jest.spyOn(userRepository, 'findUserById').mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, 'getOnlyEpisodeById').mockImplementationOnce(():any => true);
    jest.spyOn(commentRepository, 'createComment').mockImplementationOnce(():any => {});

    const userId = 2;
    const comment = {
      comment: faker.internet.userName(),
      episodeId: 1
    }

    await commentService.createComment(comment, userId);
    expect(commentRepository.createComment).toBeCalled();
  });

  it('Create comment when user doesnt exist', async () => {
    jest.spyOn(userRepository, 'findUserById').mockImplementationOnce(():any => false);

    const userId = 2;
    const comment = {
      comment: faker.internet.userName(),
      episodeId: 1
    }

    const promise = commentService.createComment(comment, userId);
    expect(promise).rejects.toEqual(notFound('Usuário não existe!'));
  });

  it('Create comment when episode doesnt exist', async () => {
    jest.spyOn(userRepository, 'findUserById').mockImplementationOnce(():any => true);
    jest.spyOn(episodeRepository, 'getOnlyEpisodeById').mockImplementationOnce(():any => false);

    const userId = 2;
    const comment = {
      comment: faker.internet.userName(),
      episodeId: 1
    }

    const promise = commentService.createComment(comment, userId);
    expect(promise).rejects.toEqual(notFound('Episódio não existe!'));
  });

  it('List comment', async () => {
    jest.spyOn(episodeRepository, 'getOnlyEpisodeById').mockImplementationOnce(():any => true);
    jest.spyOn(commentRepository, 'listCommentsOfEpisode').mockImplementationOnce(():any  => {});

    const episodeId = 1;

    await commentService.listComments(episodeId);
    expect(commentRepository.listCommentsOfEpisode).toBeCalled();
  });

  it('List comment when episode doesnt exist', async () => {
    jest.spyOn(episodeRepository, 'getOnlyEpisodeById').mockImplementationOnce(():any => false);

    const episodeId = 1;

    const promise = commentService.listComments(episodeId);
    expect(promise).rejects.toEqual(notFound('Episódio não existe!'));
  });

  it('Delete comment', async () => {
    jest.spyOn(userRepository, 'findUserById').mockImplementationOnce(():any => {
      return {
        id: 2
      }
    });
    jest.spyOn(commentRepository, 'findCommentById').mockImplementationOnce(():any => true);
    jest.spyOn(commentRepository, 'deleteCommentById').mockImplementationOnce(():any => {});

    const userId = 2;
    const commentId = 2;

    await commentService.deleteComment(userId, commentId);
    expect(commentRepository.deleteCommentById).toBeCalled();
  });

  it('Delete comment when user doenst exist', async () => {
    jest.spyOn(userRepository, 'findUserById').mockImplementationOnce(():any => false);
    
    const userId = 2;
    const commentId = 2;

    const promise = commentService.deleteComment(userId, commentId);
    expect(promise).rejects.toEqual(notFound('Usuário não existe!'));
  });

  it('Delete comment when comment doenst exist', async () => {
    jest.spyOn(userRepository, 'findUserById').mockImplementationOnce(():any => true);
    jest.spyOn(commentRepository, 'findCommentById').mockImplementationOnce(():any => false);

    const userId = 2;
    const commentId = 2;

    const promise = commentService.deleteComment(userId, commentId);
    expect(promise).rejects.toEqual(notFound('Comentário não existe!'));
  });

  it('Delete comment when the comment isnt from the same user', async () => {
    jest.spyOn(userRepository, 'findUserById').mockImplementationOnce(():any => {
      return {
        userId: 1
      }
    });
    jest.spyOn(commentRepository, 'findCommentById').mockImplementationOnce(():any => true);

    const userId = 2;
    const commentId = 2;

    const promise = commentService.deleteComment(userId, commentId);
    expect(promise).rejects.toEqual(unauthorized('Este comentário não pertence ao usuário'));
  });
});