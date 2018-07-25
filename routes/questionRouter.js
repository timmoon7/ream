const express = require('express')
const router = express.Router()
const QuestionsController = require('../controllers/questionsController')

router.route('/')
    .get(QuestionsController.index)
    .post(QuestionsController.newQuestion);
   
router.route('/:questionId')
    .get(QuestionsController.getQuestion)
    .put(QuestionsController.replaceQuestion)
    .patch(QuestionsController.updateQuestion)
    .delete(QuestionsController.deleteQuestion)

module.exports = router