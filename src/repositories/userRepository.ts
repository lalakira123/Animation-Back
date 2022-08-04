import { prisma } from './../config/db.js';

import { CreateDataUser } from './../services/userService.js';

async function findUserByEmail(email: string){
  return await prisma.user.findFirst({
    where: {
      email
    }
  });
}

async function createUser(user: CreateDataUser){
  const { name, password, email, imageUrl } = user;
  await prisma.user.create({
    data: {
      name,
      password,
      email,
      imageUrl
    }
  });
}

const userRepository = {
  findUserByEmail,
  createUser
}

export default userRepository;