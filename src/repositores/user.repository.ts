import prisma from "../database/db";

async function getUserRepository() {
  const result = await prisma.user.findMany({});

  return result;
}

export { getUserRepository };
