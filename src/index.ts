import  express  from "express";
import dotenv from 'dotenv';
import userRouter from './routers/user.router'

const app = express();
app.use(express.json());
dotenv.config();

app.use(userRouter)




export default app

 