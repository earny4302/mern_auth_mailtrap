import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/auth", authRoutes);

connectDB();
app.listen(PORT,()=>{
    
    console.log("listening on port: " , PORT);
})
// password:auth_tut