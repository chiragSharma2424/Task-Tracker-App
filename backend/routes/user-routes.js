import express from 'express'
import { logout, signin, signup } from '../controllers/user-controller.js'
const userRouter = express.Router()

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/logout', logout);

export default userRouter;