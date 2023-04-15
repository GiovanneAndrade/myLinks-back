import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import prisma from "../../src/database/db";

export async function createLinkFactories(userId: any) {
  const password = 'gege'
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.metaFetcher.create({
    data: {
      website: faker.internet.url(),
      title: faker.lorem.sentence(),
      banner: faker.image.imageUrl(),
      description: faker.lorem.paragraph(),
      link:{
        create:{
          userId:1,
          link:''
        }
      }
    },
  });
}

