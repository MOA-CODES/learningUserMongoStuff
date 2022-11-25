const express = require('express')
const route = express.Router()
const multer = require('multer') 
const path = require('path')


const services = require('../services/render')


const AuthController = require('../controller/AuthController')

const StudController = require('../controller/StudController')
const RoleController = require('../controller/RoleController')
const UserController = require('../controller/UserController')
const FileController = require('../controller/FileController')




//connecting pages
route.get('/',services.homeRoutes);
route.get('/login',services.login);
route.get('/info',services.info);
route.get('/admissions',services.admissions);
route.get('/viewsteps',services.viewsteps);
route.get('/welfare',services.welfare);
route.get('/studAct',services.studact);
route.get('/housing',services.housing);
route.get('/health',services.health);
route.get('/finance',services.finance);
route.get('/congrats',services.congrats);

route.get('/mainadmin', services.mainadmin);
route.get('/ooactivities',services.ooactivities);
route.get('/ooadmissions',services.ooadmissions);
route.get('/oofinance',services.oofinance);
route.get('/oohealth',services.oohealth);
route.get('/oohousing',services.oohousing);
route.get('/ooit',services.ooit);

route.get('/update-ooadmissions',services.oofin_update);



//api
route.post('/api/user/login2', AuthController.login2)               //login user
// route.get('/api/user/login2', AuthController.login2)               //login user

route.post('/api/student/register',StudController.create)  //create student
route.put('/api/student/update', StudController.update)    //update student
route.put('/api/student/update/:id', StudController.update2)    //update student

route.post('/api/student/filter', StudController.filter)    //update student

route.get('/api/student/retrieve',StudController.retrieve) //retrieve student
route.get('/api/student/retrieve2',StudController.retrieve2) //retrieve student

route.post('/api/student/total', StudController.StudTotal)    //total student

route.post('/api/student/totalAdmin', StudController.StudAdminvr)    //total student Admin verified
route.post('/api/student/totalFinance', StudController.StudFinancevr)    //total student Admin verified
route.post('/api/student/totalHousing', StudController.StudHousingvr)    //total student Admin verified
route.post('/api/student/totalIt', StudController.StudItvr)    //total student Admin verified
route.post('/api/student/totalHealth', StudController.StudHealthvr)    //total student Admin verified
route.post('/api/student/totalAct', StudController.StudActvr)    //total student Admin verified

route.post('/api/student/totalSEmail', StudController.totalSEmail)    //total student Admin verified
route.post('/api/student/totalOpenerp', StudController.totalOpenerp)    //total student Admin verified


route.post('/api/student/Adminstat', StudController.StudAdminStatus)    //student Admin verified status
route.post('/api/student/Financestat', StudController.StudFinanceStatus)    //student Admin verified status
route.post('/api/student/Housingstat', StudController.StudHousingStatus)    //student Admin verified status
route.post('/api/student/Itstat', StudController.StudItStatus)    //student Admin verified status
route.post('/api/student/Healthstat', StudController.StudHealthStatus)    //student Admin verified status
route.post('/api/student/Actstat', StudController.StudactStatus)    //student Admin verified status

route.post('/api/student/SEmailstat', StudController.SEmailStatus)    //student Admin verified status
route.post('/api/student/Openerpstat', StudController.OpenerpStatus)    //student Admin verified status




route.post('/api/role/register', RoleController.create)  //create Role
route.put('/api/role/update', RoleController.update)    //update Role

route.post('/api/user/register', UserController.create)  //create User
route.put('/api/user/update', UserController.update)    //update User

const storage = multer.diskStorage({
	destination: "./files/",
	filename: function (req, file, cb) {
	  cb(
		null,
		file.fieldname + "-" + Date.now() + path.extname(file.originalname)
	  );
	},
});

const upload = multer({
	storage: storage
});


route.post('/api/file/register', upload.single("file"), FileController.create)  //create File
route.post('/api/file/register', upload.array("files"), FileController.create)  //create Files


route.put('/api/file/update', FileController.update)    //update File


module.exports = route