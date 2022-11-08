const express = require('express')
const router = express.Router()

const AuthController = require('../controller/AuthController')

const StudController = require('../controller/StudController')
const RoleController = require('../controller/RoleController')
const UserController = require('../controller/UserController')
const FileController = require('../controller/FileController')


router.post('/register/user', AuthController.register)    //create user
router.post('/login', AuthController.login)               //login user

router.post('/register/student', StudController.create)  //create student
router.put('/update/student', StudController.update)    //update student

router.post('/register/role', RoleController.create)  //create Role
router.put('/update/role', RoleController.update)    //update Role

router.post('/register/user', UserController.create)  //create User
router.put('/update/user', UserController.update)    //update User


router.post('/register/file', FileController.create)  //create File
router.put('/update/file', FileController.update)    //update File






module.exports = router