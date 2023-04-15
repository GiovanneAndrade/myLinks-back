import supertest from "supertest";
import app from "../src/index";
import prisma from "../src/database/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createSessionFactories, createUserFactories } from "./factories/user.factories";
 
const server = supertest(app);
const secretKey: string = process.env.SECRET_KEY!;

beforeAll(async () => {
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
});

afterAll(async () => {
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
});

beforeEach(async () => {
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
});

describe("verifyToken", () => {
  it("should return 401 when no token is provided", async () => {
    const response = await server.get("/link");

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      message: "Token não fornecido.",
    });
  });

  it("should return 401 when an invalid token is provided", async () => {
    const token = jwt.sign({ id: 1 }, "invalid-secret-key");
    const response = await server
      .get("/link")
      .set("authorization", token);

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      message: "Token inválido.",
    });
  });

  it("should return 401 when the user does not exist", async () => {
    const token = jwt.sign({ id: 999 }, secretKey);
    const response = await server
      .get("/link")
      .set("authorization", token);

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      message: "Usuário não encontrado.",
    });
  });
 
  
});
