const express = require('express')
const route = express.Router()

const services = require('../services/render')


const AuthController = require('../controller/AuthController')

const StudController = require('../controller/StudController')
const RoleController = require('../controller/RoleController')
const UserController = require('../controller/UserController')
const FileController = require('../controller/FileController')

//connecting pages
route.get('/',services.homeRoutes);
route.get('/login',services.login);




//api
route.post('/user/login2', AuthController.login)               //login user

// router.post('/register/student',upload.upload.single('image'),StudController.create)  //create student
route.post('/student/register',StudController.create)  //create student
route.put('/student/update', StudController.update)    //update student
route.post('/student/filter', StudController.filter)    //update student

route.post('/student/total', StudController.StudTotal)    //total student

route.post('/student/totalAdmin', StudController.StudAdminvr)    //total student Admin verified
route.post('/student/totalFinance', StudController.StudFinancevr)    //total student Admin verified
route.post('/student/totalHousing', StudController.StudHousingvr)    //total student Admin verified
route.post('/student/totalIt', StudController.StudItvr)    //total student Admin verified
route.post('/student/totalHealth', StudController.StudHealthvr)    //total student Admin verified
route.post('/student/totalAct', StudController.StudActvr)    //total student Admin verified

route.post('/student/Adminstat', StudController.StudAdminStatus)    //student Admin verified status
route.post('/student/Financestat', StudController.StudFinanceStatus)    //student Admin verified status
route.post('/student/Housingstat', StudController.StudHousingStatus)    //student Admin verified status
route.post('/student/Itstat', StudController.StudItStatus)    //student Admin verified status
route.post('/student/Healthstat', StudController.StudHealthStatus)    //student Admin verified status
route.post('/student/Actstat', StudController.StudactStatus)    //student Admin verified status

route.post('/student/SEmailstat', StudController.SEmailStatus)    //student Admin verified status
route.post('/student/Openerpstat', StudController.OpenerpStatus)    //student Admin verified status




route.post('/role/register', RoleController.create)  //create Role
route.put('/role/update', RoleController.update)    //update Role

route.post('/user/register', UserController.create)  //create User
route.put('/user/update', UserController.update)    //update User

route.post('/file/register', FileController.create)  //create File
route.put('/file/update', FileController.update)    //update File


module.exports = route