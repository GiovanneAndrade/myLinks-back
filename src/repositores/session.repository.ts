import prisma from "../database/db";

async function sessionsRepository(token:string,userId:number) {
  const result =  await prisma.session.create({
      data: {
        token,
        user: {
          connect: { id: Number(userId) },
        },
      },
    });

  return result;
}
 

export { sessionsRepository };