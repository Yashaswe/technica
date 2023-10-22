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

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/user', userRoutes)
app.use('/story', storyRoutes)
app.use('/', () => console.log('reached'))

app.listen(port, () => console.log('listening on port ' + port))
