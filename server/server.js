import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/connectDB.js'
import userRoutes from './routes/userRoutes.js'
import storyRoutes from './routes/storyRoutes.js'
import cookieParser from 'cookie-parser'

dotenv.config()

connectDB()

const port = process.env.PORT || 3500
const app = express()

app.all('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/user', userRoutes)
app.use('/story', storyRoutes)

app.listen(port, () => console.log('listening on port ' + port))
