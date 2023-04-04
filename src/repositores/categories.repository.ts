import prisma from "../database/db";

async function createCategoryRepository(name: string, userId:string,linkId:any) {
  const result = await prisma.list.create({
    data: {
      name: name,
      userId: Number(userId),
      link: {
        connect: linkId,
      },
    },
  });

  return result;
}

async function consultCategoryRepository() {
  const result = await prisma.list.findMany({
    where: { userId: 1 },
  });

  return result;
}

async function updateCategoryRepository(listsId: any, linkId: any) {
  const result = await prisma.list.update({
    where: {
      id: listsId,
    },
    data: {
      link: {
        connect: linkId,
      },
    },
  });

  return result;
}
async function removeLinkToCategoryRepository(listsId: any, linkId: any) {
  const result = await prisma.list.update({
    where: {
      id: listsId,
    },
    data: {
      link: {
        disconnect: linkId,
      },
    },
  });

  return result;
}

async function deleteCategoryRepository(listsId: string) {
  const result = await prisma.list.delete({
    where: {
      id: Number(listsId),
    },
  });

  return result;
}

export {
  createCategoryRepository,
  updateCategoryRepository,
  consultCategoryRepository,
  removeLinkToCategoryRepository,
  deleteCategoryRepository
};
