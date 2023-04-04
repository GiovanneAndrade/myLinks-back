import { conflictError, NotFoundError } from "../erros/erros";
import * as allUsers from "../repositores";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import metaFetcher from "meta-fetcher";


async function linkService() {
  const result = await allUsers.linkRepository();
  const links = result.map((link) => link.metaFetcher);
  return links;
}


async function createLinkService(link: string, userId: string) {
  link = await metaFetcher(link) as any;
  const { metadata } = link as any;
  const result = await allUsers.createLinkRepository(metadata, userId);

  return result;
}

export { linkService, createLinkService };
