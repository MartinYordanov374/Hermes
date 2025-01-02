const express = require('express')
const connect_to_db = require('../Mongo/Mongoose/Mongoose')
const server_port = process.env.SERVER_PORT 
const {RegisterUser, FindUserByUsername, LoginUser} = require('../Services/Users/UserServices')
const start_server = async() => {
    const app = express()
    app.use(express.json());

    await connect_to_db()

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
        res.status(loginResult.status).send(loginResult.message)
    })
    app.listen(server_port, () => {
        console.log(`express listening on port ${server_port}`)
    })
}

start_server()