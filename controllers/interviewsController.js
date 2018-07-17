const Interview = require('../models/Interview')

module.exports = {
    index: async (req, res, next) => {
        try {
            const interviews = await Interview.find()
            res.status(200).json(interviews)
            } catch(err) {
                next(err)
            }
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
        try {
            const { interviewId } = req.params
            const interview =  await Interview.findById(interviewId)
            res.status(200).json(interview)
        } catch (err) {
            next(err)
        }
    },

    replaceInterview: async (req, res, next) => {
        try {
            const { interviewId } = req.params
            const newInterview = req.body
            const result =  await Interview.findByIdAndUpdate(interviewId, newInterview, {new: true})
            res.status(200).json(result)
    } catch (err) {
        next(err)
    }
    },

    updateInterview: async (req, res, next) => {
        try {
            const { interviewId } = req.params
            const newInterview = req.body
            const result =  await Interview.findByIdAndUpdate(interviewId, newInterview, {new: true})
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    },

    deleteInterview: async (req, res, next) => {
        try {
            const { interviewId } = req.params
            const interview = await Interview.findById(interviewId)
            const result =  await interview.remove()
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

}