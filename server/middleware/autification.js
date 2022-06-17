
const jwt = require('jsonwebtoken')
const config = require('config')


module.exports =async (req,res,next) => {

    try{


        const token = req.headers.autorization;
       
        const dataUser = await jwt.verify(token,config.get('slovo'),(err,ans)=>({err,ans}))
        // console.log(dataUser.err);
         if(dataUser.err) return res.status(400).json({
             message : 'token not life'
         })
      
             next()
        
        

    } catch(e){
        res.status(400).json({massage : "no token"})
    }

}
