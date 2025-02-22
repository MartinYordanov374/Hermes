const mongoose = require('mongoose')

// const connectionString = process.env.MONGO_URI
// Use the one below for local testing purposes
const connectionString = 'mongodb://0.0.0.0:27017/hermes-db' 

module.exports = async() => {
    try{
        
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Successfully connected with the database')

        mongoose.connection.on('error', (err) => {
            console.log('A database error occured')
            console.log(err)
        })
    }
    catch(err)
    {
        console.log('An error occured while attempting to connect to the database.')
        console.log(err)
        process.exit(1)
    }
}