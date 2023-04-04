import { Request, Response } from "express";
import * as allUser from "../services";
import bcrypt from "bcrypt";
import { ifNotFoundError, InternalServerError } from "../erros/erros";
import metaFetcher from "meta-fetcher";

async function linkController(req: Request, res: Response) {
  const userId = req.user.userId;
  
  try {
    let links = await allUser.linkService();
    return res.send({ userId, links });
  } catch (error: any) {
    return InternalServerError(res);
  }
}

async function createLinkController(req: Request, res: Response) {
  const userId = req.user.userId;
  const link = req.body.link;
  try {
    const result = await allUser.createLinkService(link, userId);
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}

export { linkController, createLinkController };
