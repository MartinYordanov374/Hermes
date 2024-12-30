const express = require('express')
const connect_to_db = require('../Mongo/Mongoose/Mongoose')


const start_server = async() => {
    const app = express()

    await connect_to_db()
    
    app.listen(5000, () => {
        console.log('express listening on port 8000')
    })
}

start_server()