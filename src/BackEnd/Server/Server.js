const express = require('express')
const connect_to_db = require('../Mongo/Mongoose/Mongoose')
const server_port = process.env.SERVER_PORT
const start_server = async() => {
    const app = express()

    await connect_to_db()
    
    app.listen(server_port, () => {
        console.log(`express listening on port ${server_port}`)
    })
}

start_server()