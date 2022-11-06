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
    SchoolID :{
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
    Healthvr :{
        type: Boolean
    },
    Studactvr :{
        type: Boolean
    }
},)


const Student = mongoose.model('Student', studentSchema)//in mongodb this schema will be chaged to students

module.exports = Student