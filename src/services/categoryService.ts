import categoryRepository from './../repositories/categoryRepository.js';

async function getCategoriesSeries(){
  return await categoryRepository.getCategoriesSeries();
}

const categoryService = {
  getCategoriesSeries
}

export default categoryService;