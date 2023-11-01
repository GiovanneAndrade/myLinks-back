import { Router } from "express";
import {
  signinController,
  signupController,
} from "@/controllers";

const userRouter = Router();
userRouter
  .post("/signin", signinController)
  .post("/signup", signupController);
export default userRouter;
