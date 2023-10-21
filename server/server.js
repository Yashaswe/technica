import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/connectDB'

dotenv.config()

connectDB()

const port = process.env.PORT || 3500
const app = express()

app.use(cors())
app.use(express.json())
app.listen(port, () => console.log('listening on port ' + port))
