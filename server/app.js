import express from "express";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/errorMiddleware.js";
import userRouter from "./routers/userRouter.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.use("/api/v1" , userRouter)

app.use(errorMiddleware);
export default app;
