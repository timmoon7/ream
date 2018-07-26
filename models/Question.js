const mongoose = require('../controllers/connectdb')
const {Schema} = mongoose

const questionSchema = new Schema({
    category: String,
    title: String,
    description: String,
    criteria: Object,
    priority: Number,
    comment: String
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question