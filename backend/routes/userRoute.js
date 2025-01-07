import express from "express"
import { handleUserRegister, handleUserLogin, handleAdminLogin, requestPasswordReset, resetPassword } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post('/register', handleUserRegister)
userRouter.post('/login', handleUserLogin)
userRouter.post('/requestreset', requestPasswordReset)
userRouter.post('/resetpassword', resetPassword)
userRouter.post('/admin', handleAdminLogin)

export default userRouter