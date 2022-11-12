const asyncHandler = require('express-async-handler')


const intrest =asyncHandler(async(req,res)=>{
    const {principal,intrest,years}=req.body
    try {
        const total=principal*Math.pow(1+intrest,years)
        res.status(200).json({ total });
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
module.exports = {intrest}