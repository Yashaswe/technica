import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/connectDB.js'
import openaiRouter from './routes/openaiRoutes.js'
import speechRouter from './routes/speechRoutes.js'

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
app.use('/generateStory', openaiRouter)
app.use('/generateVoice', speechRouter)
app.listen(port, () => console.log('listening on port ' + port))
