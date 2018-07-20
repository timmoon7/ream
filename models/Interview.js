const mongoose = require('../controllers/connectdb')

// const bcrypt = require('bcrypt')
const {Schema} = mongoose
const timeZone = require('mongoose-timezone');

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
    jr_updated: {
        type: Boolean,
        default: false
    },
    hubspot_updated: {
        type: Boolean,
        default: false
    },
    enrolment_confirmed: {
        type: Boolean,
        default: false
    },
    comment: String

})

interviewSchema.plugin(timeZone, { paths: 'date_time' });

const Interview = mongoose.model('Interview', interviewSchema)

module.exports = Interview