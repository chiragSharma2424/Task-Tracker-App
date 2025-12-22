import express from 'express'
import getAllUsersInfo from '../controllers/dashboard-controller.js';
const dashboardRouter = express.Router()

dashboardRouter.get('/dashboard', getAllUsersInfo)

export default dashboardRouter;