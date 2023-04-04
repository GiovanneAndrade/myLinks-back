import { Router } from "express";
import userRouter from "../routers/user.router";
import linkRouter from "../routers/link.router";
import categoryRouter from "../routers/category.router";
const router = Router();

router.use(userRouter);
router.use(linkRouter);
router.use(categoryRouter);
export default router;
