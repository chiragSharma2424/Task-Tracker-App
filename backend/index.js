import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "home route"
    })
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
})