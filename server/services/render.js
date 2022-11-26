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
    res.render('admissions')
}

exports.viewsteps = (req, res)=>{
    res.render('viewsteps')
}

exports.welfare = (req, res)=>{
    res.render('Welfare')
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



exports.mainadmin = (req, res)=>{
    res.render('mainadmin')
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
    res.render('ooadmissions')
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






