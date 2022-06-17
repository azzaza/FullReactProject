const { Router } = require('express')
const router = Router();
const Users = require('../models/user')
const auto = require('../middleware/autification');


const creatMessageUser = (_id, name, message = []) => ({ _id, name, message })

router.get(
    '/',
    auto,   
    async (req, res) => {
        try {
            

            const myUser = await Users.findOne({ _id: req.headers._id })
            

            // console.log(myUser);

            return res.status(201).json({ massage: '!!win!!', messages: myUser.message })
        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }

)


router.get(
    '/create/:Userid',
    auto,
    async (req, res) => {
        try {
            const Another_id = req.params.Userid;

            const myUser = await Users.findOne({ _id: req.headers._id })
            const userAnother = await Users.findOne({ _id: Another_id })

            if (!userAnother) {
                res.status(411).json({ massage: 'There is no user' })
            }

            let my_message = myUser.message.find(e => e._id === Another_id)


            if (!my_message) {
                const name = Another_id === req.headers._id ? 'Saved Messages' : userAnother.name
                const newChat = creatMessageUser(Another_id, name)
                my_message = newChat

                await Users.updateMany({ _id: req.headers._id }, { $set: { message: [...myUser.message, newChat] } })
            }

            return res.status(201).json({ massage: 'win'})
        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }

)







router.get(
    '/:Userid',
    auto,
    async (req, res) => {
        try {
            const Another_page_name = req.params.Userid;

            const myUser = await Users.findOne({ _id: req.headers._id })
            const userAnother = await Users.findOne({ page_name: Another_page_name })
            
            if (!userAnother) {
                res.status(411).json({ massage: 'There is no user' })
            }
            const Another_id=userAnother._id
            
            const my_message = myUser.message.find(e => JSON.stringify(e._id) == JSON.stringify(Another_id))

        // console.log(JSON.stringify(Another_id));
        // TODO: style, send message

            return res.status(201).json({ massage: 'winSS', chat: my_message }) //?
        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }

)
const message = {
    id : 'asdasd',
    message : 'text',

    data : 'time'
}

const creatMessage = (text,) => ({
    myMessage : true,
    text,
    date : Date.now()
})

//const unixTime = 1210981217;
// const date = new Date(unixTime*1000);
// console.log(date.toLocaleDateString("en-US"));

router.post(
    '/',
    auto,
    async (req,res)=>{
        try{
            const my_id=req.headers._id
            const  {id,text}=req.body
            const myUser = await Users.findOne({ _id: my_id })    
            const anotherUser = await Users.findOne({ _id: id })

            if(!anotherUser) return res.status(412).json({ massage: 'There is no adresat' })

            const new_message = creatMessage(text)

            const my_messages=myUser.message.find(e => JSON.stringify(e._id) == JSON.stringify(id)) ;
            my_messages.message.push(new_message)
            await Users.updateMany({ _id: my_id }, { $set: { message: myUser.message } })

            await delete new_message.myMessage

            let another_messages=anotherUser.message.find(e => JSON.stringify(e._id) == JSON.stringify(my_id)) ;
            console.log(another_messages);
            if(!another_messages){
                const name=myUser.name
                const newChat = creatMessageUser(my_id, name)
                another_messages = newChat
               
                await Users.updateMany({ _id: id }, { $set: { message: [...anotherUser.message, newChat] } })
            }
            another_messages.message.push(new_message)
 console.log(another_messages);
            await Users.updateMany({ _id: id }, { $set: { message: anotherUser.message } })

            
            
            return res.status(201).json({ massage: 'win'})
        }
        catch(e){
            res.status(500).json({ massage: 'Error' })
        }
    }
)



module.exports = router

