import userRepository from "../repositories/userRepository.js";

async function resetDatabase(){
  await userRepository.deleteAllUser();
}

const testService = {
  resetDatabase
}

export default testService;