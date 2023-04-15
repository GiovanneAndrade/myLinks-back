import prisma from "../database/db";
import { MetaDados } from "../protocols";

async function linkRepository(userId:string) {
  
  const result = await prisma.link.findMany({
    where:{
      userId:Number(userId)
    },
    select: {
      metaFetcher: {
        select:{
          id:true,
          banner:true,
          description:true,
          createdAt:true,
           website:true,
           title:true,
           link:{
            select:{
              list:true
            }
           }
        }
      }
    },
   
  });
  return result;
}

async function linkCountRepository(userId:string) {
  
  const count = await prisma.link.count({
    where:{
      userId:1
    }
  })
      
   
 
  return count;
}

async function createLinkRepository(metadata: any, userId: string): Promise<MetaDados> {
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

async function deleteLinkRepository(linkId:number) {
  const deleteLink = await prisma.link.delete({
    where:{
        id:Number(linkId)
    }
  });
  const deleteMetaFetcher = await prisma.metaFetcher.delete({
    where:{
        id: deleteLink.metaFetcherId
    }
  });
  return 'deleted';
}
export { linkRepository, createLinkRepository, deleteLinkRepository };
