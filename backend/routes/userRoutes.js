const express =require('express')
const {intrest} =require( '../controller/control')
const router=express.Router()

router.get('/',async(req,res)=>{res.send("connected")})

router.post('/add',intrest)


module.exports=router