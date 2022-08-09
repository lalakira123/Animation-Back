import serieRepository from './../repositories/serieRepository.js';

async function getRandom(){
  return await serieRepository.getRandom();
}

const serieService = {
  getRandom
}

export default serieService;