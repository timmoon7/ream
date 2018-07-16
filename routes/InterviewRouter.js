const express = require('express')
const Interview = require('../models/Interview')
const router = express.Router()

router.get('/', (req, res) => {
    Interview.find()
    .then(interviews => {
        res.status(200).json(interviews)
    })
    .catch(err => {
        throw new Error(err.message)
    })

})

router.post('/', (req, res) => {
    const interview = req.body

    Interview.createInterview(interview)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500)
        throw new Error(err.message)
    })

})

module.exports = router