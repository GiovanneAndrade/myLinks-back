import prisma from "../database/db";
import { User } from "../protocols";

async function getUserRepository(email:string){
  const result = await prisma.user.findUnique({ where: { email: email } });
 
  return result;
}
async function signupRepository( name:string, email:string, hashedPassword:string ): Promise<User>{
  const result = await prisma.user.create({
    data: {
      name,
      email:email,
      password: hashedPassword,
    },
  });

  return result;
}

export { getUserRepository, signupRepository };
