const mongoose = require('../controllers/connectdb')
// const bcrypt = require('bcrypt')
const {Schema} = mongoose


const interviewSchema = new Schema({
    year: Number,
    intake: Number,
    campus: String,
    interviewer: { type: Schema.Types.ObjectId, ref: 'User' },
    date_time: Date,
    duration: Number,
    interviewee: {
        email: String, 
        phone: String,
        first_name: String,
        last_name: String
    },
    scores: Object,
    test_score: Number,
    outcome: String,
    outcome_comment: String,
    student_id: String,
    jr_updated: Boolean,
    hubspot_updated: Boolean,
    enrolment_confirmed: Boolean,
    comment: String

})


interviewSchema.statics.createInterview = async function(interview) {
    
    try {
        const newInterview = await this.create(interview)
        return newInterview
    } catch(err) {
        return new Error('Failed to insert an interview')
    }
}

const Interview = mongoose.model('Interview', interviewSchema)

module.exports = Interview