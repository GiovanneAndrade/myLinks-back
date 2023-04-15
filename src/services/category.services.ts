import { conflictError, NotFoundError } from "../erros/erros";
import * as allCategories from "../repositores";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import metaFetcher from "meta-fetcher";

async function consultCategoryService(userId: string) {
  const catetogy = await allCategories.consultCategoryRepository(userId);
  const newData = catetogy.map((obj) => {
    return {
      id: obj.id,
      name: obj.name,
      links: obj.link.map((linkObj) => linkObj.metaFetcher),
    };
  });
  const allLinks = (await allCategories.linkRepository(userId)) as any;

  newData.push({
    id: 0,
    name: "all categories",
    links:allLinks.map((linkObj:any) => linkObj.metaFetcher),
  });

  return newData;
}

async function createCategoryService(
  name: string,
  userId: string,
  linkId: any
) {
  const catetogy = await allCategories.createCategoryRepository(
    name,
    userId,
    linkId
  );

  return catetogy;
}

async function updateCategoryService(
  listsId: any,
  linkId: any,
  userId: string
) {
  for (let i = 0; i < listsId.length; i++) {
    const catetogy = await allCategories.updateCategoryRepository(
      listsId[i].listId,
      linkId
    );
  }

  return await allCategories.consultCategoryRepository(userId);
}

async function removeLinkToCategoryService(
  listsId: any,
  linkId: any,
  userId: string
) {
  for (let i = 0; i < listsId.length; i++) {
    const catetogy = await allCategories.removeLinkToCategoryRepository(
      listsId[i].listId,
      linkId
    );
  }

  return await allCategories.consultCategoryRepository(userId);
}

async function deleteCategoryService(listsId: string) {
  const catetogy = await allCategories.deleteCategoryRepository(listsId);

  return catetogy;
}
export {
  createCategoryService,
  updateCategoryService,
  removeLinkToCategoryService,
  consultCategoryService,
  deleteCategoryService,
};
