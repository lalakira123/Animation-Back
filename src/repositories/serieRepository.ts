import { raw } from "@prisma/client/runtime/index.js";
import { prisma } from "../config/db.js";

async function getRandom(){
  const serie = await prisma.$queryRaw`
    SELECT * FROM series ORDER BY random() LIMIT 1
  `
  return serie;
}

const serieRepository = {
  getRandom
}

export default serieRepository;