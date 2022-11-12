const express=require('express')
const userRoutes=require('./routes/userRoutes')
const bodyParser=require("body-parser")



const app=express()

app.use(express.json())
// app.use(bodyParser.json())
app.use('/',userRoutes)




app.listen (2000,console.log("connected"))