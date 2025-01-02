const express = require('express')
const connect_to_db = require('../Mongo/Mongoose/Mongoose')
const server_port = 8000 
const {RegisterUser, FindUserByUsername, LoginUser, DeleteUser, ChangePassword} = require('../Services/Users/UserServices')
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
        //TODO: Upon success create a session object
        res.status(loginResult.status).send(loginResult.message)
    })

    app.delete('/api/service/user/DeleteUser', async(req,res) => {
        //TODO: Allow user deletion only if the current session corresponds to the user's active session in the database
        const sessionData = req.body.username // TODO: Use session data later on
        const result = await DeleteUser(sessionData)
        //TODO: Handle case in which this fails
        res.status(result.status).send(result.message)
    })

    app.patch('/api/service/user/ChangePassword', async(req,res) => {
        //TODO: Allow user updates only if the current session corresponds to the user's active session in the database
        
        const sessionData = req.body.username // TODO: use session data later on
        const newPassword = req.body.newPassword
        const result = await ChangePassword(sessionData, newPassword)
         //TODO: Handle case in which this fails
        res.status(result.status).send(result.message)
    })
    app.listen(server_port, () => {
        console.log(`express listening on port ${server_port}`)
    })
}

start_server()