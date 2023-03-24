import { Router } from "express"
import { getUserController } from "../controllers/user.controller"
 


const router = Router()

router.get('/user', getUserController)


export default router