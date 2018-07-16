const Question = require('../models/Question')

module.exports = {
    index: (req, res, next) => {
        Question.find()
        .then(questions => {
            res.status(200).json(questions)
        })
        .catch(err => {
            next(err)
            // throw new Error(err.message)
        })
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
        const { questionId } = req.params
        const question =  await Question.findById(questionId)
        res.status(200).json(question)
    },

    replaceQuestion: async (req, res, next) => {
        const { questionId } = req.params
        const newQuestion = req.body
        const result =  await Question.findByIdAndUpdate(questionId, newQuestion)
        res.status(200).json(result)
    },

    updateQuestion: async (req, res, next) => {
        const { questionId } = req.params
        const newQuestion = req.body
        const result =  await Question.findByIdAndUpdate(questionId, newQuestion)
        res.status(200).json(result)
    },

    deleteQuestion: async (req, res, next) => {
        const { questionId } = req.params
        const question = await Question.findById(questionId)
        const result =  await question.remove()
        res.status(200).json(result)
    }

}