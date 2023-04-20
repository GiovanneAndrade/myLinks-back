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

async function consultCategoryRepository(userId:string) {
  const result = await prisma.list.findMany({
    where: { userId: Number(userId) },
 
    select:{
     id:true,
     userId:true,
      name:true,
      link:{
        select:{
          metaFetcher:true
        }
      }
    },
    orderBy: { id: 'desc' }
  });

  return result;
}

async function updateCategoryRepository(listId: any, linkId: any) {

  const result = await prisma.list.update({
    where: {
      id: listId,
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
