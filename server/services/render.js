const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    res.render('index')
}

exports.login = (req, res)=>{
    res.render('login')
}
