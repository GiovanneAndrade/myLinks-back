import { Router } from "express";
import { verifyToken } from "@/middlewares/authentication";
import * as controller from "@/controllers";

const categoryRouter = Router();

categoryRouter

  .all("/*", verifyToken)
  
  .get("/category", controller.consultCategoryController)
  .post("/category", controller.createCategoryController)
  .put("/category", controller.updateCategoryController)
  .put("/category/link", controller.removeLinkToCategoryController)
  .delete("/category/:listId", controller.deleteCategoryController);
  
export default categoryRouter;
