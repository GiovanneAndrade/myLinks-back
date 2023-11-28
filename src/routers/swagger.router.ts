import { Request, Response, Router } from "express";
 
const swaggerRouter = Router();
swaggerRouter
  .get("/swagger/", (req: Request, res: Response) => {
    return res.sendFile(process.cwd() + "/swagger.json");
  })
  .get("/docs/", (req: Request, res: Response) => {
    return res.sendFile(process.cwd() + "/index.html");
  });

export default swaggerRouter;
