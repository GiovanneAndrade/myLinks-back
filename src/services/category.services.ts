import { conflictError, NotFoundError } from "../erros/erros";
import * as allCategories from "../repositores";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import metaFetcher from "meta-fetcher";

async function consultCategoryService() {
  const catetogy = await allCategories.consultCategoryRepository();

  return catetogy;
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

async function updateCategoryService(listsId: any, linkId: any) {
  for (let i = 0; i < listsId.length; i++) {
    const catetogy = await allCategories.updateCategoryRepository(
      listsId[i].listId,
      linkId
    );
  }

  return await allCategories.consultCategoryRepository();
}

async function removeLinkToCategoryService(listsId: any, linkId: any) {
  for (let i = 0; i < listsId.length; i++) {
    const catetogy = await allCategories.removeLinkToCategoryRepository(
      listsId[i].listId,
      linkId
    );
  }

  return await allCategories.consultCategoryRepository();
}

async function deleteCategoryService(listsId: string) {
  const catetogy = await allCategories.deleteCategoryRepository(listsId);

  return catetogy
}
export {
  createCategoryService,
  updateCategoryService,
  removeLinkToCategoryService,
  consultCategoryService,
  deleteCategoryService,
};
