import prisma from "../database/db";

async function linkRepository() {
  const result = await prisma.link.findMany({
    select: {
      metaFetcher: true,
    },
  });

  return result;
}

async function createLinkRepository(metadata: any, userId: string) {
  console.log(metadata.title)
  const result = await prisma.metaFetcher.create({
    data: {
      website: metadata.website,
      title: !metadata.title ? "sem Titulo" : metadata.title,
      banner: !metadata.banner
        ? "https://cdn-icons-png.flaticon.com/512/1695/1695213.png"
        : metadata.banner,
      description: !metadata.description
        ? "Sem Descrição"
        : metadata.description,
      link: {
        create: {
          userId: Number(userId),
          link: metadata.website,
        },
      },
    },
  });

  return result;
}
export { linkRepository, createLinkRepository };
