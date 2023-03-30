import { conflictError, NotFoundError } from "../erros/erros";
import * as allUsers from "../repositores";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;
async function signinService(email: string, password: string) {
  const user = await allUsers.getUserRepository(email);
  if (!user) throw new NotFoundError("Usurario não Cadastrado");

   if (!bcrypt.compareSync(password, user.password))
    throw new NotFoundError("Senha incorreta."); 

  const token = jwt.sign({ id: user.id }, secretKey, {
    expiresIn: "4h",
  });

  const session = await allUsers.sessionsRepository(token, user.id);

  return token;
}
async function signupService(
  name: string,
  email: string,
  hashedPassword: string
) {
  const user = await allUsers.signupRepository(name, email, hashedPassword);
  return user;
}

export { signinService, signupService };
