const Question = require('../models/Question')

module.exports = {
    index: async (req, res, next) => {
        try {
            const questions = await Question.find()
            res.status(200).json(questions)
            } catch(err) {
                next(err)
            }
    },

    newQuestion: async (req, res, next) => {
        try {
            const newQuestion = new Question(req.body)
            const question = await newQuestion.save()
            res.status(201).json(question)
        } catch (err) {
            next(err)
        }
    },

    getQuestion: async (req, res, next) => {
        try {
            const { questionId } = req.params
            const question =  await Question.findById(questionId)
            res.status(200).json(question)
        } catch(err) {
            next(err)
        }        
    },

    replaceQuestion: async (req, res, next) => {
        try {
            const { questionId } = req.params
            const newQuestion = req.body
            const result =  await Question.findByIdAndUpdate(questionId, newQuestion, {new: true})
            res.status(200).json(result)
        } catch(err) {
            next(err)
        }
    },

    updateQuestion: async (req, res, next) => {
        try {
            const { questionId } = req.params
            const newQuestion = req.body
            const result =  await Question.findByIdAndUpdate(questionId, newQuestion, {new: true})
            res.status(200).json(result)
        } catch(err) {
            next(err)
        }        
    },

    deleteQuestion: async (req, res, next) => {
        try {
            const { questionId } = req.params
            const question = await Question.findById(questionId)
            const result =  await question.remove()
            res.status(200).json(result)
        } catch(err) {
            next(err)
        }
    }

}