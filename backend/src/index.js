import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv"
import { connectdb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";
import cors from "cors"

dotenv.config();
const app = express();
const port = process.env.PORT; 

app.use(express.json({ limit: '10mb' }));          // front-end sends JSON
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
})
);
app.use("/api/auth", authRoutes)
//end point for messages
app.use("/api/messages", messageRoute)

app.listen(port, ()=> {
    console.log(`Server is running in localhost:${port}`);
    connectdb();
});