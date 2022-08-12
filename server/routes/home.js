const { Router } = require('express')
const router = Router();
const Home = require('../models/user')



router.get(
    '/user',
async (req,res)=>{
    try{

        const page_name = req.headers.id

    const user= await Home.findOne({page_name })

    if(!user){
        return res.status(406).json({
            message: 'User not found'
        })
    }
    
    res.status(201).json({ massage: 'win', user })

    }
    catch(e){
        res.status(500).json({ message: 'Error' })
    }
})



module.exports = router