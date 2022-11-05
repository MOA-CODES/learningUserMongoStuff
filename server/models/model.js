const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname :{
        type: String
    },
    Middlename :{
        type: String
    },
    lastname :{
        type: String
    },
    Major :{
        type: String
    },
    SchoolID :{
        type: String
    },
    email :{
        type: String
    },
    SchoolEmail :{
        type: String
    },
    phone :{
        type: String
    },
    Adminvr :{
        type: Boolean
    },
    Financevr :{
        type: Boolean
    },
    Housingvr :{
        type: Boolean
    },
    Itvr :{
        type: Boolean
    },
    Studactvr :{
        type: Boolean
    },

},{timestamps: true})


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
    }
},{timestamps: true})

const roleSchema = new Schema({
    name:{
        type: String
    }
})


const User = mongoose.model('User', userSchema)//in mongodb this schema will be chaged to users

const Role = mongoose.model('Role', roleSchema)//in mongodb this schema will be chaged to roles

const Student = mongoose.model('Student', studentSchema)//in mongodb this schema will be chaged to students

module.exports = Student

module.exports = Role

module.exports = User