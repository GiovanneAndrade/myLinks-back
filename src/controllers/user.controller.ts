import { Request, Response } from "express";
import * as allUser from "../services";
import bcrypt from "bcrypt";
import {
  ifNotFoundError,
  InternalServerError,
  NotFoundError,
} from "../erros/erros";

async function signinController(req: Request, res: Response) {
  const { email, password } = req.body;
  //const userId = req.user.userId;

  try {
    const result = await allUser.signinService(email, password);
    return res.json({ token: result });
  } catch (error: any) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);

    return InternalServerError(res);
  }
}

async function signupController(req: Request, res: Response) {
  const {
    name,  
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;
  
  try {
    if (!email || !password) throw new NotFoundError("Dados inválidos.");
    const hashedPassword = await bcrypt.hash(password, 10);

    await allUser.signupService(name, email, hashedPassword);
    return res.sendStatus(201);
  } catch (error) {
    if (error.statusCode === 404) return ifNotFoundError(res, error);
    if (error.code === "P2002") {
      return res
        .status(400)
        .json({ error: "Error", message: "Este email já está em uso." });
    }
    return InternalServerError(res);
  }
}

export { signinController, signupController };
