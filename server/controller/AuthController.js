const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const bodyparser = require('body-parser')
const passport = require('passport')
const router = require('../routes/router')


// import {generateAccessToken, respond, authenticate} from '../middleware/authmiddleware' 
// const {generateAccessToken, respond, authenticate} = require('../middleware/authmiddleware')
// exports.loginOriginal = (req, res, next) =>{
//     var username = req.body.username
//     var password = req.body.password

//     User.findOne({$or: [{email: username},{phone: username}]}) //how does this make sense? //okay it checks if anyine submit email or phone as username
//     .then(user =>{
//         if(user){
//             bcrypt.compare(password, user.password, function(err, result){
//                 if(err){
//                     res.json({
//                         error: err
//                     })
//                 }
//                 if(result){
//                     let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
//                     res.json({
//                         message: 'Login Successful!',
//                         token
//                     })
//                 }else{
//                     res.json({
//                         message: 'Password does not match!'
//                     })
//                 }
//             })

//         }else{ 
//             // errors.email = "User not found";
//             // res.status(404).json({ errors });// stop further execution in this callback
//             // return;
//             res.json({
//                 message:'No user found!'
//             })
//             // return;
//         }
//     })
// }

exports.login = (req, res, next) =>{
    if (!req.body) {
        res.status(400).send({ message: "Please enter some filter parameters!" })
        return;
    }
    var id = req.body.User_id
    var password = req.body.password

    User.find({User_id: id}) 
     .then(user =>{
        if(!user){
            res.status(404).send({message:`user not found!`})
        }else{
            if(user.password == password){
                res.send("Logged in")
            }
        }
       
    }).catch((err)=>{
        console.log(err);
    });
}

exports.login2 = (req, res, next) =>{
    if (!req.body) {
        res.status(400).send({ message: "Please enter some filter parameters!" })
        return;
    }
    var id = req.body.User_id
    var password = req.body.password

    User.findOne({User_id: id}, function(err, user){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            // console.log(user.password);
            if(user.password==password){
                console.log("Logged in ")
                res.send("Logged in")
                // res.redirect("/admissions");
            }else{
                console.log("Wrong credentials");
                res.send("Wrong credentials");
            }
        }
    }).catch((err)=>{
        console.log(err);
    });
   
}

exports.filter = async (req, res) => { //because i do .then i didnt use async
    if (!req.body) {
        res.status(400).send({ message: "Please enter some filter parameters!" })
        return;
    }


    // const { paymentPlan, Housing } = req.body;
    const students = await Student.find({ ...req.body });
    // const students = await Student.find({ ...req.body }); WHAtever is passed in req.body it used it to search

    return res.status(200).send({ students });}
