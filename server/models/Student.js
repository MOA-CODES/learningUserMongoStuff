const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//student
const studentSchema = new Schema({
    StudID :{
        type: String,
        unique: true,
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
    Gender :{
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
    Phonenumber :{
        type: String
    },  
    ArrivalDate :{
        type: String
    },
    GuardianName :{
        type: String
    },
    GaurdianRel :{
        type: String
    },
    PaymentPlan:{
        type: String
    },
    SchoolEmail :{
        type: Boolean,
        default: false,
    },
    OpenerpStatus :{
        type: Boolean,
        default: false,
    },
    HousingType :{
        type: String
    },
    MealPlan :{
        type: String
    },
    HousingType :{
        type: String
    },
    DOB :{
        type: String
    },
    Nationality :{
        type: String
    },
    BG :{
        type: String
    },
    GT :{
        type: String
    },
    MaritalStatus :{
        type: String
    },
    DateReg :{
        type: String
    },
    MedicalCond :{
        type: String
    },
    Parentname :{
        type: String
    },
    ParentRel :{
        type: String
    },
    ParentAddress :{
        type: String
    },
    ParentPhone :{
        type: String
    },
    Faith :{
        type: String
    },
    AcademicInt :{
        type: String
    },
    SportsClub :{
        type: String
    },
    Hobbies :{
        type: String
    },
    GovClubs :{
        type: String
    },
    Adminvr :{
        type: Boolean,
        default: false,
    },
    Allergies :{
        type: String
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