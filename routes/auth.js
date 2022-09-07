import express from "express"
import {signup}   from "../controllers/auth.js"


const router = express.Router()
//Create a User
router.post("/signup", signup)

//create a signup user
router.post("/signin",)

//Google Auth
router.post("/auth",)



export default router