const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//student
const studentSchema = new Schema({
    StudID :{
        type: String
    },
    Firstname :{
        type: String
    },
    Middlename :{
        type: String
    },
    Lastname :{
        type: String
    },
    Major :{
        type: String
    },
    Address :{
        type: String
    },
    Personalemail :{
        type: String
    },
    SchoolEmail :{
        type: String
    },
    Phone :{
        type: String
    },
    Adminvr :{
        type: Boolean,
        default: false,
    },
    Financevr :{
        type: Boolean,
        default: false,
    },
    Housingvr :{
        type: Boolean,
        default: false,
    },
    Itvr :{
        type: Boolean,
        default: false,
    },
    Healthvr :{
        type: Boolean,
        default: false,
    },
    Studactvr :{
        type: Boolean,
        default: false,
    }
},)


const Student = mongoose.model('Student', studentSchema)//in mongodb this schema will be chaged to students

module.exports = Student