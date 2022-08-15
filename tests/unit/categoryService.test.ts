import { jest } from '@jest/globals';

import categoryService from './../../src/services/categoryService.js';
import categoryRepository from './../../src/repositories/categoryRepository.js';

describe('Category Service test suites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('Get categories series', async () => {
    jest.spyOn(categoryRepository, "getCategoriesSeries").mockImplementationOnce(():any => {});

    await categoryService.getCategoriesSeries();
    expect(categoryRepository.getCategoriesSeries).toBeCalled();
  });
})