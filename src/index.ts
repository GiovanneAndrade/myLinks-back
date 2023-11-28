/// <reference path="./express.d.ts" />

import dotenv from "dotenv";
import router from "@/routers/index";
import cors from "cors";
import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
dotenv.config();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
 


dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

export default app;
