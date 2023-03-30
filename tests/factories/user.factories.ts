import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import prisma from "../../src/database/db";

export async function createUserFactories() {
  const password = 'gege'
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      email: "gege@gege.com",
      name: "gege",
      password: hashedPassword,
    },
  });
}
