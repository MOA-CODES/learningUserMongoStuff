const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//user
const userSchema = new Schema({
    name :{
        type: String
    },
    email :{
        type: String
    },
    phone :{
        type: String
    },
    password :{
        type: String
    },
    role :{
        type: mongoose.Schema.Types.ObjectId, ref: 'Role'
    }
},{timestamps: true})


const User = mongoose.model('User', userSchema)//in mongodb this schema will be chaged to users

module.exports = User


