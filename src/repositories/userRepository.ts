import { prisma } from './../config/db.js';

import { CreateDataUser } from './../services/userService.js';

async function findUserByEmail(email: string){
  return await prisma.user.findFirst({
    where: {
      email
    }
  });
}

async function findUserById(id: number){
  return await prisma.user.findFirst({
    where: {
      id
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

async function deleteAllUser(){
  await prisma.user.deleteMany();
}

const userRepository = {
  findUserByEmail,
  findUserById,
  createUser,
  deleteAllUser
}

export default userRepository;