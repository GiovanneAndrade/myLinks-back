import { Router } from "express";
import userRouter from "../routers/user.router";
import linkRouter from "../routers/link.router";
import categoryRouter from "../routers/category.router";
import swaggerRouter from "../routers/swagger.router";;
const router = Router();

router.use(swaggerRouter);
router.use(userRouter);
router.use(linkRouter);
router.use(categoryRouter);


export default router;
