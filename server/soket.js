// const WebSoketServer = require('ws')

const { send_message } = require("./soket_func")



const Users = []

const P = {
    ADD_ID_S: 'ADD_ID_S',
    TEST: 'TEST',
    SEND: 'SEND',
    SOKET_ADD: 'SOKET_ADD',
}

const m = {
    status: '',
    data: null || {},
    params: 'ADD_ID'
}


const creatM = (params, data = null, status = 200) => {
    return JSON.stringify({ status, data, params })
}

const message = async (data, req, client) => {
    const D = JSON.parse(data.toString())

    switch (D.params) {
        case P.ADD_ID_S:
            client.paramsUser = {};
            client.paramsUser._id = D.id;

            return client.send(creatM(P.ADD_ID_S))
        case P.SEND:

            const m = {
                message: await send_message(D.data),
                id: ''
            }

            client.send(creatM(P.SOKET_ADD, { ...m, id: D.data.another_id }))

            const another_user = await findUser(D.data.another_id)

            if (D.data.another_id != D.data.my_id) {

                delete m.message.myMessage
                another_user && another_user.send(creatM(P.SOKET_ADD, { ...m, id: D.data.my_id }))
            }





            return {}

    }

}



const findUser = (_id) => Users.find(client => {

    return client.paramsUser._id === _id

})





const connection = (client, req) => {

    Users.push(client)

    client.on('message', (data) => message(data, req, client))
    client.on('close', () => {
        const position = Users.indexOf(client);
        Users.splice(position, 1)

    })


}



module.exports = { connection }
