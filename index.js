import express from "express"
import mongoose from  "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/user.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"


dotenv.config()

const connect = () =>{
    mongoose.connect(process.env.MONGOOS).then(() =>{
        console.log("MongoDB connected")
    } ).catch( (error) => {
        console.log(error);
    })
}

const app = express()

app.use(express.json())
app.use("/api/users" , userRoutes)
app.use("/api/auth" , authRoutes)
app.use("/api/videos" , videoRoutes)
app.use("/api/comments" , commentRoutes)

app.listen(3001, ()=>{
    connect()
    console.log("Listening on port 3001");
})