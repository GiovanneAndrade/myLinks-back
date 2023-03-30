import prisma from "../database/db";

async function linkRepository() {
  const result = await prisma.link.findMany({});

  return result;
}

export { linkRepository };
