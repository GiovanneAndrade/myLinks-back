import { Request, Response } from "express";
import * as allCategories from "../services";
import bcrypt from "bcrypt";
import { ifNotFoundError, InternalServerError } from "../erros/erros";
import metaFetcher from "meta-fetcher";

async function consultCategoryController(req: Request, res: Response) {
  const userId = req.user.userId;

  try {
    const result = await allCategories.consultCategoryService();
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}

async function createCategoryController(req: Request, res: Response) {
  const userId = req.user.userId;
  const { name, linkId } = req.body;
  try {
    const result = await allCategories.createCategoryService(
      name,
      userId,
      linkId
    );
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}

async function updateCategoryController(req: Request, res: Response) {
  const userId = req.user.userId;
  const { linkId, listId } = req.body;

  try {
    const result = await allCategories.updateCategoryService(listId, linkId);
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}
async function removeLinkToCategoryController(req: Request, res: Response) {
  const userId = req.user.userId;
  const { linkId, listId } = req.body;

  try {
    const result = await allCategories.removeLinkToCategoryService(
      listId,
      linkId
    );
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}

async function deleteCategoryController(req: Request, res: Response) {
  const userId = req.user.userId;
  const listId = req.params.listId;

  try {
    const result = await allCategories.deleteCategoryService(listId);
    return res.send(result);
  } catch (error: any) {
    return InternalServerError(res);
  }
}

export {
  createCategoryController,
  updateCategoryController,
  removeLinkToCategoryController,
  consultCategoryController,
  deleteCategoryController
};
