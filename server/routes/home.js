const { Router } = require('express')
const router = Router();
const Home = require('../models/user')



router.get(
    '/user',
async (req,res)=>{
    try{
        console.log(req.headers);
        const page_name = req.headers.id
        // console.log('_________');
        // console.log(page_name);
        // console.log('_________');
        // const _id =req.body._id
    // const user=User.findOne({id})
    const user= await Home.findOne({page_name })
    // console.log('_________');
    // console.log(user);
    // console.log('_________');
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


// router.post(
//     '/update',
//     async(req,res)=>{
//         try{
            
//         }
//         catch(e){
//             res.status(500).json({ message: 'Error' })
//         }
//     }


// )

module.exports = router