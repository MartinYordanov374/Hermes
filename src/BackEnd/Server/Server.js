const express = require('express')
const connect_to_db = require('../Mongo/Mongoose/Mongoose')

const start_server = async() => {
    const app = express()

    await connect_to_db()
    
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`express listening on port ${process.env.SERVER_PORT}`)
    })
}

start_server()