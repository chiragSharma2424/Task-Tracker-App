import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/user-routes.js'
import connectsDB from './db/db.js'
import taskRouter from './routes/task-routes.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(cookieParser());

// Routes
app.use('/api/users', userRouter);
app.use('/api/task', taskRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "home route"
    })
});

connectsDB()
app.listen(port, () => {
    console.log(`server is started on port ${port}`);
})