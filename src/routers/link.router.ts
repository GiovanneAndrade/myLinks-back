import { Router } from "express";
import { linkController } from "../controllers/link.controller";

import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.get("/link",verifyToken, linkController);

export default router;
