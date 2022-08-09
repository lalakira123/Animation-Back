import { prisma } from "../config/db.js";

async function getCategoriesSeries(){
  const categoriesSeries = await prisma.category.findMany({
    select: {
      name: true,
      categorySerie: {
        select: {
          serie: {
            select: {
              id: true,
              imageUrl: true,
              bigImageUrl: true
            }
          }
        }
      }
    }
  });
  return categoriesSeries;
}

const categoryRepository = {
  getCategoriesSeries
}

export default categoryRepository;