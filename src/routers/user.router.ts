import { Request, Response, Router } from "express";
import {
  signinController,
  signupController,
} from "../controllers/user.controller";

const userRouter = Router();
userRouter
  .post("/signin", signinController)
  .post("/signup", signupController)
  .get("/swagger/", (req: Request, res: Response) => {
    return res.sendFile(process.cwd() + "/swagger.json");
  })
  .get("/docs/", (req: Request, res: Response) => {
    return res.sendFile(process.cwd() + "/index.html");
  });

export default userRouter;
