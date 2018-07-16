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

questionSchema.statics.createQuestion = async function(question) {
    
    try {
        const newQuestion = await this.create(question)
        return newQuestion
    } catch(err) {
        return new Error('Failed to insert an question')
    }
}



const Question = mongoose.model('Question', questionSchema)

module.exports = Question