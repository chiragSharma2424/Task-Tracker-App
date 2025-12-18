import express from 'express'
import { createTask, deleteTask, getTask, updateTask } from '../controllers/task-controller.js';
import userMiddleware from '../middlewares/auth-middleware.js';
const taskRouter = express.Router();

taskRouter.post('/create', userMiddleware, createTask);
taskRouter.delete('/delete/:id', userMiddleware, deleteTask);
taskRouter.get('/get', userMiddleware, getTask);
taskRouter.put('/update/:id', userMiddleware, updateTask);

export default taskRouter;