const mongoose = require('mongoose')
require('dotenv').config() 

user = process.env.MONGODB_USER
password = process.env.MONGODB_USER_PASSWORD

mongoose.connect( `mongodb+srv://${user}:${password}@cluster0-fumx4.mongodb.net/ream`, { useNewUrlParser: true })
    .then(() => {
        console.info('mongodb db connection established')
    })
    .catch(err => {
        console.error(`mongodb db failure: ${err.message}`)
    })

module.exports = mongoose