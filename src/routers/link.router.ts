import { Router } from "express";
import {
  createLinkController,
  linkController,
} from "../controllers/link.controller";

import { verifyToken } from "../middlewares/authentication";

const linkRouter = Router();

linkRouter
  .all("/*", verifyToken)
  .get("/link", linkController)
  .post("/link", createLinkController);
export default linkRouter;
