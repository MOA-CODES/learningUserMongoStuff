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
    res.render('studAct')
}

exports.housing = (req, res)=>{
    res.render('housing')
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
    res.render('health')
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
    res.render('ooactivities')
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
    res.render('oohealth')
}

exports.oohousing = (req, res)=>{
    res.render('oohousing')
}

exports.ooit = (req, res)=>{
    res.render('ooit')
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







