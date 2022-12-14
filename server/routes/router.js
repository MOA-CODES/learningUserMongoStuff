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
route.get('/itstage',services.itpage);
route.get('/congrats',services.congrats);
route.get('/Map',services.map);


route.get('/mainadmin', services.mainadmin);
route.get('/ooactivities',services.ooactivities);
route.get('/ooadmissions',services.ooadmissions);
route.get('/oofinance',services.oofinance);
route.get('/oohealth',services.oohealth);
route.get('/oohousing',services.oohousing);
route.get('/ooit',services.ooit);
route.get('/ooleader',services.ooleader);

route.get('/adminfiles',services.adminfiles);
route.get('/adminroles',services.adminroles);
route.get('/adminusers',services.adminusers);
route.get('/mainadmin1',services.mainadmin1);


route.get('/update-oofin',services.oofin_update);
route.get('/update-ooadmissions',services.ooadmissions_update);
route.get('/update-ooit',services.ooit_update);
route.get('/update-oohousing',services.oohouse_update);
route.get('/update-oohealth',services.oohealth_update);
route.get('/update-ooactivities',services.ooactivities_update);

route.get('/report', services.report);
route.get('/reportadmissions', services.reportadmissions);
route.get('/reporthousing', services.reporthousing);
route.get('/reportstudAct', services.reportstudAct);
route.get('/reporthealth', services.reporthealth);

route.get('/adduserform', services.adduserform);
route.get('/addroleform', services.addroleform);

route.get('/updaterole', services.updaterole);
route.get('/updatestudent', services.updatestudent);
route.get('/updateuser', services.updateuser);

route.get('/complete', services.complete);
route.get('/complete2', services.complete2);

route.get('/ooadmissionfiles', services.ooadmissionfiles);


//api
route.post('/api/user/login2', AuthController.login2)               //login user
// route.get('/api/user/login2', AuthController.login2)               //login user

route.post('/api/student/register',StudController.create)  //create student
route.put('/api/student/update', StudController.update)    //update student
route.put('/api/student/update/:id', StudController.update2)    //update student

route.post('/api/student/filter', StudController.filter)    //update student

route.get('/api/student/retrieve',StudController.retrieve) //retrieve student

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
route.get('/api/role/retrieve', RoleController.retrieve)    //retrieve Role


route.post('/api/user/register', UserController.create)  //create User
route.put('/api/user/update', UserController.update)    //update User
route.get('/api/user/retrieve', UserController.retrieve)    //retrieve User


const storage = multer.diskStorage({
	destination: "./files/",
	filename: function (req, x, cb) {
	  cb(
		null,
		x.fieldname + "-" + Date.now() + path.extname(x.originalname)
	  );
	},
});

const upload = multer({
	storage: storage
});

route.post('/api/file/register', 
	upload.fields([{
			name: 'Jamb', maxCount: 1
		}, {
			name: 'Waec', maxCount: 1
		}, {
			name: 'Passport', maxCount: 1
		},{
			name: 'Pic_Passport', maxCount: 1
		},{
			name: 'Transcript', maxCount: 1
		},{
			name: 'Rec_letter', maxCount: 1
		},{
			name: 'P_essay', maxCount: 1
		},]
	),
  
  FileController.create)  //create File

route.put('/api/file/update', FileController.update)    //update File
route.get('/api/file/retrieve', FileController.retrieve)    //retrieve Role



module.exports = route;