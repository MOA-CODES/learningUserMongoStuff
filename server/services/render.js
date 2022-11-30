const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    res.render('index')
    // res.render('mainadmin') //test
}

exports.login = (req, res)=>{
    res.render('login')
}

exports.info = (req, res)=>{
    // res.render('info')
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        res.render("info",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.admissions = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    .then(function(response){
        res.render("admissions",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.viewsteps = (req, res)=>{
    res.render('viewsteps')
}

exports.welfare = (req, res)=>{
    res.render('Welfare')
}

exports.map = (req, res)=>{
    res.render('Map')
}

exports.studact = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    .then(function(response){
        res.render("studAct",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.housing = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    .then(function(response){
        res.render("housing",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.itpage = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    .then(function(response){
        res.render("IT",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.health = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        res.render("health",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.finance = (req, res)=>{
    // res.render('finance')
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        res.render("finance",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.congrats = (req, res)=>{
    res.render('congrats')
}



exports.ooactivities = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('ooactivities', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.ooadmissions = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('ooadmissions', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.oofinance = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('oofinance', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })

}

exports.oohealth = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('oohealth', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.oohousing = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('oohousing', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.ooit = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('ooit', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.ooleader = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('ooleader', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.mainadmin = (req, res)=>{
    res.render('mainadmin')
}

exports.adminfiles = (req, res)=>{
    res.render('adminfiles')
}

exports.adminroles = (req, res)=>{
    axios.get('http://localhost:3001/api/role/retrieve')
    .then(function(response){
        res.render('adminroles', {roles:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminusers = (req, res)=>{
    axios.get('http://localhost:3001/api/user/retrieve')
    .then(function(response){
        res.render('adminusers', {users:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.mainadmin1 = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('mainadmin1', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.reportadmissions = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('reportadmissions', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.reporthealth = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('reporthealth', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.reporthousing = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('reporthousing', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.reportstudAct = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('reportstudAct', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.report = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve')
    .then(function(response){
        res.render('report', {students:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}







exports.oofin_update = (req, res)=>{
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        console.log(req.query.StudID);
        console.log(response.data);
        res.render("oofin_upd",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.ooit_update = (req, res)=>{

    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        console.log(req.query.StudID);
        console.log(response.data);
        res.render("ooit_upd",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.oohouse_update = (req, res)=>{

    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        console.log(req.query.StudID);
        console.log(response.data);
        res.render("oohouse_upd",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.oohealth_update = (req, res)=>{

    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        console.log(req.query.StudID);
        console.log(response.data);
        res.render("oohealth_upd",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.ooactivities_update = (req, res) => {

    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        console.log(req.query.StudID);
        console.log(response.data);
        res.render("ooactivities_upd",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })


}

exports.ooadmissions_update= (req, res) => {
    axios.get('http://localhost:3001/api/student/retrieve',{params:{StudID:req.query.StudID}})
    
    .then(function(response){
        console.log(req.query.StudID);
        console.log(response.data);
        res.render("ooadmission_upd",{stud:response.data})
    })
    .catch(err=>{
        res.send(err);
    })


}


exports.adduserform = (req, res) => {
    res.render("addUser")
}







