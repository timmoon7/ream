const mongoose = require('../controllers/connectdb')
// const bcrypt = require('bcrypt')
const {Schema} = mongoose


const questionSchema = new Schema({
    category: String,
    title: String,
    descritpion: String,
    criteria: [
        { item: String,
          value: Number
        }
    ],
    priority: Number,
    comment: String
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question