import { Router } from "express"
import { signinController, signupController} from "../controllers/user.controller"
import { verifyToken } from "../middlewares/authentication"
 


const router = Router()
   
router.post('/signin', signinController)
router.post('/signup', signupController)
export default router