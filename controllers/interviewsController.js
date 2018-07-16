const Interview = require('../models/Interview')

module.exports = {
    index: (req, res, next) => {
        Interview.find()
        .then(interviews => {
            res.status(200).json(interviews)
        })
        .catch(err => {
            next(err)
            // throw new Error(err.message)
        })
    },

    newInterview: async (req, res, next) => {
        try {
            const newInterview = new Interview(req.body)
            const interview = await newInterview.save()
            res.status(201).json(interview)
        } catch (err) {
            next(err)
        }
    },

    getInterview: async (req, res, next) => {
        const { interviewId } = req.params
        const interview =  await Interview.findById(interviewId)
        res.status(200).json(interview)
    },

    replaceInterview: async (req, res, next) => {
        const { interviewId } = req.params
        const newInterview = req.body
        const result =  await Interview.findByIdAndUpdate(interviewId, newInterview)
        res.status(200).json(result)
    },

    updateInterview: async (req, res, next) => {
        const { interviewId } = req.params
        const newInterview = req.body
        const result =  await Interview.findByIdAndUpdate(interviewId, newInterview)
        res.status(200).json(result)
    },

    deleteInterview: async (req, res, next) => {
        const { interviewId } = req.params
        const interview = await Interview.findById(interviewId)
        const result =  await interview.remove()
        res.status(200).json(result)
    }

}