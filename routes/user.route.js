const express = require("express")
const { login, signUp } = require("../controllers/user.controller")


const userRouter = express.Router()

// for login
userRouter.post("/login", login)

// for signup
userRouter.post("/register", signUp)

module.exports = {
    userRouter
}