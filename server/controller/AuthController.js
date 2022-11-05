const User = require('../models/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err){
            res.json({
                error: err
            })
        }

        let user = new User ({
            name: req.body.name,
            email:req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
        .then(user=>{
            res.json({
                message: 'User Added Succesfully!'
    
            })
        })
        .catch(error =>{
            res.json({
                message: 'An erro occured!'
            })
        })
    })
}

exports.login = (req, res, next) =>{
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email: username},{phone: username}]}) //how does this make sense? //okay it checks if anyine submit email or phone as username
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful!',
                        token
                    })
                }else{
                    res.json({
                        message: 'Password does not match!'
                    })
                }
            })

        }else{ 
            // errors.email = "User not found";
            // res.status(404).json({ errors });// stop further execution in this callback
            // return;
            res.json({
                message:'No user found!'
            })
            // return;
        }
    })
}

