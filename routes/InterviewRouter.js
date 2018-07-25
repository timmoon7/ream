const express = require('express')
const router = express.Router()
const InterviewsController = require('../controllers/interviewsController')

router.route('/')
    .get(InterviewsController.index)
    .post(InterviewsController.newInterview);

router.route('/:interviewId')
    .get(InterviewsController.getInterview)
    .put(InterviewsController.replaceInterview)
    .patch(InterviewsController.updateInterview)
    .delete(InterviewsController.deleteInterview)

module.exports = router