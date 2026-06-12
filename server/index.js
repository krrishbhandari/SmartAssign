import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();

// const allowedOrigins = ["http://localhost:5173" ] //Client url to be added after deployment 

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())

const port = process.env.PORT || 8080;

app.get("/" , (req,res) =>{
    res.send("Hello, World!");  
})

app.listen(port , () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
})