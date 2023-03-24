import supertest from "supertest";
import app from "../src/index";
//import { createRepositoryFactories } from "./factories/user.factories";
import prisma from "../src/database/db";
const server = supertest(app);

beforeAll(async () => {
  await prisma.user.deleteMany({});
});

afterAll(async () => {
  await prisma.user.deleteMany({});
});

beforeEach(async () => {});
describe("teste aleatorio", () => {
  it("buscar usuarios ", async () => {
    //const user = await createRepositoryFactories();
    const response = await server.get("/user");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject([ ]);
  });
});
