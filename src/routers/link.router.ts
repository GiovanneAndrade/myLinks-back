import { Router } from "express";
import {
  createLinkController,
  deleteLinkController,
  linkController,
} from "../controllers/link.controller";

import { verifyToken } from "../middlewares/authentication";

const linkRouter = Router();

linkRouter

  .all("/*", verifyToken)
  .get("/link", linkController)
  .post("/link", createLinkController)
  .delete("/link", deleteLinkController);

export default linkRouter;
