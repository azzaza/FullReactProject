const { Router } = require('express')
const router = Router();
const Users = require('../models/user')
const auto = require('../middleware/autification');

const creatMessageUser = (_id, name, page_name, message = []) => ({ _id, name, page_name, message,textMessage : '' })

router.get(
    '/',
    auto,
    async (req, res) => {
        try {
            const limit = 10;

            const myUser = await Users.findOne({ _id: req.headers._id })


           

            const newMessage = myUser.message
                .filter((user, i) => limit > i)
                .map(user => {
                    delete user.message
                    return user
                })

            return res.status(201).json({ massage: '!!win!!', messages: newMessage })
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
                const newChat = creatMessageUser(Another_id, name, userAnother.page_name)
                my_message = newChat

                await Users.updateMany({ _id: req.headers._id }, { $set: { message: [...myUser.message, newChat] } })
            }

            return res.status(201).json({ massage: 'win' , chat:my_message})
        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }

)


router.get(
    '/user/:Userid',
    auto,
    async (req,res)=>{
        try{
            const another_id = req.params.Userid;
            const myUser = await Users.findOne({ _id: req.headers._id })
            
            const chat=myUser.message.find(e=>e._id==another_id)
            
            res.status(201).json({message:'win',chat})
        }   
        catch(e){
            res.status(500).json({ massage: 'Error' })
        }
    }
)











router.get(
    '/message/:Userid',
    auto,
    async (req, res) => {
        try {
            const limit = 50 //!

            const another_page_name = req.params.Userid;
            const my_id = req.headers._id
            const myUser = await Users.findOne({ _id: my_id })
            const userAnother = await Users.findOne({ page_name: another_page_name })
            const another_id = userAnother._id

            const mesages = myUser.message.find(e => {

                return JSON.stringify(e._id) === JSON.stringify(another_id)

            })
            const mesages_lim = mesages.message.filter((e,i)=>i<limit)
 

            return res.status(201).json({ massage: 'winSS', chat: { message: mesages_lim, _id: mesages._id,textMessage:mesages.textMessage } })
        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }
)



const message = {
    id: 'asdasd',
    message: 'text',

    data: 'time'
}

const creatMessage = (text, id) => ({
    myMessage: true,
    text,
    date: Date.now(),
    _id: id
})



router.post(
    '/',
    auto,
    async (req, res) => {
        try {
            const my_id = req.headers._id
            const { id, text, messageID } = req.body
            const myUser = await Users.findOne({ _id: my_id })
            const anotherUser = await Users.findOne({ page_name: id })
            const another_id = anotherUser._id

            if (!anotherUser) return res.status(412).json({ massage: 'There is no adresat' })

            const new_message = creatMessage(text, messageID)

            const my_messages = myUser.message.find(e => JSON.stringify(e._id) == JSON.stringify(another_id));
            my_messages.message.push(new_message)
            await Users.updateMany({ _id: my_id }, { $set: { message: myUser.message } })

            await delete new_message.myMessage

            let another_messages = anotherUser.message.find(e => JSON.stringify(e._id) == JSON.stringify(my_id));

            if (!another_messages) {
                const name = myUser.name
      
                const newChat = creatMessageUser(my_id, name, myUser.page_name)
                another_messages = newChat
                another_messages.message.push(new_message)
                await Users.updateMany({ _id: another_id }, { $set: { message: [...anotherUser.message, newChat] } })
            }
            else {
                another_messages.message.push(new_message)
                await Users.updateMany({ _id: another_id }, { $set: { message: anotherUser.message } });

            }



            return res.status(201).json({ massage: 'win', my_id, another_id })
        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }
)








router.post(
    '/post_id',
    auto,
    async (req, res) => {

        try {
           
            const id_arr = req.body
            const users_arr = []

            for (const id of id_arr) {
                const user = await Users.findOne({ _id: id })

                if (!user) continue

                users_arr.push({ name: user.name, page_name: user.page_name, _id: user._id })
            }

            return await res.status(201).json({ massage: 'win', users: users_arr })
        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }




    }
)


router.post(
    '/remove_message',
    auto,
    async(req,res)=>{
        try{
            const remove_arr=req.body.remove
            const another_id = req.body.id
            const my_id = req.headers._id
            const myUser = await Users.findOne({ _id: my_id })
            const chat = myUser.message.find(e => e._id == another_id)


            const newMessage = chat.message.filter(mes=>false == remove_arr.includes(mes._id))
            
            const newAllMessage = myUser.message.map(chat => {
                if(chat._id == another_id ) return {...chat, message : newMessage }
                return chat
            })
            
            await Users.updateMany({ _id: my_id }, { $set: { message: newAllMessage } })



            return await res.status(201).json({ massage: 'winad', page_name:req.body.page_name})
        }
        catch(e){
            res.status(500).json({ massage: 'Error' })
        }
    }
)

router.post(//remove chat
    '/remove',
    auto,
    async (req, res) => {
        try {
           
            const another_id = req.body.id
            const my_id = req.headers._id
            const myUser = await Users.findOne({ _id: my_id })
            
            const changed_arr = myUser.message.filter(e => e._id != another_id)
         
            await Users.updateMany({ _id: my_id }, { $set: { message: changed_arr } })

            return await res.status(201).json({ massage: 'win123' })

        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }
)

router.post(
    '/textMessage',
    auto,
    async (req,res)=>{
        try{

        
        const text=req.body.text
        const another_id=req.body._id
        const my_id=req.headers._id

        const myUser= await Users.findOne({_id:my_id})
        
        const chat = myUser.message.find(e=>e.page_name==another_id)
        chat.textMessage=text
        
        await Users.updateMany({_id:my_id},{$set:{message:myUser.message} })


        return await res.status(201).json({ massage: 'win'})
        }
        catch(e) {
            res.status(500).json({ massage: 'Error' })
        }
    }
)

module.exports = router

