import { conflictError, NotFoundError } from "../erros/erros";
import * as allLinks from "../repositores";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import metaFetcher from "meta-fetcher";
import { Link, Links, MetaDados, PageData } from "../protocols";

async function linkService(userId: string) {
  const result = await allLinks.linkRepository(userId);
  const links = result.map((link) => link.metaFetcher) as any;
 
  return links;
}

async function checkLinkValidity(link: string): Promise<boolean> {
  try {
    const response = await fetch(link);
    return response.ok;
  } catch (error) {
    return false;
  }
}


async function createLinkService(link: string, userId: string, listId?: any): Promise<MetaDados> {
 
   
const isLinks = await checkLinkValidity(link)
if (!isLinks) {
  throw new Error("Link inválido");
}
  console.log(isLinks);
 
  const linkMetaDados = (await metaFetcher(link)) as PageData;
  const { metadata } = linkMetaDados as PageData;

  const result = await allLinks.createLinkRepository(metadata, userId);

  if (listId) {
    const consultLink = await allLinks.consultLinkToMeta(result.id);
    const linkToList = await allLinks.updateCategoryRepository(listId, [{ id: consultLink[0].id }]);
  }

  return result;  
}

async function deleteLinkService(links: Links[]): Promise<string> {

  for (let i = 0; i < links.length; i++) {
    const consultLinkId = await allLinks.consultLinkToMeta(Number(links[i].linkId))
    if(consultLinkId.length ===0)  throw new Error("Link não existe");
  } 
  for (let i = 0; i < links.length; i++) {
    await allLinks.deleteLinkRepository(Number(links[i].linkId));
  }

  return "Link(s) deletado(s) com sucesso.";
}
async function updateLinkService(userId: string, editMetaDados: any) {
  const consultLinkId = await allLinks.consultLinkToMeta(Number(editMetaDados.linkId))
  if (consultLinkId.length === 0 || editMetaDados.linkId == null || isNaN(editMetaDados.linkId)) {
    throw new Error("Link não existe");
  }
  
  return await allLinks.updateLinkRepository(userId, editMetaDados);
}
export { linkService, createLinkService, deleteLinkService, updateLinkService };
