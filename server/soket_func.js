const User = require("./models/user");






module.exports = {
    send_message : async ({my_id,another_id})=> {
      
        const my_user = await User.findOne({_id:my_id})
        const messageUser = my_user.message.find(mes=>mes._id == another_id)

        const message = messageUser.message[messageUser.message.length - 1]
        return message
    }
}
