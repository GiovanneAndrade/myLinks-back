import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import prisma from "../../src/database/db";
import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY;
export async function createUserFactories() {
  const password = 'gege'
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      email: "gege@gege.com.br",
      name: "gege",
      password: hashedPassword,
    },
  });
}
 

export async function createSessionFactories(userId:any) {
  const token = jwt.sign({ id: userId }, secretKey);
 
  return prisma.session.create({
    data: {
      token:  token,
      userId:Number(userId)
    },
  });
}
