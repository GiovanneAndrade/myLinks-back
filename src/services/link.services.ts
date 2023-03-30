import { conflictError, NotFoundError } from "../erros/erros";
import * as allUsers from "../repositores";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function linkService() {
  const result = await allUsers.linkRepository();

  return result;
}

export { linkService };
