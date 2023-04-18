import { Router } from "express";
import {
  createLinkController,
  deleteLinkController,
  linkController,
  updateLinkController,
} from "../controllers/link.controller";

import { verifyToken } from "../middlewares/authentication";

const linkRouter = Router();

linkRouter

  .all("/*", verifyToken)
  .get("/link", linkController)
  .post("/link", createLinkController)
  .delete("/link", deleteLinkController)
  .put("/link", updateLinkController);
export default linkRouter;
