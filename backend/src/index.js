import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv"
import { connectdb } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT; 

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)

app.listen(port, ()=> {
    console.log(`Server is running in localhost:${port}`);
    connectdb();
});