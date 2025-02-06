import express from "express"
const app= express()
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

import authRoter from "./Routes/authRouter.js"

dotenv.config()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api",authRoter)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log(console.log("Mongodb connected successfully😎")))

.catch((error)=>console.log(error,"error occured while connecting mongodb🤷‍♀️"))
const PORT= process.env.PORT || 3001
app.listen((PORT),()=>console.log(`Server is running on port ${PORT}`)
)