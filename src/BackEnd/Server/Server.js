const express = require('express')
const express_session = require('express-session')
const mongodb_store = require('connect-mongodb-session')(express_session)
const connect_to_db = require('../Mongo/Mongoose/Mongoose')
const server_port = 8000 
const {RegisterUser, FindUserByUsername, LoginUser, DeleteUser, ChangePassword} = require('../Services/Users/UserServices')
const { GetConversationByParticipants,DeleteConversation,CreateConversation } = require('../Services/Conversations/ConversationServices')
const start_server = async() => {
    const app = express()
    app.use(express.json());
    

    await connect_to_db()

    var store = new mongodb_store({
        uri: 'mongodb://0.0.0.0:27017/hermes-db', //TODO: Use the docker-compose service later
        collection: 'user-sessions'
      });

    app.use(express_session({
        secret: 'secret',
        store: store,
        saveUninitialized: false,
        resave: false,
        cookie: {
            sameSite: false,
            secure: false,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true,
            path: '/'
            },
    }))
    
    app.post(`/api/service/user/RegisterUser`, async(req,res) => {
        const username = req.body.username
        const password = req.body.password
        const confirmationPassword = req.body.confirmationPassword
        let targetUser = await FindUserByUsername(username.toLowerCase())
        if(targetUser.DoesUserExist === true)
        {
            res.status(targetUser.status).send(targetUser.message);
        }
        else
        {
            let registerUser = await RegisterUser(username,password,confirmationPassword)
            res.status(registerUser.status).send(registerUser.message)
        }

    })

    app.post('/api/service/user/LoginUser', async(req,res) => {
        const username = req.body.username.toLowerCase()
        const password = req.body.password
        const loginResult = await LoginUser(username, password)
        //TODO: Use a UUID or something similar later on
        req.session.userId = loginResult.userId
        req.session.save()

        res.status(loginResult.status).send(loginResult.message)
    })

    app.delete('/api/service/user/DeleteUser', async(req,res) => {
        //TODO: Consider more secure approaches to that
        if(req.session.userId == req.body.userId)
        {
            const result = await DeleteUser(req.session.userId)
            req.session.destroy((err)=> {
                console.log(err)
            })
            res.status(result.status).send(result.message)
        }
        else
        {
            res.status(403).send('You cannot perform this action!')
        }
    })

    app.post('/api/service/user/Logout', async(req,res) => {
        //TODO: Consider more secure approaches to that
        if(req.session.userId)
        {
            req.session.destroy((err)=> {
                console.log(err)
            })
            res.status(200).send('Logout successful')
        }
        else
        {
            res.status(403).send('You have to be logged in, so that you can log out')
        }
        
       
    })

    app.patch('/api/service/user/ChangePassword', async(req,res) => {
        //TODO: Allow user updates only if the current session corresponds to the user's active session in the database
        
        if(req.session.userId == req.body.userId)
        {
            const newPassword = req.body.newPassword
            const result = await ChangePassword(req.session.userId, newPassword)
            res.status(result.status).send(result.message)
        }
        else
        {
            res.status(403).send('You cannot perform this action!')
        }
        
    })


    app.post(`/api/service/conversation/CreateConversation`, async(req,res) => {
        //TODO: Remove this endpoint and only fetch create conversation upon sending a message.
        const senderUserId = req.session.userId
        const receiverUserId = req.body.receiverUserId
        let targetConversation = await CreateConversation(senderUserId, receiverUserId)
        res.status(targetConversation.status).send({message:targetConversation.message})
    })

    app.listen(server_port, () => {
        console.log(`express listening on port ${server_port}`)
    })
}

start_server()