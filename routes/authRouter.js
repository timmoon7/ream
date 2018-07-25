const express = require('express')
const JWT = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config() 

const router = express.Router()

router.post('/login', (req, res) => {

    const {email, password} = req.body 

    User.isAuthenticUser(email, password)
    .then(auth => {
        if(auth) {
            const payload = {
                email
            }
        
            const JWT_SECRET = process.env.JWT_SECRET
            const token = JWT.sign(payload, JWT_SECRET)

            res.cookie('access_token', token, {
                secure: false,
                httpOnly: true,
                maxAge: 7200
            })
            
            res.status(200).json({
                message: 'you logged in',
            }) 
        } else {
            res.status(500)
            throw new Error(`Authentication failed`)    
        }
        
    })
    .catch(err => {
        console.info('Authenticaion failed')
        res.status(500)
    })

})

router.post('/register', (req, res) => {
    const { email, password, campus, first_name, last_name, role } = req.body

    User.register(email, password, campus, first_name, last_name, role)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500)
        throw new Error(err.message)
    })

})

module.exports = router