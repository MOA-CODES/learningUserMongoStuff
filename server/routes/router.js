const express = require('express')
const route = express.Router()

const services = require('../services/render')


const AuthController = require('../controller/AuthController')

const StudController = require('../controller/StudController')
const RoleController = require('../controller/RoleController')
const UserController = require('../controller/UserController')
const FileController = require('../controller/FileController')

route.get('/',services.homeRoutes);





route.post('/register/user1', AuthController.register)    //create user
route.post('/login', AuthController.login)               //login user

// router.post('/register/student',upload.upload.single('image'),StudController.create)  //create student
route.post('/register/student',StudController.create)  //create student
route.put('/update/student', StudController.update)    //update student
route.post('/filter/student', StudController.filter)    //update student


route.post('/register/role', RoleController.create)  //create Role
route.put('/update/role', RoleController.update)    //update Role

route.post('/register/user', UserController.create)  //create User
route.put('/update/user', UserController.update)    //update User

route.post('/register/file', FileController.create)  //create File
route.put('/update/file', FileController.update)    //update File


module.exports = route