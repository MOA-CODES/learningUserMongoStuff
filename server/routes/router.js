const express = require('express')
const router = express.Router()

const AuthController = require('../controller/AuthController')
const StudController = require('../controller/StudController')

router.post('/register/user', AuthController.register)    //create user
router.post('/login', AuthController.login)               //login user

router.post('/register/student', StudController.create)  //create student
router.put('/update/student', StudController.update)    //update student



module.exports = router