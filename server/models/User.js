const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//user
const userSchema = new Schema({
    User_id :{
        type: String,
        unique: true,
    },
    name :{
        type: String
    },
    password :{
        type: String
    },
    Role_id :{
        type: String
    }
},{timestamps: true});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema)//in mongodb this schema will be chaged to users

module.exports = User


