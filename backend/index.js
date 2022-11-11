const express=require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')

const app = express()

app.use(express.json())
dotenv.config();
connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server Connected PORT ${PORT}`))

