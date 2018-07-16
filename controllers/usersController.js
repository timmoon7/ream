const User = require('../models/User')

module.exports = {
    index: async (req, res, next) => {
        const users = await User.find()
        res.status(200).json(users)
    },

    registerUser: async (req, res, next) => {
        const userOptions = req.body
        const user =  await User.register(userOptions)
        res.status(200).json(user)
    },

    getUser: async (req, res, next) => {
        const { userId } = req.params
        const user =  await User.findById(userId)
        res.status(200).json(user)
    },

    replaceUser: async (req, res, next) => {
        const { userId } = req.params
        const newUser = req.body
        const result =  await User.findByIdAndUpdate(userId, newUser)
        res.status(200).json(result)
    },

    updateUser: async (req, res, next) => {
        const { userId } = req.params
        const newUser = req.body
        const result =  await User.findByIdAndUpdate(userId, newUser)
        res.status(200).json(result)
    },

    deleteUser: async (req, res, next) => {
        const { userId } = req.params
        const user = await User.findById(userId)
        const result =  await user.remove()
        res.status(200).json(result)
    }

}