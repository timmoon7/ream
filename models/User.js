const mongoose = require('../controllers/connectdb')
const bcrypt = require('bcrypt')
const {Schema} = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    campus: String,
    first_name: String,
    last_name: String,
    role: String
})

userSchema.statics.isAuthenticUser = async function(email, password) {
    
        const user = await this.findOne({email}).select('password')

        if(!user) {
            return false
        }

        const hash = user.password
        return await bcrypt.compare(password, hash)
}

userSchema.statics.register = async function(user) {
    const {email, password, campus, first_name, last_name, role} = user

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    try {
        const user = await this.create({email, password: hash, campus, first_name, last_name, role})
        const userObj = user.toObject()
        delete userObj.password
        return userObj
    } catch(err) {
        return new Error('Already registered')
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User