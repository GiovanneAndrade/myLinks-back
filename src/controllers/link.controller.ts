import { Request, Response } from "express";
import * as allUser from "../services";
import bcrypt from "bcrypt";
import { ifNotFoundError, InternalServerError } from "../erros/erros";
import metaFetcher from "meta-fetcher";
import { Links, MetaDados } from "../protocols";

async function linkController(req: Request, res: Response) {
  const userId = req.user.userId;
  const page = req.query;
  const per_page = req.query.per_page;
  
  try {
    let links = await allUser.linkService(userId);
    return res.send({ userId, links });
  } catch (error: any) {
    return InternalServerError(res);
  }
}

async function createLinkController(req: Request, res: Response): Promise<Response<MetaDados>>  {
  const userId = req.user.userId;
  const link = req.body.link as string;
  
  try {
    const result = await allUser.createLinkService(link, userId);
   
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}

async function deleteLinkController(req: Request, res: Response) {
  const userId = req.user.userId;
  const { links }: { links: Links[] } = req.body;

  try {
    const result = await allUser.deleteLinkService(links);
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}
export { linkController, createLinkController, deleteLinkController };
