import { Router } from "express";
import { verifyToken } from "../middlewares/authentication";
import {
  consultCategoryController,
  createCategoryController,
  deleteCategoryController,
  removeLinkToCategoryController,
  updateCategoryController,
} from "../controllers";

const categoryRouter = Router();
categoryRouter
  .all("/*", verifyToken)
  .get("/category", consultCategoryController)
  .post("/category", createCategoryController)
  .put("/category", updateCategoryController)
  .put("/category/link", removeLinkToCategoryController)
  .delete("/category/:listId", deleteCategoryController);
export default categoryRouter;
