const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    res.render('index')
}

exports.login = (req, res)=>{
    res.render('login')
}

exports.info = (req, res)=>{
    res.render('info')
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

exports.health = (req, res)=>{
    res.render('health')
}

exports.finance = (req, res)=>{
    res.render('finance')
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
    res.render('oofinance')
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







