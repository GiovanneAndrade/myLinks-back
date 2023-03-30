import { Request, Response } from "express";
import * as allUser from "../services";
import bcrypt from "bcrypt";
import { ifNotFoundError, InternalServerError } from "../erros/erros";

async function linkController(req: Request, res: Response) {
   const userId = req.user.userId;
  try {
    const result = await allUser.linkService();
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}

export { linkController };
