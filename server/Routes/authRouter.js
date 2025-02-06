import express from "express"

import registerAgency from "../Controller/authController.js"

const router =express.Router()

router.post("/register",registerAgency)

export default router