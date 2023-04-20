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

async function createLinkService( link: string,  userId: string, listId:any): Promise<MetaDados> {
  const linkMetaDados = (await metaFetcher(link)) as PageData;
  const { metadata } = linkMetaDados as PageData;
  const result = await allLinks.createLinkRepository(metadata, userId);

  if(listId){
    const consultLink = await allLinks.consultLinkToMeta(result.id);
    const linkToList = await allLinks.updateCategoryRepository(listId, [{ id: consultLink[0].id }]);
  }


  return result;  
}
async function deleteLinkService(links: Links[]): Promise<string> {
  for (let i = 0; i < links.length; i++) {
    await allLinks.deleteLinkRepository(Number(links[i].linkId));
  }

  return "ok";
}
async function updateLinkService(userId: string, editMetaDados: any) {
 
  return await allLinks.updateLinkRepository(userId, editMetaDados);
}
export { linkService, createLinkService, deleteLinkService, updateLinkService };
