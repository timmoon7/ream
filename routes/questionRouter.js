const express = require('express')
const router = express.Router()
// const Question = require('../models/Question')
const QuestionsController = require('../controllers/QuestionsController')

router.route('/')
    .get(QuestionsController.index)
    .post(QuestionsController.newQuestion);

   
router.route('/:questionId')
    .get(QuestionsController.getQuestion)
    .put(QuestionsController.replaceQuestion)
    .patch(QuestionsController.updateQuestion)
    .delete(QuestionsController.deleteQuestion)

module.exports = router