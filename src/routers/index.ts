import { Router } from "express";
import userRouter from "../routers/user.router";
import linkRouter from "../routers/link.router";
const router = Router();

router.use(userRouter);
router.use(linkRouter);

export default router;
