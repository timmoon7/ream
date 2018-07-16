const express = require('express')
const router = express.Router()
// const Question = require('../models/Question')
const UsersController = require('../controllers/usersController')

router.route('/')
    .get(UsersController.index)
    .post(UsersController.registerUser);

   
router.route('/:userId')
    .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser)
    .delete(UsersController.deleteUser)

module.exports = router