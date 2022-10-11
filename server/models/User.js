const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name :{
        type: String
    },
    email :{
        type: String
    },
    Phone :{
        type: String
    },
    password :{
        type: String
    }
},{timestamps: true})


const User = mongoose.model('User', userSchema)//in mongodb this schema will be chaged to users

module.exports = User