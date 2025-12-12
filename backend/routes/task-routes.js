import express from 'express'
import { createTask, deleteTask, getTask } from '../controllers/task-controller.js';
const taskRouter = express.Router();

taskRouter.post('/create', createTask);
taskRouter.delete('/delete/:id', deleteTask);
taskRouter.get('/get', getTask);

export default taskRouter;