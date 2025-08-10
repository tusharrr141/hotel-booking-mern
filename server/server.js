import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"

connectDB()

const app=express()
// If your frontend (React, etc.) runs on a different domain/port than your backend, browsers will block requests without CORS.
app.use(cors())  

// MiddleWare

app.use(express.json())
app.use(clerkMiddleware())

//api for clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.get('/',(req,res)=> res.send("API is working fine"))
const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`));