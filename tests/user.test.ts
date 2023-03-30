import supertest from "supertest";
import app from "../src/index";
import prisma from "../src/database/db";
import bcrypt from "bcrypt";
import { createUserFactories } from "./factories/user.factories";
const server = supertest(app);

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
describe("Testes de criação de usuários", () => {
  it("deve retornar erro ao tentar criar usuário com email já existente", async () => {
    const body = await createUserFactories();
    const response = await server.post("/signup").send(body);

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: "Error",
      message: "Este email já está em uso.",
    });
  });

  it("deve retornar erro ao tentar enviar um objeto sem email ou password", async () => {
    const response = await server.post("/signup").send();
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: "Error",
      message: "Dados inválidos.",
    });
  });

  it("deve criar um novo usuário com sucesso", async () => {
    const body = {
      name: "teste_signup",
      email: "teste@teste.com",
      password: "123456",
    };

    const response = await server.post("/signup").send(body);
    expect(response.status).toBe(201);
    /*  expect(response.body).toMatchObject({
      token: expect.any(String),
    }); */
  });
});
describe("Testes de criação de usuários", () => {
  it("deve retornar erro ao tentar logar usuário inexistente", async () => {
    const body = {
      name: "teste_signup",
      email: "teste@teste.com",
      password: "123456",
    };
    const response = await server.post("/signin").send(body);

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: "Error",
      message: "Usurario não Cadastrado",
    });
  });

  /*   it("deve retornar erro ao tentar enviar um objeto sem email ou password", async () => {
    const response = await server.post("/signup").send();
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: "Error",
      message: "Dados inválidos.",
    });
  }); */

  it("Deve logar um novo usuário com sucesso", async () => {
  /*   const password = "gege";
    const hashedPassword = await bcrypt.hash(password, 10);
    const body = await prisma.user.create({
      data: {
        email: "gege@gege.com",
        name: "gege",
        password: hashedPassword,
      },
    }); */
    const user = await createUserFactories();
    console.log(user);
    const response = await server
      .post("/signin")
      .send({ email: "gege@gege.com", password: "gege" });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      token: expect.any(String),
    });
  });
});
