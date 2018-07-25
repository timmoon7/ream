const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    index: async (req, res, next) => {
        try {
        const users = await User.find()
        res.status(200).json(users)
        } catch(err) {
            next(err)
        }
    },

    registerUser: async (req, res, next) => {
        try {
        const userOptions = req.body
        const user =  await User.register(userOptions)
        res.status(200).json(user)
        } catch(err) {
            next(err)
        }
    },

    getUser: async (req, res, next) => {
        try {
        const { userId } = req.params
        const user =  await User.findById(userId)
        res.status(200).json(user)
        } catch(err) {
            next(err)
        }
    },

    replaceUser: async (req, res, next) => {
        try {
        const { userId } = req.params
        const newUser = req.body
        const result =  await User.findByIdAndUpdate(userId, newUser, {new: true})
        res.status(200).json(result)
        } catch(err) {
            next(err)
        }
    },

    updateUser: async (req, res, next) => {
        try {
        const { userId } = req.params
        const newUser = req.body

        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(newUser.password, salt)
        newUser.password = hash

        const user =  await User.findByIdAndUpdate(userId, newUser, {new: true})

        const userObj = user.toObject()
        delete userObj.password
        res.status(200).json(userObj)
        } catch(err) {
            next(err)
        }
    },

    deleteUser: async (req, res, next) => {
        try {
        const { userId } = req.params
        const user = await User.findById(userId)
        const result =  await user.remove()
        res.status(200).json(result)
        } catch(err) {
            next(err)
        }
    }
    
}