import express from "express"

import registerAgency from "../Controller/authController"

const router =express.Router()

router.post("/register",registerAgency)

module.exports=router