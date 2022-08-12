const express = require('express')
const moongose = require('mongoose')
const config = require('config')
// rout
const reg_log_rout= require('./routes/reg_log')
const home_rout=require('./routes/home')
const users_rout=require('./routes/allUsers')
const user_rout=require('./routes/user')
const message_rout=require('./routes/message')
const WebSoketServer = require('ws')
const Socket=require('./soket')
const http=require('http')
// const limit = require('body-parser').json({limit:'4mb'})

// rout

const app = express()
const url = 'http://localhost:';
app.use(express.json({extended : true}))

const PORT = config.get("port") || 5000;
const moongose_link = config.get("moongose")


app.use('/reg/log',reg_log_rout )
app.use('/home',home_rout )
app.use('/users',users_rout)
app.use('/user',user_rout)
app.use('/message',message_rout)


const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));

// WS 


const server = http.createServer(app)
const WS = new WebSoketServer.Server({server : server})
WS.on('connection',Socket.connection)


// WS

// app.use(express.bodyParser({limit: 100000000}))
// app.use(express.json({limit:'4mb'}))
// app.use(express.urlencoded({limit:'4mb'}))
async function start() {
    try {
        await moongose.connect(moongose_link, {
            useNewUrlParser: true
        })
        

        server.listen(PORT, () => {
            console.log('Server started');
        })

    }
    catch(e) {

        process.exit(1)
    }
}

start()


 
